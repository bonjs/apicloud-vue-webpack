
<template>
  <div>
    <the-nav></the-nav>
    <div> 这是m108</div>
    <button @click="go()"> 下一页</button>
  </div>
</template>
<script>


import Vue from 'vue';
import axios from 'axios';
import theNav from './theNav.vue'

import vconsole from 'vconsole'

new vconsole();

export default {
  data() {
    return {
    };
  },
  async mounted() {
  },
  methods: {
    go() {
      window.location.href = "./m109.html";
      return;
      if (window.api) {
        api.openWin({
          name: "m109",
          url: "./m109.html"
        });
      } else {
        window.location.href = "./m109.html"
      }
    }
  },
  components: {
    theNav
  }
};
</script>
<style>

</style>


