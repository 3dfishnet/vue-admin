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
        path: 'parkingLot',
        name: 'ParkingLot',
        component: () => import('@/views/community/parkingLot'),
        meta: { title: '停车场', icon: 'table' }
      },
      {
        path: 'parkingSpace',
        name: 'ParkingSpace',
        component: () => import('@/views/community/parkingSpace'),
        meta: { title: '停车位', icon: 'table' }
      },
      {
        path: 'car',
        name: 'Car',
        component: () => import('@/views/community/car'),
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
        name: 'accessDevice',
        component: () => import('@/views/gateway/device'),
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
        name: 'barrierDevice',
        component: () => import('@/views/barrier/device'),
        meta: { title: '道闸设备', icon: 'table' }
      },
      {
        path: 'control',
        name: 'Control',
        component: () => import('@/views/barrier/control'),
        meta: { title: '控制中心', icon: 'table' }
      },
      {
        path: 'carIn',
        name: 'CarIn',
        component: () => import('@/views/barrier/carIn'),
        meta: { title: '车辆进场', icon: 'table' }
      },
      {
        path: 'carOut',
        name: 'CarOut',
        component: () => import('@/views/barrier/carOut'),
        meta: { title: '车辆出场', icon: 'table' }
      },
      {
        path: 'protocol',
        name: 'Protocol',
        component: () => import('@/views/barrier/protocol'),
        meta: { title: '道闸协议', icon: 'table' }
      }
    ]
  },

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
