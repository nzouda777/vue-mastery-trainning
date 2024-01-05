<template>
    <div v-for="post in posts" :key="post.id" class="post-list">

    <div class="post">

      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

        <a href="#">
          <img class="avatar-large" :src="userById(post.userId).avatar" alt="">
        </a>

        <p class="desktop-only text-small">107 posts</p>
      </div>
      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      <!-- edit thread -->
      </div>
      <div class="post-date text-faded">
        <AppDate :timestamp="post.publishedAt"/>
      </div>
    </div>

  </div>
</template>

<script>

import AppDate from "@/components/AppDate"
import sourceData from '@/data.json'
export default {
    props: {
        posts: {
            required: true,
            type: Array
        }
    },
    components: {
        AppDate
    },
    data () {
        return {
            users: sourceData.users
        }
    },

    methods: {  
        userById (userId) {
            return this.users.find(u => u.id === userId)
        },
       
    }
}
</script>

<style scoped>

</style>