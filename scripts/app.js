//WRAP YOuR JAVASCRIPT IN THE WINDOW ONLOAD ALWAYS.


//declare a selector named container
//access container using document.getElementById('name')


window.onload = function(){

  //wrap around variables and functions
  //components can be outside of this. they need it all to be in window.onload so that variables are hoisted.
  console.log('all files are loaded');

//buttons
function liftButton(domElement, nameOfLift, count, goal){
  this.count=count || 0;
  this.goal=goal;
  this.nameOfLift = nameOfLift;
  this.domElement = document.getElementById(domElement);
  // this.render = function(innerHTML){
  //   this.domElement = document.getElementById("right-sidebar");
  //   this.domElement.innerHTML = innerHTML
  // };
  this.initialize = function() {
      if (this.goal == null||0){
        this.goal = parseInt(prompt('Enter a goal:'));
      };
      console.log(this.goal);
  };
  this.render = function(value) {
    this.domElement.innerHTML = value;
  }
  this.updateLiftCount = function(){
    this.count += 1;
    var status = this.buildCountString();
    console.log(status);
    this.render(status);
    return this.count;
  };
  this.buildCountString = function(){
    return this.nameOfLift + ": " + this.count + " out of " + this.goal;
  };

  }

var squatCounter = new liftButton('workout-counter','Squat');
var deadCounter = new liftButton('dead-counter','Deadlift');
var benchCounter = new liftButton('bench-counter','Bench');

var startSquat = document.getElementById('startButton');
var addSquat = document.getElementById('addPoint');

startSquat.addEventListener('click', function() {
  squatCounter.initialize(status);
});

addSquat.addEventListener('click',  function () {
  squatCounter.updateLiftCount(0,0);
});

var startDead = document.getElementById('startDeadButton');
var addDead = document.getElementById('addDeadButton');

startDead.addEventListener('click', function() {
  deadCounter.initialize(status);
});

addDead.addEventListener('click',  function () {
  deadCounter.updateLiftCount(0,0);
});

var startBench = document.getElementById('startBenchButton');
var addBench = document.getElementById('addBenchButton');

startBench.addEventListener('click', function() {
  benchCounter.initialize(status);
});

addBench.addEventListener('click',  function () {
  benchCounter.updateLiftCount(0,0);
});



var container = document.getElementById('right-sidebar');

} //end window.onload. dont go outside of this.

//create a user interface component.
//create an object that can update itself
//and visually show if needed

//ex1: user component

// var user = {
//   name: null,
//   score: 0,
//   domElement: null,
//   initialize: function(elementToAppendTo) {
//     if (this.name == null){
//       this.name = prompt('enter name');
//     }
//     //create element. set innerHTML.
//     this.domElement = document.createElement('div');
//     elementToAppendTo.appendChild(this.domElement);
//
//     console.log('initialize complete');
//
//   },
//   //elementToAppendTo: document.selector for an individual element
//   render: function(innerHTML){ //innerHTML: valid html to place in DOM element
//     if (typeof(innerHTML)=='string'){
//       this.domElement.innerHTML = innerHTML;
//     }
//   },
//
//   getName: function(){
//     return this.name;
//   },
//   saveName: function(newName){
//     if (typeof(newName) == 'string' && newName.length>0) {
//       this.name = newName;
//     } else{
//       alert('needs a string name');
//     }
//   },
//   getScore: function(){
//     return this.score; //mutator function
//   },
//
// };

// var component = {
//   domElement: null,
//   initialize: function() {
//     this.domElement = document.createElement('div');
//     selector.appendChild(this.domElement);
//   },
//   render: function(statusText){
//     //update the dom element.
//     this.domElement.innerHTML = statusText;
//   }
// };
