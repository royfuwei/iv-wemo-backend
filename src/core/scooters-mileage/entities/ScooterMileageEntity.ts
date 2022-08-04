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

@Entity({
  name: 'ScooterMileageEntity',
})
export class ScooterMileageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @RelationId(
    (scooterMileageEntity: ScooterMileageEntity) =>
      scooterMileageEntity.scooter,
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
    comment: '里程數',
  })
  mileage: number;

  @Column({
    type: 'float',
    comment: '油箱/電量 百分比',
  })
  energyRate: number;

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
