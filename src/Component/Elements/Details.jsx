import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import db from "../../firbase";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const Details = () => {
  const [user, setUser] = useState([]);
  const auth = getAuth();
  const id = auth.currentUser;
  console.log(id.uid);
  const userCollecionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollecionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  });

  const deleteUser = (id) => {
    console.log(id);
    deleteDoc(doc(db, "users", id));
    toast("Data Deleted!");
  };
  return (
    <>
      <div>
        <div className="container mt-5">
          <Link className="btn btn-link" to={"/home"}>
            Back
          </Link>
          <div className=" tabel d-flex justify-content-center align-items-center">
            <table className="table w-75">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {user.length ? (
                  user.map((user, id) => {
                    return (
                      <>
                        <tr>
                          <th scope="row">{id + 1}</th>
                          <td>{user.name}</td>
                          <td>{user.contact}</td>
                          <td>{user.email}</td>
                          <td>{user.address}</td>
                          <td>
                            <IconButton
                              aria-label="delete "
                              onClick={() => {
                                deleteUser(user.id);
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </td>
                          <td>
                            <Link to={`/update/${user.id}`}>
                              <IconButton aria-label="Edit">
                                <ModeEditOutlineOutlinedIcon />
                              </IconButton>
                            </Link>
                          </td>
                        </tr>
                      </>
                    );
                  })
                ) : (
                  <h3>...</h3>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
