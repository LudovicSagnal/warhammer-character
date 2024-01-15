import { useContext, useRef } from 'react';
import { RaceContext } from '../App';
import jsPDF from 'jspdf';

const PDFDocument = () => {
  const {
    race, origin, gender, selectedCareerName, name, firstname, age, height, weight, eyeColor, hairColor, birthplace, siblings, marks, astral, choosenPortrait } = useContext(RaceContext);

    const canvasRef = useRef(null);

    const PNGPortrait = choosenPortrait.replace(/\.webp$/, '.png');
    const portraitPath = './portraits-PDF/';
    const portraitToExport = portraitPath+PNGPortrait;
  
    const addMultipleLines = (pdf, lines, x, y, lineHeight) => {
      lines.forEach((line) => {
        pdf.text(line, x, y);
        y += lineHeight;
      });
    };
  
    const downloadPDF = () => {
      const pdf = new jsPDF();
      const lineHeight = 10;
      let verticalPosition = 20;
  
      pdf.setFont('helvetica');
      pdf.setFontSize(12);

      pdf.addImage(portraitToExport, 'PNG', 100, 10, 50, 50, 'portrait', 'MEDIUM', 0)
  
      const lines = [`Prénom: ${firstname}`, `Nom: ${name}`, `Race: ${race}`, `Origine: ${origin}`,`Age : ${age} ans` ,`Taille : ${height} m` ,`Poids : ${weight} kg` ,`Yeux : ${eyeColor}` ,`Cheveux : ${hairColor}` , `Carrière : ${selectedCareerName}`];
  
      addMultipleLines(pdf, lines, 20, verticalPosition, lineHeight);
  
      pdf.save(`${firstname}-${name}.pdf`);
    };
  
    return (
      <>
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        <button onClick={downloadPDF}>Télécharge le PDF</button>
      </>
    );
  };
  
  export default PDFDocument;