const dividendDescription9 = {


    "First/Top Line": {
        description: 'All the Numbers of first/top row of a ticket.',
        ticketDetails: {
            marked: [
                [true, false, true, true, false, false, true, false, true],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [1, null, 26, 30, null, null, 61, null, 81],
                [null, 12, null, null, 47, 51, null, 76, 82],
                [null, 16, null, 39, 49, null, 63, null, 87],
            ],
        },
    },
    'Second/Middle Line': {
        description: 'All the Numbers of second/middle row of a ticket.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [true, true, false, false, true, true, false, true, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, null, 22, 32, null, 56, null, 74, 87],
                [2, 16, null, null, 41, 57, null, 75, null],
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
                [true, false, false, true, true, false, false, true, true],
            ],

            ticket: [
                [7, 16, null, 32, null, null, 63, null, 84],
                [null, 14, 25, null, 43, null, 63, null, 88],
                [6, null, null, 32, 44, null, null, 79, 89],
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
                [1, 16, null, 35, null, null, null, 72, 80],
                [7, null, 20, null, 42, null, 62, 77, null],
                [null, 19, 26, null, null, 50, null, 78, 82],
            ],
        },
    },
    'Queen Corners': {
        description: 'when first number of each row is marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [7, null, 24, 31, null, 51, null, null, 83],
                [null, 14, null, 33, 41, null, 67, 73, null],
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
                [5, null, null, null, 42, 58, null, 71, 83],
                [null, 13, null, 32, 44, null, 65, null, 88],
                [6, null, 25, 36, null, null, 69, 74, null],
            ],
        },
    },


    '4 Corners and Center': {
        description: '',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, true, false],
                [false, false, false, true, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, true],
            ],

            ticket: [
                [6, null, 27, 37, null, 51, null, 70, null],
                [8, null, 21, 37, null, 55, 63, null, 84],
                [null, 12, null, 38, 43, null, 69, null, 87],
            ],
        },
    },


    'Bulls Eyes': {
        description: 'if 2nd and 4th numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, true, false, false],
                [false, false, false, false, true, false, false, true, false],
                [false, false, true, false, false, false, true, false, false],
            ],

            ticket: [
                [4, null, null, 35, 40, null, 63, null, 80],
                [null, null, 21, null, 45, 53, 60, 70, null],
                [null, 11, 23, null, 46, null, 66, 79, null],
            ],
        },
    },

    'Twin Lines': {
        description: 'if 1st and 2nd numbers of each line are marked',
        ticketDetails: {
            marked: [
                [true, false, true, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
            ],

            ticket: [
                [1, null, 25, 39, null, null, 64, 77, null],
                [5, 15, null, null, null, 56, 68, null, 83],
                [null, 18, 26, null, 43, 57, null, null, 86],
            ],
        },
    },


    '6 Corners': {
        description: 'First and last numbers of each line are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, true],
                [true, false, false, false, false, false, false, true, false],
                [true, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [1, 11, null, null, null, 55, 65, null, 89],
                [2, 16, null, 36, null, null, 68, 75, null],
                [9, null, 27, null, 44, 57, null, 76, null],
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
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, true, false, true, false],
                [false, false, false, false, false, true, false, true, false],
            ],

            ticket: [
                [6, null, null, 30, null, 52, 69, null, 87],
                [null, 16, 22, null, 41, 55, null, 72, null],
                [null, 17, 28, null, 49, 57, null, 74, null],
            ],
        },
    },
    'Early 5/Jaldi 5': {
        description: 'When any 5 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, true, false, false, false, false, false, true, false],
                [true, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [null, 12, 28, null, 42, 57, null, null, 80],
                [5, 15, null, 38, null, null, 67, 70, null],
                [7, 17, null, null, 48, null, null, 73, null],
            ],
        },
    },

    'Early 6/Jaldi 6': {
        description: 'When any 6 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, false, true, false],
                [true, false, false, false, false, false, true, false, false],
                [false, false, false, true, true, false, false, false, false],
            ],

            ticket: [
                [null, 12, 26, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87],
            ],
        },
    },
    'Early 7/Jaldi 7': {
        description: 'When any 7 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [false, true, false, true, true, false, false, false, false],
                [true, false, true, false, true, false, false, false, false],
            ],

            ticket: [
                [null, 15, 21, null, 41, 54, null, 71, null],
                [1, 16, null, 37, 43, null, null, null, 81],
                [4, null, 28, null, 44, null, 64, null, 83],
            ],
        },
    },

    'Early 8/Jaldi 8': {
        description: 'When any 8 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, true, true, false],
                [false, false, false, true, false, true, false, false, true],
                [false, false, false, true, false, false, false, false, true],
            ],

            ticket: [
                [null, 12, 26, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87],
            ],
        },
    },
    'Early 9/Jaldi 9': {
        description: 'When any 9 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, true, false, false, true, false, false],
                [false, false, false, false, false, false, false, true, true],
                [true, false, true, true, false, false, false, false, true],
            ],

            ticket: [
                [null, 19, null, 32, 42, null, 69, 70, null],
                [null, null, 24, null, 44, 57, null, 77, 83],
                [4, null, 28, 33, null, null, null, 79, 89],
            ],
        },
    },

    'Early 10/Jaldi 10': {
        description: 'When any 10 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, true, true, false, true],
                [false, true, false, false, false, false, false, false, true],
                [false, true, true, false, false, true, false, false, false],
            ],

            ticket: [
                [6, null, null, 37, null, 50, 69, null, 83],
                [null, 11, 20, null, 45, 53, null, null, 90],
                [null, 14, 26, null, 46, 54, null, 78, null],
            ],
        },
    },
    'Early 11/Jaldi 11': {
        description: 'When any 11 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, true, false, false, true, false],
                [false, false, true, false, false, false, true, false, true],
                [true, false, false, false, true, true, false, true, true],
            ],

            ticket: [
                [1, 12, null, 35, 43, null, null, 76, null],
                [2, null, 26, null, null, 53, 61, null, 83],
                [3, null, null, null, 49, 54, null, 78, 87],
            ],
        },
    },
    'Early 12/Jaldi 12': {
        description: 'When any 12 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, false, true, false, true],
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

    'Early 13/Jaldi 13': {
        description: 'When any 13 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, true, false, true, true, false, true, false],
                [false, true, true, false, true, true, false, true, false],
                [false, false, false, false, true, false, true, false, true],
            ],

            ticket: [
                [6, null, 21, null, 40, 53, null, 72, null],
                [null, 12, 25, null, 45, 55, null, 78, null],
                [null, 17, null, 34, 47, null, 66, null, 90],
            ],
        },
    },
    'Early 14/Jaldi 14': {
        description: 'When any 14 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, true, true, false, true, true, false, true],
                [true, true, false, false, false, false, true, true, false],
                [true, false, true, false, true, false, false, true, true],
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
                [false, false, false, false, false, true, false, false, false],
                [true, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 11, 20, null, 43, null, 65, 72, null],
                [4, null, 24, 33, null, 57, null, null, 86],
                [7, null, 28, 34, null, 59, null, null, 89],
            ],
        },
    },
    'Fat Lady': {
        description: 'if all numbers of ticket containing 8 are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, false],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, 16, null, 32, null, 53, 68, null, null],
                [3, null, 22, 33, null, null, 69, null, 84],
                [null, 17, 27, null, 43, 56, null, 79, null],
            ],
        },
    },
    'Ugly Duckling': {
        description: 'if all numbers of ticket containing 2 are marked',
        ticketDetails: {
            marked: [
                [false, false, true, true, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [4, null, 27, 32, null, 51, 69, null, null],
                [9, 18, null, null, 41, 56, null, null, 87],
                [null, 19, null, null, 49, 57, null, 72, 89],
            ],
        },
    },
    'Pyramid': {
        description:
            'if 3rd number of top row, 2nd and 4th numbers of middle row and 1st, 3rd and 5th number of last row are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, false, false],
                [false, false, false, true, false, false, true, false, false],
                [true, false, false, false, true, false, false, true, false],
            ],

            ticket: [
                [null, 11, 20, null, null, 58, null, 71, 84],
                [null, 18, null, 33, 42, null, 61, null, 85],
                [3, null, null, 37, 49, null, 63, 72, null],
            ],
        },
    },

    'Reverse Pyramid': {
        description:
            'if 1st, 3rd and 5th number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, true, false, false, true],
                [false, false, false, false, true, false, false, true, false],
                [false, false, false, true, false, true, false, false, false],
            ],

            ticket: [
                [1, null, 25, null, null, 50, 61, null, 82],
                [null, 13, null, null, 40, 52, null, 74, 90],
                [9, 16, null, 31, null, 54, null, 75, null],
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
                [6, null, 25, null, 47, null, 66, null, 80],
                [9, 16, null, 31, null, 55, null, 74, null],
                [null, 18, null, 37, null, 56, 67, null, 83],
            ],
        },
    },
    'All Even': {
        description: 'If all even numbers of ticket are marked.',
        ticketDetails: {
            marked: [
                [true, false, false, false, true, false, true, true, false],
                [false, true, true, false, false, true, false, false, false],
                [true, false, false, false, false, false, true, false, true],
            ],

            ticket: [
                [1, null, null, 33, 44, null, 61, 70, null],
                [null, 10, 20, null, 49, 58, null, null, 85],
                [8, 19, null, null, null, 59, 62, null, 90],
            ],
        },
    },
    'All Odd': {
        description: 'If all odd numbers of ticket are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, true],
                [false, false, true, false, false, false, false, true, false],
                [true, true, false, false, false, false, false, true, false],
            ],

            ticket: [
                [2, null, 22, 33, null, null, 62, null, 81],
                [null, 14, 23, null, 44, null, null, 71, 86],
                [7, 15, null, null, null, 50, null, 73, 88],
            ],
        },
    },
    'Plus': {
        description:
            'If 3rd number of all 3 rows and 2nd and 4th numbers of middle row are marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, false],
                [false, false, true, false, false, true, false, true, false],
                [false, false, false, false, true, false, false, false, false],
            ],

            ticket: [
                [4, null, 24, 35, null, 53, 61, null, null],
                [null, 14, 25, null, null, 56, null, 72, 85],
                [null, 18, null, 36, 44, null, 67, 79, null],
            ],
        },
    },

    'Temp./ BP': {
        description: 'If smallest and highest number of ticket are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, 12, 25, null, 44, null, 61, 71, null],
                [1, null, 27, 32, null, 57, null, 72, null],
                [null, 13, null, 34, null, 59, 62, null, 81],
            ],
        },
    },
    'Double Temp.': {
        description: 'If 2 smallest and 2 highest numbers of ticket are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, true],
                [true, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, 14, null, 35, 43, null, null, 77, 87],
                [2, 17, null, 39, null, null, 68, 79, null],
                [3, null, 22, null, 45, 52, null, null, 88],
            ],
        },
    },
    'House': {
        description: 'All the numbers on a ticket',
        ticketDetails: {
            marked: [
                [false, true, true, false, true, false, true, false, true],
                [true, false, true, true, false, true, true, false, false],
                [true, true, false, true, false, false, true, true, false],
            ],

            ticket: [
                [null, 15, 26, null, 45, null, 64, null, 81],
                [2, null, 28, 30, null, 58, 65, null, null],
                [5, 17, null, 37, null, null, 67, 78, null],
            ],
        },
    },
    "I Love You 143": {
        description:
            "if 1st number of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [true, true, false, false, true, true, false, false, false],
                [true, false, true, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 13, 23, null, null, 50, null, 74, 82],
                [6, 17, null, null, 46, 52, null, null, 83],
                [7, null, 26, 32, null, 53, 65, null, null],
            ],
        },
    },
    "We Love You 243": {
        description:
            "if 1st and 2nd numbers of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, false, false, false],
                [false, true, true, false, false, true, true, false, false],
                [false, true, true, false, false, true, false, false, false],
            ],

            ticket: [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85],
            ],
        },
    },

    '124': {
        description:
            "if 1st number of top row, 1st and 2nd numbers of middle row and 1st, 2nd ,3rd and 4th numbers of last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
                [false, true, false, true, true, false, false, true, false],
            ],

            ticket: [
                [null, 12, null, null, 44, 58, null, 71, 82],
                [9, null, 28, null, null, 59, 67, null, 85],
                [null, 19, null, 36, 48, null, null, 78, 89],
            ],
        },
    },
    '421': {
        description:
            "if 1st, 2nd , 3rd and 4th  numbers of top row, 1st and 2nd numbers of middle row and 1st number of last row are marked.",
        ticketDetails: {
            marked: [
                [true, true, false, false, true, false, true, false, false],
                [false, false, true, true, false, false, false, false, false],
                [false, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [5, 13, null, null, 40, null, 60, 72, null],
                [null, null, 24, 31, null, 50, null, 74, 83],
                [null, null, 25, null, 46, 59, null, 79, 85],
            ],
        },
    },
    '225': {
        description:
            "if 1st and 2nd numbers of the top row, 1st and 2nd numbers of the middle row and 1st, 2nd , 3rd, 4th and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [false, false, true, true, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
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
                [false, true, false, true, true, false, false, false, false],
            ],

            ticket: [
                [4, null, 21, 36, null, 51, null, 72, null],
                [null, 10, 29, null, 42, 56, null, null, 85],
                [null, 14, null, 39, 48, null, 69, 79, null],
            ],
        },
    },
    '333': {
        description: "if 1st, 2nd and 3rd numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [false, true, false, true, false, true, false, false, false],
                [true, true, false, false, true, false, false, false, false],
                [true, false, true, false, true, false, false, false, false],
            ],

            ticket: [
                [null, 14, null, 30, null, 57, null, 76, 85],
                [3, 15, null, null, 43, null, 63, 77, null],
                [5, null, 21, null, 46, null, 69, 79, null],
            ],
        },
    },
    "4 2 ka 1(Reverse)": {
        description:
            "if 2nd , 3rd ,4th and 5th numbers of the top row, 4th and 5th numbers of middle row and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [false, false, false, true, true, false, true, true, false],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [1, null, null, 35, 42, null, 61, 70, null],
                [null, 16, 26, null, 44, null, 63, null, 81],
                [7, 18, null, null, 45, 53, null, null, 87],
            ],
        },
    },
    "333 (reverse)": {
        description: "if 3rd,4th and 5th numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, true, false, true],
                [false, false, false, true, false, true, false, false, true],
                [false, false, false, true, true, false, false, true, false],
            ],

            ticket: [
                [null, 10, 25, null, null, 53, 62, null, 80],
                [4, null, 26, 36, null, 58, null, null, 89],
                [7, 13, null, 37, 44, null, null, 75, null],
            ],
        },
    },
    "3 2 ka 1(Reverse)": {
        description:
            "if 3rd,4th and 5th numbers of top row, 4th and 5th numbers of middle row and 5th number of last row marked",
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, true, true],
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [5, 13, null, 32, null, null, null, 73, 81],
                [null, null, 21, null, 42, 53, null, 79, 84],
                [null, null, 22, 39, null, 56, 60, null, 90],
            ],
        },
    },

    '1 Pair (Row)': {
        description: 'If in any row, 1 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [1, 13, null, 37, null, 54, null, 71, null],
                [null, 14, 26, null, null, 57, 65, null, 82],
                [3, null, 28, null, 43, null, null, 74, 83],
            ],
        },
    },
    '2 Pair (Row)': {
        description: 'If in a ticket, 2 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, true, false, true, true],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 10, null, null, 44, 55, null, 73, 87],
                [null, 17, 24, null, 45, null, 62, null, 90],
                [2, null, null, 32, 48, null, 63, 74, null],
            ],
        },
    },
    '3 Pair (Row)': {
        description: 'If in a ticket, 3 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, true, true, false, true, true, false, false, false],
                [false, false, true, true, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 18, 24, null, 48, 50, null, 74, null],
                [null, null, 28, 32, null, 52, null, 78, 81],
                [5, null, null, 33, null, 59, 64, null, 90],
            ],
        },
    },
    '4 Pair (Row)': {
        description: 'If in a ticket, 4 pair of 2 numbers together are marked',
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
    'All Pair (Row)': {
        description: 'If in a ticket, all pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, true, true, false, true, true, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, false, false, false, true, true, false, true, true],
            ],

            ticket: [
                [5, null, 33, 40, null, 60, 77, null, null],
                [null, 17, 22, null, 41, null, 69, null, 86],
                [null, 18, null, null, 49, 50, null, 78, 87],
            ],
        },
    },
    '1 Pair (Column)': {
        description:
            'If in any column, 1 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, false, true, false, false, false, false],
            ],

            ticket: [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90],
            ],
        },
    },

    '2 Pair (Column)': {
        description:
            'If in any column, 2 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, null, 24, null, 44, 56, null, 73, null],
                [null, 11, 29, null, null, 57, null, 79, 81],
                [null, 13, null, 36, null, 59, 62, null, 86],
            ],
        },
    },

    '3 Pair (Column)': {
        description:
            'If in any column, 3 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [true, false, false, true, false, true, false, false, false],
                [false, false, false, true, false, true, false, false, false],
            ],

            ticket: [
                [1, null, 25, null, 45, null, 66, 70, null],
                [7, 18, null, 31, null, 52, null, 76, null],
                [8, null, null, 33, null, 53, 68, null, 83],
            ],
        },
    },

    '4 Pair (Column)': {
        description:
            'If in any column, 4 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, false, false, false, false],
                [true, false, false, true, true, false, false, true, false],
                [false, false, false, false, true, false, false, true, false],
            ],

            ticket: [
                [3, 17, null, 37, null, 50, 61, null, null],
                [6, null, null, 38, 41, null, null, 77, 81],
                [null, null, 29, null, 47, 59, null, 79, 88],
            ],
        },
    },
    'All Pair (Column)': {
        description:
            'If in any column, all pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, true, false, false, false, false],
                [false, true, true, false, true, false, false, true, false],
                [false, false, true, false, false, false, false, true, false],
            ],

            ticket: [
                [2, 13, null, 30, 46, null, null, null, 84],
                [null, 14, 22, null, 47, null, 60, 70, null],
                [null, 16, 27, null, null, 57, null, 78, 86],
            ],
        },
    },
    'Breakfast': {
        description:
            'All the numbers of 1st, 2nd and 3rd vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
                [false, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [4, 19, null, 31, 43, null, null, null, 80],
                [9, null, null, 35, 44, null, 65, 71, null],
                [null, null, 24, null, 47, 50, null, 77, 81]
            ],
        },
    },

    'Lunch': {
        description:
            'All the numbers of 4th, 5th and 6th vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, true, true, false, false, false, false],
                [false, false, false, true, false, true, false, false, false],
                [false, false, false, false, true, true, false, false, false],
            ],

            ticket: [
                [6, null, null, 31, 45, null, 69, null, 89],
                [null, null, 20, 34, null, 53, null, 74, 90],
                [null, 18, 21, null, 48, 58, null, 77, null],
            ],
        },
    },
    'Dinner': {
        description:
            'All the numbers of 7th, 8th and 9th vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, false],
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [1, 16, null, 32, 43, null, 67, null, null],
                [null, 19, 20, null, 46, null, null, 72, 81],
                [4, null, 26, null, 47, 52, null, null, 87],
            ],
        },
    },
    'Day || Jawani': {
        description: 'When all the number from 1 to 45 are marked.',
        ticketDetails: {
            marked: [
                [false, false, true, false, true, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
                [true, true, false, true, false, false, false, false, false],
            ],

            ticket: [
                [null, null, 22, null, 40, 55, null, 74, 80],
                [4, null, null, 32, 46, null, 60, null, 89],
                [6, 13, null, 33, 48, null, 68, null, null],
            ],
        },
    },
    'Night || Budhapa': {
        description: 'When all the number from 46 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, false],
                [false, false, false, false, false, true, false, true, true],
                [false, false, false, false, false, true, false, true, true],
            ],

            ticket: [
                [2, 13, null, 30, 43, null, 69, null, null],
                [null, null, 20, 37, null, 53, null, 73, 87],
                [null, null, 21, 38, null, 55, null, 78, 89]
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
                [null, 12, null, null, 49, 52, null, 75, 86],
                [6, null, 29, 30, null, null, 67, 77, null],
                [null, 17, null, 35, null, 56, null, 78, 88],
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
                [null, 14, null, 31, 47, null, 63, null, 81],
                [1, null, 20, 37, null, null, 64, 71, null],
                [2, null, 27, null, null, 55, null, 77, 84],
            ],
        },
    },
    'First Half': {
        description: 'When 1st, 2nd and 3rd number of each line (row) is marked',
        ticketDetails: {
            marked: [
                [false, true, true, false, true, false, false, false, false],
                [true, false, false, true, true, false, false, false, false],
                [true, true, false, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 13, 20, null, 41, 55, null, 74, null],
                [1, null, null, 30, 45, null, 64, null, 82],
                [2, 15, null, 39, 48, null, null, null, 90],
            ],
        },
    },

    'Second Half': {
        description: 'When 3rd,4th and 5th number of each line (row) is marked',
        ticketDetails: {
            marked: [

                [false, false, false, false, false, true, true, false, true],
                [false, false, false, false, true, false, false, true, true],
                [false, false, false, false, true, false, true, true, false],
            ],

            ticket: [
                [null, null, 20, 36, null, 52, 60, null, 87],
                [null, 13, 22, null, 43, null, null, 76, 88],
                [2, null, 29, null, 48, null, 67, 77, null]


            ],
        },
    },


    'Shehnai Bidaai': {
        description:
            'If first 3 numbers of Top row and last 3 numbers of last row are marked.',
        ticketDetails: {
            marked: [
                [false, true, true, false, true, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, true, false, true, false, false, true],
            ],

            ticket: [
                [null, 13, 27, null, 41, null, 62, 79, null],
                [2, null, 28, null, null, 51, 63, null, 81],
                [5, 16, null, 39, null, 56, null, null, 82],
            ],
        },
    },
    'Brahma': {
        description: 'When all the number from 1 to 30 are marked.',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
                [true, false, true, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 15, 22, null, 42, null, 65, 75, null],
                [1, null, 26, null, null, 50, 69, null, 89],
                [2, null, 27, 30, null, 56, null, 76, null],
            ],
        },
    },
    'Vishnu': {
        description: 'When all the number from 31 to 60 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, true, true, false, true, false, false],
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, true, true, false, false, false, false],
            ],

            ticket: [
                [4, 15, null, 34, 41, null, 60, null, null],
                [null, 17, 21, 38, null, null, null, 74, 84],
                [9, null, null, 48, 58, null, 67, null, 90],
            ],
        },
    },

    'Mahesh': {
        description: 'When all the number from 61 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, true],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, true, true],
            ],

            ticket: [
                [5, 18, null, null, null, null, 62, 74, 80],
                [9, null, 27, null, null, 51, 63, null, 83],
                [null, null, 34, 39, null, 59, null, 77, 86],
            ],
        },
    },
    'Railway Track': {
        description: 'When all the number of Top Line and Bottom Line are marked.',
        ticketDetails: {
            marked: [
                [false, true, true, false, true, false, true, true, false],
                [false, false, false, false, false, false, false, false, false],
                [true, false, false, true, true, false, true, false, true],
            ],

            ticket: [
                [null, 17, 20, null, 42, null, 60, 73, null],
                [2, null, null, null, 43, 58, null, 78, 85],
                [9, null, null, 39, 49, null, 65, null, 86],
            ],
        },
    },
    'Drum': {
        description: 'if 2nd,3rd and 4th number of all 3 rows are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, true, false, true, false],
                [false, true, false, true, false, false, true, false, false],
                [false, false, false, true, true, false, true, false, false],
            ],
            ticket: [
                [null, 12, 23, null, null, 58, null, 75, 81],
                [1, 16, null, 31, null, null, 60, 77, null],
                [6, null, null, 34, 48, null, 65, 77, 87],
            ],
        },
    },
    'ZIP': {
        description:
            'if 1st and 2nd numbers of Top line + 3rd number of middle line + 4th and 5th numbers of last line are marked.',
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, false, false, false],
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, false, false, false, true, false, true],
            ],

            ticket: [
                [1, 17, null, 39, null, 52, null, 70, 82],
                [1, null, 24, null, 41, 50, null, 76, null],
                [7, 19, null, null, 49, null, 64, null, 89],
            ],
        },
    },
    'ZAP': {
        description:
            'if 4th and 5th numbers of Top line + 3rd number of middle line + 1st and 2nd numbers of last line are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, true, false],
                [false, false, false, false, false, true, false, false, false],
                [true, true, false, false, false, false, false, false, false],
            ],
            ticket: [
                [6, null, 20, 30, null, 52, null, 77, null],
                [null, 15, null, 32, null, 59, 67, null, 81],
                [9, 16, null, 37, 45, null, null, null, 88],
            ],
        },
    },
}
export default dividendDescription9;
