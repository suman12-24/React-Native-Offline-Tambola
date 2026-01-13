// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import Realm from 'realm';
import gameReducer from './slices/gameSlice';
import { GameSchema } from './GameSchema';

// Initialize Realm
const realm = new Realm({ schema: [GameSchema] });

// Utility function to save Redux state to Realm
const saveGameStateToRealm = (gameState) => {
    realm.write(() => {
        const existingGame = realm.objects('Game').filtered('id == "gameState"');
        if (existingGame.length > 0) {
            realm.delete(existingGame);
        }
        realm.create('Game', { id: 'gameState', gameState: JSON.stringify(gameState) });
    });
};

// Utility function to load Redux state from Realm
const loadGameStateFromRealm = () => {
    const savedGame = realm.objects('Game').filtered('id == "gameState"')[0];
    return savedGame ? JSON.parse(savedGame.gameState) : undefined;
};

// Middleware to save changes in Redux to Realm
const storeToRealmMiddleware = (storeAPI) => (next) => (action) => {
    const result = next(action);
    saveGameStateToRealm(storeAPI.getState());
    return result;
};

// Combine reducers
const rootReducer = combineReducers({
    game: gameReducer,
    // Add other reducers if needed
});

// Configure the Redux store
const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadGameStateFromRealm(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(storeToRealmMiddleware),
});

export { store };
