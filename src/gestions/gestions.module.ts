import { forwardRef, Module } from '@nestjs/common';
import { GestionsService } from './gestions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gestion } from './entities/gestion.entity';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Gestion]), 
    forwardRef(() => AuthModule)
  ],
  controllers: [],
  providers: [GestionsService],
  exports: [TypeOrmModule, GestionsService]
})
export class GestionsModule {}
