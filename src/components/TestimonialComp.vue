<template>
  <div id="carouselExampleCaptions" class="carousel">
    <div class="carousel-indicators">
      <button
        v-for="test in testimonials" :key="test.id"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        :data-bs-slide-to="test.id - 1"
        class="active"
        aria-current="true"
        :aria-label="'Slide ' + test.id"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="test of testimonials"
        :key="test.id"
        class="carousel-item"
        :class="{ active: testimonials.indexOf(test) == 0 }"
      >
        <routerlink :to="{ name: 'test', params: { id: test.id } }">
          <div class="d-flex justify-content-center mt-4" id="slides">
            <img :src="test.image_url"
             class="d-block custom img-fluid"
            :alt="test.image_url"
          />
          </div>
          <div class="carousel-caption d-md-block text-white">
            <h5>{{ test.name }}</h5>
            <h5>{{ test.role }}</h5>
            <p>{{ test.message }}</p>
          </div>
        </routerlink>
        
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  props: ["test"],
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
    mounted() {
      this.$store.dispatch("fetchTestimonials");
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');
.d-block {
  min-width: 270px;
  height: 380px;
}
.custom{
  width:200px;
  height: 300px;
  object-fit: cover;
  object-position: center;
}
#slides{
  height: 500px;
}
  .carousel{
    font-family: 'Space Mono', monospace;
        background-image: url(https://i.postimg.cc/SxBrRcGT/f1.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        height: 600px;
  }
  button{
    background-color: #AB82AD;
  }
</style>