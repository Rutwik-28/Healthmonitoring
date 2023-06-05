import React, { useState } from "react";
import jsPDF from "jspdf";
import letterheadImage from "./letterhead.jpg";
import "./patientform.css";

const Form = () => {
  const [lifestyleChanges, setLifestyleChanges] = useState("");
  const [prescription, setPrescription] = useState("");
  const [email, setEmail] = useState("");

  const handleLifestyleChangesChange = (e) => {
    setLifestyleChanges(e.target.value);
  };

  const handlePrescriptionChange = (e) => {
    setPrescription(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendClick = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Load the letterhead image
    const img = new Image();
    img.src = letterheadImage;

    img.onload = () => {
      // Set the image as the background of the first page
      doc.addImage(
        img,
        "JPEG",
        0,
        0,
        doc.internal.pageSize.getWidth(),
        doc.internal.pageSize.getHeight()
      );

      // Set the content of the PDF
      const content = `
        Lifestyle Changes:
        ${lifestyleChanges}

        Prescription:
        ${prescription}
      `;

      // Add the content to the PDF
      doc.setFontSize(12);
      doc.text(content, 20, 100);

      // Save the PDF as a file with the doctor's email as the filename
      doc.save(`${email}_prescription.pdf`);
    };
  };

  return (
    <div>
      <div>
        <label htmlFor="lifestyle-changes">Lifestyle Changes:</label>
        <textarea
          id="lifestyle-changes"
          value={lifestyleChanges}
          onChange={handleLifestyleChangesChange}
          rows={5}
        />
      </div>
      <div>
        <label htmlFor="prescription">Prescription:</label>
        <textarea
          id="prescription"
          value={prescription}
          onChange={handlePrescriptionChange}
          rows={5}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
};

export default Form;
