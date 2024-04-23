<template>
  <WidgetContainer @blur="handleBlur" :status="status">
    <template slot="widget">
      <el-select
        v-bind="$attrs"
        v-on="evet"
        :class="{ block }"
        :multiple="multiple"
        :clearable="clearable"
        :popper-class="`c-select__popper ${popperClass}`"
      >
        <template v-for="(_, name) in computedSlots" :slot="name">
          <slot :name="name"> </slot>
        </template>
        <template slot="prefix">
          <slot name="prefix" :selectedOption="selectedOption"></slot>
        </template>
        <el-option
          v-for="item in optionsValue"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <template v-if="!customOption">
            <span class="c-select__option-label">
              {{ item.label }}
            </span>
            <!-- 选项描述 -->
            <span class="c-select__option-desc">
              <el-tooltip
                v-if="item.desc"
                class="item"
                effect="dark"
                :content="item.desc"
                placement="top-start"
              >
                <i class="el-icon-info desc-icon"></i>
              </el-tooltip>
            </span>
          </template>

          <!-- 自定义option -->
          <template v-if="customOption">
            <slot
              name="option"
              :item="item"
              :selectedOption="selectedOption"
            ></slot>
             <span class="c-select__option-desc">
              <el-tooltip
                v-if="item.desc"
                class="item"
                effect="dark"
                :content="item.desc"
                placement="top-start"
              >
                <i class="el-icon-info desc-icon"></i>
              </el-tooltip>
            </span>
          </template>
        </el-option>
      </el-select>
    </template>
    <template slot="text">
      <component
        :is="componentName"
        v-bind="$attrs"
        v-on="evet"
        :options="optionsValue"
      ></component>
    </template>
  </WidgetContainer>
</template>
<script>
import WidgetContainer from "./widget-container";
import { COMMON ,CHOICE} from "../mixins/form/props";

export default {
  name: "c-select",
  components: {
    WidgetContainer,
  },
  mixins: [COMMON, CHOICE],
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },

    clearable: {
      type: Boolean,
      default: true,
    },
    popperClass: {
      type: String,
      default: "",
    },

    // 是否独占一行
    block: {
      type: Boolean,
      default: false,
    },

    textComponent: {
      type: String,
      default: "c-text-select",
    },

    // 是否是自定义option
    customOption: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    componentName() {
      return this.textComponent;
    },
    computedSlots() {
      // 过滤掉prefix
      return Object.keys(this.$slots).filter((key) => key !== "prefix");
    },
  },
};
</script>
