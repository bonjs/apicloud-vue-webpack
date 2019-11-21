


<template lang=pug>
  .list
    div 这是nav
    button(@click="close()") close
    button(@click="reload()") reload
    
</template>
<script>


export default {
  data() {
    return {
    };
  },
  async mounted() {
  },
  methods: {
    close() {
      window.close();
    },
    reload() {
      window.location.reload();
    }
  },
  components: {
  }
};
</script>
<style>

</style>


