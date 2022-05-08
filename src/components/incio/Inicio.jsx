import React, { useState } from 'react'
import Layout from "../layout/Layout"
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
                <input type="file" multiple={true} accept='.xml' onChange={readFile} />
                <button onClick={extraerInfo} >extraer</button>

                {
                    arrayTexto && arrayTexto.map((txt, key) => {
                        return (
                            <div key={key} >
                                <p> {txt} </p>
                            </div>
                        )
                    })
                }

            </Layout>
        </>


    )
}

export default Inicio