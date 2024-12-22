import React from "react";
import Sidebar from "./src/components/Sidebar/Sidebar.component";
import Header from "./src/components/Header/Header.component";
import Body from "./src/components/Body/Body.component";

const App = () => {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Sidebar />
      </section>
      <section>
        <div style={{ marginLeft: "100px", marginTop: "48px", padding: "20px" }}>
          <Body />
        </div>
      </section>
    </div>
  );
};

export default App;
