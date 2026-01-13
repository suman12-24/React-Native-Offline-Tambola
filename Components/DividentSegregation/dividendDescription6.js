const dividendDescription6 = {

    "First/Top Line": {
        description: 'All the Numbers of first/top row of a ticket.',
        ticketDetails: {
            marked: [
                [false, true, false, true, false, true, true, false, true],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 18, null, 30, null, 50, 68, null, 83],
                [3, null, 22, null, 40, 51, null, 73, null],
                [null, null, 29, null, 46, 57, null, 76, 86],
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
                [null, 18, null, 37, 42, null, null, 70, 83],
                [1, null, 28, 38, null, 51, 65, null, null],
                [3, null, 29, 39, null, 53, 69, null, null],
            ],
        },
    },

    'Third/Last Line': {
        description: 'All the Numbers of third/last row of a ticket. ',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [true, false, true, true, false, true, false, true, false],
            ],

            ticket: [
                [3, 13, null, 31, , 51, 68, null, null],
                [null, 12, null, null, 44, 52, null, 73, 80],
                [3, null, 24, 39, null, 56, null, 76, null],
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
                [7, null, 20, 33, null, 52, null, 79, null],
                [null, null, 21, 37, null, 55, 63, null, 80],
                [null, 18, null, 38, 43, null, 69, null, 86],
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
                [null, 14, null, 33, null, 53, null, 72, 86],
                [5, 18, null, null, 40, null, 64, 78, null],
                [6, null, 29, 35, null, 58, 69, null, null],
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
                [3, 11, null, 31, null, null, 65, 71, null],
                [null, 12, null, 38, 45, null, null, 75, 82],
                [null, 14, 24, null, 46, 56, null, null, 85],
            ],
        },
    },

    '4 Corners and Center': {
        description: '',
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, true, false, false, false],
                [false, true, false, false, false, false, false, false, true],
            ],

            ticket: [
                [7, null, 20, 33, null, 52, null, 79, null],
                [null, null, 21, 37, null, 55, 63, null, 80],
                [null, 18, null, 38, 43, null, 69, null, 86],
            ],
        },
    },

    'Bulls Eyes': {
        description: 'if 2nd and 4th numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, true, false],
                [false, false, false, true, false, false, false, true, false],
                [false, false, false, true, false, false, true, false, false],
            ],

            ticket: [
                [null, null, 25, null, 44, 50, null, 75, 81],
                [4, null, null, 30, 48, null, null, 77, 83],
                [null, 16, null, 34, null, 53, 64, null, 84],
            ],
        },
    },

    'Twin Lines': {
        description: 'if 1st and 2nd numbers of each line are marked',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, false, true, false, true, false, false, false, false],
            ],

            ticket: [
                [6, null, null, 36, null, 56, 63, null, 82],
                [null, 15, 22, null, 44, null, 68, 71, null],
                [null, null, 27, null, 46, 58, null, null, 89],
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
                [null, 16, 24, null, 48, null, null, 71, 81],
                [4, 14, null, 38, null, null, 62, 79, null],
                [5, 18, null, null, null, 57, 69, null, 82],
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
                [null, 16, 24, null, 48, null, null, 71, 81],
                [4, 14, null, 38, null, null, 62, 79, null],
                [5, 18, null, null, null, 57, 69, null, 82],
            ],
        },
    },

    'Reverse Twin': {
        description: 'if 4th and 5th numbers of each line are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, true, false],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, true, false, true],
            ],

            ticket: [
                [1, 12, null, null, 40, 53, null, 70, null],
                [3, null, null, 35, 43, null, 65, null, 86],
                [6, null, 23, null, null, 59, 66, null, 88],
            ],
        },
    },

    'Early 5/Jaldi 5': {
        description: 'When any 5 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, true, false, false],
                [true, true, false, false, true, false, false, false, false],
            ],

            ticket: [
                [5, 12, null, 34, null, 55, 67, null, null],
                [6, null, 26, 38, null, null, 68, null, 84],
                [7, 17, null, null, 44, null, null, 73, 90],
            ],
        },
    },
    'Early 6/Jaldi 6': {
        description: 'When any 6 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, true, true],
                [true, false, false, true, false, false, true, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [3, null, 24, null, 40, null, null, 73, 81],
                [6, null, 29, 31, null, 55, 66, null, null],
                [8, 13, null, 37, 46, null, 68, null, null],
            ],
        },
    },

    'Early 7/Jaldi 7': {
        description: 'When any 7 numbers are marked',
        ticketDetails: {
            marked: [
                [true, true, false, true, false, false, false, false, false],
                [false, false, true, false, true, false, false, false, false],
                [false, true, false, false, false, false, false, true, false],
            ],

            ticket: [
                [1, 16, null, 35, null, 57, null, null, 81],
                [null, null, 27, null, 44, 58, null, 72, 89],
                [4, 17, null, null, 46, null, 63, 78, null],
            ],
        },
    },

    'Early 8/Jaldi 8': {
        description: 'When any 8 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, false],
                [true, false, false, true, false, false, false, false, true],
                [false, true, true, false, true, false, true, false, false],
            ],

            ticket: [
                [null, 13, null, 30, null, 55, 66, null, 81],
                [2, 18, null, 34, null, null, null, 72, 86],
                [null, 19, 23, null, 41, null, 68, 74, null],
            ],
        },
    },

    'Early 9/Jaldi 9': {
        description: 'When any 9 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, true, true],
                [false, false, true, false, false, true, true, false, false],
                [false, false, true, false, false, false, true, false, true],
            ],

            ticket: [
                [null, null, 20, null, 40, 51, null, 79, 81],
                [5, null, 21, 38, null, 59, 62, null, null],
                [null, 16, 28, null, 42, null, 66, null, 87],
            ],
        },
    },

    'Early 10/Jaldi 10': {
        description: 'When any 10 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, true, true, false, true, false, true, false],
                [false, false, true, false, true, false, false, false, true],
                [false, true, true, false, false, true, false, false, false],
            ],

            ticket: [
                [4, null, 24, 34, null, 53, null, 77, null],
                [null, 12, 27, null, 48, null, 61, null, 80],
                [null, 16, 28, null, null, 57, 65, null, 88],
            ],
        },
    },

    'Early 11/Jaldi 11': {
        description: 'When any 11 numbers are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, true, true],
                [false, true, false, true, false, false, false, true, true],
                [true, false, true, false, false, false, true, false, true],
            ],

            ticket: [
                [3, null, 27, null, 40, null, null, 73, 85],
                [null, 15, null, 33, null, 54, null, 78, 87],
                [7, null, 28, 36, null, null, 60, null, 90],
            ],
        },
    },
    'Early 12/Jaldi 12': {
        description: 'When any 12 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, true, false, true, false],
                [true, false, false, true, false, false, false, true, false],
                [false, false, true, true, false, true, false, true, true],
            ],

            ticket: [
                [null, 10, 22, null, 48, 50, null, 73, null],
                [8, 12, null, 31, null, null, 61, 74, null],
                [null, null, 29, 33, null, 59, null, 77, 87],
            ],
        },
    },
    'Early 13/Jaldi 13': {
        description: 'When any 13 numbers are marked',
        ticketDetails: {
            marked: [
                [false, true, true, false, false, true, false, true, false],
                [true, false, false, true, true, false, false, false, true],
                [true, false, true, false, true, false, true, false, true],
            ],

            ticket: [
                [null, 16, 22, null, 40, 56, null, 70, null],
                [5, null, null, 35, 43, null, null, 74, 83],
                [8, null, 27, null, 47, null, 65, null, 87],
            ],
        },
    },
    'Early 14/Jaldi 14': {
        description: 'When any 14 numbers are marked',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, true, true, false, true],
                [false, true, false, false, true, true, false, false, true],
                [false, true, true, false, true, true, false, true, false],
            ],

            ticket: [
                [9, null, null, 38, null, 51, 69, null, 85],
                [null, 15, 22, null, 45, 55, null, null, 90],
                [null, 18, 27, null, 47, 58, null, 79, null],
            ],
        },
    },

    'Hockey Stick': {
        description: 'if all numbers of ticket containing 7 are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, 13, null, 32, null, null, null, 79, 84],
                [5, 16, null, 38, 44, null, 61, null, null],
                [null, 17, 20, null, 46, 53, null, null, 86],
            ],
        },
    },

    'Fat Lady': {
        description: 'if all numbers of ticket containing 8 are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [2, null, 20, null, 41, null, 63, 70, null],
                [6, null, 29, 33, null, 52, null, 71, null],
                [null, 11, null, null, 42, 56, null, 76, 89],
            ],
        },
    },
    'Ugly Duckling': {
        description: 'if all numbers of ticket containing 2 are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, false],
                [false, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [3, null, 20, 30, null, 58, null, null, 82],
                [5, 16, null, null, 49, null, 63, 70, null],
                [6, null, 21, 35, null, null, 67, 75, null],
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
                [false, true, false, false, false, true, false, false, true],
                [false, false, false, false, true, false, false, true, false],
                [false, false, false, true, false, false, false, false, false],
            ],

            ticket: [
                [null, 10, null, 33, null, 52, null, 71, 84],
                [null, null, 24, null, 42, 53, null, 74, 86],
                [9, 11, null, 34, null, 57, 64, null, null],
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
                [true, true, false, false, false, true, false, false, false],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, true, false, false, false, false, false],
            ],

            ticket: [
                [2, 14, null, null, 43, 52, null, 75, null],
                [null, 19, 21, null, 47, null, 61, null, 88],
                [5, null, null, 36, 49, null, null, 77, 85],
            ],
        },
    },
    'All Odd': {
        description: 'If all odd numbers of ticket are marked.',
        ticketDetails: {
            marked: [
                [false, true, false, false, true, false, false, false, false],
                [true, false, false, false, false, true, false, false, false],
                [false, false, false, false, false, false, true, false, false],
            ],

            ticket: [
                [null, 13, 20, null, 41, null, null, 70, 84],
                [7, 14, null, null, 42, 51, null, null, 88],
                [8, null, 26, 34, null, 58, 65, null, null],
            ],
        },
    },
    'Plus': {
        description:
            'If 3rd number of all 3 rows and 2nd and 4th numbers of middle row are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, true, true, false, true, false, false],
                [false, false, false, true, false, false, false, false, false],
            ],

            ticket: [
                [9, 13, null, 31, 41, null, 60, 74, null],
                [null, 14, null, 34, 48, null, 69, null, 81],
                [null, 16, 27, 36, null, 59, null, null, 89],
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
                [3, 10, null, 35, null, 52, 64, null, null],
                [null, null, 21, null, 40, 55, null, 76, 80],
                [null, 11, 22, null, 45, null, null, 77, 84],
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
                [null, null, 20, null, 41, 52, null, null, 86],
                [null, 11, 21, null, null, 58, 62, null, 90],
                [3, 12, null, 31, 48, null, 63, null, null],
            ],
        },
    },
    'House': {
        description: 'All the numbers on a ticket',
        ticketDetails: {
            marked: [
                [true, true, false, true, true, false, false, true, false],
                [false, true, true, false, false, true, true, false, true],
                [false, true, true, false, false, true, true, false, true],
            ],

            ticket: [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85],
            ],
        },
    },
    'I Love You 143': {
        description:
            "if 1st number of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [false, true, false, true, true, false, true, false, false],
                [false, true, false, true, true, false, false, false, false],
            ],

            ticket: [
                [1, null, 26, 30, null, 58, null, 71, null],
                [null, 13, null, 35, 40, null, 61, 73, null],
                [null, 17, null, 38, 44, null, 62, null, 82],
            ],
        },
    },
    'We Love You 243': {
        description:
            "if 1st and 2nd numbers of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, true, false, false, false, false, false, false],
                [true, true, false, true, true, false, false, false, false],
                [true, true, false, false, true, false, false, false, false],
            ],

            ticket: [
                [null, 10, 24, null, null, 56, null, 79, 84],
                [6, 14, null, 35, 40, null, 62, null, null],
                [7, 18, null, null, 45, null, 67, null, 87],
            ],
        },
    },
    '124': {
        description:
            "if 1st number of top row, 1st and 2nd numbers of middle row and 1st, 2nd ,3rd and 4th numbers of last row are marked.",
        ticketDetails: {
            marked: [
                [true, false, false, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [true, true, true, false, true, false, false, false, false],
            ],

            ticket: [
                [2, null, 25, 38, null, 51, 63, null, null],
                [5, 14, null, 39, 45, null, null, 77, 80],
                [9, 18, 29, null, 47, 58, null, null, 88],
            ],
        },
    },
    '421': {
        description:
            "if 1st, 2nd , 3rd and 4th  numbers of top row, 1st and 2nd numbers of middle row and 1st number of last row are marked.",
        ticketDetails: {
            marked: [
                [false, true, true, false, true, false, true, false, false],
                [false, true, false, true, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 15, 21, null, 43, null, 62, null, 83],
                [null, 16, null, 34, null, 55, null, 76, null],
                [9, null, 28, null, 49, 57, null, 76, 85],
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
                [true, false, true, false, true, false, true, false, true],
            ],

            ticket: [
                [null, null, 21, 35, 41, null, 62, null, 85],
                [6, 15, null, null, 44, 50, null, null, 86],
                [8, null, 27, null, 46, null, 64, null, 90],
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
                [null, 12, null, 35, null, 55, 60, null, 80],
                [6, 19, 22, null, 41, null, null, 79, null],
                [9, null, 28, null, 48, null, 66, null, 85],
            ],
        },
    },
    '333': {
        description: "if 1st, 2nd and 3rd numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [true, false, true, true, false, false, false, false, false],
                [false, true, false, false, true, true, false, false, false],
                [false, true, true, false, true, false, false, false, false],
            ],

            ticket: [
                [9, null, 21, 30, null, null, 63, 76, null],
                [null, 12, null, null, 40, 52, null, 78, 82],
                [null, 16, 23, null, 44, null, null, 79, 88],
            ],
        },
    },

    '4 2 ka 1(Reverse)': {
        description:
            "if 2nd , 3rd ,4th and 5th numbers of the top row, 4th and 5th numbers of middle row and 5th number of the last row are marked.",
        ticketDetails: {
            marked: [
                [false, false, true, false, true, false, true, false, true],
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [null, 11, 20, null, 45, null, 68, null, 87],
                [8, null, 22, null, null, 53, null, 78, 89],
                [9, null, 25, 38, null, 54, null, 79, null],
            ],
        },
    },
    '333 (reverse)': {
        description: "if 3rd,4th and 5th numbers of all lines are marked",
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, true, false, true],
                [false, false, false, false, true, true, false, false, true],
                [false, false, false, false, true, false, false, true, true],
            ],

            ticket: [
                [8, null, null, 34, null, 53, 61, null, 83],
                [9, null, 26, null, 40, 58, null, null, 84],
                [null, 11, null, 35, 43, null, null, 78, 87],
            ],
        },
    },
    '3 2 ka 1(Reverse)': {
        description:
            "if 3rd,4th and 5th numbers of top row, 4th and 5th numbers of middle row and 5th number of last row marked",
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, true, false, true],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, true, false],
            ],

            ticket: [
                [3, null, 20, 36, null, null, 62, null, 83],
                [5, null, 27, 39, null, null, 63, null, 84],
                [7, 12, null, null, 47, 58, null, 71, null],
            ],
        },
    },
    '1 Pair (Row)': {
        description: 'If in any row, 1 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, true, true, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [2, null, null, 30, 43, null, 60, 70, null],
                [6, null, 29, null, null, 54, 61, null, 80],
                [7, 12, null, null, null, 59, null, 72, 88],
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
                [null, null, 23, null, 44, 51, null, 71, 87],
                [8, null, 26, 37, null, null, 60, 72, null],
                [9, 12, null, null, 48, null, 69, 74, null],
            ],
        },
    },
    '3 Pair (Row)': {
        description: 'If in a ticket, 3 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, true, true, false, false, false, false],
                [false, false, false, false, false, true, true, false, false],
            ],

            ticket: [
                [4, null, null, 33, null, 52, null, 70, 86],
                [null, 13, null, 35, 42, null, 63, 71, null],
                [null, 19, null, 37, null, 59, 61, null, 82],
            ],
        },
    },
    '4 Pair (Row)': {
        description: 'If in a ticket, 4 pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, true, true, false, false, false, true, true],
                [false, false, false, false, true, true, false, false, false],
                [false, false, false, false, false, false, true, true, false],
            ],

            ticket: [
                [null, null, 20, 31, null, 55, null, 71, 81],
                [1, null, null, null, 43, 58, null, 72, 90],
                [null, 10, null, 32, 49, null, 62, 78, null],
            ],
        },
    },
    'All Pair (Row)': {
        description: 'If in a ticket, all pair of 2 numbers together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, true, false, false],
                [false, false, true, true, false, false, false, true, true],
                [false, true, true, false, false, false, false, true, true],
            ],

            ticket: [
                [6, null, null, 32, null, 55, 69, null, 85],
                [null, null, 25, 35, null, 58, null, 74, 88],
                [null, 12, 29, null, 42, null, null, 75, 89],
            ],
        },
    },
    '1 Pair (Column)': {
        description:
            'If in any column, 1 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, 10, 23, null, 46, null, 60, 74, null],
                [2, null, 24, null, null, 51, null, 79, 90],
                [8, null, 28, 39, null, 52, 63, null, null],
            ],
        },
    },
    '2 Pair (Column)': {
        description:
            'If in any column, 2 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, false, false, false],
                [false, false, true, false, true, false, false, false, false],
                [false, false, false, false, true, false, false, false, false],
            ],

            ticket: [
                [1, null, 20, null, null, 57, 61, null, 81],
                [null, null, 26, null, 46, 59, null, 75, 82],
                [null, 17, null, 36, 48, null, null, 76, 85],
            ],
        },
    },

    '3 Pair (Column)': {
        description:
            'If in any column, 3 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, false],
                [true, false, true, false, false, false, true, false, false],
                [true, false, true, false, false, false, false, false, false],
            ],

            ticket: [
                [1, 15, null, null, 42, null, 63, null, 89],
                [3, null, 21, 33, null, null, 68, 74, null],
                [4, null, 26, null, 49, 50, null, 77, null],
            ],
        },
    },
    '4 Pair (Column)': {
        description:
            'If in any column, 4 pair of 2 numbers vertically together are marked',
        ticketDetails: {
            marked: [
                [true, false, false, true, false, false, false, false, false],
                [true, false, true, true, false, false, false, false, true],
                [false, false, true, false, false, false, false, false, true],
            ],

            ticket: [
                [4, 10, null, 32, null, null, 62, 78, null],
                [9, null, 22, 37, null, 59, null, null, 86],
                [null, 18, 28, null, 40, null, 68, null, 87],
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
                [null, 15, null, null, 40, null, 62, 74, null],
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
                [true, false, true, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [9, null, 21, null, 47, 50, null, 76, null],
                [null, 11, null, 30, null, 51, 62, null, 81],
                [null, 12, null, 36, null, 59, 69, null, 90],
            ],
        },
    },
    'Lunch': {
        description:
            'All the numbers of 4th, 5th and 6th vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, true, true, false, false, false],
                [false, false, false, true, false, true, false, false, false],
            ],

            ticket: [
                [8, 14, null, 37, null, null, 68, 75, null],
                [null, null, 24, null, 40, 50, null, 77, 80],
                [null, null, 28, 38, null, 53, null, 78, 83],
            ],
        },
    },
    'Dinner': {
        description:
            'All the numbers of 7th, 8th and 9th vertical lines (Columns) are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [1, null, 20, null, 42, null, 60, 74, null],
                [6, null, 22, 30, null, 58, null, null, 80],
                [8, 14, null, 37, 43, null, null, null, 90],
            ],
        },
    },
    'Day || Jawani': {
        description: 'When all the number from 1 to 45 are marked.',
        ticketDetails: {
            marked: [
                [false, false, true, true, false, false, false, false, false],
                [true, false, true, false, true, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, null, 26, 38, null, 54, null, 74, 81],
                [1, null, 28, null, 45, null, 62, null, 85],
                [2, 17, null, null, 47, 59, null, null, 88],
            ],
        },
    },
    'Night || Budhapa': {
        description: 'When all the number from 46 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, true, false, false, true],
                [false, false, false, false, false, true, false, false, true],
            ],

            ticket: [
                [3, 14, null, 35, null, null, 69, 71, null],
                [null, 16, 20, null, 43, 52, null, null, 87],
                [null, 17, 26, null, 45, 57, null, null, 89],
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
                [null, 16, null, null, 40, 50, null, 70, 81],
                [3, null, 28, null, 45, null, 61, null, 86],
                [8, null, null, 32, 47, null, 69, 71, null],
            ],
        },
    },
    'Bamboo': {
        description: 'When 3rd number of each line (row) is marked',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, true, false, false, false],
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, true, false, false, false, false],
            ],

            ticket: [
                [null, null, 21, 36, null, 59, 61, null, 82],
                [6, 10, null, 38, 43, null, 65, null, null],
                [null, 10, 23, null, 48, null, 68, 72, null],
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
                [6, 18, null, 31, null, null, 62, 72, null],
                [null, 19, 22, null, 43, 53, null, 74, null],
                [null, null, 28, 37, null, 58, null, 76, 80],
            ],
        },
    },
    'Second Half': {
        description: 'When 3rd,4th and 5th number of each line (row) is marked',
        ticketDetails: {
            marked: [

                [false, false, false, true, false, true, false, false, true],
                [false, false, false, false, true, false, true, false, true],
                [false, false, false, false, true, false, true, true, false],
            ],

            ticket: [
                [6, null, 20, 34, null, 51, null, null, 83],
                [null, 11, 27, null, 43, null, 61, null, 90],
                [null, 18, null, 37, 44, null, 68, 72, null]

            ],
        },
    },
    'Shehnai Bidaai': {
        description:
            'If first 3 numbers of Top row and last 3 numbers of last row are marked.',
        ticketDetails: {
            marked: [
                [true, false, false, true, true, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, true, true, false, true, false],
            ],

            ticket: [
                [7, null, null, 34, 40, null, 61, null, 86],
                [null, 12, 23, null, 42, null, 66, 74, null],
                [null, 16, 25, null, 45, 55, null, 78, null],
            ],
        },
    },
    'Brahma': {
        description: 'When all the number from 1 to 30 are marked.',
        ticketDetails: {
            marked: [
                [false, false, true, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
            ],

            ticket: [
                [null, null, 27, 31, null, 52, 60, null, 80],
                [2, null, null, 32, null, 54, 65, null, 88],
                [5, 17, null, null, 49, 56, null, 77, null],
            ],
        },
    },
    'Vishnu': {
        description: 'When all the number from 31 to 60 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, true, true, false, false, false],
                [false, false, false, true, true, false, false, false, false],
                [false, false, false, true, true, false, false, false, false],
            ],

            ticket: [
                [null, null, 27, null, 40, 55, null, 75, 84],
                [1, 16, null, 33, 44, null, 63, null, null],
                [7, null, null, 36, 45, null, 65, null, 88],
            ],
        },
    },
    'Mahesh': {
        description: 'When all the number from 61 to 90 are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            ticket: [
                [1, null, 28, 34, null, null, null, 75, 80],
                [null, 12, 29, null, 42, null, 66, null, 86],
                [9, 14, null, null, 47, 50, null, null, 90],
            ],
        },
    },
    'Railway Track': {
        description: 'When all the number of Top Line and Bottom Line are marked.',
        ticketDetails: {
            marked: [
                [false, true, false, true, true, false, true, true, false],
                [false, false, false, false, false, false, false, false, false],
                [false, true, false, true, false, true, true, false, true],
            ],

            ticket: [
                [null, 15, null, 35, 40, null, 60, 71, null],
                [3, null, 26, null, 46, 52, null, null, 83],
                [null, 16, null, 36, null, 57, 62, null, 90],
            ],
        },
    },
    'Drum': {
        description: 'if 2nd,3rd and 4th number of all 3 rows are marked',
        ticketDetails: {
            marked: [
                [false, true, false, true, false, false, true, false, false],
                [false, false, false, false, true, true, false, true, false],
                [false, false, false, false, true, true, false, true, false],
            ],
            ticket: [
                [9, 14, null, 36, null, null, 62, 72, null],
                [null, 16, null, null, 48, 56, null, 74, 81],
                [null, null, 21, null, 49, 57, null, 77, 82],
            ],
        },
    },
    'ZIP': {
        description:
            'if 1st and 2nd numbers of Top line + 3rd number of middle line + 4th and 5th numbers of last line are marked.',
        ticketDetails: {
            marked: [
                [false, false, true, false, true, false, false, false, false],
                [false, false, false, false, false, true, false, false, false],
                [false, false, false, false, false, true, true, false, false],
            ],

            ticket: [
                [null, null, 28, null, 46, 53, null, 74, 82],
                [null, 13, null, 36, null, 56, 65, null, 88],
                [3, null, 29, 39, null, 57, 66, null, null],
            ],
        },
    },

    'ZAP': {
        description:
            'if 4th and 5th numbers of Top line + 3rd number of middle line + 1st and 2nd numbers of last line are marked.',
        ticketDetails: {
            marked: [
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, true, false, false, false, false],
                [true, false, true, false, false, false, false, false, false],
            ],
            ticket: [
                [null, 10, null, 31, null, 51, 62, null, 80],
                [2, null, 22, null, 46, 55, null, 73, null],
                [9, null, 23, 38, null, 56, null, 75, null],
            ],
        },
    },

}
export default dividendDescription6;
