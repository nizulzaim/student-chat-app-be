import { MasterEntity } from '@libs/databases/master.entity';
import { Collection } from '@libs/decorators';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';

// class of Message that include conversationId, senderId, text
// and also include the relationship with Conversation and User
@ObjectType()
@Collection('messages')
export class Message extends MasterEntity {
  @Field(() => ID)
  conversationId: ObjectId;

  @Field()
  text: string;
}
