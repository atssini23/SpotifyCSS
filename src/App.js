import React from "react";
import "./styles.scss";

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <div className="navBar">
          <div className="logo">logo</div>
          <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Your Library</li>
          </ul>
        </div>
      </div>
      <div className="musicControls">music controllers</div>
    </div>
  );
}
export default App;
