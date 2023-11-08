const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    face: '@image("80x100")', // 随机生成200x100的图片URL
    name: '@cname', // 随机生成中文名字
    'tel|11': '@integer(0, 9)', // 随机生成11位电话号码
    'id|18': '@integer(0, 9)', // 随机生成18位身份证号
    'type|1': ['1', '2', '3'], // 从数组中随机选择人员类型
    'time|1': ['2023-11-01', '2023-11-02', '2023-11-03'] // 从数组中随机选择创建时间
  }]
})

module.exports = [
  {
    url: '/iot/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/iot/barrier/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: null
        }
      }
    }
  },
  {
    url: '/iot/communityManage/list',
    type: 'get',
    response: config => {
      const allItems = data.items
      const query = config.query
      console.log('===========================query=================================')
      // console.log(config)
      console.log(query)
      console.log(query.name)
      console.log(query.type)
      console.log(query.length)
      console.log('=================================================================')
      const fliterItems = allItems.filter((item) => {
        if (Object.keys(query).length === 0) return true // 传空对象
        else return (query.name === '' || item.name === query.name) && (query.type === '' || item.type === query.type)
      })
      return {
        code: 20000,
        data: {
          total: fliterItems.length,
          items: fliterItems
        }
      }
    }
  }
]
