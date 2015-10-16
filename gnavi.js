/** レストラン検索API
 *  http://api.gnavi.co.jp/api/manual/restsearch/
 *
 **/
module.exports = function RestSearchAPI(keyid){
    //HTTPリクエスト
    this.request = require('request');
    
    //ぐるなびより提供されたアクセスキー
    this.keyid = keyid;
    
    //サーバURL
    this.API_URL = 'http://api.gnavi.co.jp/RestSearchAPI/20150630/';
    
    //検索
    this.search = function(params,callback){
        //レスポンスはJSON固定
        params['keyid'] = this.keyid;
        params['format'] = 'json';
        
        var urlParams = '';
        for (var key in params) {
            if(urlParams != '') urlParams += '&';
            urlParams += key+'='+encodeURIComponent(params[key]);
        }
        var url = this.API_URL+'?'+urlParams;
        
        this.request.get(url,function(err, resp, body){
                            var json = JSON.parse(body);
                            callback(err, resp, json);
                         });
        
    };
};
