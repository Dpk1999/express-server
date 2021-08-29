const users = [     // Array of Objects, Objects contain email
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    },
    
    {
        traineeEmail: 'trainee2@gmail.com',
        reviewerEmail: 'reviewer3@successive.tech',
    },
    
    {
        traineeEmail: 'trainee3@successive.tech',
        reviewerEmail: 'reviewer3@gmail.com',
    },
    ]
    
    const validateEmail=(email)=>{
        
        var validRegex = /^[a-zA-Z0-9.^]+@successive.tech/;
    
        if (validRegex.test(email)) 
            return true;
      
        else return false;
    }
    
    var validUsers = []     // List of Valid users
    var invalidUsers = []   // List of Invalid users
    
    const validateUsers=(users)=>{
    
        users.forEach(element => {
            const {traineeEmail} = element      // using destructing 
            const {reviewerEmail} = element     // using destructing
            
            validateEmail(traineeEmail)==true?validUsers.push(traineeEmail):invalidUsers.push(traineeEmail)
            validateEmail(reviewerEmail)==true?validUsers.push(reviewerEmail):invalidUsers.push(reviewerEmail)
            }
        );
    }
    
    console.log();
    validateUsers(users)
    
    console.log('Valid users:')
    validUsers.forEach(element => {
        console.log(element)
    });
    console.log('Number of Valid users: \n', validUsers.length)
    
    console.log();
    
    console.log('Invalid users:')
    invalidUsers.forEach(element => {
        console.log(element)
    });
    console.log('Number of Invalid users: \n', invalidUsers.length)
    
    /*
    
    For current test case i.e., 
    
    [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    },
    
    {
        traineeEmail: 'trainee2@gmail.com',
        reviewerEmail: 'reviewer3@successive.tech',
    },
    
    {
        traineeEmail: 'trainee3@successive.tech',
        reviewerEmail: 'reviewer3@gmail.com',
    },
    ]
    
    
    O/p:
    
    Valid users:
    trainee1@successive.tech
    reviewer1@successive.tech
    reviewer3@successive.tech
    trainee3@successive.tech
    Number of Valid users: 
     4
    
    Invalid users:
    trainee2@gmail.com
    reviewer3@gmail.com
    Number of Invalid users: 
     2
    
     */