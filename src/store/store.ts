import {combineReducers, configureStore} from '@reduxjs/toolkit'
import songSlice from './songSlice'
import movieSlice from './movieSlice'
const rootReduser = combineReducers({
	songs: songSlice.reducer,
	movies: movieSlice.reducer
})	

export const setUpStore = () => {
	return configureStore({
		reducer: rootReduser
	})
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDistpatch = AppStore['dispatch']
