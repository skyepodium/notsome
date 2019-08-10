<template>
  <div id="wrapper">
    <div class="inner">
      <router-link
        to="/"
        class="logo"
      >
        낯섬
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style scoped>
#wrapper {
    width: 100%;
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid #ececec;
}

.inner {
    width: calc(100% - 40px);
    margin-left:auto;
    margin-right:auto;
    height: inherit;
    line-height: inherit;
}

.logo {
    display: block;
    text-decoration: none;
    color: black;
    font-size: 30px;
    font-family: 'Nunito', sans-serif;
    color: #4F2CFA;
    color: black;
}
</style>
