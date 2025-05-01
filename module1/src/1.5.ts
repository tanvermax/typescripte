// reference type

const user: {
    readonly compnay: string, // type --> literal types
    firstName: string,
    middleName?: string, // optional type
    lastName: string,
    isMarried: boolean
} = {
    compnay: "CodeCrafter", //fixed value
    firstName: "Tanver",
    // middleName: "Hossain", eta thakte o pare na o thakte pare 
    lastName: "Shafayet",
    isMarried:  false,
}



user.compnay