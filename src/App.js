
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Models from './Components/Models';
import Faq from './Components/Faq';

function App() {
  return (
    <div className="w-full h-full">
      <BrowserRouter basename="/arsy">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Main/>
        }>
        </Route>
        <Route path="/models" element={
          <Models/>
        }>
        </Route>
        <Route path="/faq" element={
          <Faq/>
        }>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
