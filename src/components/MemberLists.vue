<template>
  <div class="col-sm-12">
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
</template>

<script>
import _ from 'lodash'
import MemberList from './MemberList.vue'

export default {
  name: 'MemberLists',
  components: {
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