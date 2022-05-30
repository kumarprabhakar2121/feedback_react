import React, { useState } from "react";
import "../index.css";
import "../style/c.css";
import "../style/signup.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Redirect,
  Navigate,
} from "react-router-dom";

/* 
        student_id,
        teacher_id,
        reviewing_at_year,
        review_for_subject,
        student_semester,
        student_course,
        course_completion_review,
        attitude_review,
        teaching_technique_review,

*/
const AddReview = () => {
  const [student_id, setstudent_id] = useState("");
  const [teacher_id, setteacher_id] = useState("");
  const [reviewing_at_year, setreviewing_at_year] = useState("");
  const [review_for_subject, setreview_for_subject] = useState("");
  const [student_semester, setstudent_semester] = useState("");
  const [student_course, setstudent_course] = useState("");
  const [course_completion_review, setcourse_completion_review] = useState("");
  const [attitude_review, setattitude_review] = useState("");
  const [teaching_technique_review, setteaching_technique_review] =
    useState("");
  // const [department, setDepartment] = useState("");
  let navigate = useNavigate();
  const handlestudent_idChange = (e) => {
    setstudent_id(e.target.value);
  };
  const handleteacher_idChange = (e) => {
    setteacher_id(e.target.value);
  };
  const handlereviewing_at_yearChange = (e) => {
    setreviewing_at_year(e.target.value);
  };
  const handlereview_for_subjectChange = (e) => {
    setreview_for_subject(e.target.value);
  };
  const handlestudent_semesterChange = (e) => {
    setstudent_semester(e.target.value);
  };
  const handlestudent_courseChange = (e) => {
    setstudent_course(e.target.value);
  };
  const handlecourse_completion_reviewChange = (e) => {
    setcourse_completion_review(e.target.value);
  };
  const handleteaching_technique_reviewChange = (e) => {
    setteaching_technique_review(e.target.value);
  };
  const handleattitude_reviewChange = (e) => {
    setattitude_review(e.target.value);
  };
  const handleSubmit = (e) => {
    axios({
      method: "post",
      url: "http://localhost:2121/review",
      data: {
        student_id,
        teacher_id,
        reviewing_at_year,
        review_for_subject,
        student_semester,
        student_course,
        course_completion_review,
        attitude_review,
        teaching_technique_review,
      },
    })
      .then(function (response) {
        console.log(response);
        toast.success(response.data.msg);
        setTimeout(function () {
          navigate("/list-reviews");
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
        toast("error!");
      });

    e.preventDefault();
  };

  return (
    <div className="container add">
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
              <div className="container">
                <h2
                  style={{ margin: "0 20px" }}
                  className="listTherapist-title"
                >
                  Hod List
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
                    <div className="main">
                      <div className="">
                        <div className="">
                          <div className="col-md-10">
                            <form
                              onSubmit={(e) => {
                                handleSubmit(e);
                              }}
                            >
                              <hr />
                              <div className="group">
                                <label for="student_id" className="label">
                                  student_id
                                </label>
                                <input
                                  id="student_id"
                                  type="text"
                                  className="input"
                                  value={student_id}
                                  required
                                  onChange={(e) => {
                                    handlestudent_idChange(e);
                                  }}
                                />

                                <hr />
                              </div>
                              <div className="group">
                                <label for="teacher_id" className="label">
                                  teacher_id
                                </label>
                                <input
                                  id="teacher_id"
                                  type="text"
                                  className="input"
                                  value={teacher_id}
                                  required
                                  onChange={(e) => {
                                    handleteacher_idChange(e);
                                  }}
                                />
                              </div>
                              <hr />
                              <div className="group">
                                <label
                                  for="reviewing_at_year"
                                  className="label"
                                >
                                  reviewing_at_year
                                </label>
                                <input
                                  id="reviewing_at_year"
                                  type="text"
                                  value={reviewing_at_year}
                                  className="input"
                                  onChange={(e) => {
                                    handlereviewing_at_yearChange(e);
                                  }}
                                />
                                <hr />{" "}
                              </div>
                              <div className="group">
                                <label
                                  for="review_for_subject"
                                  className="label"
                                >
                                  review_for_subject
                                </label>
                                <input
                                  id="review_for_subject"
                                  type="text"
                                  className="input"
                                  data-type="review_for_subject"
                                  value={review_for_subject}
                                  onChange={(e) => {
                                    handlereview_for_subjectChange(e);
                                  }}
                                />
                              </div>
                              <hr />
                              <div className="group">
                                <label for="student_semester" className="label">
                                  student_semester
                                </label>
                                <select
                                  className="form-select group form-select-lg"
                                  name="student_semester"
                                  id="student_semester"
                                  value={student_semester}
                                  required
                                  onChange={(e) => {
                                    handlestudent_semesterChange(e);
                                  }}
                                >
                                  <option> -select- </option>
                                  <option value="1"> 1 </option>
                                  <option value="2"> 2 </option>
                                  <option value="3"> 3 </option>
                                  <option value="4"> 4 </option>
                                  <option value="5"> 5 </option>
                                  <option value="5"> 6 </option>
                                  <option value="5"> 7 </option>
                                  <option value="5"> 8 </option>
                                </select>
                                <hr />{" "}
                              </div>
                              <div className="group">
                                <label for="student_course" className="label">
                                  student_course
                                </label>
                                <select
                                  className="form-select group form-select-lg"
                                  name="student_course"
                                  id="student_course"
                                  value={student_course}
                                  required
                                  onChange={(e) => {
                                    handlestudent_courseChange(e);
                                  }}
                                >
                                  <option> -select- </option>
                                  <option value="btech"> btech </option>
                                  <option value="diploma"> diploma </option>
                                </select>
                                <hr />{" "}
                              </div>
                              <div className="group">
                                <label
                                  for="course_completion_review"
                                  className="label"
                                >
                                  course_completion_review
                                </label>
                                <input
                                  id="course_completion_review"
                                  type="number"
                                  className="input"
                                  value={course_completion_review}
                                  required
                                  onChange={(e) => {
                                    handlecourse_completion_reviewChange(e);
                                  }}
                                />
                              </div>
                              <hr />
                              <div className="group">
                                <label for="attitude_review" className="label">
                                  attitude_review
                                </label>
                                <input
                                  id="attitude_review"
                                  type="text"
                                  className="input"
                                  value={attitude_review}
                                  required
                                  onChange={(e) => {
                                    handleattitude_reviewChange(e);
                                  }}
                                />
                                <hr />{" "}
                              </div>
                              <div className="group">
                                <label
                                  for="teaching_technique_review"
                                  className="label"
                                >
                                  teaching_technique_review
                                </label>
                                <input
                                  id="teaching_technique_review"
                                  type="text"
                                  className="input"
                                  value={teaching_technique_review}
                                  required
                                  onChange={(e) => {
                                    handleteaching_technique_reviewChange(e);
                                  }}
                                />
                              </div>
                              <br></br>
                              <hr /> <br></br>
                              <div className="group">
                                <input
                                  type="submit"
                                  className="button btn btn-success"
                                  value="Add Review"
                                />
                                <hr />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
