import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"


const MainPage = () => {
  return (
    <React.Fragment>
      <section>
        <div>
          <div>
            <Navbar />
          </div>

          <div>
            <Sidebar/>
          </div>

        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
