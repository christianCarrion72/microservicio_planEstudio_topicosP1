import { forwardRef, Module } from '@nestjs/common';
import { GrupoMateriasService } from './grupo_materias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoMateria } from './entities/grupo_materia.entity';
import { AuthModule } from 'src/auth/auth.module';
import { MateriasModule } from 'src/materias/materias.module';
import { GestionsModule } from 'src/gestions/gestions.module';
import { DocentesModule } from 'src/docentes/docentes.module';
import { GruposModule } from 'src/grupos/grupos.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([GrupoMateria]), 
    forwardRef(() => AuthModule),
    MateriasModule, 
    GestionsModule, 
    DocentesModule,
    GruposModule
  ],
  controllers: [],
  providers: [GrupoMateriasService],
  exports: [TypeOrmModule, GrupoMateriasService]
})
export class GrupoMateriasModule {}
