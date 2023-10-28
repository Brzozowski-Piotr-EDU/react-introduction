import React from "react";
import logo from "./logo.svg";
import "./App.scss";

export const FullName = () => {
  const fullName: string = "Piotr Brzozowski";

  return <div className="container">Full name: {fullName}</div>;
};

export const Birthday = () => {
  const birthDate: Date = new Date("1999-08-12");
  const dateToDisplay: string = birthDate.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return <div className="container">Birthday: {dateToDisplay}</div>;
};

export const PresentSuggestion = () => {
  const presentSuggestions: string[] = [
    "Book 101 useful tips",
    "Pair of good heaphones",
    "Ticket to the cinema",
    "Gift card to local clothing store",
    "Dinner on good restraunt",
    "Just your time",
  ];

  const suggestedPresentIndex: number = Math.round(Math.random() * 5);

  const presentProposition: string = presentSuggestions[suggestedPresentIndex];

  return (
    <div className="container">You can buy him/her: {presentProposition}</div>
  );
};

function App() {
  return (
    <div className="page">
      <FullName />
      <Birthday />
      <PresentSuggestion />
    </div>
  );
}

export default App;
