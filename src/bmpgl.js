// bmpgl.js
export function BMPGL(ak) {
    return new Promise(function(resolve, reject) {
      window.init = function() {
        // eslint-disable-next-line
        resolve(BMapGL)
      }
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `http://api.map.baidu.com/api?v=2.0&type=webgl&ak=A7OGYxBUx1KN3A4XuXc0grb0T6hTEsU8&callback=init`
      script.onerror = reject
      document.head.appendChild(script)
    })
  }