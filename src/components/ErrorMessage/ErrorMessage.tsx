import { Alert } from "antd";
import React from "react";

const ErrorMessage = ({ message }) => {
  if (!message) return;
  
  return <Alert message={message} type="error" />;
};

export default ErrorMessage;
