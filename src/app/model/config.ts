import { Type } from '@angular/core';

export interface Config {
    id?: string;
    name: string;
    parent: string;
    width: number;
    height: number;
    positionX: number;
    positionY: number;
    component: Type<any>;
    data?: any;
}
