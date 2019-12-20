const Tool = {
  numberFormat(number, decimals, dec_point, thousands_sep) {
    /*
     * 参数说明：
     * number：要格式化的数字
     * decimals：保留几位小数
     * dec_point：小数点符号
     * thousands_sep：千分位符号
     * */
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    let n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function (n, prec) {
        let k = Math.pow(10, prec);
        return '' + Math.ceil(n * k) / k;
      };

    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    let re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, '$1' + sep + '$2');
    }

    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  },
  // 判断字符串是否为json数据
  isJsonString(str) {
    try {
      if (typeof JSON.parse(str) === 'object') {
        return true
      }
    } catch (e) {
      console.warn('不是一个有效的JSON String')
    }
    return false
  },
  // 打开url
  openURL(url, target = '_self') {
    //创建A标签
    let a = document.createElement('a');
    //给创建好的a标签赋值
    a.setAttribute('href', url);
    //设置css 隐藏属性
    a.setAttribute('style', 'display:none');
    //设置 a标签为新窗口打开
    a.setAttribute('target', target);
    //将设置好的a标签，添加到 body 内
    document.body.appendChild(a);
    //模拟点击
    a.click();
    //移除a标签
    a.parentNode.removeChild(a);
  },
  // 用于生成 唯一unid
  unid(idtype = '', length = 18) {
    const S4 = () => {
      const rad = 1 + Math.random()
      const radKey = (rad * 0x10000) | 0
      return radKey.toString(16).substring(1)
    }
    // const s4 = S4() + S4() + S4() + S4() + S4() + S4()
    const code = S4() + Tool.getRandomCode()
    return (idtype.substr(0, 5) + code).substr(0, length)
  },
  // 用于生成随机序列
  getRandomCode(length = 25) {
    if (!(length > 0)) return false
    let data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let nums = "";
    for (let i = 0; i < length; i++) {
      let r = parseInt(Math.random() * 61);
      nums += data[r];
    }
    return nums
  },
  // 加载本地数据
  loadData(url, option = {}) {
    let cof = {
      isJson: true,
      async: true,
      timeout: 60000,
      responseType: 'text',
      headers: {}
    }
    let opt = Object.assign({}, cof, option)
    return new Promise((resolve, reject) => {
      let xmlhttp = null
      // code for Firefox, Opera, IE7, etc.
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
        // code for IE6, IE5
      } else if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      // 设置期望的返回数据类型
      xmlhttp.responseType = opt.responseType
      // 设置请求头
      for (const key of Object.keys(opt.headers)) {
        xmlhttp.setRequestHeader(key, opt.headers[key]);
      }
      // 设置超时时间
      if (opt.async && opt.timeout) {
        xmlhttp.timeout = opt.timeout
      }
      xmlhttp.open('GET', url, opt.async)
      xmlhttp.addEventListener('load', e => {
        const status = xmlhttp.status;
        if ((status >= 200 && status < 300) || status === 304) {
          let result = null;
          if (xmlhttp.responseType === 'text') {
            result = xmlhttp.responseText;
          } else if (xmlhttp.responseType === 'document') {
            result = xmlhttp.responseXML;
          } else {
            result = xmlhttp.response;
          }
          if (opt.isJson && Tool.isJsonString(result)) {
            resolve(JSON.parse(result))
          } else {
            resolve(result)
          }
        }
      })
      xmlhttp.send(null)
    })
  },
  // 时间戳转换成指定格式日期 绝对时间
  timeFormat(timestamp, formats) {
    // formats格式包括
    // 1. Y-m-d
    // 2. Y-m-d H:i:s
    // 3. Y年m月d日
    // 4. Y年m月d日 H时i分
    formats = formats || 'Y-m-d'
    let zero = (value) => {
      if (value < 10) {
        return '0' + value
      }
      return value
    }
    let myDate = timestamp ? new Date(timestamp) : new Date()
    let year = myDate.getFullYear()
    let month = zero(myDate.getMonth() + 1)
    let day = zero(myDate.getDate())
    let hour = zero(myDate.getHours())
    let minite = zero(myDate.getMinutes())
    let second = zero(myDate.getSeconds())
    return formats.replace(/Y|m|d|H|i|s/ig, (matches) => {
      return ({
        Y: year,
        m: month,
        d: day,
        H: hour,
        i: minite,
        s: second
      })[matches]
    })
  }
}
export default Tool