const disha = 56;
const salman = 95;
if(disha > salman){
    console.log('Disha will get the strawverry');
}
else{
    console.log('salman will eat the strawverry');

}


// inside a function

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}


const max = getMax(56, 79);
console.log('max of two is:', max);