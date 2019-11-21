
<template>
  <div>
    <the-nav></the-nav>
    <div> 这是m84</div>
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
      window.location.href = "./m85.html";
      return;
      if (window.api) {
        api.openWin({
          name: "m85",
          url: "./m85.html"
        });
      } else {
        window.location.href = "./m85.html"
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


