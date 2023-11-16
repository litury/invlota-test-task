<script setup>
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'

import {useTracksStore} from '@/store/tracksStore'
import {computed,} from "vue";

const tracksStore = useTracksStore()

const currentTrack = ref(null);

onMounted(() => {
  tracksStore.fetchTracks();
});

watch(() => tracksStore.currentTrack, (track) => {
  currentTrack.value = track;
});

watch(() => tracksStore.isPlaying, (newPlayingState) => {
  if (newPlayingState) {

    // Если isPlaying true, вызвать метод play у player
    player.value.play();

  } else {
    // Если isPlaying false, вызвать метод pause у player
    player.value.pause();
  }
});

const audioOptions = computed(() => {
  return {
    src: currentTrack.value.preview,
    title: currentTrack.value.title,
    coverImage: currentTrack.value.album.cover_big,
    autoPlay: tracksStore.isPlaying,
  };
});

const player = ref(null);

const onPause = () => {
  tracksStore.setPlayingState(false);
}

const onPlay = () => {
  tracksStore.setPlayingState(true);
}
</script>

<template>
  <template v-if="currentTrack">
    <AudioPlayer
        :option="audioOptions"

        @pause="onPause"
        @play="onPlay"
        ref="player"
        />
  </template>

  <template v-else>
    <p>Загрузка треков...</p>
  </template>
</template>

<style scoped>
</style>