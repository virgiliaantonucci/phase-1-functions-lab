// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(42-someValue)
}

function distanceFromHqInFeet(someValue) {
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distanceFromHqInBlocks(someValue)*264
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(destination-start)*264
}

function calculatesFarePrice(start, destination) {
    let distanceTravelledinFt = distanceTravelledInFeet(start, destination)
    let fare
    //returns the fare for the customer
    if (distanceTravelledinFt < 2000){
        fare = (distanceTravelledinFt-400) * 0.02
            if (fare < 0) {
                fare = 0
                return fare
            }
            return fare
    }
    if (distanceTravelledinFt > 2500) {
        return "cannot travel that far"
    }
    else{
        fare = 25
        return fare
    }
}