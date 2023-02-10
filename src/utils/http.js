import axios from 'axios';
import qs from 'qs';

/**
 * 因为服务器与浏览器不同源, 所以并没有办法携带cookie
 *   http请求是无状态的, 所以服务器不知道浏览器具体是谁
 *   前端哪怕是存到localStorage, 也存在伪造的可能, 所以一定需要服务器帮我们验证
 *   服务端: loginCheck => 检查session
 *   前端axios需要开启withCredentials: true
 */

export default class HTTP {
  axiosPost(options) {
    axios({
      url: options.url,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true,
      data: qs.stringify(options.data)
    })
      .then((res) => options.success(res.data))
      .catch((err) => options.error(err))
  }

  axiosGet(options) {
    axios({
      url: options.url,
      method: 'get',
      withCredentials: true,
    })
      .then((res) => options.success(res.data))
      .catch((err) => options.error(err))
  }
}