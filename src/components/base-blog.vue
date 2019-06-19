<template>
  <div class="base-blog">
    <h2>{{post.title}}</h2>
    <button @click="handleSize">放大字体</button>
    <div class="content" v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  name: "BaseBlog",
  props: {
    post: Object
  },
  data() {
    return {};
  },
  methods: {
    handleSize() {
      this.$emit("enlarge-text", 0.1);
    }
  }
};
</script>

<style scoped lang='less'>
button {
  background-color: skyblue;
}
</style>
