import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({
    example: 'user_password',
    description: 'user password withing app',
  })
  password: string;

  @ApiProperty({
    example: 'octavioasapchi@gmail.com',
    description: 'user email',
  })
  email: string;
}
