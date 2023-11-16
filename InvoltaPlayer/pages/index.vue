<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1 class="title">Involta Player</h1>
    <TrackList/>
    <AudioPlayer class="fixed-audio-player"/>
  </div>


</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.container::after {
  content: '';
  display: block;
  height: 13rem; /* высота плеера */
}

.title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
.fixed-audio-player {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

</style>