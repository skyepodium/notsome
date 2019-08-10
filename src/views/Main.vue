<template>
  <div
    id="wrapper"
  >
    <TheHeader />
    <div class="box">
      <div class="tab" />
      <div class="username">
        {{ username }}
      </div>
      <div class="title">
        는 <span class="titleSub">낯설</span><span class="titleBar" />어서
      </div>
    </div>

    <router-link
      :to="{name: 'Question', params: {index: '1'}}"
      class="startButton"
    >
      시작
    </router-link>
  </div>
</template>

<script>
import mainUrl from "@/assets/poly3.png"
import TheHeader from '@/layouts/TheHeader.vue'
export default {
    name: 'Main',
    components: {
        TheHeader,
    },
    data() {
        return {
            username: '너와 나',
            title: '조금 낯설어서',
            mainUrl: mainUrl
        }
    }
}
</script>

<style scoped>

.box {
    width: calc(100% - 40px);
    height: 200px;
    margin-left:auto;
    margin-right:auto;
    /* border: 2px solid rgb(48, 117, 180); */
    margin-top: 40px;
}

.username {
    color: rgb(48, 117, 180);
    font-family: 'Do Hyeon', sans-serif;
    font-size: 80px;
}

.title {
    display: inline-block;
    color: rgb(240, 147, 196);
    font-family: 'Do Hyeon', sans-serif;
    font-size: 60px;
    margin-left: 30px;
    padding-right: 40px;
    margin-top: 20px;
    border: 1px solid rgb(201, 202, 206);
}

.titleSub {
    background-color: rgb(147, 207, 248);
}

.titleBar {
    display: inline-block;
    width: 3px;
    height: 50px;
    background-color: rgb(201, 202, 206);
    margin-left: 4px;
    margin-right: 4px;
}


/* .startButton {
    display: block;
    text-decoration: none;
    width: 300px;
    height: 50px;
    line-height: 50px;
    margin-left:auto;
    margin-right:auto;
    color: black;
    text-align: center;
    font-size: 25px;
    border: 1px solid black;
    border-radius: 50px;
} */

.startButton {
    display: block;
    text-decoration: none;
    font-size: 20px;
    background: linear-gradient(to right, rgb(33, 212, 253),rgb(240, 147, 196));
    width: calc(100% - 40px);
    margin-left:auto;
    margin-right:auto;
    border-radius: 30px;
    margin-top: 150px;
    height: 55px;
    line-height: 55px;
    color: white;
    text-align: center;
    border:1px solid  rgb(201, 202, 206);
    color: black;
    background: white;
}
</style>
