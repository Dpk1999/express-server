import { EmailType, UserType } from './interface';
const TRAINEES: string = 'trainees';
const TRAINEE: string = 'trainee';
const USER: string = 'user';
const TRAINER: string = 'trainer';
const HEAD_TRAINER: string = 'head-trainer';
const permissions: UserType =
{
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
}

const users: EmailType[] = [     // Array of Objects, Objects contain email
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

export { permissions, users }