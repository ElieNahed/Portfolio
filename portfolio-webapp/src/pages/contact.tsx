import React, { useState } from "react";
import "../css/contact.css";

const Contact: React.FC = () => {
  const [sendingMessage, setSendingMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendingMessage(true);

    // Simulate sending message for 3 seconds
    setTimeout(() => {
      setSendingMessage(false);
    }, 3000);
  };

  return (
    <div className="">
      <div className="container">
        <form
          className="text-center rounded px-8 py-6 border border-white"
          onSubmit={handleSubmit}
        >
          <p>Enter Your Email</p>
          <input
            type="email"
            className="border border-gray-300 rounded px-4 py-2 mt-2 w-full"
          />
          <br />
          <p>Enter your message</p>
          <textarea
            className="border border-gray-300 rounded px-4 py-2 mt-2 w-full"
            rows={6} // Adjust the number of rows as needed
          ></textarea>
          <br />
          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          />
        </form>
        <br />
        {sendingMessage && (
          <div className="mt-2 text-blue-500 text-sm">Sending message...</div>
        )}
      </div>
    </div>
  );
};

export default Contact;
