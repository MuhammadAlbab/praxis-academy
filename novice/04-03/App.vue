<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
// import Home from '../src/views/Home'

  export default {
    components: {
      // Home,
      Navbar,
      Footer
    },
  }
</script>
