// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///

//Stopwatch is an object holds the actual business logic and data of the stopwatch: (a) maintaining a 'state' (i.e. running vs not running), (b) managing the 'time' on the stopwatch, and performing basic actions like starting and stopping the timer, and (c) keeping track of and creating 'lap' records.

// tickClock. This method's job is to call itself every ten milliseconds, as long as the stopwatch is running, and to call methods on Stopwatch and AppController each time. Please do not alter this method.. Doing so could cause the entire application to break.

const Stopwatch = {
  tickClock: function () {
    if (Stopwatch.isRunning) {

      //setTimeOut Executes a function, after waiting a specified number of milliseconds.
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function () {
    this.millisecs += 10;
  if (this.millisecs >= 1000) {
      // this.millisecs = this.millisecs - 1000;
      this.millisecs -= 1000;
      this.secs++;
    }
  // if (this.secs > 59) {
    if (this.secs >= 60) {
    this.secs -= 60;
    this.mins++
  };  
  },
  reset: function () {
    // Your Code Here
    this.mins = 0;
    this.secs = 0;
    this.millisecs = 0;
    this.laps = [];
  },
  start: function () {
    if (!this.isRunning){
      this.isRunning = true;
      this.tickClock();
    }
  // this.isRunning = true;
  // tickClock();
  },
  stop: function () {
Stopwatch.isRunning= false;
  },

  lap: function () {
    
}

/// User Interface ///

//ViewEngine is responsible for showing the data managed by Stopwatch in the browser by changing the time display and the lap list. 
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    document.getElementById('mins').innerHTML = ViewHelpers.zeroFill(mins, 2);
    document.getElementById('secs').innerHTML = ViewHelpers.zeroFill(secs, 2);
    document.getElementById('millisecs').innerHTML = ViewHelpers.zeroFill(millisecs/10, 2);
  },
};

//   $('mins').HTML = ViewHelpers.zeroFill(mins, 2);
  //   $('secs').HTML = ViewHelpers.zeroFill(secs, 2);
  //   $('millisecs').HTML = ViewHelpers.zeroFill(millisecs/10, 2);
  //}
//   const ViewEngine = {
//     updateTimeDisplay: function (mins, secs, millisecs) {  
//   document.getElementById('mins').innerHTML = ViewHelpers.zeroFill(mins, 2);
//   document.getElementById('secs').innerHTML = ViewHelpers.zeroFill(secs, 2);
//   document.getElementById('millisecs').innerHTML = ViewHelpers.zeroFill(millisecs/10, 2);
// }
// };

  updateLapListDisplay: function(){
    var laps = Stopwatch.laps;
    var lapList = document.getElementById('lap-list');
    lapList.innerHTML = '';
    for (var i = 0; i < laps.length; i++) {
      lapList.innerHTML += "\
      <li>" +
        ViewHelpers.zeroFill(laps[i].mins, 2) + ":" +
        ViewHelpers.zeroFill(laps[i].secs, 2) + ":" +
        ViewHelpers.zeroFill(laps[i].millisecs/10, 2) +
      "</li>";
    }
  },
};

//ViewHelpers holds helper methods used by ViewEngine as part of its work.

const ViewHelpers = {
  zeroFill: function (number, length) {
  const str = number.toString();
  let numZeroes = Math.max(length - str.length, 0);
  for (let i = 0; i < (length - str.length); i++){
    str = '0' + str;
  }
  return str;
  },
};

/// Top-Level Application Code ///

//AppController, as the name suggests, sits on top of and controls the application as a whole -- it handles UI events and moves data from one component to another. Its methods will get attached as event handlers to different elements in the DOM (which is why they have names like handleClickStart, handleClickStop, etc).

const AppController = {
  handleClockTick: function () {
  ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  handleClickStart: function () {
    if (!Stopwatch.isRunning) { Stopwatch.start(); }
  },
//add event listener for the start button
// $('#start').on('click', tickClock)
  handleClickStopReset: function () {
    // Your Code Here
  },
  handleClickLap: function () {
   if (Stopwatch.isRunning){
     Stopwatch.stop();
   } else{
     Stopwatch.reset();
     ViewEngine.updateTimeiaply(0, 0, 0);

   }
  }
};

window.onload = function () {
  // Attach AppController methods to the DOM as event handlers here.
  document.getElementById('start').onclick = AppController.handleClickStart;
 
  document.getElementById('stop').onclick = AppController.handleClickStopReset;

   document.getElementById('lap').onclick = AppController.handleClickLap;
};
