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
import imageCrop from '@/components/imageCrop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home Page',
        metaTags: [
          {
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
        title: 'Community Page',
        metaTags: [
          {
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
        title: 'Faq Page',
        metaTags: [
          {
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
        title: 'Login Page',
        metaTags: [
          {
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
        title: ' Settings',
        metaTags: [
          {
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
        title: 'Register Page',
        metaTags: [
          {
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
        title: 'Thanks Page',
        metaTags: [
          {
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
        metaTags: [
          {
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
        title: 'Profile',
        metaTags: [
          {
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
      path: '/crop',
      name: 'imageCrop',
      component: imageCrop,
      meta: {
        title: 'imageCrop',
        metaTags: [
          {
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
