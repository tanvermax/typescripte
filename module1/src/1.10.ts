{



    // type FrontendDeveloper = 'faskibazDeveloper' | "juniourDeveloper"
    // type FullsttackDeveloper = 'FrontEndDeveloper' | " ExpertDeveloper"


    // type Developer = FrontendDeveloper | FullsttackDeveloper;

    // const newDeveloper: FrontendDeveloper = 'juniourDeveloper'


    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: "male" | "female";
    //     bloodGroup: "o+" | "A+" | "AB+"
    // }

    // const user1: User = {
    //     name: "tanver",
    //     gender: "male",
    //     bloodGroup: "o+"
    // }

    type FrontendDeveloper = {
        skill : string[];
        designation1: 'FrontEnd Developer'
    }
    type BackendDeveloper = {
        skill : string[];
        designation2 : "BackEnd Developer"
    }
    type FullsttackDeveloper = FrontendDeveloper & BackendDeveloper

const fullsttackDeveloper: FullsttackDeveloper ={
    skill: ["html", "css", " tasilwind"],
    designation1: 'FrontEnd Developer',
    designation2 : "BackEnd Developer"
}


}