import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSnowman, faTimes, faGift } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

// Pages
import SessionChoicePage from "./pages/SessionChoicePage";
import LoginPage from "./pages/LoginPage";
import SessionPage from "./pages/SessionPage";

// https://htmlstream.com/preview/unify-v2.6.2/assets/img-temp/400x450/img5.jpg

library.add(faSnowman, faTimes, faGift);

// for session building purposes
let sessionObject = {
  id: "5hjua7cy4je3ifur8",
  sessionOwner: "Bobbylee Ingalls",
  activePlayer: "Bobbylee Ingalls",
  gifts: [
    { key: 1, availability: 2, inPossession: null },
    { key: 2, availability: 2, inPossession: "Bobbylee Ingalls" },
    { key: 3, availability: 2, inPossession: null },
    { key: 4, availability: 2, inPossession: null },
    { key: 5, availability: 2, inPossession: null },
    { key: 6, availability: 2, inPossession: null },
    { key: 7, availability: 2, inPossession: null },
    { key: 8, availability: 2, inPossession: null },
    { key: 9, availability: 2, inPossession: null },
    { key: 10, availability: 2, inPossession: null },
    { key: 11, availability: 2, inPossession: null },
    { key: 12, availability: 2, inPossession: null },
    { key: 13, availability: 2, inPossession: null },
    { key: 14, availability: 2, inPossession: null },
    { key: 15, availability: 2, inPossession: null },
    { key: 16, availability: 2, inPossession: null },
    { key: 17, availability: 2, inPossession: null },
    { key: 18, availability: 2, inPossession: null },
    { key: 19, availability: 2, inPossession: null },
    { key: 20, availability: 2, inPossession: null }
  ],
  players: [
    { name: "Bobbylee Ingalls", photo: "url", giftEntered: true },
    { name: "Bridget Ingalls", photo: "url", giftEntered: true },
    { name: "Calle Ingalls", photo: "url", giftEntered: true },
    { name: "Olivia Ingalls", photo: "url", giftEntered: true }
  ]
};

let currentUser = {
  name: "Bobbylee Ingalls"
};

function App() {
  return (
    <div className="App">
      <SessionPage session={sessionObject} currentUser={currentUser} />
    </div>
  );
}

export default App;
