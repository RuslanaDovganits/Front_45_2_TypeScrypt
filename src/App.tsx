import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import HomePage from "./components/homePage/HomePage";
import FetchFox from "./components/fetchFox/FetchFox";
import NoPage from "./components/noPage/NoPage";

import Lesson01 from "./lessons/lesson01/Lesson01"
import Lesson05 from "./lessons/lesson05/Lesson05";
import Lesson04 from "./lessons/lesson04/Lesson04";

import Homework01 from "./homeworks/homework01/Homework01";
import Homework02 from "./homeworks/homework02/Homework02";
import Homework03 from "./homeworks/homework03/Homework03";
import Homework04 from "./homeworks/homework04/Homework04";
import Homework05 from "./homeworks/homework05/Homework05";
import Homework06 from "./homeworks/homework06/Homework06";

function App() {
  return (
    // оборачиваем все приложение в особый компонент в Hashrouter  из библтотеки ReactRouter Dom
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="fetch-fox" element={<FetchFox />} />



          {/* <Route path="fellowship" element={<Lesson01 />} /> */}
          <Route path="lesson01" element={<Lesson01 />} />
          <Route path="lesson02" element={<Lesson04 />} />
          <Route path="lesson03" element={<Lesson05 />} />
          <Route path="lesson04" element={<Lesson04 />} />
          <Route path="lesson05" element={<Lesson05 />} />
          <Route path="lesson06" element={<Lesson04 />} />
          <Route path="lesson07" element={<Lesson05 />} />
          <Route path="lesson08" element={<Lesson05 />} />
          <Route path="lesson09" element={<Lesson05 />} />


          <Route path="homework01" element={<Homework01 />} />
          <Route path="homework02" element={<Homework02 />} />
          <Route path="homework03" element={<Homework03 />} />
          <Route path="homework04" element={<Homework04 />} />
          <Route path="homework05" element={<Homework05 />} />
          <Route path="homework06" element={<Homework06 />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
