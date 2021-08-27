[
    {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    }
    ]
    const validateEmail=(email)=>{
    
        var validRegex = /^[a-zA-Z0-9.^]+@successive.tech/;
    
        if (validRegex.test(email)) 
            return true;
      
        else return false;
    }