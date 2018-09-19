<template>
    <div>
      <p>{{ 'hello world' | capitalize }}</p>
      <button v-on:click="testFunc">route 테스트</button>
      <img src="/dist/logo.png"/>
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
            console.log("hi")
            this.$router.push('/test');
        }
    }
}
</script>