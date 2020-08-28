const vueRouter = require("vue-router");
const Vue = require("vue");

Vue.use(vueRouter);

module.exports = () => {
  return new vueRouter({
    mode: "history",
    routes: [
      {
        path: "/",
        redirect: "/home"
      },
      {
        path: "/home",
        name: "home",
        component: {
          template: `<div>首页</div>`
        }
      },
      {
        path: "/detail",
        name: "detail",
        component: {
          template: `<div>详情页</div>`
        }
      },
    ]
  })
}