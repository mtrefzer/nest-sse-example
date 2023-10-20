import { Injectable } from '@nestjs/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { MsgData } from './msg-data';

@Injectable()
export class SseService {
  private sseMsg = new BehaviorSubject<MsgData>(
    new MsgData('init', 'initial msg'),
  );
  public sseMsg$: Observable<MsgData> = this.sseMsg.asObservable();

  fire(msg: string) {
    this.sseMsg.next(new MsgData('fired', msg));
  }
}
