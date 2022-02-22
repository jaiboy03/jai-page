import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) { }

    @Post()
    create(@Body() createBoardDto: CreateBoardDto): Promise<any> {
        return this.boardService.create(createBoardDto);
    }

    @Get()
    findAll(): Promise<Board[]> {
        return this.boardService.findAll();
    }

}
