import React from "react";

import EventHeading from "./components/EventHeading";
import Instructors from "./components/Instructors";
import Map from "./components/Map";

import "./App.css";

function App() {
  return (
    <div className="container">
      <main>
        <EventHeading />
        <Instructors />
        <Map />
      </main>
    </div>
  );
}

export default App;
