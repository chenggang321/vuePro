<template>
  <div id="app">
    <v-header></v-header>
    <v-bread></v-bread>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import header from './components/headder/header'
  import bread from './components/bread/bread'
  import footer from './components/footer/footer'

  export default{
    components: {
      'v-header': header,
      'v-bread': bread,
      'v-footer': footer
    }
  }
</script>
<style>

</style>
