
import { _decorator, Component, Node, BoxCollider2D, UITransform, director, PhysicsSystem2D, EPhysics2DDrawFlags } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Block
 * DateTime = Thu Jul 28 2022 16:35:32 GMT+0800 (中国标准时间)
 * Author = 我爱喜洋洋
 * FileBasename = block.ts
 * FileBasenameNoExtension = block
 * URL = db://assets/block.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('Block')
export class Block extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start() {
        // [3]
    }

    init(width) {
        this.node.getComponent(BoxCollider2D).size.width = width
        this.node.getComponent(UITransform).width = width
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
