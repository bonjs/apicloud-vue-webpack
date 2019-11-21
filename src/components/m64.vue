
<template>
  <div>
    <the-nav></the-nav>
    <div> 这是m64</div>
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
      window.location.href = "./m65.html";
      return;
      if (window.api) {
        api.openWin({
          name: "m65",
          url: "./m65.html"
        });
      } else {
        window.location.href = "./m65.html"
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


