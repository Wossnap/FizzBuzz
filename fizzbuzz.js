function fizzBuzz(x){
    const configs = {3: 'fizz',5: 'buzz',7: 'bang',10: 'hro'}

    let output = ''

    Object.keys(configs).map((key)=>{
        //console.log(x % key)
        if(x % key  === 0 && x!=0){
            output = output+configs[key];
        }
    }) 

    if (output == ''){
        return x;
    }

    return output;
    
}
// console.log(fizzbuzz(0))
// for(var y=0;y<100;y++)
// {
//     console.log(fizzbuzz(y));
// }

module.exports = fizzBuzz;

