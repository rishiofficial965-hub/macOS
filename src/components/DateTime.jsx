import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const formatDateTime = () => {
      const now = new Date();

      const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit", 
        hour12: true,
      };

      return now.toLocaleString("en-US", options).replace(/,/g, "");
    };

    const timeout = setTimeout(() => {
      setDateTime(formatDateTime());
    }, 0);

    const interval = setInterval(() => {
      setDateTime(formatDateTime());
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return <div>{dateTime}</div>;
};

export default DateTime;
