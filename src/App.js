import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import {OpenCvProvider, useOpenCv} from "opencv-react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./Screen/components/Home/Home";
import HandTracker from "./Screen/components/HandTracker/HandTracker";
import ErrorPage from "./Screen/components/ErrorPage/ErrorPage";
function App() {


  return (
      <OpenCvProvider>
          {/*<Mycomponent></Mycomponent>*/}
          <HandTracker />

      </OpenCvProvider>

  );
}

export default App;
