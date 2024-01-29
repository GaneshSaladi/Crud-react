import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Read() {
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [up, setup] = useState("");

  const handleClose = () => setShow(false);

  useEffect(() => {
    Reads();
    // no();
  }, []);

  function Reads() {
    axios
      .get("https://641804961ce6e710312ca73a.mockapi.io/crud-test")
      .then((result) => {
        // console.log(result.data);
        setPosts(result.data);
      })
      .catch((error) => console.log(error));
  }


  function handleDelete(id) {
    axios
      .delete(`https://641804961ce6e710312ca73a.mockapi.io/crud-test/${id}`)
      .then(() => {
        Reads();
        // no();
      });
    // console.log("deleted");
  }

  function handleUpdate(e, id) {
    setShow(true);
    for (let key in posts) {
      if (posts[key].id === id) {
        // console.log("postttttttttt---->", posts[key]);
        setup(posts[key]);
      }
    }
  }

  const handleChange = (e) => {
    setup({ ...up, [e.target.name]: e.target.value });
  };

  function handleUpdateUser(e, id) {
    axios
      .put(`https://641804961ce6e710312ca73a.mockapi.io/crud-test/${id}`, {
        name: up.name,
        email: up.email,
      })
      .then(() => {
        setShow(false);
        Reads();
      });
  }

  // console.log("uppppp", up);
  return (
    <>
      <button type="button" class="btn btn-primary">
        back
      </button>
      <div>
        {posts.map((data,index) => {
          // console.log("map", data.id);
          return (
            <>
              <table class="table">
                {/* <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  
                </tr>
              </thead> */}
                <tbody>
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <button type="submit" onClick={() => handleDelete(data.id)}>
                      Delete
                    </button>
                    <>
                      <button
                        variant="primary"
                        onClick={(e) => handleUpdate(e, data.id)}
                      >
                        Update
                      </button>
                    </>
                  </tr>
                </tbody>
              </table>
            </>
          );
        })}
      </div>
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Update </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              type="text"
              name="name"
              value={up.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />{" "}
            <br />
            <input
              type="text"
              name="email"
              value={up.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => handleUpdateUser(e, up.id)}>
            {" "}
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Read;
