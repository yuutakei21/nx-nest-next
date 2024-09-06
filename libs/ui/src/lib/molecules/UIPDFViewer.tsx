'use client';

import Box from '@mui/material/Box';
import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const options = {
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
};

function PDFViewer({ file }: { file: File }) {
  const [totalPages, setTotalPages] = useState(0);

  return (
    <Document
      file={file}
      onLoadSuccess={({ numPages }) => setTotalPages(numPages)}
      loading="ファイルを読み込み中"
      options={options}
    >
      {
        // eslint-disable-next-line prefer-spread
        Array.apply(null, Array(totalPages))
          .map((x, i) => i + 1)
          .map((page) => (
            <Box marginY={2}>
              <Page pageNumber={page} />
            </Box>
          ))
      }
    </Document>
  );
}

export default PDFViewer;
