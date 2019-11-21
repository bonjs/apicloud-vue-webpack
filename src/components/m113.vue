
<template lang="pug">
  .list
    the-nav
    div 这是m113
    button(@click="go()") 下一页
    
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
      window.location.href = "./m114.html";
      return;
      if (window.api) {
        api.openWin({
          name: "m114",
          url: "./m114.html"
        });
      } else {
        window.location.href = "./m114.html"
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


