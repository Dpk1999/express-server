import { IEmailType, IUserType } from './interface';
export const trainees: string = 'trainees';
export const TRAINEE: string = 'trainee';
export const USER: string = 'user';
export const TRAINER: string = 'trainer';
export const HEAD_TRAINER: string = 'head-trainer';
export const BCRYPT_SALT_ROUNDS: number = 10;

export const permissions: any = {
    trainees: {
        read : [TRAINEE, TRAINER, HEAD_TRAINER],
        write : [TRAINER, HEAD_TRAINER],
        delete : [HEAD_TRAINER],
    },
    users: {
        read: [TRAINEE, TRAINER, HEAD_TRAINER],
    },
}

const USERS: IEmailType[] = [     // Array of Objects, Objects contain email
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


