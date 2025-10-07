import { forwardRef, Module } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Horario } from './entities/horario.entity';
import { Aula } from 'src/aulas/entities/aula.entity';
import { AulasModule } from 'src/aulas/aulas.module';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Horario]),
    AulasModule, 
    forwardRef(() => AuthModule)
  ],
  controllers: [],
  providers: [HorariosService],
  exports: [TypeOrmModule, HorariosService]
})
export class HorariosModule {}
