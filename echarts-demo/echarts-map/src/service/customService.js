import request from '@/utils/request'

const customService = () => {
  return request.get('customService')
}

export default {
  customService
}
