# 查询会员 <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>

## 请求类型
POST
## 请求路径
​/pet
## 接口说明
通过memberId查询券
## 接口参数
Parameters
``` json
{
  "id": 0,

}
```
## 响应参数
``` json
{
  "id": "string",
  "category": {
    "id": "string",
    "name": "string"
  },
  "category": {
    "id": "string",
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "status": "available"
}
```
## Code说明
| 序号 | Code | 说明 |
| ------ | ------ | ------ |
| 1 | 405 | Invalid input |
| 2 | 403 | Forbidden |