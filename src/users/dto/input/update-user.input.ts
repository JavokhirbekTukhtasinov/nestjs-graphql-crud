import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


@InputType()
export class UpdateUserInput {

    @Field()
    @IsString()
    @IsNotEmpty()
    userId: string
    
    @Field()
    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
    age?:number;


    @Field({nullable: true})
    @IsOptional()
    @IsNotEmpty()
    isSubscribed: boolean;
}
