
const TambolaNumberSet = () => {
    const createBingoArray = (start, count) => Array.from({ length: count }, (_, i) => i + start);

    let bingoArrays = [
        createBingoArray(80, 11),  // 80 to 90
        createBingoArray(10, 10),  // 10 to 19
        createBingoArray(20, 10),  // 20 to 29
        createBingoArray(30, 10),  // 30 to 39
        createBingoArray(40, 10),  // 40 to 49
        createBingoArray(50, 10),  // 50 to 59
        createBingoArray(60, 10),  // 60 to 69
        createBingoArray(70, 10),  // 70 to 79
        createBingoArray(1, 9),    // 1 to 9
    ];

    const newArrays = Array.from({ length: 6 }, () => []);
    const arrayCounts = Array.from({ length: 6 }, () => Array(9).fill(0));

    // Helper function to get random number from array and remove it
    const getRandomNumber = (bingoArray) => {
        const randomIndex = Math.floor(Math.random() * bingoArray.length);
        return bingoArray.splice(randomIndex, 1)[0];
    };

    // Step 1: Assign 1 number from each bingoArray to each new array
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 6; j++) {
            const number = getRandomNumber(bingoArrays[i]);
            if (number) {
                newArrays[j].push(number);
                arrayCounts[j][i]++;
            }
        }
    }

    // const fillArray = (array, bingoArrays, arrayCount) => {
    //     while (array.length < 12) {
    //         let added = false;

    //         // Step 1: Try to add numbers with a limit of 2 per range
    //         for (let i = 0; i < 9; i++) {
    //             if (arrayCount[i] < 3 && bingoArrays[i].length > 0) {
    //                 array.push(getRandomNumber(bingoArrays[i]));
    //                 arrayCount[i]++;
    //                 added = true;
    //             }
    //             if (array.length === 12) break;
    //         }


    //         // Break if no numbers were added to avoid infinite loop
    //         if (!added) break;
    //     }
    // };

    // newArrays.forEach((array, index) => fillArray(array, bingoArrays, arrayCounts[index]));

    // const fillArrayFinal = (array, bingoArrays, arrayCount) => {
    //     while (array.length < 15) {
    //         let added = false;


    //         // Step 2: If not yet filled, add numbers with a limit of 3 per range
    //         if (array.length < 15) {
    //             for (let i = 0; i < 9; i++) {
    //                 if (arrayCount[i] < 3 && bingoArrays[i].length > 0) {
    //                     array.push(getRandomNumber(bingoArrays[i]));
    //                     arrayCount[i]++;
    //                     added = true;
    //                 }
    //                 if (array.length === 15) break;
    //             }
    //         }

    //         // Break if no numbers were added to avoid infinite loop
    //         if (!added) break;
    //     }
    // };

    // newArrays.forEach((array, index) => fillArrayFinal(array, bingoArrays, arrayCounts[index]));

    // Step 3: Distribute any remaining numbers, avoiding duplicates or excessive numbers per range




    const fillArray = (array, bingoArrays, arrayCount) => {
        while (array.length < 10) {
            let added = false;

            // Step 1: Try to add numbers with a limit of 2 per range
            for (let i = 0; i < 9; i++) {
                if (arrayCount[i] < 3 && bingoArrays[i].length > 0) {
                    array.push(getRandomNumber(bingoArrays[i]));
                    arrayCount[i]++;
                    added = true;
                }
                if (array.length === 10) break;
            }


            // Break if no numbers were added to avoid infinite loop
            if (!added) break;
        }
    };

    // const fillArray1 = (array, bingoArrays, arrayCount) => {
    //     while (array.length < 11) {
    //         let added = false;

    //         // Step 1: Try to add numbers with a limit of 2 per range
    //         for (let i = 0; i < 9; i++) {
    //             if (arrayCount[i] < 3 && bingoArrays[i].length > 0) {
    //                 array.push(getRandomNumber(bingoArrays[i]));
    //                 arrayCount[i]++;
    //                 added = true;
    //             }
    //             if (array.length === 11) break;
    //         }


    //         // Break if no numbers were added to avoid infinite loop
    //         if (!added) break;
    //     }
    // };

    const fillArray2 = (array, bingoArrays, arrayCount) => {
        while (array.length < 12) {
            let added = false;

            // Step 1: Try to add numbers with a limit of 2 per range
            for (let i = 0; i < 9; i++) {
                if (arrayCount[i] < 3 && bingoArrays[i].length > 0) {
                    array.push(getRandomNumber(bingoArrays[i]));
                    arrayCount[i]++;
                    added = true;
                }
                if (array.length === 12) break;
            }


            // Break if no numbers were added to avoid infinite loop
            if (!added) break;
        }
    };

    const fillArray3 = (array, bingoArrays, arrayCount) => {
        while (array.length < 13) {
            let added = false;

            // Step 1: Try to add numbers with a limit of 2 per range
            for (let i = 0; i < 9; i++) {
                if (arrayCount[i] < 3 && bingoArrays[i].length > 0) {
                    array.push(getRandomNumber(bingoArrays[i]));
                    arrayCount[i]++;
                    added = true;
                }
                if (array.length === 13) break;
            }


            // Break if no numbers were added to avoid infinite loop
            if (!added) break;
        }
    };

    // const fillArray4 = (array, bingoArrays, arrayCount) => {
    //     while (array.length < 14) {
    //         let added = false;

    //         // Step 1: Try to add numbers with a limit of 2 per range
    //         for (let i = 0; i < 9; i++) {
    //             if (arrayCount[i] < 3 && bingoArrays[i].length > 0) {
    //                 array.push(getRandomNumber(bingoArrays[i]));
    //                 arrayCount[i]++;
    //                 added = true;
    //             }
    //             if (array.length === 14) break;
    //         }


    //         // Break if no numbers were added to avoid infinite loop
    //         if (!added) break;
    //     }
    // };




    const fillFunctions = [fillArray, fillArray2, fillArray3];
    const randomFillFunction = fillFunctions[Math.floor(Math.random() * fillFunctions.length)];
    newArrays.forEach((array, index) => randomFillFunction(array, bingoArrays, arrayCounts[index]));

    const fillArrayFinal = (array, bingoArrays, arrayCount) => {
        while (array.length < 15) {
            let added = false;


            // Step 2: If not yet filled, add numbers with a limit of 3 per range
            if (array.length < 15) {
                for (let i = 0; i < 9; i++) {
                    if (arrayCount[i] < 3 && bingoArrays[i].length > 0) {
                        array.push(getRandomNumber(bingoArrays[i]));
                        arrayCount[i]++;
                        added = true;
                    }
                    if (array.length === 15) break;
                }
            }

            // Break if no numbers were added to avoid infinite loop
            if (!added) break;
        }
    };

    newArrays.forEach((array, index) => fillArrayFinal(array, bingoArrays, arrayCounts[index]));

    let remainingNumbers = bingoArrays.flat();
    const redistributeExcessNumbers = (array, countArray) => {
        for (let i = 0; i < 9; i++) {
            if (countArray[i] > 3) {
                const excess = array.filter(num => num >= (i === 0 ? 1 : i * 10) && num < (i + 1) * 10).slice(3);
                excess.forEach(num => {
                    const idx = array.indexOf(num);
                    array.splice(idx, 1);
                    array.push(remainingNumbers.pop());
                });
            }
        }
    };

    newArrays.forEach((array, index) => redistributeExcessNumbers(array, arrayCounts[index]));

    // Step 4: Ensure arrays have exactly 15 numbers, filling any gaps with remaining numbers
    const fillTo15 = (array) => {
        while (array.length < 15 && remainingNumbers.length > 0) {
            array.push(remainingNumbers.pop());
        }
    };

    newArrays.forEach(fillTo15);

    // Shuffle function for arrays
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);

    // Shuffle each individual array and return the final result
    const shuffledResult = newArrays.map(arr => shuffle([...arr]));


    const distributeNumbers = (numbers) => {

        // Arrays to hold the distributed numbers
        const array1 = [];
        const array2 = [];
        const array3 = [];

        // Helper function to distribute numbers into the arrays
        const distributeToArrays = (numbers, arrays) => {
            let index = 0;
            for (const number of numbers) {
                arrays[index % 3].push(number);
                index++;
            }
        };

        // Sort numbers based on their group and distribute evenly
        let sortedNumbers = numbers.sort((a, b) => a - b); // Sort numbers
        let arrays = [array1, array2, array3];

        // Distribute numbers to the arrays
        distributeToArrays(sortedNumbers, arrays);

        // reordering the arrays
        function reorderBingoArrays(arrays) {
            // Define ranges for each group of numbers
            const ranges = [
                { min: 1, max: 9 },
                { min: 10, max: 19 },
                { min: 20, max: 29 },
                { min: 30, max: 39 },
                { min: 40, max: 49 },
                { min: 50, max: 59 },
                { min: 60, max: 69 },
                { min: 70, max: 79 },
                { min: 80, max: 90 }
            ];

            // Process each range individually
            ranges.forEach(({ min, max }) => {
                // Step 1: Gather all numbers within this range from all arrays
                const numbersInRange = [];
                arrays.forEach(row => {
                    row.forEach(num => {
                        if (num >= min && num <= max) {
                            numbersInRange.push(num);
                        }
                    });
                });

                // Step 2: Sort numbers in this range
                numbersInRange.sort((a, b) => a - b);

                // Step 3: Distribute sorted numbers back into arrays in ascending order
                arrays.forEach((row, rowIndex) => {
                    // Find an index in the row that falls within the current range
                    const rangeIndex = row.findIndex(num => num >= min && num <= max);
                    if (rangeIndex !== -1 && numbersInRange.length > 0) {
                        // Assign the smallest available number in the range to this position
                        row[rangeIndex] = numbersInRange.shift();
                    }
                });
            });

            return arrays;
        }
        reorderBingoArrays(arrays);

        // Ensure each array has exactly 5 numbers, redistributing if necessary
        const ensureFiveNumbers = () => {
            const needs = [5 - array1.length, 5 - array2.length, 5 - array3.length];
            const allArrays = [array1, array2, array3];

            for (let i = 0; i < 3; i++) {
                if (needs[i] > 0) {
                    // Move numbers from arrays with excess numbers
                    for (let j = 0; j < 3; j++) {
                        if (i !== j && allArrays[j].length > 5) {
                            while (needs[i] > 0 && allArrays[j].length > 5) {
                                const number = allArrays[j].pop();
                                allArrays[i].push(number);
                                needs[i]--;
                            }
                        }
                    }
                }
            }
        };

        ensureFiveNumbers();

        // Fill any remaining spots with nulls
        const fillWithNulls = (arr) => {
            while (arr.length < 5) {
                arr.push(null);
            }
        };

        fillWithNulls(array1);
        fillWithNulls(array2);
        fillWithNulls(array3);

        function createSubArrayWithNulls(subArray) {
            const newArray = Array(9).fill(null);

            subArray.forEach(number => {
                if (number >= 1 && number <= 9) newArray[0] = number;
                else if (number >= 10 && number <= 19) newArray[1] = number;
                else if (number >= 20 && number <= 29) newArray[2] = number;
                else if (number >= 30 && number <= 39) newArray[3] = number;
                else if (number >= 40 && number <= 49) newArray[4] = number;
                else if (number >= 50 && number <= 59) newArray[5] = number;
                else if (number >= 60 && number <= 69) newArray[6] = number;
                else if (number >= 70 && number <= 79) newArray[7] = number;
                else if (number >= 80 && number <= 90) newArray[8] = number;
            });

            return newArray;
        }

        return [createSubArrayWithNulls(array1), createSubArrayWithNulls(array2), createSubArrayWithNulls(array3)];

    };

    const multidimensionalTicketArray = shuffledResult.map(array => distributeNumbers(array));

    return multidimensionalTicketArray;
};


export const generateUniqueTicketsSubsequent = (count, existingTickets = []) => {
    const ticketsMap = new Map();

    // Add existing tickets to the map for uniqueness checking
    existingTickets.forEach(ticketObj => {
        if (ticketObj && ticketObj.ticket) {
            const ticketString = JSON.stringify(ticketObj.ticket);
            ticketsMap.set(ticketString, ticketObj); // Store stringified ticket for uniqueness check
        }
    });

    // Track the number of new tickets generated
    let newTicketsGenerated = 0;
    let newTickets = [];

    if (count % 6 != 0) {
        var ticketQuantities = count + (6 - (count % 6));
    } else {
        var ticketQuantities = count;
    }

    // Generate new unique tickets
    while (newTicketsGenerated < ticketQuantities) {
        const newTicketSet = TambolaNumberSet(); // Generate a new set of 6 tickets

        for (const newTicket of newTicketSet) {
            const ticketString = JSON.stringify(newTicket);

            // Ensure the new ticket is unique by checking the map
            if (!ticketsMap.has(ticketString)) {
                newTicketsGenerated++;
                const serialNumber = existingTickets.length + newTicketsGenerated;
                const newTicketObj = {
                    ticket: newTicket,
                    marked: Array.from({ length: 3 }, () => Array(9).fill(false)),
                    serialNumber: serialNumber, // Assign serial number to new ticket
                    isActiveTicket: true,
                };
                ticketsMap.set(ticketString, newTicketObj); // Add new ticket to the map
                newTickets.push(newTicketObj); // Add new ticket to the result array
            }

            // Stop generating if we reach the required ticketQuantities
            if (newTicketsGenerated >= ticketQuantities) break;
        }

        // If no new unique tickets were generated in this round, exit the loop to avoid infinite loops
        if (newTicketsGenerated === 0) {
            console.warn('No new unique tickets could be generated. Consider increasing variability or adjusting logic.');
            break;
        }
    }

    return newTickets.slice(0, count);
};




