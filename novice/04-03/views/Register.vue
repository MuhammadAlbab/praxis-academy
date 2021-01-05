<template>
  <v-container class="register">
      <v-card>
        <v-card-title>
            <h1>Register</h1>
        </v-card-title>
        <v-form ref="form">
            <v-card-text>
                <v-text-field 
                label="Name" 
                v-model="user.name"
                :rules="nameRules" />
                <v-text-field 
                label="Address" 
                v-model="user.address"
                :rules="addressRules"/>
                <v-select 
                label="Program"
                :items="programku"
                v-model="user.program"
                :rules="programRules"
                dense/>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="handleSubmit"> Submit </v-btn>
            </v-card-actions>
        </v-form>
      </v-card>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            programku: ['Frontend', 'Backend', 'Mobile'],
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length >= 5 || 'Name must be more than 5 characters'
            ],
            addressRules: [
                v => !!v || 'Address is required',
                v => v.length >= 10 || 'Address must be more than 10 characters'
            ],
            programRules: [
                v => !!v || 'Select your program!',
            ],
            user: {
                name: '',
                address: '',
                program: '',
                isApproved: false
            }
        }
    },

    methods: {
        handleSubmit(){
            console.log(this.user); //check
            if(this.$refs.form.validate()){
                this.$store.commit('addUser', this.user)
                alert('Data berhasil ditambahkan!')
                if (this.user.program == 'Frontend') {
                    this.$router.push({name: 'FrontEnd'})
                }else if(this.user.program == 'Backend'){
                    this.$router.push({name: 'BackEnd'})
                }else{
                    this.$router.push({name: 'Mobile'})
                } 
            }
        }
    }
}
</script>

<style>
.register{
  text-align: justify;
  max-width: 1500px;
}
</style>