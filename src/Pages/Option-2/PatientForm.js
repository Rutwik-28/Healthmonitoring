import React, { useState } from "react";
import jsPDF from "jspdf";
import letterheadImage from "./letterhead.jpg";
import patients from "./patients.json";
import "./patientform.css";

const Form = () => {
  const [selectedPatientId, setSelectedPatientId] = useState("");
  const [selectedLifestyleChanges, setSelectedLifestyleChanges] = useState([]);
  const [prescription, setPrescription] = useState("");
  const [email, setEmail] = useState("");
  const handlePatientSelect = (event) => {
    setSelectedPatientId(event.target.value);
  };

  const handleLifestyleChangeToggle = (event) => {
    const selectedChange = event.target.value;
    if (selectedLifestyleChanges.includes(selectedChange)) {
      setSelectedLifestyleChanges(
        selectedLifestyleChanges.filter((change) => change !== selectedChange)
      );
    } else {
      setSelectedLifestyleChanges([
        ...selectedLifestyleChanges,
        selectedChange,
      ]);
    }
  };

  const handlePrescriptionChange = (event) => {
    setPrescription(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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

      // Get the selected patient from the patients array
      const selectedPatient = patients.find(
        (patient) => patient.id === selectedPatientId
      );

      // Set the content of the PDF
      const content = `
        Patient Name: ${selectedPatient?.name}
        
        Lifestyle Changes:
        ${selectedLifestyleChanges.join(", ")}
        
        Prescription:
        ${prescription}
      `;

      // Add the content to the PDF
      doc.setFontSize(12);
      doc.text(content, doc.internal.pageSize.getWidth() / 2, 100, {
        align: "center",
      });

      // Save the PDF as a file with the doctor's email as the filename
      doc.save(`${email}_prescription.pdf`);
    };
  };

  // Predefined lifestyle changes options
  const lifestyleChangesOptions = [
    "Exercise for 30 minutes daily",
    "Eat a balanced diet",
    "Get enough sleep",
    "Drink plenty of water",
    "Reduce stress through meditation or relaxation techniques",
  ];

  // Predefined medicine options
  const medicineOptions = [
    { name: "Tablet", dosage: "1 tablet", frequency: "Once a day" },
    { name: "Capsule", dosage: "1 capsule", frequency: "Twice a day" },
    { name: "Liquid", dosage: "10 ml", frequency: "Three times a day" },
  ];

  return (
    <div>
      <div>
        <label htmlFor="patient-select">Select a patient:</label>
        <select id="patient-select" onChange={handlePatientSelect}>
          <option value="">Select</option>
          {patients?.map((patient) => (
            <option key={patient.id} value={patient.id}>
              {patient.name}
            </option>
          ))}
        </select>
      </div>
      {selectedPatientId && (
        <div>
          <div>
            <label htmlFor="lifestyle-changes">Lifestyle Changes:</label>
            {lifestyleChangesOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`lifestyle-change-${index}`}
                  value={option}
                  onChange={handleLifestyleChangeToggle}
                  checked={selectedLifestyleChanges.includes(option)}
                />
                <label htmlFor={`lifestyle-change-${index}`}>{option}</label>
              </div>
            ))}
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
            <label htmlFor="medicine">Medicine:</label>
            <select id="medicine">
              <option value="">Select Medicine</option>
              {medicineOptions.map((option, index) => (
                <option key={index} value={option.name}>
                  {option.name} - {option.dosage} - {option.frequency}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
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
