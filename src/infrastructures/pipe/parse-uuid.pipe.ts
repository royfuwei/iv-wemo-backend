import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { isUUID } from 'class-validator';

@Injectable()
export class ParseUUIDPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const isValid = isUUID(value);
    if (!isValid) {
      throw new BadRequestException(['id should be a uuid']);
    }
    return value;
  }
}
