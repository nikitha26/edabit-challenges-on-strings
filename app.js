// //Check its zero or one 
// function fun1(x){
// var name = x.split('');
// name.forEach(x => {
//     if(x == 1)
//     {
//         console.log("One")
//     }
//     else{
//         console.log("Zero")
//     }
// });
// }
// fun1("00001111")

// function fun1(x){
//     var name = x.split('');
//     name.forEach(function (a) {
//         if(a == 1)
//         {
//             //console.log("true")
//         }
//         else{
//             console.log("false")
//         }
//     });
//     }
//     fun1("01")
    
    

// function myfun(x){
// var name = x.map(fun1)

// }
// myfun("0101")

//convert string to integer and integer to string
// var name = 33;
// console.log(name.toString());

// var ma = "11";
//console.log(parseInt(ma));

// function Go(num) {
//     var name = num.split('')
// 	for(i=0;i>=name.length;i++)
// 		{
// 			return name[i] +"-";
// 		}
// }
//console.log(Go(5));

//check whther it is divide by 3 or 5 or both
// var s = 8;
// console.log(s%3);

function check(num){
if(num%3==0 && num%5==0)
{
	console.log("helloworld");
}
else if(num%5 == 0){
	console.log("world");
}
else if(num%3 == 0){
	console.log("hello");
}

}
check(25)


	