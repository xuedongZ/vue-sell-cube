const ERR_OK = 0
export function get (url) {
  return function (params) {
    // 对同一个url返回一个新的方法，新的方法我们再去接受一些参数, 没必要每次都把url都当参数传。我们通过颗粒化的方式，把参数固化到这里面。
    return axios
      .get(url, {
        params
      })
      .then(res => {
        const { err, data } = res.data
        if (errno === ERR_OK) {
          return data
        }
      })
      .catch(() => {})
  }
}
