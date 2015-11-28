'use strict';

var _ = require('lodash');
var checkFizzbazz = function(no){
  if (no % 3 === 0){
    return 'fizz';
  }else if(no % 5 === 0){
    return 'bazz';
  }else{
    return 'no';
  }
};
var data = new Array();
data.push({
  id : '003',
  name : 'あかま二郎',
  image : 'assets/images/003.jpg'
});
data.push({
  id : '004',
  name : 'あべ俊子',
  image : 'assets/images/004.jpg'
});
data.push({
  id : '005',
  name : '安住淳',
  image : 'assets/images/005.jpg'
});
data.push({
  id : '006',
  name : '安倍晋三',
  image : 'assets/images/006.jpg'
});
data.push({
  id : '007',
  name : '足立康史',
  image : 'assets/images/007.jpg'
});
data.push({
  id : '008',
  name : '阿部知子',
  image : 'assets/images/008.jpg'
});
data.push({
  id : '009',
  name : '逢沢一郎',
  image : 'assets/images/009.jpg'
});
data.push({
  id : '010',
  name : '青柳陽一郎',
  image : 'assets/images/010.jpg'
});
data.push({
  id : '011',
  name : '青山周平',
  image : 'assets/images/011.jpg'
});
data.push({
  id : '012',
  name : '赤枝恒雄',
  image : 'assets/images/012.jpg'
});
data.push({
  id : '013',
  name : '赤澤亮正',
  image : 'assets/images/013.jpg'
});
data.push({
  id : '014',
  name : '赤羽一嘉',
  image : 'assets/images/014.jpg'
});
data.push({
  id : '015',
  name : '赤松広隆',
  image : 'assets/images/015.jpg'
});
data.push({
  id : '016',
  name : '赤嶺政賢',
  image : 'assets/images/016.jpg'
});
data.push({
  id : '017',
  name : '秋葉賢也',
  image : 'assets/images/017.jpg'
});
data.push({
  id : '018',
  name : '秋元司',
  image : 'assets/images/018.jpg'
});
data.push({
  id : '019',
  name : '秋本真利',
  image : 'assets/images/019.jpg'
});
data.push({
  id : '020',
  name : '浅尾慶一郎',
  image : 'assets/images/020.jpg'
});
data.push({
  id : '021',
  name : '麻生太郎',
  image : 'assets/images/021.jpg'
});
data.push({
  id : '022',
  name : '穴見陽一',
  image : 'assets/images/022.jpg'
});

// 全検索
exports.index = function(req, res) {
  res.json({
    data:data
  });
};

// ID検索
exports.search = function(req, res) {
  console.log('search', req.params.eventId );
  res.json({
    data:data.filter(function(event){
      return parseInt(event.no) === parseInt(req.params.eventId);
    })
  });
};

// 登録
exports.create = function(req, res) {
  console.log('create', req.body );
  data.push((function(){
    var no = data.length+1;
    return {
      no: no,
      name: req.body.name,
      detail: req.body.detail,
      tag : checkFizzbazz(no)
    }
  })());
  res.send(200);
};
