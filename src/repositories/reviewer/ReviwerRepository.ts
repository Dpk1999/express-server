import * as mongoose from 'mongoose';
import { reviewerModel } from './ReviwerModel';
import IReviewerModel from './IReviwerModel';
import VersionableRepository from '../versionable/versionableRepository';
export default class UserRepository extends VersionableRepository <IReviewerModel, mongoose.Model<IReviewerModel>> {
    constructor() {
        super(reviewerModel);
    }
    
    public findOne(query): mongoose.Query<mongoose.EnforceDocument<IReviewerModel, {}>, mongoose.EnforceDocument<IReviewerModel, {}>> {
        return super.findOne(query).lean();
    }

    public find(query, projection?: any, options?: any): mongoose.Query<mongoose.EnforceDocument<IReviewerModel, {}>[], mongoose.EnforceDocument<IReviewerModel, {}>> {
        return super.find(query, projection, options);
    }
    public count(): mongoose.Query<number, mongoose.EnforceDocument<IReviewerModel, {}>> {
        return super.count();
    }
    public create(data: any): Promise<IReviewerModel> {
        console.log('UserRepository::create create', data);
        return super.create(data);
    }
    public update(data: any): Promise<IReviewerModel> {
        return super.update(data);
    }
    public delete(data: any) {
        return super.softdelete(data);
    }
}