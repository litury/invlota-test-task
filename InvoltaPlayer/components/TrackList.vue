<template>
  <div class="track-list">
    <TrackItem
        v-for="track in tracks"
        :key="track.id"
        :track="track"
    />
  </div>
</template>


<script setup >
import {ref, onMounted, computed} from 'vue'
import {useTracksStore} from '@/store/tracksStore'


const tracksStore = useTracksStore();

await tracksStore.fetchTracks();

const tracks = computed(() => tracksStore.tracks);

</script>


<style scoped>
.track-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>