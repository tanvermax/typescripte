{

    //ternary operator || ptional chaining || nullish coalescing

    // const age: number = 18;

    // if (age >= 18) {
    //     console.log('Adult',)
    // }
    // else {
    //     console.log("Not adult");

    // }

    //nullish coalescing
    //null / undefine --> decision making


    const isAuthenticated = "";
    const result = isAuthenticated ?? " guast";
    const result2 = isAuthenticated ? isAuthenticated : " guast";

    console.log({ result }, { result2 });

    type User ={
        name : string,
        address : {
            city:string;
            road: string;
            presentAddress: string;
            parmanentaddres?: string;
        }
    }
    const user: User={
        name : "tanver",
        address : {
            city: " cumillsa",
            road:" laksham road",
            presentAddress: "ctg road",
        }
    }

    const parmanentaddres = user?.address?.parmanentaddres?? " no pamanent adrrress";
    console.log(parmanentaddres);
    


}