import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";


@InputType()
export class CreateUserInput {
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @Field()
    @IsNotEmpty()
    @IsNumber()
    age: number
}