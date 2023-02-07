import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import AllFiles from "./components/pages/Allfiles";
import Starred from "./components/pages/Starred";
import Archived from "./components/pages/Archived";
import MainHeader from "./components/Layout/MainHeader";

import Layout from "./components/Layout/Layout";
import { dataFiles } from "./utilities/constants";
import { useState } from "react";

function App() {
  const [list, setList] = useState(dataFiles);
  return (
    <div className="app">
      <MainHeader />

      <Layout>
        <Routes>
          <Route path="/" element={<Home list={list.slice(0, 5)} />} />
          <Route
            path="/all-files"
            element={<AllFiles setList={setList} list={list} />}
          />
          <Route
            path="/starred"
            element={
              <Starred list={list.filter((item) => item.starred === true)} />
            }
          />
          <Route
            path="/archived"
            element={
              <Archived list={list.filter((item) => item.archived === true)} />
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
