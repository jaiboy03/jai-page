import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateMemoDto } from './dto/create-memo.dto';
import { UpdateMemoDto } from './dto/update-memo.dto';
import { Memo } from './entities/memo.entity';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) { }

    @Post()
    create(@Body() createMemoDto: CreateMemoDto): Promise<any> {
        console.log(createMemoDto);
        return this.boardService.create(createMemoDto);
    }

    @Get(":id")
    findAll(@Param('id') id: string): Promise<Memo[]> {
        return this.boardService.findAll(id);
    }

    @Delete(":id")
    removeOne(@Param('id') id: number): Promise<void> {
        return this.boardService.remove(id);
    }

    @Patch()
    patch(@Body() updateMemoDto : UpdateMemoDto): Promise<any> {
        return this.boardService.update(updateMemoDto);
    }
}
