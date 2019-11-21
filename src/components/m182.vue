
<template lang="pug">
  .list
    the-nav
    div 这是m182
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
      window.location.href = "./m183.html";
      return;
      if (window.api) {
        api.openWin({
          name: "m183",
          url: "./m183.html"
        });
      } else {
        window.location.href = "./m183.html"
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


