const heights = [65,66,78,23,45,90,65];
function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
       
        if(num > max){
            max = num;
        }
        
    }
    return max;

}
const max = getMax(heights);
console.log('max value is:',max);