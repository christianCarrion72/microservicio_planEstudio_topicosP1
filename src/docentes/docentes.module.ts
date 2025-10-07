import { forwardRef, Module } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { AuthModule } from 'src/auth/auth.module';

import { SyncDocentesService } from './sync-docentes.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Docente]), 
    forwardRef(() => AuthModule)
  ],
  controllers: [],
  providers: [DocentesService, SyncDocentesService],
  exports: [TypeOrmModule, DocentesService, SyncDocentesService]
})
export class DocentesModule {}
