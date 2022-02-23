import { IsDateString, IsNumber, IsString } from "class-validator";

export class UpdateMemoDto {
    @IsNumber()
    id : number;

    @IsString()
    writerId : string;
    
    @IsString()
    title : string;

    @IsString()
    contents : string;

}