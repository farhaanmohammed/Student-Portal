import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import View from "./View";
import Addform from "./AddStudentForm";


export const router=createBrowserRouter([
    {path:'/',element:<App/>},
    {path:'/view',element:<View/>},
    {path:'/addform',element:<Addform/>},
])