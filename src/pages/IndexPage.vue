<template>
  <div class="htmlClass">
    <h1>{{ head }}</h1>
    <h2>{{ firstName }}</h2>
    <h3>{{ surName }}</h3>
    <h2>{{ studentID }}</h4>

    <form>
      <input type="text" id="firstName" v-model="firstName" />
      <input type="text" id="surName" v-model="surName" />
      <input type="text" id="studentID" v-model="studentID" />
      <button @click="submitForm()" class="submitForm">Submit</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'InputPage',
  data() {
    return {
      head: 'Vue is awesome.',
      firstName: 'Kanchai',
      surName: 'Buangam',
      studentID: '6604101301',
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit form')
    },
  }
}
</script>

<style scoped></style>