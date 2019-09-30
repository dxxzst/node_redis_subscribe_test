## NodeJS操作Redis实现消息的发布与订阅
首先先说一下流程：

1.保存数据到Redis，然后将member值publish到 chat频道（publish.js功能）

2.index.js文件此前一直在监听chat频道，index.js文件接收到member后，用它作为条件去Redis中去查找，拿到score数据

注意， 只要客户端订阅了频道， 除了SUBCRIBE,UNSUBCRIBE,PSUBCRIBE,PSUBCRIBE，就不能执行其他命令。

参考：http://wiki.jikexueyuan.com/project/redis/subscribe-to-release-mechanism.html
