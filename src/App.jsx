import {  Routes, Route, BrowserRouter } from "react-router-dom";
import ShowProducts from './components/ShowProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/store-vite-raect/' element={<ShowProducts />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
