// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {
/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
//have identity take any value and return it
identity: function(value) {
    //return the value
    return value;
},

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
//have typeof take any value and return its type as a string
typeOf: function(value) {
    //return its type as a string if the type is not an object
    if (typeof value !== 'object') {
    return typeof value;
    //if it is, see if it's an array, if so..
    } else if (Array.isArray(value)) {
        //return array
        return 'array';
        //if it's not an array either, see if it's null. If so...
    } else if (value === null) {
        //return null
        return 'null';
        //if it's not any of those
    } else {
        //it's an object. return object
        return 'object';
    }
},

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
// have first take the arguments of an array and a number
first: function(array, number) {
    //If <array> is not an array, or *if the number is negative*, return []
    if (!Array.isArray(array) || number < 0) {
        //return []
        return [];
        //If <number> is not given or not a number, return just the first element in <array>.
    } else if (typeof number !== 'number') {
        //return the first element of the array
        return array[0];
        //*If the number is greater than the length of the array*
    } else if (number > array.length) {
        // return the array
        return array;
        //Otherwise, return the first <number> items of <array>
    }    else {
        //return the number of items from the array from the front
        return array.slice(0, number );

    }
    
    
},

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
last : function(array, number) {
//If <array> is not an array, or *if the number is negative*, return []
if (!Array.isArray(array) || number < 0) {
    //return []
    return [];
    //If <number> is not given or not a number, return just the first element in <array>.
} else if (typeof number !== 'number') {
    //return the last element of the array
    return array[array.length - 1];
    //*If the number is greater than the length of the array*
} else if (number > array.length) {
    // return the array
    return array;
    //Otherwise, return the last <number> items of <array>
}    else {
    //return the number of items from the array from the back
    return array.slice(number - 1, array.length);
}
},
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
indexOf: function (array, value) {
    //iterate over array
    for (let i = 0; i < array.length; i++) {
        //check value against each index of the array. If they match...
        if (array[i] === value) {
            //return that index
            return i;
        }
    }//if none of them match the value, return -1
    return -1;
},

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
contains: function (array, value) {
    //use a ternary to return true or false ^ array has the value
    return array.includes(value) ? true : false; 
},

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
each: function(collection, func) {
    //if collection is an array, expose element to the function by[element, index, collection]
    
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
             func(collection[i], i, collection);
        }  
        } else {
            //if collection is an object, pass function through by value, key, collection
            for (let key in collection) {  
                func(collection[key], key, collection)
        }
    }

},

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
unique: function (array) {
    //create a storage array
    let sto = [];
    //if the index that resolves to any value of the array is the same as the one we're on, we should push that value to the new array
    //iterate over the array
    for (let a = 0; a < array.length; a++) {
        //if the value is on the same index as the one from index of
        if (_.indexOf(array, array[a]) === a) {
            //push the value into the storage array
            sto.push(array[a]);
        }

    }



    //return storage array
    return sto;
},

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
filter: function(array, func) {
    //create output array
    let output = [];
//iterate over the array
 for (let i = 0; i < array.length; i++) {
// //pass each item through the function, if truthy...
 if (func(array[i], i, array)){
// //push into output array
 output.push(array[i]);
}
 }
    //return output array
    return output;
},

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
reject: function (array, func) {
      //create output array
      let output = [];
      //iterate over the array
       for (let i = 0; i < array.length; i++) {
      // //pass each item through the function, if falsey...
       if (!func(array[i], i, array)){
      // //push into output array
       output.push(array[i]);
      }
       }
          //return output array
          return output;
},

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
partition: function (array, func) {
    //create two storage arrays
    let sto = [];
    let rage = []; 
    //create output array
     let output = [];
     //iterate over the array
      for (let i = 0; i < array.length; i++) {
     // //pass each item through the function, if truthy...
      if (func(array[i], i, array)){
     // //push into output array
      sto.push(array[i]);
     }
     
      }
       //iterate over the original array again
       for (let x = 0; x < array.length; x++) {
        // //pass each item through the function, if falsey...
         if (!func(array[x], x, array)){
        // //push into output array
         rage.push(array[x]);
        }
         }//push the storage arrays into the output array
         output.push(sto);
         output.push(rage);
            //return output array
            return output;

},


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
map: function(collection, func) {
    //create a storage array
let sto = [];
//check if collection is an array. If it is...
if (Array.isArray(collection)) {
//have the function take in element, index#, collection. push the results into the storage array
    for (let i = 0; i < collection.length; i++) {
         sto.push(func(collection[i], i, collection));
    }  //if not, have the function take in a value, and it's key. push the results into the storage array
    } else {
        for (let key in collection) {  
            sto.push(func(collection[key], key, collection));
    }
}    //return the array
    return sto;
},

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
pluck: function(array, prop) {
    //create a storage array
    let sto = [];
    //iterate over the array
    for (let a = 0; a < array.length; a++) {
        //at each iteration, add the property
        for (let key in array) {
            sto.push(array[a][prop]);
        }
    }//return storage array
    //Remove current(and now, any) duplicates
    return _.unique(sto);
},

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
every: function (collection, func) {
//if func isn't a function and the collection is an array
if (typeof func !== 'function' && Array.isArray(collection)) {
// iterate over the array
for (let i = 0; i < collection.length; i++) {
    //if any values are falsey...
    if (!collection[i]) {
        //return false
        return false;
    }
}
//if func isn't a function and the collection is an object
} else if (typeof func !== 'function' && !Array.isArray(collection)) {
//iterate over the object
for (let key in collecttion) {
    //if any values are falsey
    if (!collection[key]) {
        //return false
        return false;
    }
}
} else if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {//if we get a falsey result...
             if (!func(collection[i], i, collection)) {
                //return false
                return false;
             } 
           
        }  
        } else {
            //if collection is an object, pass function through by value, key, collection
            for (let key in collection) {  //if we get a falsey value...
               if (!func(collection[key], key, collection)) {
                //return false
                return false;
               }
        }

    }//if all tests pass, return true
    return true;

},

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
some: (collection, func) => {
    //if func is not a function and collection is an array
    if (typeof func !== 'function' && Array.isArray(collection)) {
        //iterate over the array
        for (let i = 0; i < collection.length; i++) {
            //if anything returns truthy...
            if (collection[i]) {
                //return true
                return true;
            }
        }//if func is not a function and collection is an object
    } else if (typeof func === 'object' && func !== null) {
        //iterate over the object
        for (let key in collection) {
            //if any values are truthy
            if (collection[key]) {
                //return true;
            }
        } 
    //if func is a function, use _each on the collection
     } else if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {//if we get a falsey result...
         if (func(collection[i], i, collection)) {
            //return true
            return true;
         } 
       
    }  
    } else {
        //if collection is an object, pass function through by value, key, collection
        for (let key in collection) {  //if we get a falsey value...
           if (func(collection[key], key, collection)) {
            //return true
            return true;
           }
    }

}//if all tests fail, return false
return false;
},

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
reduce: (array, func, seed) => {
   //create an output variable
   let output;
    //if seed is not given, use the first element of array
    if (seed === undefined) {
        output = array[0];   
    //iterate through array 
    for (let i = 1; i < array.length; i++) {
        //call the function at each iteration
output = func(output, array[i], i);
    }
    return output;
} else {//if there is a seed
    //then output is equal to the seed
    output = seed;
//iterate over the array
for (let i = 0; i < array.length; i++) {
    //call the function at each iteration
    output = func(output, array[i], i);
}
}//return the output
return output;
},
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*///set extend to take two objects +potinf(plus potential infinity)
extend: (object1, object2, ...objects) => {
    //move all of the subsequent arrays' properties and values to the first array
 return Object.assign(object1, object2, ... objects);
//iterate over the object
//  for (let key in object2) {
//      //set up a function that gives object1 all the info held by object 2
//      object1.object2.key = object2[key]
//          return object1;
//     }

}
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}