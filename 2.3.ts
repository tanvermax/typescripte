{
    //


    //generic

    //  type GenericArray = Array<number>
    type GenericArray<T> = Array<T>

    //  const  rollNumber : Array<string> = [3,6,8];
    const rollNumber: GenericArray<number> = [3, 6, 8];


    //  const mentors : Array<string> = ["mr.x ", "mr y", "mr , z"];
    const mentors: GenericArray<string> = ["mr.x ", "mr y", "mr , z"];



    // const boolArray: Array<boolean> = [true, false, true]
    const boolArray: GenericArray<boolean> = [true, false, true]


    const user: GenericArray<{ name: string, age: number }> = [

        {
            name: "tanver",
            age: 24
        },
        {
            name: "fiha",
            age: 18
        }
    ]


    type GenericTuple <X, Y >= [X, Y]

    const manus : GenericTuple<string, string> = ["mr,x ","mr, y"]


    const UserID: GenericTuple<number,{name:string,email: string}>
= [ 1233, {name: "tavmer", email: "atanve@gmailcom"}]

    //





}