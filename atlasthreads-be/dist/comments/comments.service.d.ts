import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Model } from 'mongoose';
import { Comment } from './schemas/comment.schema';
export declare class CommentsService {
    private commentModel;
    constructor(commentModel: Model<Comment>);
    create(createCommentDto: CreateCommentDto): Promise<Omit<import("mongoose").Document<unknown, {}, Comment> & Comment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, never>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Comment> & Comment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getTopLevelComments(): Promise<(import("mongoose").Document<unknown, {}, Comment> & Comment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: number): string;
    update(id: number, updateCommentDto: UpdateCommentDto): string;
    remove(id: number): string;
}
