export default {
  name: "c-button",
  components: {},
  props: {
    iconName: {
      type: String,
      default: "",
    },
  },
  computed: {
    evet() {
      return this.$listeners;
    },
  },

  render() {
    const attrs = this.$attrs;
    const genIcon = () => {
      return <c-beautiful-icon iconName={this.iconName} />;
    };

    const genButton = () => {
      return (
        <el-button on={this.evet} {...{ attrs }}>
          {this.iconName ? genIcon() : null}
          {this.$slots.default}
        </el-button>
      );
    };

    return genButton();
  },
};
