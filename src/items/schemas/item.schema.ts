// import * as mongoose from 'mongoose';

// export const ItemSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   qty: Number,
// });

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema() // marks a class as a schema definition
export class Item {
  @Prop({ required: true }) // defines the property of a document
  name: string;

  @Prop({ required: true }) // defines the property of a document
  description: string;

  @Prop({ required: true }) // defines the property of a document
  qty: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
