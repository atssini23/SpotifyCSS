import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">dummy text</div>
      <div className="mainContent">
        <h1>Uniquely yours</h1>
        <div className="cardsWrap">
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1434907714621-289291ffea37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                alt="Pic 1"
              />
            </div>
            <div className="cardContent">
              <h3>Liked Songs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
