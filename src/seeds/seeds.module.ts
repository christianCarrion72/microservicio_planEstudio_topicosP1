import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedsService } from './seeds.service';

@Module({
  imports: [],
  controllers: [],
  providers: [SeedsService],
  exports: [SeedsService]
})
export class SeedsModule {}
