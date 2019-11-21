
<template lang="pug">
  .list
    the-nav
    div 这是m118
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
      window.location.href = "./m119.html";
      return;
      if (window.api) {
        api.openWin({
          name: "m119",
          url: "./m119.html"
        });
      } else {
        window.location.href = "./m119.html"
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


