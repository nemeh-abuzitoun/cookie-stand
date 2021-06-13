
'use strict';
let shiftTime =[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let SeattleBranch={
    name: 'seattle'
    minHourlyCustomers:23,
    maxHourlyCustomers:65,
    averageCookiesPerCustomer:6.3,
    avaregeAmount:0,
    costomer[],
    customerPerHour:function(){
        this.customerPerHour = getRandomNumber(23,65);

}
let seattleBranch  = document.createElement("BUTTON");
seattleBranch .innerHTML = "CLICK ME";                  
document.body.appendChild(seattleBranch );            

}













    function getRandomNumber(23, 65) {
        min = Math.ceil(23);
        max = Math.floor(65);
        return Math.floor(Math.random() * (65 - 23 + 1) + 23); //The maximum is inclusive and the minimum is inclusive
   
}

