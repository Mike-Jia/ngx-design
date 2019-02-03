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

  load(solutionId: string): void {
    this.operateSubject.next(new PortalOperateMessage(PortalOperateType.LOAD, solutionId));
  }

  save(solutionId: string): void {
    this.operateSubject.next(new PortalOperateMessage(PortalOperateType.SAVE, solutionId));
  }

  doLoad(solutionId: string): Observable<any> {
    return this.http.get(`assets/${solutionId}.json`);
  }

  doSave(solutionId: string, data: any): Observable<any> {
    return this.http.post(`${solutionId}`, data);
  }
}
