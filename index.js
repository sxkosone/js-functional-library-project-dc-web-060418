fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      //takes in collection and iteratee-function
      for (let element in collection) {
        iteratee(collection[element])
      };
      return collection;  
    },

    map: function(collection, iteratee) {
      //takes in collection and iteratee-function, returns NEW collection values in array
      newCollection = Object.assign({}, collection)
      for (let element in newCollection) {
        newCollection[element] = iteratee(newCollection[element])
      };
      return Object.values(newCollection);
    },

    reduce: function(collection, iteratee, acc) {
      for (let element in collection) {
        acc = iteratee(acc, collection[element], collection)
      };
      return acc;
    },

    find: function(collection, predicate) {
      let answer;
        for (let element in collection) {
          if (predicate(collection[element])) {
            return answer = collection[element];
          };
        };
    },

    filter: function(collection, predicate) {
      const answerArray = [];
      for (let element in collection) {
        if (predicate(collection[element])) {
          answerArray.push(collection[element]);
        }
      }
      return answerArray;
    },

    size: function(collection) {
      let size = 0;
      for (let element in collection) {
        size++;
      }
      return size
    },

    first: function(array, n) {
      if (!n) {
        return array[0];
      } else {
        return array.slice(0, n);
      }
    },

    last: function(array, n) {
      if (!n) {
        return array[array.length-1];
      } else {
        return array.slice(array.length-n);
      };
    },

    compact: function(array) {
      const newArray = [];
      for (let item of array) {
        if (item) {
          newArray.push(item);
        }
      }
      return newArray;
    },

    sortBy: function(array, iteratee) {
      const newArray = [...array].sort(
        function(a, b) {
          return iteratee(a) - iteratee(b);
        }
      )
      return newArray;
    },

    flatten: function(array, shallow) {
      const shallowArray = [];

      if (shallow) {
        for (let item of array) {
          if ({}.toString.call(item) === "[object Array]") {
            shallowArray.push(...item);
          } else {
            shallowArray.push(item);
          }
        }
      } else {
        const unnesting = function(arr) {
          
          for (let item of arr) {
            if ({}.toString.call(item) !== "[object Array]") {
              //debugger
              shallowArray.push(item)
            } else {
              //item is array
              unnesting(item);
            }
          }
          
        };
        unnesting(array);
            
      }
      return shallowArray;

    },

    uniq: function(array, isSorted, iteratee) {
      let newArray = [];
      if (!iteratee) {
        for (let i = 0; i < array.length; i++) {
          if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
          }
        }
      } else {
        let sortedArray = [...array];
        if (!isSorted) {
          sortedArray = [...array].sort()
        }
        valueArray = sortedArray.map(iteratee)
        uniqValueArray = []
        for (let i = 0; i < array.length; i++) {
          if (uniqValueArray.indexOf(valueArray[i]) === -1) {
            uniqValueArray.push(valueArray[i]);
            newArray.push(sortedArray[i])
          }
        }

      }
      return newArray;
    },

    keys: function(object) {
      return Object.keys(object);
    },

    values: function(object) {
      return Object.values(object);
    },
    
    functions: function(object) {
      const methods = [];
      for (let key in object) {
        if ({}.toString.call(object[key]) === "[object Function]")
          methods.push(key);
      };
      return methods;
    },


  }
})()

fi.libraryMethod()
