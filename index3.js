var datas = [
  {
    field: 'dr',
    item: [
      {
        field: 'invite_type',
        item: [
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
        ],
        value: '邀请类型'
      },
      {
        field: 'use_coupon_rate_rank',
        item: [
          {
            field: '[0,30%)',
            parentid: 'dr',
            percent: 0.2,
            value: '0',
            tfield: 'use_coupon_rate_rank'
          },
          {
            field: '[30%,50%)',
            parentid: 'dr',
            percent: 0.2,
            value: '0',
            tfield: 'use_coupon_rate_rank'
          },
          {
            field: '[50%,70%)',
            parentid: 'dr',
            percent: 0.2,
            value: '0',
            tfield: 'use_coupon_rate_rank'
          },
          {
            field: '[70%,90%)',
            parentid: 'dr',
            percent: 0.2,
            value: '0',
            tfield: 'use_coupon_rate_rank'
          },
          {
            field: '[90%,100%)',
            parentid: 'dr',
            percent: 0.2,
            value: '0',
            tfield: 'use_coupon_rate_rank'
          }
        ],
        value: '卡券使用率排名'
      },
      {
        field: 'use_coupon_prefer',
        item: [
          {
            field: '未知',
            parentid: 'dr',
            percent: 0.2,
            value: '0',
            tfield: 'use_coupon_prefer'
          },
          {
            field: '强',
            parentid: 'dr',
            percent: 0.2,
            value: '0',
            tfield: 'use_coupon_prefer'
          },
          {
            field: '弱',
            parentid: 'dr',
            percent: 0.2,
            value: '0',
            tfield: 'use_coupon_prefer'
          }
        ],
        value: '卡券偏好'
      }
    ],
    value: '购买决策动因'
  },
  {
    field: 'ip',
    item: [
      {
        field: 'hope_period_result',
        item: [
          {
            field: '未知',
            parentid: 'ip',
            percent: 0.2,
            value: '-1',
            tfield: 'hope_period_result'
          },
          {
            field: '不匹配',
            parentid: 'ip',
            percent: 0.3,
            value: '0',
            tfield: 'hope_period_result'
          },
          {
            field: '匹配',
            parentid: 'ip',
            percent: 0.5,
            value: '1',
            tfield: 'hope_period_result'
          }
        ],
        value: '期限匹配结果'
      },
      {
        field: 'hope_period',
        item: [
          {
            field: '长期偏好',
            parentid: 'ip',
            percent: 0.2,
            value: '-1',
            tfield: 'hope_period'
          },
          {
            field: '中长期偏好',
            parentid: 'ip',
            percent: 0.2,
            value: '0',
            tfield: 'hope_period'
          },
          {
            field: '短期偏好',
            parentid: 'ip',
            percent: 0.2,
            value: '1',
            tfield: 'hope_period'
          },
          {
            field: '极短期偏好',
            parentid: 'ip',
            percent: 0.2,
            value: '-1',
            tfield: 'hope_period'
          },
          {
            field: '急速流动性偏好',
            parentid: 'ip',
            percent: 0.2,
            value: '0',
            tfield: 'hope_period'
          }
        ],
        value: '期限偏好'
      }
    ],
    value: '投资偏好'
  },
  {
    field: 'itf',
    item: [
      {
        field: 'in_rank_year',
        item: [
          {
            field: '[0,30%)',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'in_rank_year'
          },
          {
            field: '[30%,50%)',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'in_rank_year'
          },
          {
            field: '[50%,70%)',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'in_rank_year'
          },
          {
            field: '[70%,90%)',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'in_rank_year'
          },
          {
            field: '[90%,100%)',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'in_rank_year'
          }
        ],
        value: '同一风险等级排名'
      },
      {
        field: 'cr_last_year_value',
        item: [
          {
            field: '等级一',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'cr_last_year_value'
          },
          {
            field: '等级二',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'cr_last_year_value'
          },
          {
            field: '等级三',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'cr_last_year_value'
          },
          {
            field: '等级四',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'cr_last_year_value'
          },
          {
            field: '等级五',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'cr_last_year_value'
          }
        ],
        value: '综合实际收益率'
      },
      {
        field: 'real_rate_deviate_year',
        item: [
          {
            field: '远未实现',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'real_rate_deviate_year'
          },
          {
            field: '稍未实现',
            parentid: 'itf',
            percent: 0.2,
            value: '1',
            tfield: 'real_rate_deviate_year'
          },
          {
            field: '稍超期望',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'real_rate_deviate_year'
          },
          {
            field: '超期望',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'real_rate_deviate_year'
          },
          {
            field: '远超期望',
            parentid: 'itf',
            percent: 0.2,
            value: '0',
            tfield: 'real_rate_deviate_year'
          }
        ],
        value: '实际收益率偏离度'
      }
    ],
    value: '投资目标'
  },
  {
    field: 'lf',
    item: [
      {
        field: 'member_level',
        item: [
          {
            field: 'V0',
            parentid: 'lf',
            percent: 0.2,
            value: 'V0',
            tfield: 'member_level'
          },
          {
            field: 'V1',
            parentid: 'lf',
            percent: 0.2,
            value: 'V1',
            tfield: 'member_level'
          },
          {
            field: 'V2',
            parentid: 'lf',
            percent: 0.2,
            value: 'V2',
            tfield: 'member_level'
          },
          {
            field: 'V3',
            parentid: 'lf',
            percent: 0.2,
            value: 'V3',
            tfield: 'member_level'
          },
          {
            field: 'V4',
            parentid: 'lf',
            percent: 0.2,
            value: 'V4',
            tfield: 'member_level'
          },
          {
            field: 'V5',
            parentid: 'lf',
            percent: 0.2,
            value: 'V5',
            tfield: 'member_level'
          }
        ],
        value: '会员等级'
      },
      {
        field: 'activity_level',
        item: [
          {
            field: 'A0',
            parentid: 'lf',
            percent: 0.2,
            value: 'A0',
            tfield: 'activity_level'
          },
          {
            field: 'A1',
            parentid: 'lf',
            percent: 0.2,
            value: 'A1',
            tfield: 'activity_level'
          },
          {
            field: 'A2',
            parentid: 'lf',
            percent: 0.2,
            value: 'A2',
            tfield: 'activity_level'
          },
          {
            field: 'A3',
            parentid: 'lf',
            percent: 0.2,
            value: 'A3',
            tfield: 'activity_level'
          },
          {
            field: 'A4',
            parentid: 'lf',
            percent: 0.2,
            value: 'A4',
            tfield: 'activity_level'
          },
          {
            field: 'A5',
            parentid: 'lf',
            percent: 0.2,
            value: 'A5',
            tfield: 'activity_level'
          }
        ],
        value: '登陆活跃度'
      },
      {
        field: 'platform_age',
        item: [
          {
            field: '新手',
            parentid: 'lf',
            percent: 0.2,
            value: '1',
            tfield: 'platform_age'
          },
          {
            field: '次新老用户',
            parentid: 'lf',
            percent: 0.2,
            value: '2',
            tfield: 'platform_age'
          },
          {
            field: '老用户',
            parentid: 'lf',
            percent: 0.2,
            value: '3',
            tfield: 'platform_age'
          },
          {
            field: '超级老用户',
            parentid: 'lf',
            percent: 0.2,
            value: '4',
            tfield: 'platform_age'
          },
          {
            field: '骨灰级老用户',
            parentid: 'lf',
            percent: 0.2,
            value: '5',
            tfield: 'platform_age'
          },
          {
            field: '骨灰级忠实老用户',
            parentid: 'lf',
            percent: 0.2,
            value: '6',
            tfield: 'platform_age'
          },
          {
            field: '未知',
            parentid: 'lf',
            percent: 0.2,
            value: '-1',
            tfield: 'platform_age'
          }
        ],
        value: '司龄'
      }
    ],
    value: '会员属性'
  },
  {
    field: 'nf',
    item: [
      {
        field: 'wealth_stage',
        item: [
          {
            field: '财富累积阶段',
            parentid: 'nf',
            percent: 0.2,
            value: '1',
            tfield: 'wealth_stage'
          },
          {
            field: '财富巩固阶段',
            parentid: 'nf',
            percent: 0.3,
            value: '2',
            tfield: 'wealth_stage'
          },
          {
            field: '财富支出阶段',
            parentid: 'nf',
            percent: 0.3,
            value: '3',
            tfield: 'wealth_stage'
          },
          {
            field: '其他阶段',
            parentid: 'nf',
            percent: 0.2,
            value: '0',
            tfield: 'wealth_stage'
          }
        ],
        value: '年龄阶段'
      },
      {
        field: 'sex',
        item: [
          {
            field: '男',
            parentid: 'nf',
            percent: 0.5,
            value: '1',
            tfield: 'sex'
          },
          {
            field: '女',
            parentid: 'nf',
            percent: 0.5,
            value: '0',
            tfield: 'sex'
          }
        ],
        value: '性别'
      },
      {
        field: 'constellation',
        item: [
          {
            field: '摩羯座',
            parentid: 'nf',
            percent: 0.2,
            value: '0',
            tfield: 'constellation'
          }
        ],
        value: '星座'
      }
    ],
    value: '基础属性'
  },
  {
    field: 'pa',
    item: [
      {
        field: 'risk_score_level',
        item: [
          {
            field: '未知',
            parentid: 'pa',
            percent: 0.2,
            value: '-1',
            tfield: 'risk_score_level'
          },
          {
            field: '合理',
            parentid: 'pa',
            percent: 0.2,
            value: '1',
            tfield: 'risk_score_level'
          },
          {
            field: '偏低',
            parentid: 'pa',
            percent: 0.2,
            value: '0',
            tfield: 'risk_score_level'
          },
          {
            field: '偏高',
            parentid: 'pa',
            percent: 0.4,
            value: '2',
            tfield: 'risk_score_level'
          }
        ],
        value: '资产风险值等级'
      },
      {
        field: 'f_lose_money_rank_rate',
        item: [
          {
            field: '[0,30%)',
            parentid: 'pa',
            percent: 0.2,
            value: '0',
            tfield: 'f_lose_money_rank_rate'
          },
          {
            field: '[30%,50%)',
            parentid: 'pa',
            percent: 0.2,
            value: '0',
            tfield: 'f_lose_money_rank_rate'
          },
          {
            field: '[50%,70%)',
            parentid: 'pa',
            percent: 0.2,
            value: '0',
            tfield: 'f_lose_money_rank_rate'
          },
          {
            field: '[70%,90%)',
            parentid: 'pa',
            percent: 0.2,
            value: '0',
            tfield: 'f_lose_money_rank_rate'
          },
          {
            field: '[90%,100%)',
            parentid: 'pa',
            percent: 0.2,
            value: '0',
            tfield: 'f_lose_money_rank_rate'
          }
        ],
        value: '个人账户余额损失收益占比'
      }
    ],
    value: '账户分析'
  },
  {
    field: 'ria',
    item: [
      {
        field: 'user_personas_e',
        item: [
          {
            field: '等级一',
            parentid: 'ria',
            percent: 0.2,
            value: '0'
          },
          {
            field: '等级二',
            parentid: 'ria',
            percent: 0.2,
            value: '0'
          },
          {
            field: '等级三',
            parentid: 'ria',
            percent: 0.2,
            value: '0'
          },
          {
            field: '等级四',
            parentid: 'ria',
            percent: 0.2,
            value: '0'
          },
          {
            field: '等级五',
            parentid: 'ria',
            percent: 0.2,
            value: '0'
          }
        ],
        value: '风险承受能力'
      },
      {
        field: 'consumer_low_moey',
        item: [
          {
            field: '低',
            parentid: 'ria',
            percent: 0.2,
            value: '1'
          },
          {
            field: '中',
            parentid: 'ria',
            percent: 0.2,
            value: '2'
          },
          {
            field: '高',
            parentid: 'ria',
            percent: 0.2,
            value: '3'
          },
          {
            field: '超高',
            parentid: 'ria',
            percent: 0.2,
            value: '4'
          },
          {
            field: '关注',
            parentid: 'ria',
            percent: 0.2,
            value: '-1'
          }
        ],
        value: '客户短期资金潜力'
      },
      {
        field: 'family_inc_amt',
        item: [
          {
            field: '15万以下',
            parentid: 'ria',
            percent: 0.2,
            value: 'a'
          },
          {
            field: '15-30万元',
            parentid: 'ria',
            percent: 0.2,
            value: 'b'
          },
          {
            field: '30-50万元',
            parentid: 'ria',
            percent: 0.2,
            value: 'c'
          },
          {
            field: '50-100万元',
            parentid: 'ria',
            percent: 0.2,
            value: 'd'
          },
          {
            field: '100-500万元',
            parentid: 'ria',
            percent: 0.1,
            value: 'e'
          },
          {
            field: '500万以上',
            parentid: 'ria',
            percent: 0.1,
            value: 'f'
          }
        ],
        value: '家庭收入'
      }
    ],
    value: '风险承受能力'
  },
  {
    field: 'rt',
    item: [
      {
        field: '',
        item: [
          {
            field: '等级一',
            parentid: 'rt',
            percent: 0.2,
            value: '0'
          },
          {
            field: '等级二',
            parentid: 'rt',
            percent: 0.2,
            value: '0'
          },
          {
            field: '等级三',
            parentid: 'rt',
            percent: 0.2,
            value: '0'
          },
          {
            field: '等级四',
            parentid: 'rt',
            percent: 0.2,
            value: '0'
          },
          {
            field: '等级五',
            parentid: 'rt',
            percent: 0.2,
            value: '0'
          }
        ],
        value: '风险容忍等级'
      },
      {
        field: 'user_risk_rating',
        item: [
          {
            field: '保守型',
            parentid: 'rt',
            percent: 0.2,
            value: '1R'
          },
          {
            field: '稳健型',
            parentid: 'rt',
            percent: 0.2,
            value: '2R'
          },
          {
            field: '平衡型',
            parentid: 'rt',
            percent: 0.2,
            value: '3R'
          },
          {
            field: '积极型',
            parentid: 'rt',
            percent: 0.2,
            value: '4R'
          },
          {
            field: '激进型',
            parentid: 'rt',
            percent: 0.2,
            value: '5R'
          }
        ],
        value: '风险测评等级'
      }
    ],
    value: '风险容忍度'
  }
];
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
        children: [],
        value: 1,
        itemStyle: {
          color: '#777'
        },
        label: {
          rotate: 'tangential'
        }
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
              children: [],
              value: 1,
              itemStyle: {
                color: '#777'
              },
              label: {
                rotate: 'tangential'
              }
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

for (let i = 0; i < datas.length; i++) {
  datas[i].name = datas[i].value;
  datas[i].itemStyle = {};
  datas[i].itemStyle.color = '#777';
  let items = datas[i].item;
  datas[i].children = [];
  for (let j = 0; j < items.length; j++) {
    const curItems = items[j].item;
    if (curItems && curItems.length > 0) {
      for(let k = 0; k < curItems.length; k++) {
        if (k === 0) {
          curItems[k].pId = -1;
          curItems[k].id = k;
        } else {
          curItems[k].pId = k - 1;
          curItems[k].id = k;
        }
      }
    }
    let arr = toTreeData(curItems, attr);
    datas[i].children.push({
      name: items[j].value,
      itemStyle: {
        color: '#5191d4',
      },
      children: [
        {
          itemStyle: {
            color: '#777'
          },
          children: arr
        }
      ]
    });
  }
};
console.log(datas);
var option = {
  title: {
    text: '测试标题',
    subtext: '个人账户资产分析明细',
    textStyle: {
      fontSize: 12,
      align: 'center'
    },
    subtextStyle: {
      align: 'center'
    }
  },
  series: {
    type: 'sunburst',
    center: ['50%', '50%'],
    highlightPolicy: 'ancestor',
    data: datas,
    radius: ['7%', '92%'],
    sort: null,
    label: {
      fontSize: 10,
      padding: 0
    },
    // 是一个数组，第0项表示数据下钻后返回上级的图形，其后的每一项分别从圆心向外层的层级
    levels: [
      // 留给数据下钻点的空白配置
      {}, 
      // 最靠内测的第一层 
      {
        r0: '15%',
        r: '30%',
        itemStyle: {
          borderWidth: 1
        },
        label: {
          rotate: 'tangential'
        }
      }, 
      // 最靠内测的第二层 
      {
        r0: '92%',
        r: '100%',
        itemStyle: {
          borderWidth: 1
        },
        label: {
          align: 'center',
          rotate: 'tangential',
          padding: 1,
          silent: true
        }
      }, 
      // 最靠内测的第三层 
      {
        r0: '30%',
        r: '30%',
        label: {
          position: 'inside',
          padding: 3,
          silent: false
        }
      }

    ]
  }
};
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('multMapId'));
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
