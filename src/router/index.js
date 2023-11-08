import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/community',
    component: Layout,
    redirect: '/community/person',
    name: 'Community',
    meta: { title: '小区管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'person',
        name: 'Person',
        component: () => import('@/views/community/person'),
        meta: { title: '小区人员', icon: 'table' }
      },
      {
        path: 'parkingArea',
        name: 'ParkingArea',
        component: () => import('@/views/404'),
        meta: { title: '停车场', icon: 'table' }
      },
      {
        path: 'parkingLot',
        name: 'ParkingLot',
        component: () => import('@/views/404'),
        meta: { title: '停车位', icon: 'table' }
      },
      {
        path: 'car',
        name: 'Car',
        component: () => import('@/views/404'),
        meta: { title: '小区车辆', icon: 'table' }
      }
    ]
  },

  {
    path: '/access',
    component: Layout,
    redirect: '/access/device',
    name: 'Access',
    meta: { title: '门禁管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'device',
        name: 'Device',
        component: () => import('@/views/404'),
        meta: { title: '门禁设备', icon: 'table' }
      },
      {
        path: 'face',
        name: 'Face',
        component: () => import('@/views/404'),
        meta: { title: '门禁人脸', icon: 'table' }
      },
      {
        path: 'record',
        name: 'Record',
        component: () => import('@/views/404'),
        meta: { title: '开门记录', icon: 'table' }
      },
      {
        path: 'log',
        name: 'Log',
        component: () => import('@/views/404'),
        meta: { title: '操作日志', icon: 'table' }
      }
    ]
  },

  {
    path: '/barrier',
    component: Layout,
    redirect: '/barrier/device',
    name: 'barrier',
    meta: { title: '道闸管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'device',
        name: 'Device',
        component: () => import('@/views/barrier/device'),
        meta: { title: '道闸设备', icon: 'table' }
      },
      {
        path: 'control',
        name: 'Control',
        component: () => import('@/views/404'),
        meta: { title: '控制中心', icon: 'table' }
      },
      {
        path: 'carIn',
        name: 'CarIn',
        component: () => import('@/views/404'),
        meta: { title: '车辆进场', icon: 'table' }
      },
      {
        path: 'carOut',
        name: 'CarOut',
        component: () => import('@/views/404'),
        meta: { title: '车辆出场', icon: 'table' }
      },
      {
        path: 'protocol',
        name: 'Protocol',
        component: () => import('@/views/404'),
        meta: { title: '道闸协议', icon: 'table' }
      }
    ]
  },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // }

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
