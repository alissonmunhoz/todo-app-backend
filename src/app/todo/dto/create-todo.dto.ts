import { IsNotEmpty } from 'class-validator';

export class CreateTodoDtos {
  @IsNotEmpty()
  task: string;

  @IsNotEmpty()
  isDone: number;
}
