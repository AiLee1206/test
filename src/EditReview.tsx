import React from "react";
import "./App.css";
import Header from "./components/Header";

const Body: React.FC = () => {
  return (
    <>
      <div className="body">
        <form>
          <div>
            <div className="title titleInline">Restaurant name:</div>
            <input
              id="resName"
              className="resName"
              value="Rest1"
              type="text"
              name="restaurant"
            />
          </div>
          <div>
            <div className="title">Review:</div>
            <textarea
              className="comment"
              name="comment"
              value="Review about Rest1"
            ></textarea>
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
              Cancel
            </button>
            <button className="btn btn-info">Delete</button>
          </div>
        </form>
      </div>
    </>
  );
};

const EditReview: React.FC = () => {
  return (
    <div className="body">
      <Header />
      <Body />
    </div>
  );
};

export default EditReview;
