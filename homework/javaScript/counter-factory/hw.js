// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}

  //this function calculates how many counters you have. and storing the last count Id of ach in an array. It begins at 0. Think of lastCounId as the Last Counter Id
  createCounter: function () {
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function (countId) {
    //search the counters array for that particular counter. when we find it we return the counter and returns true, then it returns counter count.
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function (counter) {
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function (countId) {

    //takes the ID of counter and console.logs it when called in.
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function (counter) {
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function (countId) {
    // deletes a counter of a certain Id. 
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function (counter) {
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function (counter) { //
      return counter.countId !== countId
    });
  }
};

// UI // is the user interface -- what the user sees 
const Presenter = {
  insertCounterComponent: function (newCountId) {
    console.log(`insert counter component #${newCountId}`);

    let newCounterComponent = document.createElement('div');
    newCounterComponent.className = "counter";
    newCounterComponent.innerHTML =
    `<h3>Count: <span>0</span></h3> 
    <button class='increment'> +1 </button> 
    <button class='delete'> Delete </button>`;
    //^creating a increment button and a delete button

    // The data-index thing is a data attribute -- it's a property of an element that we can use to store relevant data. All such properties can be accessed by grabbing the element from the DOM and referencing its dataset property; specifically, to get the value in data-counter-id, we would need to access a sub-property of dataset called .counterId. 
    newCounterComponent.dataset.countId=newCountId
    document.getElementById('counter-list').appendChild(newCounterComponent);
    newCounterComponent.getElementsByClassName('increment')[0].onclick= AppController.onClickIncrement;
    newCounterComponent.getElementsByClassName('delete')[0].onclick= AppController.onClickDelete;

  },
  refreshCounterComponent: function (countId) {
    //takes GetCounterValue and pushes it to the Dom
    console.log(`refresh counter component #${countId}`);
    let val = CounterCollection.getCounterValue(countId);
    document.querySelector(`[data-count-id="${countId}"] span`).innerHTML = val;
  },

  removeCounterComponent: function (countId) {             
    console.log(`remove counter component #${countId}`);
    let counterComponent = document.querySelector(`[data-count-id="${countId}"]`)
    console.log(counterComponent, counterComponent.parent);
    counterComponent.parentNode.removeChild(counterComponent);
  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function (event) {
    // Your Code Here
    //calling Object and function within object:
    CounterCollection.createCounter();
    //calling the fucntion Presenter-insertCounterComponent which is going to "insert counter component" with the argument being newCountId or number of clicks?

    Presenter.insertCounterComponent(CounterCollection.lastCountId);
    console.log(`click new counter (#${CounterCollection.lastCountId})`);
  
},

  onClickIncrement: function(event){
    let countId = Number(event.target.parentNode.dataset.countId);
    console.log(`click increment #${countId}`);
    CounterCollection.incrementCounter(countId);
    Presenter.refreshCounterComponent(countId);
  },
  onClickDelete: function(event){                           // REACH
    let countId = Number(event.target.parentNode.dataset.countId);
    console.log(`click delete #${countId}`);
    Presenter.removeCounterComponent(countId);
    

  }
};

window.onload = function () {
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
