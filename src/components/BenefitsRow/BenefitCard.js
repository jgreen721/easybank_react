import React from "react";

const BenefitCard = ({ benefit }) => {
  return (
    <div className="benefit-card">
      <img className="benefit-icon" src={benefit.icon} alt="" />
      <h2 className="benefit-title">{benefit.title}</h2>
      <p className="benefit-blurb">{benefit.blurb}</p>
    </div>
  );
};

export default BenefitCard;
