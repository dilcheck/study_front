<template>
    <div>
      {{ 'hello world' | capitalize }}
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
    }
}
</script>