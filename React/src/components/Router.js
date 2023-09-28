import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Detail from "./DetailView";
import View from "./View";
import Addform from "./AddStudentForm";


export const router=createBrowserRouter([
    {path:'/',element:<App/>},
    {path:'/view',element:<View/>},
    {path:'/view/:id',element:<Detail/>},
    {path:'/addform',element:<Addform/>},
])