import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SseController } from './sse.controller';
import { SseMiddleware } from './sse.middleware';
import { SseService } from './sse.service';

@Module({
  controllers: [SseController],
  providers: [SseService],
  exports: [SseService],
})
export class SseModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SseMiddleware).forRoutes(SseController);
  }
}
