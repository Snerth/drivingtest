<template>
  <div class="question p-2">
    <h2>{{ question.title }}</h2>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ["question"],
};
</script>

<style scoped>
.question {
  border: 1px solid rgb(219, 219, 219);
}
</style>
