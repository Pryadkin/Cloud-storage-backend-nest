import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  originalName: string;

  @Column()
  size: string;

  @Column()
  mimeType: string;

  @ManyToOne(() => UserEntity, (user) => user.files)
  user: UserEntity;

  @DeleteDateColumn()
  deleteAt?: Date;
}
