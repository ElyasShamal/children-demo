import React from "react";

const cardStyle = {
  width: "50%",
  margin: "10px auto 30px auto",
  boxShadow: "0 5px 10px 2px rgba(0,0,0,0.25)",
  padding: "20px",
};

const Card = ({ children, title, description }) => {
  return (
    <div style={cardStyle}>
      {title}
      {description && <p>{description}</p>}
      {children}
    </div>
  );
};

export default Card;
