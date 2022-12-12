<template>
  <!-- body of page -->
  <div id="body" class="thanks_Page">
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
        />
      </symbol>
    </svg>

    <div class="alert alert-success overflow-hidden" role="alert">
      <div class="header" data-aos="fade-down">
        <svg
          class="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label="Success:"
        >
          <use xlink:href="#check-circle-fill" />
        </svg>
        <h1 class="alert-heading d-inline-block m-0">
									{{ $t("Your message has been sent!") }}
          
        </h1>
      </div>

      <br />

      <p data-aos="zoom-in">
							{{ $t("Thank you for contacting us, a member of staff will contact you soon.") }}
      </p>
      <hr data-aos="zoom-in" />

      <div data-aos="fade-left">
        <a
          href="#"
          @click="homePage()"
          class="back-to-home mt-4 ms-auto d-block"
          >{{ $t("Go to Home") }}</a
        >
      </div>
    </div>
  </div>

  <!-- End body of page -->
</template>

<script>
import "../assets/js/main.js";

export default {
  name: "ServicesView",
  data() {
    return {
      lang: localStorage.getItem("lang") || "tr",
      fadeStart: "",
      fadeEnd: "",
    };
  },
  components: {},
  mounted() {
    if (this.lang == "en") {
      this.fadeStart = "fade-left";
      this.fadeEnd = "fade-right";
      // console.log("you are in english mode");
    } else {
      this.fadeStart = "fade-right";
      this.fadeEnd = "fade-left";
      // console.log("you are in arabic mode");
    }
  },
  methods: {
    homePage() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
