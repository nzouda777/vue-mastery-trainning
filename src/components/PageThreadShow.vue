<template>

<div>
    <div class="col-large push-top">

        <h1>{{ thread.title }}</h1>


        <div v-for="postId in thread.posts" :key="postId" class="post-list">

    <div class="post">

    <div class="user-info">
    <a href="#" class="user-name">{{ userById(postById(postId).userId).name }}</a>

    <a href="#">
    <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="">
    </a>

    <p class="desktop-only text-small">107 posts</p>

    </div>

    <div class="post-content">
    <div>
    <p>
    {{ postById(postId).text }}
    </p>
    </div>
    <!-- edit thread -->
    </div>



    <div class="post-date text-faded">
    {{ postById(postId).publishedAt }}
    </div>


    </div>

        </div>
    </div>

</div>
</template>

<script>
import sourceData from '@/data.json'


export default {
 props:{
    id: {
        require: true,
        type: String
    }
 },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id) //also available un der this.$route.params.id
    }
  },
  methods: {
    postById (postId) {
        return this.posts.find(p => p.id === postId)
    },
    userById (userId) {
        return this.users.find(u => u.id === userId)
    }
  }
}
</script>

<style scoped>

</style>