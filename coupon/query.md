# 查询券 <Badge text="Release" type="warn"/> <Badge text="1.0"/>

## 请求类型
POST
## 请求路径
​/pet
## 接口说明
通过couponid查询券
## 接口参数
Parameters
``` json
{
  "id": "string"
}
```
## 响应参数
``` json
{
  "id": "string",
  "name": "string",
  "detail": "string"
}
```
## Code说明
| 序号 | Code | 说明 |
| ------ | ------ | ------ |
| 1 | 405 | Invalid input |
| 2 | 403 | Forbidden |