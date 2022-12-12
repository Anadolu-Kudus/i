<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top" id="navv">
    <div class="container">
      <span :data-aos="fadeEnd">
        <router-link tag="a" class="navbar-brand" to="/" exact>
          <img src="../../assets/img/logo.png" alt="" />
          {{ $t("name company") }}
        </router-link>
      </span>

      <div
        class="dropdown btn-lang d-flex d-lg-none ms-auto"
        :data-aos="fadeStart"
      >
        <a
          class="lang dropdown-toggle"
          type="button"
          id="lang-dropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ lang }}
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end text-center"
          aria-labelledby="lang-dropdown"
        >
          <li><a class="dropdown-item" href="" @click="arabic()">Ar</a></li>
          <li><a class="dropdown-item" href="" @click="english()">En</a></li>
          <li><a class="dropdown-item" href="" @click="turkish()">Tr</a></li>
        </ul>
      </div>

      <button
        
        class="ms-1 navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav-container"
        aria-controls="nav-container"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span :data-aos="fadeStart" class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="nav-container">
        <ul class="navbar-nav">
          <!-- 1 -->
          <!-- <li class="nav-item" data-aos="zoom-in">
            <a href="#home" class="nav-link">
              {{ $t("Home") }}
            </a>
          </li> -->
										 <!-- 2 -->
					<li class="nav-item" data-aos="zoom-in">
            <a href="#about" class="nav-link">
              {{ $t("ABOUT US") }}
            </a>
          </li>

         
         

          <li class="nav-item" data-aos="zoom-in">
            <a href="#products" class="nav-link">
              {{ $t("Our Products") }}
            </a>
          </li>

					 <!-- 3 -->
					 <li class="nav-item" data-aos="zoom-in">
            <a href="#services" class="nav-link">
              {{ $t("SERVICES") }}
            </a>
          </li>

          <li class="nav-item" data-aos="zoom-in">
            <a href="#contact-us" class="nav-link">
              {{ $t("CONTACT US") }}
            </a>
          </li>
        </ul>
      </div>

      <div :data-aos="fadeStart" class="dropdown btn-lang d-none d-lg-flex">
        <a
          class="lang dropdown-toggle"
          type="button"
          id="lang-dropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ lang }}
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end text-center"
          aria-labelledby="lang-dropdown"
        >
          <li><a class="dropdown-item" href="" @click="arabic()">Ar</a></li>
          <li><a class="dropdown-item" href="" @click="english()">En</a></li>
          <li><a class="dropdown-item" href="" @click="turkish()">Tr</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",

  data: function () {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
      fadeStart: "",
      fadeEnd: "",
    };
  },

  mounted() {
    if (this.lang == "ar") {
      this.fadeStart = "fade-right";
      this.fadeEnd = "fade-left";
      // console.log("you are in arabic mode");
    } else {
      this.fadeStart = "fade-left";
      this.fadeEnd = "fade-right";
      // console.log("you are in english mode");
    }
  },

  methods: {
    arabic() {
      localStorage.setItem("lang", "ar");
      window.location.reload();
      this.lang = "Ar";
    },
				turkish() {
      localStorage.setItem("lang", "tr");
      window.location.reload();
      this.lang = "Tr";
    },
    english() {
      localStorage.setItem("lang", "en");
      window.location.reload();
      this.lang = "En";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>