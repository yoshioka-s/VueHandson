<template>
  <div id="app">
    <h1>席替え番長</h1>
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
      members: [],
    }
  },
  computed: {
  },
  methods: {
    addMember (member) {
      member.ordering = this.members.length
      this.members.push(member)
    }
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