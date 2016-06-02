// Write a function called 'getName' which takes a single object argument and 
//returns the value of the 'name' property of the given object.

function getName(inputObj){
    var obj = inputObj.name
    
    return obj
}

getName({ name: 'Luisa', age: 25 }) 

// Write a function called 'totalLetters' which takes an array of strings and 
// returns the total number of letters in all strings.

function totalLetters(array){
    
    var total = 0
        for(var i=0; i < array.length; i++)
            
            total += array[i].length
            return total
}

totalLetters(['javascript', 'is', 'awesome'])
totalLetters(['what', 'happened', 'to', 'my', 'function'])

// Write a function called 'keyValue' which takes two arguments and returns a 
// new object with a key of the first argument and the value of the second 
// argument.

function keyValue(key, value){
    
    var obj = {}
    
    obj[key] = value
    return obj
}

keyValue('city', 'Denver')

// Write a function called 'negativeIndex' which takes an array and a negative 
// number, and returns the value from the array at the given negative index, as 
// if the array was circular, i.e. arr.length+num.

function negativeIndex(array, negativeNumber){
    
    var newLength = array.length + negativeNumber
    
    return array[newLength]
}

negativeIndex(['a', 'b', 'c', 'd', 'e'], -2)
negativeIndex(['jerry', 'sarah', 'sally'], -1)

// Write a function called 'removeM' which takes a single string argument and 
// removes all 'm' characters from the string. The function won't actually 
// modify

function removeM(inputStr){
    
    var newStr = inputStr.replace(/m/g, '')
    
    return newStr
}

removeM('family')
removeM('memory')

// Write a function called 'printObject' which takes a single object argument 
// and console.log's each key-value pair in the format key is value on separate 
// lines.

function printObject(inputObj){
    
    for(var key in inputObj){
        console.log(key, 'is', inputObj[key], '\n')
    }
}

printObject({ a: 10, b: 20, c: 30 })
printObject({ firstName: 'pork', lastName: 'chops' })

// Write a function called 'vowels' which takes a string and returns an array 
// of all the vowels in the string, including duplicates.

function vowels(inputStr){
    
    var array = inputStr.split('')
    var newArray = []
    
    for( i=0; i < string.length; i++){
        if(array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u'){
            newArray.push(array[i])
        }
    }
    return newArray
}

vowels('alabama')
vowels('What evil odd ducks!')

// Write a function called 'twins' which takes an array and returns true if 
// every adjacent pair of items in the array is the same.

function twins (array){
    
    for(var i = 0; i < array.length; i+=2){
        if(array[i] !== array[i+1] || array[i] === undefined){
            return false
        }
    }
    return true
}

twins(['a', 'a', 'b', 'b', 'c', 'c'])
twins(['a', 'a', 'b', 'c', 'd', 'd'])
twins(['a', 'a', 'b', 'z'])
twins(['a', 'a', undefined])

// Write a function called 'or' which takes an array of booleans and returns 
// true if any one of them is true. Given an empty array, return false. If you 
// find an item that is true, the function should return true immediately and 
// not continue checking further values.

function or(array){
    
    for(var i=0; i < array.length; i++){
        if(array[i] === true){
            return true
        }
    }
    return false
}

or([false, false, true, false])
or([false, false, false])
or([])

// Write a function called 'unique' which takes an array of strings, and 
// returns a new array consisting of the unique values (no duplicates).

function unique(array){
    
    var newArray = []
    
    for(var i=0; i<array.length; i++){
        if(array.indexOf(array[i]) == -1){
            newArray.push(array[i])
        }
    }
    return newArray
}

unique(['a', 'b', 'a', 'c', 'd', 'd'])
unique(['todd', 'avery', 'maria', 'avery'])
















