import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): string;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/comment.schema").Comment> & import("./schemas/comment.schema").Comment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): string;
    update(id: string, updateCommentDto: UpdateCommentDto): string;
    remove(id: string): string;
}
