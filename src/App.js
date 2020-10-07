import React from 'react'
import "./App.css"
import Pdf_viewer from './Components/Pdf_viewer'
import file from './Assets/samp.pdf'

export default function App() {

  return (
    <div className="App">

      <section className="demo_Container">
        <article>
          {/*  Descption of package an use */}
          <div className="about_">
            <h1>Display Pdf's in React</h1>
            <p>This package enbale you to be able display any pdf in you React App</p>
          </div>
          {/* Links to Source Code and releveant articlar */}
          <div>

          </div>
        </article>

        <div className="demo">
          <Pdf_viewer file={file} />
          <div>
            <h1>Controller</h1>
          </div>
        </div>
      </section>

      <section className="demo_Container">
        <article >
          <h1>1.2</h1>
        </article>
        <div className="demo">

        </div>
      </section>
    </div>
  )
}
