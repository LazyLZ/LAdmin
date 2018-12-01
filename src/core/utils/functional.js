let saveToLocal = function (key, value) {
  if (!value) return
  let v = value instanceof Object ? JSON.stringify(value) : value
  sessionStorage.setItem(key, v)
}

let getFromLocal = function (key) {
  let value = sessionStorage.getItem(key)
  try {
    return JSON.parse(value)
  }
  catch (e) {
    return value
  }
}

export default {
  saveToLocal,
  getFromLocal
}
