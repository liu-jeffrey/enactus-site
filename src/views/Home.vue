<template>
  <div class="home">
    <div class="introduction">
      <img alt="Team Picture" src="../assets/team.png" id="team" />
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <div class="textnbutton">
        <h1 id="intro">
          ENACTUS IS A COMMUNTIY OF ENTREPRENURIAL LEADERS WHO SEE BUSINESS AS A
          WAY TO ADDRESS SOCIAL ISSUES
        </h1>
        <button type="button" id="learn-more">LEARN MORE</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  // components: {
  //   HelloWorld
  // }
};
</script>

<style lang="scss">
#intro {
  text-align: left;
  font-weight: bold;
  font-size: 2.8vw;
  margin: 0;
  padding-bottom: 1vh;
  word-wrap: normal;
}

#team {
  width: 45%;
  padding-right: 9vh;
}

.introduction {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5vw;
  background-color: #1a1a1a;
  color: white;
}

.textnbutton {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // margin: 0;
  // align-items: center;
  height: 80%;
  width: 41%;
}

#learn-more {
  background-color: #fec222;
  padding: 1.5vh 0vw;
  margin-top: 2vh;
  width: 50%;
  border: none;
  font-size: 1.5vw;
  border-radius: 12px;
  font-weight: bold;

  cursor: pointer;
}
</style>
