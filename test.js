function getType(params) {
  return Object.prototype.toString.call(params).slice(8, -1).toLowerCase()
}

function isColor(key) {
  if (!key) return false
  return key.toLowerCase().indexOf('color') > -1
}

const obj = {
  name: 'xy',
  age: 18,
  home: {
    parent: {
      mather: 'lyg',
      father: 'lmx'
    },
    brother: {
      name: 'lxh'
    }
  },
  favo: ['web', 1234, false],
  isStudent: false,
  bgColor: 'red'
}

const parseRet = {}

function parseObj(obj, ret) {
  const keys = Object.keys(obj)

  for (const key of keys) {
    if (getType(obj[key]) === 'string' || getType(obj[key]) === 'number' || getType(obj[key]) === 'boolean') {
      ret[key] = {
        type: getType(obj[key]),
        title: ''
      }
      if (isColor(key)) {
        ret[key].format = 'color'
      }
    } else if (getType(obj[key]) === 'array') {
      let types = []
      obj[key].forEach(item => {
        if (!types.includes(getType(item))) {
          types.push(getType(item))
        }
      })
      ret[key] = {
        type: types,
        title: ''
      }
    } else if (getType(obj[key]) === 'object') {
      ret[key] = {
        type: getType(obj[key]),
        title: '',
      }
      if (!ret[key].properties) {
        ret[key].properties = {}
      }
      parseObj(obj[key], ret[key].properties)
    }
  }
}

parseObj(obj, parseRet)

console.log(parseRet)
