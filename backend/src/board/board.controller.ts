import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateMemoDto } from './dto/create-memo.dto';
import { Memo } from './entities/memo.entity';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) { }

    @Post()
    create(@Body() createMemoDto: CreateMemoDto): Promise<any> {
        return this.boardService.create(createMemoDto);
    }

    @Get(":id")
    findAll(@Param('id') id: string): Promise<Memo[]> {
        return this.boardService.findAll(id);
    }

    @Post(":id")
    removeOne(@Param('id') id: number): Promise<void> {
        return this.boardService.remove(id);
    }
}
