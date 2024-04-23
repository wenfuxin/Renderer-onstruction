// text 组件输入类的通用的方法
export const TEXT_INPUT_METHODS = {
  computed: {
     text() {
      const value = this.value;
      if (value === null || value === undefined || value === "") {
        return '未输入'
      }
        
      return this.value;
    },
  },
};
// 通用方法
export const common_methods = {
  methods: {