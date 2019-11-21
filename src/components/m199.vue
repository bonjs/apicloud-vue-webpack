
<template>
  <div>
    <the-nav></the-nav>
    <div> 这是m199</div>
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
      window.location.href = "./m200.html";
      return;
      if (window.api) {
        api.openWin({
          name: "m200",
          url: "./m200.html"
        });
      } else {
        window.location.href = "./m200.html"
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


