import React from "react";
import Spinner from "react-bootstrap/Spinner";
export const LoadingIndicator = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Spinner
        animation="border"
        variant="primary"
        size="lg"
        style={{ width: "5rem", height: "5rem" }}
      />
    </div>
  );
};
