const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

function returnFirstTwoDrivers() {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers() {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiply) {
    return function (num) {
      return multiply * num;
    }
  }

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, whichDrivers) {
    return whichDrivers(drivers);
}

// function mySubtract (number) {
//     if (number > 11) {
//       return number - 11;
//     } else {
//       return 11 - number;
//     }
//     return false
//   }
  
//   console.log(mySubtract(100));