function factorialOfNum(number)
{
    if(number == null || number == undefined || number == 0)
        {
        console.log(`Invalid Input,${number}`);
    }    
    else{
        var factorial=1;
        for (let index = number; index >=1 ; index--) {
            factorial=factorial*number;  
            number--;              
        }
        console.log(factorial);
    }

}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);



