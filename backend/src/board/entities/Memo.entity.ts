import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Memo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    writerId: string;

    @Column()
    writeDate: Date;

    @Column()
    title: string;

    @Column({length : 1000})
    contents: string;

    @Column()
    category: string;
}