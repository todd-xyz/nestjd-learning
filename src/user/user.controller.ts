import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, Session } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Response } from 'express';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('code')
  createCode(@Req() req, @Res() res: Response, @Session() session) {
    const captcha = this.userService.createCode()
    session.code = captcha.text  //密码
    res.type('image/svg+xml')
    res.send(captcha.data)  //image
  }

  @Post("create")
  createUSer(@Body() body, @Session() session) {

    if (session.code.toLowerCase() === body.code.toLowerCase()) {
       return {
        code: 200,
        message: '验证码正确'
       }
    }
    else{
      return {
        code: 200,
        message: '验证码错误'
      }

    }

 

  }


  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
