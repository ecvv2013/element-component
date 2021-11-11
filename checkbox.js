<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.15.6/lib/index.js"></script>
<div id="app">
<template>
  <!-- `checked` 为 true 或 false -->
  <el-checkbox v-model="checked">备选项</el-checkbox>
</template>
</div>

@import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css");

var Main = {
    data() {
      return {
        checked: true
      };
    }
  };
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')
