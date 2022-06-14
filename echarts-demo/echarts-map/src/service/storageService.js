// 本地缓存服务，缓存前缀取 .env.item
const PREFIX = `${process.env.VUE_APP_NAME}_`

// user 模块
const USER_PREFIX = `${PREFIX}user_`
const USER_TOKEN = `${USER_PREFIX}token`
const USER_INFO = `${USER_PREFIX}info`

// 储存
const set = (key, data) => {
  localStorage.setItem(PREFIX + key, data)
}

// 读取
const get = (key) => localStorage.getItem(PREFIX + key)

export default {
  set,
  get,
  USER_TOKEN,
  USER_INFO
}
