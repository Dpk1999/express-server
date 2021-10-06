import * as mongoose from 'mongoose';
import ReviewerSchema from './ReviwerSchema';
import IReviewerModel from './IReviwerModel';

export const reviewerSchema = new ReviewerSchema({
    collection: 'reviewer',
});

export const reviewerModel: mongoose.Model<IReviewerModel> = mongoose.model<IReviewerModel>
(
    'Reviewer',
    reviewerSchema,
    'Reviewer',
    true,
);