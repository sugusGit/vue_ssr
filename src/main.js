const Vue = require("vue");
const createRouter = require("./router");

module.exports = (context) => {
  const router = createRouter();
  const app = new Vue({
    router,
    data: {
      message: "hello, vue ssr!",
      context
    },
    template: `
      <div id="app">
        <div>
          <h1>{{message}}</h1>
          <h1>{{context.number}}</h1>
          <ul>
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/detail">详情页</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    `
  });
  return {
    app,
    router
  }
}