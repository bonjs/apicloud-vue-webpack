
<template lang="pug">
  .list
    the-nav
    div 这是m197
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
      window.location.href = "./m198.html";
      return;
      if (window.api) {
        api.openWin({
          name: "m198",
          url: "./m198.html"
        });
      } else {
        window.location.href = "./m198.html"
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


