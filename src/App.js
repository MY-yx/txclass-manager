import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from "pages/Index";
import LoginPage from "pages/Login";
import DetailPage from "pages/sub/Detail";
import ListPage from "pages/sub/List";

/**
 * 引入react-router-dom中需要的;
 *   需要注意: 
 *     (1) ^6.2.1及以上版本的react-router-dom已经把Switch修改为Routes了
 *                component={ IndexPage } => element={ <IndexPage></IndexPage> }
 *                嵌套组件: 不再用render, 而是直接写在<Route></Route>
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route element={ <LoginPage></LoginPage> } path="/Login"></Route>
        <Route path="/" element={ <IndexPage></IndexPage> }>
          <Route index element={<ListPage></ListPage>} path="/list"></Route>
          <Route element={<DetailPage></DetailPage>} path="/detail"></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;