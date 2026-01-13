import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    games: {},
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        addGame: (state, action) => {
            const { gameKey, gameData } = action.payload;
            state.games[gameKey] = gameData;
        },
        updateGame: (state, action) => {
            const { gameKey, gameData } = action.payload;
            if (state.games[gameKey]) {
                state.games[gameKey] = { ...state.games[gameKey], ...gameData };
            }
        },
        deleteGame: (state, action) => {
            const gameKey = action.payload;
            delete state.games[gameKey];
        },
        clearGames: (state) => {
            state.games = {};
        },
    },
});

export const { addGame, updateGame, deleteGame, clearGames } = gameSlice.actions;

export default gameSlice.reducer;
