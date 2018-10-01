<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light navbar-expand-lg">
      <a href="/" class="navbar-brand"><h1>席替え番長</h1></a>
    </nav>
    <div class="row page">
      <div class="col-sm-8">
        <h2>メンバー {{ members.length }}人</h2>
        <div class="row">
          <div class="col-sm-6">
            <p>女子</p>
            <member-list :members="girls"></member-list>
          </div>
          <div class="col-sm-6">
            <p>男子</p>
            <member-list :members="boys"></member-list>
          </div>
        </div>
        <button v-if="members.length > 0" v-on:click="shuffle" class="btn btn-success">席替え</button>
      </div>

      <div class="col-sm-4">
        <h2>メンバー追加</h2>
        <member-form @saveMember="addMember"></member-form>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import MemberForm from './components/MemberForm.vue'
import MemberList from './components/MemberList.vue'

export default {
  name: 'App',
  components: {
    MemberForm,
    MemberList,
  },
  data () {
    return {
      members: [],
    }
  },
  computed: {
    sortedMembers () {
      return _.sortBy(this.members, 'ordering')
    },
    boys () {
      return this.sortedMembers.filter(member => {
        return member.sex === '男'
      })
    },
    girls () {
      return this.sortedMembers.filter(member => {
        return member.sex === '女'
      })
    },
  },
  methods: {
    shuffle () {
      _(this.members)
      .shuffle()
      .each((member, i) => member.ordering = i)
    },
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