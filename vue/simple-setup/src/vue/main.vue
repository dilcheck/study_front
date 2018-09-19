<template>
    <div>
      <p>{{ 'hello world' | capitalize }}</p>
      <img src="/dist/logo.png"/> <br>
      <button v-on:click="testFunc">route 테스트</button>
      <p>Cat Object : {{ cat }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
             cat: {
                sound : 'meow'
            }
        }
    },
    methods: {
        testFunc: function (e) {
            this.$router.push('/test');
        }
    }
}
</script>

<style>
</style>