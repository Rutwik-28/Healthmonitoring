import React, { useState, useEffect } from "react";
import Login from "./Login";
import LogoutButton from "./LogOut";
import "./homepage.css"; // Import your custom CSS file for styling
//Adding a comment

const Homepage = () => {
  const [thoughtOfTheDay, setThoughtOfTheDay] = useState(""); // State to store the thought of the day

  // Fetch a new thought of the day from an API or an array of thoughts
  const fetchThoughtOfTheDay = () => {
    // Make an API call or get a random thought from an array
    const thoughts = [
      "Medicine is not only a science; it is also an art. It does not consist of compounding pills and plasters; it deals with the very processes of life, which must be understood before they may be guided. - Paracelsus",
      "The doctor of the future will give no medication, but will interest his patients in the care of the human frame, diet and in the cause and prevention of disease. - Thomas Edison",
      "Medicine is a science of uncertainty and an art of probability. - William Osler",
      "The greatest medicine of all is teaching people how not to need it. - Hippocrates",
      "The best doctors in the world are Doctor Diet, Doctor Quiet, and Doctor Merryman. - Jonathan Swift",
      "Medicine heals doubts as well as diseases. - Karl Marx",
      "Medicine is a science of hope. - Victor Hugo",
      "The physician's highest calling, his only calling, is to make sick people healthy - to heal, as it is termed. - Samuel Hahnemann",
      "Medicine is a science of humans, in the interest of humans, which will always retain a certain measure of art. - Rudolf Virchow",
      "The good physician treats the disease; the great physician treats the patient who has the disease. - William Osler",
    ];
    const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    setThoughtOfTheDay(randomThought);
  };

  useEffect(() => {
    fetchThoughtOfTheDay(); // Fetch a new thought of the day when the component mounts or refreshes
  }, []);

  return (
    <div className="homepage">
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome to the Health Monitoring System</h1>
        <div className="thoughts-section">
          <h2>Thought of the Day:</h2>
          <p>{thoughtOfTheDay}</p>
          <button onClick={fetchThoughtOfTheDay}>Refresh</button>
        </div>
        <div className="login-section">
          <Login />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
