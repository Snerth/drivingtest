<template>
  <div class="options">
    Options
    <SelectLanguage />
    <div>Current Language is set to:</div>
  </div>
</template>

<script>
import SelectLanguage from "./SelectLanguage.vue";

export default {
  name: "TestOptions",
  components: {
    SelectLanguage,
  },
};
</script>

<style scoped>
.options {
  border: 1px solid gray;
}
</style>
