const user = require('./user')
const community = require('./community')

const mocks = [
  ...user,
  ...community
]

module.exports = {
  mocks
}
