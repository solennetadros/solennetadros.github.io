var Twit = require('twit');
var config = {
	consumer_key:"4J5rNXLIJfShvkTksinVJvSvY",
	consumer_secret:"lwQc49rXNw7azcMCgFERCNoNDUpTZR1IS5o9egfp2CGOwvuUTt",
	access_token:"35481004-GBSJV4CI4Nu1sR3JMoyuBX9c3zpcMvsG8vq58Cwq9",
	access_token_secret:"NYI1udiwge2Vw60Jzjv0clGVe2eYfXIYjxfxR82JbMqth",
	timeout_ms: 60000

}

var T = new Twit(config);
console.log("twit");
console.log(T);