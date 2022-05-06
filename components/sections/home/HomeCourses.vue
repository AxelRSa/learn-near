<template>
  <section
    id="home-courses"
    class="container text-center text-sm-right"
  >
    <b-button class="custom-btn" :to="{ name: 'courses-level-level'}">
      Todos los cursos
    </b-button>
    <hr>
    <!-- <div v-for="car, i in carousels" :key="'car'+[i]">
      <CourseCarousel :courses="car[i].courses">
        <template #title>
          <h3>{{ car[i].name }}</h3>
        </template>
      </CourseCarousel>
    </div> -->
    <!--
    <CourseCarousel :courses="carousels[1].courses">
      <template #title>
        <h4>{{ carousels[1].name }}</h4>
      </template>
    </CourseCarousel> -->
  </section>
</template>

<script>
export default {
  name: 'HomeCourses',
  props: {
    carousels: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      recentCourses: [
        {
          name: 'Rust desde cero',
          imgSrc: 'course-4.png',
          uri: 'rust-desde-cero'
        },
        {
          name: 'Desarrolla tu primer contrato con assembly script',
          imgSrc: 'course-2.png',
          uri: 'assembly-script'
        },
        {
          name: 'Desarrolla tu primer contrato con Rust',
          imgSrc: 'course-3.png',
          uri: 'primer-contrato-rust'
        },
        {
          name: 'Crea una tienda nft',
          imgSrc: 'course-1.png',
          uri: 'crear-tienda-nft'
        }
      ],
      mostSeen: [
        {
          name: 'Accesar a una Wallet',
          imgSrc: 'course-6.png',
          uri: 'accesar-wallet'
        },
        {
          name: 'Como funciona NEAR',
          imgSrc: 'course-5.png',
          uri: 'como-funciona-near'
        },
        {
          name: 'Desarrolla tu primer contrato con Rust',
          imgSrc: 'course-3.png',
          uri: 'primer-contrato-rust'
        },
        {
          name: 'Crea una tienda nft',
          imgSrc: 'course-1.png',
          uri: 'crear-tienda-nft'
        }
      ]
    }
  }
}
</script>

<style scoped>
#home-courses {
  margin-top: 60px;
}

#home-courses > .custom-btn {
  font-size: 1.3rem;
  height: 60px;
  width: 228px;
  display: inline-flex;
  align-items: center;
  justify-content: center ;
}

hr {
  border-top-color: var(--light-gray-4);
  margin-top: 78px;
}

h3, h4 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 30px;
  /* margin: 80px 0; */
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  h3, h4 {
    text-align: left;
  }

}
</style>
