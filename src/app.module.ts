import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { DesafioModule } from './desafio/desafio.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:dRjJTsyKLreB3u9@cluster0.c9j9s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    JogadoresModule,
    CategoriasModule,
    DesafioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
