import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PlanEstudiosService } from './plan_estudios.service';
import { CreatePlanEstudioDto } from './dto/create-plan_estudio.dto';
import { UpdatePlanEstudioDto } from './dto/update-plan_estudio.dto';

@ApiTags('plan-estudios')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('plan-estudios')
export class PlanEstudiosController {
  constructor(
    private readonly planEstudiosService: PlanEstudiosService
  ) {}

  @Post('sync')
  @ApiOperation({ summary: 'Crear plan estudio (síncrono)' })
  async createSync(@Body() createPlanEstudioDto: CreatePlanEstudioDto) {
    return await this.planEstudiosService.create(createPlanEstudioDto);
  }

  @Get('sync')
  @ApiOperation({ summary: 'Obtener todos los plan estudios (síncrono)' })
  async findAllSync() {
    return await this.planEstudiosService.findAll();
  }

  @Get('sync/:id')
  @ApiOperation({ summary: 'Obtener un plan estudio por ID (síncrono)' })
  async findOneSync(@Param('id') id: number) {
    return await this.planEstudiosService.findOne(id);
  }

  @Patch('sync/:id')
  @ApiOperation({ summary: 'Actualizar plan estudio (síncrono)' })
  async updateSync(@Param('id') id: number, @Body() updatePlanEstudioDto: UpdatePlanEstudioDto) {
    return await this.planEstudiosService.update(id, updatePlanEstudioDto);
  }

  @Delete('sync/:id')
  @ApiOperation({ summary: 'Eliminar plan estudio (síncrono)' })
  async removeSync(@Param('id') id: number) {
    return await this.planEstudiosService.remove(id);
  } 
}
