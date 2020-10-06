import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
// import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

import ff from './samp.pdf'
import { Document, Page , pdfjs} from 'react-pdf';
import Sample from './samp';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  

  return (
    <div>
      <Document
        file={ff}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <Sample />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     backgroundColor: '#E4E4E4',


//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,

//   }
// });

// // Create Document Component
// const MyDocument = () => (

//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>

//         <Text>Section #1</Text><Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//         <Text>kjsdhfkjdhskfhdsjfhdjk</Text>
//       </View>
//     </Page>
//   </Document>

// )


// const Apsp = () => {
//   return (
//     <div style={{  height:"100vh", backgroundColor:"grey"}}>

//       <PDFViewer height="90%" width="90%" >
//         <MyDocument />
//       </PDFViewer>
//     </div>
//   )
// }