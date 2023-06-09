import cookie from "cookiejs";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CGuard = ({ children }) => {
  const nav = useNavigate();

  useEffect(() => {
    const token = cookie.get("token") ? cookie.get("token") : false;
    if (!token) {
      nav("/login");
    }
  }, []);
  const auth = cookie.get("token") ? cookie.get("token") : false;
  if (auth) {
    return children;
  }
};

export default CGuard;
