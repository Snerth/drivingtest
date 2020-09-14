<template>
  <div class="welcome-page p-3">
      <div>{{ $t('Home.Welcome.quizDescription') }}</div>
      <div>Current language: {{language}}</div>
    <TestOptions />
  </div>
</template>

<script>
import TestOptions from "./TestOptions.vue";
import { mapGetters } from 'vuex'

export default {
  name: "WelcomePage",
  components: {
    TestOptions,
  },
  computed: mapGetters(["language"])
};
</script>

<style scoped>
.welcome-page {
  background: rgb(248, 248, 248);
  border-radius: 10px;
  -webkit-box-shadow: 3px 4px 17px -7px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 3px 4px 17px -7px rgba(0, 0, 0, 0.41);
  box-shadow: 3px 4px 17px -7px rgba(0, 0, 0, 0.41);
  transition: 0.5s;
}
.welcome-page:hover {
  background: white;
}
</style>
