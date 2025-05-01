// learning function
// normal function
// arrow function

function add (num1:number, num2:number=10): number{
    return num1 + num2;
}


add(2 , 2)


const addArrow = (num1: number , num2 : number): number=> num1+num2 


// object --|> funtion --> method

const poorUser ={
    name: "tanver",
    balance: 0,
    addBalance(balance:number):string{
        return `My New balance is  ${this.balance+balance}`;
    }
}


const arr : number []= [1,2,4]

const newArray: number[] = arr.map((ele : number) : number => ele *ele)