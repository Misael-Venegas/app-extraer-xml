import React, { useState } from 'react'

const Inicio = () => {
    const [texto, settexto] = useState("")
    const readFile = (e) => {
        const archivo = e.target.files[0];
        if (!archivo) return;
        console.log(archivo)
        const fileReader = new FileReader();
        fileReader.readAsText(archivo)
        fileReader.onload = () => {
            settexto(fileReader.result);
        }

        fileReader.onerror = () => {
            console.log(fileReader.error)
        }

     
    }

    const extraerInfo = () =>{
        console.log(texto)
    }
    return (
        <div className='divContenedor'>
            <input type="file" accept='.xml' onChange={readFile} />
            <button onClick={extraerInfo} >extraer</button>
            <div style={{ width: "50% ", height: "50%" }}>
                <p> {texto} </p>
            </div>

        </div>
    )
}

export default Inicio