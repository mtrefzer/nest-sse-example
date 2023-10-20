import { Controller, Get } from '@nestjs/common';

@Controller('sse')
export class SseController {
  @Get()
  get() {}
}
