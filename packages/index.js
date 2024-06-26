/* Automatically generated by './build/build-entry.js' */

import Button from '../packages/button/index.js';
import Container from '../packages/container/index.js';
import CascaderMultiple from '../packages/form/cascader-multiple.vue';
import Cascader from '../packages/form/cascader.vue';
import DatePicker from '../packages/form/date-picker.vue';
import DateTimePicker from '../packages/form/date-time-picker.vue';
import FormGrid from '../packages/form/form-grid.vue';
import FormItem from '../packages/form/form-item.vue';
import Form from '../packages/form/form.vue';
import InputNumber from '../packages/form/input-number.vue';
import InputTextarea from '../packages/form/input-textarea.vue';
import Input from '../packages/form/input.vue';
import Link from '../packages/form/link.vue';
import RadioGroupButton from '../packages/form/radio-group-button.vue';
import SelectMultiple from '../packages/form/select-multiple.vue';
import Select from '../packages/form/select.vue';
import Text from '../packages/form/text.vue';
import TimePicker from '../packages/form/time-picker.vue';
import WidgetContainer from '../packages/form/widget-container.vue';
import SelectPriority from '../packages/form-special/select-priority.vue';
import SelectSprint from '../packages/form-special/select-sprint.vue';
import SelectTaskStatus from '../packages/form-special/select-task-status.vue';
import SelectTaskType from '../packages/form-special/select-task-type.vue';
import SelectTask from '../packages/form-special/select-task.vue';
import SelectUser from '../packages/form-special/select-user.vue';
import CBeautifulAvatar from '../packages/icon/c-beautiful-avatar.vue';
import CBeautifulIcon from '../packages/icon/c-beautiful-icon.vue';
import CIconFontClass from '../packages/icon/c-icon-font-class.vue';
import CIconSvg from '../packages/icon/c-icon-svg.vue';
import TextCascaderMultiple from '../packages/text-widget/text-cascader-multiple.vue';
import TextCascader from '../packages/text-widget/text-cascader.vue';
import TextDateTime from '../packages/text-widget/text-date-time.vue';
import TextDate from '../packages/text-widget/text-date.vue';
import TextInput from '../packages/text-widget/text-input.vue';
import TextLink from '../packages/text-widget/text-link.vue';
import TextMultipleTask from '../packages/text-widget/text-multiple-task.vue';
import TextNumber from '../packages/text-widget/text-number.vue';
import TextPriority from '../packages/text-widget/text-priority.vue';
import TextSelectMultiple from '../packages/text-widget/text-select-multiple.vue';
import TextSelect from '../packages/text-widget/text-select.vue';
import TextStatus from '../packages/text-widget/text-status.vue';
import TextTaskType from '../packages/text-widget/text-task-type.vue';
import TextTask from '../packages/text-widget/text-task.vue';
import TextTextarea from '../packages/text-widget/text-textarea.vue';
import TextTime from '../packages/text-widget/text-time.vue';
import TextUser from '../packages/text-widget/text-user.vue';
import './theme/index.scss'
 // Global
import Global from "./global-methods/install";
const components = [
  Button,
  Container,
  CascaderMultiple,
  Cascader,
  DatePicker,
  DateTimePicker,
  FormGrid,
  FormItem,
  Form,
  InputNumber,
  InputTextarea,
  Input,
  Link,
  RadioGroupButton,
  SelectMultiple,
  Select,
  Text,
  TimePicker,
  WidgetContainer,
  SelectPriority,
  SelectSprint,
  SelectTaskStatus,
  SelectTaskType,
  SelectTask,
  SelectUser,
  CBeautifulAvatar,
  CBeautifulIcon,
  CIconFontClass,
  CIconSvg,
  TextCascaderMultiple,
  TextCascader,
  TextDateTime,
  TextDate,
  TextInput,
  TextLink,
  TextMultipleTask,
  TextNumber,
  TextPriority,
  TextSelectMultiple,
  TextSelect,
  TextStatus,
  TextTaskType,
  TextTask,
  TextTextarea,
  TextTime,
  TextUser,
];

const install = function(Vue, opts = {}) {

  if (install.installed) return

  components.forEach((component) => Vue.component(component.name, component))

  Vue.prototype.$beautiful = {
 
    buttonSize: opts.buttonSize || 'mini',
    
  }
  Global.install(Vue, { ...opts });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.2.3',
  install,
  Button,
  Container,
  CascaderMultiple,
  Cascader,
  DatePicker,
  DateTimePicker,
  FormGrid,
  FormItem,
  Form,
  InputNumber,
  InputTextarea,
  Input,
  Link,
  RadioGroupButton,
  SelectMultiple,
  Select,
  Text,
  TimePicker,
  WidgetContainer,
  SelectPriority,
  SelectSprint,
  SelectTaskStatus,
  SelectTaskType,
  SelectTask,
  SelectUser,
  CBeautifulAvatar,
  CBeautifulIcon,
  CIconFontClass,
  CIconSvg,
  TextCascaderMultiple,
  TextCascader,
  TextDateTime,
  TextDate,
  TextInput,
  TextLink,
  TextMultipleTask,
  TextNumber,
  TextPriority,
  TextSelectMultiple,
  TextSelect,
  TextStatus,
  TextTaskType,
  TextTask,
  TextTextarea,
  TextTime,
  TextUser
};
