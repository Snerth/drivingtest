<template>
  <div class="questions">
    Questions will go here...
    <div v-for="question in allQuestions" v-bind:key="question.id">
      <Question :question="question" />
    </div>
  </div>
</template>

<script>
import Question from "./Question.vue";
import { mapGetters } from "vuex";
//import { mapActions } from "vuex";

export default {
  name: "Questions",
  methods: {
    // mapping the fetchQuestions action to this component
    //      ...mapActions(['fetchQuestions'])
  },
  computed: mapGetters(["allQuestions"]),
  // lifecycle method just like willmount
  created() {
    //      this.fetchQuestions()
  },
  components: {
    Question,
  },
};
</script>
