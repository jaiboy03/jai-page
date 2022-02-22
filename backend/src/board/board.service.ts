import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMemoDto } from './dto/create-memo.dto';
import { Memo } from './entities/memo.entity';

@Injectable()
export class BoardService {

    constructor(
        @InjectRepository(Memo)
        private memoRepository: Repository<Memo>,
    ) { }

    async create(createMemoDto: CreateMemoDto): Promise<any> {
        const { ...result } = await this.memoRepository.save(createMemoDto);

        return { statusCode: HttpStatus.OK, result }
    }

    async findAll(id: string): Promise<Memo[]> {
        return this.memoRepository.find({
            select: ["id", "writerId", "writeDate", "title", "contents", "category"],
            where: { "writerId": id },
            order: { "id": "DESC" }
        })
    }

    async remove(id: number): Promise<any> {
        const { ...result } = await this.memoRepository.delete({ id: id });
        return { statusCode: HttpStatus.OK, result };
    }

    async update(id: number, writerId: string, updateMemoDto: CreateMemoDto): Promise<void> {
        const memo = await this.memoRepository.findOne({
            where: {
                id: id,
                writerId: writerId
            }
        });

        if (!memo) return null;

        memo.title = updateMemoDto.title || memo.title;
        memo.contents = updateMemoDto.contents || memo.contents;

        this.memoRepository.save(memo);

    }

} 
