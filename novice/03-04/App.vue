<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> 
    </div>
     <router-view/>
    <!--     <img alt="Vue logo" src="./assets/logo.png">
    <h1>Ini state ke: {{nomor}} || {{status}}</h1>
    <h2>Nama: {{getName}}</h2>
    <p>Umur: {{people.age}}</p>
    <p>Alamat: {{people.address}}</p>
    
    <p v-for="item in mobil" :key="item">{{item}}</p>
    
    <p v-if="nampak">Ini bernilai "true" jadi terlihat</p>
    
    <button class="btnKu" @click="changeName">Change Name!</button>
    <button class="btnKu" @click="resetName"> Reset Name! </button>
    <div>
      <button class="btnKu" @click="displayAlert">Display!</button>
    </div>
    
    <h1>----------</h1>
    <button class="btnKu" @click="count++">TAMBAH mas</button>
    <button class="btnKu" @click="count--">KURANG mas</button>
    <latihan :countKu="count"/>
    <HelloWorld msg="Hi, Albab, Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
// import latihan from './components/latihan.vue'

// export default {
//   name: 'App',
//   components: {
//      // HelloWorld, 
//     latihan
//   },

//  data: ()=> {
//     return {
//       nomor: 1,
//       status: 'Pertama',

//       people: {
//         name: 'Albab Tampan',
//         age: 22,
//         address: 'Yogya'
//       },

//       mobil: ['bmw', 'toyota', 'tesla'],
//       nampak: true,
//       count: 0
//     }
//   },

//     computed: {
//       getName(){
//         return this.people.name;
//       }

//     },

//     methods: {
//       changeName(){
//         this.people.name = 'Albab Ganteng';
//       },

//       resetName(){
//         this.people.name = 'Albab Tampan';
//       },

//       displayAlert(){
//         alert(this.nomor);
//       }
//     }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  padding: 30px;
}
.nav a {
  font-weight: bold;
  color: #2c3e50;
}
.nav a.router-link-exact-active {
  color: #42b983;
}

/* .btnKu {
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
} */
</style>
