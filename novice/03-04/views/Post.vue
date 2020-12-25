<template>
    <div class="user">
        <!-- <h1>This is a User page</h1> -->
        <h1>Detail Post</h1>
        <h2>Title : {{ post.title }}</h2>
        <h3>{{ post.body }}</h3>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data: () => {
        return {
            post: ''
        }
    },
    methods: {
        async getPost(){
            try{
                const id = this.$route.params.id;
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);
                this.post = res.data;
            }catch(err){
                console.log(err);
            }
        }
    },
    created(){
        this.getPost();
    }
}
</script>

<style scoped>
  .list {
    list-style-type: none;
  }
</style>