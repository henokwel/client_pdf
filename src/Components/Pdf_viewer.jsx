import React, { useEffect, useRef, useState } from 'react'
import { Document, Page } from 'react-pdf'
import '../Styles/Pdf_viewer.css'

// import 'react-pdf/src/Page/AnnotationLayer.css';

export default function Pdf_viewer(props) {
    const [file, setFile] = useState(null)
    const [pageNumer, setPageNr] = useState(1)
    const [numPages, setNumPages] = useState(null);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    useEffect(() => {
        console.log(props);
        setFile(props.file)


    }, [props])
    return (
        <div className="Example__container__document">
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page

                    pageNumber={pageNumer}
                />
            </Document>
            <p>{pageNumer} / {numPages}</p>

        </div>
    )
}
