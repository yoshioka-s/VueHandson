<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light navbar-expand-lg">
      <router-link to="/" class="navbar-brand"><h1>席替え番長</h1></router-link>
      <ul class="navbar-nav">
        <li class="nav-item"><router-link to="/" class="nav-link">リスト</router-link></li>
        <li class="nav-item"><router-link to="/form" class="nav-link">フォーム</router-link></li>
      </ul>
    </nav>
    <div class="row page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
#app {
  margin: 50px;
}
.page {
  min-height: 300px;
}

.member-form {
  background-color: #e0e0e0;
  padding: 15px;
  border-radius: 15px;
}
</style>