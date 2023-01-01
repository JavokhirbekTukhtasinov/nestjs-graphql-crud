import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GetUserArgs } from "./dto/args/get.user.args";
import { GetUsersArgs } from "./dto/args/get.users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { User } from "./Models/users";
import { UserService } from "./users.service";


@Resolver(() => User)
export class UsersResolver {
    constructor( private userService : UserService) {}
    @Query(() => User, {name: 'user', nullable: true})
    getUser(@Args() getUserArgs: GetUserArgs) : User {
        return this.userService.getUser(getUserArgs)
    }
 
    @Query(() => User, {name: 'users', nullable: true})
    getUsers(@Args() getUsersArgs:GetUsersArgs ): User[] {
        return this.userService.getUsers(getUsersArgs)
    } 

    @Mutation(() => User) 
   async createUser(@Args('createUserData') createUserData: CreateUserInput):Promise<User> {
        try {
            return  await this.userService.createUser(createUserData)
        } catch (error) {
            throw new Error(error)   
        }
    }

    @Mutation(() => User)
    updateUser(@Args('updateUserData') updateUserData: UpdateUserInput):User {
        return this.userService.updateUser(updateUserData)
    }

    @Mutation(() => User)
    deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput):User {

        return this.userService.deleteUser(deleteUserData)
    }

}