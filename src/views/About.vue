<template>
  <div class="about">
    <div class="columns">
      <div class="column"><h1>THIS IS COLUMN 1</h1></div>
      <div class="column"><h1>THIS IS COLUMN 2</h1></div>
      <div class="column">
        <h1>THIS IS COLUMN 3</h1>
        <p>HIHIHIH</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "about"
  // components: {
  //   HelloWorld
  // }
};
</script>

<style lang="scss">
.columns {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
