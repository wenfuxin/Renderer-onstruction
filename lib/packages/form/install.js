import Form from "./c-form.vue";
import FormItem from "./c-form-item.vue";
import FormGrid from "./c-form-grid.vue";
import DatePicker from "./c-date-picker.vue";
import TimePicker from "./c-time-picker.vue";

import DateTimePicker from "./c-date-time-picker.vue";
import Input from "./c-input.vue";
import InputNumber from "./c-input-number.vue";
import InputTextarea from "./c-input-textarea.vue";
import Select from "./c-select.vue";
import SelectMultiple from "./c-select-multiple.vue";
import Cascader from "./c-cascader.vue";
import CascaderMultiple from "./c-cascader-multiple.vue";

import Text from "./c-text.vue";
import Link from "./c-link.vue";
import WidgetContainer from "./c-widget-container.vue";
 
//business-components

import SelectTask from "./business-components/c-select-task.vue";
import SelectPriority from "./business-components/c-select-priority";
import SelectUser from "./business-components/c-select-user.vue";

// theme css
import "./theme/index.scss";
import "./business-components/theme/index.scss";

const components = [
  Form,
  FormItem,
  FormGrid,
  DatePicker,
  TimePicker,
  DateTimePicker,
  Input,
  InputNumber,
  InputTextarea,
  Select,
  SelectMultiple,
  Cascader,
  CascaderMultiple,
  Text,
  Link,
  WidgetContainer,

  SelectTask,
  SelectPriority,
  SelectUser,
];

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  components.forEach((component) => Vue.component(component.name, component));

  const SIZE = opts.size || "small";

  Vue.prototype.$CFORM = {
    SIZE,
  };
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version: "0.0.1",
  install,
  Form,
  FormItem,
  FormGrid,
  DatePicker,
  TimePicker,
  DateTimePicker,
  Input,
  InputNumber,
  InputTextarea,
  Select,
  SelectMultiple,
  Cascader,
  CascaderMultiple,

  Text,
  Link,
  WidgetContainer,

  SelectTask,
  SelectPriority,
  SelectUser,
};
