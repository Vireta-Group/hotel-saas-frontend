import { createRoutesFromElements, createBrowserRouter, Route } from "react-router";
import ContentBox from "../compoents/ContentBox";
import Root from "./Root";

const routerConfig = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route path="home" element={<ContentBox />} />
    </Route>
))


export default routerConfig;