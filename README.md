# node_gnavi

##ぐるなびWeb Service 
[レストラン検索API](http://api.gnavi.co.jp/api/manual/restsearch/) を node から利用する為のモジュール

## サンプル

```
var GNAVI = require("./gnavi.js");

// keyid ぐるなびWEBサービスへのアクセスキー
var gnavi = new GNAVI('xxxxxxxxxxx');

//検索結果コールバック
var fnc = function(err, resp, json){
    //console.log(err);
    //console.log(resp);
    var error = json['error'];
    if( error != null){
        //条件に合わなかった場合等
        console.log( error['message'] );
        return;
    }
    //検索 結果
    
    //該当件数
    var total_hit_count = json['total_hit_count'];
    console.log( {total_hit_count:total_hit_count} );
    
    var restList = json['rest'];
    for(var i in restList){
        //レストラン名を取得してみる
        var name = restList[i]['name'];
        var name_kana = restList[i]['name_kana'];
        console.log( name );
    }
};

//検索条件
var params = {address:'東京都豊島区',freeword:'とんかつ',lunch:1};
gnavi.search(params,fnc);

```



