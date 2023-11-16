<template>
  <div class="track-item" @click="selectTrack">
    <NuxtImg
        :src="track.album.cover_medium"
        sizes="100vw sm:50vw md:400px"
        class="track-cover"
    />

    <div class="track-info">
      <h3 class="track-title"> {{ track.title }}</h3>
      <p class="track-artist"> {{ track.artist.name }} </p>
      <p class="track-duration">{{ formatDuration(track.duration) }}</p>
    </div>

    <button
        class="track-button"
        :aria-pressed="isPlaying"
        @click="togglePlay"
    >

      <template v-if="isPlaying">
        <PauseIcon class="track-icon" />
      </template>

      <template v-else>
        <PlayIcon class="track-icon" />
      </template>
    </button>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import {useTracksStore} from '@/store/tracksStore'
import { PauseIcon, PlayIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  track: {
    type: Object,
    required: true
  }
})

const tracksStore = useTracksStore()

const togglePlay = () => {
  if(tracksStore.currentTrack !== props.track || !tracksStore.isPlaying) {
    tracksStore.setCurrentTrack(props.track, true);
  } else {
    tracksStore.setPlayingState(!tracksStore.isPlaying);
  }
};
const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  return `${minutes}:${seconds}`;
}

const isPlaying = computed(() => tracksStore.currentTrack === props.track && tracksStore.isPlaying);
</script>


<style scoped>
.track-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.track-cover {
  border-radius: 0.5rem;
}

.track-info {
  margin-left: 0.5rem;
}

.track-title {
  font-weight: bold;
  font-size: 1.2rem;
}

.track-artist {
  color: gray;
}

.track-duration {
  color: gray;
}

.track-button {
  margin-left: auto;
  border: none;
  background: none;
  cursor: pointer;
}

.track-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: blue;
}


</style>