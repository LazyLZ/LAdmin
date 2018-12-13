import axios from 'axios'
import {handleError} from './handleError'

export default {
  alert ({commit}, attr) {
    commit('$L/openAlert', attr)
  },
  confirm ({commit}, attr) {
    commit('$L/openOperation', attr)
  },
  async getDataFromApi ({dispatch}, {method, url, checkStatus = true, ...other}) {
    if (!url) {
      throw TypeError('url cannot be null')
    }
    let typeMap = new Set(['get', 'post', 'put', 'delete', 'head', 'patch'])
    if (!typeMap.has(method)) {
      throw TypeError('type can only be get|post|delete|put|head|patch')
    }
    let res = null
    try {
      res = await axios({method, url, ...other})
      console.log('res', res)
      if (checkStatus && res.data.statusCode + '' === '200') {
        return res.data.data
      }
      else if (!checkStatus) {
        return res.data
      }
      else {
        throw res.data
      }
    }
    catch (e) {
      console.error('error', e)
      if (e instanceof Promise) {
        let err = await e
        throw handleError(err)
      }
      else {
        throw handleError(e)
      }
    }
  },
  // 通用获取列表组件
  async getDataList ({dispatch, commit}, {pagination, param = {}, type = 'post', url = ''}) {
    if (!pagination) {
      throw TypeError('pagination cannot be null')
    }
    if (!url) {
      throw TypeError('url cannot be null')
    }
    try {
      let res = await dispatch('getDataFromApi', {
        method: type,
        url: url,
        params: {
          pageNum: pagination.page,
          pageSize: pagination.rowsPerPage,
        }
      })
      return {items: res.list || [], amount: res.total || 0}
    }
    catch (e) {
      console.log(e)
      throw handleError(e)
    }
  }
}
