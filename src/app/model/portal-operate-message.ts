import { Config } from './config';

export enum PortalOperateType {
    CREATE, DELETE, UPDATE, LOAD, SAVE
}

export class PortalOperateMessage {
    constructor(public type: PortalOperateType, public id?: string, public config?: Config) { }
}
