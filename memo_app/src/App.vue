<template>
  <div id="app">
    <article>
      <ul>
        <li v-for="memo in newest" :key="memo.id">
          <router-link :to="{name: 'Edit', params: { id: memo.id }}">{{ memo.body.split("\n")[0] }}</router-link>
        </li>
      </ul>
      <router-link to="/new">+</router-link>
    </article>
    <aside>
      <router-view/>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    newest: function() {
      return this.$store.state.memos;
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  display: flex;
  justify-content: space-between;
}

textarea {
  width: 95%;
  height: 10em;
}

button {
  padding: 5px 20px;
  margin-right: 10px;
}
</style>

<style scoped>
article {
  width: 30%;
}

aside {
  width: 70%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  display: block;
  padding: 5px;
  text-align: left;
}
</style>
