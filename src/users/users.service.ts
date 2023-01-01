import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from './Models/users';
import { v4 } from 'uuid';
import { UpdateUserInput } from './dto/input/update-user.input';
import { GetUserArgs } from './dto/args/get.user.args';
import { GetUsersArgs } from './dto/args/get.users.args';
import { DeleteUserInput } from './dto/input/delete-user.input';

@Injectable()
export class UserService {
  private users: User[] = [];

  public async createUser(craeteUserdata: CreateUserInput): Promise<User> {
    try {
      const newUser: User = {
        userId: v4(),
        ...craeteUserdata,
      };
      this.users.push(newUser);
      return newUser;
    } catch (error) {}
  }

  public updateUser(updateUserData: UpdateUserInput): User {
    const user = this.users.find(us => us.userId === updateUserData.userId)

    Object.assign(user, updateUserData)
    
    return user
}

  public getUser(getUserData: GetUserArgs): User {
    const user = this.users.find(us => us.userId === getUserData.userId)
    return user;
  }

  public getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map(userId => this.getUser({userId}))
  }

  public deleteUser(deleteUserData: DeleteUserInput): User {
    const userIndex = this.users.findIndex(user => user.userId === deleteUserData.userId)

    const user = this.users[userIndex]

    this.users.splice(userIndex)

    return user;
  }
}
