<template>
    <div>
        <!-- <h1>Learn LifeCycle</h1> -->
        <!-- <p v-show="true" v-if="life === 'life-cycle'">{{ life }}</p>
        <h1 v-text="life"></h1>
        <input v-model="life" type="text">
        <button v-on:click="life = 'new text'">Update</button>
        <p>{{ kelas }}</p>
        <div>
            <label><input type="checkbox" value="Vue" v-model="kelas">Vue.js</label>
            <label><input type="checkbox" value="React" v-model="kelas">React.js</label>
            <label><input type="checkbox" value="Angular" v-model="kelas">Angular.js</label>
        </div> -->
        <h1>Consume API with Axios</h1>
        <p>{{ data.id }}</p>
        <p>{{ data.title }}</p>
        <p>{{ data.body }}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data: () => {
        return {
            life: "life-cycle",
            show : true,
            kelas: [],
            data: []
        }
    },
    // beforeCreate() {
    //     alert(this.life + " before created");
    // },
    // created() {
    //     alert(this.life + " created");
    // },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(dataPost => (this.data = dataPost.data))
        .catch(error => {
            alert(error);
        });
    },
    // beforeUpdate() {
    //     alert(this.life + " before updated");
    // },
    // updated() {
    //     alert(this.life + " updated");
    // },
    // beforeDestroy() {
    //     alert(this.life + " before destroyed");
    // },
    // destroyed() {
    //     alert(this.life + " destroyed");
    // }
}
</script>