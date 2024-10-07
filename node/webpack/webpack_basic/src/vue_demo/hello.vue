<template>
  <div>
    <h1 class="hello">hello {{ title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue",
    };
  },
};
</script>

<style scoped>
.hello {
  font-size: 30;
  color: aqua;
}
</style>

