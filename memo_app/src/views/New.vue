<template>
  <div>
    <textarea name="memo" v-model="memoBody"></textarea>
    <button @click="create">追加</button>
  </div>
</template>

<script>
export default {
  name: "new",
  data: function() {
    return {
      memoBody: '新規メモ'
    }
  },
  methods: {
    create: function() {
      this.$store.commit("create", {
        body: this.memoBody
      });
      this.$router.push("/");
    }
  }
};
</script>
