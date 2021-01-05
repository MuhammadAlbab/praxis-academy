<template>
  <v-container class="frontend">
    <h1>Frontend</h1>
    <v-card class="con-items" v-for="user in users" :key="user.name"
    shaped>
      <v-card-title>{{user.name}} </v-card-title>
      <v-card-subtitle>{{user.address}} </v-card-subtitle>
      <v-card-text>{{user.status}}</v-card-text>
      <v-card-actions>
        <v-btn
        @click="handleBtn(user)">{{user.textBtn}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.user.filter((user) => {
        if (user.isApproved === false){
          user.status = 'Pending',
          user.textBtn= 'Approve'
        }else{
          user.status = 'Approved',
          user.textBtn = 'Disapprove'
        }
      return user.program === 'Frontend'
      });
    }
  },
  methods: {
    handleBtn(user){
      user.isApproved = !user.isApproved
      console.log(user);
    }
  }
}
</script>

<style>
.frontend{
  text-align: justify;
  max-width: 1500px;
}
.con-items{
  margin: 10px;
}
</style>