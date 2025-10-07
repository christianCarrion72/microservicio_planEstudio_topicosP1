import { forwardRef, Module } from '@nestjs/common';
import { DiasService } from './dias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dia } from './entities/dia.entity';
import { AuthModule } from 'src/auth/auth.module';

import { SyncDiasService } from './sync-dias.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Dia]), 
    forwardRef(() => AuthModule),
  ],
  controllers: [],
  providers: [DiasService, SyncDiasService],
  exports: [TypeOrmModule, DiasService, SyncDiasService]
})
export class DiasModule {}
