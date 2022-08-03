import { ScooterEntity } from 'src/core/scooters/entities/ScooterEntity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';

export enum ScooterReplyType {
  ERROR = 'error',
}

export enum ReplyProcessingStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SOLVED = 'SOLVED',
}

@Entity({
  name: 'ScooterReplyEntity',
})
export class ScooterReplyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @RelationId(
    (scooterReplyEntity: ScooterReplyEntity) => scooterReplyEntity.scooter,
  )
  @Column({
    comment: '機車id',
  })
  scooterId: string;

  @ManyToOne(() => ScooterEntity, (scooter) => scooter.id, {
    onDelete: 'NO ACTION',
  })
  scooter: ScooterEntity;

  @Column({
    type: 'enum',
    enum: ScooterReplyType,
    default: ScooterReplyType.ERROR,
    comment: '回報狀態',
  })
  replyType: ScooterReplyType;

  @Column({
    comment: '備註',
  })
  memo: string;

  @Column({
    type: 'enum',
    enum: ReplyProcessingStatus,
    default: ReplyProcessingStatus.PENDING,
    comment: '處理狀態',
  })
  replyStatus: ReplyProcessingStatus;

  @Column({
    type: 'geometry',
    unique: false,
    nullable: true,
    spatialFeatureType: 'point',
    srid: 4326,
    comment: '定位',
  })
  location: any;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
