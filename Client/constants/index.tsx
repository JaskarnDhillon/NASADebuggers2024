import CoursesIcon from "@/app/(platform)/components/CoursesIcon";
import DashboardIcon from "@/app/(platform)/components/DashboardIcon";
import GradeIcon from "@/app/(platform)/components/GradeIcon";
import QuizIcon from "@/app/(platform)/components/QuizIcon";

export const siderbarLinks = [
  {
    title: "Dashboard",
    route: "/dashboard",
    icon:<DashboardIcon/>,
  },
  {
    title: "Courses",
    route: "/dashboard/courses",
    icon:<CoursesIcon/>,
  },
  {
    title: "Grades",
    route: "/dashboard/grades",
    icon:<GradeIcon/>,
  },
  {
    title: "Quizzes",
    route: "/dashboard/quizzes",
    icon:<QuizIcon/>,
  },

]
  
 
  export const headerLinks = [
    {
      title: "About",
      route:'/about'
    },
    {
      title: "Subjects",
      route:'#subjects'
    },
    {
      title: "My Progress",
      route:'/dashboard'
    },
]
  
export const learningStats = [
  {
    title:"Create Account",
    icon:"/check.svg"
  },
  {
    title:"View Lessons",
    icon:"/check.svg"
  },
  {
    title:"Start Learning",
    icon:"/check.svg"
  },
]
  
 
  