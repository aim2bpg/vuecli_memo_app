<template>
  <div>
    <textarea name="memo" v-model="memo.body"></textarea>
    <button @click="update">編集</button>
    <button @click="destroy">削除</button>
  </div>
</template>

<script>
export default {
  name: "edit",
  computed: {
    memo: function() {
      const id = this.$route.params["id"];
      return this.$store.state.memos.find(memo => memo.id === id);
    }
  },
  methods: {
    update: function() {
      this.$store.commit("update", {
        id: this.$route.params["id"],
        body: this.memo.body
        });
      this.$router.push("/");
    },
    destroy: function() {
      this.$store.commit("destroy", this.$route.params["id"]);
      this.$router.push("/");
    }
  }
};
</script>
