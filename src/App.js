import React from "react";
import Home from "./Components/Home";
import WebEditor from "./Components/WebEditor";
import MarkdownEditor from "./Components/MarkdownEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/web" exact element={<WebEditor />} />
        <Route path="/markdown" exact element={<MarkdownEditor />} />
      </Routes>
    </Router>
  );
};

export default App;
