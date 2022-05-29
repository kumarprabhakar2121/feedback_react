import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import "../App.css";
import "../index.css";
import "../style/c.css";
import "../style/signup.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes, Link, Redirect } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

// toast.configure();

const ListAllUsers = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    axios
      .get("https://sfs2121.herokuapp.com/review/list")
      .then((res) => {
        setPosts(res.data.results);

        console.log(res.data);
        // setTimeout(() => {
        toast.success(`${res.data.total_count} review found!`);
        // }, 4000);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  }, []);

  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <AdminSideBar />
            </div>
            <div className="col-md-9">
              <div className="container-fluid">
                <link
                  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                  rel="stylesheet"
                />
                <div className="container-fluid">
                  <h2
                    style={{ margin: "0 20px" }}
                    className="listTherapist-title"
                  >
                    Review List
                  </h2>
                  <div className="container" style={{ backgroundColor: "#" }}>
                    <div className="row " style={{ backgroundColor: "" }}>
                      <div
                        className="col-12 col-md-10 col-lg-8 "
                        style={{ marginLeft: "42px" }}
                      ></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="main-box clearfix">
                        <div className="table-responsive">
                          <table className="table user-list text-center">
                            <thead>
                              <tr>
                                <th>
                                  <span>
                                    {" "}
                                    <strong>Student Name</strong>{" "}
                                  </span>
                                </th>
                                <th>
                                  <span>
                                    {" "}
                                    <strong>Teacher Name</strong>{" "}
                                  </span>
                                </th>
                                <th>review_for_subject</th>
                                <th>course_completion_review</th>
                                <th>attitude_review</th>
                                <th>teaching_technique_review</th>
                              </tr>
                            </thead>
                            <tbody>
                              {posts.map((post) => (
                                <tr key={posts.id}>
                                  <td style={{ width: "15%" }}>{post.student_id.name}</td>
                                  <td style={{ width: "10%" }}>{post.teacher_id.name}</td>
                                  <td style={{ width: "10%" }}>{post.review_for_subject}</td>
                                  <td style={{ width: "10%" }}>{post.course_completion_review}</td>
                                  <td style={{ width: "10%" }}>{post.attitude_review}</td>
                                  <td style={{ width: "10%" }}>{post.teaching_technique_review}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*
  <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      </div>
    </>
  );
};

export default ListAllUsers;