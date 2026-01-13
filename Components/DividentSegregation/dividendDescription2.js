const dividendDescription2 = {
    "First/Top Line": {
        description: 'All the Numbers of first/top row of a ticket.',
        ticketDetails: {
            marked: [
                [true, false, true, true, false, true, false, true, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [8, null, 21, 34, null, 51, null, 76, null],
                [null, 10, 22, null, 44, 55, null, null, 86],
                [null, 14, null, 33, 46, null, 66, null, 89],
            ],
        },
    },
    'Second/Middle Line': {
        description: 'All the Numbers of second/middle row of a ticket.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [true, false, true, true, false, false, true, false, true],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [6, null, 21, null, 45, 58, null, 74, null],
                [8, null, 22, 34, null, null, 60, null, 88],
                [null, 11, 27, null, 48, null, 61, null, 89],
            ],
        },
    },

    'Third/Last Line': {
        description: 'All the Numbers of third/last row of a ticket. ',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, true, true, false, false, true, true, false, true],
            ],

            ticket: [
                [8, null, 21, 34, null, 51, null, 76, null],
                [null, 10, 22, null, 44, 55, null, null, 86],
                [null, 17, 26, null, null, 56, 65, null, 89],
            ],
        },
    },

    '4 Corners': {
        description: 'First and last numbers of top and and bottom rows',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, true],
            ],

            ticket: [
                [2, null, 26, null, null, 56, 63, null, 80],
                [8, null, null, 34, 45, null, 64, 77, null],
                [null, 12, 28, null, 49, 51, null, 79, 83],
            ],
        },
    },

    'Queen Corners': {
        description: 'when first number of each row is marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
            ],
            ticket: [
                [null, 12, 22, null, 41, 51, null, null, 80],
                [6, 13, null, 31, null, null, 68, 71, null],
                [null, 19, 26, null, 47, null, null, 74, 81],
            ],
        },
    },


    'King Corners': {
        description: 'when last number of each row is marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [4, null, null, 39, 42, null, 66, null, 80],
                [8, 11, null, null, 43, 51, null, null, 90],
                [null, 17, 26, null, 45, null, 68, 70, null],
            ],
        },
    },
    '4 Corners and Center': {
        description: '',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, true],
                [false, false, false, false, true, false, false, false, false],
                [false, true, false, false, false, false, false, false, true],
            ],

            ticket: [
                [2, null, 26, null, null, 56, 63, null, 80],
                [8, null, null, 34, 45, null, 64, 77, null],
                [null, 12, 28, null, 49, 51, null, 79, 83],
            ],
        },
    },
    'Bulls Eyes': {
        description: 'if 2nd and 4th numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, true, false, false],
                [false, true, false, false, false, true, false, false, false],
                [false, true, false, false, false, false, true, false, false],
            ],

            ticket: [
                [null, null, 23, 33, null, 55, 65, null, 89],
                [5, 17, null, null, 44, 58, null, 72, null],
                [7, 19, null, 38, null, null, 67, 73, null],
            ],
        },
    },

    'Twin Lines': {
        description: 'if 1st and 2nd numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 16, 23, null, 41, null, null, 71, 90],
                [3, 19, null, 32, null, 55, 64, null, null],
                [5, null, 28, 36, null, 58, 65, null, null],
            ],
        },
    },

    '6 Corners': {
        description: 'First and last numbers of each line are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, true, false],
                [true, false, false, false, false, false, false, false, true],
                [true, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [1, 12, null, 33, null, 56, null, 79, null],
                [6, null, null, 35, 42, null, 62, null, 81],
                [9, null, 27, null, 43, 58, null, 73, 90],
            ],
        },
    },

    '6 Corners and Center': {
        description: 'First and last number of each row is marked and 3rd number middle row is  marked.',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, true],
                [true, false, false, true, false, false, false, true, false],
                [true, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [1, 11, null, null, null, 55, 65, null, 89],
                [2, 16, null, 36, null, null, 68, 75, null],
                [9, null, 27, null, 44, 57, null, 76, null],
            ],
        },
    },

    'Reverse Twin': {
        description: 'if 4th and 5th numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, true, true, false, false],
                [false, false, false, false, false, false, true, true, false],
            ],

            ticket: [
                [4, null, 21, 30, null, null, null, 70, 86],
                [6, null, 24, 39, null, 57, 60, null, null],
                [null, 10, 27, null, 45, null, 66, 74, null],
            ],
        },
    },


    'Early 5/Jaldi 5': {
        description: 'When any 5 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [false, false, false, true, false, true, false, false, false],
                [false, false, false, true, false, false, false, false, true],
            ],

            ticket: [
                [null, 12, 26, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87],
            ],
        },
    },
    'Early 6/Jaldi 6': {
        description: 'When any 6 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, true, false, false, false],
                [true, false, false, false, true, false, false, false, false],
                [false, false, false, false, true, false, false, true, false],
            ],

            ticket: [
                [2, null, 29, null, null, 59, null, 72, 81],
                [9, 12, null, 33, 47, null, 63, null, null],
                [null, 17, null, 35, 49, null, 65, 77, null],
            ],
        },
    },
    'Early 7/Jaldi 7': {
        description: 'When any 7 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, true],
                [true, false, false, true, true, false, false, false, false],
            ],

            ticket: [
                [null, 12, 26, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87],
            ],
        },
    },

    'Early 8/Jaldi 8': {
        description: 'When any 8 numbers are marked',
        ticketDetails: {
            marked: [
                [true, true, false, false, true, false, false, false, false],
                [false, true, false, false, false, true, false, true, false],
                [false, false, false, false, false, true, false, false, true],
            ],

            ticket: [
                [4, 10, null, 34, 42, null, 62, null, null],
                [null, 11, 24, null, 46, 53, null, 76, null],
                [5, null, 26, null, 48, 59, null, null, 86],
            ],
        },
    },

    'Early 9/Jaldi 9': {
        description: 'When any 9 numbers are marked',
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, false, true, false],
                [true, false, false, false, false, true, true, false, true],
                [false, false, false, true, false, false, false, false, true],
            ],

            ticket: [
                [2, 12, null, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87],
            ],
        },
    },
    'Early 10/Jaldi 10': {
        description: 'When any 10 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, true, true, false, true],
                [true, true, false, false, false, false, false, true, false],
                [false, false, true, false, false, false, true, false, false],
            ],

            ticket: [
                [null, 11, 23, null, null, 50, 63, null, 89],
                [3, 15, null, 36, 47, null, null, 76, null],
                [4, null, 28, 37, null, 59, 68, null, null],
            ],
        },
    },
    'Early 11/Jaldi 11': {
        description: 'When any 11 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, false, false, false, true],
                [false, true, true, false, true, false, false, false, true],
                [false, true, true, false, false, true, false, true, false],
            ],

            ticket: [
                [6, null, null, 37, null, 50, 69, null, 83],
                [null, 11, 20, null, 45, 53, null, null, 90],
                [null, 14, 26, null, 46, 54, null, 78, null],
            ],
        },
    },

    'Early 12/Jaldi 12': {
        description: 'When any 12 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, true, true, false, false, false, false],
                [true, false, false, false, true, true, false, true, true],
                [true, false, true, false, false, true, false, true, false],
            ],

            ticket: [
                [null, 11, null, 31, 42, null, 64, null, 83],
                [6, null, null, null, 45, 52, null, 70, 85],
                [7, null, 29, null, null, 59, null, 78, 90],
            ],
        },
    },

    'Early 13/Jaldi 13': {
        description: 'When any 13 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, true, true, false, true],
                [false, false, true, false, true, true, false, false, true],
                [false, true, true, false, true, true, false, false, false],
            ],

            ticket: [
                [6, null, null, 37, null, 50, 69, null, 83],
                [null, 11, 20, null, 45, 53, null, null, 90],
                [null, 14, 26, null, 46, 54, null, 78, null],
            ],
        },
    },
    'Early 14/Jaldi 14': {
        description: 'When any 14 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, true, false, true, true, false, false, false],
                [true, true, false, true, false, false, true, true, false],
                [true, false, false, true, true, false, false, true, true],
            ],

            ticket: [
                [null, 12, 27, null, 44, 53, null, 73, null],
                [5, 14, null, 34, null, null, 69, 78, null],
                [7, null, null, 38, 49, null, null, 79, 82],
            ],
        },
    },

    'Hockey Stick': {
        description: 'if all numbers of ticket containing 7 are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [null, 19, null, 30, null, 51, 64, null, 84],
                [null, null, 20, null, 44, 52, null, 72, 88],
                [1, null, null, 31, 46, null, 68, 79, null],
            ],
        },
    },
    'Fat Lady': {
        description: 'if all numbers of ticket containing 8 are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [2, 14, null, 33, 40, null, null, null, 87],
                [5, null, null, 34, 45, null, 69, 70, null],
                [6, null, 21, null, null, 53, null, 71, 85],
            ],
        },
    },
    'Ugly Duckling': {
        description: 'if all numbers of ticket containing 2 are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, true],
                [false, false, true, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [3, null, null, 35, null, 55, null, 77, 82],
                [6, null, 20, 36, null, null, 65, null, 85],
                [null, 18, null, 37, 47, null, 67, 79, null],
            ],
        },
    },
    'Pyramid': {
        description:
            'if 3rd number of top row, 2nd and 4th numbers of middle row and 1st, 3rd and 5th number of last row are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, false, true, false, false, true, false, false, false],
                [false, true, false, false, true, false, false, false, true],
            ],

            ticket: [
                [1, null, null, 36, 40, null, 64, 72, null],
                [2, null, 26, null, 48, 53, null, 76, null],
                [null, 11, null, 33, 48, null, 67, null, 89],
            ],
        },
    },
    'Reverse Pyramid': {
        description:
            'if 1st, 3rd and 5th number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, false, false, true, false],
                [false, false, false, true, false, false, true, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [5, null, 22, 38, null, null, 67, 71, null],
                [null, 14, null, 39, null, 54, 69, null, 87],
                [null, null, 25, null, 41, 59, null, 74, 89],
            ],
        },
    },
    'Circle': {
        description:
            'if 3rd number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, true, false, false, false, false, true, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [null, 11, 24, null, 44, 51, null, 74, null],
                [1, 19, null, null, 47, null, 63, null, 87],
                [7, null, null, 31, null, 55, 67, null, 88],
            ],
        },
    },
    'All Even': {
        description: 'If all even numbers of ticket are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, true, false, false, true, false, false, false, true],
                [false, false, false, false, true, false, false, true, false],
            ],

            ticket: [
                [5, null, null, 33, null, 51, 67, null, 83],
                [null, 10, null, 35, 44, null, 69, null, 88],
                [null, 11, 27, null, 48, null, null, 72, 89],
            ],
        },
    },


    'All Odd': {
        description: 'If all odd numbers of ticket are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, true, false],
                [false, true, false, false, false, false, true, false, false],
            ],

            ticket: [
                [8, null, 24, null, 40, null, null, 74, 80],
                [null, null, 26, 32, null, 54, null, 77, 90],
                [null, 11, null, 36, 48, null, 63, 78, null],
            ],
        },
    },
    'Plus': {
        description:
            'If 3rd number of all 3 rows and 2nd and 4th numbers of middle row are marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, false],
                [false, false, true, false, true, false, true, false, false],
                [false, false, false, false, false, false, true, false, false],
            ],

            ticket: [
                [7, null, 23, 38, null, 52, 63, null, null],
                [null, 15, 27, null, 42, null, 60, 72, null],
                [null, null, 28, null, 49, null, 73, 78, 83],
            ],
        },
    },
    'Temp./ BP': {
        description: 'If smallest and highest number of ticket are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, null, null, 34, null, 54, 61, null, 86],
                [null, 17, null, null, 41, 56, null, 74, 88],
                [5, null, 26, null, 48, null, 66, 78, null],
            ],
        },
    },

    'Double Temp.': {
        description: 'If 2 smallest and 2 highest numbers of ticket are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, true],
                [true, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [null, 13, 27, null, 41, 52, null, 73, null],
                [2, null, null, 30, 44, null, 65, null, 89],
                [8, null, null, 35, 49, null, 67, 75, null],
            ],
        },
    },
    'House': {
        description: 'All the numbers on a ticket',
        ticketDetails: {
            marked: [
                [false, false, true, true, false, true, false, true, true],
                [true, false, true, false, true, false, true, true, false],
                [false, true, false, true, true, false, true, true, false],
            ],

            ticket: [
                [null, null, 23, 31, null, 53, null, 71, 85],
                [4, null, 25, null, 45, null, 62, 74, null],
                [null, 12, null, 36, 47, null, 63, 78, null],
            ],
        },
    },
    "I Love You 143": {
        description:
            "if 1st number of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [false, false, true, true, false, true, false, true, false],
                [true, false, true, false, false, true, false, false, false],
            ],

            ticket: [
                [null, 10, null, 32, 43, null, null, 71, 81],
                [null, null, 24, 37, null, 57, null, 79, 83],
                [8, null, 29, null, null, 59, 64, null, 90],
            ],
        },
    },

    "We Love You 243": {
        description:
            "if 1st and 2nd numbers of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, false, false, false],
                [true, false, false, true, false, true, true, false, false],
                [true, false, true, false, false, true, false, false, false],
            ],

            ticket: [
                [2, 19, null, 35, 47, null, null, 71, null],
                [6, null, null, 37, null, 55, 65, null, 86],
                [7, null, 29, null, null, 57, 68, null, 87],
            ],
        },
    },
    '124': {
        description:
            "if 1st number of top row, 1st and 2nd numbers of middle row and 1st, 2nd ,3rd and 4th numbers of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [true, true, false, false, true, true, false, false, false],
            ],

            ticket: [
                [2, 13, null, 35, null, 50, null, null, 81],
                [null, 14, 29, null, 41, null, 67, null, 89],
                [5, 18, null, null, 47, 53, null, 76, null],
            ],
        },
    },
    '421': {
        description:
            "if 1st, 2nd , 3rd and 4th  numbers of top row, 1st and 2nd numbers of middle row and 1st number of last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, false, true, true, false, true, false, false],
                [false, true, true, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 12, null, 31, 40, null, 63, 71, null],
                [null, 15, 29, null, 43, 53, null, 72, null],
                [3, 17, null, 38, null, 59, null, null, 85],
            ],
        },
    },
    '225': {
        description:
            "if 1st and 2nd numbers of the top row, 1st and 2nd numbers of the middle row and 1st, 2nd , 3rd, 4th and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, true, true, false, false, true, true, false, true],
            ],

            ticket: [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85],
            ],
        },
    },
    '123': {
        description:
            "if 1st number of top row, 1st and 2nd numbers of middle row and 1st, 2nd and 3rd numbers of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [true, false, false, true, false, false, false, false, false],
                [false, true, true, false, true, false, false, false, false],
            ],

            ticket: [
                [1, 10, null, 35, null, 55, 63, null, null],
                [7, null, null, 37, 40, null, 66, 76, null],
                [null, 12, 25, null, 48, null, null, 78, 83],
            ],
        },
    },
    '333': {
        description: "if 1st, 2nd and 3rd numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [false, true, true, false, true, false, false, false, false],
                [false, true, false, true, true, false, false, false, false],
                [true, false, false, true, false, true, false, false, false],
            ],

            ticket: [
                [null, 16, 23, null, 46, 50, null, 74, null],
                [null, 18, null, 33, 48, null, 67, null, 81],
                [8, null, null, 35, null, 58, null, 78, 85],
            ],
        },
    },
    "4 2 ka 1(Reverse)": {
        description:
            "if 2nd , 3rd ,4th and 5th numbers of the top row, 4th and 5th numbers of middle row and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [false, false, false, true, false, true, true, false, true],
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, 15, null, 34, null, 58, 60, null, 82],
                [5, 16, null, null, 40, null, 62, 73, null],
                [8, null, 22, 38, null, null, 67, null, 83],
            ],
        },
    },
    "333 (reverse)": {
        description: "if 3rd,4th and 5th numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, true, false, true],
                [false, false, false, false, true, false, true, true, false],
                [false, false, false, false, false, true, false, true, true],
            ],

            ticket: [
                [7, null, 23, 38, null, null, 65, null, 86],
                [null, 11, 28, null, 45, null, 66, 75, null],
                [null, 19, 29, null, null, 50, null, 78, 89],
            ],
        },
    },
    "3 2 ka 1(Reverse)": {
        description:
            "if 3rd,4th and 5th numbers of top row, 4th and 5th numbers of middle row and 5th number of last row marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, true, true],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, true, false, false],
            ],

            ticket: [
                [null, null, 28, null, 46, 50, null, 78, 81],
                [1, 11, null, null, null, 53, 60, null, 82],
                [2, 16, null, 35, null, 55, 63, null, null],
            ],
        },
    },
    '1 Pair (Row)': {
        description: 'If in any row, 1 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, true, true, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, null, 20, 35, null, 56, 64, null, 87],
                [3, 14, null, 38, null, null, 67, 78, null],
                [8, 18, null, null, 41, null, 68, 79, null],
            ],
        },
    },
    '2 Pair (Row)': {
        description: 'If in a ticket, 2 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, true, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, null, null, 37, 41, null, 68, 74, null],
                [null, 16, 27, null, 43, null, null, 75, 86],
                [null, 19, 29, null, 45, 52, null, null, 88],
            ],
        },
    },
    '3 Pair (Row)': {
        description: 'If in a ticket, 3 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, false, false, true, true],
            ],

            ticket: [
                [5, 11, null, null, 42, null, 62, 71, null],
                [null, 12, 24, null, null, 56, null, 76, 82],
                [null, null, 28, 34, null, 51, null, 77, 90],
            ],
        },
    },
    '4 Pair (Row)': {
        description: 'If in a ticket, 4 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, true],
                [false, true, true, false, false, false, true, true, false],
                [false, false, false, false, false, false, true, true, false],
            ],

            ticket: [
                [6, null, null, 34, null, 54, null, 71, 90],
                [null, 16, 21, null, 40, null, 60, 77, null],
                [null, 18, 26, null, 49, null, 62, 78, null],
            ],
        },
    },

    'All Pair (Row)': {
        description: 'If in a ticket, all pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, true, true, false, true, true, false, false, false],
                [false, false, false, false, false, true, true, false, false],
                [false, false, false, true, true, false, false, false, false],
            ],

            ticket: [
                [null, 13, 21, null, 42, 54, null, 74, null],
                [null, 19, null, 33, null, 57, 61, null, 81],
                [8, null, null, 37, 46, null, 69, null, 88],
            ],
        },
    },
    '1 Pair (Column)': {
        description:
            'If in any column, 1 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, null, 23, null, 45, null, 61, 79, null],
                [5, null, 24, 32, null, 50, 62, null, null],
                [null, 10, null, 35, null, 55, 66, null, 86],
            ],
        },
    },
    '2 Pair (Column)': {
        description:
            'If in any column, 2 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 12, 29, null, 47, null, null, 72, 81],
                [2, 16, null, 30, 49, null, 61, null, null],
                [6, 19, null, 34, null, 53, null, 78, null],
            ],
        },
    },
    '3 Pair (Column)': {
        description:
            'If in any column, 3 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, true, false, true, false, false, true],
                [false, false, false, false, false, true, false, false, true],
            ],

            ticket: [
                [null, 12, null, 30, 42, null, 68, 76, null],
                [5, null, 26, 33, null, 54, null, null, 81],
                [null, 18, null, 35, null, 55, null, 77, 83],
            ],
        },
    },

    '4 Pair (Column)': {
        description:
            'If in any column, 4 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, true, false, false, true],
                [false, false, true, false, false, true, false, true, true],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [null, 19, 20, null, null, 50, 60, null, 81],
                [null, null, 22, null, 41, 54, null, 71, 83],
                [9, null, 23, 39, null, null, 61, 79, null],
            ],
        },
    },
    'All Pair (Column)': {
        description:
            'If in any column, all pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, false, false, false],
                [true, false, true, true, false, false, true, false, false],
                [true, false, false, true, false, false, true, false, false],
            ],

            ticket: [
                [null, 10, 22, null, 48, null, null, 70, 88],
                [6, null, 24, 32, null, 54, 60, null, null],
                [9, null, 26, 38, null, null, 66, 77, null],
            ],
        },
    },
    'Breakfast': {
        description:
            'All the numbers of 1st, 2nd and 3rd vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 13, 20, null, null, 54, null, 71, 83],
                [3, null, null, 31, null, 56, 61, null, 90],
                [9, 14, null, null, 43, 57, null, 73, null],
            ],
        },
    },
    'Lunch': {
        description:
            'All the numbers of 4th, 5th and 6th vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, true, false, false, false],
                [false, false, false, false, false, true, false, false, false],
                [false, false, false, false, true, false, false, false, false],
            ],

            ticket: [
                [5, null, 28, 38, null, 53, 61, null, null],
                [7, 12, null, null, null, 56, null, 72, 87],
                [null, 18, 27, null, 44, null, 63, null, 88]
            ],
        },
    },
    'Dinner': {
        description:
            'All the numbers of 7th, 8th and 9th vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [null, 10, null, 33, 42, null, 62, null, 84],
                [null, 16, null, 38, 45, null, 64, 70, null],
                [9, null, 21, 39, null, 54, null, 77, null],
            ],
        },
    },

    'Day || Jawani': {
        description: 'When all the number from 1 to 45 are marked.',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [true, false, true, true, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 18, 20, null, 46, 51, null, 79, null],
                [2, null, 21, 38, null, null, 64, null, 82],
                [8, null, 29, null, 47, null, 65, null, 85]
            ],
        },
    },
    'Night || Budhapa': {
        description: 'When all the number from 46 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, true, true, false, true],
                [false, false, false, false, true, false, true, false, true],
            ],

            ticket: [
                [5, 10, null, 30, 41, null, null, 77, null],
                [null, null, 29, 33, null, 57, 67, null, 85],
                [9, null, null, 36, 47, null, 69, null, 89],
            ],
        },
    },
    'Center || Laddu': {
        description: 'When 3rd number of second line (row) is marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, true, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [7, 11, null, 36, 40, null, 66, null, null],
                [null, 15, 22, null, null, 50, null, 72, 81],
                [null, 17, 24, null, null, 55, null, 73, 87],
            ],
        },
    },
    'Bamboo': {
        description: 'When 3rd number of each line (row) is marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
            ],
        },
    },
    'First Half': {
        description: 'When 1st, 2nd and 3rd number of each line (row) is marked',
        ticketDetails: {
            marked: [
                [false, true, false, true, true, false, false, false, false],
                [true, false, true, false, true, false, false, false, false],
                [true, false, true, false, true, false, false, false, false],
            ],

            ticket: [
                [null, 11, null, 34, 41, null, 61, 75, null],
                [2, null, 22, null, 42, null, 66, 78, null],
                [9, null, 24, null, 46, 50, null, null, 83],
            ],
        },
    },
    'Second Half': {
        description: 'When 3rd,4th and 5th number of each line (row) is marked',
        ticketDetails: {
            marked: [

                [false, false, false, false, true, false, true, false, true],
                [false, false, false, false, true, false, false, true, true],
                [false, false, false, true, false, true, false, false, true],
            ],

            ticket: [

                [null, 16, null, 34, 43, null, 67, null, 81],
                [null, 19, 21, null, 44, null, null, 70, 84],
                [1, null, 23, 38, null, 57, null, null, 90],
            ],
        },
    },
    'Shehnai Bidaai': {
        description:
            'If first 3 numbers of Top row and last 3 numbers of last row are marked.',
        ticketDetails: {
            marked: [
                [true, false, true, false, true, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, true, false, true, true],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
            ],
        },
    },
    'Brahma': {
        description: 'When all the number from 1 to 30 are marked.',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [true, true, false, true, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 11, 24, null, 47, null, 61, 76, null],
                [8, 14, null, 30, null, 52, 65, null, null],
                [null, 15, null, 33, null, 58, null, 78, 84],
            ],
        },
    },
    'Vishnu': {
        description: 'When all the number from 31 to 60 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, true, false, false, false],
                [false, false, false, true, true, false, false, false, false],
                [false, false, false, true, false, true, false, false, false],
            ],

            ticket: [
                [4, 17, null, null, 40, 53, null, 78, null],
                [8, null, null, 35, 43, null, 62, null, 87],
                [null, null, 21, 38, null, 55, 67, null, 89],
            ],
        },
    },
    'Mahesh': {
        description: 'When all the number from 61 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, true, true],
            ],

            ticket: [
                [null, 12, 20, null, null, 51, 64, null, 81],
                [5, 17, null, 34, 45, null, null, null, 84],
                [8, null, 23, 38, null, null, null, 73, 86],
            ],
        },
    },
    'Railway Track': {
        description: 'When all the number of Top Line and Bottom Line are marked.',
        ticketDetails: {
            marked: [
                [false, true, false, true, true, false, true, false, true],
                [false, false, false, false, false, false, false, false, false],
                [true, false, true, false, false, true, false, true, true],
            ],

            ticket: [
                [null, 18, null, 32, 44, null, 62, null, 81],
                [3, null, 20, null, 49, null, null, 72, 82],
                [4, null, 21, null, null, 54, null, 74, 86],
            ],
        },
    },
    'Drum': {
        description: 'if 2nd,3rd and 4th number of all 3 rows are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, true, true, false, false, false],
                [false, true, false, true, false, false, true, false, false],
                [false, true, false, false, false, true, true, false, false],
            ],

            ticket: [
                [null, 10, 26, null, 41, 51, null, null, 85],
                [2, 13, null, 32, null, null, 61, 78, null],
                [8, 18, null, null, null, 55, 66, null, 87],
            ],
        },
    },
    'ZIP': {
        description:
            'if 1st and 2nd numbers of Top line + 3rd number of middle line + 4th and 5th numbers of last line are marked.',
        ticketDetails: {
            marked: [
                [true, false, true, false, false, false, false, false, false],
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, false, false, true, true, false],
            ],

            ticket: [
                [1, null, 20, null, null, 52, null, 73, 82],
                [5, 14, null, 36, null, null, null, 76, 87],
                [null, 16, null, 37, 41, null, 60, 77, null],
            ],
        },
    },
    'ZAP': {
        description:
            'if 4th and 5th numbers of Top line + 3rd number of middle line + 1st and 2nd numbers of last line are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, true, false, false],
                [false, false, false, false, true, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
            ],
            ticket: [
                [5, 12, null, 37, 42, null, 62, null, null],
                [7, null, 20, null, 47, null, 63, 74, null],
                [null, 13, 21, null, null, 55, null, 79, 81],
            ],
        },
    },


}
export default dividendDescription2;
