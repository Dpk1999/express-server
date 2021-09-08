const permissions = 
{
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
}

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

export {permissions,users}