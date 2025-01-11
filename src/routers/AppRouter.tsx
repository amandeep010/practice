import { lazy } from "react"

import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";

const Portfolio = lazy(()=>import('../pages/portfolio'))
const About = lazy(()=>import('../pages/about'))
const Setting = lazy(()=>import('../pages/setting'))
const Project = lazy(()=>import('../pages/project'))

const AppRouter = [
        {
            path:'/',
            name:`Portfolio`,
            element:<Portfolio/>,
            icon:<IoHome />
        },
        {
            path:'/about',    
            name:`About`,
            element:<About/>,
            icon:<IoMdCheckboxOutline/>,
        },
        {
            path:'/setting',
            name:`Setting`,
            element:<Setting/>,
            icon:<LuSettings2 />
        },
        {
            path:'/project',
            name:"Project",
            element:<Project/>,
            icon:<FaArrowUpFromWaterPump />,
        }
]

export default AppRouter