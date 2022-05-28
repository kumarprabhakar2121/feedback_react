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

// toast.configure();

const ListAllTeachers = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2121/user/list?userRole=teacher")
      .then((res) => {
        setPosts(res.data.results);

        console.log(res.data);
        // setTimeout(() => {
        toast.success(`${res.data.total_count} teachers found!`);
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
        <div className="d-flex" id="wrapper">
          {/*
      <!-- Sidebar--> */}
          <div className="border-end bg-white " id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">
              <Link to="./ListTherapists">
                <i class="fas fa-spa"></i>
              </Link>
            </div>
            <div className="list-group list-group-flush left-side">
              <a>
                <div className="t1">
                  <p>Admin Dashboard</p>
                </div>
              </a>
              <Link
                to="./ListAllTeachers"
                className="list-group-item list-group-item-action list-group-item-light p-3 dashboard-list"
              >
                List Users
              </Link>
            </div>
          </div>
          {/*
      <!-- Page content wrapper--> */}
          <div id="page-content-wrapper">
            {/*
          <!-- Top navigation--> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <a className="nav-link" href="#!">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#!">
                        Link
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="#!">
                          Action
                        </a>
                        <a className="dropdown-item" href="#!">
                          Another action
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#!">
                          Something else here
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/*
          <!-- Page content--> */}
            <div className="container-fluid">
              <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                rel="stylesheet"
              />
              <div className="container">
                <h2
                  style={{ margin: "0 20px" }}
                  className="listTherapist-title"
                >
                  Teachers List
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
                                  <strong>Name</strong>{" "}
                                </span>
                              </th>

                              <th>phone</th>
                              <th>email</th>

                              <th>change user role</th>
                            </tr>
                          </thead>
                          <tbody>
                            {posts.map((post) => (
                              <tr key={posts.id}>
                                <td style={{ width: "15%" }}>{post.name}</td>
                                <td style={{ width: "10%" }}>{post.phone}</td>
                                <td style={{ width: "10%" }}>{post.email}</td>

                                <td style={{ width: "30%" }}>
                                  <div>
                                    <button className="btn btn-primary">
                                      change to student
                                    </button>
                                  </div>
                                  <hr />
                                  <div>
                                    <button className="btn btn-primary">
                                      change to hod
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <ul className="pagination pull-right">
                        <li>
                          <a href="#">
                            <i className="fa fa-chevron-left"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">5</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-chevron-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal8"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Remove this Therapist
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="/action_page.php">
                  <button className="btn btn-success"> Yes sure</button>
                  <button
                    type="button"
                    className="btn btn-danger closebtn"
                    data-dismiss="modal"
                  >
                    No Cancel
                  </button>
                </form>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>

        {/* modal 9 fro confirming remove journal access */}

        {/*
  <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      </div>
    </>
  );
};

export default ListAllTeachers;
