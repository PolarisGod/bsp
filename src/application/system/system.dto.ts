import { IsNotEmpty, IsString } from "class-validator";

export class Login {
  @IsNotEmpty()
  @IsString()
  readonly username: string

  @IsNotEmpty()
  @IsString()
  readonly password: string
}