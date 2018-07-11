var data = [
  {
    field: '未知',
    parentid: 'dr',
    percent: 0.2,
    value: -1,
    tfield: 'invite_type'
  },
  {
    field: '流量渠道',
    parentid: 'dr',
    percent: 0.5,
    value: 0,
    tfield: 'invite_type'
  },
  {
    field: '邀请',
    parentid: 'dr',
    percent: 0.3,
    value: 1,
    tfield: 'invite_type'
  }
];
var newData = [
  {
    id: '',
    name: '未知',
    children: [
      {
        id: '',
        name: '流量渠道',
        children: [
          {
            id: '',
            name: '邀请',
            children: []
          }
        ]
      }
    ]
  }
];
for (let i = 0; i < data.length; i++) {
  if (i === 0) {
    data[i].pId = -1;
    data[i].id = i;
  } else {
    data[i].pId = i - 1;
    data[i].id = i;
  }
}
console.log(data);

// 属性配置设置
let attr = {
  id: 'id',
  parendId: 'pId',
  name: 'field',
  rootId: -1
};
function toTreeData(data, attr) {
  let tree = [];
  let resData = data;
  for (let i = 0; i < resData.length; i++) {
    if (resData[i][attr.parendId] === attr.rootId) {
      let obj = {
        id: resData[i][attr.id],
        name: resData[i][attr.name],
        children: []
      };
      tree.push(obj);
      resData.splice(i, 1);
      i--;
    }
  }
  var run = function(treeArrs) {
    if (resData.length > 0) {
      for (let i = 0; i < treeArrs.length; i++) {
        for (let j = 0; j < resData.length; j++) {
          if (treeArrs[i].id === resData[j][attr.parendId]) {
            let obj = {
              id: resData[j][attr.id],
              name: resData[j][attr.name],
              children: []
            };
            treeArrs[i].children.push(obj);
            resData.splice(j, 1);
            j--;
          }
        }
        run(treeArrs[i].children);
      }
    }
  };
  run(tree);
  return tree;
}
let arr = toTreeData(data, attr);
console.log(arr);