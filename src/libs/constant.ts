export const trainees: string = 'trainees';
export const TRAINEE: string = 'trainee';
export const users: string = 'users';
export const TRAINER: string = 'trainer';
export const HEAD_TRAINER: string = 'head-trainer';


export const permissions: any = {
    trainees: {
        read: [TRAINEE, TRAINER, HEAD_TRAINER],
        write: [TRAINER, HEAD_TRAINER],
        delete: [HEAD_TRAINER],
    },
    users: {
        read: [TRAINEE, TRAINER, HEAD_TRAINER],
        write: [TRAINER, HEAD_TRAINER, TRAINEE],
        delete: [HEAD_TRAINER],
    },
};