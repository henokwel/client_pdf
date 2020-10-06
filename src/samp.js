
import React, { useState } from 'react';

import 'react-pdf/src/Page/AnnotationLayer.css';
import ff from './samp.pdf'
import { Document, Page, pdfjs } from 'react-pdf';
import './samp.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Sample extends React.Component {
    state = {
        file: ff,
        pageNumber: 1,
    }

    onFileChange = (event) => {
        this.setState({
            file: event.target.files[0],
        });
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }
    handleCHange = () => {
        this.setState({ pageNumber: this.state.pageNumber + 1 })
        console.log('CLick');
        
          
    }

    render() {
        const { file, pageNumber } = this.state;

        return (
            <div className="Example">

                <header>
                    <h1>react-pdf sample page</h1>
                </header>
                <div className="Example__container">
                    <div className="Example__container__load">
                        <label htmlFor="file">Load from file:</label>
                        {' '}
                        <input
                            onChange={this.onFileChange}
                            type="file"
                        />
                    </div>
                    <div className="Example__container__document">
                        <Document
                            file={file}
                            onLoadSuccess={this.onDocumentLoadSuccess}

                        >
                            <Page

                                pageNumber={pageNumber}
                            />

                        </Document>

                        {/* <button onClick={() => this.setState(prevState => ({ numPages: prevState.numPages + 1 }))}>
Next page
</button> */}
                        <button onClick={ this.handleCHange}>  Next page</button>
                    </div>
                </div>
            </div>
        );
    }
}