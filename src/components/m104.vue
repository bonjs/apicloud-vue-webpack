
<template>
  <div>
    <the-nav></the-nav>
    <div> 这是m104</div>
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
      window.location.href = "./m105.html";
      return;
      if (window.api) {
        api.openWin({
          name: "m105",
          url: "./m105.html"
        });
      } else {
        window.location.href = "./m105.html"
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


