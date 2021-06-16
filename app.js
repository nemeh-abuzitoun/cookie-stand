
'use strict';



let branchProfile = document.getElementById('branchprofile');
let branchForm = document.getElementById('branchForm');


let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let branch1 = {
    name: 'Seattle',
    MinCust: 23,
    MaxCust: 65,
    AvgCookieSale: 6.3,
    total: 0,
    cosTom: [],
    amounts: function () {
        for (let i = 0; i <= time.length; i++) {

            this.cosTom[i] = (Math.floor(randum(this.MinCust, this.MaxCust) * this.AvgCookieSale));
        }
        return this.cosTom;
    },
    firstResut: function () { 
        let seattleShop = document.getElementById('purchased');
        let header = document.createElement('h2');
        seattleShop.appendChild(header);
        header.textContent = branch1.name;

        let ulList = document.createElement('ul');
        seattleShop.appendChild(ulList);
        for (let i = 0; i < branch1.cosTom.length; i++) {
            let lilist = document.createElement('li');
            ulList.appendChild(lilist);
            lilist.textContent = `${time[i]} : ${branch1.cosTom[i]} cookies`;
            branch1.total = branch1.total + branch1.cosTom[i];
            if (i == 14) {
                lilist.textContent = `total : ${branch1.total} cookies`;
            }
        }


    }

}
function randum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);

}
branch1.amounts()
console.log(branch1.cosTom);
branch1.firstResut();


let branch2 = {
    name: 'Tokyo',
    MinCust: 3,
    MaxCust: 24,
    AvgCookieSale:1.2,
    total: 0,
    cosTom: [],
    amounts: function () {
        for (let i = 0; i <= time.length; i++) {

            this.cosTom[i] = (Math.floor(randum(this.MinCust, this.MaxCust) * this.AvgCookieSale));
        }
        return this.cosTom;
    },
    firstResut: function () {
        let tokyoShop = document.getElementById('purchased');
        let header = document.createElement('h2');
        tokyoShop.appendChild(header);
        header.textContent = branch2.name;

        let ulList = document.createElement('ul');
        tokyoShop.appendChild(ulList);
        for (let i = 0; i < branch2.cosTom.length; i++) {
            let lilist = document.createElement('li');
            ulList.appendChild(lilist);
            lilist.textContent = `${time[i]} : ${branch2.cosTom[i]} cookies`;
            branch2.total = branch2.total + branch2.cosTom[i];
            if (i == 14) {
                lilist.textContent = `total : ${branch2.total} cookies`;
            }
        }


    }

}
branch2.amounts()
console.log(branch2.cosTom);
branch2.firstResut();

let branch3 = {
    name: 'Dubai',
    MinCust: 11,
    MaxCust: 38	,
    AvgCookieSale:3.7,
    total: 0,
    cosTom: [],
    amounts: function () {
        for (let i = 0; i <= time.length; i++) {

            this.cosTom[i] = (Math.floor(randum(this.MinCust, this.MaxCust) * this.AvgCookieSale));
        }
        return this.cosTom;
    },
    firstResut: function () {
        let dubaiShop = document.getElementById('purchased');
        let header = document.createElement('h2');
        dubaiShop.appendChild(header);
        header.textContent = branch3.name;

        let ulList = document.createElement('ul');
        dubaiShop.appendChild(ulList);
        for (let i = 0; i < branch3.cosTom.length; i++) {
            let lilist = document.createElement('li');
            ulList.appendChild(lilist);
            lilist.textContent = `${time[i]} : ${branch3.cosTom[i]} cookies`;
            branch3.total = branch3.total + branch3.cosTom[i];
            if (i == 14) {
                lilist.textContent = `total : ${branch3.total} cookies`;
            }
        }


    }

}
branch3.amounts()
console.log(branch3.cosTom);
branch3.firstResut();

let branch4 = {
    name: 'Paris',
    MinCust: 38	,
    MaxCust: 24,
    AvgCookieSale:2.3,
    total: 0,
    cosTom: [],
    amounts: function () {
        for (let i = 0; i <= time.length; i++) {

            this.cosTom[i] = (Math.floor(randum(this.MinCust, this.MaxCust) * this.AvgCookieSale));
        }
        return this.cosTom;
    },
    firstResut: function () {
        let parisShop = document.getElementById('purchased');
        let header = document.createElement('h2');
        parisShop.appendChild(header);
        header.textContent = branch4.name;

        let ulList = document.createElement('ul');
        parisShop.appendChild(ulList);
        for (let i = 0; i < branch4.cosTom.length; i++) {
            let lilist = document.createElement('li');
            ulList.appendChild(lilist);
            lilist.textContent = `${time[i]} : ${branch4.cosTom[i]} cookies`;
            branch4.total = branch4.total + branch4.cosTom[i];
            if (i == 14) {
                lilist.textContent = `total : ${branch4.total} cookies`;
            }
        }


    }

}
branch4.amounts()
console.log(branch4.cosTom);
branch4.firstResut();

let branch5 = {
    name: 'Lima',
    MinCust:2,
    MaxCust: 16,
    AvgCookieSale:4.6,
    total: 0,
    cosTom: [],
    amounts: function () {
        for (let i = 0; i <= time.length; i++) {

            this.cosTom[i] = (Math.floor(randum(this.MinCust, this.MaxCust) * this.AvgCookieSale));
        }
        return this.cosTom;
    },
    firstResut: function () {
        let limaShop = document.getElementById('purchased');
        let header = document.createElement('h2');
        limaShop.appendChild(header);
        header.textContent = branch5.name;

        let ulList = document.createElement('ul');
        limaShop.appendChild(ulList);
        for (let i = 0; i < branch5.cosTom.length; i++) {
            let lilist = document.createElement('li');
            ulList.appendChild(lilist);
            lilist.textContent = `${time[i]} : ${branch5.cosTom[i]} cookies`;
            branch5.total = branch5.total + branch5.cosTom[i];
            if (i == 14) {
                lilist.textContent = `total : ${branch5.total} cookies`;
            }
        }


    }

}
branch5.amounts()
console.log(branch5.cosTom);
branch5.firstResut();















function formSubmission(event) {
    event.preventDefault();
    let name = event.target.branchName.value;
    let location =event.target.branchName;
    let workingHours = event.target.branchName;
    let newbranch = new branch(name, location, workingHours);
   newbranch.branchProfile(branchForm);
    newbranch.render();
  
    console.log(newbranch);
  }
  
  branchForm.addEventListener('submit', formSubmission);