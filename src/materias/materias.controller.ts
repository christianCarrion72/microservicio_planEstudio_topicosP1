import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MateriasService } from './materias.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

import { generateJobId } from 'src/common/utils/idempotency.util';

@ApiTags('materias')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('materias')
export class MateriasController {
  constructor(
    private readonly materiasService: MateriasService
  ) {}

  @Post('sync')
  @ApiOperation({ summary: 'Crear materia (síncrono)' })
  async createSync(@Body() createMateriaDto: CreateMateriaDto) {
    return await this.materiasService.create(createMateriaDto);
  }

  @Get('sync')
  @ApiOperation({ summary: 'Obtener todas las materias (síncrono)' })
  async findAllSync() {
    return await this.materiasService.findAll();
  }

  @Get('sync/:id')
  @ApiOperation({ summary: 'Obtener una materia por ID (síncrono)' })
  async findOneSync(@Param('id') id: number) {
    return await this.materiasService.findOne(id);
  }

  @Patch('sync/:id')
  @ApiOperation({ summary: 'Actualizar materia (síncrono)' })
  async updateSync(@Param('id') id: number, @Body() updateMateriaDto: UpdateMateriaDto) {
    return await this.materiasService.update(id, updateMateriaDto);
  }

  @Delete('sync/:id')
  @ApiOperation({ summary: 'Eliminar materia (síncrono)' })
  async removeSync(@Param('id') id: number) {
    return await this.materiasService.remove(id);
  } 
}
