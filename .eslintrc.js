// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
  extends: "plugin:vue/recommended",
  rules: {
    "vue/component-definition-name-casing": [ "error", "kebab-case" ],
    "quotes": [ 2, "double" ],
    "object-curly-spacing": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ]
  }
}
