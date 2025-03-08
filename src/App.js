// import React from "react";
import NewComponent from "./components/Navbar";
import Text from "./components/text";
import Welcome from "./components/welcome";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor ='black'
      document.body.style.color ='white'
    } else {
      setMode("light");
      document.body.style.backgroundColor ='white'
      document.body.style.color ='black'
    }
  };
  return (
    <>
      <div className="App">
        <NewComponent
          title="TEXT-UTILS"
          abouttext="About-Text-Utils"
          mode={mode}
          toggleMode={toggleMode}
        />

        <div className="container mt-4">
          <Welcome />
        </div>
        <div className="container">
          <Text mode={mode}/>
        </div>
      </div>
    </>
  );
}

export default App;
