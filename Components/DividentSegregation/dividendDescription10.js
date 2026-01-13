const dividendDescription10 = {
    "First/Top Line": {
        description: 'All the Numbers of first/top row of a ticket.',
        ticketDetails: {
            marked: [
                [true, true, false, true, true, false, true, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [9, 15, null, 32, 42, null, 66, null, null],
                [null, 16, 24, null, 44, 50, null, null, 81],
                [null, 19, null, 36, null, 59, null, 70, 88],
            ],
        },
    },


    'Second/Middle Line': {
        description: 'All the Numbers of second/middle row of a ticket.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [true, false, true, true, false, true, true, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 16, null, null, 40, 50, null, 73, 83],
                [5, null, 25, 31, null, 54, 64, null, null],
                [6, null, null, 39, 46, null, 61, 79, null],
            ],
        },
    },

    'Third/Last Line': {
        description: 'All the Numbers of third/last row of a ticket. ',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, true, false, true, true, false, true, true],
            ],

            ticket: [
                [7, 16, null, 32, null, null, 63, null, 84],
                [null, 19, 25, null, 40, 51, null, null, 86],
                [null, null, 28, null, 46, 56, null, 70, 88],
            ],
        },
    },

    '4 Corners': {
        description: 'First and last numbers of top and and bottom rows',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, true],
            ],

            ticket: [
                [6, null, 27, 37, null, 51, null, 70, null],
                [8, null, 21, 37, null, 55, 63, null, 84],
                [null, 12, null, 38, 43, null, 69, null, 87],
            ],
        },
    },

    'Queen Corners': {
        description: 'when first number of each row is marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [3, 17, null, null, 46, 51, null, 73, null],
                [8, null, 29, 31, null, 53, 65, null, null],
                [null, 19, null, 37, 47, null, 66, null, 83],
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
                [5, null, null, null, 42, 58, null, 71, 80],
                [null, 13, null, 32, 44, null, 65, null, 88],
                [7, null, 26, 37, null, null, 62, 77, null],
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
                [1, 16, null, 35, null, null, null, 72, 80],
                [7, null, 20, null, 42, null, 62, 77, null],
                [null, 19, 26, null, null, 50, null, 78, 82],
            ],
        },
    },

    'Bulls Eyes': {
        description: 'if 2nd and 4th numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, true, false, false, false],
                [false, false, false, true, false, false, true, false, false],
                [false, false, true, false, false, false, true, false, false],
            ],

            ticket: [
                [null, 10, 22, null, 42, 52, null, 74, null],
                [4, null, null, 34, null, 54, 60, null, 83],
                [null, 13, 24, null, null, 55, 65, null, 89],
            ],
        },
    },
    'Twin Lines': {
        description: 'if 1st and 2nd numbers of each line are marked',
        ticketDetails: {
            marked: [
                [true, false, true, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, true, false, true, false, false, false, false, false],
            ],

            ticket: [
                [3, null, 26, 35, null, 50, 60, null, null],
                [null, 13, 28, null, 48, null, 63, 79, null],
                [null, 19, null, 37, null, 52, 66, null, 82],
            ],
        },
    },

    '6 Corners': {
        description: 'First and last numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, true, false],
                [true, false, false, false, false, false, false, false, true],
                [true, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, 13, 21, null, 41, null, 65, 71, null],
                [1, null, null, 37, null, 54, 66, null, 81],
                [3, null, 25, 39, null, 58, null, null, 90],
            ],
        },
    },

    '6 Corners and Center': {
        description: 'First and last number of each row is marked and 3rd number middle row is  marked.',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, true, false],
                [true, false, false, false, true, false, false, false, true],
                [true, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [1, 12, null, 33, null, 56, null, 79, null],
                [6, null, null, 35, 42, null, 62, null, 81],
                [9, null, 27, null, 43, 58, null, 73, 90],
            ],
        },
    },

    'Reverse Twin': {
        description: 'if 4th and 5th numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, true, true],
            ],

            ticket: [
                [3, 16, null, null, 44, null, 64, 73, null],
                [8, null, null, 32, null, 50, 66, null, 86],
                [null, null, 21, 38, null, 55, null, 74, 88],
            ],
        },
    },

    'Early 5/Jaldi 5': {
        description: 'When any 5 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, true, false, false, false, false, false],
                [false, true, false, false, false, false, true, false, false],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [3, 10, null, 30, 43, null, null, 71, null],
                [null, 14, 21, null, null, 50, 69, null, 83],
                [9, 15, null, 33, null, null, null, 76, 84],
            ],
        },
    },
    'Early 6/Jaldi 6': {
        description: 'When any 6 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, true, false, true],
                [false, true, false, false, true, false, false, false, true],
            ],

            ticket: [
                [7, 10, null, 34, null, null, 65, 74, null],
                [null, 13, 27, null, 41, null, 68, null, 86],
                [null, 17, 29, null, 43, 58, null, null, 88],
            ],
        },
    },

    'Early 7/Jaldi 7': {
        description: 'When any 7 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, true, true, false, false, false],
                [true, false, false, false, false, false, false, false, true],
                [false, false, false, false, true, false, false, true, false],
            ],

            ticket: [
                [5, 11, null, null, 47, 59, null, null, 83],
                [7, null, 24, 35, null, null, null, 73, 90],
                [null, 17, 27, null, 49, null, 69, 79, null],
            ],
        },
    },

    'Early 8/Jaldi 8': {
        description: 'When any 8 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, true, false, false],
                [false, false, true, true, false, false, true, false, true],
                [false, false, false, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 14, 20, null, 43, null, 64, null, 84],
                [5, null, 25, 37, null, null, 67, null, 87],
                [9, 19, null, 39, null, 59, null, 70, null],
            ],
        },
    },

    'Early 9/Jaldi 9': {
        description: 'When any 9 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, true, false, true, false],
                [true, false, false, true, false, false, true, false, false],
                [false, false, true, true, false, false, false, true, false],
            ],

            ticket: [
                [2, 19, null, null, 45, 55, null, 70, null],
                [5, null, null, 36, null, 57, 69, null, 85],
                [null, null, 24, 39, null, 59, null, 75, 86],
            ],
        },
    },
    'Early 10/Jaldi 10': {
        description: 'When any 10 numbers are marked',
        ticketDetails: {
            marked: [
                [true, true, false, true, false, false, false, true, false],
                [false, false, true, false, false, false, false, false, true],
                [true, false, true, false, false, false, true, false, true],
            ],

            ticket: [
                [2, 17, null, 30, 42, null, null, 75, null],
                [null, null, 26, 33, null, 56, null, 76, 86],
                [5, null, 27, null, 43, null, 69, null, 89],
            ],
        },
    },
    'Early 11/Jaldi 11': {
        description: 'When any 11 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, true, false, true, true, false, false, true],
                [false, false, false, false, true, false, false, true, true],
                [false, false, false, true, true, false, false, true, false],
            ],

            ticket: [
                [3, null, 29, null, 41, 56, null, null, 82],
                [null, 15, null, 33, 42, null, null, 70, 87],
                [null, 18, null, 38, 44, null, 62, 71, null],
            ],
        },
    },
    'Early 12/Jaldi 12': {
        description: 'When any 12 numbers are marked',
        ticketDetails: {
            marked: [
                [true, true, false, true, false, false, false, false, true],
                [true, false, true, false, true, false, false, false, true],
                [true, false, false, false, true, true, false, true, true],
            ],

            ticket: [
                [5, 17, null, 36, null, 52, null, 77, null],
                [7, null, 21, null, 42, null, 61, null, 80],
                [8, null, null, null, 44, 53, null, 78, 82],
            ],
        },
    },
    'Early 13/Jaldi 13': {
        description: 'When any 13 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, true, true, false, true, false],
                [true, false, false, true, false, false, true, false, true],
                [true, false, true, true, false, false, true, false, true],
            ],

            ticket: [
                [1, 19, null, null, 44, 54, null, 76, null],
                [2, null, 21, 30, null, null, 66, null, 83],
                [6, null, 24, 33, null, null, 68, null, 88],
            ],
        },
    },
    'Early 14/Jaldi 14': {
        description: 'When any 14 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, true, true, false, true, true, false, true],
                [true, true, false, false, true, false, true, true, false],
                [false, false, true, false, true, false, false, true, true],
            ],

            ticket: [
                [null, null, 21, 39, null, 54, 62, null, 80],
                [5, 11, null, null, 45, null, 63, 73, null],
                [9, null, 22, null, 46, null, null, 77, 89],
            ],
        },
    },
    'Hockey Stick': {
        description: 'if all numbers of ticket containing 7 are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, null, 23, null, 41, null, 61, 73, null],
                [null, 14, null, 36, null, 50, null, 78, 83],
                [null, 16, 28, null, null, 59, 65, null, 89],
            ],
        },
    },
    'Fat Lady': {
        description: 'if all numbers of ticket containing 8 are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, null, 22, 33, null, null, 61, 70, 81],
                [null, 16, 26, null, 42, null, null, 77, 85],
                [3, 19, null, null, 46, 52, null, 79, null],
            ],
        },
    },
    'Ugly Duckling': {
        description: 'if all numbers of ticket containing 2 are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, false, false, false],
                [false, false, true, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, null, 21, null, 40, 56, null, 70, 85],
                [1, null, 25, 35, null, null, null, 77, 87],
                [9, 17, null, null, null, 59, 65, null, 88],
            ],
        },
    },
    'Pyramid': {
        description:
            'if 3rd number of top row, 2nd and 4th numbers of middle row and 1st, 3rd and 5th number of last row are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, false, false],
                [false, false, true, false, false, false, false, true, false],
                [true, false, false, false, false, true, false, false, true],
            ],

            ticket: [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90],
            ],
        },
    },
    'Reverse Pyramid': {
        description:
            'if 1st, 3rd and 5th number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, true, false, false, true],
                [false, false, true, false, false, false, false, true, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [6, null, null, null, 45, 51, null, 77, 90],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [4, null, null, 32, null, 50, 69, null, 83],
            ],
        },
    },
    'Circle': {
        description:
            'if 3rd number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, true, false, false, false, true, false, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [1, null, 25, null, 49, null, 66, null, 82],
                [3, 13, null, 32, null, 58, null, 75, null],
                [null, 19, null, 37, null, 59, 67, null, 89],
            ],
        },
    },
    'All Even': {
        description: 'If all even numbers of ticket are marked.',
        ticketDetails: {
            marked: [
                [true, false, false, false, true, false, true, false, false],
                [false, true, false, true, false, false, false, false, false],
                [true, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [4, null, 25, null, 46, null, 60, 75, null],
                [null, 16, null, 30, null, 57, 69, null, 81],
                [8, null, null, null, 47, 58, null, 79, 87],
            ],
        },
    },

    'All Odd': {
        description: 'If all odd numbers of ticket are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, false],
                [true, false, false, false, false, false, false, false, false],
                [false, false, false, true, false, false, false, true, false],
            ],

            ticket: [
                [6, 10, null, null, null, 50, 61, null, 80],
                [7, null, 27, null, 42, null, 64, 72, null],
                [8, null, null, 35, 48, null, null, 73, 86],
            ],
        },
    },
    'Plus': {
        description:
            'If 3rd number of all 3 rows and 2nd and 4th numbers of middle row are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, true, false, true, false, true, false, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
            ],
        },
    },

    'Temp./ BP': {
        description: 'If smallest and highest number of ticket are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [1, null, null, null, 45, 54, null, 77, 81],
                [4, 14, null, 30, null, 55, 61, null, null],
                [8, 19, null, 34, 47, null, null, null, 89],
            ],
        },
    },
    'Double Temp.': {
        description: 'If 2 smallest and 2 highest numbers of ticket are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, true],
                [false, true, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, null, 20, null, 41, 54, null, 71, 83],
                [7, null, 21, 31, null, null, 60, null, 86],
                [null, 18, null, 36, 45, null, 62, null, 89],
            ],
        },
    },

    'House': {
        description: 'All the numbers on a ticket',
        ticketDetails: {
            marked: [
                [false, true, false, true, false, true, true, false, true],
                [false, true, true, false, true, true, false, false, true],
                [true, false, true, false, true, true, false, true, false],
            ],

            ticket: [
                [null, 11, null, 33, null, 51, 68, null, 83],
                [null, 12, 21, null, 42, 52, null, null, 90],
                [1, null, 26, null, 46, 55, null, 71, null],
            ],
        },
    },
    "I Love You 143": {
        description:
            "if 1st number of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, false, true, false, true, true, false, true, false],
                [false, false, true, true, true, false, false, false, false],
            ],

            ticket: [
                [7, 17, null, null, 43, null, 67, null, 84],
                [null, null, 21, null, 45, 53, null, 75, 86],
                [null, null, 25, 31, 49, null, null, 76, 88],
            ],
        },
    },
    "We Love You 243": {
        description:
            "if 1st and 2nd numbers of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, true, false, false, false, false, false, false],
                [true, true, false, true, false, true, false, false, false],
                [true, false, false, false, true, true, false, false, false],
            ],

            ticket: [
                [1, null, 29, 34, null, null, 67, null, 82],
                [3, 17, null, 39, null, 50, null, 71, null],
                [5, null, null, null, 45, 56, null, 78, 86],
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
                [false, true, true, false, false, true, true, false, false],
            ],

            ticket: [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85],
            ],
        },
    },
    '421': {
        description:
            "if 1st, 2nd , 3rd and 4th  numbers of top row, 1st and 2nd numbers of middle row and 1st number of last row are marked.",
        ticketDetails: {
            marked: [
                [true, true, false, true, true, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85],
            ],
        },
    },

    '225': {
        description:
            "if 1st and 2nd numbers of the top row, 1st and 2nd numbers of the middle row and 1st, 2nd , 3rd, 4th and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [false, false, true, true, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [true, true, false, false, true, true, false, false, true],
            ],

            ticket: [
                [null, null, 24, 33, null, 57, null, 79, 81],
                [5, null, 27, null, 41, null, 68, null, 84],
                [7, 15, null, null, 44, 58, null, null, 86],
            ],
        },
    },

    '123': {
        description:
            "if 1st number of top row, 1st and 2nd numbers of middle row and 1st, 2nd and 3rd numbers of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, true, true, false, false, true, false, false, false],
            ],

            ticket: [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85],
            ],
        },
    },
    '333': {
        description: "if 1st, 2nd and 3rd numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [false, true, false, true, true, false, false, false, false],
                [true, false, true, false, false, true, false, false, false],
                [true, false, false, true, false, true, false, false, false],
            ],

            ticket: [
                [null, 12, null, 30, 42, null, 62, 73, null],
                [2, null, 27, null, null, 51, null, 75, 81],
                [6, null, null, 33, null, 53, 69, null, 83],
            ],
        },
    },

    "4 2 ka 1(Reverse)": {
        description:
            "if 2nd , 3rd ,4th and 5th numbers of the top row, 4th and 5th numbers of middle row and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, false, true, true, false, false, true, false],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85],
            ],
        },
    },
    "333 (reverse)": {
        description: "if 3rd,4th and 5th numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [false, false, false, true, true, false, false, true, false],
                [false, false, false, false, false, true, true, false, true],
                [false, false, false, false, false, true, true, false, true],
            ],

            ticket: [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85],
            ],
        },
    },
    "3 2 ka 1(Reverse)": {
        description:
            "if 3rd,4th and 5th numbers of top row, 4th and 5th numbers of middle row and 5th number of last row marked",
        ticketDetails: {
            marked: [
                [false, false, false, true, true, false, false, true, false],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85],
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
                [null, null, 24, 30, null, 59, null, 74, 81],
                [3, 11, null, 35, 47, null, 60, null, null],
                [3, null, 28, null, 43, null, null, 74, 83],
            ],
        },
    },
    '2 Pair (Row)': {
        description: 'If in a ticket, 2 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, true, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90],
            ],
        },
    },
    '3 Pair (Row)': {
        description: 'If in a ticket, 3 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, true],
                [true, true, false, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [1, null, 23, null, null, 54, null, 73, 80],
                [6, 13, null, 33, null, null, 60, null, 81],
                [7, 19, null, 34, 49, null, 67, null, null],
            ],
        },
    },
    '4 Pair (Row)': {
        description: 'If in a ticket, 4 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, true, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, false, false, false, true, true, false, true, true],
            ],

            ticket: [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90],
            ],
        },
    },
    'All Pair (Row)': {
        description: 'If in a ticket, all pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, true, true, false, false, false, false, false],
                [false, false, false, true, true, false, false, true, true],
                [false, true, true, false, true, true, false, false, false],
            ],

            ticket: [
                [5, null, 22, 31, null, null, 63, null, 82],
                [null, 14, null, 38, 41, null, null, 74, 87],
                [null, 15, 26, null, 45, 57, null, null, 89],
            ],
        },
    },
    '1 Pair (Column)': {
        description:
            'If in any column, 1 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, 12, null, 35, 40, null, 60, 78, null],
                [null, null, 22, null, 42, 57, null, 79, 80],
                [4, null, 26, null, 49, 59, null, null, 89],
            ],
        },
    },
    '2 Pair (Column)': {
        description:
            'If in any column, 2 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [false, true, false, false, false, true, false, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [1, 12, null, null, 41, null, 60, 71, null],
                [null, 15, null, 31, null, 54, 69, null, 83],
                [null, 16, 28, null, 42, 58, null, null, 90],
            ],
        },
    },
    '3 Pair (Column)': {
        description:
            'If in any column, 3 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, true, false, false, true, true],
                [false, false, false, false, true, false, false, true, true],
            ],

            ticket: [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90],
            ],
        },
    },
    '4 Pair (Column)': {
        description:
            'If in any column, 4 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, false],
                [false, true, true, false, false, true, true, false, false],
                [false, true, true, false, false, true, false, false, false],
            ],

            ticket: [
                [1, null, null, 38, 41, null, 60, 71, null],
                [null, 14, 25, null, null, 52, 65, null, 82],
                [null, 17, 26, null, null, 54, null, 73, 86],
            ],
        },
    },
    'All Pair (Column)': {
        description:
            'If in any column, all pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [true, true, false, true, false, true, false, false, true],
                [true, false, false, true, false, true, false, false, true],
            ],

            ticket: [
                [3, 13, null, null, 41, null, 63, 74, null],
                [8, 16, null, 32, null, 51, null, null, 81],
                [9, null, 21, 36, null, 57, null, null, 86],
            ],
        },
    },
    'Breakfast': {
        description:
            'All the numbers of 1st, 2nd and 3rd vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, null, 27, null, 41, 50, null, 73, 80],
                [1, 13, null, 34, 45, null, 64, null, null],
                [3, null, null, 37, 47, null, 67, null, 88]
            ],
        },
    },
    'Lunch': {
        description:
            'All the numbers of 4th, 5th and 6th vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, true, false, true, false, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
            ],
        },
    },
    'Dinner': {
        description:
            'All the numbers of 7th, 8th and 9th vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, true, false, false],
            ],

            ticket: [
                [5, 12, null, null, 47, null, 63, 71, null],
                [null, null, 20, 34, null, 52, 65, null, 85],
                [8, null, 23, 36, null, 53, 67, null, null]
            ],
        },
    },

    'Day || Jawani': {
        description: 'When all the number from 1 to 45 are marked.',
        ticketDetails: {
            marked: [
                [true, false, true, false, true, false, false, false, false],
                [true, true, false, true, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
            ],
        },
    },

    'Night || Budhapa': {
        description: 'When all the number from 46 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, true, false],
                [false, false, false, false, false, true, true, false, true],
                [false, false, false, false, true, false, true, true, false],
            ],

            ticket: [
                [7, null, 27, 32, null, 51, null, 72, null],
                [null, 10, 28, null, null, 54, 60, null, 83],
                [null, 19, null, 35, 47, null, 63, 79, null]
            ],
        },
    },
    'Center || Laddu': {
        description: 'When 3rd number of second line (row) is marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
            ],
        },
    },
    'Bamboo': {
        description: 'When 3rd number of each line (row) is marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, false, false, true, false, false, false],
                [false, false, false, false, true, false, false, false, false],
            ],

            ticket: [
                [1, null, 26, null, 47, 53, null, null, 80],
                [2, null, null, 30, null, 54, 63, null, 88],
                [5, 17, null, null, 48, null, 68, 73, null],
            ],
        },
    },

    'First Half': {
        description: 'When 1st, 2nd and 3rd number of each line (row) is marked',
        ticketDetails: {
            marked: [
                [true, false, true, false, true, false, false, false, false],
                [true, true, false, true, false, false, false, false, false],
                [false, true, true, false, false, true, false, false, false],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
            ],
        },
    },
    'Second Half': {
        description: 'When 3rd,4th and 5th number of each line (row) is marked',
        ticketDetails: {
            marked: [

                [false, false, false, false, false, true, true, false, true],
                [false, false, false, false, true, false, true, true, false],
                [false, false, false, false, true, true, false, false, true],
            ],

            ticket: [
                [null, null, 23, 39, null, 51, 61, null, 81],
                [null, 11, 26, null, 43, null, 66, 73, null],
                [2, 14, null, null, 46, 52, null, null, 82]


            ],
        },
    },

    'Shehnai Bidaai': {
        description:
            'If first 3 numbers of Top row and last 3 numbers of last row are marked.',
        ticketDetails: {
            marked: [
                [true, false, true, true, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, true, false, true, true, false],
            ],

            ticket: [
                [2, null, 21, 37, null, null, null, 71, 87],
                [6, null, 28, null, 44, 53, null, null, 90],
                [null, 15, null, 38, 47, null, 62, 72, null],
            ],
        },
    },


    'Brahma': {
        description: 'When all the number from 1 to 30 are marked.',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 15, 24, null, 40, null, 60, null, 81],
                [null, 19, null, 32, null, 57, null, 73, 84],
                [9, null, 29, 34, null, 58, null, 74, null],
            ],
        },
    },

    'Vishnu': {
        description: 'When all the number from 31 to 60 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, true, true, false, false, false, false],
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, true, true, false, false, false],
            ],

            ticket: [
                [2, 16, null, 37, 42, null, null, null, 85],
                [3, null, 25, 39, null, null, 64, 71, null],
                [4, null, 27, null, 48, 53, null, 78, null],
            ],
        },
    },

    'Mahesh': {
        description: 'When all the number from 61 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, true, true, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [9, 19, null, 21, 47, null, null, 71, null],
                [null, null, 23, null, null, 51, 63, 77, 83],
                [null, null, 24, 39, 49, 53, null, null, 86],
            ],
        },
    },
    'Railway Track': {
        description: 'When all the number of Top Line and Bottom Line are marked.',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, true, true, false, true],
                [false, false, false, false, false, false, false, false, false],
                [true, false, true, true, false, false, true, true, false],
            ],

            ticket: [
                [null, 13, 21, null, null, 55, 63, null, 88],
                [null, 17, 27, null, 43, 59, null, 77, null],
                [2, null, 29, 30, null, null, 66, 79, null],
            ],
        },
    },
    'Drum': {
        description: 'if 2nd,3rd and 4th number of all 3 rows are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, true, false, true, false, false],
                [false, true, false, true, true, false, false, false, false],
                [false, true, false, true, false, true, false, false, false],
            ],
            ticket: [
                [null, 15, 23, null, 41, null, 62, 70, null],
                [1, 17, null, 37, 44, null, null, null, 87],
                [3, 19, null, 39, null, 51, null, 76, null],
            ],
        },
    },
    'ZIP': {
        description:
            'if 1st and 2nd numbers of Top line + 3rd number of middle line + 4th and 5th numbers of last line are marked.',
        ticketDetails: {
            marked: [
                [false, false, true, true, false, false, false, false, false],
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, false, true, false, false, true],
            ],

            ticket: [
                [null, null, 21, 31, 42, 51, null, 71, null],
                [1, null, 24, 30, null, 56, 65, null, null],
                [2, null, 25, null, 46, 59, null, null, 90],
            ],
        },
    },

    'ZAP': {
        description:
            'if 4th and 5th numbers of Top line + 3rd number of middle line + 1st and 2nd numbers of last line are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, true, false, false, false],
                [true, false, true, false, false, false, false, false, false],
            ],
            ticket: [
                [null, 12, 22, null, 43, null, 63, 79, null],
                [4, 13, null, null, null, 51, 67, null, 86],
                [6, null, 24, 38, null, 57, 69, null, null],
            ],
        },
    },
}
export default dividendDescription10;
