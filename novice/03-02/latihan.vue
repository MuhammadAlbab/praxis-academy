<template>
    <div class="latihan-1">
        <h2>Hi Guys!</h2>
        <h1>{{countKu}}</h1>
    </div>
</template>

<script>
export default {
    name: 'latihan',
    props: {
        countKu: Number
    }
}
</script>