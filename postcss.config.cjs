module.exports = {
  plugins: {
    // https://github.com/sexyHuang/postcss-px2vp
    "postcss-px2vp": {
      viewportWidth(rule) {
        const file = rule.source?.input.file;
        if (file?.includes("vant")) return 375;
        return 750;
      },
      propList: ["*", "!letter-spacing"], // '!line-height'
    },
  },
};
