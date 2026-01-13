const dividendDescription1 = {
    //Row/Line

    "First/Top Line": {
        description: 'All the Numbers of first/top row of a ticket.',
        ticketDetails: {
            marked: [
                [true, true, false, false, true, false, true, true, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, 14, null, null, 42, null, 62, 72, null],
                [5, null, 25, 35, null, 56, 63, null, null],
                [null, 16, 26, null, 44, null, 65, null, 84],
            ],
        },
    },

    'Second/Middle Line': {
        description: 'All the Numbers of second/middle row of a ticket.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [true, false, false, true, false, true, true, false, true],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 16, 20, null, 47, null, 64, 70, null],
                [4, null, null, 31, null, 53, 68, null, 84],
                [null, null, 21, 33, null, 54, null, 79, 86],
            ],
        },
    },
    'Third/Last Line': {
        description: 'All the Numbers of third/last row of a ticket. ',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, true, true, false, true, false, true, true],
            ],

            ticket: [
                [8, null, 21, 34, null, 51, null, 76, null],
                [null, 10, 22, null, 44, 55, null, null, 86],
                [null, null, 21, 33, null, 54, null, 79, 90],
            ],
        },
    },

    '4 Corners': {
        description: 'First and last numbers of top and and bottom rows',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, true, false],
            ],

            ticket: [
                [7, null, 24, 31, null, null, 68, null, 80],
                [null, 10, 22, null, 44, 55, null, null, 86],
                [null, 18, 28, null, 49, 51, null, 70, null],
            ],
        },
    },

    'Queen Corners': {
        description: 'when first number of each row is marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
            ],
            ticket: [
                [null, 13, null, null, 44, 54, null, 79, 82],
                [1, null, 27, 32, null, 55, null, null, 86],
                [4, 16, null, 33, null, 59, 60, null, null],
            ],
        },
    },
    'King Corners': {
        description: 'when last number of each row is marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, false],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [2, 11, null, 33, null, 53, 69, null, null],
                [null, null, 24, null, 44, 55, null, 73, 82],
                [null, 18, 29, null, 46, null, null, 78, 87],
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
                [6, null, 22, 32, null, null, 63, null, 80],
                [null, 13, null, 35, 48, null, null, 70, 88],
                [null, 15, 25, null, null, 53, null, 75, 90],
            ],
        },
    },
    'Bulls Eyes': {
        description: 'if 2nd and 4th numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, true, false, false],
                [false, false, true, false, false, false, true, false, false],
                [false, false, true, false, false, false, false, true, false],
            ],

            ticket: [
                [null, 11, null, 36, 41, null, 60, null, 83],
                [2, null, 24, null, 48, null, 69, null, 89],
                [4, null, 25, null, null, 55, null, 70, 90],
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
                [9, 11, null, null, 49, null, 64, 76, null],
                [null, null, 20, 36, null, 51, null, 79, 84],
                [null, null, 26, 37, null, 55, 67, null, 90],
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
        description:
            'First and last number of each row is marked and 3rd number middle row is marked.',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, true, false],
                [true, false, false, false, false, true, false, false, true],
                [true, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, 13, 21, null, 41, null, 65, 71, null],
                [3, null, null, 37, null, 54, 66, null, 81],
                [7, null, null, 36, null, 58, null, null, 90],
            ],
        },
    },

    'Reverse Twin': {
        description: 'if 4th and 5th numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, true, false, false, true],
                [false, false, false, false, false, true, false, true, false],
            ],

            ticket: [
                [8, null, 27, 36, null, null, 63, 71, null],
                [9, 10, null, null, 46, 56, null, null, 87],
                [null, 13, 28, null, 49, 59, null, 75, null],
            ],
        },
    },

    'Early 5/Jaldi 5': {
        description: 'When any 5 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, false],
                [true, false, false, false, false, true, false, false, false],
                [false, false, false, true, false, false, false, true, false],
            ],

            ticket: [
                [null, null, 26, 33, null, 55, 64, null, 83],
                [1, 15, null, null, null, 57, null, 72, 88],
                [7, 19, null, 34, 45, null, null, 74, null],
            ],
        },
    },

    'Early 6/Jaldi 6': {
        description: 'When any 6 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, false],
                [false, false, true, false, true, false, false, false, false],
                [false, false, true, false, false, false, false, true, true],
            ],

            ticket: [
                [6, null, 21, 39, null, null, 64, null, 81],
                [null, 12, 26, null, 40, null, 67, 78, null],
                [null, null, 29, null, 44, 59, null, 79, 82],
            ],
        },
    },

    'Early 7/Jaldi 7': {
        description: 'When any 7 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, true, false, true],
                [true, false, false, true, false, true, false, false, false],
            ],

            ticket: [
                [3, 17, null, null, null, 54, null, 78, 80],
                [null, 19, 23, null, 48, null, 64, null, 81],
                [7, null, 27, 31, null, 59, null, null, 82],
            ],
        },
    },
    'Early 8/Jaldi 8': {
        description: 'When any 8 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, true, false, true, false, true, false, true, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [4, null, 23, null, 45, null, 69, 70, null],
                [null, 12, null, 36, null, 53, null, 74, 85],
                [null, 16, null, 39, null, 55, null, 77, 90],
            ],
        },
    },

    'Early 9/Jaldi 9': {
        description: 'When any 9 numbers are marked',
        ticketDetails: {
            marked: [
                [true, true, false, false, false, false, false, false, true],
                [false, false, false, false, false, true, false, false, true],
                [true, false, false, false, false, true, true, false, true],
            ],

            ticket: [
                [3, 10, null, 33, 42, null, null, null, 81],
                [null, 17, 22, null, null, 56, null, 78, 83],
                [6, null, 25, null, null, 57, 69, null, 90],
            ],
        },
    },
    'Early 10/Jaldi 10': {
        description: 'When any 10 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, true, false, false, false],
                [true, true, false, false, false, false, true, false, true],
                [true, true, false, false, false, false, true, false, true],
            ],

            ticket: [
                [2, null, 24, null, 44, 53, null, 70, null],
                [5, 14, null, null, 49, null, 66, null, 83],
                [7, 18, null, 35, null, null, 68, null, 85],
            ],
        },
    },
    'Early 11/Jaldi 11': {
        description: 'When any 11 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, true, false, false, false, false, false],
                [true, true, false, true, true, false, false, false, false],
                [false, true, true, false, true, false, false, true, true],
            ],

            ticket: [
                [null, 11, null, 32, null, 59, 60, null, 85],
                [3, 13, null, 35, 40, null, 64, null, null],
                [null, 19, 20, null, 43, null, null, 74, 88],
            ],
        },
    },
    'Early 12/Jaldi 12': {
        description: 'When any 12 numbers are marked',
        ticketDetails: {
            marked: [
                [true, true, false, true, true, false, true, false, false],
                [true, false, true, false, false, false, false, false, true],
                [true, false, false, false, true, true, false, true, false],
            ],

            ticket: [
                [2, 16, null, 30, 40, null, 64, null, null],
                [3, null, 27, 31, null, 53, null, null, 81],
                [4, null, null, null, 44, 59, null, 70, 82],
            ],
        },
    },
    'Early 13/Jaldi 13': {
        description: 'When any 13 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, true, false, true, false, false, true, true],
                [true, true, false, false, false, false, true, false, true],
                [false, true, false, true, false, true, true, false, false],
            ],

            ticket: [
                [2, null, 29, null, 49, null, null, 73, 86],
                [3, 14, null, 35, null, null, 64, null, 88],
                [9, 17, null, 39, null, 53, 67, null, null],
            ],
        },
    },
    'Early 14/Jaldi 14': {
        description: 'When any 14 numbers are marked',
        ticketDetails: {
            marked: [
                [true, true, false, true, true, false, false, true, false],
                [false, false, true, true, false, true, false, true, false],
                [false, true, true, false, false, true, true, false, true],
            ],

            ticket: [
                [9, 12, null, 31, 40, null, null, 71, null],
                [null, null, 26, 32, null, 57, null, 78, 85],
                [null, 17, 28, null, null, 59, 64, null, 90],
            ],
        },
    },

    'Hockey Stick': {
        description: 'if all numbers of ticket containing 7 are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [2, null, 22, 33, null, null, 61, 70, null],
                [null, 16, 26, null, 42, null, null, 77, 85],
                [3, 19, null, null, 46, 52, null, 79, null],
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
                [4, null, 25, 30, null, null, 67, null, 83],
                [null, 13, null, 37, 44, null, null, 77, 88],
                [null, 17, 26, null, 49, 55, null, null, 90],
            ],
        },
    },
    'Ugly Duckling': {
        description: 'if all numbers of ticket containing 2 are marked',
        ticketDetails: {
            marked: [
                [true, false, true, false, false, false, false, false, false],
                [false, false, true, false, true, false, false, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [2, null, 22, 33, null, null, 61, 70, 81],
                [null, 16, 26, null, 42, null, null, 77, 85],
                [3, 19, null, null, 46, 52, null, 79, null],
            ],
        },
    },
    'Pyramid': {
        description:
            'if 3rd number of top row, 2nd and 4th numbers of middle row and 1st, 3rd and 5th number of last row are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, false, false],
                [false, false, false, true, false, false, false, true, false],
                [true, false, false, false, true, false, false, false, true],
            ],

            ticket: [
                [null, 12, null, null, 46, 50, null, 72, 84],
                [null, null, 24, 37, null, 59, null, 73, 85],
                [4, 19, null, null, 47, null, 64, null, 90],
            ],
        },
    },

    'Reverse Pyramid': {
        description:
            'if 1st, 3rd and 5th number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, false, true, false, false],
                [false, false, true, false, false, false, true, false, false],
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [5, 15, null, 39, 46, null, 60, null, null],
                [null, 14, 26, null, null, 54, 61, null, 87],
                [null, 19, 27, null, null, 56, null, 77, 90],
            ],
        },
    },
    'Circle': {
        description:
            'if 3rd number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, false, false],
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
    'All Even': {
        description: 'If all even numbers of ticket are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, true],
                [false, true, false, false, true, false, false, true, false],
            ],

            ticket: [
                [5, null, null, 37, null, 51, 67, null, 83],
                [null, 10, null, 39, null, null, 69, null, 90],
                [null, 16, 27, null, 44, null, null, 74, 89],
            ],
        },
    },

    'All Odd': {
        description: 'If all odd numbers of ticket are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, true, false],
                [true, false, false, false, false, false, false, true, false],
                [false, true, true, false, false, true, false, true, false],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
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
                [false, false, false, false, false, true, false, false, false],
            ],

            ticket: [
                [7, null, 23, 38, null, 53, 63, null, null],
                [null, 15, 25, null, 46, null, 65, 72, null],
                [null, null, 28, null, 48, 58, null, 78, 83],
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
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90],
            ],
        },
    },
    'Double Temp.': {
        description: 'If 2 smallest and 2 highest numbers of ticket are marked',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, true],
                [true, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90],
            ],
        },
    },
    'House': {
        description: 'All the numbers on a ticket',
        ticketDetails: {
            marked: [
                [false, true, true, false, true, true, false, true, false],
                [true, true, false, true, false, true, true, false, false],
                [false, false, true, true, false, true, true, false, true],
            ],

            ticket: [
                [null, 14, 22, null, 48, 50, null, 71, null],
                [3, 18, null, 31, null, 51, 63, null, null],
                [null, null, 29, 34, null, 55, 67, null, 81],
            ],
        },
    },

    "I Love You 143": {
        description:
            "if 1st number of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
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

    "We Love You 243": {
        description:
            "if 1st and 2nd numbers of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, true, false, false, false, false, false, false],
                [false, true, false, true, true, false, true, false, false],
                [true, false, false, true, true, false, false, false, false],
            ],

            ticket: [
                [7, null, 27, 31, null, 57, 61, null, null],
                [null, 17, null, 32, 42, null, 63, 74, null],
                [8, null, null, 36, 48, null, null, 79, 89],
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
                [true, true, false, true, true, false, false, false, false],
            ],

            ticket: [
                [null, 12, 21, null, 42, 58, null, 73, null],
                [1, null, 26, null, 44, null, null, 79, 87],
                [7, 17, null, 34, 48, null, 65, null, null],
            ],
        },
    },
    '421': {
        description:
            "if 1st, 2nd , 3rd and 4th  numbers of top row, 1st and 2nd numbers of middle row and 1st number of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, false, true, false, true, false, true, false],
                [true, false, true, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [5, null, null, 39, null, 54, null, 76, 81],
                [8, null, 24, null, 43, null, 64, null, 83],
                [null, 18, 29, null, 47, null, 69, null, 89],
            ],
        },
    },

    '225': {
        description:
            "if 1st and 2nd numbers of the top row, 1st and 2nd numbers of the middle row and 1st, 2nd , 3rd, 4th and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [false, false, true, false, true, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [true, true, false, true, false, true, false, true, false],
            ],

            ticket: [
                [null, null, 29, null, 46, 53, null, 73, 82],
                [1, 15, null, 32, 43, null, 61, null, 86],
                [7, 19, null, 33, null, 59, null, 75, null],
            ],
        },
    },

    '123': {
        description:
            "if 1st number of top row, 1st and 2nd numbers of middle row and 1st, 2nd and 3rd numbers of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, false, true, true, false, false, false, false, false],
                [true, false, true, false, true, false, false, false, false],
            ],

            ticket: [
                [6, 15, null, null, 40, null, 62, 75, null],
                [null, null, 23, 35, null, 52, null, 77, 87],
                [8, null, 24, null, 44, 53, null, null, 88],
            ],
        },
    },
    '333': {
        description: "if 1st, 2nd and 3rd numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [true, true, false, true, false, false, false, false, false],
                [false, true, true, false, false, true, false, false, false],
                [false, true, true, false, false, true, false, false, false],
            ],

            ticket: [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85],
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
                [false, false, false, false, false, true, false, true, true],
                [false, false, false, false, false, true, false, true, false],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [null, null, 25, 36, null, 52, null, 73, 88],
                [3, 15, null, null, 44, 56, null, 75, null],
                [null, 18, 28, null, 45, null, 62, null, 84],
            ],
        },
    },
    '1 Pair (Row)': {
        description: 'If in any row, 1 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, true, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90],
            ],
        },
    },
    '2 Pair (Row)': {
        description: 'If in a ticket, 2 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, true, true, false, true, true, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 10, 29, null, 40, 53, null, null, 81],
                [4, null, null, 31, 46, null, 63, 70, null],
                [7, 15, null, 37, null, null, 67, null, 84],
            ],
        },
    },
    '3 Pair (Row)': {
        description: 'If in a ticket, 3 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, true, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, false, false, false, true, true, false, false, false],
            ],

            ticket: [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90],
            ],
        },
    },
    '4 Pair (Row)': {
        description: 'If in a ticket, 4 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, true, true, false, false, false, false, true, true],
                [false, false, false, false, false, false, false, true, true]
            ],

            ticket: [
                [5, null, 20, null, 47, null, 61, 71, null],
                [null, 14, 21, null, null, 52, null, 75, 87],
                [null, 15, null, 36, null, 53, null, 77, 90],
            ],
        },
    },
    'All Pair (Row)': {
        description: 'If in a ticket, all pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, true, false, false],
                [false, true, true, false, false, false, false, true, true],
                [false, false, false, false, true, true, false, true, true],
            ],

            ticket: [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90],
            ],
        },
    },
    '1 Pair (Column)': {
        description:
            'If in any column, 1 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [1, null, 23, 36, null, null, 62, 71, null],
                [null, 10, 27, null, null, 59, 66, null, 87],
                [null, 14, null, 38, 40, null, 69, 79, null],
            ],
        },
    },
    '2 Pair (Column)': {
        description:
            'If in any column, 2 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, false, false, true, true],
            ],

            ticket: [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90],
            ],
        },
    },

    '3 Pair (Column)': {
        description:
            'If in any column, 3 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, true, false, true, true, false, false, false, false],
                [false, true, false, true, true, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [1, 11, null, 33, 40, null, 63, null, null],
                [null, 12, null, 39, 42, null, null, 75, 87],
                [null, null, 28, null, 48, 55, null, 78, 90],
            ],
        },
    },
    '4 Pair (Column)': {
        description:
            'If in any column, 4 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, true, false, false],
                [true, false, true, true, false, false, true, false, false],
                [true, false, false, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 10, 23, null, 46, null, 60, null, 83],
                [5, null, 26, 30, null, 52, 65, null, null],
                [9, null, null, 38, 47, null, null, 72, 86],
            ],
        },
    },
    'All Pair (Column)': {
        description:
            'If in any column, all pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [true, true, false, false, true, false, false, true, false],
                [true, true, false, false, true, false, false, false, false],
            ],

            ticket: [
                [null, null, 22, 33, null, 53, null, 70, 88],
                [3, 15, null, null, 40, null, 67, 74, null],
                [4, 19, null, 39, 45, null, null, 76, null],
            ],
        },
    },
    'Breakfast': {
        description:
            'All the numbers of 1st, 2nd and 3rd vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [true, false, true, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
            ],

            ticket: [
                [4, null, 21, 33, null, 56, null, 72, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
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
                [1, null, 29, null, 47, null, null, 78, 83],
                [null, 11, null, 30, null, 56, 60, null, 86],
                [null, 17, null, 33, null, 57, 68, null, 88],
            ],
        },
    },
    'Dinner': {
        description:
            'All the numbers of 7th, 8th and 9th vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, true, true],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
            ],
        },
    },
    'Day || Jawani': {
        description: 'When all the number from 1 to 45 are marked.',
        ticketDetails: {
            marked: [
                [true, false, true, true, false, false, false, false, false],
                [false, true, true, false, true, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
            ],

            ticket: [
                [3, null, 23, 39, null, 54, 65, null, null],
                [null, 17, 24, null, 41, null, 69, null, 86],
                [null, 19, 27, null, null, 58, null, 71, 89]
            ],
        },
    },
    'Night || Budhapa': {
        description: 'When all the number from 46 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, true, false, true, false],
                [false, false, false, false, false, true, false, true, true],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
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
                [2, 16, null, null, 40, null, 62, 72, null],
                [5, 19, null, 32, null, 51, null, 75, null],
                [6, null, 24, null, 44, null, 65, null, 88]
            ],
        },
    },
    'Bamboo': {
        description: 'When 3rd number of each line (row) is marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, false, true, false, false, false, false],
            ],

            ticket: [
                [3, null, 20, 30, null, 53, 62, null, null],
                [null, 17, 21, null, 40, null, 68, null, 89],
                [5, null, null, 39, 44, null, 69, 72, null],
            ],
        },
    },
    'First Half': {
        description: 'When 1st, 2nd and 3rd number of each line (row) is marked',
        ticketDetails: {
            marked: [
                [false, true, true, false, true, false, false, false, false],
                [false, true, false, true, true, false, false, false, false],
                [true, false, true, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 12, 22, null, 43, null, null, 76, 83],
                [null, 15, null, 30, 48, null, 62, null, 86],
                [3, null, 26, 36, null, 55, 63, null, null]
            ],
        },
    },
    'Second Half': {
        description: 'When 3rd,4th and 5th number of each line (row) is marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, true, true, false],
                [false, false, false, true, false, true, false, true, false],
                [false, false, false, false, false, true, false, true, true],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
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
                [3, null, 25, 30, null, 57, null, null, 81],
                [7, 16, null, 36, 42, null, null, 76, null],
                [null, 17, 26, null, 44, null, 64, 78, null],
            ],
        },
    },
    'Brahma': {
        description: 'When all the number from 1 to 30 are marked.',
        ticketDetails: {
            marked: [
                [true, false, true, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
            ],
        },
    },
    'Vishnu': {
        description: 'When all the number from 31 to 60 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, true, false, false],
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
    'Mahesh': {
        description: 'When all the number from 61 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, true, true],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
            ],
        },
    },
    'Railway Track': {
        description: 'When all the number of Top Line and Bottom Line are marked.',
        ticketDetails: {
            marked: [
                [true, false, true, false, true, false, true, true, false],
                [false, false, false, false, false, false, false, false, false],
                [false, true, true, false, false, true, false, true, true],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
            ],
        },
    },
    'Drum': {
        description: 'if 2nd,3rd and 4th number of all 3 rows are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, true, false, true, false, false],
                [false, true, false, true, false, true, false, false, false],
                [false, false, true, false, false, true, false, true, false],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
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
                [false, false, false, false, false, false, false, true, true],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
            ],
        },
    },
    'ZAP': {
        description:
            'if 4th and 5th numbers of Top line + 3rd number of middle line + 1st and 2nd numbers of last line are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, true, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
            ],

            ticket: [
                [4, null, 28, null, 43, null, 60, 71, null],
                [9, 10, null, 32, null, 56, null, 75, null],
                [null, 19, 29, null, null, 59, null, 79, 90],
            ],
        },
    },

}
export default dividendDescription1;
