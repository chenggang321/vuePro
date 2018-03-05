<template>
  <div id="app">
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import footer from './components/footer/footer'
  export default{
    components: {
      'v-footer': footer
    }
  }
</script>
<style>

</style>
