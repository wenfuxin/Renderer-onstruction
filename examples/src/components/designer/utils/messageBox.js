import { MessageBox ,Message} from "element-ui";
// 删除确认
export function confirmDelete(message = "确认删除吗？") {
  return MessageBox.confirm(message, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  });
}

// 尚未选中组件
export function notSelected() {
  MessageBox.alert("尚未选中组件", "提示", {
    confirmButtonText: "确定",
  });
}

export function messageSuccess(message) {
  Message({
    message: message,
    type: "success",
  });
}