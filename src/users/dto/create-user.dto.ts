import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'pryadkin.ant@yandex.ru',
  })
  email: string;

  @ApiProperty({
    default: 'Anton Pryadkin',
  })
  fullname: string;

  @ApiProperty({
    default: 'qwerty',
  })
  password: string;
}
