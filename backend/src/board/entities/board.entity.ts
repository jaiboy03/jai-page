import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    writerId: string;

    @Column()
    writeDate: Date;

    @Column()
    title: string;

    @Column()
    contents: string;

    @Column()
    category: string;
}