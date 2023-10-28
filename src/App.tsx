import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { FullName } from "./components/FullName";
import { Birthday } from "./components/BirthDate";
import { PresentSuggestion } from "./components/PresentSuggestion";
import { Card } from "./components/Card";
import { Avatar } from "./components/Avatar";
import { Wishes } from "./components/Wishes";

function App() {
  return (
    <div className="page">
      <Card>
        <Avatar />
        <div className="content">
          <FullName />
          <Birthday />
          <PresentSuggestion />
          <Wishes />
        </div>
      </Card>
    </div>
  );
}

export default App;
