import { Field } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Movie {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    idMovie: string

    @Field()
    @Column()
    title: string

    @Field()
    @Column()
    quote: string

    @Field()
    @Column()
    lang: string
    
}