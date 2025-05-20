---

Created at: 2019-03-25
Last updated at: 2019-05-20
tags: 
  - java反射
  - 埋点
  - 性能监控

---

# java高级特性


## java高级特性

#### 反射机制的作用？

* 在运行时可以获取任意类的构造方法，并且执行该构造方法，实例化一个对象。

* 在运行时可以获取任意类的属性，并且可以获取属性值，页能修改该值。
* 在运行时可以获取任意类的方法，并且可以执行该方法。
* 在运行时可以获取任意类的注解，可以获取注解的值。

#### 哪里用到反射？

jdbc连接数据库的时候，classForName。  所有的orm框架都使用到了反射。例如mybatis，hibernate，springjdbc。

#### 获取class类型的对象的三种方式：

第一种：class.forName("类的全限定名")
第二种：通过.class 的方式
第三种：通过对象.getClass();

#### 实现通用dao接口MyDaoImpl

    public class MyDaoImpl<T> implements MyDao<T> {
        //将对象obj保存到数据库中
        @Override
        public void save(T obj) throws Exception {
            //使用反射获取Class对象
            Class<? extends Object> clazz = obj.getClass();
            //获取AnnEntity注解信息，从注解中再次获取保存的表名
            AnnEntity annotation = clazz.getAnnotation(AnnEntity.class);
            String tableName = annotation.value();//获取表名
            //获取列名，属性注解的值
            Field[] fields = clazz.getDeclaredFields();
            //定义一个StringBuilder，来拼接所有的列名
            StringBuilder  fieldNames= new StringBuilder();
            //定义一个list<Object>集合来 封装所有的属性值
            List<Object> fieldvalues= new ArrayList<Object>();
            for (Field field : fields) {
                //获取当前方法名
                PropertyDescriptor pd = new PropertyDescriptor(field.getName(), clazz);
                System.out.println(field.getAnnotation(AnnCol.class));
                fieldNames.append(field.getAnnotation(AnnCol.class).value()).append(",");
                fieldvalues.add("'"+pd.getReadMethod().invoke(obj)+"'");
            }
            //开始操作数据库
            //拼接sql
            StringBuilder sql=new StringBuilder();
            fieldNames.deleteCharAt(fieldNames.length()-1);//删除最后一个逗号
            sql.append("insert into ").append(tableName).append(" ( ").append(fieldNames.toString()).append(" ) values ( ");
            sql.append(fieldvalues).append(")");
            Connection connection = BaseDao.getConnection();//获取数据库连接
            System.out.println(sql.toString().replace("[", "").replace("]", ""));
            PreparedStatement ps = connection.prepareStatement(sql.toString().replace("[", "").replace("]", ""));
            ps.execute();
        }




