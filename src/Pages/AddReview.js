import React, { useState } from "react";
import axios from "axios";

const AddReview = () => {
  const [ClientName, setClientName] = useState("");
  const [ClientDescription, setClientDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sucessfull");

    const config = {
      method: "post",
      url: "http://52.71.181.43:8080/awwwrasb/addClient",
    };
    axios(config)
      .then(function (response) {
        console.log("Add Advertiser");

        const serverResponse = response.data;

        console.log(response);

        if (response.data.responseMessage === "success!") {
          console.log("Successful");
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  return (
    <div className="newcertificate">
      <div className="certificate-register">
        <div className="certificate-item">
          <p className="certificate-item-header">Add Client</p>

          <p className="certificate-item-label">Client Description</p>
          <input
            type="text"
            className="certificate-item-input"
            value={ClientDescription}
            onChange={(e) => setClientDescription(e.target.value)}
          />

          <p className="certificate-item-label">Client Name</p>
          <input
            type="text"
            className="certificate-item-input"
            value={ClientName}
            onChange={(e) => setClientName(e.target.value)}
          />a
        </div>


        <button type="submit" className="login-btn" onClick={handleSubmit}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddReview;
