const arrayRemoveValue= (arr,valToRemove)=>{
var res = []
for (var i = 0, len = arr.length; i < len; i++) { 
    if (arr[i]!== valToRemove) { 
        // console.log('arr[i]!',arr[i])
        res.push(arr[i]);
    }
}
return res
}

const arrayIsValueInArray = (arr,val)=>{
    for (var i = 0, len = arr.length; i < len; i++) { 
        if (arr[i] === val) {return true
        }
    }
    return false
}


export { arrayRemoveValue, arrayIsValueInArray }