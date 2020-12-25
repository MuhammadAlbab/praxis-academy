<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>List Post</h1>
    <ul class="list" v-for="(post,index) in postLimitByFive" :key="index">
      <li><router-link :to="`post/${post.id}`">{{ post.title }}</router-link></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Home",
    data: () => {
        return {
            posts: ""
        }
    },
    computed: {
      postLimitByFive() {
        return this.posts.slice(0,5)
      }
    },
    methods: {
      //opsi 1
        async getPosts() {
        try { 
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
          this.posts = res.data;
        } catch(error){
          console.log(error);
        }
      },
      //opsi 2
      // getPosts(){
      //   axios.get('https://jsonplaceholder.typicode.com/posts')
      //   .then(res => res.data)
      //   .then(res => {
      //     this.posts = res
      //   })
      //   .catch(error => {
      //     alert(error)
      //   })
      // }
    },
    created(){
      this.getPosts();
    }
}
</script>

<style scoped>
  .list {
    list-style-type: none;
  }
</style>