import {defineStore} from 'pinia';
import {useFetch} from 'nuxt/app';

export const useTracksStore = defineStore("tracks", {
	state: () => ({
		tracks: [],
		currentTrack: null,
		isPlaying: false,
	}),
	
	getters: {
		getTracks: (state) => state.tracks,
		getCurrentTrack: (state) => state.currentTrack,
	},
	
	actions: {
		async fetchTracks() {
			const {data, pending, error} = await $fetch("/api/tracks", {
				method: "GET",
			});
			
			await data
			
			this.tracks = data;
			
			const randomTrack = this.tracks[Math.floor(Math.random() * this.tracks.length)];
			
			this.currentTrack = randomTrack;
		
		},
		
		setPlayingState(isPlaying) {
			this.isPlaying = isPlaying;
		},
		
		setCurrentTrack(track, play = true) { // Замените false на true по умолчанию
			this.currentTrack = track;
			this.isPlaying = play;
		}
	}
})




