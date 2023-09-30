import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'dna_analyses' })
export class DnaAnalyses extends Document {
  @Prop({ required: true })
  dna: string[];
  @Prop({ required: true, type: Boolean })
  isMutant: boolean;
}
export const DnaAnalysesSchema = SchemaFactory.createForClass(DnaAnalyses);
