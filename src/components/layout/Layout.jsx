import React from 'react'
import Head from "next/head"
const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>XML</title>
            </Head>
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: "150px" }}
                alt="logo"
            />
            <div className="container shadow pt-3 mt-2 bg-white rounded" style={{ minHeight: '90vh', wordWrap: 'break-word' }} >
                {children}
            </div> 
        </>
    )
}

export default Layout