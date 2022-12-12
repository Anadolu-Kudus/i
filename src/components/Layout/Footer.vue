<template>
  <footer>
    <div class="container">
      <div class="row g-0">
        <div class="col-12 col-lg-6">
          <p class="text-center text-lg-start">
            © <span id="year"></span>, {{ $t("name company") }},
            {{ $t("All Rights Reserved.") }}
          </p>
        </div>

        <p class="developed-by text-center text-lg-end col-12 col-lg-6 mt-2 mt-lg-0">
          {{ $t("Developed by") }}
          <a href="https://wa.me/963950556805">
						{{ $t("name company") }}
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: "Footer",
  mounted() {
    var year = new Date().getFullYear();
    $("#year").text(year);
  },
};
</script>

<style lang="scss" scoped>
</style>