const moment  = require("moment");

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS : [
        {title : "Product call", theme : "GREEN", startTime : moment().add(-12, 'd').startOf('day'), endTime : moment().add(-12, 'd').endOf('day')},
        {title : "Meeting with tech team", theme : "PINK", startTime : moment().add(-8, 'd').startOf('day'), endTime : moment().add(-8, 'd').endOf('day')},
        {title : "Meeting with Cristina", theme : "PURPLE", startTime : moment().add(-2, 'd').startOf('day'), endTime : moment().add(-2, 'd').endOf('day')},
        {title : "Meeting with Alex", theme : "BLUE", startTime : moment().startOf('day'), endTime : moment().endOf('day')}, 
        {title : "Product Call", theme : "GREEN", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "PURPLE", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "ORANGE", startTime : moment().add(3, 'd').startOf('day'), endTime : moment().add(3, 'd').endOf('day')},
        {title : "Product meeting", theme : "PINK", startTime : moment().add(5, 'd').startOf('day'), endTime : moment().add(5, 'd').endOf('day')},
        {title : "Sales Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Product Meeting", theme : "ORANGE", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Marketing Meeting", theme : "PINK", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Client Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Sales meeting", theme : "BLUE", startTime : moment().add(12, 'd').startOf('day'), endTime : moment().add(12, 'd').endOf('day')},
        {title : "Client meeting", theme : "PURPLE", startTime : moment().add(16, 'd').startOf('day'), endTime : moment().add(16, 'd').endOf('day')},
    ],

    RECENT_TRANSACTIONS : [
        {
          "name": "Brian",
          "avatar": "https://reqres.in/img/faces/1-image.jpg",
          "amount": 1,
          "date": "2023-10-20",
          "medicine": "Aspirin"
        },
        {
          "name": "Johnson",
          "avatar": "https://reqres.in/img/faces/4-image.jpg",
          "amount": 1,
          "date": "2023-10-19",
          "medicine": "Ibuprofen"
        },
        {
          "name": "Max",
          "avatar": "https://reqres.in/img/faces/3-image.jpg",
          "amount": 1,
          "date": "2023-10-19",
          "medicine": "Acetaminophen"
        },
        {
          "name": "Brian",
          "avatar": "https://reqres.in/img/faces/1-image.jpg",
          "amount": 2,
          "date": "2023-10-18",
          "medicine": "Penicillin"
        },
        {
          "name": "Johnson",
          "avatar": "https://reqres.in/img/faces/4-image.jpg",
          "amount": 3,
          "date": "2023-10-17",
          "medicine": "Amoxicillin"
        },
        {
          "name": "Max",
          "avatar": "https://reqres.in/img/faces/3-image.jpg",
          "amount": 4,
          "date": "2023-10-16",
          "medicine": "Erythromycin"
        },
        {
            "name": "Brian",
            "avatar": "https://reqres.in/img/faces/1-image.jpg",
            "amount": 1,
            "date": "2023-10-20",
            "medicine": "Aspirin"
          },
          {
            "name": "Johnson",
            "avatar": "https://reqres.in/img/faces/4-image.jpg",
            "amount": 1,
            "date": "2023-10-19",
            "medicine": "Ibuprofen"
          },
          {
            "name": "Max",
            "avatar": "https://reqres.in/img/faces/3-image.jpg",
            "amount": 1,
            "date": "2023-10-19",
            "medicine": "Acetaminophen"
          },
          {
            "name": "Brian",
            "avatar": "https://reqres.in/img/faces/1-image.jpg",
            "amount": 2,
            "date": "2023-10-18",
            "medicine": "Penicillin"
          },
          {
            "name": "Johnson",
            "avatar": "https://reqres.in/img/faces/4-image.jpg",
            "amount": 3,
            "date": "2023-10-17",
            "medicine": "Amoxicillin"
          },
          {
            "name": "Max",
            "avatar": "https://reqres.in/img/faces/3-image.jpg",
            "amount": 4,
            "date": "2023-10-16",
            "medicine": "Erythromycin"
          },
          {
            "name": "Brian",
            "avatar": "https://reqres.in/img/faces/1-image.jpg",
            "amount": 1,
            "date": "2023-10-20",
            "medicine": "Aspirin"
          },
          {
            "name": "Johnson",
            "avatar": "https://reqres.in/img/faces/4-image.jpg",
            "amount": 1,
            "date": "2023-10-19",
            "medicine": "Ibuprofen"
          },
          {
            "name": "Max",
            "avatar": "https://reqres.in/img/faces/3-image.jpg",
            "amount": 1,
            "date": "2023-10-19",
            "medicine": "Acetaminophen"
          },
          {
            "name": "Brian",
            "avatar": "https://reqres.in/img/faces/1-image.jpg",
            "amount": 2,
            "date": "2023-10-18",
            "medicine": "Penicillin"
          },
          {
            "name": "Johnson",
            "avatar": "https://reqres.in/img/faces/4-image.jpg",
            "amount": 3,
            "date": "2023-10-17",
            "medicine": "Amoxicillin"
          },
          {
            "name": "Max",
            "avatar": "https://reqres.in/img/faces/3-image.jpg",
            "amount": 4,
            "date": "2023-10-16",
            "medicine": "Erythromycin"
          }
      ],
    DOSE_RESTORAGE: [
          {
            "name": "Erythromycin",
            "amount": "10",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Amoxicillin",
            "amount": "10",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Penicillin",
            "amount": "10",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Acetaminophen",
            "amount": "10",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Ibuprofen",
            "amount": "20",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Aspirin",
            "amount": "30",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Morphine",
            "amount": "5",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Lisinopril",
            "amount": "15",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Ciprofloxacin",
            "amount": "8",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Prednisone",
            "amount": "12",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Paracetamol",
            "amount": "25",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Doxycycline",
            "amount": "7",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Atorvastatin",
            "amount": "9",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Metformin",
            "amount": "11",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Warfarin",
            "amount": "14",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Simvastatin",
            "amount": "6",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Losartan",
            "amount": "17",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Tetracycline",
            "amount": "3",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Furosemide",
            "amount": "22",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          },
          {
            "name": "Hydrochlorothiazide",
            "amount": "18",
            "expire": "2024-10-16",
            "store": "2023-10-16"
          }
        ]
            
});



