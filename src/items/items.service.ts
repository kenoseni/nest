import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { Item } from './interfaces/item.interface';
import { Item, ItemDocument } from './schemas/item.schema';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}
  // private readonly items: Item[] = [
  //   {
  //     id: '675656565656',
  //     name: 'Item One',
  //     description: 'this is the item one',
  //     qty: 50,
  //   },
  //   {
  //     id: '675655565656',
  //     name: 'Item Two',
  //     description: 'this is the item two',
  //     qty: 150,
  //   },
  // ];
  // findAll(): Item[] {
  //   return this.items;
  // }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }

  // findOne(id: string): Item {
  //   return this.items.find((item) => item.id === id);
  // }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id }).exec();
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
