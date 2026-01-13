const dividendDescription3 = {
    "First/Top Line": {
        description: "All the Numbers of first/top row of a ticket.",
        ticketDetails: {
            marked: [
                [true, false, true, false, true, true, false, false, true],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, null, 25, null, 46, 50, null, null, 87],
                [4, 15, null, 34, null, 53, null, 77, null],
                [7, 18, null, 36, 47, null, 61, null, null],
            ],
        },
    },
    "Second/Middle Line": {
        description: "All the Numbers of second/middle row of a ticket.",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, true, true, false, true, true, false, false, true],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, null, 24, 34, null, 55, null, 73, 83],
                [null, 18, 29, null, 44, 56, null, null, 88],
                [3, null, null, 39, 48, null, 69, null, 89],
            ],
        },
    },

    "Third/Last Line": {
        description: "All the Numbers of third/last row of a ticket. ",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [true, true, false, true, false, true, false, true, false],
            ],

            ticket: [
                [null, null, 25, 31, null, 51, 63, null, 82],
                [1, 10, null, null, 49, 56, null, 73, null],
                [2, 14, null, 35, null, 59, null, 77, null],
            ],
        },
    },

    "4 Corners": {
        description: "First and last numbers of top and and bottom rows",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [6, 12, null, null, 42, 51, null, null, 83],
                [null, 13, null, 35, 45, null, 67, 70, null],
                [8, null, 25, 39, null, 59, null, 78, null],
            ],
        },
    },

    "Queen Corners": {
        description: "when first number of each row is marked",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
            ],
            ticket: [
                [4, 10, null, 33, null, null, 62, 75, null],
                [null, 12, null, null, 45, 54, null, 79, 81],
                [null, 15, 24, null, null, 55, 64, null, 83],
            ],
        },
    },

    "King Corners": {
        description: "when last number of each row is marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [4, 19, null, null, null, 52, 63, null, 83],
                [null, null, 25, 36, null, 58, null, 76, 86],
                [9, null, 29, null, 43, null, null, 77, 90],
            ],
        },
    },

    "4 Corners and Center": {
        description: '',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, true],
                [false, false, false, false, true, false, false, false, false],
                [true, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [6, 12, null, null, 42, 51, null, null, 83],
                [null, 13, null, 35, 45, null, 67, 70, null],
                [8, null, 25, 39, null, 59, null, 78, null],
            ],
        },
    },

    "Bulls Eyes": {
        description: "if 2nd and 4th numbers of each line are marked",
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, true, false, false],
                [false, true, false, false, false, true, false, false, false],
                [false, true, false, false, false, false, true, false, false],
            ],

            ticket: [
                [null, null, 21, 31, null, 52, 63, null, 83],
                [2, 10, null, null, 42, 54, null, 71, null],
                [7, 19, null, 36, null, null, 64, 73, null],
            ],
        },
    },

    "Twin Lines": {
        description: "if 1st and 2nd numbers of each line are marked",
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [false, false, true, true, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 14, 20, null, 43, null, 65, null, 86],
                [null, null, 23, 31, null, 54, null, 76, 90],
                [2, null, 25, 39, null, null, 67, 79, null],
            ],
        },
    },

    "6 Corners": {
        description: "First and last numbers of each line are marked",
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, true],
                [true, false, false, false, false, false, false, true, false],
                [true, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, 16, null, 30, null, 50, 62, null, 86],
                [4, null, 23, 37, null, null, 62, 70, null],
                [7, null, null, null, 43, 58, null, 73, 88],
            ],
        },
    },

    "6 Corners and Center": {
        description: "First and last number of each row is marked and 3rd number middle row is  marked.",
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, true, false],
                [true, false, false, true, false, false, false, false, true],
                [true, false, false, false, false, false, true, false, false],
            ],

            ticket: [
                [null, 12, null, 30, 43, null, 62, 78, null],
                [2, null, 20, 35, null, 51, null, null, 87],
                [7, 14, null, 36, 44, null, 67, null, null],
            ],
        },
    },
    "Reverse Twin": {
        description: "if 4th and 5th numbers of each line are marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, true, false, true, false],
                [false, false, false, false, false, true, false, true, false],
            ],

            ticket: [
                [null, 10, null, 34, 40, null, 60, null, 83],
                [4, null, 25, null, 43, 51, null, 71, null],
                [7, null, 26, null, 46, 56, null, 73, null],
            ],
        },
    },

    "Early 5/Jaldi 5": {
        description: "When any 5 numbers are marked",
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, true, false, true],
            ],

            ticket: [
                [null, 10, 21, null, 41, null, 62, 70, null],
                [null, 13, null, 34, null, 51, null, 75, 80],
                [6, 17, null, 36, null, null, 65, null, 86],
            ],
        },
    },
    "Early 6/Jaldi 6": {
        description: "When any 6 numbers are marked",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, true, false, false],
                [false, false, true, false, true, true, false, false, false],
                [false, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, 13, null, 30, null, null, 67, 79, null],
                [null, 16, 29, null, 46, 50, null, null, 86],
                [9, 19, null, null, 48, 52, null, null, 88],
            ],
        },
    },
    "Early 7/Jaldi 7": {
        description: "When any 7 numbers are marked",
        ticketDetails: {
            marked: [
                [true, false, true, true, false, false, false, false, true],
                [true, false, false, false, false, true, false, false, false],
                [false, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [2, null, 23, 37, null, null, null, 70, 86],
                [9, 14, null, null, null, 52, 61, null, 90],
                [null, 19, 29, null, 41, null, 62, 78, null],
            ],
        },
    },
    "Early 8/Jaldi 8": {
        description: "When any 8 numbers are marked",
        ticketDetails: {
            marked: [
                [false, true, false, false, false, true, false, false, true],
                [false, true, true, false, false, false, false, false, true],
                [false, false, false, true, false, false, false, true, false],
            ],

            ticket: [
                [null, 13, 20, null, null, 57, null, 72, 80],
                [null, 18, 21, null, 40, null, 65, null, 84],
                [1, null, 24, 36, null, null, 67, 76, null],
            ],
        },
    },

    "Early 9/Jaldi 9": {
        description: "When any 9 numbers are marked",
        ticketDetails: {
            marked: [
                [false, false, true, false, false, true, false, true, false],
                [false, true, false, true, false, false, true, false, true],
                [true, false, false, true, false, false, false, false, false],
            ],

            ticket: [
                [5, null, 23, null, 41, 53, null, 78, null],
                [null, 19, null, 37, 42, null, 62, null, 81],
                [9, null, null, 38, 44, null, 63, null, 83],
            ],
        },
    },

    "Early 10/Jaldi 10": {
        description: "When any 10 numbers are marked",
        ticketDetails: {
            marked: [
                [false, true, false, true, true, false, false, false, false],
                [false, true, false, false, false, true, true, false, true],
                [true, false, true, false, false, false, false, true, false],
            ],

            ticket: [
                [4, 13, null, 31, 40, null, null, null, 87],
                [null, 14, null, 32, null, 55, 65, null, 88],
                [5, null, 20, 34, null, null, 67, 77, null],
            ],
        },
    },
    "Early 11/Jaldi 11": {
        description: "When any 11 numbers are marked",
        ticketDetails: {
            marked: [
                [false, false, false, true, false, true, false, false, true],
                [true, true, false, true, true, false, false, false, false],
                [true, true, false, false, true, false, true, false, false],
            ],

            ticket: [
                [null, null, 25, 32, null, 55, null, 70, 82],
                [3, 11, null, 33, 42, null, null, 76, null],
                [4, 18, null, 38, 43, null, 60, null, null],
            ],
        },
    },

    "Early 12/Jaldi 12": {
        description: "When any 12 numbers are marked",
        ticketDetails: {
            marked: [
                [true, true, false, true, false, false, true, false, false],
                [false, false, true, true, false, true, false, true, false],
                [false, false, true, true, false, true, false, true, false],
            ],

            ticket: [
                [8, 10, null, 32, 40, null, 61, null, null],
                [null, null, 20, 36, null, 54, null, 78, 81],
                [null, null, 22, 37, null, 85, null, 79, 83],
            ],
        },
    },
    "Early 13/Jaldi 13": {
        description: "When any 13 numbers are marked",
        ticketDetails: {
            marked: [
                [true, false, true, false, false, true, false, false, true],
                [false, true, true, false, false, false, true, true, false],
                [false, true, false, true, true, false, true, true, false],
            ],

            ticket: [
                [7, null, 20, null, null, 54, 65, null, 84],
                [null, 12, 26, null, 41, null, 66, 70, null],
                [null, 13, null, 39, 46, null, 67, 74, null],
            ],
        },
    },

    "Early 14/Jaldi 14": {
        description: "When any 14 numbers are marked",
        ticketDetails: {
            marked: [
                [false, true, false, false, true, false, true, false, true],
                [true, false, true, true, false, true, true, false, false],
                [true, false, true, true, false, false, false, true, true],
            ],

            ticket: [
                [null, 19, 23, null, 45, null, 62, null, 81],
                [3, null, 27, 36, null, 55, 64, null, null],
                [8, null, 28, 39, null, null, null, 75, 90],
            ],
        },
    },
    "Hockey Stick": {
        description: "if all numbers of ticket containing 7 are marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
                [false, false, false, false, false, true, false, true, false],
            ],

            ticket: [
                [5, 16, null, 32, null, 50, 61, null, null],
                [null, 17, 22, null, 42, 53, null, null, 81],
                [null, null, 28, null, 43, 57, null, 79, 85],
            ],
        },
    },

    "Fat Lady": {
        description: "if all numbers of ticket containing 8 are marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [3, null, null, 35, 45, null, 63, 79, null],
                [5, 15, null, null, null, 52, 65, null, 83],
                [6, null, 21, 39, null, 54, null, null, 85],
            ],
        },
    },

    "Ugly Duckling": {
        description: "if all numbers of ticket containing 2 are marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, true, false, false, false, true, false, false],
                [false, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [5, 13, null, 34, null, null, 60, null, 88],
                [null, 18, 23, null, null, 57, 62, null, 90],
                [6, null, 25, null, 46, null, 68, 76, null],
            ],
        },
    },

    'Pyramid': {
        description:
            "if 3rd number of top row, 2nd and 4th numbers of middle row and 1st, 3rd and 5th number of last row are marked.",
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, true, false, false, true, false, false],
                [false, true, false, false, true, false, false, false, true],
            ],

            ticket: [
                [5, null, 21, null, 44, 53, null, 73, null],
                [null, null, 22, 30, null, 57, 65, null, 86],
                [null, 11, null, 33, 48, null, 67, null, 89],
            ],
        },
    },
    "Reverse Pyramid": {
        description:
            "if 1st, 3rd and 5th number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked",
        ticketDetails: {
            marked: [
                [false, true, false, false, true, false, false, true, false],
                [false, false, true, false, false, false, false, true, false],
                [false, false, false, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 10, 23, null, 47, null, 69, 75, null],
                [1, null, 25, null, null, 54, null, 76, 88],
                [9, 18, null, 34, null, null, 78, 89],
            ],
        },
    },
    "Circle": {
        description:
            "if 3rd number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, false],
                [false, false, true, false, false, true, false, false, false],
                [false, false, false, false, true, false, false, false, false],
            ],

            ticket: [
                [2, 14, null, 38, null, null, 63, 72, null],
                [3, null, 22, null, 46, 51, null, null, 83],
                [5, null, 28, null, 49, 53, null, null, 88],
            ],
        },
    },
    "All Even": {
        description: "If all even numbers of ticket are marked.",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, false, false],
                [true, false, false, false, false, true, false, false, false],
                [false, false, false, true, false, true, false, false, false],
            ],

            ticket: [
                [null, null, 23, null, 43, 52, null, 73, 81],
                [8, 11, null, null, null, 56, 61, null, 89],
                [9, 13, null, 30, null, 58, 63, null, null],
            ],
        },
    },

    "All Odd": {
        description: "If all odd numbers of ticket are marked.",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [true, false, true, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 10, 22, null, 46, 56, null, 75, null],
                [1, null, 27, 36, null, null, 65, null, 83],
                [8, null, null, 38, null, 58, null, 76, 86],
            ],
        },
    },
    'Plus': {
        description:
            "If 3rd number of all 3 rows and 2nd and 4th numbers of middle row are marked",
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, true, false, true, true, false, false],
                [false, false, false, false, true, false, false, false, false],
            ],

            ticket: [
                [7, null, 22, 35, null, 52, 63, null, null],
                [null, 11, null, 37, null, 56, 66, null, 84],
                [null, 17, 26, null, 46, 59, null, null, 87],
            ],
        },
    },
    "Temp./ BP": {
        description: "If smallest and highest number of ticket are marked",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [7, null, 25, null, 43, null, 65, 71, null],
                [null, 10, null, 34, null, 50, null, 75, 85],
                [9, 13, null, null, 47, null, 69, null, 89],
            ],
        },
    },
    "Double Temp.": {
        description: "If 2 smallest and 2 highest numbers of ticket are marked",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [5, 10, null, 35, null, null, 61, 75, null],
                [9, null, 25, null, null, 54, 64, null, 90],
                [null, 13, 26, null, 43, null, 66, 78, null],
            ],
        },
    },
    "House": {
        description: "All the numbers on a ticket",
        ticketDetails: {
            marked: [
                [false, true, true, false, true, false, true, true, false],
                [true, false, false, true, false, true, false, true, true],
                [true, false, true, true, false, true, false, true, false],
            ],

            ticket: [
                [null, 19, 21, null, 47, null, 62, 75, null],
                [1, null, null, 31, null, 51, null, 77, 88],
                [9, null, 25, 32, null, 54, null, 78, null],
            ],
        },
    },
    "I Love You 143": {
        description:
            "if 1st number of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, false, true, true, false, true, false, true, false],
                [false, false, true, true, false, true, false, false, false],
            ],

            ticket: [
                [4, 17, null, 30, 48, null, 61, null, null],
                [null, null, 21, 32, null, 55, null, 73, 83],
                [null, null, 29, 35, null, 58, null, 74, 89],
            ],
        },
    },
    "We Love You 243": {
        description:
            "if 1st and 2nd numbers of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [false, true, false, true, true, false, true, false, false],
                [true, true, false, false, false, true, false, false, false],
            ],

            ticket: [
                [null, 15, 23, null, 41, 54, null, 73, null],
                [null, 17, null, 38, 49, null, 66, null, 87],
                [8, 19, null, null, null, 58, 69, null, 88],
            ],
        },
    },
    '124': {
        description:
            "if 1st number of top row, 1st and 2nd numbers of middle row and 1st, 2nd ,3rd and 4th numbers of last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [false, false, true, false, true, false, false, false, false],
                [true, false, true, false, true, false, true, false, false],
            ],

            ticket: [
                [null, 10, null, 34, null, 56, 60, null, 83],
                [null, null, 21, null, 41, 59, null, 70, 88],
                [9, null, 28, null, 45, null, 64, null, 89],
            ],
        },
    },
    '421': {
        description:
            "if 1st, 2nd , 3rd and 4th  numbers of top row, 1st and 2nd numbers of middle row and 1st number of last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, true, false, true, true, false, false, false],
                [false, false, true, false, true, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 19, 23, null, 46, 50, null, 70, null],
                [null, null, 27, null, 47, 51, null, 71, 88],
                [7, null, null, 38, 48, null, 63, null, 90],
            ],
        },
    },
    "225": {
        description:
            "if 1st and 2nd numbers of the top row, 1st and 2nd numbers of the middle row and 1st, 2nd , 3rd, 4th and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, true, true, false, true, false, true, true, false],
            ],

            ticket: [
                [6, 14, null, 32, null, null, 62, null, 85],
                [null, 15, 27, null, null, 50, null, 71, 86],
                [null, 19, 28, null, 47, null, 64, 75, null],
            ],
        },
    },
    '123': {
        description:
            "if 1st number of top row, 1st and 2nd numbers of middle row and 1st, 2nd and 3rd numbers of last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [true, false, true, false, true, false, false, false, false],
            ],

            ticket: [
                [null, 12, 24, null, null, 57, null, 75, 81],
                [3, 18, null, 34, null, null, 67, null, 83],
                [6, null, 26, null, 47, null, null, 77, 86],
            ],
        },
    },
    "333": {
        description: "if 1st, 2nd and 3rd numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [true, true, false, false, true, false, false, false, false],
                [true, false, true, true, false, false, false, false, false],
                [true, false, false, true, true, false, false, false, false],
            ],

            ticket: [
                [3, 13, null, null, 41, 50, null, null, 86],
                [8, null, 20, 34, null, null, 68, 73, null],
                [9, null, null, 35, 43, null, null, 75, 87],
            ],
        },
    },
    "4 2 ka 1(Reverse)": {
        description:
            "if 2nd , 3rd ,4th and 5th numbers of the top row, 4th and 5th numbers of middle row and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [false, false, true, false, true, false, false, true, true],
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, 13, 23, null, 46, null, null, 71, 80],
                [5, null, 24, 31, null, null, 67, 76, null],
                [null, 14, null, 37, null, 50, 68, null, 84],
            ],
        },
    },
    "333 (reverse)": {
        description: "if 3rd,4th and 5th numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, true, true, false, false, true],
                [false, false, false, true, false, false, true, true, false],
                [false, false, false, true, false, false, false, true, true],
            ],

            ticket: [
                [null, 11, 23, null, 40, 51, null, null, 85],
                [4, null, 27, 32, null, null, 60, 78, null],
                [6, 14, null, 35, null, null, null, 79, 88],
            ],
        },
    },

    "3 2 ka 1(Reverse)": {
        description:
            "if 3rd,4th and 5th numbers of top row, 4th and 5th numbers of middle row and 5th number of last row marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, true, true, false],
                [false, false, false, false, true, false, false, true, false],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [2, null, null, 32, 40, null, 66, 74, null],
                [4, 10, null, 39, 44, null, null, 77, null],
                [null, 17, 29, null, 46, 57, null, null, 88],
            ],
        },
    },
    "1 Pair (Row)": {
        description: "If in any row, 1 pair of 2 numbers together are marked",
        ticketDetails: {
            marked: [
                [false, false, true, true, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [5, null, 21, 32, null, 55, null, null, 84],
                [null, 10, 25, null, 42, null, 60, 75, null],
                [8, 15, null, 37, 48, null, null, 77, null],
            ],
        },
    },
    "2 Pair (Row)": {
        description: "If in a ticket, 2 pair of 2 numbers together are marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, true, true, false, true, true],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, null, 23, null, 41, 57, null, 78, 83],
                [8, null, 26, 37, null, null, 60, 72, null],
                [9, 12, null, null, 48, null, 69, 74, null],
            ],
        },
    },
    "3 Pair (Row)": {
        description: "If in a ticket, 3 pair of 2 numbers together are marked",
        ticketDetails: {
            marked: [
                [false, false, true, true, false, true, true, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [6, null, 21, 39, null, 56, 64, null, null],
                [null, 10, 24, null, 40, null, null, 72, 87],
                [null, 16, 26, null, 49, null, null, 74, 89],
            ],
        },
    },
    "4 Pair (Row)": {
        description: "If in a ticket, 4 pair of 2 numbers together are marked",
        ticketDetails: {
            marked: [
                [false, false, true, true, false, true, true, false, false],
                [false, true, true, false, false, false, true, true, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, null, 20, 34, null, 52, 66, null, 83],
                [null, 16, 23, null, 46, null, 68, 71, null],
                [6, null, 27, 35, null, null, null, 73, 84],
            ],
        },
    },
    "All Pair (Row)": {
        description: "If in a ticket, all pair of 2 numbers together are marked",
        ticketDetails: {
            marked: [
                [false, false, true, true, false, false, true, true, false],
                [false, false, false, false, false, true, true, false, false],
                [false, false, false, true, true, false, false, false, false],
            ],

            ticket: [
                [2, null, 23, 35, null, null, 61, 76, null],
                [null, 19, null, 33, null, 57, 61, null, 81],
                [8, null, null, 37, 46, null, 69, null, 88],
            ],
        },
    },
    "1 Pair (Column)": {
        description:
            "If in any column, 1 pair of 2 numbers vertically together are marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 14, null, 31, 40, null, 60, null, 81],
                [3, null, 22, null, 43, 52, null, null, 84],
                [8, null, 28, 35, null, null, null, 78, 87],
            ],
        },
    },
    "2 Pair (Column)": {
        description:
            "If in any column, 2 pair of 2 numbers vertically together are marked",
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 12, 29, null, 47, null, null, 72, 81],
                [2, 16, null, 30, 49, null, 61, null, null],
                [6, 19, null, 34, null, 53, null, 78, null],
            ],
        },
    },
    "3 Pair (Column)": {
        description:
            "If in any column, 3 pair of 2 numbers vertically together are marked",
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [true, true, false, true, false, false, false, false, false],
                [true, false, false, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 15, null, null, 40, null, 62, 74, null],
                [1, 18, null, 31, null, 50, null, 79, 82],
                [5, null, 29, 35, null, 51, 63, null, 87],
            ],
        },
    },
    "4 Pair (Column)": {
        description:
            "If in any column, 4 pair of 2 numbers vertically together are marked",
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, true, false, false],
                [false, true, false, false, false, true, true, false, true],
                [false, false, false, false, false, true, false, false, true],
            ],

            ticket: [
                [null, 12, 23, null, 49, null, 60, 70, null],
                [null, 13, null, 35, null, 55, 62, null, 83],
                [7, 14, null, null, null, 58, null, 79, 86],
            ],
        },
    },
    "All Pair (Column)": {
        description:
            "If in any column, all pair of 2 numbers vertically together are marked",
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, true, false],
                [true, true, false, true, false, true, false, true, true],
                [true, false, false, true, false, true, false, false, true],
            ],

            ticket: [
                [null, 15, null, null, 43, null, 65, 75, null],
                [2, 17, null, 33, null, 51, null, 79, 83],
                [7, null, 28, 36, null, 52, 62, null, 89],
            ],
        },
    },
    'Breakfast': {
        description:
            "All the numbers of 1st, 2nd and 3rd vertical lines (Columns) are marked.",
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 11, 22, null, 46, null, null, 76, 82],
                [null, 12, null, 31, null, 56, 61, null, 90],
                [8, null, 28, 39, null, null, 63, null, 85],
            ],
        },
    },
    'Lunch': {
        description:
            "All the numbers of 4th, 5th and 6th vertical lines (Columns) are marked.",
        ticketDetails: {
            marked: [
                [false, false, false, true, true, false, false, false, false],
                [false, false, false, true, true, false, false, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [null, 13, null, 33, 41, null, 63, 74, null],
                [null, 15, null, 39, 44, null, 69, null, 84],
                [4, null, 28, null, null, 54, null, 77, 88],
            ],
        },
    },
    'Dinner': {
        description:
            "All the numbers of 7th, 8th and 9th vertical lines (Columns) are marked.",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, true, false, false],
            ],

            ticket: [
                [null, null, 20, 35, null, 52, null, 70, 88],
                [2, null, 28, null, 42, 54, null, 75, null],
                [5, 14, null, 36, 48, null, 63, null, null],
            ],
        },
    },
    "Day || Jawani": {
        description: "When all the number from 1 to 45 are marked.",
        ticketDetails: {
            marked: [
                [false, true, true, false, true, false, false, false, false],
                [true, true, false, true, false, false, false, false, false],
                [true, false, false, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 11, 26, null, 45, null, 62, null, 84],
                [7, 17, null, 35, null, null, null, 73, 87],
                [8, null, null, 37, null, 51, 63, null, 89],
            ],
        },
    },
    "Night || Budhapa": {
        description: "When all the number from 46 to 90 are marked.",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, true, false, false],
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, true, false, true, true],
            ],

            ticket: [
                [5, null, 21, 34, null, 53, 67, null, null],
                [null, 10, 26, null, 44, null, null, 72, 83],
                [null, 19, 28, null, null, 59, null, 73, 90],
            ],
        },
    },
    "Center || Laddu": {
        description: "When 3rd number of second line (row) is marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, true, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [5, 18, null, 30, 46, null, 68, null, null],
                [null, null, 20, 39, null, 54, null, 79, 86],
                [6, null, 26, null, null, 55, 69, null, 90],
            ],
        },
    },

    'Bamboo': {
        description: "When 3rd number of each line (row) is marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [1, null, 21, null, 49, null, null, 70, 80],
                [7, null, 28, 31, null, null, null, 78, 83],
                [null, 19, null, 37, null, 56, null, 79, 90],
            ],
        },
    },
    "First Half": {
        description: "When 1st, 2nd and 3rd number of each line (row) is marked",
        ticketDetails: {
            marked: [
                [false, true, false, true, true, false, false, false, false],
                [true, false, true, true, false, false, false, false, false],
                [false, true, true, false, true, false, false, false, false],
            ],

            ticket: [
                [null, 12, null, 31, 44, null, 67, 78, null],
                [3, null, 28, 36, null, null, 68, null, 83],
                [null, 15, 29, null, 49, 59, null, null, 86],
            ],
        },
    },
    "Second Half": {
        description: "When 3rd,4th and 5th number of each line (row) is marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, true, false, true],
                [false, false, false, false, true, true, false, true, false],
                [false, false, false, true, false, false, false, true, true],
            ],

            ticket: [
                [null, 13, 23, null, 41, null, 64, null, 84],
                [2, null, 26, null, 49, 59, null, 72, null],
                [9, null, 27, 31, null, null, null, 79, 86],
            ],
        },
    },
    "Shehnai Bidaai": {
        description:
            "If first 3 numbers of Top row and last 3 numbers of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, true, true, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, true, false, true, false, true],
            ],

            ticket: [
                [3, null, 20, 38, null, 51, null, null, 80],
                [null, 15, 27, null, 43, 55, null, 77, null],
                [null, 18, 29, null, 44, null, 67, null, 85],
            ],
        },
    },
    'Brahma': {
        description: "When all the number from 1 to 30 are marked.",
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [1, 12, null, 33, 47, null, null, 70, null],
                [4, 16, null, 39, null, null, 66, null, 84],
                [6, null, 21, null, null, 59, null, 75, 88],
            ],
        },
    },
    'Vishnu': {
        description: "When all the number from 31 to 60 are marked.",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, false, false],
                [false, false, false, false, true, true, false, false, false],
                [false, false, false, false, true, true, false, false, false],
            ],

            ticket: [
                [4, null, null, 30, null, 53, 64, null, 82],
                [7, 13, null, null, 43, 54, null, null, 86],
                [null, 14, 24, null, 44, 59, null, 71, null],
            ],
        },
    },
    'Mahesh': {
        description: "When all the number from 61 to 90 are marked.",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [null, 15, 23, null, 40, 50, null, null, 85],
                [2, null, null, 39, 42, null, 69, 72, null],
                [4, null, 26, null, 49, 56, null, 77, null],
            ],
        },
    },
    "Railway Track": {
        description: "When all the number of Top Line and Bottom Line are marked.",
        ticketDetails: {
            marked: [
                [true, false, true, false, true, false, false, true, true],
                [false, false, false, false, false, false, false, false, false],
                [true, true, false, false, true, false, false, true, true],
            ],

            ticket: [
                [1, null, 21, null, 42, null, null, 72, 88],
                [4, null, 28, 38, null, 51, 63, null, null],
                [5, 19, null, null, 48, null, null, 78, 90],
            ],
        },
    },
    'Drum': {
        description: "if 2nd,3rd and 4th number of all 3 rows are marked",
        ticketDetails: {
            marked: [
                [false, false, true, false, true, false, false, true, false],
                [false, true, false, true, false, true, false, false, false],
                [false, true, false, true, true, false, false, false, false],
            ],

            ticket: [
                [1, null, 21, null, 47, null, null, 72, 83],
                [8, 11, null, 33, null, 52, 69, null, null],
                [9, 14, null, 34, 49, null, null, 76, null],
            ],
        },
    },
    'ZIP': {
        description:
            "if 1st and 2nd numbers of Top line + 3rd number of middle line + 4th and 5th numbers of last line are marked.",
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, false, false, true, false, true],
            ],

            ticket: [
                [null, 14, 21, null, 42, 51, null, 71, null],
                [1, null, 24, 30, null, 56, 65, null, null],
                [2, null, 25, null, 46, null, 67, null, 90],
            ],
        },
    },
    'ZAP': {
        description:
            "if 4th and 5th numbers of Top line + 3rd number of middle line + 1st and 2nd numbers of last line are marked.",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, true, false],
                [false, false, false, false, false, true, false, false, false],
                [false, true, false, true, false, false, false, false, false],
            ],
            ticket: [
                [2, 11, null, null, 43, 53, null, 73, null],
                [null, null, 29, 30, null, 56, 60, null, 80],
                [null, 13, null, 32, 46, null, 67, 74, null],
            ],
        },
    },
};
export default dividendDescription3;
