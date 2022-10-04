<template>
  <div class="content">
    <AppHeader/>
    <main>
      <IndexPosts/>
    </main>
  </div>
</template>

<script>
import IndexPosts from './posts/IndexPosts';
import AppHeader from './AppHeader';

  export default {
    name: "App",
    components: {
    IndexPosts,
    AppHeader
},
};
</script>

<style lang="scss">
  main {
    padding: 50px 0;
  }
</style>