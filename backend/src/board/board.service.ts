import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board)
        private boardRepository: Repository<Board>,
    ) { }

    async create(createBoardDto: CreateBoardDto): Promise<any> {
        const { ...result } = await this.boardRepository.save(createBoardDto);

        return { statusCode: HttpStatus.OK, result }
    }

    async findAll(): Promise<Board[]> {
        return this.boardRepository.find({
            select: ["id", "writerId", "writeDate", "title", "contents", "category"]
        })
    }
} 
