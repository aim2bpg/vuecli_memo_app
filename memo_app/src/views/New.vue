<template>
  <div class="editor">
    <textarea name="memo" v-model="memoBody"></textarea>
    <button v-on:click="save">追加</button>
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
    save: function() {
      this.$store.commit("save", {
        body: this.memoBody
      });
      this.$router.push("/");
    }
  }
};
</script>
