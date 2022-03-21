import HomePage from "../pages/home"
import LoginPage from "../pages/login"

export const routes =[
    {
      exact: true,
      path:'/',
      component: LoginPage
    },
    {
      path:'/login',
      component: LoginPage
    },
    {
      path:'/master',
      component: HomePage
    },
  ]