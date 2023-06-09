import { SortEnum } from '@libs/commons';
import {
  NonPaginationArgs,
  PaginationArgs,
} from '@libs/commons/types/paginated-input';
import { Field, InputType, IntersectionType } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';
import { UserType } from '../entities/user.entity';

@InputType()
export class FindOneUserInput {
  @Field({ nullable: true })
  _id?: ObjectId;

  @Field({ nullable: true })
  email?: string;
}

@InputType()
export class FindAllRawUsersInput extends NonPaginationArgs {
  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => UserType, { nullable: true })
  type?: UserType;
}

@InputType()
export class FindAllUsersInput extends IntersectionType(
  FindAllRawUsersInput,
  PaginationArgs,
) {}

@InputType()
export class UsersSortArgs {
  @Field(() => SortEnum, { nullable: true })
  updatedAt?: string;

  @Field(() => SortEnum, { nullable: true })
  firstName?: string;

  @Field(() => SortEnum, { nullable: true })
  lastName?: string;

  @Field(() => SortEnum, { nullable: true })
  email?: string;
}
