<template>
  <div class="listPosts">
      <p v-for="element in limitByTen" :key="element.id">
       <router-link :to="`/listposts/${element.userId}`">
       {{element.title}}
       </router-link>
      </p>
  </div>
</template>

 <script>
import axios from 'axios'
export default {
    data: () => {
        return {
            posts: ''
        }
    },

    methods: {
        async getPosts(){
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                this.posts = res.data
            } catch (error) {
                console.log(error)
            }
        }
    },

    computed: {
        limitByTen(){
           return this.posts.slice(0, 10)
        }
    },

    created(){
        this.getPosts()
    }
}
</script>

 <style>

</style>