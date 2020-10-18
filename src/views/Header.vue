<template>
  <div>
    <div class="d-flex justify-content-between heading">
      <img src="../assets/logo.svg" height="40"/>
      <img src="../assets/navbar-icon.svg" />
    </div>
  </div>
</template>

<script>
import config from "../../config";
export default {
  data() {
    return {
      welcomeTitle: config.locale.strings.welcomeTitle,
    };
  },
};
</script>

<style lang="scss" scoped>
$color: #ffffff;
.heading {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 5px 15px;
  color: #299a03;
  background-color: transparent;
  border-bottom: solid 1px #C3C3C3;
}
</style>