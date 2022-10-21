import React from "react";
import benefits from "./benefits.json";
import BenefitCard from "./BenefitCard";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="benfits-parent">
      <div className="benefits-header">
        <h1 className="benefits-h1">
          Why <em>choose</em> Easybank
        </h1>
        <p className="benefits-p">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="benefits-row">
        {benefits.map((b) => (
          <BenefitCard key={b.id} benefit={b} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
