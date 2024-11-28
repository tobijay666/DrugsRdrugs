import React, { useEffect, useState } from "react";
import { fetchHelloMessage } from "../services/api";

const HelloWorld = () => {
  const [message, setMessage] = useState("");

  // Fetch the message when the component loads
  useEffect(() => {
    const getMessage = async () => {
      const fetchedMessage = await fetchHelloMessage();
      setMessage(fetchedMessage);
    };

    getMessage();
  }, []);

  return (
    <div>
      <h1>Message from Backend:</h1>
      <p>{message}</p>
    </div>
  );
};

export default HelloWorld;
