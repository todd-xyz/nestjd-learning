import { Controller, Get, Post, Delete, Request, Inject, Param, Query, Body } from '@nestjs/common';
import { GirlService } from "./girl.service"

import { BoyService } from "../boy/boy.service"
@Controller('girl')
export class GirlController {
  constructor(
    @Inject('Config') private shopName,
    @Inject('girl') private girlService: GirlService,
    @Inject('defaultGirls') private defaultGils: string[],
    @Inject('favFac') private fav: string,
    private boyService: BoyService
  ) {
  }

  @Get('/default')
  getDefaultGirls() {
    const fav = this.fav
    return this.defaultGils + `myfavest is: ${fav}`;
  }

  @Get("/girls")
  getGirls() {
    return this.girlService.getGirls()
  }

  @Post('/add')
  getGirl(@Body() body) {
    return this.girlService.addGirl(body)
  }

  @Get("/remove/:id")
  delGirl(@Param() params) {
    console.log(params)
    const { id } = params
    return this.girlService.delGirl(parseInt(id))
  }
  @Post("/update/:id")
  updateGirl(@Body() body, @Param() paras) {

    const { id } = paras

    return this.girlService.updateGril(parseInt(id), body)
  }

  @Get('/testcors')
  testcors() {
    return "酷暑成功"
  }
  @Get('/boys')
  getBoys() {
    return this.boyService.findAll()
  }

  @Get('/config')
  getConfig(){
    return this.shopName
  }


}
