import React from "react";
import "./Topsection.css";

const TopSection = () => {
  return (
    <div className="top-section-parent">
      <div className="top-col">
        <div className="top-col-content">
          <h1 className="top-h1">Next generation digital banking</h1>
          <p className="top-p">
            {" "}
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="request-btn">Request Invite</button>
        </div>
      </div>
      <div className="top-col">
        <img className="bg-img" src="./images/bg-intro-desktop.svg" alt="" />
        <img className="mockup-img" src="./images/image-mockups.png" alt="" />
      </div>
    </div>
  );
};

export default TopSection;
