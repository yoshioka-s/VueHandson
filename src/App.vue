<template>
  <div id="app">
    <h1>席替え番長</h1>
    <div class="row page">
      <div class="col-sm-8">
        <h2>メンバー {{ members.length }}人</h2>
        <ul>
          <li v-for="(member, i) in sortedMembers" v-bind:key="i">
            <i class="fa" v-bind:class="ICONS[member.sex]"></i>
            {{ member.name }}
          </li>
        </ul>
        <button v-if="members.length > 0" v-on:click="shuffle" class="btn btn-success">席替え</button>
      </div>

      <div class="col-sm-4">
        <h2>メンバー追加</h2>
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
            <p>{{ form.name }}</p>
            <p>{{ formattedName }}</p>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="作成">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'App',
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
      // membersをordering順に並べて返す
      return _.sortBy(this.members, 'ordering')
    },
    formattedName () {
      if (!this.form.name) {
        return ''
      }
      return this.form.name + (this.form.sex === '女' ? 'ちゃん' : 'くん')
    }
  },
  methods: {
    changeSex (event) {
      this.form.sex = event.target.value
    },
    save () {
      // orderingで席順を管理。新メンバーは最後尾
      const newMember = Object.assign({}, this.form, {ordering: this.members.length})
      this.members.push(newMember)
      // フォームをリセット
      this.form.name = ''
    },
    shuffle () {
      _(this.members)
      // this.membersの配列順をシャッフル
      .shuffle()
      // orderingをシャッフル後の席順に更新
      .each((member, i) => member.ordering = i)
    },
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