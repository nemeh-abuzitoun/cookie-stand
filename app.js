
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
        this.customerPerHour = getRandomNumber( minHourlyCustomers, maxHourlyCustomers);
return this.customerPerHour;
}

let seattleBranch  = document.createElement("sales");
seattleBranch .innerHTML = "CLICK ME";                  
document.body.appendChild(seattleBranch );            

}
fisrtbranch: function(){
    let seattleBranch = getElementBYId("sales");
    let branchName = document.createElementNS('branch2');
    seattleBranch.appendChild(name);
   branchName.textContent = branch1.name;
 let table = document.createElementNS('table1');
 seattleBranch.appendChild(table);
 for (let i=0; i < branch1.costomer.length; i++)
{
    let lilst = document.createElementNS('li');
    table.appendChild(lilst);
    lilst.textContent = `${shiftTime[i]}`: ${branch1.costomer[i]}  cookies`;
    branch1.avaregeAmount = branch1.avaregeAmount + brtanch1.costomer[i];
    if (i==14){
        lilist.textContent =`avaregeAmount : ${branch1.avaregeAmount} cookies;
    }
}

}










}

function getRandomNumber (min,max){
    return Math.floor(Math.random() * (max - min) + min);
}
branch1.customerPerHour()
console.log(branch1.costomer);
branch1.fisrtbranch();