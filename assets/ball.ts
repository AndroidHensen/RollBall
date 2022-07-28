
import { _decorator, Component, Node, Collider2D, Contact2DType, BoxCollider2D, IPhysics2DContact, RigidBody2D, v2,PhysicsSystem2D, EPhysics2DDrawFlags} from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Ball
 * DateTime = Wed Jul 27 2022 14:47:44 GMT+0800 (中国标准时间)
 * Author = 我爱喜洋洋
 * FileBasename = ball.ts
 * FileBasenameNoExtension = ball
 * URL = db://assets/ball.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('Ball')
export class Ball extends Component {

    _initVel = 0

    onLoad() {
        console.log('onLoad');
        let collider = this.getComponent(Collider2D);
        collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    onDestroy() {
        let collider = this.getComponent(Collider2D);
        collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        let body = selfCollider.getComponent(RigidBody2D)
        if (!this._initVel) {
            this._initVel = body.linearVelocity.y
            body.linearVelocity = v2(0, Math.max(this._initVel,-30))
        } else {
            body.linearVelocity = v2(0, Math.max(this._initVel,-30))
        }
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
