import { forwardRef, Module } from '@nestjs/common';
import { DetallesService } from './detalles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Detalle } from './entities/detalle.entity';
import { AuthModule } from 'src/auth/auth.module';

import { InscripcionsModule } from 'src/inscripcions/inscripcions.module';
import { GrupoMateriasModule } from 'src/grupo_materias/grupo_materias.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Detalle]),
    InscripcionsModule,
    GrupoMateriasModule, 
    forwardRef(() => AuthModule)
  ],
  controllers: [],
  providers: [DetallesService],
  exports: [TypeOrmModule, DetallesService]
})
export class DetallesModule {}
