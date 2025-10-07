import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PrerequisitosService } from './prerequisitos.service';
import { CreatePrerequisitoDto } from './dto/create-prerequisito.dto';
import { UpdatePrerequisitoDto } from './dto/update-prerequisito.dto';

import { generateJobId } from 'src/common/utils/idempotency.util';

@ApiTags('prerequisitos')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('prerequisitos')
export class PrerequisitosController {
  constructor(
    private readonly prerequisitosService: PrerequisitosService
  ) {}


  @Get('materia/:id')
  async findPrerequisitosMateria(@Param('id') id: number) {
    return await this.prerequisitosService.findPrerequisitosMateria(id);
  }

  @Post('sync')
  @ApiOperation({ summary: 'Crear prerequisito (síncrono)' })
  async createSync(@Body() createPrerequisitoDto: CreatePrerequisitoDto) {
    return await this.prerequisitosService.create(createPrerequisitoDto);
  }

  @Get('sync')
  @ApiOperation({ summary: 'Obtener todos los prerequisitos (síncrono)' })
  async findAllSync() {
    return await this.prerequisitosService.findAll();
  }

  @Get('sync/:id')
  @ApiOperation({ summary: 'Obtener un prerequisito por ID (síncrono)' })
  async findOneSync(@Param('id') id: number) {
    return await this.prerequisitosService.findOne(id);
  }

  @Patch('sync/:id')
  @ApiOperation({ summary: 'Actualizar prerequisito (síncrono)' })
  async updateSync(@Param('id') id: number, @Body() updatePrerequisitoDto: UpdatePrerequisitoDto) {
    return await this.prerequisitosService.update(id, updatePrerequisitoDto);
  }

  @Delete('sync/:id')
  @ApiOperation({ summary: 'Eliminar prerequisito (síncrono)' })
  async removeSync(@Param('id') id: number) {
    return await this.prerequisitosService.remove(id);
  } 
}
