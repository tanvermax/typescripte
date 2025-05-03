{
    // type assertion


    let anything: any;

    anything = "Next level Web Development";

    (anything as number)


const kgtoGm =(value : string | number) : string | number | undefined=> {
 if (typeof value === "string") {
    const converedvalue = parseFloat(value)*1000;
    return converedvalue;
 }
 if (typeof value === "number") {
    return value *1000
 }

 const result = kgtoGm(10000) as number
 const result2 = kgtoGm("10000") as string
}

type CustomError = {
    message: string
}
try {

}catch(error){
    console.log((error as CustomError).message);
    
}





}