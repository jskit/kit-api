
# API

参考 https://swapi.co/documentation

- http://graphql.org/swapi-graphql
- http://graphql.cn/

```bash
# Root
# 根资源提供了API内所有可用资源的信息。
# Example request:
http https://kitjs.com/api

# Example response:
HTTP/1.0 200 OK
Content-Type: application/json
{
  "country": "https://kitjs.com/api/country",
  "phone": "https://kitjs.com/api/phone",
  "area": "https://kitjs.com/api/area",
  "city": "https://kitjs.com/api/city",
  "ip": "https://kitjs.com/api/ip",
}
```

- 所有资源支持 `/api/<resource>/schema` 以编程方式检查该资源及其类型的属性。
- 支持一个search `/api/people/?search=r2` 过滤返回资源集的参数。

```bash
/country -- 获得所有的国家
/country/:id -- 获得特定的国家
/country/schema -- 查看此资源的JSON模式
```

```js

// phone
// --字段：前三位 号段 省份 城市 运营商 邮编 区号 行政区划编码 类型
{
  pref: '',
  phone: '',
  province: '',
  city: '',
  isp: '',
  zip_code: '',
  city_code: '',
  area_code: '',
  types: '',
}

// country
// --字段

// area
// --字段 区划ID-父ID-全称-全称聚合-简称-简称聚合-级别-区号-邮编-拼音-简拼-首字母-经度-纬度-备注
{
  id: '',
  parent_id: '',
  name: '',
  merger_name: '',
  short_name: '',
  merger_short_name: '',
  level_type: '',
  city_code: '',
  zip_code: '', // post_code
  pinyin: '',
  jianpin: '',
  first_char: '',
  lng: '',
  lat: '',
  remark: '',
}

// ip
// --字段 ip段 数字段 大洲 国家 省份 城市 县区 运营商 区划代码 国家英文名称 国家简码 经度 纬度
{
  ip_start: '',
  ip_end: '',
  ip_start_num: '',
  ip_end_num: '',
  continent: '',
  country: '',
  province: '',
  city: '',
  district: '',
  isp: '',
  area_code: '',
  country_english: '',
  country_code: '',
  longitude: '',
  latitude: '',
}
```
