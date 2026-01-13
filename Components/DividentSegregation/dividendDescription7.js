const dividendDescription7 = {

    "First/Top Line": {
        description: 'All the Numbers of first/top row of a ticket.',
        ticketDetails: {
            marked: [
                [true, false, false, false, true, true, false, true, true],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [5, null, null, null, 43, 52, null, 70, 81],
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
                [false, false, true, true, false, true, true, false, true],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [4, 17, null, 30, 41, null, null, 76, null],
                [null, null, 26, 35, null, 56, 64, null, 89],
                [5, null, 28, 36, null, 57, 68, null, null],
            ],
        },
    },


    'Third/Last Line': {
        description: 'All the Numbers of third/last row of a ticket. ',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [true, false, true, false, true, false, true, true, false],
            ],

            ticket: [
                [null, 12, null, 37, null, 51, null, 72, 83],
                [4, null, 27, null, 40, null, 62, 75, null],
                [9, null, 28, null, 45, null, 64, 79, null],
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
                [true, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
            ],
            ticket: [
                [null, null, 21, 33, null, 53, null, 72, 86],
                [2, 18, null, null, 40, null, 64, 78, null],
                [4, null, 29, 35, null, 58, 69, null, null],
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
                [1, null, 22, null, 40, 53, null, 74, null],
                [3, 13, null, 32, null, 56, null, null, 81],
                [null, 15, null, 37, 46, null, 63, null, 90],
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
                [1, null, 29, 38, null, 53, 61, null, null],
                [2, null, 22, 39, null, 53, 64, null, 80],
                [3, 18, null, 31, 49, null, 68, null, 89],
            ],
        },
    },

    'Bulls Eyes': {
        description: 'if 2nd and 4th numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, false, true, false],
                [false, false, true, false, false, false, true, false, false],
                [false, false, false, true, false, false, true, false, false],
            ],

            ticket: [
                [null, 15, 20, null, null, 55, null, 71, 90],
                [6, null, 21, null, 44, null, 65, 78, null],
                [9, null, null, 39, 46, null, 68, 79, null],
            ],
        },
    },

    'Twin Lines': {
        description: 'if 1st and 2nd numbers of each line are marked',
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, false, false, false],
                [false, false, true, true, false, false, false, false, false],
                [false, false, true, true, false, false, false, false, false],
            ],

            ticket: [
                [4, 15, null, 32, 47, null, null, 76, null],
                [null, null, 20, 36, null, 53, 60, null, 84],
                [null, null, 21, 37, null, 55, 68, null, 86],
            ],
        },
    },


    '6 Corners': {
        description: 'First and last numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, true],
                [true, false, false, false, false, false, false, true, false],
                [true, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, 10, 24, null, 48, null, null, 71, 80],
                [2, 14, null, 38, null, null, 60, 79, null],
                [8, 18, null, null, null, 55, 69, null, 85],
            ],
        },
    },
    '6 Corners and Center': {
        description: 'First and last number of each row is marked and 3rd number middle row is  marked.',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, true],
                [true, false, false, true, false, false, false, true, false],
                [true, false, false, false, false, false, true, false, false],
            ],

            ticket: [
                [null, 10, null, null, 40, 53, null, 74, 87],
                [4, null, 24, 37, null, 56, null, 77, null],
                [8, null, 28, 39, null, 58, 69, null, null],
            ],
        },
    },

    'Reverse Twin': {
        description: 'if 4th and 5th numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, true, false, false, true],
                [false, false, false, false, false, false, true, false, true],
            ],

            ticket: [
                [null, 14, null, 32, 40, null, 63, 72, null],
                [1, null, 21, 35, null, 54, null, null, 81],
                [null, null, 27, 37, null, 57, 69, null, 89],
            ],
        },
    },
    'Early 5/Jaldi 5': {
        description: 'When any 5 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, true, false, false, false],
                [true, true, false, false, false, true, false, false, false],
            ],

            ticket: [
                [7, null, 22, 38, null, null, 61, null, 86],
                [null, 12, null, null, 44, 51, null, 70, 87],
                [9, 18, null, null, 49, 58, null, null, 90],
            ],
        },
    },

    'Early 6/Jaldi 6': {
        description: 'When any 6 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, true],
                [false, false, false, false, true, true, false, true, true],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [5, 13, null, null, 47, 53, null, null, 81],
                [false, 19, null, null, 49, 54, null, 72, 86],
                [9, null, 22, 31, null, 59, 62, null, null],
            ],
        },
    },
    'Early 7/Jaldi 7': {
        description: 'When any 7 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, true, false, false, true, false, true, false],
                [false, false, false, false, false, true, true, false, false],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [2, null, 21, 32, null, 54, null, 72, null],
                [9, null, 27, null, null, 57, 65, null, 80],
                [null, 18, null, null, 41, 58, null, 73, 88],
            ],
        },
    },
    'Early 8/Jaldi 8': {
        description: 'When any 8 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, true, false, false, true, true],
                [false, false, false, false, false, true, false, true, false],
                [true, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 17, null, null, 41, 51, null, 74, 85],
                [4, null, 23, 33, null, 56, null, 78, null],
                [9, null, 25, 37, null, 58, 61, null, null],
            ],
        },
    },
    'Early 9/Jaldi 9': {
        description: 'When any 9 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, true, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
                [true, false, false, true, false, true, false, true, true],
            ],

            ticket: [
                [null, 19, null, 33, 45, null, 60, null, 81],
                [5, null, 23, 36, null, 51, 65, null, null],
                [6, null, null, 39, null, 57, null, 73, 83],
            ],
        },
    },


    'Early 10/Jaldi 10': {
        description: 'When any 10 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, true, false, true, true, false, false],
                [false, true, true, false, false, false, true, false, false],
                [true, false, false, false, false, true, false, true, false],
            ],

            ticket: [
                [4, 10, null, 37, null, 51, 62, null, null],
                [null, 18, 21, null, 41, null, 63, 70, null],
                [6, null, 22, null, null, 56, null, 74, 86],
            ],
        },
    },
    'Early 11/Jaldi 11': {
        description: 'When any 11 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, true, true, false, true],
                [false, false, false, true, true, false, true, true, false],
                [false, false, false, false, true, true, false, true, false],
            ],

            ticket: [
                [4, 16, null, null, null, 56, 60, null, 82],
                [5, null, null, 37, 41, null, 65, 73, null],
                [9, null, 20, null, 48, 58, null, 74, null],
            ],
        },
    },

    'Early 12/Jaldi 12': {
        description: 'When any 12 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, true, true, false, false],
                [false, true, false, false, false, true, false, true, true],
                [false, true, false, false, true, true, false, false, true],
            ],

            ticket: [
                [6, null, 26, 37, null, 54, 62, null, null],
                [null, 12, 28, null, null, 57, null, 71, 84],
                [null, 16, null, null, 40, 58, null, 76, 89],
            ],
        },
    },


    'Early 13/Jaldi 13': {
        description: 'When any 13 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, true, true, false, true, false, false, false],
                [false, true, true, false, true, false, true, true, false],
                [false, true, true, false, true, false, true, false, false],
            ],

            ticket: [
                [6, null, 20, 32, null, 57, null, null, 84],
                [null, 11, 24, null, 48, null, 66, 70, null],
                [null, 12, 25, null, 49, null, 68, null, 86],
            ],
        },
    },
    'Early 14/Jaldi 14': {
        description: 'When any 14 numbers are marked',
        ticketDetails: {
            marked: [
                [true, true, false, true, true, false, false, true, false],
                [false, true, false, true, true, false, false, true, false],
                [false, false, true, true, false, true, true, false, true],
            ],

            ticket: [
                [3, 12, null, 30, 46, null, null, 71, null],
                [null, 13, null, 33, 49, null, 60, 77, null],
                [null, null, 29, 35, null, 51, 66, null, 82],
            ],
        },
    },

    'Hockey Stick': {
        description: 'if all numbers of ticket containing 7 are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [false, false, true, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [null, 14, 22, null, 43, null, 63, 72, null],
                [null, null, 27, 32, null, 53, null, 74, 83],
                [2, null, null, 38, null, 58, null, 76, 88],
            ],
        },
    },

    'Fat Lady': {
        description: 'if all numbers of ticket containing 8 are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 10, 26, null, 42, 51, null, null, 81],
                [null, 17, null, 30, 45, null, 67, 72, null],
                [9, null, null, 39, 46, null, 69, 74, null],
            ],
        },
    },
    'Ugly Duckling': {
        description: 'if all numbers of ticket containing 2 are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, false, true, false],
                [false, true, true, false, false, true, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [7, null, 27, null, 48, null, 60, 72, null],
                [null, 12, 28, null, null, 52, null, 79, 84],
                [null, 18, null, 37, null, 58, 67, null, 87],
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
                [8, null, null, 31, 43, null, 60, 78, null],
                [9, null, 20, 36, null, 55, null, null, 87],
                [null, 17, 25, null, 46, null, 67, null, 88],
            ],
        },
    },
    'Reverse Pyramid': {
        description:
            'if 1st, 3rd and 5th number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, true, false, false, true],
                [false, true, false, false, false, true, false, false, false],
                [false, false, false, false, true, false, false, false, false],
            ],

            ticket: [
                [null, null, 27, 31, null, 50, null, 76, 85],
                [4, 10, null, 37, null, 51, 67, null, null],
                [8, 18, null, null, 48, 53, null, 77, null],
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
                [2, null, 20, 32, null, null, null, 72, 80],
                [null, 12, 26, null, 46, null, 64, 77, null],
                [null, 17, 27, null, null, 59, 65, null, 82],
            ],
        },
    },
    'All Even': {
        description: 'If all even numbers of ticket are marked.',
        ticketDetails: {
            marked: [
                [true, false, true, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, true, true],
                [false, true, false, false, false, false, false, true, false],
            ],

            ticket: [
                [2, null, 20, 37, null, 53, 63, null, null],
                [null, 12, null, null, 43, 57, null, 70, 88],
                [null, 18, 21, null, 45, null, 69, 78, null],
            ],
        },
    },
    'All Odd': {
        description: 'If all odd numbers of ticket are marked.',
        ticketDetails: {
            marked: [
                [false, true, false, false, true, false, false, true, false],
                [true, false, false, false, false, true, false, false, false],
                [false, false, false, false, false, false, true, false, false],
            ],

            ticket: [
                [null, 13, 20, null, 41, null, null, 79, 84],
                [1, 14, null, null, 42, 53, null, null, 88],
                [2, null, 26, 34, null, 58, 65, null, null],
            ],
        },
    },
    'Plus': {
        description:
            'If 3rd number of all 3 rows and 2nd and 4th numbers of middle row are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, true, false, true, true, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [9, 13, null, null, 48, null, 60, 74, null],
                [null, 14, null, 30, null, 56, 69, null, 83],
                [null, 16, 27, null, null, 59, null, 79, 88],
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
                [4, null, 21, 30, null, 55, 63, null, null],
                [8, null, 24, null, 40, null, 65, null, 85],
                [null, 15, null, 36, 41, null, 67, 71, null],
            ],
        },
    },

    'Double Temp.': {
        description: 'If 2 smallest and 2 highest numbers of ticket are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [5, null, 21, 35, null, 53, null, 73, null],
                [null, 13, 27, null, 40, null, 66, null, 80],
                [null, 19, 28, null, 42, null, null, 75, 85],
            ],
        },
    },
    'House': {
        description: 'All the numbers on a ticket',
        ticketDetails: {
            marked: [
                [false, true, false, true, true, false, true, true, false],
                [true, true, false, true, false, true, true, false, false],
                [true, false, true, false, true, true, false, false, true],
            ],

            ticket: [
                [null, 10, null, 32, 40, null, 64, 79, null],
                [3, 14, null, 33, null, 50, 69, null, null],
                [4, null, 25, null, 41, 52, null, null, 90],
            ],
        },
    },
    "I Love You 143": {
        description:
            "if 1st number of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, true, false, true, true, false, true, false, false],
                [false, true, true, false, true, false, false, false, false],
            ],

            ticket: [
                [2, null, 25, 32, null, 54, null, null, 88],
                [null, 12, null, 34, 48, null, 62, 73, null],
                [null, 14, 27, null, 49, null, 66, 74, null],
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
                [true, false, true, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 11, 23, null, null, 50, 65, null, 83],
                [null, 12, null, 34, 41, null, 66, 71, null],
                [5, null, 28, 35, null, 51, null, 76, null],
            ],
        },
    },
    '124': {
        description:
            "if 1st number of top row, 1st and 2nd numbers of middle row and 1st, 2nd ,3rd and 4th numbers of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
                [false, true, false, true, true, false, true, false, false],
            ],

            ticket: [
                [2, null, null, null, 42, 56, null, 78, 83],
                [4, null, 28, null, null, 59, 62, null, 86],
                [null, 13, null, 35, 46, null, 67, null, 88],
            ],
        },
    },
    '421': {
        description:
            "if 1st, 2nd , 3rd and 4th  numbers of top row, 1st and 2nd numbers of middle row and 1st number of last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, true, false, true, true, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 10, 29, null, 43, 56, null, null, 83],
                [5, 14, null, 33, null, 58, 60, null, null],
                [6, 15, null, 39, null, null, null, 75, 84],
            ],
        },
    },
    '225': {
        description:
            "if 1st and 2nd numbers of the top row, 1st and 2nd numbers of the middle row and 1st, 2nd , 3rd, 4th and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, true, false, false, false, false, false, false],
                [true, false, false, true, false, false, false, false, false],
                [false, true, true, false, true, false, true, false, true],
            ],

            ticket: [
                [1, null, 24, null, 41, 58, null, 75, null],
                [4, null, null, 32, 43, null, 61, null, 86],
                [null, 16, 29, null, 48, null, 65, null, 88],
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
                [2, null, null, 35, null, 55, 60, null, 80],
                [null, 19, 22, null, 41, 56, null, 79, null],
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
                [true, false, false, true, true, false, false, false, false],
            ],

            ticket: [
                [null, 15, 29, null, null, 57, 65, null, 81],
                [3, 17, null, 30, null, null, null, 70, 82],
                [5, null, null, 35, 43, null, null, 71, 89],
            ],
        },
    },
    "4 2 ka 1(Reverse)": {
        description:
            "if 2nd , 3rd ,4th and 5th numbers of the top row, 4th and 5th numbers of middle row and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [false, false, true, false, true, true, false, false, true],
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [null, 18, 22, null, 43, 52, null, null, 84],
                [1, null, 29, 37, null, null, 60, 72, null],
                [null, 19, null, 38, 48, null, 68, 76, null],
            ],
        },
    },
    "333 (reverse)": {
        description: "if 3rd,4th and 5th numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [false, false, false, true, false, true, true, false, false],
                [false, false, false, false, true, true, false, true, false],
                [false, false, false, false, true, false, true, false, true],
            ],

            ticket: [
                [1, 11, null, 37, null, 50, 60, null, null],
                [null, 12, 22, null, 42, 53, null, 72, null],
                [null, 13, 25, null, 45, null, 65, null, 90],
            ],
        },
    },
    "3 2 ka 1(Reverse)": {
        description:
            "if 3rd,4th and 5th numbers of top row, 4th and 5th numbers of middle row and 5th number of last row marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, true, true, false],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, 11, null, 37, 45, null, 64, 76, null],
                [2, 12, null, null, null, 50, 69, null, 81],
                [null, 14, 29, null, 48, 51, null, null, 85],
            ],
        },
    },
    '1 Pair (Row)': {
        description: 'If in any row, 1 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, null, 20, null, 46, null, 60, 75, null],
                [null, 12, null, 30, null, 50, 62, null, 90],
                [7, 19, null, 39, null, 54, 63, null, null],
            ],
        },
    },
    '2 Pair (Row)': {
        description: 'If in a ticket, 2 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, true, true],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, null, 22, null, 41, null, 64, null, 83],
                [null, 11, 28, null, null, 50, null, 70, 84],
                [8, 18, null, 30, null, 57, null, 76, null],
            ],
        },
    },
    '3 Pair (Row)': {
        description: 'If in a ticket, 3 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, true, true, false],
                [false, false, false, false, true, true, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [1, 16, null, 31, null, null, 62, 74, null],
                [8, null, 23, null, 41, 54, null, null, 87],
                [9, null, null, null, 45, 56, null, 76, 90],
            ],
        },
    },
    '4 Pair (Row)': {
        description: 'If in a ticket, 4 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, true, true, false],
                [false, false, false, true, true, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
            ],

            ticket: [
                [7, 12, null, 30, null, null, 67, 74, null],
                [null, 13, null, 35, 40, null, 69, null, 81],
                [null, 15, 22, null, null, 51, null, 78, 88],
            ],
        },
    },
    'All Pair (Row)': {
        description: 'If in a ticket, 4 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, true, true, false, false, false, true, true],
                [false, false, true, true, false, true, true, false, false],
                [true, true, false, false, true, true, false, false, false],
            ],

            ticket: [
                [null, null, 23, 38, null, 52, null, 71, 81],
                [null, null, 25, 35, null, 53, 62, null, 83],
                [2, 18, null, null, 45, 59, null, 76, null],
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
                [3, 10, null, null, null, 50, 66, null, 82],
                [9, 16, null, 32, 40, null, null, 74, null],
                [null, 18, 22, null, 47, null, null, 76, 89],
            ],
        },
    },
    '2 Pair (Column)': {
        description:
            'If in any column, 2 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, false, false],
                [false, false, false, false, true, true, false, false, false],
                [false, false, false, false, true, false, false, false, false],
            ],

            ticket: [
                [1, null, 22, 34, null, 50, 64, null, null],
                [null, 19, null, null, 43, 55, null, 71, 80],
                [2, null, 25, null, 46, null, 67, null, 88],
            ],
        },
    },
    '3 Pair (Column)': {
        description:
            'If in any column, 3 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [true, true, false, true, false, false, false, false, false],
                [true, true, false, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 11, 26, null, null, 50, 69, null, 80],
                [6, 12, null, 36, 41, null, null, 71, null],
                [9, 17, null, 39, 46, null, null, 79, null],
            ],
        },
    },

    '4 Pair (Column)': {
        description:
            'If in any column, 4 pair of 2 numbers vertically together are marked',
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

    'All Pair (Column)': {
        description:
            'If in any column, all pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, true, false],
                [true, true, false, true, false, true, false, true, true],
                [true, false, false, true, false, true, false, false, true],
            ],

            ticket: [
                [null, 15, 21, null, 40, null, 62, 74, null],
                [1, 18, null, 31, null, 50, null, 79, 82],
                [5, null, 29, 35, null, 51, 63, null, 87],
            ],
        },
    },
    'Breakfast': {
        description:
            'All the numbers of 1st, 2nd and 3rd vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
                [false, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [4, 11, null, null, 46, null, 61, 75, null],
                [null, 12, null, 32, null, 57, 66, null, 84],
                [null, null, 24, 39, null, 59, null, 77, 89],
            ],
        },
    },
    'Lunch': {
        description:
            'All the numbers of 4th, 5th and 6th vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, true, false, false, false],
                [false, false, false, false, false, true, false, false, false],
                [false, false, false, true, true, false, false, false, false],
            ],

            ticket: [
                [null, 12, 25, null, 44, 50, null, 74, null],
                [null, 18, 27, null, null, 59, 68, null, 83],
                [5, null, null, 39, 47, null, 69, null, 86],
            ],
        },
    },
    'Dinner': {
        description:
            'All the numbers of 7th, 8th and 9th vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, true, false, false],
            ],

            ticket: [
                [null, 15, 27, null, 49, 50, null, 79, null],
                [1, null, null, 32, null, 55, 63, null, 90],
                [6, 19, null, 34, null, 56, 64, null, null],
            ],
        },
    },
    'Day || Jawani': {
        description: 'When all the number from 1 to 45 are marked.',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, false, false, false, false],
                [true, true, false, false, true, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [1, null, null, 35, null, 52, null, 73, 80],
                [2, 11, null, null, 40, 58, null, 79, null],
                [3, null, 28, null, 46, null, 63, null, 81],
            ],
        },
    },
    'Night || Budhapa': {
        description: 'When all the number from 46 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, false, true],
                [false, false, false, false, false, true, false, false, true],
                [false, false, false, false, false, false, true, true, false],
            ],

            ticket: [
                [2, 14, null, null, 41, 51, null, null, 85],
                [5, 16, null, 33, null, 57, null, null, 88],
                [8, null, 20, 34, null, null, 64, 70, null],
            ],
        },
    },
    'Center || Laddu': {
        description: 'When 3rd number of second line (row) is marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [5, null, 24, 34, null, 53, null, null, 81],
                [7, null, null, 36, 41, null, 68, null, 85],
                [null, 15, 29, null, 42, null, null, 76, 86],
            ],
        },
    },
    'Bamboo': {
        description: 'When 3rd number of each line (row) is marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, false, true, false, false, false, false],
            ],

            ticket: [
                [2, null, 21, null, 40, 58, null, 79, null],
                [null, 13, null, 37, 45, null, 61, null, 80],
                [null, 14, null, 39, 46, null, 64, null, 88],
            ],
        },
    },
    'First Half': {
        description: 'When 1st, 2nd and 3rd number of each line (row) is marked',
        ticketDetails: {
            marked: [
                [false, true, true, false, true, false, false, false, false],
                [false, true, true, false, true, false, false, false, false],
                [true, false, false, true, false, true, false, false, false],
            ],

            ticket: [
                [null, 11, 21, null, 44, null, 61, 70, null],
                [null, 19, 23, null, 46, null, 64, 73, null],
                [4, null, null, 36, null, 55, 68, null, 90],
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
                [true, true, false, true, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, true, false, false, true, true],
            ],

            ticket: [
                [4, 10, null, 30, null, 54, 61, null, null],
                [6, null, 24, 31, null, null, null, 72, 82],
                [null, 11, 29, null, 48, null, null, 74, 84],
            ],
        },
    },
    'Brahma': {
        description: 'When all the number from 1 to 30 are marked.',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 15, null, 36, null, 55, 60, null, 86],
                [6, null, 27, null, 41, null, 63, 72, null],
                [8, null, 29, null, 46, 56, null, 75, null],
            ],
        },
    },
    'Vishnu': {
        description: 'When all the number from 31 to 60 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, true, false, false, false],
                [false, false, false, true, false, true, false, false, false],
                [false, false, false, true, false, true, false, false, false],
            ],

            ticket: [
                [null, 16, 21, null, 44, 53, null, 75, null],
                [1, null, null, 33, null, 56, 66, null, 84],
                [4, null, 24, 38, null, 59, null, null, 85],
            ],
        },
    },
    'Mahesh': {
        description: 'When all the number from 61 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, true, false, true],
            ],

            ticket: [
                [2, null, 24, 31, null, 51, null, 77, null],
                [8, 14, null, 37, 44, null, null, null, 81],
                [null, 18, null, 38, null, 56, 66, null, 90],
            ],
        },
    },
    'Railway Track': {
        description: 'When all the number of Top Line and Bottom Line are marked.',
        ticketDetails: {
            marked: [
                [false, true, false, true, false, true, true, false, true],
                [false, false, false, false, false, false, false, false, false],
                [false, true, true, false, true, true, false, true, false],
            ],

            ticket: [
                [null, 10, null, 36, null, 51, 65, null, 89],
                [2, null, 20, 37, null, 53, null, 76, null],
                [null, 16, 25, null, 41, 56, null, 79, null],
            ],
        },
    },
    'Drum': {
        description: 'if 2nd,3rd and 4th number of all 3 rows are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, true, false, true, false, false],
                [false, false, true, true, false, true, false, false, false],
                [false, false, true, true, false, false, true, false, false],
            ],
            ticket: [
                [null, 18, 23, null, 44, null, 62, 75, null],
                [2, null, 23, 36, null, 51, null, null, 85],
                [9, null, 27, 38, null, null, 69, 76, null],
            ],
        },
    },

    'ZIP': {
        description:
            'if 1st and 2nd numbers of Top line + 3rd number of middle line + 4th and 5th numbers of last line are marked.',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, false, false, false, true, true, false],
            ],

            ticket: [
                [null, 12, 26, null, null, 58, null, 78, 80],
                [null, 16, 27, null, 43, null, 63, null, 90],
                [6, 17, null, 37, null, null, 64, 79, null],
            ],
        },
    },
    'ZAP': {
        description:
            'if 4th and 5th numbers of Top line + 3rd number of middle line + 1st and 2nd numbers of last line are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, false, true],
                [false, false, false, false, true, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
            ],
            ticket: [
                [4, null, 20, null, 40, 56, null, null, 87],
                [5, null, null, 32, 44, null, 61, 76, null],
                [null, 10, 22, null, 49, 57, null, null, 90],
            ],
        },
    },
}
export default dividendDescription7;
