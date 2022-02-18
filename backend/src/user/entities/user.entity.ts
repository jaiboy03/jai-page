import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number;

    @PrimaryColumn()
    userId : string;

    @Column()
    name : string;

    @Column()
    password : string;

    @Column() 
    role : string;

}