import { ArgumentsHost, RpcExceptionFilter } from "@nestjs/common";
import { Error } from 'mongoose';
import ValidationError = Error.ValidationError;
export declare class ValidationErrorFilter implements RpcExceptionFilter {
    catch(exception: ValidationError, host: ArgumentsHost): any;
}
