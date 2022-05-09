import React, { useEffect } from 'react'
import { Document, View, Text, Page } from '@react-pdf/renderer/lib/react-pdf.browser.cjs'
const CrearPdf = ({ array }) => {
    console.log(array)
    return (
        <Document>

            {
                array && array.map((text, key) => {
                    return (
                        <Page size='A4' key={key} >
                            <View style={{ padding: 20, wordWrap: 'break-word', fontSize: "12px" }}>
                                <Text style={{ margin: 20,  textAlign: "justify"}} >
                                    {text}
                                </Text>
                            </View>
                        </Page>
                    )
                })
            }

        </Document>

    )
}

export default CrearPdf