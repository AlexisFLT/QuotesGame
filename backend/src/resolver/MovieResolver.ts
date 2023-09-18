import { Arg, Query, Resolver } from "type-graphql";
import dataSource from "../utils";
import { Movie } from "../entity/Movie";


@Resolver()
class MovieResolver {
    @Query(() => String)
    async getMovie(
        @Arg('idMovie') idMovie: string,
        @Arg('title') title: string,
        @Arg('quote') quote: string,
        @Arg('lang') lang: string,
    ): Promise <Movie> {
        const movie = await dataSource.getRepository(Movie).findOneByOrFail({idMovie, title, quote, lang});
        return movie
    }
}

export default MovieResolver;