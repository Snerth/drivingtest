<template>
  <div class="select-language">
    <div>Language</div>
    <div
  @click="setLanguage('Русский')"
  v-bind:class="{'is-selected':language === 'Русский'}"
    >
      Russian
    </div>
    <div
  @click="setLanguage('English')"
  v-bind:class="{'is-selected':language === 'English'}"
    >
      English
    </div>
    <div
  @click="setLanguage('Română')"
     v-bind:class="{'is-selected': language === 'Română'}"
    >
      Română
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "SelectLanguage",
  methods: {
    ...mapActions(['setLanguage'])
  },
  computed: {
    ...mapGetters(['language'])
  }
};
</script>

<style scoped>
.select-language {
}
.select-language > div {
  padding: 10px;
  border: 3px solid transparent;
  transition: 0.4s;
}
.select-language > div:first-child {
  background: rgb(231, 231, 231);
}
.select-language > div:first-child:hover {
  border: 3px solid transparent;
  cursor: auto;
}
.select-language > div:hover {
  border-bottom: 3px solid rgb(131, 212, 131);
  cursor: pointer;
}
.is-selected {
  background: rgb(131, 212, 131);
}
</style>
