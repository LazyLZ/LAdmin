export function handleError (e) {
  if (typeof e === 'string') {
    return {
      message: e,
      code: 0
    }
  }
  else if (e instanceof Object) {
    if (e.hasOwnProperty('response')) {
      if (e.response instanceof Object) {
        let code = e.response.status
        return {
          message: e.response.statusText,
          code: code
        }
      }
      else {
        return {
          message: '服务器未响应',
          code: 'ERR_EMPTY_RESPONSE'
        }
      }
    }
    else if (e.hasOwnProperty('message')) {
      return {
        message: e.message || '未知错误',
        code: e.code || 0
      }
    }
    else if (e.hasOwnProperty('msg')) {
      let p = /^([A-Z_])+(\d)+$/i
      if (p.test(e.msg)) {
        return {
          code: e.msg || 0,
          message: e.data || '未知错误'
        }
      }
      else {
        return {
          message: e.msg || '未知错误',
          code: e.status || 0,
        }
      }
    }
    else {
      return {
        message: '未知错误: ' + e,
        code: -2
      }
    }
  }
  else {
    return {
      message: '未知错误: ' + e,
      code: -2
    }
  }
}
