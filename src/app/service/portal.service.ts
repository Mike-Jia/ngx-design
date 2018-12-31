import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PortalOperateMessage, PortalOperateType } from '../model/portal-operate-message';
import { Config } from '../model/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  operateSubject: Subject<PortalOperateMessage>;

  constructor(private http: HttpClient) {
    this.operateSubject = new Subject<PortalOperateMessage>();
  }

  create(config: Config): void {
    this.operateSubject.next(new PortalOperateMessage(PortalOperateType.CREATE, null, config));
  }

  delete(id: string): void {
    this.operateSubject.next(new PortalOperateMessage(PortalOperateType.DELETE, id));
  }

  move(config: Config): void {
    this.operateSubject.next(new PortalOperateMessage(PortalOperateType.UPDATE, config.id, config));
  }

  load(): void {
    this.operateSubject.next(new PortalOperateMessage(PortalOperateType.LOAD));
  }

  save(): void {
    this.operateSubject.next(new PortalOperateMessage(PortalOperateType.SAVE));
  }

  doLoad(): Observable<any> {
    return this.http.get('assets/info.json');
  }

  doSave(data: any): Observable<any> {
    return this.http.post('xxx', data);
  }
}
