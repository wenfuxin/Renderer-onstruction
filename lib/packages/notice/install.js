// 引入 message
import { CMessage } from "./src/message";
import { CMessageBox } from "./src/messageBox";

const install = function (Vue, opts = {}) {
  //Vue.prototype.$loading = Loading.service;
  Vue.prototype.$$msgbox = (options) => {
    return CMessageBox({
      ...options,
       customClass: options.customClass || "c-message-box",
    });
  };
  Vue.prototype.$$alert = CMessageBox.alert;
  Vue.prototype.$$confirm = CMessageBox.confirm;
  Vue.prototype.$$prompt = CMessageBox.prompt;
  //Vue.prototype.$notify = Notification;
  Vue.prototype.$$message = CMessage;
};

export default {
  version: "0.0.1",
  install,
  CMessage,
  CMessageBox,
};
