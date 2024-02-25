import React from "react";
import "../css/buttoncv.css";

const DownloadCV = () => {
  const cvUrl = "src/assets/ElieNahed_CV.pdf";

  const downloadCV = () => {
    window.open(cvUrl, "_blank");
  };

  return (
    <div className="button-cv">
      <button onClick={downloadCV}>Download My CV</button>
    </div>
  );
};

export default DownloadCV;
