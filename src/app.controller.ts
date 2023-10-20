import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { SseService } from './sse/sse.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sseService: SseService,
  ) {}

  @Get()
  root(): string {
    this.sseService.fire('app root called');
    return this.appService.root();
  }
}
