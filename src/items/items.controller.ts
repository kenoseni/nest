import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import { Item as I } from './schemas/item.schema';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Promise<I[]> {
    return this.itemsService.findAll();
  }
  //   @Get()
  //   findAll(@Req() req: Request, @Res() res: Response): Response {
  //     console.log(req.url);
  //     return res.send('Hi people');
  //   }

  @Get(':id')
  findOne(@Param() param: { id: string }): Promise<I> {
    const { id } = param;
    return this.itemsService.findOne(id);
  }

  //   @Get(':id')
  //   findOne(@Param('id') id): string {
  //     return `Item ${id}`;
  //   }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<I> {
    const { name, description, qty } = createItemDto;
    return this.itemsService.create(createItemDto);
  }

  // @Put(':id')
  // update(
  //   @Body() updateItemDto: CreateItemDto,
  //   @Param() param: { id: string },
  // ): string {
  //   const { id } = param;
  //   const { name } = updateItemDto;
  //   return `Update ${id} - Name: ${name}`;
  // }

  // @Delete(':id')
  // delete(@Param() param: { id: string }): string {
  //   const { id } = param;
  //   return `Delete ${id}`;
  // }

  @Delete(':id')
  delete(@Param() param: { id: string }): Promise<I> {
    const { id } = param;
    return this.itemsService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateItemDto: CreateItemDto,
    @Param() param: { id: string },
  ): Promise<I> {
    const { id } = param;
    return this.itemsService.update(id, updateItemDto);
  }
}
