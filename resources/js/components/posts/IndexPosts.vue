<template>
  <div class="posts">
    <div class="container">
      <h5>Posts:</h5>
      <div class="row justify-content-center list-posts">
        <CardPost v-for="post in posts" :key="post.id" :post="post"/>
      </div>
    </div>
  </div>
</template>

<script>
  import CardPost from './CardPost';
  export default {
    name: "IndexPosts",
    components: { 
      CardPost 
    },
    data() {
        return {
            posts: [],
        };
    },
    methods: {
        fetchPosts() {
            axios.get("http://localhost:8000/api/posts")
                .then(res => {
                this.posts = res.data;
            })
                .catch(err => {
                console.log(err);
            })
                .then(() => {
                console.log("Chiamata Terminata");
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