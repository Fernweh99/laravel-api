<template>
  <div class="posts">
    <div class="container">
      <h5>Posts:</h5>
      <div class="list-posts">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPosts',
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    fetchPosts() {
      axios.get('http://localhost:8000/api/posts')
      .then(res =>{
        this.posts = res.data;
      })
      .catch(err =>{
        console.log(err);
      })
      .then(()=>{
        console.log('Chiamata Terminata');
      });
    }
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>

</style>