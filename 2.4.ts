{
    //interface - generic

    interface Developer<T,X> {
        name: string;
        computer: {
            brand: string;
            model: string;
            release: number
        }
        smaertwatch: T,
        bike?: X;
    }


    type emailabWatch = {
        brand: string;
        model: string;
        display: string
    }

    const poorDeveloper: Developer<emailabWatch,null> = {
        name: "tanver",
        computer: {
            brand: 'asus',
            model: "X-3243ir",
            release: 2014
        },
        smaertwatch: {
            brand: "samsung",
            model: "lkan",
            display: "OLED"
        }
    }

    type applWatch = {

        brand: string;
        model: string;
        heartract: boolean;
        sleeptract: boolean;

    }
    interface yamahbike  {
        model: string,
        enging: string
    }

    const richDeveloper: Developer<applWatch, yamahbike> = {
        name: "risch tanver",
        computer: {
            brand: 'apple',
            model: "X-3243ir",
            release: 2019
        },
        smaertwatch: {
            brand: "apple",
            model: "lsfgkan",
            heartract: true,
            sleeptract: true
        },
        bike: {
            model: "yamaha",
            enging: "uayamider "
        }
    }




}