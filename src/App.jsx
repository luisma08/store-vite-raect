import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/section/Header";
import Main from "./components/section/main";
import ShowProducts from './components/ShowProducts';

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App;
