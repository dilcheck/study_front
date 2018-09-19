<template>
  <main>
    <div>
    <Header />
    <router-view></router-view>
    <Footer />
    </div>
  </main>
</template>

<script>
import Header from './layout/header'
import Footer from './layout/footer'

export default {
  data() {
    return {}
    },
  components: {
    Header,
    Footer
  }
};
</script>

<style>
  body {
    margin : 0;
  }

  .frame {
    width:100%;
    height: 50px;
    line-height: 50px;
    background: black;
    color: white;
  }
</style>