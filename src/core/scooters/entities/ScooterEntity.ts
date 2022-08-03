import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * 機車能源類型
 */
export enum ScooterEngineType {
  /**
   * 電動車
   */
  EV = 'EV',
  /**
   * 純油車
   */
  OIL = 'OIL',
}

/**
 * 機車牌照類型
 */
export enum LicenseType {
  /**
   * 小型輕型機車
   */
  LEVEL1 = 'LEVEL1',
  /**
   * 普通輕型機車─綠牌
   */
  LEVEL2 = 'LEVEL2',
  /**
   * 普通重型機車─白牌
   */
  LEVEL3 = 'LEVEL3',
  /**
   * 大型重型機車-黃牌
   */
  LEVEL4 = 'LEVEL4',
  /**
   * 大型重型機車-紅牌
   */
  LEVEL5 = 'LEVEL5',
}

/**
 * 命名部分參考
 * https://schema.gov.tw/Motor%20Vehicle%20and%20Driver/Motor%20Vehicle%20and%20Driver/Vehicle%20Registration
 */
@Entity({
  name: 'ScooterEntity',
})
export class ScooterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ScooterEngineType,
    default: ScooterEngineType.OIL,
    comment: '機車能源類型',
  })
  scooterEngineType: ScooterEngineType;

  @Column({
    type: 'enum',
    enum: LicenseType,
    default: LicenseType.LEVEL3,
    comment: '牌照類型',
  })
  licenseType: string;

  @Column({
    comment: '牌照號碼',
  })
  licenseNumber: string;

  @Column({
    comment: '車主',
  })
  ownerName: string;

  @Column({
    comment: '地址',
  })
  address: string;

  @Column({
    comment: '廠牌',
  })
  brand: string;

  @Column({
    comment: '廠牌型式',
  })
  brandType: string;

  @Column({
    comment: '引擎號碼',
  })
  engineNumber: string;

  @Column({
    comment: '車身號碼',
  })
  bodyNumber: string;

  @Column({
    comment: '顏色',
  })
  color: string;

  @Column({
    comment: '排氣量',
  })
  engineDisplacement: number;

  @Column({
    comment: '發照日期',
  })
  issuedDate: Date;

  @Column({
    comment: '出廠年月',
  })
  manufactureDate: Date;

  @Column({
    comment: '換補照日期',
  })
  lastPrintLicenseDate: Date;

  @Column({
    comment: '有效日期',
  })
  expiryDate: Date;

  @Column({
    comment: '管轄編號',
  })
  administrationNumber: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
