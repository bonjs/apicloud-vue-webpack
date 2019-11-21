
<template>
  <div>
    <the-nav></the-nav>
    <div> 这是m51</div>
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
      window.location.href = "./m52.html";
      return;
      if (window.api) {
        api.openWin({
          name: "m52",
          url: "./m52.html"
        });
      } else {
        window.location.href = "./m52.html"
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


