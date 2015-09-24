/**
 * solves three of five problem severy SE should be able to solve
 * Created by symor on 9/22/2015.
 */
/*
Problem 1: Write four functions that return the sum of the numbers in a given list using a for-loop, a while-loop,
 recursion, and underscore. Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.
 */
var testNums = [1,2,3,4]
function sumFor(nums){
  var total=0;
  for(index in nums) {
    total += nums[index];
  }
  return total;
}
function sumWhile(nums){
  var total = 0;
  var i = 0
  while(i<nums.length){
    total+=nums[i];
    i++;
  }
  return total;
}
function sumRecursion(nums){
  if(nums.length===0){
    return 0;
  }
  else{
    return nums[0]+sumRecursion(nums.slice(1,nums.length));
  }
}
function sumTheSimpleWay(nums){
  return _.reduce(nums, function(memo,value){return memo+=value}, 0);
}

//console.log(sumTheSimpleWay(testNums));
/*
Problem 2: Write a function called zipList that accepts two lists of equal length and returns the result of
 alternatingly taking elements. For example: given the two lists [a, b, c] and [1, 2, 3], the function should return
 [a, 1, b, 2, c, 3]. zipList should not use underscore. Now write a function called zipListTheSimpleWay that does the
 same thing using underscore.
 */
var testList1=[1,2,3];
var testList2=["a","b","c"];
function zipList(list1, list2){
  var zippedList = [];
  for(i=0; i<list1.length; i++){
    zippedList.push(list1[i]);
    zippedList.push(list2[i]);
  }
  return zippedList;
}

function zipListTheSimpleWay(list1, list2){
  return _.flatten(_.zip(list1,list2));
}
//console.log(zipListTheSimpleWay(testList1, testList2));
/*
Problem 3: Write a function called fib that returns a list of the first 100 Fibonacci numbers. By definition, the first
two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. As an
example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.
*/

function fib(){
  var next = 1;
  var old = 0;
  var hold = 0;
  var fibList = [0];
  for(i=1; i<100 ;i++){
    fibList.push(next);
    hold=old;
    old=next;
    next+=hold;
  }
  return fibList;
}
//console.log(fib());
/*
Problem 4 Write a function that given a list of non negative integers, arranges them such that they form the largest
possible number. For example, given [50, 2, 1, 9], the largest formed number is 95021.
*/
var testNums2 = [50, 2, 1, 9];
function largestNum(list){
  var copy=list;
  var holder =0;
  for(index in copy){
    for(pndex in copy){
      if(index>pndex){
        if(redDig(copy[index]) > redDig(copy[pndex])){
          holder=copy[index];
          copy[index]=copy[pndex];
          copy[pndex]=holder;
        }
      }
      else if(index<pndex){
        if(redDig(copy[index]) < redDig(copy[pndex])){
          holder=copy[index];
          copy[index]=copy[pndex];
          copy[pndex]=holder;
        }
      }
    }
  }
  return makeNumber(copy);
}

function makeNumber(list){
  var number = "";
  for(index in list){
    number+=list[index];
  }
  return number;
}
function redDig(num){
  if(num<10){
    return num;
  }
  else{
    return redDig(num/10);
  }
}

//console.log(largestNum(testNums2));
/*
Problem 5 Write a program that outputs all possibilities to put + or - or
nothing between the numbers 1, 2, ..., 9
(in this order) such that the result is always 100. For example:
1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.
*/

var all9=[1,2,3,4,5,6,7,8,9];
function find100(sum, num, index){

}