function sum(a, b) {
    let value1 = a;
    let value2 = b;
    let result = value1 + value2;
    return result;
}
 function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
 function factorial(a)
{    
    let result = 1;
    for(let i = a; i > 0; i--)
    {
        result = result * i ;   
    }        
     return result;                        
}
 /*  arraySum - calculates the sum of two arrays by summing each element.
    The sum of arrays [1,2] and [3, 4] would be (1+3) + (2+4) = 10.
    The input arrays need to be of same length */
function arraySum(a, b)
{   
    let result = 0;
     for(let i = 0; i < a.length; i++)
    {        
        result = result + a[i] + b[i];  
          
    }
     return result;
}
{ console.log("sum: " + sum(30, 20));
console.log("max: " + max(10, 13));
console.log("factorial: " + factorial(3));
const arraya = [1, 2, 3, 4];
    const arrayb = [10, 10, 20, 20];
    console.log("arraySum: " + arraySum(arraya, arrayb));
}

