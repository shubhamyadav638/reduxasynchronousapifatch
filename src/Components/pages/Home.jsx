import React from "react";

import Header from "../Header";
import Card from "../Card";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap gap-6 items-center justify-center px-2 py-3">
        <Card />
      </div>

      <Footer />
    </>
  );
}

export default Home;
