// GameSchema.js
export const GameSchema = {
    name: 'Game',
    primaryKey: 'id',
    properties: {
        id: 'string',
        gameState: 'string', // Game state stored as JSON string
    },
};
