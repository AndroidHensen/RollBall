#### Cocos Creator 跳跃球游戏

* Editor版本v3.2.2

#### 游戏截图

![](https://raw.githubusercontent.com/AndroidHensen/RollBall/master/show.png)

#### 实现原理

* 让球一直和矩形碰撞，然后通过点击加速的方法让他继续在矩形上弹起来，矩形会做一个左移动画，看上去是在移动

#### 知识点

* BoxCollider2D的使用
* 小球加速和反弹linearVelocity的使用
* 碰撞事件使用：collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
