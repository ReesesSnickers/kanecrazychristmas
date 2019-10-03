import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSnowman } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import MainPage from "./pages/MainPage";

// https://htmlstream.com/preview/unify-v2.6.2/assets/img-temp/400x450/img5.jpg

library.add(faSnowman);

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
