{


    //type  alias
    type student = {
        name: string,
        age: number,
        gender: string,
        contactNo?: string,
        address: string
    }


    const student1: student = {
        name: 'Mezba',
        age: 50,
        gender: 'male',
        contactNo: '0170189048034',
        address: " cirty dahka",
    };
    const student2: student = {
        name: 'fiha',
        age: 40,
        gender: 'female',
        contactNo: '0170189048034',
        address: " italy",
    }
    const student3: student = {
        name: 'fiha',
        age: 40,
        gender: 'female',
        contactNo: '0170189048034',
        address: " italy",
    }


    type Add  = (num1: number, num2: number)=> number;

    const add : Add = (num1, num2)=> num1+ num2


}