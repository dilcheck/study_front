<template>
  <div class="expand">
    <header>
      <span>공통 해더</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>공동 푸터</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {}
    }
};
</script>