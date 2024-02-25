import React from "react";

const DownloadCV = () => {
  const downloadCV = () => {
    const cvUrl = "src/assets/ElieNahed_CV.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <p style={{ textAlign: "center" }}>
      <button onClick={downloadCV}>Download My CV</button>
    </p>
  );
};

export default DownloadCV;
