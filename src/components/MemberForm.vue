<template>
  <form class="member-form" v-on:submit.prevent="save">
    <div class="form-group">
      <label for="sex">性別</label><br>
      <p v-for="option in SEX_OPTIONS" :key="option" class="radio-wrapper">
        <input type="radio" name="sex" v-bind:value="option" v-on:change="changeSex" v-bind:checked="option === form.sex">{{ option }}
      </p>
    </div>
    <div class="form-group">
      <label for="name">名前</label>
      <input id="name" class="form-control" v-model="form.name">
    </div>
    <div class="form-group">
      <input type="submit" class="btn btn-primary" value="作成">
    </div>
  </form>
</template>

<script>
export default {
  name: 'MemberForm',
  data () {
    return {
      form: {
        name: '',
        sex: '女',
      },
      SEX_OPTIONS: ['女', '男'],
    }
  },
  computed: {
  },
  methods: {
    changeSex (event) {
      this.form.sex = event.target.value
    },
    save () {
      const newMember = Object.assign({}, this.form)
      this.$store.commit('addMember', newMember)
      this.form.name = ''
    },
  },
}
</script>

<style scoped>
.radio-wrapper {
  display: inline-block;
  margin-right: 1em;
}
.radio-wrapper:last-of-type {
  margin-right: 0;
}
 .radio-wrapper input {
  margin-right: .5em;
}
</style>
