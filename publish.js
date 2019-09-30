const redis = require("redis");
const client = redis.createClient(6379, "127.0.0.1");

function zadd(key, score, member) {
    client.zadd(key, score, member, function () {
        client.publish("chat", member); //client将member发布到chat这个频道 然后订阅这个频道的订阅者就会收到消息
    });
}

for (var i = 0; i < 10; i++) {
    zadd("z", i, "member-" + i);//发布10次
    console.log("第" + i + "次");
}
