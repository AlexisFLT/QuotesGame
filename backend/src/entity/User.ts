import { Field } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    idPlayer: number;

    @Field()
    @Column()
    username: string

    @Field()
    @Column()
    score: number
}