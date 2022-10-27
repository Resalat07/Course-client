import { createBrowserRouter } from "react-router-dom";
import Course from "../components/Course/Course";
import Home from "../components/Home/Home";
import Login from "../components/LogIn/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import CourseDetails from "../components/CourseDetalis/CourseDetails";
import Carts from "../components/Cart/Carts";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import FAQPage from "../components/FAQPage/FAQPage";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/faqs',
                element:<FAQPage></FAQPage>
            },
            {
                path:'/course',
                element:<Course></Course>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'/courseDetail/:id',
                element:<CourseDetails></CourseDetails>,
                loader: ({params})=> fetch(`https://course-server-resalat07.vercel.app/courseDetails/${params.id}`)
            },
            {
                path:'/cart/:id',
                element:<PrivateRoute><Carts></Carts></PrivateRoute>,
                loader: ({params})=> fetch(`https://course-server-resalat07.vercel.app/courseDetails/${params.id}`)
                
            }
            
            
        ]
    }
    
            
])