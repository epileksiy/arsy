
import './App.css';
import React from "react";

import { BrowserRouter, Route, Routes} from "react-router-dom";

import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Models from './Components/Models';
import Faq from './Components/Faq';
import ModelObserver from './Components/ModelObserver';
import ModelObserver1 from './Components/ModelObserver1';
import ModelObserver2 from './Components/ModelObserver2';
import ModelObserver3 from './Components/ModelObserver3';
import ModelObserver4 from './Components/ModelObserver4';
import ModelObserver5 from './Components/ModelObserver5';
import ModelObserver6 from './Components/ModelObserver6';
import ModelObserver7 from './Components/ModelObserver7';
import ModelObserver8 from './Components/ModelObserver8';
import ModelObserver9 from './Components/ModelObserver9';
import ModelObserver10 from './Components/ModelObserver10';

import OnWork from './Components/onwork';
import MainModel from './Components/mainModel';

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
          <Route path="/modelobs" element={
            <ModelObserver/>
          }>
          </Route>
          <Route path="/modelobs1" element={
            <ModelObserver1/>
          }>
          </Route>
          <Route path="/modelobs2" element={
            <ModelObserver2/>
          }>
          </Route>
          <Route path="/modelobs3" element={
            <ModelObserver3/>
          }>
          </Route>
          <Route path="/modelobs4" element={
            <ModelObserver4/>
          }>
          </Route>
          <Route path="/mainModel" element={
            <MainModel/>
          }>
          </Route>
          <Route path="/modelobs5" element={
            <ModelObserver5/>
          }>
          </Route>
          <Route path="/modelobs6" element={
            <ModelObserver6/>
          }>
          </Route>
          <Route path="/modelobs7" element={
            <ModelObserver7/>
          }>
          </Route>
          <Route path="/modelobs8" element={
            <ModelObserver8/>
          }>
          </Route>
          <Route path="/modelobs9" element={
            <ModelObserver9/>
          }>
          </Route>
          <Route path="/modelobs10" element={
            <ModelObserver10/>
          }>
          </Route>
          <Route path="/onwork" element={
            <OnWork/>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
