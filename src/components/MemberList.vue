<template>
  <ul>
    <li v-for="(member, i) in members" :key="i">
      <i class="fa" v-bind:class="ICONS[member.sex]"></i>
      {{ member.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MemberList',
  props: {
    members: Array
  },
  data () {
    return {
      ICONS: {
        '男': 'fa-mars',
        '女': 'fa-venus'
      },
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style scoped>
.fa-mars {
  color: #03328b;
}
.fa-venus {
  color: #eb90c8;
}
</style>
