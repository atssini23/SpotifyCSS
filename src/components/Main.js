import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">dummy text</div>
      <div className="mainContent">
        <div className="cardsWrap">
          <h2>Uniquely yours</h2>
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
            <span className="playIcon">></span>
          </div>
        </div>
        <div className="cardsWrap">
          <h2>Focus</h2>
          <p className="subText">Music to help you concentrate.</p>
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1434907714621-289291ffea37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                alt="Pic 1"
              />
            </div>
            <div className="cardContent">
              <h3>Music for concentrate</h3>
              <span>
                Minimalism, electronica and modern classical to concentrate to.
              </span>
            </div>
            <span className="playIcon">></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
