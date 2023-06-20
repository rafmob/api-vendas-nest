import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() CreateUser: CreateUserDto) {
    return { ...CreateUser, password: undefined };
  }
}
