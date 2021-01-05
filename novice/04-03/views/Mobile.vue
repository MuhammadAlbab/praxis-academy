<template>
  <v-container class="mobile">
    <h1>Mobile</h1>
    <v-card class="con-items" v-for="user in users" :key="user.name">
      <v-card-title>{{user.name}} </v-card-title>
      <v-card-subtitle>{{user.address}} </v-card-subtitle>
      <v-card-text>{{user.status}}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>

export default {
  computed: {
    users() {
      return this.$store.state.user.filter((user) => {
        if (user.isApproved === false){
          user.status = 'Pending'
        }else{
          user.status = 'Approved'
        }
        return user.program === 'Mobile'
      })
    }
  }
}
</script>
<style>
.mobile{
  text-align: justify;
  max-width: 1500px;
}
</style>