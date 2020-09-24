const URL = require('url');
/**
 * 關鍵點：
 * 1、如果需要支援 cookies,
 *    Access-Control-Allow-Origin 不能設定為 *,
 *    並且 Access-Control-Allow-Credentials 需要設定為 true
 *    (注意前端請求需要設定 withCredentials = true)
 * 2、當 method = OPTIONS 時, 屬於預檢(複雜請求), 當為預檢時, 可以直接返回空響應體, 對應的 http 狀態碼為 204
 * 3、通過 Access-Control-Max-Age 可以設定預檢結果的快取, 單位(秒)
 * 4、通過 Access-Control-Allow-Headers 設定需要支援的跨域請求頭
 * 5、通過 Access-Control-Allow-Methods 設定需要支援的跨域請求方法
 */
module.exports = async function (ctx, next) {
  const origin = URL.parse(ctx.get('origin') || ctx.get('referer') || '');
  if (origin.protocol && origin.host) {
    ctx.set('Access-Control-Allow-Origin', `${origin.protocol}//${origin.host}`);
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    ctx.set('Access-Control-Allow-Headers', 'X-Requested-With, User-Agent, Referer, Content-Type, Cache-Control,accesstoken');
    ctx.set('Access-Control-Max-Age', '86400');
    ctx.set('Access-Control-Allow-Credentials', 'true');
  }
  if (ctx.method !== 'OPTIONS') {
    // 如果請求型別為非預檢請求，則進入下一個中介軟體（包括路由中介軟體等）
    await next();
  } else {
    // 當為預檢時，直接返回204,代表空響應體
    ctx.body = '';
    ctx.status = 204;
  }
};