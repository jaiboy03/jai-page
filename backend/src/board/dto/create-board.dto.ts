import { IsDateString, IsString } from "class-validator";

export class CreateBoardDto {
    @IsString()
    writerId : string;
    
    @IsDateString()
    writeDate : Date;

    @IsString()
    title : string;

    @IsString()
    contents : string;

    @IsString()
    category : string;
}