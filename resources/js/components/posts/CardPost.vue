<template>
  <div>
    <div class="card col m-3" style="width: 21.5rem;">
      <img :src="post.image" class="card-img-top" :alt="post.slug">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPost',
  props: {
    post : Object,
  }
}
</script>

<style>

</style>