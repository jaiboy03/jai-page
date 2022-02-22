import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMemoDto } from './dto/create-memo.dto';
import { Memo } from './entities/memo.entity';

@Injectable()
export class BoardService {

    constructor(
        @InjectRepository(Memo)
        private boardRepository: Repository<Memo>,
    ) { }

    async create(createBoardDto: CreateMemoDto): Promise<any> {
        const { ...result } = await this.boardRepository.save(createBoardDto);

        return { statusCode: HttpStatus.OK, result }
    }

    async findAll(id : string): Promise<Memo[]> {
        return this.boardRepository.find({
            select: ["id", "writerId", "writeDate", "title", "contents", "category"],
            where : {"writerId" : id},
            order : {"id" : "DESC"}
        })
    }
} 
