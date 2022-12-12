<template>
  <span id="up-arrow" class="up-arrow">
    <i class="fas fa-reply"></i>
  </span>
</template>

<script>
export default {
  name: "UpArrow",
  mounted() {
    // Up Arrow Click
    $("#up-arrow").click(function () {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        0
      );
    });

  },
};
</script>

<style lang="scss" scoped>
</style>