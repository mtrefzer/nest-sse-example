import { Injectable, NestMiddleware } from '@nestjs/common';
import { EventData } from 'express-sse-middleware/dist/EventBuilder';
import SseProvider from 'express-sse-middleware/dist/SseProvider';
import { SseService } from './sse.service';
import { MsgData } from './msg-data';

@Injectable()
export class SseMiddleware implements NestMiddleware {
  idCounter = 0;
  clientId = 0;
  clients = new Map<number, SseProvider>();

  constructor(readonly sseService: SseService) {
    sseService.sseMsg$.subscribe((msgData: MsgData) => {
      [...this.clients.values()].forEach((sse) => {
        this.idCounter += 1;
        const eventData: EventData<MsgData> = {
          id: String(this.idCounter),
          event: 'newData',
          data: msgData,
        };
        sse.send(eventData); // <- Push EventData with typed payload
      });
    });
  }

  use(req, res) {
    const sse = res.sse();
    this.clientId += 1;
    const clientId = this.clientId;
    this.clients.set(clientId, sse);
    req.on('close', () => {
      sse.close();
      this.clients.delete(clientId);
    });
  }
}
