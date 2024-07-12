import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SongsState{
	songs: string[]
}
export const reset = createAction('app/reset')

const initialState: SongsState = {
	songs: []
};

const songSlice = createSlice({

name: 'song',
initialState,
reducers: {
	addSong(state, action: PayloadAction<string>){
		state.songs.push(action.payload)
	},
	removeSong(state, action: PayloadAction<string>){
		const index = state.songs.indexOf(action.payload)
		state.songs.splice(index, 1)
	}

},
extraReducers(builder){
	builder.addCase(reset,(state) => {
		return {...state, songs: [], movies: []};
	})
}
})

export default songSlice;
export const {addSong, removeSong} = songSlice.actions