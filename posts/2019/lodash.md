---

Created at: 2020-03-18
Last updated at: 2022-09-28
tags: 
  - lodash
  - moment
  - lodash-decorators

---

# lodash

### lodash

```html
<script src="https://cdn.bootcss.com/lodash.js/4.17.11/lodash.min.js"></script>
```

```
* _.omit( 对象 , 忽略对象属性数组 )
 忽略obj中的某些属性

    var object = { 'a': 1, 'b': '2', 'c': 3 };
    _.omit(object, ['a', 'c']);
    // => { 'b': '2' }
  
* _.omitBy( 对象|数组 , 忽略属性数组 , 按某种规则忽略 )

    var object = { 'a': 1, 'b': '2', 'c': 3 };
    _.omitBy(object,_.isNumber);
    // => { 'b': '2' }

* _.uniq( 去重 )
* _.uniqBy( 依赖去重 )
* _.reduce( 集合 , 处理方法 , 初始集合)
 遍历返回处理后的集合

    _.reduce([1, 2], function(sum, n) {
      return sum + n;
    }, 0);
    // => 3
    // 聚合对象相同值的属性
    _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
      (result[value] || (result[value] = [])).push(key);
      return result;
    }, {});
    // => { '1': ['a', 'c'], '2': ['b'] } (无法保证遍历的顺序)
  
* _.merge( 对象，对象 )
 合并两个对象中的数组位置对象

    var users = {
      'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
    };
    var ages = {
      'data': [{ 'age': 36 }, { 'age': 40 }]
    };
    _.merge(users, ages);
    // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
  
* _.mergeWith( 对象，对象 )
 自定义合并两个对象中的数组位置

    function customizer(objValue, srcValue) {
      if (_.isArray(objValue)) {
        return objValue.concat(srcValue);
      }
    }
    var object = {
      'fruits': ['apple'],
      'vegetables': ['beet']
    };
    var other = {
      'fruits': ['banana'],
      'vegetables': ['carrot']
    };
    _.mergeWith(object, other, customizer);
    // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
  
* 判断除某项外数据相等

    _.isEqualWith(oO,nO,(oV,nV,key) => key==='xxx' ? true : undefined)

* 过滤出两个对象的改变的值

    // 过滤两个对象中不同的值
    function difference(object, base) {
      function changes(object, base) {
        return _.transform(object, function (result, value, key) {
          if (!_.isEqual(value, base[key])) {
            result[key] =
              _.isObject(value) &&_.isObject(base[key]) ? changes(value, base[key]) : value;
          }
        });
      }
      return changes(object, base);
    }
```

### moment

* 获取今天0时0分0秒
 `moment().startOf('day')`
* 获取今天23时59分59秒
 `moment().endOf('day')`
* 获取本周第一天(周日)0时0分0秒
 `moment().startOf('week')`
* 获取本周最后一天(周六)23时59分59秒
 `moment().endOf('week')`
* 获取本周周一0时0分0秒
 `moment().startOf('isoWeek')`
* 获取本周周日23时59分59秒
 `moment().endOf('isoWeek')`
* 获取当前月第一天0时0分0秒
 `moment().startOf('month')`
* 获取当前月最后一天23时59分59秒
 `moment().endOf('month')`
* 获取当前月的总天数
 `moment().daysInMonth()`
* 获取时间戳(以秒为单位)
 `moment().format('X') // 返回值为字符串类型`
 `moment().unix() // 返回值为数值型`
* 获取时间戳(以毫秒为单位)
 `moment().format('x') // 返回值为字符串类型`
 `moment().valueOf() // 返回值为数值型`
* 获取年份
 `moment().year()`
 `moment().get('year')`
* 获取月份
 `moment().month() // (0~11, 0: January, 11: December)`
 `moment().get('month')`
* 获取一个月中的某一天
 `moment().date()`
 `moment().get('date')`
* 获取一个星期中的某一天
 `moment().day() // (0~6, 0: Sunday, 6: Saturday)`
 `moment().weekday() // (0~6, 0: Sunday, 6: Saturday)`
 `moment().isoWeekday() // (1~7, 1: Monday, 7: Sunday)`
 `moment().get('day')`
 `mment().get('weekday')`
 `moment().get('isoWeekday')`
* 获取小时
 `moment().hours()`
 `moment().get('hours')`
* 获取分钟
 `moment().minutes()`
 `moment().get('minutes')`
* 获取秒数
 `moment().seconds()`
 `moment().get('seconds')`
* 获取当前的年月日时分秒
 `moment().toArray() // [years, months, date, hours, minutes, seconds, milliseconds]`
 `moment().toObject() // {years: xxxx, months: x, date: xx ...}`
* 格式化年月日时分秒am/pm
 `moment().format('YYYY-MM-DD hh:mm:ss a')`
* 格式化时间戳(以秒为单位)
 `moment().format('X') // 返回值为字符串类型`
* 格式化时间戳(以毫秒为单位)
 `moment().format('x') // 返回值为字符串类型`
* 比较时间

    moment.min(startTime,endTime)
    moment.max(startTime,endTime)
    moment(endTime).isBefore(startTime)
    moment(startTime).isSame(endTime)
    moment(startTime).isAfter(endTime)
    moment(midTime).isBetween(startTime,endTime)
    moment(time).isLeapYear() // 是否闰年

* 获取两个日期之间的时间差

    let start_date = moment().subtract(1, 'weeks')
    let end_date = moment()
    end_date.diff(start_date) // 返回毫秒数
    end_date.diff(start_date, 'months') // 0
    end_date.diff(start_date, 'weeks') // 1
    end_date.diff(start_date, 'days') // 7
    start_date.diff(end_date, 'days') // -7

* 转化为原生Date对象
 `moment().toDate()`
 `new Date(moment())`
* 设置年份
 `moment().year(2019)`
 `moment().set('year', 2019)`
 `moment().set({year: 2019})`
* 设置月份
 `moment().month(11) // (0~11, 0: January, 11: December)`
 `moment().set('month', 11)`
* 设置某个月中的某一天
 `moment().date(15)`
 `moment().set('date', 15)`
* 设置某个星期中的某一天
 `moment().weekday(0) // 设置日期为本周第一天（周日）`
 `moment().isoWeekday(1) // 设置日期为本周周一`
 `moment().set('weekday', 0)`
 `moment().set('isoWeekday', 1)`
* 设置小时
 `moment().hours(12)`
 `moment().set('hours', 12)`
* 设置分钟
 `moment().minutes(30)`
 `moment().set('minutes', 30)`
* 设置秒数
 `moment().seconds(30)`
 `moment().set('seconds', 30)`
* 更新年份
 `moment().add(1, 'years')`
 `moment().add({years: 1})`
 `moment().subtract(1, 'years')`
 `moment().subtract({years: 1})`
* 更新月份
 `moment().add(1, 'months')`
 `moment().subtract(1, 'months')`
* 更新日期
 `moment().add(1, 'days')`
 `moment().subtract(1, 'days')`
* 更新星期
 `moment().add(1, 'weeks')`
 `moment().subtract(1, 'weeks')`
* 更新小时
 `moment().add(1, 'hours')`
 `moment().subtract(1, 'hours')`
* 更新分钟
 `moment().add(1, 'minutes')`
 `moment().subtract(1, 'minutes')`
* 更新秒数
 `moment().add(1, 'seconds')`
 `moment().subtract(1, 'seconds')`
