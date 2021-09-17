import { EmailType, UserType } from './interface';
export const trainees: string = 'trainees';
export const TRAINEE: string = 'trainee';
<<<<<<< HEAD
export const USER: string = 'user';
=======
export const users: string = 'users';
>>>>>>> 563d607727f21f7e1690650ad07339e2cf7849d6
export const TRAINER: string = 'trainer';
export const HEAD_TRAINER: string = 'head-trainer';
export const BCRYPT_SALT_ROUNDS: number = 10;

export const permissions: any = {
    [trainees]: {
        read : [TRAINEE, TRAINER, HEAD_TRAINER],
        write : [TRAINER, HEAD_TRAINER],
        delete : [HEAD_TRAINER],
    },
<<<<<<< HEAD
    [USER]: {
=======
    [users]: {
>>>>>>> 563d607727f21f7e1690650ad07339e2cf7849d6
        read: [TRAINEE, TRAINER, HEAD_TRAINER],
    },
}

const USERS: EmailType[] = [     // Array of Objects, Objects contain email
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

export {USERS}


