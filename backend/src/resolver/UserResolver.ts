import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entity/User";
import dataSource from "../utils";

@Resolver()
class UserResolver {
    @Mutation(() => String)
    async createUser(
        @Arg('userName') username: string
    ): Promise<string> {
        const user = new User();
        user.username = username;
        await dataSource.getRepository(User).save(user);
        return 'user created'
    }

    @Mutation(() => String)
    async deleteUser(
        @Arg('id') id: number
    ):Promise<string> {
        await dataSource.getRepository(User).delete(id)
        return 'user deleted'
    }

    @Mutation(() => String)
    async deleteAllUsers():Promise<string> {
        await dataSource.getRepository(User).delete({})
        return 'All users deleted'
    }

    @Query(() => String)
    async getUser(
        @Arg('username') username: string,
        @Arg('score') score: number
    ): Promise<User> {
        const user = await dataSource
        .getRepository(User)
        .findOneByOrFail({username, score});
        return user;
    }
}

export default UserResolver;