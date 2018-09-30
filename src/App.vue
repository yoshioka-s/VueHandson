<template>
  <div id="app">
    <h1>席替え番長</h1>
    <div class="row page">
      <div class="col-sm-8">
        <h2>メンバー {{ members.length }}人</h2>
        <div class="row">
          <div class="sm-col-6">
            <ul>
              <li v-for="(member, i) in boys" v-bind:key="i">
                <i class="fa" v-bind:class="ICONS[member.sex]"></i>
                {{ member.name }}
              </li>
            </ul>
          </div>
          <div class="sm-col-6">
            <ul>
              <li v-for="(member, i) in girls" v-bind:key="i">
                <i class="fa" v-bind:class="ICONS[member.sex]"></i>
                {{ member.name }}
              </li>
            </ul>
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

export default {
  name: 'App',
  components: {
    MemberForm
  },
  data () {
    return {
      form: {
        name: '',
        sex: '女',
      },
      members: [],
      ICONS: {
        '男': 'fa-mars',
        '女': 'fa-venus'
      },
      SEX_OPTIONS: ['女', '男'],
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
.fa-mars {
  color: #03328b;
}
.fa-venus {
  color: #eb90c8;
}

.member-form {
  background-color: #e0e0e0;
  padding: 15px;
  border-radius: 15px;
}
</style>