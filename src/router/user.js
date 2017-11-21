
import signup from '@/components/login_signup/signup'
import login from '@/components/login_signup/login'


export const userRouterMap = [
    {
        path: '/signup',
        // name: 'province_bar1',
        component: signup
    },
  
    {
        path: '/login',
        // name: 'province_bar1',
        component: login
    },
]