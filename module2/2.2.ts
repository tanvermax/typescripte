{

    //interfae , type 



    //object
    type user = {
        name: string,
        age: number
    };

    ///object
    interface user2 {
        name: string;
        age: number
    };



    //primitive type

    type roolNumber = number;



    // intersec

    type userWithRole1 = user & { role: string };

    interface userWithRole2 extends user2 {
        role: string;
    }

    const user1: userWithRole2 = {
        name: "tanver",
        age: 10,
        role: "manager"
    };

    type Roll1 = number[];


    interface Roll2 {
        [index: number]: number

    }

    const roolNumber: Roll2 = [1, 2, 3]


    type Add1 = (num1:  number, num2: number)=>number
    interface Add2 {
        (num1: number, num2: number): number
    }






}