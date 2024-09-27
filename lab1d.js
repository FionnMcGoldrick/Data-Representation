

//constant ages variables
const ages =  [25, 31, 42, 77];

//arrow function
let a = ages.map((item)=>{

    //if age is less than 70 multiply it by 2
    if(item < 70){
        console.log(item*2);
    }
})
