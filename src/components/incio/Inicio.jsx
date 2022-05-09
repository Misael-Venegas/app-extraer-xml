import { PDFViewer } from '@react-pdf/renderer/lib/react-pdf.browser.cjs'
import React, { useState } from 'react'
import Layout from "../layout/Layout"
import CrearPdf from '../../../pdf/CrearPdf'
import { Button } from 'antd'
const Inicio = () => {

    const [arrayTexto, setArrayTexto] = useState([])

    const readFile = (e) => {

        let lecturas = [];
        const archivos = e.target.files;
        if (!archivos.length) return;

        for (let index = 0; index < archivos.length; index++) {
            lecturas.push(extraerInfo(archivos[index]))
        }
        Promise.all(lecturas).then((values) => {
            setArrayTexto(values);
        })
    }



    const extraerInfo = (archivo) => {

        return new Promise(function (resolve, reject) {
            let fr = new FileReader();
            fr.onload = function () {
                resolve(fr.result)
            }
            fr.onerror = function () {
                reject(fr);
            };

            fr.readAsText(archivo);
        }
        )

    }


    return (
        <>
            <Layout>
                <div className='divDrag'>
                    <input type="file" multiple={true} accept='.xml' onChange={readFile} className="ant-btn ant-btn-default" />
                    <br /><br />

                    <Button onClick={extraerInfo} type='primary' >extraer</Button>
                    <br />
                    <br />
                    {
                        arrayTexto.length > 0 && <PDFViewer style={{ width: "100%", height: "95vh" }} >
                            <CrearPdf array={arrayTexto} />
                        </PDFViewer>
                    }
                </div>
            </Layout>
        </>


    )
}

export default Inicio