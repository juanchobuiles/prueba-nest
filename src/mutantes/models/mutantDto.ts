import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from 'class-validator';
export class MutantDto {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(4, { message: 'Must contain at least four DNA.' })
  @IsString({
    each: true,
    message: 'Each item in the array must be a string',
  })
  @IsNotEmpty()
  readonly dna: string[];
}
