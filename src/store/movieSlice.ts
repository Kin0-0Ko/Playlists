import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { reset } from './songSlice';

interface MovieState{
	movies: string[]
}

const initialState: MovieState = {
	movies: []
};

const movieSlice = createSlice({

name: 'movies',
initialState,
reducers: {
	addMovie(state, action: PayloadAction<string>){
		state.movies.push(action.payload)
	},
	removeMovie(state, action: PayloadAction<string>){
		const index = state.movies.indexOf(action.payload)
		state.movies.splice(index, 1)
	}
},
extraReducers(builder){
	builder.addCase(reset,(state, action) => {
		return {movies: [], songs: []}
	})
}
})

export default movieSlice;
export const {addMovie, removeMovie} = movieSlice.actions