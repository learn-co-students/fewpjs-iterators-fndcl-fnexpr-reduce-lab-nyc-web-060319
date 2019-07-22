const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let total = 0;

const totalBatteries = batteryBatches.reduce(function(total, battery){
    // let total = 0;
   total += battery
    return total
})