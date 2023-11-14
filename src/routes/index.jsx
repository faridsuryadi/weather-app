import {
    Route,
    createRoutesFromElements,
  } from "react-router-dom";
import { Home } from "../pages/Home";
import { Credit } from "../pages/Credit";
const Routes = (
    <>
    <Route path="/" element={<Home/>}/>
    <Route path="/thank-you" element={<Credit/>}/>
    </>
)
export const routes = createRoutesFromElements(Routes);
