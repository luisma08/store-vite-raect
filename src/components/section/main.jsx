import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowProducts from "../ShowProducts";
import Banner from "./banner";

const Main = () => {
    return(
        <>
            <Banner />
            <BrowserRouter>
                <Routes>
                <Route path='/store-vite-raect/' element={<ShowProducts />}>

                </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Main;