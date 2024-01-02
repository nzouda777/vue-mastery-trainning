<template>

<div>
    <div class="col-large push-top">

        <h1>{{ thread.title }}</h1>
        <post-list :posts="threadPosts" />

  
    </div>

</div>
</template>

<script>
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'

export default {
  name: 'ThreadShow',
  components: {
    PostList
  },
 props:{
    id: {
        require: true,
        type: String
    }
 },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts
    }
  },
  
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id) //also available un der this.$route.params.id
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id )
    }
  },
  
}
</script>

<style scoped>

</style>