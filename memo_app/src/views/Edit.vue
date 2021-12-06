<template>
  <div>
    <textarea name="memo" v-model="memo.body"></textarea>
    <button v-on:click="save">編集</button>
    <button v-on:click="remove">削除</button>
  </div>
</template>

<script>
export default {
  name: "edit",
  data: function() {
    return {
      memoBody: ''
    }
  },
  computed: {
    memo: function() {
      let id = this.$route.params["id"];
      return this.$store.state.memos.find(memo => memo.id === id);
    }
  },
  methods: {
    save: function() {
      this.$store.commit("update", {
        id: this.$route.params["id"],
        body: this.memo.body
        });
      this.$router.push("/");
    },
    remove: function() {
      this.$store.commit("remove", this.$route.params["id"]);
      this.$router.push("/");
    }
  }
};
</script>
