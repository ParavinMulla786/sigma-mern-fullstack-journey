//Q. Create Traffic Light system that shows what to do based on color

let color = "red";
if (color === "red"){
    console.log("Stop");

}
if(color === "yellow"){
    console.log("slow down")
}
if(color === "green"){
    console.log("go");
}

//Q create a system to calculate popcorn prices based on the size customer asked for 
// if size XL - Price  250
// if size L - Price  200
// if size M - Price  100
// if size S - Price  50

let size = "L";
if (size === "XL"){
    console.log("Price 250")
}
else if (size === "L"){
    console.log("Price 200")
}
else if(size === "M"){
    console.log("Price 100")
}
else if (size === "S"){
    console.log("Price 50")
}


// string first letter start with a  and length > 3 so good string
 let str = "apple";
 if(str[0]==="a" && str.length >3){
    console.log("Good String")
 }
 else{
    console.log("not a good string")
    
 }

//  use switch statement to print day of week based on number

let day = 4;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday, Fun day");
        break;
    default:
        console.log("Invalid day number");
}

