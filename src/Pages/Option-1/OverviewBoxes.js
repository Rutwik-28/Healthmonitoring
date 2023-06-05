import React, { useState } from "react";
// import patients from "./patients.json";

const Box = ({ topic, number, safeValue, indicatorText, iconClass }) => {
  const isSafe = typeof number === "number" ? number <= safeValue : true;
  const numberStyle = {
    color: isSafe ? "black" : "red",
  };
  return (
    <div className="box">
      <div className="right-side">
        <div className="box-topic">{topic}</div>
        <div
          className="number"
          style={typeof number === "number" ? numberStyle : null}
        >
          {number}
        </div>
        <div className="indicator">
          <span className="text">{indicatorText}</span>
        </div>
      </div>
      <i className={iconClass}></i>
    </div>
  );
};

const OverviewBoxes = ({ patients }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientSelect = (event) => {
    const selectedPatientId = event.target.value;
    const patient = patients.find((p) => p.id === selectedPatientId);
    setSelectedPatient(patient);
  };

  return (
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

      {selectedPatient && (
        <div className="overview-boxes">
          <Box
            topic="Chills"
            number={selectedPatient.metrics.chills ? "True" : "False"}
            indicatorText={`Safe: ${
              selectedPatient.metrics.chills ? "true" : "false"
            }`}
            iconClass="fa-solid fa-snowflake cart"
          />
          <Box
            topic="Diastole BP"
            number={selectedPatient.metrics.diastoleBP}
            safeValue={81}
            indicatorText="Safe [60 - 80 mm Hg]"
            iconClass="fas fa-lungs cart two"
          />
          <Box
            topic="Systole BP"
            number={selectedPatient.metrics.systoleBP}
            safeValue={121}
            indicatorText="Safe [90 - 120 mm Hg]"
            iconClass="fa-sharp fa-solid fa-heart cart three"
          />
          <Box
            topic="Heart Rate"
            number={selectedPatient.metrics.heartRate}
            safeValue={101}
            indicatorText="Safe [60 to 100 beats]"
            iconClass="fas fa-heartbeat cart four"
          />
          <Box
            topic="Respiration Rate"
            number={selectedPatient.metrics.respirationRate}
            safeValue={17}
            indicatorText="Safe [12 to 16 breaths/min]"
            iconClass="fas fa-lungs cart two"
          />
          <Box
            topic="SpO2"
            number={selectedPatient.metrics.spo2}
            safeValue={100}
            indicatorText="Range [95% or higher]"
            iconClass="fas fa-chart-line cart five"
          />
          <Box
            topic="Blood Group"
            number={selectedPatient.metrics.bloodGroup}
            safeValue={0}
            iconClass="fas fa-tint cart four"
          />
          <Box
            topic="Temperature"
            number={selectedPatient.metrics.temperature}
            safeValue={99.5}
            indicatorText="Safe [97.7°F to 99.5°F]"
            iconClass="fas fa-thermometer cart seven"
          />
          <Box
            topic="Ambulation"
            number={selectedPatient.metrics.ambulation ? "True" : "False"}
            indicatorText={`Safe: ${
              selectedPatient.metrics.ambulation ? "true" : "false"
            }`}
            iconClass="fas fa-walking cart eight"
          />
          <Box
            topic="Fever History"
            number={selectedPatient.metrics.feverHistory}
            iconClass="fas fa-thermometer cart four"
          />
          <Box
            topic="BMI"
            number={selectedPatient.metrics.bmi}
            safeValue={24}
            indicatorText="Safe [18.5 to 24.9]"
            iconClass="fas fa-weight cart nine"
          />
          <Box
            topic="FiO2"
            number={selectedPatient.metrics.fio2}
            safeValue={100}
            indicatorText="Safe [21% to 100%]"
            iconClass="fas fa-lungs cart two"
          />
        </div>
      )}
    </div>
  );
};

export default OverviewBoxes;
