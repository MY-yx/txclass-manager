import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from "pages/Index";
import LoginPage from "pages/Login";
import Collection from "pages/sub/Collection";
import Course from "pages/sub/Course";
import Error from "pages/sub/Error";
import Crawler from "pages/sub/Crawler";
import RecomCourse from "pages/sub/RecomCourse";
import Slider from "pages/sub/Slider";
import Student from "pages/sub/Student";
import Teacher from "pages/sub/Teacher";

/**
 * 引入react-router-dom中需要的;
 *   需要注意: 
 *     (1) ^6.2.1及以上版本的react-router-dom已经把Switch修改为Routes了
 *                component={ IndexPage } => element={ <IndexPage></IndexPage> }
 *                嵌套组件: 不再用render, 而是直接写在<Route></Route>
 *     (2) 如果要实现路由跳转的则需要将history传进去(在App.js注册的组件都会有history)
 *         v6以上的版本需要额外安装history => history = createBrowserHistory()
 *     (3) <Outlet />
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route element={ <LoginPage /> } path="/Login"></Route>
        <Route path="/" element={ <IndexPage /> }>
          <Route element={<Course />} path="/course"></Route>
          <Route element={<RecomCourse />} path="/recom_course"></Route>
          <Route element={<Slider />} path="/slider"></Route>
          <Route element={<Collection />} path="/collection"></Route>
          <Route element={<Teacher />} path="/teacher"></Route>
          <Route element={<Student />} path="/student"></Route>
          <Route element={<Crawler />} path="/crawler"></Route>
          <Route element={<Error />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;