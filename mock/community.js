const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    personFace: 'face', // 随机生成200x100的图片URL
    personName: '@cname', // 随机生成中文名字
    'personPhone|11': '@integer(0, 9)', // 随机生成11位电话号码
    'personID|18': '@integer(0, 9)', // 随机生成18位身份证号
    'personType|1': ['1', '2', '3'], // 从数组中随机选择人员类型
    'personCreateTime|1': ['2023-11-01', '2023-11-02', '2023-11-03'] // 从数组中随机选择创建时间
  }]
})

module.exports = [
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
    url: '/iot/community/persons',
    type: 'get',
    response: config => {
      const allItems = data.items
      const query = config.query
      // console.log(query)
      const fliterItems = allItems.filter((item) => {
        if (Object.keys(query).length === 0) return true // 传空对象
        else return (query.personName === '' || item.personName === query.personName) && (query.personType === '' || item.personType === query.personType)
      })
      return {
        code: 20000,
        data: {
          total: fliterItems.length,
          items: fliterItems
        }
      }
    }
  },
  {
    url: '/iot/community/persons',
    type: 'post',
    response: config => {
      data.items.push({ ...config.body })
      return {
        code: 20000
      }
    }
  }
]
