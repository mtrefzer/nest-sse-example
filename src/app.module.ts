import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SseModule } from './sse/sse.module';

@Module({
  imports: [SseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
