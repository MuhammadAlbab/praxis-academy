<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="nav main-nav">
      <router-link to="/listalbums">List Albums</router-link>
      <router-link to="/listposts">List Posts</router-link>
    </div>
    <router-view/>
  </div>

</template>