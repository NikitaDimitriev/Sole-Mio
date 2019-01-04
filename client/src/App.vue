<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  created() {
      localStorage.removeItem("language");
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "en");
    }
  }
};
</script>

<style lang="scss">
@import "app";

.body {
  font-family: "Clear Sans Thin", sans-serif;
}

.button {
  width: 195px;
  height: 50px;
  border: 1px solid #2d5386;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  letter-spacing: 2px;
  color: #2d5386;
  font-family: "Clear Sans Thin", sans-serif;
  cursor: pointer;
}
.button:hover {
  border: 1px solid #fff;
  color: #fff;
  background: #2d5386;
}
</style>
