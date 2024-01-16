import { useContext, useRef } from 'react';
import { RaceContext } from '../App';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const PDFDocument = () => {
  const {
    race, origin, gender, selectedCareerName, name, firstname, age, height, weight, eyeColor, hairColor, birthplace, siblings, marks, astral, choosenPortrait } = useContext(RaceContext);

    const canvasRef = useRef(null);

    const portraitPath = './portraits/';
    const portraitToExport = portraitPath+choosenPortrait;
    const backgroundToExport = './background/back-old-parchment.webp';
  
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
      pdf.setFontSize(16);

      pdf.addImage(backgroundToExport, 'WEBP', 0, 0, 210, 297);
      pdf.addImage(portraitToExport, 'WEBP', 100, 10, 50, 50)

      const profilLines = [`Prénom: ${firstname}`, `Nom: ${name}`, `Race: ${race}`];

      const careerLine = [`Carrière : ${selectedCareerName}`];
      const infoLines = [`Age : ${age} ans` ,`Taille : ${height} m` ,`Poids : ${weight} kg` ,`Yeux : ${eyeColor}` ,`Cheveux : ${hairColor}` , `Lieu de naissance : ${birthplace}`, `Nb de frères et soeurs : ${siblings}`, `Signes distinctifs : ${marks}`, `Signe astral : ${astral}`];

      addMultipleLines(pdf, profilLines, 10, verticalPosition, lineHeight);
      if (race === 'humain') {
        pdf.text(`Origine: ${origin}`, 10, 50);
      }
      pdf.text(careerLine, 100, 70);

      pdf.setFontSize(8);

      addMultipleLines(pdf, infoLines, 10, 60, lineHeight-5);

      pdf.autoTable({ html: '#profil-stats', theme: 'grid', margin: {top: 80, left: 70}, headStyles: {
        fillColor: [120,61,15],
      }});
      pdf.autoTable({ html: '#profil-secondary-stats', theme: 'grid', margin: {left: 70}, headStyles: {
        fillColor: [120,61,15],
      }});
  
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