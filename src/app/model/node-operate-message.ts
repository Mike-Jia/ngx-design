export enum NodeOperateType {
    MAX, MIN, CLOSE
}

export class NodeOperateMessage {
    constructor(public type: NodeOperateType) {
    }
}
