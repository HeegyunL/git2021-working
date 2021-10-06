// https://react.vlpt.us/styling/02-css-module.html
// css module
// 파일명.module.css
// css를 사용하는 컴포넌트 범위로 css class 사용범위를 좁힐 수 있음.

import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import Home from "./features/home/Home";
import Profile from "./features/Profile/Profile";
import Progress from "./components/progress/Progress";
import AlertStack from "./components/alert/AlertStack";

// SPA(Single Page Application)
// : 페이지 파일이 1개, index.html
// : 특정 영역(Switch)에 컴포넌트(js)를 로딩함
// : 애플리케이션이 컴파일될 때 import한 컴포넌트가 같이 컴파일됨
//   -> 컴파일됐을 때 파일크기가 커짐, 초기 로딩할 때 시간 걸림

// Lazy-Loading 처리
// 컴포넌트를 방문하는 시점에 로딩함
const Todo = lazy(() => import("./features/Todo/TodoInlineEdit"));
const Feed = lazy(() => import("./features/Feed/Feed"));
const Contact = lazy(() => import("./features/Contact/Contact"));
const ContactCreate = lazy(() => import("./features/Contact/ContactCreate"));
const ContactDetail = lazy(() => import("./features/Contact/ContactDetail"));
const ContactEdit = lazy(() => import("./features/Contact/ContactEdit"));
const Photo = lazy(() => import("./features/photo/Photo"));
const PhotoCreate = lazy(() => import("./features/photo/PhotoCreate"));
const PhotoDetail = lazy(() => import("./features/photo/PhotoDetail"));
const PhotoEdit = lazy(() => import("./features/photo/PhotoEdit"));


function App() {
  return (
    <Provider store={store}>
    <Router>
      {/* main container */}
      <div className="mx-auto">
        <header className="app-bar d-flex justify-content-end bg-primary shadow">
          <Profile />
        </header>
        <nav className="drawer-menu position-fixed bg-light shadow-sm">
          <h3 className="ms-2">MY WORKSPACE</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Todo">Todo</Link>
            </li>
            <li>
              <Link to="/Feed">Feed</Link>
            </li>
            <li>
              <Link to="/Contacts">Contact</Link>
            </li>
            <li>
              <Link to="/Photos">Photos</Link>
            </li>
          </ul>
        </nav>
        <main className="content-container">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Todo" component={Todo} />
              <Route path="/Feed" component={Feed} />
              <Route path="/Feed" component={Feed} />
              <Route path="/Contacts" component={Contact} exact />
              <Route path="/contacts/create" component={ContactCreate} />
              <Route path="/contacts/detail/:id" component={ContactDetail} />
              <Route path="/contacts/edit/:id" component={ContactEdit} />
              <Route path="/photos" component={Photo} exact />
              <Route path="/photos/create" component={PhotoCreate} />
              <Route path="/photos/detail/:id" component={PhotoDetail} />
              <Route path="/photos/edit/:id" component={PhotoEdit} />
            </Switch>
          </Suspense>

          <Progress />
          <AlertStack />
        </main>
      </div>
    </Router>
    </Provider>
  );
}

export default App;