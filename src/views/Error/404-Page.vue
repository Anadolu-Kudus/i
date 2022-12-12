<template>
  <Nav />
  <section class="page_404 mt-3">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-10 mx-auto col-sm-offset-1 text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center">404</h1>
            </div>

            <div class="contant_box_404">
              <h3 class="h2"  data-aos="zoom-in">Look like you're lost</h3>

              <p>the page you are looking for not avaible!</p>

              <a href="#" @click="homePage()" class="main_button link_404"
                >Go to Home</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Nav from "@/components/Layout/Nav.vue";
import Footer from "@/components/Layout/Footer.vue";

export default {
  name: "ErrorPage",
  data() {
    return {};
  },
  components: {
    Nav,
    Footer,
  },

  methods: {
    homePage() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
/*======================
			404 page
=======================*/

.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo", serif;
	min-height:100vh;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url("../../assets/img/page_404.gif");
  height: 370px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.contant_box_404 {
  margin-top: -50px;
}
</style>>

