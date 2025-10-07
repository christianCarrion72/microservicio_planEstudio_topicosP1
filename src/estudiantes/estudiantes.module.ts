import { forwardRef, Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { PlanEstudiosModule } from 'src/plan_estudios/plan_estudios.module';
import { AuthModule } from 'src/auth/auth.module';

import { SyncEstudiantesService } from './sync-estudiantes.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Estudiante]),
    PlanEstudiosModule, 
    forwardRef(() => AuthModule)
  ],
  controllers: [],
  providers: [EstudiantesService, SyncEstudiantesService],
  exports: [TypeOrmModule, EstudiantesService, SyncEstudiantesService]
})
export class EstudiantesModule {}
