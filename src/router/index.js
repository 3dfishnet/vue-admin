import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

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
    path: '/gateway',
    component: Layout,
    redirect: '/gateway/device',
    name: 'Gateway',
    meta: { title: '门禁管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'device',
        name: 'GatewayDevice',
        component: () => import('@/views/gateway/device'),
        meta: { title: '门禁设备', icon: 'table' }
      },
      {
        path: 'face',
        name: 'GatewayFace',
        component: () => import('@/views/gateway/face'),
        meta: { title: '门禁人脸', icon: 'table' }
      },
      {
        path: 'record',
        name: 'GatewayRecord',
        component: () => import('@/views/gateway/record'),
        meta: { title: '开门记录', icon: 'table' }
      },
      {
        path: 'log',
        name: 'GatewayLog',
        component: () => import('@/views//gateway/log'),
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
