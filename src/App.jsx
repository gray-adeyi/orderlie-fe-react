
import React from "react";
import "./App.css";

import Header from "./component/Header";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <div className="w-screen h-auto flex flex-auto ">
        <Header />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );

}

export default App;
