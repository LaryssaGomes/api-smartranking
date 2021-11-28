import { Module } from '@nestjs/common';
import { DesafioService } from './desafio.service';
import { DesafioController } from './desafio.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DesafioSchema } from './interfaces/desafio.schema';
import { PartidaSchema } from './interfaces/partida.schema';
import { JogadoresModule } from 'src/jogadores/jogadores.module';
import { CategoriasModule } from 'src/categorias/categorias.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Desafio', schema: DesafioSchema },
      { name: 'Partida', schema: PartidaSchema },
    ]),
    JogadoresModule,
    CategoriasModule,
  ],
  providers: [DesafioService],
  controllers: [DesafioController],
})
export class DesafioModule {}
