
import { _decorator, Component, Node, director, Prefab, instantiate, v3, v2, EventTouch, SystemEvent, RigidBody2D, size, Size, view, UITransform, Label } from 'cc';
import { Block } from './block';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Game
 * DateTime = Tue Jul 19 2022 18:17:05 GMT+0800 (中国标准时间)
 * Author = 我爱喜洋洋
 * FileBasename = game.ts
 * FileBasenameNoExtension = game
 * URL = db://assets/game.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('Game')
export class Game extends Component {

    gap = 300

    gameStart = false

    @property(Prefab)
    block = null

    @property(Node)
    ball = null

    blockArray: Node[] = []

    @property(Label)
    scope = null

    scopetext = 0

    onLoad() {
        this.node.on(SystemEvent.EventType.TOUCH_START, this._touchStart, this);
        this._initblock()
    }

    onDestroy() {
        this.node.off(SystemEvent.EventType.TOUCH_START, this._touchStart, this);
    }

    update(dt: number) {
        if (Math.abs(this.ball.getPosition().y) > view.getVisibleSize().y) {
            this._gameOver()
            return
        }
        if (this.gameStart) {
            length = dt * -450
            this.blockArray.forEach(element => {
                element.setPosition(element.getPosition().x += length, 0)

                //出屏幕左侧
                if (element.getPosition().x < (-view.getVisibleSize().x / 2 - element.getComponent(UITransform).width / 2)) {
                    element.setPosition(this._getLastPos() + this.gap, 0)
                    this._increScrop()
                }
            });
        }
    }

    _touchStart(touch: Touch, event: EventTouch) {
        let body: RigidBody2D = this.ball.getComponent(RigidBody2D)
        body.linearVelocity = v2(0, -80)
        this.gameStart = true
    }

    _getLastPos() {
        let pos = 0
        this.blockArray.forEach(element => {
            if (element.getPosition().x > pos) {
                pos = element.getPosition().x
            }
        });
        return pos
    }

    _initblock() {
        length = 0

        for (let index = 0; index < 10; index++) {
            var block: Node = instantiate(this.block)
            block.getComponent(Block).init(Math.random() * 50 + 50)
            block.setPosition(length, 0)
            this.node.addChild(block)
            length += this.gap
            this.blockArray.push(block)
        }
    }

    _restoreblock() {
        length = 0

        this.blockArray.forEach(element => {
            element.setPosition(length, 0)
            length += this.gap
        });
    }

    _gameOver() {
        console.log("_gameOver")
        this.gameStart = false
        this.ball.setPosition(0, 250)
        this._restoreblock()
        this._relaseScrop()
    }

    _increScrop() {
        this.scopetext += 1
        this.scope.string = "得分：" + this.scopetext
    }

    _relaseScrop() {
        this.scopetext = 0
        this.scope.string = "得分：" + this.scopetext
    }
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
