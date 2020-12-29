<template>
  <div class="about">
    <div class="nav main-nav">
      <router-link to="/about/name">Name</router-link>
      <router-link to="/about/contact">Contact</router-link> 
      <router-link to="/about/address">Address</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
.main-nav{
  font-size: 1.5em;
}
</style>