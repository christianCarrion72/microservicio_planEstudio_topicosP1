import { forwardRef, Module } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aula } from './entities/aula.entity';
import { ModulosModule } from 'src/modulos/modulos.module';
import { AuthModule } from 'src/auth/auth.module';

import { SyncAulasService } from './sync-aulas.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Aula]),
    forwardRef(() => AuthModule),
    ModulosModule,
  ],
  controllers: [],
  providers: [AulasService, SyncAulasService],
  exports: [TypeOrmModule, AulasService, SyncAulasService]
})
export class AulasModule {}
