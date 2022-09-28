import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

const API_ENDPOINT =
  "https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc";

const Home: React.FC = () => {
  const [messages, setMessages] = useState([]);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((err) => {
        setApiError(err.message);
      });
  }, []);

  function counter() {
    return <h1>hello</h1>;
  }
  return (
    <>
      <nav>
        <div>
          <button className="btn btn-info" onClick={counter}>
            <Link to="/addReview">Add Review</Link>
          </button>
        </div>
      </nav>
      <div className="col">
        <input
          id="searchName"
          className="searchName"
          type="text"
          placeholder="Search..."
        />
        <span className="sortWays">Sort by time | Sort by rate</span>
        <table>
          <tr>
            <td>Rest1</td>
            <td>Rating1</td>
          </tr>
          <tr>
            <td>Rest2</td>
            <td>Rating2</td>
          </tr>
          <tr>
            <td>Rest3</td>
            <td>Rating3</td>
          </tr>
          <tr>
            <td>Rest4</td>
            <td>Rating4</td>
          </tr>
        </table>
      </div>
    </>
  );
};

function AddReview() {
  return (
    <>
      <div className="body">
        <form>
          <div>
            <div className="title titleInline">Restaurant name:</div>
            <input
              id="resName"
              className="resName"
              type="text"
              name="restaurant"
            />
          </div>
          <div>
            <div className="title">Review:</div>
            <textarea className="comment" name="comment"></textarea>
          </div>
          <div>
            <div className="title titleInline">Ranting:</div>
            <input
              className="stepper"
              type="number"
              defaultValue="3"
              id="points"
              name="points"
              width="20"
              step="1"
            />
          </div>
          <div className="addBtnGroup">
            <button className="btn btn-info" type="submit" value="Submit">
              Save
            </button>
            <button className="btn btn-info" type="reset" value="Reset">
              <Link to="/">Cancel</Link>
            </button>
            <button className="btn btn-info">Delete</button>
          </div>
        </form>
      </div>
    </>
  );
}

const App: React.FC = () => {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addReview" element={<AddReview />} />
      </Routes>
    </div>
  );
};

export default App;
