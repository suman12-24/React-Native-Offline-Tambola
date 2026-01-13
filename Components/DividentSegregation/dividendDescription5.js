const dividendDescription5 = {
  "First/Top Line": {
    description: "All the Numbers of first/top row of a ticket.",
    ticketDetails: {
      marked: [
        [true, false, false, true, true, false, true, false, true],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
      ],

      ticket: [
        [7, null, null, 32, 41, null, 68, null, 87],
        [null, 13, null, 35, 44, null, null, 72, 88],
        [null, 14, null, 39, 49, null, 68, 78, null],
      ],
    },
  },

  "Second/Middle Line": {
    description: "All the Numbers of second/middle row of a ticket.",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, false, false, false],
        [false, false, true, false, true, true, false, true, true],
        [false, false, false, false, false, false, false, false, false],
      ],

      ticket: [
        [7, 11, null, 36, null, 51, 66, null, null],
        [null, null, 29, null, 43, 52, null, 76, 81],
        [8, null, null, null, 48, 58, null, 79, 83],
      ],
    },
  },

  "Third/Last Line": {
    description: "All the Numbers of third/last row of a ticket. ",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [true, false, true, true, false, true, false, true, false],
      ],

      ticket: [
        [1, null, 20, 36, null, 51, 68, null, null],
        [null, 12, null, null, 44, 52, null, 73, 80],
        [3, null, 24, 39, null, 56, null, 76, null],
      ],
    },
  },

  "4 Corners": {
    description: "First and last numbers of top and and bottom rows",
    ticketDetails: {
      marked: [
        [false, true, false, false, false, false, false, true, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, true, false, false, false, false, false, true],
      ],

      ticket: [
        [null, 12, 20, null, 43, 56, null, 73, null],
        [4, null, 23, 34, null, 52, null, null, 81],
        [null, null, 29, null, 42, 56, null, 79, 82],
      ],
    },
  },

  "Queen Corners": {
    description: "when first number of each row is marked",
    ticketDetails: {
      marked: [
        [false, true, false, false, false, false, false, false, false],
        [true, false, false, false, false, false, false, false, false],
        [true, false, false, false, false, false, false, false, false],
      ],
      ticket: [
        [null, 13, 20, null, 44, null, null, 70, 88],
        [2, null, 27, 32, null, 56, null, 79, null],
        [9, null, 29, 35, null, 58, 69, null, null],
      ],
    },
  },

  "King Corners": {
    description: "when last number of each row is marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, false, false, true],
        [false, false, false, false, false, false, false, true, false],
        [false, false, false, false, false, false, false, true, false],
      ],

      ticket: [
        [null, 10, null, 35, 44, null, 63, null, 87],
        [5, null, 24, null, 47, 53, null, 72, null],
        [8, null, 27, 39, null, 54, null, 75, null],
      ],
    },
  },
  "4 Corners and Center": {
    description: '',
    ticketDetails: {
      marked: [
        [false, true, false, false, false, false, false, true, false],
        [false, false, false, true, false, false, false, false, false],
        [false, false, true, false, false, false, false, false, true],
      ],

      ticket: [
        [null, 12, 20, null, 43, 56, null, 73, null],
        [4, null, 23, 34, null, 52, null, null, 81],
        [null, null, 29, null, 42, 56, null, 79, 82],
      ],
    },
  },
  "Bulls Eyes": {
    description: "if 2nd and 4th numbers of each line are marked",
    ticketDetails: {
      marked: [
        [false, true, false, false, false, true, false, false, false],
        [false, false, true, false, false, false, true, false, false],
        [false, false, true, false, false, false, false, true, false],
      ],

      ticket: [
        [3, 14, null, 37, null, 51, 60, null, null],
        [4, null, 20, null, null, 55, 66, null, 83],
        [null, 19, 29, null, 40, null, null, 71, 84],
      ],
    },
  },
  "Twin Lines": {
    description: "if 1st and 2nd numbers of each line are marked",
    ticketDetails: {
      marked: [
        [false, true, true, false, false, false, false, false, false],
        [true, true, false, false, false, false, false, false, false],
        [true, false, true, false, false, false, false, false, false],
      ],

      ticket: [
        [null, 11, 25, null, 41, null, 60, 75, null],
        [2, 12, null, 31, null, 57, null, null, 84],
        [9, null, 26, 35, null, 58, null, null, 89],
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
        [null, 16, 24, null, 48, null, null, 71, 81],
        [4, 14, null, 38, null, null, 62, 79, null],
        [5, 18, null, null, null, 57, 69, null, 82],
      ],
    },
  },
  "6 Corners and Center": {
    description: "First and last number of each row is marked and 3rd number middle row is  marked.",
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

  "Reverse Twin": {
    description: "if 4th and 5th numbers of each line are marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, true, false, true],
        [false, false, false, false, false, false, false, true, true],
        [false, false, false, false, false, true, false, false, true],
      ],

      ticket: [
        [null, 12, null, 36, null, 52, 64, null, 81],
        [1, 18, null, null, 45, null, null, 70, 82],
        [6, null, 21, null, 49, 56, null, null, 89],
      ],
    },
  },

  "Early 5/Jaldi 5": {
    description: "When any 5 numbers are marked",
    ticketDetails: {
      marked: [
        [false, false, false, true, false, false, false, false, true],
        [false, false, false, false, false, false, true, false, false],
        [false, false, true, false, true, false, false, false, false],
      ],

      ticket: [
        [5, null, 20, 30, null, 55, null, null, 84],
        [null, 19, 23, null, 45, null, 68, 73, null],
        [9, null, 27, null, 48, null, 69, 75, null],
      ],
    },
  },

  "Early 6/Jaldi 6": {
    description: "When any 6 numbers are marked",
    ticketDetails: {
      marked: [
        [true, true, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, true, false, false],
        [false, false, false, false, true, false, true, true, false],
      ],

      ticket: [
        [3, 13, null, 32, null, null, null, 72, 82],
        [null, 16, 21, null, null, 59, 61, null, 89],
        [8, null, 26, null, 44, null, 64, 75, null],
      ],
    },
  },
  "Early 7/Jaldi 7": {
    description: "When any 7 numbers are marked",
    ticketDetails: {
      marked: [
        [true, false, false, true, false, true, false, false, false],
        [false, true, false, false, false, false, true, false, false],
        [false, false, true, false, false, false, false, true, false],
      ],

      ticket: [
        [5, null, null, 31, null, 57, null, 71, 81],
        [null, 13, null, 35, 44, null, 65, null, 83],
        [7, null, 29, null, null, 59, null, 75, 84],
      ],
    },
  },
  "Early 8/Jaldi 8": {
    description: "When any 8 numbers are marked",
    ticketDetails: {
      marked: [
        [false, false, true, true, false, true, false, true, false],
        [true, false, false, false, false, false, false, false, true],
        [false, true, false, false, false, false, true, false, false],
      ],

      ticket: [
        [null, null, 23, 32, null, 58, null, 77, 82],
        [3, null, 24, 36, null, null, 60, null, 90],
        [null, 12, 28, null, 41, null, 65, 78, null],
      ],
    },
  },

  "Early 9/Jaldi 9": {
    description: "When any 9 numbers are marked",
    ticketDetails: {
      marked: [
        [false, true, false, false, false, true, false, false, true],
        [false, false, false, false, false, false, false, true, true],
        [false, false, true, false, true, true, false, true, false],
      ],

      ticket: [
        [null, 18, null, 30, null, 51, 62, null, 82],
        [null, null, 21, null, 47, 53, null, 71, 83],
        [5, null, 28, null, 48, 57, null, 77, null],
      ],
    },
  },

  "Early 10/Jaldi 10": {
    description: "When any 10 numbers are marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, false, false, true],
        [true, true, false, false, true, true, false, false, true],
        [true, false, true, false, true, false, false, true, false],
      ],

      ticket: [
        [null, null, 20, 31, null, 50, 63, null, 82],
        [5, 17, null, null, 41, 51, null, null, 85],
        [9, null, 27, null, 42, null, null, 73, 87],
      ],
    },
  },
  "Early 11/Jaldi 11": {
    description: "When any 11 numbers are marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, true, true, false, false, true],
        [true, true, false, true, false, false, true, false, false],
        [true, true, false, true, false, false, false, true, false],
      ],

      ticket: [
        [null, null, 20, null, 46, 53, null, 70, 84],
        [2, 15, null, 33, null, null, 60, 72, null],
        [5, 17, null, 36, null, null, 65, 77, null],
      ],
    },
  },
  "Early 12/Jaldi 12": {
    description: "When any 12 numbers are marked",
    ticketDetails: {
      marked: [
        [true, false, true, false, false, true, false, false, true],
        [false, true, true, false, true, false, true, true, false],
        [true, false, false, true, false, true, false, false, false],
      ],

      ticket: [
        [2, null, 24, null, 43, 51, null, null, 85],
        [null, 14, 27, null, 48, null, 65, 77, null],
        [7, 15, null, 31, null, 58, null, null, 89],
      ],
    },
  },
  "Early 13/Jaldi 13": {
    description: "When any 13 numbers are marked",
    ticketDetails: {
      marked: [
        [false, false, true, true, false, true, false, false, true],
        [true, true, false, true, true, false, true, false, false],
        [false, true, false, false, true, false, true, false, true],
      ],

      ticket: [
        [null, null, 20, 32, null, 58, null, 70, 88],
        [5, 12, null, 37, 44, null, 64, null, null],
        [null, 15, 29, null, 45, null, 65, null, 89],
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
        [null, 16, 20, null, 40, null, 61, null, 87],
        [1, null, 21, 32, null, 53, 69, null, null],
        [2, null, 27, 33, null, null, null, 79, 89],
      ],
    },
  },
  "Hockey Stick": {
    description: "if all numbers of ticket containing 7 are marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, false, true, false],
        [false, false, false, false, false, false, false, true, false],
        [false, false, false, false, false, false, false, false, false],
      ],

      ticket: [
        [2, null, null, 32, 40, null, 60, 70, null],
        [null, 10, null, 38, null, 54, null, 77, 84],
        [4, null, 21, null, null, 58, 62, null, 90],
      ],
    },
  },
  "Fat Lady": {
    description: "if all numbers of ticket containing 8 are marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, true],
        [false, false, false, false, false, false, false, false, false],
      ],

      ticket: [
        [1, null, 21, null, 43, 51, null, 75, null],
        [null, 13, null, 31, null, 54, 63, null, 83],
        [7, null, 23, 36, null, 56, 65, null, null],
      ],
    },
  },
  "Ugly Duckling": {
    description: "if all numbers of ticket containing 2 are marked",
    ticketDetails: {
      marked: [
        [false, false, true, false, false, false, false, false, false],
        [false, false, true, false, true, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
      ],

      ticket: [
        [null, null, 23, 34, null, 53, 64, null, 89],
        [null, 19, 24, null, 42, null, 67, 70, null],
        [5, null, null, 39, 49, null, 69, 75, null],
      ],
    },
  },

  'Pyramid': {
    description:
      "if 3rd number of top row, 2nd and 4th numbers of middle row and 1st, 3rd and 5th number of last row are marked.",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, true, false, false, false],
        [false, false, true, false, false, false, false, true, false],
        [false, true, false, false, true, false, false, true, false],
      ],

      ticket: [
        [null, null, 26, null, 43, 54, null, 74, 86],
        [1, null, 29, 31, null, null, null, 78, 88],
        [null, 16, null, 39, 45, null, 60, 79, null],
      ],
    },
  },
  "Reverse Pyramid": {
    description:
      "if 1st, 3rd and 5th number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked",
    ticketDetails: {
      marked: [
        [false, true, false, false, false, true, false, false, true],
        [false, false, true, false, false, false, true, false, false],
        [false, false, false, false, true, false, false, false, false],
      ],

      ticket: [
        [null, 12, null, 32, null, 52, 63, null, 82],
        [2, null, 23, null, 40, null, 64, 74, null],
        [null, 19, 28, null, 41, null, 65, 76, null],
      ],
    },
  },

  'Circle': {
    description:
      "if 3rd number of top row, 2nd and 4th numbers of middle row and 3rd number of last row are marked.",
    ticketDetails: {
      marked: [
        [false, false, false, true, false, false, false, false, false],
        [false, false, true, false, false, false, false, true, false],
        [false, false, false, false, false, true, false, false, false],
      ],

      ticket: [
        [2, 17, null, 34, 45, null, 63, null, null],
        [4, null, 27, null, null, 52, null, 74, 84],
        [6, null, null, null, 49, 53, null, 78, 85],
      ],
    },
  },
  "All Even": {
    description: "If all even numbers of ticket are marked.",
    ticketDetails: {
      marked: [
        [false, false, false, true, false, false, false, false, false],
        [false, false, false, false, false, false, true, true, false],
        [false, false, false, true, false, false, true, false, true],
      ],

      ticket: [
        [1, 15, null, 34, null, 55, null, null, 81],
        [3, null, 25, null, 41, null, 60, 72, null],
        [7, null, null, 36, 49, null, 68, null, 90],
      ],
    },
  },
  "All Odd": {
    description: "If all odd numbers of ticket are marked.",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, false, false, false],
        [false, true, false, false, false, true, false, false, false],
        [false, true, false, true, false, true, false, true, false],
      ],

      ticket: [
        [4, 12, null, 30, 40, null, 66, null, null],
        [null, 15, 24, null, 48, 53, null, null, 82],
        [null, 19, null, 33, null, 55, null, 75, 90],
      ],
    },
  },
  'Plus': {
    description:
      "If 3rd number of all 3 rows and 2nd and 4th numbers of middle row are marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, true, false, false, false, false],
        [false, false, true, false, false, true, true, false, false],
        [false, false, false, true, false, false, false, false, false],
      ],

      ticket: [
        [4, 11, null, null, 44, 52, null, 76, null],
        [5, null, 20, null, null, 54, 67, null, 87],
        [6, 18, null, 33, 45, null, 69, null, null],
      ],
    },
  },
  "Temp./ BP": {
    description: "If smallest and highest number of ticket are marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, true],
        [true, false, false, false, false, false, false, false, false],
      ],

      ticket: [
        [null, null, 27, 31, null, 53, 63, null, 88],
        [null, 17, 29, null, 43, null, null, 71, 89],
        [2, null, null, 39, 44, null, 64, 76, null],
      ],
    },
  },
  "Double Temp.": {
    description: "If 2 smallest and 2 highest numbers of ticket are marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, false, false, true],
        [true, false, false, false, false, false, false, false, false],
        [true, false, false, false, false, false, false, true, false],
      ],

      ticket: [
        [null, 11, null, 34, null, 50, 64, null, 86],
        [3, null, 27, 39, null, 59, null, 72, null],
        [4, null, 28, null, 40, null, 69, 76, null],
      ],
    },
  },
  'House': {
    description: "All the numbers on a ticket",
    ticketDetails: {
      marked: [
        [false, true, true, false, true, false, true, true, false],
        [true, false, false, true, false, true, true, false, true],
        [true, false, true, true, false, false, false, true, true],
      ],

      ticket: [
        [null, 15, 20, null, 41, null, 64, 73, null],
        [8, null, null, 33, null, 54, 65, null, 87],
        [9, null, 23, 35, null, null, null, 76, 90],
      ],
    },
  },
  "I Love You 143": {
    description:
      "if 1st number of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
    ticketDetails: {
      marked: [
        [false, true, false, false, false, false, false, false, false],
        [true, true, false, true, true, false, false, false, false],
        [true, false, true, false, true, false, false, false, false],
      ],

      ticket: [
        [null, 13, null, 35, null, 51, 62, null, 80],
        [4, 18, null, 39, 46, null, null, 72, null],
        [8, null, 29, null, 49, 57, null, 73, null],
      ],
    },
  },
  "We Love You 243": {
    description:
      "if 1st and 2nd numbers of top row, 1st, 2nd, 3rd and 4th numbers of middle row and 1st, 2nd and 3rd number of last row are marked.",
    ticketDetails: {
      marked: [
        [false, true, true, false, false, false, false, false, false],
        [true, true, false, true, true, false, false, false, false],
        [true, true, false, false, true, false, false, false, false],
      ],

      ticket: [
        [null, 12, 28, null, null, 51, null, 79, 85],
        [6, 14, null, 37, 42, null, 66, null, null],
        [7, 18, null, null, 49, null, 67, null, 90],
      ],
    },
  },
  '124': {
    description:
      "if 1st number of top row, 1st and 2nd numbers of middle row and 1st, 2nd ,3rd and 4th numbers of last row are marked.",
    ticketDetails: {
      marked: [
        [false, true, false, false, false, false, false, false, false],
        [true, false, false, true, false, false, false, false, false],
        [true, false, false, false, true, true, false, true, false],
      ],

      ticket: [
        [null, 11, 29, null, null, 53, 63, null, 85],
        [8, null, null, 31, 40, null, 67, 71, null],
        [9, null, null, null, 41, 58, null, 78, 89],
      ],
    },
  },
  '421': {
    description:
      "if 1st, 2nd , 3rd and 4th  numbers of top row, 1st and 2nd numbers of middle row and 1st number of last row are marked.",
    ticketDetails: {
      marked: [
        [false, true, true, false, false, true, true, false, false],
        [true, false, false, true, false, false, false, false, false],
        [false, true, false, false, false, false, false, false, false],
      ],

      ticket: [
        [null, 14, 22, null, null, 55, 65, null, 84],
        [2, null, null, 30, null, 58, null, 77, 90],
        [null, 17, null, 38, 46, null, 68, 78, null],
      ],
    },
  },
  '225': {
    description:
      "if 1st and 2nd numbers of the top row, 1st and 2nd numbers of the middle row and 1st, 2nd , 3rd, 4th and 5th number of the last row are marked.",
    ticketDetails: {
      marked: [
        [false, true, false, true, false, false, false, false, false],
        [false, true, true, false, false, false, false, false, false],
        [true, false, true, false, true, false, true, false, true],
      ],

      ticket: [
        [null, 10, null, 38, 47, null, null, 73, 81],
        [null, 13, 20, null, null, 50, 62, null, 84],
        [8, null, 24, null, 47, null, 64, null, 85],
      ],
    },
  },
  '123': {
    description:
      "if 1st number of top row, 1st and 2nd numbers of middle row and 1st, 2nd and 3rd numbers of last row are marked.",
    ticketDetails: {
      marked: [
        [false, true, false, false, false, false, false, false, false],
        [false, true, true, false, false, false, false, false, false],
        [true, false, true, true, false, false, false, false, false],
      ],

      ticket: [
        [null, 11, null, 33, 45, null, null, 75, 87],
        [null, 17, 20, null, 46, null, 66, null, 89],
        [8, null, 28, 39, null, 59, 68, null, null],
      ],
    },
  },
  '333': {
    description: "if 1st, 2nd and 3rd numbers of all lines are marked",
    ticketDetails: {
      marked: [
        [false, true, true, false, true, false, false, false, false],
        [true, false, true, true, false, false, false, false, false],
        [false, false, true, false, true, true, false, false, false],
      ],

      ticket: [
        [null, 12, 22, null, 43, null, null, 78, 81],
        [1, null, 26, 39, null, 58, 68, null, null],
        [null, null, 28, null, 44, 59, null, 79, 87],
      ],
    },
  },
  "4 2 ka 1(Reverse)": {
    description:
      "if 2nd , 3rd ,4th and 5th numbers of the top row, 4th and 5th numbers of middle row and 5th number of the last row are marked.",
    ticketDetails: {
      marked: [
        [false, true, false, true, false, true, false, false, true],
        [false, false, false, false, false, true, false, true, false],
        [false, false, false, false, false, false, false, true, false],
      ],

      ticket: [
        [3, 10, null, 39, null, 54, null, null, 83],
        [null, 12, 25, null, 40, 56, null, 75, null],
        [8, null, 27, null, 47, null, 61, 79, null],
      ],
    },
  },
  "333 (reverse)": {
    description: "if 3rd,4th and 5th numbers of all lines are marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, true, false, true, true, false],
        [false, false, false, false, true, false, false, true, true],
        [false, false, false, false, true, true, false, false, true],
      ],

      ticket: [
        [null, 15, null, 30, 40, null, 63, 72, null],
        [3, null, 22, null, 41, null, null, 74, 86],
        [4, null, 27, null, 46, 57, null, null, 88],
      ],
    },
  },

  "3 2 ka 1(Reverse)": {
    description:
      "if 3rd,4th and 5th numbers of top row, 4th and 5th numbers of middle row and 5th number of last row marked",
    ticketDetails: {
      marked: [
        [false, false, false, true, false, false, false, true, true],
        [false, false, false, false, false, false, true, true, false],
        [false, false, false, false, false, false, true, false, false],
      ],

      ticket: [
        [1, null, 25, 35, null, null, null, 70, 80],
        [null, 10, 27, null, 42, null, 67, 72, null],
        [2, 15, null, 38, null, 56, 68, null, null],
      ],
    },
  },

  "1 Pair (Row)": {
    description: "If in any row, 1 pair of 2 numbers together are marked",
    ticketDetails: {
      marked: [
        [true, true, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
      ],

      ticket: [
        [8, 10, null, 32, null, 51, null, 71, null],
        [null, 12, null, 35, 44, null, 63, null, 80],
        [null, 13, 25, null, 45, 54, null, null, 89],
      ],
    },
  },
  "2 Pair (Row)": {
    description: "If in a ticket, 2 pair of 2 numbers together are marked",
    ticketDetails: {
      marked: [
        [true, true, false, false, true, true, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
      ],

      ticket: [
        [3, 12, null, null, 40, 55, null, 78, null],
        [5, null, 24, 33, null, 59, null, null, 81],
        [6, 13, null, 39, 42, null, 60, null, null],
      ],
    },
  },
  "3 Pair (Row)": {
    description: "If in a ticket, 3 pair of 2 numbers together are marked",
    ticketDetails: {
      marked: [
        [false, true, true, false, true, true, false, false, false],
        [false, false, true, true, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
      ],

      ticket: [
        [null, 11, 21, null, 42, 51, null, 70, null],
        [1, null, 26, 34, null, 58, null, 71, null],
        [null, 19, null, 37, null, 59, 61, null, 82],
      ],
    },
  },
  "4 Pair (Row)": {
    description: "If in a ticket, 4 pair of 2 numbers together are marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, true, true, false, false],
        [false, false, true, true, false, false, false, true, true],
        [false, true, true, false, false, false, false, false, false],
      ],

      ticket: [
        [6, null, null, 32, null, 55, 69, null, 85],
        [null, null, 25, 35, null, 58, null, 74, 88],
        [null, 12, 29, null, 42, null, null, 75, 89],
      ],
    },
  },
  "All Pair (Row)": {
    description: "If in a ticket, all pair of 2 numbers together are marked",
    ticketDetails: {
      marked: [
        [false, false, true, true, false, false, false, true, true],
        [false, false, false, false, true, true, false, true, true],
        [false, false, false, true, true, false, true, true, false],
      ],

      ticket: [
        [null, null, 20, 31, null, 55, null, 71, 81],
        [1, null, null, null, 43, 58, null, 72, 90],
        [null, 10, null, 32, 49, null, 62, 78, null],
      ],
    },
  },
  "1 Pair (Column)": {
    description:
      "If in any column, 1 pair of 2 numbers vertically together are marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, false, false, false],
        [false, true, false, false, false, false, false, false, false],
        [false, true, false, false, false, false, false, false, false],
      ],

      ticket: [
        [5, null, 23, 34, null, 50, null, null, 89],
        [null, 11, 29, null, 47, null, 60, 72, null],
        [7, 12, null, 36, null, 59, 66, null, null],
      ],
    },
  },
  "2 Pair (Column)": {
    description:
      "If in any column, 2 pair of 2 numbers vertically together are marked",
    ticketDetails: {
      marked: [
        [true, false, false, false, false, false, false, false, false],
        [true, true, false, false, false, false, false, false, false],
        [false, true, false, false, false, false, false, false, false],
      ],

      ticket: [
        [4, null, 22, null, null, 58, null, 75, 83],
        [9, 10, null, 34, null, null, 61, 78, null],
        [null, 18, null, 35, 44, null, 63, 79, null],
      ],
    },
  },
  "3 Pair (Column)": {
    description:
      "If in any column, 3 pair of 2 numbers vertically together are marked",
    ticketDetails: {
      marked: [
        [false, true, false, false, false, false, false, false, false],
        [false, true, false, true, false, true, false, false, false],
        [false, false, false, true, false, true, false, false, false],
      ],

      ticket: [
        [7, 15, null, null, 40, null, 62, 74, null],
        [null, 18, null, 30, null, 50, null, 79, 82],
        [null, null, 29, 35, null, 51, 63, null, 87],
      ],
    },
  },
  "4 Pair (Column)": {
    description:
      "If in any column, 4 pair of 2 numbers vertically together are marked",
    ticketDetails: {
      marked: [
        [false, true, false, false, false, false, true, false, false],
        [true, true, false, false, false, true, true, false, false],
        [true, false, false, false, false, true, false, false, false],
      ],

      ticket: [
        [null, 10, 23, null, 42, null, 60, null, 86],
        [5, 12, null, 36, null, 52, 62, null, null],
        [6, 18, null, null, 44, 57, null, 75, null],
      ],
    },
  },

  "All Pair (Column)": {
    description:
      "If in any column, all pair of 2 numbers vertically together are marked",
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
  'Breakfast': {
    description:
      "All the numbers of 1st, 2nd and 3rd vertical lines (Columns) are marked.",
    ticketDetails: {
      marked: [
        [false, false, true, false, false, false, false, false, false],
        [true, true, false, false, false, false, false, false, false],
        [false, true, false, false, false, false, false, false, false],
      ],

      ticket: [
        [null, null, 22, 35, null, 52, 60, null, 80],
        [5, 14, null, 37, null, 53, null, 70, null],
        [null, 15, null, 38, 48, null, 62, 79, null],
      ],
    },
  },
  'Lunch': {
    description:
      "All the numbers of 4th, 5th and 6th vertical lines (Columns) are marked.",
    ticketDetails: {
      marked: [
        [false, false, false, false, true, false, false, false, false],
        [false, false, false, false, false, true, false, false, false],
        [false, false, false, true, false, true, false, false, false],
      ],

      ticket: [
        [6, 13, null, null, 49, null, 63, 74, null],
        [null, 15, 22, null, null, 50, null, 77, 81],
        [null, null, 26, 33, null, 52, 65, null, 82],
      ],
    },
  },
  'Dinner': {
    description:
      "All the numbers of 7th, 8th and 9th vertical lines (Columns) are marked.",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, true, false, false],
        [false, false, false, false, false, false, false, true, false],
        [false, false, false, false, false, false, false, true, true],
      ],

      ticket: [
        [3, null, 24, 34, null, 53, 64, null, null],
        [7, null, 29, null, 43, 55, null, 75, null],
        [null, 18, null, null, 48, 58, null, 76, 81],
      ],
    },
  },
  "Day || Jawani": {
    description: "When all the number from 1 to 45 are marked.",
    ticketDetails: {
      marked: [
        [true, false, true, false, false, false, false, false, false],
        [false, true, false, true, false, false, false, false, false],
        [false, true, false, true, false, false, false, false, false],
      ],

      ticket: [
        [3, null, 24, null, null, 54, null, 71, 84],
        [null, 11, null, 31, null, 58, null, 74, 85],
        [null, 13, null, 39, 46, null, 60, null, 90],
      ],
    },
  },
  "Night || Budhapa": {
    description: "When all the number from 46 to 90 are marked.",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, true, false, false, true],
        [false, false, false, false, false, true, true, false, false],
        [false, false, false, false, false, false, true, true, false],
      ],

      ticket: [
        [null, 11, 23, null, 41, 50, null, null, 84],
        [3, 18, null, 31, null, 57, 64, null, null],
        [6, null, 25, 34, null, null, 68, 70, null],
      ],
    },
  },
  "Center || Laddu": {
    description: "When 3rd number of second line (row) is marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, true, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
      ],

      ticket: [
        [null, null, 20, 32, null, 53, null, 79, 80],
        [5, 14, null, 35, null, 56, 61, null, null],
        [6, 16, null, null, 48, 58, null, null, 89],
      ],
    },
  },
  'Bamboo': {
    description: "When 3rd number of each line (row) is marked",
    ticketDetails: {
      marked: [
        [false, false, false, true, false, false, false, false, false],
        [false, false, false, false, false, true, false, false, false],
        [false, false, false, false, true, false, false, false, false],
      ],

      ticket: [
        [2, null, 25, 35, null, 51, 62, null, null],
        [null, null, 26, 36, null, 53, 64, null, 84],
        [null, 10, null, 39, 40, null, null, 70, 88],
      ],
    },
  },
  "First Half": {
    description: "When 1st, 2nd and 3rd number of each line (row) is marked",
    ticketDetails: {
      marked: [
        [false, true, true, false, true, false, false, false, false],
        [true, false, true, true, false, false, false, false, false],
        [true, false, false, true, false, true, false, false, false],
      ],

      ticket: [
        [null, 11, 22, null, 41, null, 61, 70, null],
        [5, null, 28, 34, null, null, 63, null, 86],
        [7, null, null, 35, null, 57, null, 74, 87],
      ],
    },
  },
  "Second Half": {
    description: "When 3rd,4th and 5th number of each line (row) is marked",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, true, true, false, true],
        [false, false, false, false, true, true, false, true, false],
        [false, false, false, true, false, true, false, true, false],
      ],

      ticket: [
        [null, 18, null, 30, null, 53, 67, null, 81],
        [null, 19, 22, null, 46, 54, null, 75, null],
        [9, null, 26, 34, null, 59, null, 79, null],
      ],
    },
  },
  "Shehnai Bidaai": {
    description:
      "If first 3 numbers of Top row and last 3 numbers of last row are marked.",
    ticketDetails: {
      marked: [
        [false, true, true, false, true, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, true, false, false, true, true, false],
      ],

      ticket: [
        [null, 18, 21, null, 49, 59, null, null, 80],
        [6, 19, null, 33, null, null, 63, null, 85],
        [8, null, 28, 36, null, null, 67, 73, null],
      ],
    },
  },
  'Brahma': {
    description: "When all the number from 1 to 30 are marked.",
    ticketDetails: {
      marked: [
        [true, false, false, false, false, false, false, false, false],
        [false, true, true, false, false, false, false, false, false],
        [false, true, true, false, false, false, false, false, false],
      ],

      ticket: [
        [4, null, null, 32, 44, null, 61, 77, null],
        [null, 12, 23, null, null, 51, 68, null, 84],
        [null, 19, 25, null, 45, 59, null, null, 87],
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
    description: "When all the number from 61 to 90 are marked.",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, false, true, true],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, true, false, true],
      ],

      ticket: [
        [null, 16, 28, null, 40, null, null, 73, 84],
        [4, 18, null, 31, null, 50, 60, null, null],
        [null, 19, null, 35, null, 58, 67, null, 89],
      ],
    },
  },
  "Railway Track": {
    description: "When all the number of Top Line and Bottom Line are marked.",
    ticketDetails: {
      marked: [
        [true, false, true, false, true, false, true, false, true],
        [false, false, false, false, false, false, false, false, false],
        [false, true, false, true, false, true, true, false, true],
      ],

      ticket: [
        [5, null, 22, null, 41, null, 63, null, 83],
        [null, 13, null, 32, 42, null, null, 79, 84],
        [null, 18, null, 37, null, 52, 67, null, 89],
      ],
    },
  },
  'Drum': {
    description: "if 2nd,3rd and 4th number of all 3 rows are marked",
    ticketDetails: {
      marked: [
        [false, false, false, true, true, false, false, true, false],
        [false, false, false, true, true, false, false, true, false],
        [false, false, true, true, false, true, false, false, false],
      ],
      ticket: [
        [null, 13, null, 31, 48, null, null, 71, 83],
        [null, 18, null, 32, 49, null, null, 77, 89],
        [7, null, 27, 34, null, 52, 61, null, null],
      ],
    },
  },
  'ZIP': {
    description:
      "if 1st and 2nd numbers of Top line + 3rd number of middle line + 4th and 5th numbers of last line are marked.",
    ticketDetails: {
      marked: [
        [true, false, true, false, false, false, false, false, false],
        [false, false, false, true, false, false, false, false, false],
        [false, false, false, false, false, false, false, true, true],
      ],

      ticket: [
        [4, null, 20, null, 42, null, null, 70, 81],
        [7, 12, null, 31, null, null, 60, null, 83],
        [null, null, 29, 37, null, 54, null, 75, 84],
      ],
    },
  },
  'ZAP': {
    description:
      "if 4th and 5th numbers of Top line + 3rd number of middle line + 1st and 2nd numbers of last line are marked.",
    ticketDetails: {
      marked: [
        [false, false, false, false, false, false, true, false, true],
        [false, false, false, false, true, false, false, false, false],
        [true, false, true, false, false, false, false, false, false],
      ],
      ticket: [
        [5, null, 20, 31, null, null, 60, null, 85],
        [6, 16, null, null, 47, null, 65, 74, null],
        [7, null, 25, null, 49, 56, null, null, 88],
      ],
    },
  },
};
export default dividendDescription5;
