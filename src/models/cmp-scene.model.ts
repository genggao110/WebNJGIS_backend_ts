/**
 * 比较场景认为是多个比较任务的集合，从更高层次上来评价比较的结果
 * 
 */

import { Mongoose } from './mongoose.base';
import * as mongoose from 'mongoose';

import { CmpTask } from './cmp-task.model';

class CmpSceneDB extends Mongoose {
    constructor() {
        const collectionName = 'CmpScene';
        const schema = {
            
        };

        super(collectionName, schema);
    }
}

export const cmpSceneDB = new CmpSceneDB();

export class CmpScene {
    _id: mongoose.Schema.Types.ObjectId;
    meta: {
        name: string;
        desc: string;
        time: string;
        author: string;
    };
    cfg: {
        cmpTaskIds: Array<string>;
    }
}