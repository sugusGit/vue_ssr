const createApp = require("./main.js");
const { app, router } = createApp();

router.onReady(() => {
  app.$mount("#app");
})