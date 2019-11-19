#/bin/sh


for((i = 1; i <= 100; i++))
do
	echo "


<template lang="pug">
  .list
    the-nav
    div 这是m$i
    
</template>
<script>


import Vue from 'vue';
import axios from 'axios';
import theNav from './theNav.vue'
export default {
  data() {
    return {
    };
  },
  async mounted() {
  },
  methods: {
  },
  components: {
    theNav
  }
};
</script>
<style>

</style>

" > m$i.vue
done
