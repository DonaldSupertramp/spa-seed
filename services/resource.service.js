function ResourceService(url){

    this.apiurl = url;

}

ResourceService.prototype.configure = function(cfg){

    var self = this;

    cfg.forEach(function(setting){

        if(typeof setting != 'object' || !setting.root) return;

        var nodename = setting.root.substring(1);

        self[nodename] = new ResourceNode(setting,self.apiurl);

    });

};

function ResourceNode(cfg,apiurl){

    this.criteriaList = [];

    this.routes = {};

    for(var key in cfg){

        this.criteriaList.push(key);

        this.routes[key] = key == 'root' ?  apiurl + cfg[key] : apiurl + cfg['root'] + cfg[key];
    }

}

ResourceNode.prototype.get = function(key,val){

    key = key ? key : 'root';

    var query = this.routes[key].replace(':' + key + 'Id','') + (val || '');

    return $http.get(query);
};

ResourceNode.prototype.post = function(key,val){

    if(!val){
        val = key;
        key = 'root';
    }

    var query = this.routes[key];

    return $http.post(query,val);
};

ResourceNode.prototype.put = function(key,val){

    if(!val){
        val = key;
        key = 'root';
    }

    var query = this.routes[key];

    return $http.put(query,val);
};

ResourceNode.prototype.delete = function(key,val){

    key = key ? key : 'root';

    var query = this.routes[key].replace(':' + key + 'Id','') + (val || '');

    return $http.delete(query);

};
