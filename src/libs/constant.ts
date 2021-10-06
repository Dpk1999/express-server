export const trainees: string = 'trainees';
export const TRAINEE: string = 'trainee';
export const users: string = 'users';
export const TRAINER: string = 'trainer';
export const HEAD_TRAINER: string = 'head-trainer';
export const BCRYPT_SALT_ROUNDS: number = 10;
export const LIMIT = 10;
export const SKIP = 0;
export const REVIEWER: string = 'reviewer';
export const reviewers: string = 'reviewers';




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
    reviewers: {
        read: [TRAINEE, TRAINER, HEAD_TRAINER, REVIEWER],
        write: [TRAINER, HEAD_TRAINER, REVIEWER],
        delete: [HEAD_TRAINER, REVIEWER],
    },
};