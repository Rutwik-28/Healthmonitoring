import React, { useState } from "react";
import jsPDF from "jspdf";
import data from "./patients.json";
import "./conditionCard.css";

const ConditionCards = () => {
  const [newsletterContent, setNewsletterContent] = useState("");

  const getCoughCount = () => {
    return data.reduce((count, patient) => {
      if (patient.metrics.feverHistory === "Yes") {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const getColdCount = () => {
    return data.reduce((count, patient) => {
      if (patient.metrics.chills) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const getObesityCount = () => {
    return data.reduce((count, patient) => {
      if (patient.metrics.bmi >= 30) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const getRespiratoryDisorderCount = () => {
    return data.reduce((count, patient) => {
      if (patient.metrics.respiratoryDisorder) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const getHighBpCount = () => {
    return data.reduce((count, patient) => {
      if (patient.metrics.systoleBP > 130 || patient.metrics.diastoleBP > 90) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const renderConditionCard = (condition, count) => {
    let color = "";
    if (count > 2) {
      color = "red";
    } else {
      color = "green";
    }

    return (
      <div className={`condition-card ${color}`}>
        <h3>{condition}</h3>
        <p>Severity: {count}</p>
      </div>
    );
  };

  const handleSendClick = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);

    const content = `Newsletter Content:
      ${newsletterContent}`;

    doc.text(content, 10, 10);
    doc.save(`newsletter.pdf`);
  };

  const coughCount = getCoughCount();
  const coldCount = getColdCount();
  const obesityCount = getObesityCount();
  const respiratoryDisorderCount = getRespiratoryDisorderCount();
  const highBpCount = getHighBpCount();

  return (
    <div>
      {renderConditionCard("Cough", coughCount)}
      {renderConditionCard("Cold", coldCount)}
      {renderConditionCard("Obesity", obesityCount)}
      {renderConditionCard("Respiratory Disorder", respiratoryDisorderCount)}
      {renderConditionCard("High Blood Pressure", highBpCount)}

      <div className="newsletter-section">
        <label htmlFor="newsletter">Newsletter Content:</label>
        <textarea
          id="newsletter"
          value={newsletterContent}
          onChange={(e) => setNewsletterContent(e.target.value)}
          rows={5}
        />
        <button onClick={handleSendClick}>Send Newsletter</button>
      </div>
    </div>
  );
};

export default ConditionCards;
