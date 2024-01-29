import React, { useState } from "react";
import axios from "axios";
// import {useHistory} from 'react-router-dom'
// import {Link } from "react-router-dom";


const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    if (name === "" || email === "") {
      console.log("not submitted");
    } else {
      e.preventDefault();
      axios
        .post("https://641804961ce6e710312ca73a.mockapi.io/crud-test", {
          name : name,
          email: email,
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
      alert("successfully submitted")
      

    }
  }

  return (
    <>
      <h1>Create function</h1>
      {/* {name} */}
      {/* {email} */}
      <div className="container ">
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              name="name"
              required
              id="name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              required
            />
          </div>
          
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
          
        </form>
      </div>
    </>
  );
};

export default Create;
