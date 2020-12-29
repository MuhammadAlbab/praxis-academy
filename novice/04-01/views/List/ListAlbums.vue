<template>
    <div class="listAlbums">
     <p v-for="element in limitByTen" :key="element.id">
      <router-link :to="`/listalbums/${element.userId}`">
      {{element.title}}
      </router-link>
    </p>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },

  data: () => {
    return {
      albums: ''
    }
  },

  methods: {
    async getAlbums(){
      try {

        const res = await axios.get('https://jsonplaceholder.typicode.com/albums')
        this.albums = res.data

      } catch (error) {
        alert(error)
      }
      
    }
  },

  computed: {
    limitByTen(){
      return this.albums.slice(0,10)
    }
  },

  created(){
    this.getAlbums()
  }
}
</script>
