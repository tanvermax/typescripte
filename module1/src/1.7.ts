{


    //spread oparator 
    //rest oparartor
    // destruturing


    //learn speade oparator



    const bros1: string[] = ['tanver', 'firoz', 'mizan',]

    const bros2: string[] = ['rihan', 'tonmoiu', 'rishad',];

    bros1.push(...bros2);

    const mentor1 = {
        typescript: 'Mezba',
        redux: 'mir',
        dbms: 'mizan'
    }
    const mentor2 = {
        prisma: 'firoz',
        next: "tanmay ",
        cloude: 'nahid'
    }
    const mentorList = {
        ...mentor1,
        ...mentor2
    }


    // learn rest oparartor

    
    const greetFriends = (...friend: string[]) => {
        // console.log(`Hi $${friends1} ${friends2} ${friend3}`);
        friend.forEach((friend: string) => console.log(friend)
        )


    };

    greetFriends('Abul', 'kabul', 'babul', 'ubul', 'labul')

}