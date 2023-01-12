import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import About from "./pages/about";
import Home from "./pages/home";
import Stocks from "./pages/stocks";
import Stock from "./pages/stock";

const router = createBrowserRouter(
    createRoutesFromElements( 
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="stocks" element={<Stocks/>}/>
            <Route path="stock/:symbol" element={<Stock/>}/>
     
        </Route>
    )
)

export default router; 