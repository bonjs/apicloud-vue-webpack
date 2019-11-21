
<template>
  <div>
    <the-nav></the-nav>
    <div> 这是m42</div>
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
      window.location.href = "./m43.html";
      return;
      if (window.api) {
        api.openWin({
          name: "m43",
          url: "./m43.html"
        });
      } else {
        window.location.href = "./m43.html"
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


