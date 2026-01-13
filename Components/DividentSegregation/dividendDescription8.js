const dividendDescription8 = {

    "First/Top Line": {
        description: 'All the Numbers of first/top row of a ticket.',
        ticketDetails: {
            marked: [
                [false, true, true, false, true, false, true, false, true],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 10, 27, null, 45, null, 62, null, 80],
                [null, 18, 25, null, 47, null, 60, 79, null],
                [null, 19, null, 37, null, 55, 66, null, 88],
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
                [4, 13, null, null, 40, null, null, 77, 80],
                [5, null, 21, 32, null, null, 66, null, 83],
                [null, null, 28, 37, null, 50, 67, null, 86],
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
                [true, false, false, false, false, false, true, false, false],
                [false, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [1, null, 20, 33, null, 52, 69, null, null],
                [2, null, 21, 37, null, 55, 63, null, 80],
                [3, 18, null, 38, 43, null, 69, null, 89],
            ],
        },
    },
    'Queen Corners': {
        description: 'when first number of each row is marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, null, 20, 38, null, 52, null, 73, 84],
                [null, 11, 26, null, 41, 56, null, 77, null],
                [4, null, 28, null, 46, null, 60, null, 87],
            ],
        },
    },
    'King Corners': {
        description: 'when last number of each row is marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, 16, 22, null, 42, null, 68, 74, null],
                [8, null, null, 33, null, 51, 69, null, 82],
                [null, null, 27, 39, null, 52, null, 78, 84],
            ],
        },
    },

    '4 Corners and Center': {
        description: '',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, true, false, false],
                [false, false, false, true, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [1, null, 20, 33, null, 52, 69, null, null],
                [2, null, 21, 37, null, 55, 63, null, 80],
                [3, 18, null, 38, 43, null, 69, null, 89],
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
                [8, null, null, 39, 43, null, 67, null, 82],
                [null, null, 24, null, 42, 55, null, 71, 83],
                [null, 14, 27, null, 48, null, 61, 75, null],
            ],
        },
    },


    'Twin Lines': {
        description: 'if 1st and 2nd numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, true, false, true, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
                [true, false, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 16, null, 34, 47, null, 60, 71, null],
                [5, null, 23, null, null, 57, 68, null, 83],
                [7, null, 28, 38, null, null, null, 78, 87],
            ],
        },
    },

    '6 Corners': {
        description: 'First and last numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, true, false],
                [true, false, false, false, false, false, false, false, true],
                [true, false, false, false, false, false, true, false, false],
            ],

            ticket: [
                [null, 12, null, 30, 43, null, 62, 78, null],
                [2, null, 20, 35, null, 51, null, null, 87],
                [7, 14, null, 36, 44, null, 67, null, null],
            ],
        },
    },

    '6 Corners and Center': {
        description: 'First and last number of each row is marked and 3rd number middle row is  marked.',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, true],
                [true, false, false, true, false, false, false, true, false],
                [true, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, 16, null, 30, null, 50, 62, null, 86],
                [4, null, 23, 37, null, null, 62, 70, null],
                [7, null, null, null, 43, 58, null, 73, 88],
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
                [9, null, null, 34, null, 56, 62, null, 81],
                [null, 12, 21, null, null, 58, null, 72, 86],
                [null, 15, 26, null, 46, 59, null, 75, null],
            ],
        },
    },

    'Early 5/Jaldi 5': {
        description: 'When any 5 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, false, false, false, false, false, true],
                [false, true, false, false, false, true, true, false, false],
            ],

            ticket: [
                [null, 12, 28, null, 44, null, 65, 75, null],
                [4, 13, null, 32, null, 51, null, null, 88],
                [9, 15, null, 35, null, 52, 68, null, null],
            ],
        },
    },

    'Early 6/Jaldi 6': {
        description: 'When any 6 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, false],
                [true, false, true, true, false, false, false, false, false],
                [false, false, false, true, false, true, false, false, false],
            ],

            ticket: [
                [null, 10, 20, null, 42, null, 60, 74, null],
                [1, null, 24, 36, null, null, 62, 77, null],
                [2, 11, null, 38, null, 59, null, null, 87],
            ],
        },
    },
    'Early 7/Jaldi 7': {
        description: 'When any 7 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, true, false, false, true],
                [false, true, false, false, true, false, false, false, false],
                [false, true, false, false, false, false, false, true, false],
            ],

            ticket: [
                [2, null, 20, null, 40, 56, null, null, 82],
                [null, 10, null, 34, 44, null, 65, 70, null],
                [null, 16, null, 39, 45, null, 67, 76, null],
            ],
        },
    },
    'Early 8/Jaldi 8': {
        description: 'When any 8 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, false],
                [false, true, true, false, false, true, false, true, false],
                [true, true, false, false, false, false, false, true, false],
            ],

            ticket: [
                [2, null, null, 30, 41, null, 62, null, 80],
                [null, 11, 22, null, 42, 50, null, 73, null],
                [6, 17, null, null, 44, 54, null, 74, null],
            ],
        },
    },

    'Early 9/Jaldi 9': {
        description: 'When any 9 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, true, false, false, false, false],
                [true, false, true, true, false, true, false, false, false],
                [false, false, false, true, true, false, false, true, false],
            ],

            ticket: [
                [null, 11, 21, null, 47, null, 68, null, 82],
                [1, null, 22, 32, null, 57, null, 74, null],
                [6, null, null, 37, 48, null, null, 77, 86],
            ],
        },
    },

    'Early 10/Jaldi 10': {
        description: 'When any 10 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, true, false, false, false, true],
                [false, true, false, true, false, true, true, false, false],
                [false, false, true, true, false, false, true, false, false],
            ],

            ticket: [
                [3, null, 20, null, 45, null, null, 78, 83],
                [6, 17, null, 34, null, 50, 63, null, null],
                [null, null, 23, 38, null, 51, 65, null, 85],
            ],
        },
    },

    'Early 11/Jaldi 11': {
        description: 'When any 11 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, false, true, false, false],
                [false, true, false, true, true, false, false, true, false],
                [false, false, false, false, true, true, false, true, true],
            ],

            ticket: [
                [8, null, 28, 34, null, null, 65, 72, null],
                [null, 14, null, 37, 43, null, 66, 76, null],
                [null, 19, null, null, 49, 57, null, 78, 86],
            ],
        },
    },

    'Early 12/Jaldi 12': {
        description: 'When any 12 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, true, false, true, false],
                [true, true, false, true, false, false, false, false, true],
                [true, false, false, true, true, false, true, true, false],
            ],

            ticket: [
                [null, 11, null, null, 46, 59, null, 72, 85],
                [4, 17, null, 32, null, null, null, 77, 90],
                [8, null, null, 38, 47, null, 67, 78, null],
            ],
        },
    },

    'Early 13/Jaldi 13': {
        description: 'When any 13 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, true, false, true, false, false, true, true],
                [true, true, false, false, true, true, false, true, false],
                [true, false, false, false, false, true, true, false, false],
            ],

            ticket: [
                [1, null, 25, null, 40, null, null, 72, 85],
                [2, 15, null, null, 43, 50, null, 75, null],
                [6, 19, null, 31, null, 51, 66, null, null],
            ],
        },
    },
    'Early 14/Jaldi 14': {
        description: 'When any 14 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, false, true, false, true],
                [false, true, true, false, true, true, false, false, true],
                [false, true, true, false, true, true, false, true, false],
            ],

            ticket: [
                [6, null, null, 37, null, 50, 69, null, 83],
                [null, 11, 20, null, 45, 53, null, null, 90],
                [null, 14, 26, null, 46, 54, null, 78, null],
            ],
        },
    },
    'Hockey Stick': {
        description: 'if all numbers of ticket containing 7 are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, true, true, false, false, false, false],
            ],

            ticket: [
                [null, 13, null, null, 44, 54, null, 75, 80],
                [null, null, 21, 31, null, 59, 63, null, 83],
                [6, null, null, 37, 47, null, 68, null, 88],
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
                [null, 11, 23, null, 43, null, 62, null, 85],
                [2, null, 24, null, null, 52, null, 74, 88],
                [5, 13, null, 30, null, 54, null, 79, null],
            ],
        },
    },

    'Ugly Duckling': {
        description: 'if all numbers of ticket containing 2 are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [1, 12, null, null, 46, 51, null, null, 83],
                [2, null, 22, 30, null, 56, 65, null, null],
                [6, 14, null, 35, null, null, 67, 74, null],
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
                [true, false, false, false, false, true, false, false, true],
            ],

            ticket: [
                [2, null, null, 39, 45, null, 61, 70, null],
                [null, 12, 25, null, 48, 58, null, null, 81],
                [7, 17, null, null, null, 59, 66, null, 84],
            ],
        },
    },
    'Reverse Pyramid': {
        description:
            'if 1st, 3rd and 5th number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, true, false, false, false, true],
                [false, true, false, false, false, true, false, false, false],
                [false, false, false, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 10, 20, null, 44, null, null, 72, 90],
                [4, 12, null, 33, null, 50, 60, null, null],
                [9, 17, null, 37, null, 59, 65, null, null],
            ],
        },
    },
    'Circle': {
        description:
            'if 3rd number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, false],
                [false, false, true, false, false, false, true, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [5, 15, null, 32, 40, null, 61, null, null],
                [null, 12, 26, null, 46, null, 64, 77, null],
                [null, 17, 27, null, null, 59, 65, null, 82],
            ],
        },
    },

    'All Even': {
        description: 'If all even numbers of ticket are marked.',
        ticketDetails: {
            marked: [
                [true, true, false, false, true, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, false, false, false, false, false, true, false, false],
            ],

            ticket: [
                [2, 12, null, 31, 44, null, null, 79, 87],
                [null, 14, 28, null, 49, 53, null, null, 89],
                [3, 15, null, 33, null, 59, 64, null, null],
            ],
        },
    },
    'All Odd': {
        description: 'If all odd numbers of ticket are marked.',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, false, false, false],
                [false, false, false, false, true, false, true, false, false],
                [false, true, false, false, true, false, false, false, true],
            ],

            ticket: [
                [null, 12, 25, null, 40, 54, null, 72, null],
                [4, null, null, 38, 45, null, 67, null, 80],
                [6, 19, null, null, 47, null, 68, null, 81],
            ],
        },
    },
    'Plus': {
        description:
            'If 3rd number of all 3 rows and 2nd and 4th numbers of middle row are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, false, true, false, false, true, true, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [5, null, null, 30, 42, null, null, 73, 82],
                [null, 12, 25, null, null, 53, 61, null, 83],
                [null, null, 28, null, 45, 56, null, 78, 84],
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
                [6, null, 23, null, 40, 50, null, null, 81],
                [7, null, null, 30, null, 57, null, 75, 84],
                [8, 14, null, 36, null, null, 63, 79, null],
            ],
        },
    },
    'Double Temp.': {
        description: 'If 2 smallest and 2 highest numbers of ticket are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, true],
                [false, true, false, false, false, false, false, false, true],
                [true, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, null, 25, null, 45, 51, null, 71, 82],
                [null, 15, null, 35, 47, null, 66, null, 87],
                [7, 17, null, 38, 49, null, 68, null, null],
            ],
        },
    },
    'House': {
        description: 'All the numbers on a ticket',
        ticketDetails: {
            marked: [
                [false, false, true, false, true, true, false, true, true],
                [false, true, false, true, true, false, true, false, true],
                [true, true, false, true, false, true, false, false, true],
            ],

            ticket: [
                [null, null, 27, null, 44, 52, null, 75, 84],
                [null, 11, null, 32, 47, null, 64, null, 85],
                [6, 12, null, 34, null, 57, null, null, 90],
            ],
        },
    },
    "I Love You 143": {
        description:
            "if 1st number of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [false, true, true, false, true, true, false, false, false],
                [true, true, false, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 10, null, 34, 42, null, 64, 77, null],
                [null, 12, 28, null, 45, 58, null, null, 87],
                [8, 17, null, 36, null, null, 69, null, 88],
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
                [true, false, false, false, false, false, false, false, false],
                [false, true, false, true, false, false, false, false, false],
                [false, true, true, false, false, true, true, false, false],
            ],

            ticket: [
                [2, 10, null, null, 41, null, 63, 77, null],
                [null, 14, null, 33, 46, null, null, 79, 87],
                [null, 17, 28, null, null, 51, 66, null, 89],
            ],
        },
    },
    '421': {
        description:
            "if 1st, 2nd , 3rd and 4th  numbers of top row, 1st and 2nd numbers of middle row and 1st number of last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, false, false, true, true, false, true, false],
                [false, true, false, false, true, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 10, null, null, 40, 51, null, 75, 82],
                [null, 12, null, null, 41, 54, null, 76, 87],
                [2, null, 28, 36, null, null, 60, null, 88],
            ],
        },
    },
    '225': {
        description:
            "if 1st and 2nd numbers of the top row, 1st and 2nd numbers of the middle row and 1st, 2nd , 3rd, 4th and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, true, false, false, false, false, false, false],
                [false, false, true, false, true, false, false, false, false],
                [true, true, true, true, true, false, false, false, false],
            ],

            ticket: [
                [3, null, 22, null, 46, null, null, 73, 82],
                [null, null, 27, null, 43, null, 61, 75, 86],
                [7, 19, 29, 38, 49, null, null, null, null],
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
                [1, 11, null, 31, 41, null, null, 71, null],
                [null, 18, 21, null, null, 51, 61, null, 81],
                [null, 19, 28, null, null, 57, 66, null, 85],
            ],
        },
    },

    '333': {
        description: "if 1st, 2nd and 3rd numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [false, true, true, false, false, true, false, false, false],
                [true, true, false, true, false, false, false, false, false],
                [true, true, false, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 13, 29, null, null, 51, null, 71, 87],
                [2, 15, null, 30, 42, null, 61, null, null],
                [7, 18, null, 34, null, 54, 62, null, null],
            ],
        },
    },
    "4 2 ka 1(Reverse)": {
        description:
            "if 2nd , 3rd ,4th and 5th numbers of the top row, 4th and 5th numbers of middle row and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, false, true, false, false, true, false, true],
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [3, 15, null, 32, null, null, 68, null, 81],
                [null, 18, 22, null, null, 55, null, 76, 84],
                [7, null, 24, null, 45, 58, null, null, 88],
            ],
        },
    },
    "333 (reverse)": {
        description: "if 3rd,4th and 5th numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, true, false, true],
                [false, false, false, true, false, false, true, false, true],
                [false, false, false, false, true, false, true, true, false],
            ],

            ticket: [
                [null, 17, null, 33, null, 59, 63, null, 86],
                [5, null, 27, 34, null, null, 67, null, 89],
                [6, 18, null, null, 47, null, 68, 75, null],
            ],
        },
    },
    "3 2 ka 1(Reverse)": {
        description:
            "if 3rd,4th and 5th numbers of top row, 4th and 5th numbers of middle row and 5th number of last row marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, true, true],
                [false, false, false, false, true, false, true, false, false],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [null, 17, null, null, 45, 56, null, 75, 87],
                [1, 19, null, 32, 48, null, 64, null, null],
                [8, null, 25, null, 49, null, 68, 78, null],
            ],
        },
    },
    '1 Pair (Row)': {
        description: 'If in any row, 1 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [3, null, 24, null, null, 56, null, 75, 81],
                [null, 13, 27, null, 41, null, 62, 78, null],
                [8, null, null, 37, null, 58, 65, null, 87],
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
                [null, null, 26, null, 43, 52, null, 71, 84],
                [null, 17, 24, null, 45, null, 62, null, 90],
                [2, null, null, 32, 48, null, 63, 74, null],
            ],
        },
    },
    '3 Pair (Row)': {
        description: 'If in a ticket, 3 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, true, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [false, false, false, true, true, false, false, false, false],
            ],

            ticket: [
                [3, null, 25, null, 46, 50, null, 71, null],
                [6, 17, null, 37, null, 53, null, null, 88],
                [8, 19, null, 38, 47, null, 62, null, null],
            ],
        },
    },
    '4 Pair (Row)': {
        description: 'If in a ticket, 4 pair of 2 numbers together are marked',
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
    'All Pair (Row)': {
        description: 'If in a ticket, 4 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, true, true, false, true, true, false, false],
                [false, true, true, false, false, false, true, true, false],
                [false, false, true, true, false, false, false, true, true],
            ],

            ticket: [
                [null, null, 20, 34, null, 52, 66, null, 83],
                [null, 16, 23, null, 46, null, 68, 71, null],
                [6, null, 27, 35, null, null, null, 73, 84],
            ],
        },
    },
    '1 Pair (Column)': {
        description:
            'If in any column, 1 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 16, null, null, 41, 59, null, 77, 82],
                [null, 17, 28, null, 46, null, 68, 78, null],
                [6, null, null, 33, 48, null, 69, null, 88],
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
                [null, 11, 26, null, null, 50, 69, null, 80],
                [6, 12, null, 36, 41, null, null, 71, null],
                [9, 17, null, 39, 46, null, null, 79, null],
            ],
        },
    },
    '3 Pair (Column)': {
        description:
            'If in any column, 3 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, false],
                [false, false, false, true, false, true, true, false, false],
                [false, false, false, true, false, true, false, false, false],
            ],

            ticket: [
                [4, 16, null, null, 48, null, 60, 74, null],
                [null, null, 24, 32, null, 51, 62, null, 80],
                [6, null, null, 37, null, 55, 67, null, 81],
            ],
        },
    },
    '4 Pair (Column)': {
        description:
            'If in any column, 4 pair of 2 numbers vertically together are marked',
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

    'All Pair (Column)': {
        description:
            'If in any column, all pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, false, true, false, true, true, false, false, true],
                [false, false, true, false, false, true, false, false, true],
            ],

            ticket: [
                [4, null, null, 38, 42, null, 63, 77, null],
                [null, 11, 25, null, 45, 54, null, null, 87],
                [null, null, 27, null, 46, 57, null, 79, 89],
            ],
        },
    },
    'Breakfast': {
        description:
            'All the numbers of 1st, 2nd and 3rd vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [3, 10, null, null, null, 56, 64, null, 84],
                [4, 11, null, 38, 44, null, null, 70, null],
                [5, null, 23, 39, null, null, null, 75, 87],
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
                [false, false, false, true, false, true, false, false, false],
            ],

            ticket: [
                [null, 13, 28, null, 41, null, null, 76, 82],
                [null, 14, null, 30, null, 51, 64, null, 85],
                [4, 19, null, 32, null, 58, 65, null, null],
            ],
        },
    },
    'Dinner': {
        description:
            'All the numbers of 7th, 8th and 9th vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, true, false, true],
            ],

            ticket: [
                [2, null, null, 35, null, 53, null, 78, 81],
                [null, 11, 24, null, 44, null, 64, null, 84],
                [7, 16, null, null, 45, null, 65, null, 90],
            ],
        },
    },
    'Day || Jawani': {
        description: 'When all the number from 1 to 45 are marked.',
        ticketDetails: {
            marked: [
                [true, false, true, true, false, false, false, false, false],
                [true, true, false, false, true, false, false, false, false],
                [false, true, true, false, true, false, false, false, false],
            ],

            ticket: [
                [2, null, 20, 31, null, 56, 60, null, null],
                [8, 11, null, null, 42, null, 62, null, 83],
                [null, 13, 27, null, 43, null, 63, 73, null],
            ],
        },
    },
    'Night || Budhapa': {
        description: 'When all the number from 46 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, false, true],
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, true, false, true, false],
            ],

            ticket: [
                [1, null, 26, null, 44, 56, null, null, 86],
                [null, 14, 28, null, 45, null, 60, 70, null],
                [2, 18, null, 34, null, 58, null, 74, null],
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
                [null, 10, 22, null, 43, 53, null, 70, null],
                [1, 14, null, 36, null, 56, 62, null, null],
                [null, 16, 28, null, 49, null, 66, null, 89],
            ],
        },
    },
    'Bamboo': {
        description: 'When 3rd number of each line (row) is marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [null, 10, 29, null, 42, null, 67, 71, null],
                [null, 14, null, 31, 47, null, null, 78, 82],
                [8, null, null, 33, null, 52, null, 79, 84],
            ],
        },
    },
    'First Half': {
        description: 'When 1st, 2nd and 3rd number of each line (row) is marked',
        ticketDetails: {
            marked: [
                [true, true, false, true, false, false, false, false, false],
                [false, true, true, false, true, false, false, false, false],
                [false, false, true, true, false, true, false, false, false],
            ],

            ticket: [
                [3, 13, null, 32, 48, null, null, 74, null],
                [null, 18, 23, null, 49, 55, null, null, 80],
                [null, null, 29, 36, null, 58, 64, null, 82],
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
                [true, true, false, false, false, true, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, true, false, true, false, true],
            ],

            ticket: [
                [1, 12, null, null, null, 55, 61, null, 82],
                [null, 17, 24, null, 44, null, null, 77, 83],
                [7, null, null, 35, 49, null, 62, null, 90],
            ],
        },
    },
    'Brahma': {
        description: 'When all the number from 1 to 30 are marked.',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 16, 20, null, 48, null, null, 75, 80],
                [2, 19, null, null, null, 50, 67, null, 88],
                [4, null, 21, 33, null, 52, 69, null, null],
            ],
        },
    },
    'Vishnu': {
        description: 'When all the number from 31 to 60 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, true, true, false, false, false],
            ],

            ticket: [
                [1, 15, null, 37, null, null, 62, 75, null],
                [6, null, 29, 39, null, null, 68, null, 83],
                [9, 16, null, null, 45, 55, null, 77, null],
            ],
        },
    },

    'Mahesh': {
        description: 'When all the number from 61 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, true, true],
            ],

            ticket: [
                [5, 18, null, null, 47, null, null, 71, 80],
                [8, null, 23, null, null, 51, 63, null, 83],
                [null, null, 24, 39, null, 53, null, 77, 86],
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
                [false, false, true, true, false, true, false, false, false],
                [false, false, false, true, false, true, false, true, false],
            ],
            ticket: [
                [null, 10, 20, null, 44, null, 62, 75, null],
                [4, null, 27, 34, null, 55, 68, null, null],
                [null, 14, null, 37, null, 57, null, 77, 83],
            ],
        },
    },
    'ZIP': {
        description:
            'if 1st and 2nd numbers of Top line + 3rd number of middle line + 4th and 5th numbers of last line are marked.',
        ticketDetails: {
            marked: [
                [false, true, false, true, false, false, false, false, false],
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, false, false, false, true, true, false],
            ],

            ticket: [
                [null, 17, null, 39, null, 52, null, 70, 82],
                [1, null, 24, null, 41, 54, null, 76, null],
                [7, 18, null, null, 45, null, 64, 79, null],
            ],
        },
    },
    'ZAP': {
        description:
            'if 4th and 5th numbers of Top line + 3rd number of middle line + 1st and 2nd numbers of last line are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, true, false, false, false],
                [true, true, false, false, false, false, false, false, false],
            ],
            ticket: [
                [5, null, 25, 30, null, null, 66, null, 82],
                [null, 15, null, 31, null, 53, null, 78, 83],
                [6, 18, null, null, 47, null, 67, 79, null],
            ],
        },
    },
}

export default dividendDescription8;
