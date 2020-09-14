// import axios from "axios";

const state = {
  questions: [
    {
      id: 1,
      title: "Question 1",
      possibleAnswers: [
        { id: 1, text: "Answer 1", isCorrect: true },
        { id: 2, text: "Answer 2", isCorrect: false },
        { id: 3, text: "Answer 3", isCorrect: false },
        { id: 4, text: "Answer 4", isCorrect: false },
      ],
    },
    {
      id: 2,
      title: "Question 2",
      possibleAnswers: [
        { id: 1, text: "Answer 1", isCorrect: false },
        { id: 2, text: "Answer 2", isCorrect: true },
        { id: 3, text: "Answer 3", isCorrect: false },
        { id: 4, text: "Answer 4", isCorrect: false },
      ],
    },
    {
      id: 3,
      title: "Question 3",
      possibleAnswers: [
        { id: 1, text: "Answer 1", isCorrect: false },
        { id: 2, text: "Answer 2", isCorrect: false },
        { id: 3, text: "Answer 3", isCorrect: true },
        { id: 4, text: "Answer 4", isCorrect: false },
      ],
    },
    {
      id: 4,
      title: "Question 4",
      possibleAnswers: [
        { id: 1, text: "Answer 1", isCorrect: false },
        { id: 2, text: "Answer 2", isCorrect: false },
        { id: 3, text: "Answer 3", isCorrect: false },
        { id: 4, text: "Answer 4", isCorrect: true },
      ],
    },
  ],
};

const getters = {
  allQuestions: (state) => state.questions,
};

// this is how questions will be fetched from the server
const actions = {
  //     async fetchQuestions({ commit }) {
  //         const response = await axios.get('getQuestionsUrl')
          // commit('setQuestions', response.data)
  //     }
};

// this is how to store fetched questions in the state
const mutations = {
  //  setQuestions: (state, questions) => (state.questions = questions),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
