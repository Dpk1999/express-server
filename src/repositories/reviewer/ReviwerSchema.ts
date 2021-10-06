import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';

class ReviewerSchema extends VersionableSchema {

    constructor(collections: any) {
        const baseSchema = Object.assign({
            _id: String,
            name: String,
            email: String,
            role: String,
            password: String,
            feedBack: Array,
    });
    super(baseSchema, collections);
}
}
export default ReviewerSchema;