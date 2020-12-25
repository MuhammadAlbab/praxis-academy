<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/name">Name</router-link> |
    <router-link to="/about/address">Address</router-link>
    <router-view/>
  </div>
</template>