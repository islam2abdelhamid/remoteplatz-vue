import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Community from '@/components/Community'
import Faq from '@/components/Faq'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Thanks from '@/components/Thanks'
import Profile from '@/components/Profile'
import Settings from '@/components/Settings'
import Updated from '@/components/Updated'
import ForgotPassword from '@/components/ForgotPassword'
import Pending from '@/components/Pending'
import Exam from '@/components/Exam'
import Exams from '@/components/Exams'
import Video from '@/components/Video'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home Page',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },
    {
      path: '/remote-community',
      name: 'Community',
      component: Community,
      meta: {
        title: 'Remoteplatz - Community',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq,
      meta: {
        title: 'Remoteplatz - FAQ',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Remoteplatz - Login',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: {
        title: 'Remoteplatz - Settings',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: 'Join Remoteplatz Community',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks,
      meta: {
        title: 'Remoteplatz - Thanks Page',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },
    {
      path: '/updated',
      name: 'Updated',
      component: Updated,
      meta: {
        title: 'Updated Page',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        title: 'Remoteplatz - Profile',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },
    {
      path: '/forgot_password',
      name: 'ForgotPassword',
      component: ForgotPassword,
      meta: {
        title: 'Remoteplatz - Forgot Password',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },
    {
      path: '/pending',
      name: 'Pending',
      component: Pending,
      meta: {
        title: 'Remoteplatz - your profile will be verified soon !',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },
    {
      path: '/exams',
      name: 'Exams',
      component: Exams,
      meta: {
        title: 'Remoteplatz - Exams !',
        title: 'Remoteplatz - Exams !',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },
    {
      path: '/exam/:id',
      name: 'Exam',
      component: Exam,
      meta: {
        title: 'Remoteplatz - Data Structure Test !',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },
    {
      path: '/video/',
      name: 'Video',
      component: Video,
      meta: {
        title: 'Remoteplatz - Record Your Bio Video !',
        metaTags: [{
            name: 'description',
            content: ''
          },
          {
            property: 'og:description',
            content: ''
          }
        ]
      }
    },


  ],
  mode: 'history',
})
