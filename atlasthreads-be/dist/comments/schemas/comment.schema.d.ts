import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
export type CommentDocument = HydratedDocument<Comment>;
export declare class Comment {
    text: string;
    likes: number;
    user: User;
    parent: Comment | null;
}
export declare const CommentSchema: mongoose.Schema<Comment, mongoose.Model<Comment, any, any, any, mongoose.Document<unknown, any, Comment> & Comment & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Comment, mongoose.Document<unknown, {}, mongoose.FlatRecord<Comment>> & mongoose.FlatRecord<Comment> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
