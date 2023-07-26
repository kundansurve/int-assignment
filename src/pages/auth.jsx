import React, { useState, useEffect } from "react";
import Login from "../components/login";

const Auth = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Login/>
    </div>
  );
};

export default Auth;
