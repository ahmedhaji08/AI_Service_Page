import { useEffect } from "react";

export default function Toast({ message, setToast }) {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setToast(""); // hide toast after delay
    }, 3000); //  3 seconds

    return () => clearTimeout(timer);
  }, [message, setToast]);

  return (
    <div className={`toast ${message ? "show" : ""}`}>
      {message}
    </div>
  );
}
