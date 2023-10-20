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
          "email": "alex@dashwind.com",
          "amount": 1,
          "date": "2023-10-20T23:59:59.999Z",
          "medicine": "Aspirin"
        },
        {
          "name": "Johnson",
          "avatar": "https://reqres.in/img/faces/4-image.jpg",
          "email": "ereena@dashwind.com",
          "amount": 1,
          "date": "2023-10-19T23:59:59.999Z",
          "medicine": "Ibuprofen"
        },
        {
          "name": "Max",
          "avatar": "https://reqres.in/img/faces/3-image.jpg",
          "email": "jhon@dashwind.com",
          "amount": 1,
          "date": "2023-10-19T23:59:59.999Z",
          "medicine": "Acetaminophen"
        },
        {
          "name": "Brian",
          "avatar": "https://reqres.in/img/faces/1-image.jpg",
          "email": "brian@example.com",
          "amount": 2,
          "date": "2023-10-18T23:59:59.999Z",
          "medicine": "Penicillin"
        },
        {
          "name": "Johnson",
          "avatar": "https://reqres.in/img/faces/4-image.jpg",
          "email": "johnson@example.com",
          "amount": 3,
          "date": "2023-10-17T23:59:59.999Z",
          "medicine": "Amoxicillin"
        },
        {
          "name": "Max",
          "avatar": "https://reqres.in/img/faces/3-image.jpg",
          "email": "max@example.com",
          "amount": 4,
          "date": "2023-10-16T23:59:59.999Z",
          "medicine": "Erythromycin"
        },
        {
          "name": "Brian",
          "avatar": "https://reqres.in/img/faces/1-image.jpg",
          "email": "alex@dashwind.com",
          "amount": 1,
          "date": "2023-10-20T23:59:59.999Z",
          "medicine": "Aspirin"
        },
        {
          "name": "Johnson",
          "avatar": "https://reqres.in/img/faces/4-image.jpg",
          "email": "ereena@dashwind.com",
          "amount": 1,
          "date": "2023-10-19T23:59:59.999Z",
          "medicine": "Ibuprofen"
        },
        {
          "name": "Max",
          "avatar": "https://reqres.in/img/faces/3-image.jpg",
          "email": "jhon@dashwind.com",
          "amount": 1,
          "date": "2023-10-19T23:59:59.999Z",
          "medicine": "Acetaminophen"
        },
        {
          "name": "Brian",
          "avatar": "https://reqres.in/img/faces/1-image.jpg",
          "email": "brian@example.com",
          "amount": 2,
          "date": "2023-10-18T23:59:59.999Z",
          "medicine": "Penicillin"
        },
        {
          "name": "Johnson",
          "avatar": "https://reqres.in/img/faces/4-image.jpg",
          "email": "johnson@example.com",
          "amount": 3,
          "date": "2023-10-17T23:59:59.999Z",
          "medicine": "Amoxicillin"
        },
        {
          "name": "Max",
          "avatar": "https://reqres.in/img/faces/3-image.jpg",
          "email": "max@example.com",
          "amount": 4,
          "date": "2023-10-16T23:59:59.999Z",
          "medicine": "Erythromycin"
        }
      ]
      
      
});