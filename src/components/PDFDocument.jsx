import { useContext, useRef } from 'react';
import { RaceContext } from '../App';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PDFDocument = () => {

  const { race, origin, gender, career, name, firstname, age, height, weight, eyeColor, hairColor, birthplace, siblings, marks, astral, choosenPortrait } = useContext(RaceContext);
  const portraitPath = './portraits-PDF/';

  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio / 2);
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('character.pdf');
    });


  };

  return (

    <>
      <div ref={pdfRef}>
        {/* <img src={portraitPath+choosenPortrait} alt="" /> */}
        <p>Prénom : {firstname}</p>
        <p>Nom : {name}</p>
        <p>Race : {race}</p>
        <p>{origin}</p>
      </div>  
      <button onClick={downloadPDF}>Télécharge le PDF</button>
    </>
  )

};

export default PDFDocument;