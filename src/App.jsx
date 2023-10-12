
import React from "react";
import "./App.css";

import Header from "./component/Header";
import Footer from "./component/footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-screen h-auto flex flex-auto ">
        <Header />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </>
  );

}

export default App;
