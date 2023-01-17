import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowProducts from "../ShowProducts";

const Main = () => {
    return(
        <BrowserRouter>
            <Routes>
            <Route path='/store-vite-raect/' element={<ShowProducts />}>

            </Route>
            </Routes>
      </BrowserRouter>
    );
};

export default Main;