<template>
  <div class="authorPosts">
      <h1>Name: {{user.name}}</h1>
      <h3>Email: {{user.email}}</h3>
      <h3>Address: {{user.address.city}}</h3>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => {
        return {
            user: '',
            dataId: ''
        }
    },

    methods: {
        async getUser(){
            try {
                // const id = this.$route.params.id
                const res = await axios.get('https://jsonplaceholder.typicode.com/users/'+this.dataId)
                this.user = res.data
            } catch (error) {
                alert(error)
            }
        }
    },
    // beforeCreate(){
        
    // },
    created(){
        this.dataId = this.$route.params.id
        this.getUser()
    }
}
</script>

<style>

</style>