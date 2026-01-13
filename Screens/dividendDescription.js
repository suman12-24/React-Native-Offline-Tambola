const dividendDescription = {
    //Row/Line
    "First/Top Line": {
        description: "All the Numbers of first/top row of a ticket.",
        ticketDetails: {
            "marked": [
                [true, false, true, true, false, true, false, true, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false]
            ],

            "ticket": [
                [8, null, 21, 34, null, 51, null, 76, null],
                [null, 10, 22, null, 44, 55, null, null, 86],
                [null, 14, null, 33, 46, null, 66, null, 89]
            ]
        }
    },
    "Second/Middle Line": {
        description: "All the Numbers of second/middle row of a ticket.",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, false, false, false],
                [false, true, true, false, true, true, false, false, true],
                [false, false, false, false, false, false, false, false, false]
            ],

            "ticket": [
                [8, null, 21, 34, null, 51, null, 76, null],
                [null, 10, 22, null, 44, 55, null, null, 86],
                [null, 14, null, 33, 46, null, 66, null, 89]
            ]
        }
    },
    "Third/Last Line": {
        description: "All the Numbers of third/last row of a ticket. ",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, true, true, false, false, true, true, false, true]
            ],

            "ticket": [
                [8, null, 21, 34, null, 51, null, 76, null],
                [null, 10, 22, null, 44, 55, null, null, 86],
                [null, 17, 26, null, null, 56, 65, null, 89]
            ]
        }
    },
    "4 Corners": {
        description: "First and last numbers of top and and bottom rows",
        ticketDetails: {
            "marked": [
                [false, true, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, true, false]
            ],

            "ticket": [
                [null, 11, 20, null, null, 50, 64, null, 82],
                [9, 14, null, 33, 45, null, 68, null, null],
                [null, 18, 28, null, 49, 51, null, 70, null]
            ]
        }
    },
    "Queen Corners": {
        description: "when first number of each row is marked",
        ticketDetails: {
            "marked": [
                [false, true, false, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false]
            ],

            "ticket": [
                [null, 11, 20, null, null, 50, 64, null, 82],
                [9, 14, null, 33, 45, null, 68, null, null],
                [null, 18, 28, null, 49, 51, null, 70, null]
            ]
        }
    },
    "King Corners": {
        description: "when last number of each row is marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, true, false]
            ],

            "ticket": [
                [null, 11, 20, null, null, 50, 64, null, 87],
                [9, null, null, 33, 45, null, 68, 73, null],
                [null, 18, 28, null, 49, 51, null, 79, null]
            ]
        }
    },
    "4 Corners and Center": {
        description: "",
        ticketDetails: {
            "marked": [
                [true, false, false, false, false, false, false, false, true],
                [false, false, false, true, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, true]
            ],

            "ticket": [
                [1, null, 22, null, 42, null, 68, null, 82],
                [3, 10, null, 31, null, 53, null, 78, null],
                [8, 19, null, 37, null, 55, null, null, 84]
            ]
        }
    },
    "Bulls Eyes": {
        description: "if 2nd and 4th numbers of each line are marked",
        ticketDetails: {
            "marked": [
                [false, false, true, false, false, false, true, false, false],
                [false, false, false, true, false, false, true, false, false],
                [false, false, false, true, false, false, false, true, false]
            ],

            "ticket": [
                [null, 12, 26, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87]
            ]
        }
    },
    "Twin Lines": {
        description: "if 1st and 2nd numbers of each line are marked",
        ticketDetails: {
            "marked": [
                [false, true, true, false, false, false, false, false, false],
                [true, false, false, true, false, false, false, false, false],
                [true, false, false, true, false, false, false, false, false]
            ],

            "ticket": [
                [null, 12, 26, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87]
            ]
        }
    },
    "6 Corners": {
        description: "First and last numbers of each line are marked",
        ticketDetails: {
            "marked": [
                [false, true, false, false, false, false, false, true, false],
                [true, false, false, false, false, false, false, false, true],
                [true, false, false, false, false, false, false, false, true]
            ],

            "ticket": [
                [null, 12, 26, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87]
            ]
        }
    },
    "6 Corners and Center": {
        description: "First and last number of each row is marked and 3rd number middle row is marked.",
        ticketDetails: {
            "marked": [
                [false, true, false, false, false, false, false, true, false],
                [true, false, false, false, false, true, false, false, true],
                [true, false, false, false, false, false, false, false, true]
            ],

            "ticket": [
                [null, 12, 26, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87]
            ]
        }
    },
    "Reverse Twin": {
        description: "if 4th and 5th numbers of each line are marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, true, true]
            ],

            "ticket": [
                [null, 12, 26, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87]
            ]
        }
    },
    //Early Devedent Section
    "Early 5/Jaldi 5": {
        description: "When any 5 numbers are marked",
        ticketDetails: {
            "marked": [
                [false, true, false, false, false, false, false, false, false],
                [false, false, false, true, false, true, false, false, false],
                [false, false, false, true, false, false, false, false, true]
            ],

            "ticket": [
                [null, 12, 26, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87]
            ]
        }
    },
    "Early 6/Jaldi 6": {
        description: "When any 6 numbers are marked",
        ticketDetails: {
            "marked": [
                [false, false, true, false, false, false, false, true, false],
                [true, false, false, false, false, false, true, false, false],
                [false, false, false, true, true, false, false, false, false]
            ],

            "ticket": [
                [null, 12, 26, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87]
            ]
        }
    },
    "Early 7/Jaldi 7": {
        description: "When any 7 numbers are marked",
        ticketDetails: {
            "marked": [
                [false, true, true, false, false, false, false, false, false],
                [true, false, false, false, false, false, false, false, true],
                [true, false, false, true, true, false, false, false, false]
            ],

            "ticket": [
                [null, 12, 26, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87]
            ]
        }
    },
    "Early 8/Jaldi 8": {
        description: "When any 8 numbers are marked",
        ticketDetails: {
            "marked": [
                [false, true, false, false, false, false, true, true, false],
                [false, false, false, true, false, true, false, false, true],
                [false, false, false, true, false, false, false, false, true]
            ],

            "ticket": [
                [null, 12, 26, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87]
            ]
        }
    },
    "Early 9/Jaldi 9": {
        description: "When any 9 numbers are marked",
        ticketDetails: {
            "marked": [
                [true, true, false, false, false, false, false, true, false],
                [true, false, false, false, false, true, true, false, true],
                [false, false, false, true, false, false, false, false, true]
            ],

            "ticket": [
                [2, 12, null, null, 42, null, 65, 72, null],
                [3, null, null, 32, null, 56, 67, null, 83],
                [7, null, null, 36, 49, null, null, 77, 87]
            ]
        }
    },
    "Early 10/Jaldi 10": {
        description: "When any 10 numbers are marked",
        ticketDetails: {
            "marked": [
                [true, false, false, true, false, true, true, false, true],
                [false, true, false, false, false, false, false, false, true],
                [false, true, true, false, false, true, false, false, false]
            ],

            "ticket": [
                [6, null, null, 37, null, 50, 69, null, 83],
                [null, 11, 20, null, 45, 53, null, null, 90],
                [null, 14, 26, null, 46, 54, null, 78, null]
            ]
        }
    },
    "Early 11/Jaldi 11": {
        description: "When any 11 numbers are marked",
        ticketDetails: {
            "marked": [
                [true, false, false, true, false, false, false, false, true],
                [false, true, true, false, true, false, false, false, true],
                [false, true, true, false, false, true, false, true, false]
            ],

            "ticket": [
                [6, null, null, 37, null, 50, 69, null, 83],
                [null, 11, 20, null, 45, 53, null, null, 90],
                [null, 14, 26, null, 46, 54, null, 78, null]
            ]
        }
    },
    "Early 12/Jaldi 12": {
        description: "When any 12 numbers are marked",
        ticketDetails: {
            "marked": [
                [true, false, false, true, false, false, true, false, true],
                [false, false, true, false, true, true, false, false, true],
                [false, true, true, false, true, true, false, false, false]
            ],

            "ticket": [
                [6, null, null, 37, null, 50, 69, null, 83],
                [null, 11, 20, null, 45, 53, null, null, 90],
                [null, 14, 26, null, 46, 54, null, 78, null]
            ]
        }
    },
    "Early 13/Jaldi 13": {
        description: "When any 13 numbers are marked",
        ticketDetails: {
            "marked": [
                [true, false, false, true, false, true, true, false, true],
                [false, false, true, false, true, true, false, false, true],
                [false, true, true, false, true, true, false, false, false]
            ],

            "ticket": [
                [6, null, null, 37, null, 50, 69, null, 83],
                [null, 11, 20, null, 45, 53, null, null, 90],
                [null, 14, 26, null, 46, 54, null, 78, null]
            ]
        }
    },
    "Early 14/Jaldi 14": {
        description: "When any 14 numbers are marked",
        ticketDetails: {
            "marked": [
                [true, false, false, true, false, false, true, false, true],
                [false, true, true, false, true, true, false, false, true],
                [false, true, true, false, true, true, false, true, false]
            ],

            "ticket": [
                [6, null, null, 37, null, 50, 69, null, 83],
                [null, 11, 20, null, 45, 53, null, null, 90],
                [null, 14, 26, null, 46, 54, null, 78, null]
            ]
        }
    },

    //All Number Start and End With
    "Hockey Stick": {
        description: "if all numbers of ticket containing 7 are marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, true, false]
            ],

            "ticket": [
                [2, null, 22, 33, null, null, 61, 70, null],
                [null, 16, 26, null, 42, null, null, 77, 85],
                [3, 19, null, null, 46, 52, null, 79, null]
            ]
        }
    },
    "Fat Lady": {
        description: "if all numbers of ticket containing 8 are marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, false]
            ],

            "ticket": [
                [2, null, 22, 33, null, null, 61, 70, 81],
                [null, 16, 26, null, 42, null, null, 77, 85],
                [3, 19, null, null, 46, 52, null, 79, null]
            ]
        }
    },
    "Ugly Duckling": {
        description: "if all numbers of ticket containing 2 are marked",
        ticketDetails: {
            "marked": [
                [true, false, true, false, false, false, false, false, false],
                [false, false, true, false, true, false, false, false, false],
                [false, false, false, false, false, true, false, false, false]
            ],

            "ticket": [
                [2, null, 22, 33, null, null, 61, 70, 81],
                [null, 16, 26, null, 42, null, null, 77, 85],
                [3, 19, null, null, 46, 52, null, 79, null]
            ]
        }
    },
    //Special Number
    "I Love You 143": {
        description: "if 1st number of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            "marked": [
                [true, false, false, false, false, false, false, false, false],
                [false, true, true, false, false, true, true, false, false],
                [false, true, true, false, false, true, false, false, false]
            ],

            "ticket": [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85]
            ]
        }
    },
    "I Love You 143": {
        description: "if 1st number of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            "marked": [
                [true, false, false, false, false, false, false, false, false],
                [false, true, true, false, false, true, true, false, false],
                [false, true, true, false, false, true, false, false, false]
            ],

            "ticket": [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85]
            ]
        }
    },
    "We Love You 243": {
        description: "if 1st and 2nd numbers of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            "marked": [
                [true, true, false, false, false, false, false, false, false],
                [false, true, true, false, false, true, true, false, false],
                [false, true, true, false, false, true, false, false, false]
            ],

            "ticket": [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85]
            ]
        }
    },
    "We Love You 243": {
        description: "if 1st and 2nd numbers of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
        ticketDetails: {
            "marked": [
                [true, true, false, false, false, false, false, false, false],
                [false, true, true, false, false, true, true, false, false],
                [false, true, true, false, false, true, false, false, false]
            ],

            "ticket": [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85]
            ]
        }
    },
    "124": {
        description: "if 1st number of top row, 1st and 2nd numbers of middle row and 1st, 2nd ,3rd and 4th numbers of last row are marked.",
        ticketDetails: {
            "marked": [
                [true, false, false, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, true, true, false, false, true, true, false, false]
            ],

            "ticket": [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85]
            ]
        }
    },
    "421": {
        description: "if 1st, 2nd , 3rd and 4th  numbers of top row, 1st and 2nd numbers of middle row and 1st number of last row are marked.",
        ticketDetails: {
            "marked": [
                [true, true, false, true, true, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, true, false, false, false, false, false, false, false],
            ],

            "ticket": [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85]
            ]
        }
    },
    "225": {
        description: "if 1st and 2nd numbers of the top row, 1st and 2nd numbers of the middle row and 1st, 2nd , 3rd, 4th and 5th number of the last row are marked.",
        ticketDetails: {
            "marked": [
                [true, true, false, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, true, true, false, false, true, true, false, true],
            ],

            "ticket": [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85]
            ]
        }
    },
    "123": {
        description: "if 1st number of top row, 1st and 2nd numbers of middle row and 1st, 2nd and 3rd numbers of last row are marked.",
        ticketDetails: {
            "marked": [
                [true, false, false, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, true, true, false, false, true, false, false, false]
            ],

            "ticket": [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85]
            ]
        }
    },
    "333": {
        description: "if 1st, 2nd and 3rd numbers of all lines are marked",
        ticketDetails: {
            "marked": [
                [true, true, false, true, false, false, false, false, false],
                [false, true, true, false, false, true, false, false, false],
                [false, true, true, false, false, true, false, false, false]
            ],

            "ticket": [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85]
            ]
        }
    },
    "4 2 ka 1(Reverse)": {
        description: "if 2nd , 3rd ,4th and 5th numbers of the top row, 4th and 5th numbers of middle row and 5th number of the last row are marked.",
        ticketDetails: {
            "marked": [
                [false, true, false, true, true, false, false, true, false],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, false, true],
            ],

            "ticket": [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85]
            ]
        }
    },

    "333 (reverse)": {
        description: "if 3rd,4th and 5th numbers of all lines are marked",
        ticketDetails: {
            "marked": [
                [false, false, false, true, true, false, false, true, false],
                [false, false, false, false, false, true, true, false, true],
                [false, false, false, false, false, true, true, false, true]
            ],

            "ticket": [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85]
            ]
        }
    },
    "3 2 ka 1(Reverse)": {
        description: "if 3rd,4th and 5th numbers of top row, 4th and 5th numbers of middle row and 5th number of last row marked",
        ticketDetails: {
            "marked": [
                [false, false, false, true, true, false, false, true, false],
                [false, false, false, false, false, false, true, false, true],
                [false, false, false, false, false, false, false, false, true]
            ],

            "ticket": [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85]
            ]
        }
    },
    //Full House
    "House": {
        description: "All the numbers on a ticket",
        ticketDetails: {
            "marked": [
                [true, true, false, true, true, false, false, true, false],
                [false, true, true, false, false, true, true, false, true],
                [false, true, true, false, false, true, true, false, true]
            ],

            "ticket": [
                [2, 10, null, 38, 47, null, null, 73, null],
                [null, 13, 20, null, null, 50, 62, null, 84],
                [null, 19, 24, null, null, 53, 64, null, 85]
            ]
        }
    },
    //Min-Max/Temperature/Bp
    "Temp./ BP": {
        description: "If smallest and highest number of ticket are marked",
        ticketDetails: {
            "marked": [
                [true, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, true]
            ],

            "ticket": [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90]
            ]
        }
    },
    "Double Temp.": {
        description: "If 2 smallest and 2 highest numbers of ticket are marked",
        ticketDetails: {
            "marked": [
                [true, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, true],
                [true, false, false, false, false, false, false, false, true]
            ],

            "ticket": [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90]
            ]
        }
    },
    //Pairs
    "1 Pair (Row)": {
        description: "If in any row, 1 pair of 2 numbers together are marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, true, true, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false]
            ],

            "ticket": [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90]
            ]
        }
    },
    "2 Pair (Row)": {
        description: "If in a ticket, 2 pair of 2 numbers together are marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, true, true, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false]
            ],

            "ticket": [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90]
            ]
        }
    },
    "3 Pair (Row)": {
        description: "If in a ticket, 3 pair of 2 numbers together are marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, true, true, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, false, false, false, true, true, false, false, false]
            ],

            "ticket": [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90]
            ]
        }
    },
    "4 Pair (Row)": {
        description: "If in a ticket, 4 pair of 2 numbers together are marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, true, true, false, false],
                [false, true, true, false, false, false, false, false, false],
                [false, false, false, false, true, true, false, true, true]
            ],

            "ticket": [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90]
            ]
        }
    },
    "All Pair (Row)": {
        description: "If in a ticket, all pair of 2 numbers together are marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, true, true, false, false],
                [false, true, true, false, false, false, false, true, true],
                [false, false, false, false, true, true, false, true, true]
            ],

            "ticket": [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90]
            ]
        }
    },
    "1 Pair (Column)": {
        description: "If in any column, 1 pair of 2 numbers vertically together are marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, true],
                [false, false, false, false, false, false, false, false, true]
            ],

            "ticket": [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90]
            ]
        }
    },
    "2 Pair (Column)": {
        description: "If in any column, 2 pair of 2 numbers vertically together are marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, true, true],
                [false, false, false, false, false, false, false, true, true]
            ],

            "ticket": [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90]
            ]
        }
    },
    "3 Pair (Column)": {
        description: "If in any column, 3 pair of 2 numbers vertically together are marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, true, false, false, true, true],
                [false, false, false, false, true, false, false, true, true]
            ],

            "ticket": [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90]
            ]
        }
    },
    "4 Pair (Column)": {
        description: "If in any column, 4 pair of 2 numbers vertically together are marked",
        ticketDetails: {
            "marked": [
                [false, false, true, false, false, false, true, false, false],
                [true, false, true, true, false, false, true, false, false],
                [true, false, false, true, false, false, false, false, false]
            ],

            "ticket": [
                [null, 10, 23, null, 46, null, 60, null, 83],
                [5, null, 26, 30, null, 52, 65, null, null],
                [9, null, null, 38, 47, null, null, 72, 86]
            ]
        }
    },
    "All Pair (Column)": {
        description: "If in any column, all pair of 2 numbers vertically together are marked",
        ticketDetails: {
            "marked": [
                [false, true, false, false, false, false, false, false, false],
                [true, true, false, true, false, true, false, false, true],
                [true, false, false, true, false, true, false, false, true]
            ],

            "ticket": [
                [3, 13, null, null, 41, null, 63, 74, null],
                [8, 16, null, 32, null, 51, null, null, 81],
                [9, null, 21, 36, null, 57, null, null, 86]
            ]
        }
    },
    //Math
    "Pyramid": {
        description: "if 3rd number of top row, 2nd and 4th numbers of middle row and 1st, 3rd and 5th number of last row are marked.",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, true, false, false, false],
                [false, false, true, false, false, false, false, true, false],
                [true, false, false, false, false, true, false, false, true]
            ],

            "ticket": [
                [4, null, null, 32, null, 50, 69, null, 83],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [6, null, null, null, 45, 51, null, 77, 90]
            ]
        }
    },
    "Reverse Pyramid": {
        description: "if 1st, 3rd and 5th number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked",
        ticketDetails: {
            "marked": [
                [true, false, false, false, false, true, false, false, true],
                [false, false, true, false, false, false, false, true, false],
                [false, false, false, false, false, true, false, false, false]
            ],

            "ticket": [
                [6, null, null, null, 45, 51, null, 77, 90],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [4, null, null, 32, null, 50, 69, null, 83]
            ]
        }
    },
    "Circle": {
        description: "if 3rd number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked.",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, true, false, false, false],
                [false, false, true, false, false, false, false, true, false],
                [false, false, false, false, false, true, false, false, false]
            ],

            "ticket": [
                [6, null, null, null, 45, 51, null, 77, 90],
                [null, 18, 20, null, 44, null, null, 71, 87],
                [4, null, null, 32, null, 50, 69, null, 83]
            ]
        }
    },
    "All Even": {
        description: "If all even numbers of ticket are marked.",
        ticketDetails: {
            "marked": [
                [true, false, false, false, true, false, true, false, false],
                [false, true, false, true, false, false, false, false, false],
                [true, false, false, false, false, true, false, false, false]
            ],

            "ticket": [
                [4,null, 25,null, 46,null, 60, 75,null],
                [null,16,null, 30,null, 57, 69,null, 81],
                [8,null,null,null, 47, 58,null, 79, 87]
            ]
        }
    },
    "All Odd": {
        description: "If all odd numbers of ticket are marked.",
        ticketDetails: {
            "marked": [
                [false, false, false, false, true, false, false, true, false],
                [true, false, false, false, false, false, false, true, false],
                [false, true, true, false, false, true, false, true, false]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Plus": {
        description: "If 3rd number of all 3 rows and 2nd and 4th numbers of middle row are marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, true, false, false, false, false],
                [false, true, false, true, false, true, false, false, false],
                [false, false, false, false, false, true, false, false, false]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    //Extra
    "Breakfast": {
        description: "All the numbers of 1st, 2nd and 3rd vertical lines (Columns) are marked.",
        ticketDetails: {
            "marked": [
                [true, false, true, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [false, true, true, false, false, false, false, false, false]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Lunch": {
        description: "All the numbers of 4th, 5th and 6th vertical lines (Columns) are marked.",
        ticketDetails: {
            "marked": [
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, true, false, true, false, false, false],
                [false, false, false, false, false, true, false, false, false]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Dinner": {
        description: "All the numbers of 7th, 8th and 9th vertical lines (Columns) are marked.",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false,true, true]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Day || Jawani": {
        description: "When all the number from 1 to 45 are marked.",
        ticketDetails: {
            "marked": [
                [true, false, true, false, true, false, false, false, false],
                [true, true, false, true, false, false, false, false, false],
                [false, true, true, false, false, false, false,false, false]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Night || Budhapa": {
        description: "When all the number from 46 to 90 are marked.",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, false, false, true, false, true, false],
                [false, false, false, false, false, true, false,true, true]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Center || Laddu": {
        description: "When 3rd number of second line (row) is marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, false, false, false,false, false]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Bamboo": {
        description: "When 3rd number of each line (row) is marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, true, false, false, false, false],
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, false, true, false,false, false]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "First Half": {
        description: "When 1st, 2nd and 3rd number of each line (row) is marked",
        ticketDetails: {
            "marked": [
                [true, false, true, false, true, false, false, false, false],
                [true, true, false, true, false, false, false, false, false],
                [false, true, true, false, false, true, false,false, false]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Second Half": {
        description: "When 3rd,4th and 5th number of each line (row) is marked",
        ticketDetails: {
            "marked": [
                [false, false, false, false, true, false, true, true, false],
                [false, false, false, true, false, true, false, true, false],
                [false, false, false, false, false, true, false,true, true]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Shehnai Bidaai": {
        description: "If first 3 numbers of Top row and last 3 numbers of last row are marked.",
        ticketDetails: {
            "marked": [
                [true, false, true, false, true, false, false, false, false],
                [false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, true, false,true, true]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Brahma": {
        description: "When all the number from 1 to 30 are marked.",
        ticketDetails: {
            "marked": [
                [true, false, true, false, false, false, false, false, false],
                [true, true, false, false, false, false, false, false, false],
                [false, true, true, false, false, false, false,false, false]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Vishnu": {
        description: "When all the number from 31 to 60 are marked.",
        ticketDetails: {
            "marked": [
                [false, false, false, false, true, false, true, false, false],
                [false, false, false, true, false, true, false, false, false],
                [false, false, false, false, false, true, false,false, false]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Mahesh": {
        description: "When all the number from 61 to 90 are marked.",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false, true, false],
                [false, false, false, false, false, false, false,true, true]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Railway Track": {
        description: "When all the number of Top Line and Bottom Line are marked.",
        ticketDetails: {
            "marked": [
                [true, false, true, false, true, false, true, true, false],
                [false, false, false, false, false, false, false, false, false],
                [false, true, true, false, false, true, false,true, true]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "Drum": {
        description: "if 2nd,3rd and 4th number of all 3 rows are marked",
        ticketDetails: {
            "marked": [
                [false, false, true, false, true, false, true, false, false],
                [false, true, false, true, false, true, false, false, false],
                [false, false, true, false, false, true, false,true, false]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "ZIP": {
        description: "if 1st and 2nd numbers of Top line + 3rd number of middle line + 4th and 5th numbers of last line are marked.",
        ticketDetails: {
            "marked": [
                [true, false, true, false, false, false, false, false, false],
                [false, false, false, true, false, false, false, false, false],
                [false, false, false, false, false, false, false,true, true]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
    "ZAP": {
        description: "if 4th and 5th numbers of Top line + 3rd number of middle line + 1st and 2nd numbers of last line are marked.",
        ticketDetails: {
            "marked": [
                [false, false, false, false, false, false, true, true, false],
                [false, false, false, true, false, false, false, false, false],
                [false, true, true, false, false, false, false,false, false]
            ],

            "ticket": [
                [4,null, 28,null, 43,null, 60, 71,null],
                [9,10,null, 32,null, 56, null,75, null],
                [null,19,29,null, null, 59,null, 79, 90]
            ]
        }
    },
}

export default dividendDescription;