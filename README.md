# minprogram-sdk
common tool for mini-program

## 目的

屏蔽小程序之间的差异性

## 各个小程序存在的差异

1. 支付宝小程序基于react的思想。对于组件采用状态didUpdate的方式来监听状态的更改
2. 微信小程序基于Vue的方式，通过Observe的方式来监听没有每一个属性的变化，从而执行其他的操作

## API 接口
### 设备
微信多了base64ToArrayBuffer 和 arrayBufferToBase64 数据转换

- canIUse 判断当前小程序的 API、入参或返回值、组件、属性等在当前版本是否支持
- getSystemInfoSync(同步)	getSystemInfo(异步) 获取系统信息
