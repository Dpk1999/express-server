import * as mongoose from 'mongoose';

export default interface IReviewerModel extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
    feedBack: [{
        Attendance: {
            Leaves: number,
            Late_Arrivals: number,
        },
        Reveiwer: {
            Code_Quality: number,
            Communication: number,
            Behaviour: number,
            Tasks_Delivery: number,
            Comprehension: number,
            Email_Communication: number,
            Redmine: number,
        },
        Description: {
            Good_Points: string,
            Improvement_Required: string,

        }
    }],
}