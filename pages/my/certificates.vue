<template>
  <b-container>
    <b-row class="mt-5 mx-xl-2">
      <b-col
        v-for="(course, index) in courses"
        :key="index"
        cols="12"
        md="6"
        xl="4"
        class="mb-4 my-4"
      >
        <CourseCard
          :card-content="course"
          :show-certificate-buttons="true"
          class="course-card--box-shadow rounded p-4"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'MyCoursesPage',
  middleware: ['auth'],
  data () {
    return {
      // example info
      courses: [
        {
          name: 'Bootstrap desde cero (Live)',
          haveCertificate: true,
          uri: 'css-primeros-pasos'
        },
        {
          name: 'Bootstrap desde cero (Live)',
          haveCertificate: true,
          uri: 'css-primeros-pasos'
        },
        {
          name: 'HTML desde cero (Prelaunch)',
          haveCertificate: false,
          uri: 'css-primeros-pasos'
        },
        {
          name: 'CSS desde cero (Live)',
          haveCertificate: false,
          uri: 'css-primeros-pasos'
        },
        {
          name: 'Bootstrap desde cero (Live)',
          haveCertificate: true,
          uri: 'css-primeros-pasos'
        }
      ]
      // example info
    }
  }
}
</script>

<style scoped>
</style>
