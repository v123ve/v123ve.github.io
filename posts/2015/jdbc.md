---

Created at: 2019-03-30
Last updated at: 2019-03-30
tags: 
  - java

---

# jdbc


### jdbc

            // 1.加载驱动
            // ClassLoader.getClassLoader通过类装载器装载实现类
            // 实现了Java.sql.Driver接口的类就是驱动类，通过装载器加载驱动
            Class.forName("com.mysql.jdbc.Driver");
            // 2.创建连接
            Connection conn = DriverManager.getConnection("jdbc:mysql:///db93", "root", "");
            // 3.执行语句
            PreparedStatement preState = conn.prepareStatement("select * from student");
            // 4.返回结果
            ResultSet resultSet = preState.executeQuery();
            // 5.遍历数据
            while (resultSet.next()) {
                System.out.println("姓名:" + resultSet.getString(3) + ",电话:" + resultSet.getString(6) + "，地址:" + resultSet.getString(7));}
            // 6.关闭连接
            resultSet.close();
            preState.close();
            conn.close();


### rexdb.xml

    <?xml version="1.0" encoding="UTF-8"?> 
    <!DOCTYPE configuration PUBLIC 
    "-//rex-soft.org//REXDB DTD 1.0//EN" 
    "http://www.rex-soft.org/dtd/rexdb-1-config.dtd">
    <configuration>
        <properties path="jdbc.properties"></properties>
        <dataSource>
            <property name="driverClassName" value="${jdbc.driver}" />
           <property name="url" value="${jdbc.url}" />
            <property name="username" value="${jdbc.username}" />
            <property name="password" value="${jdbc.password}" />
        </dataSource>
    </configuration>


### dao

    public class GradeDao {
        public int insert(Grade grade) throws DBException {
            String string = "insert into grade values(?,?)";
            return DB.update(string, new Object[] { grade.getGradeid(), grade.getGradename() });
        }
        public int insertObject(Grade grade) throws DBException {
            String string = "insert into grade values(#{gradeid},#{gradename})";
            return DB.update(string, grade);
        }
        public List<RMap> findAll() throws DBException {
            String string = "select * from grade";
            return DB.getMapList(string);
        }
        public List<Grade> findAllObject() throws DBException {
            String string = "select * from grade";
            return DB.getList(string, Grade.class);
        }
    }


### test

    public class RexTest {
        @Test
        public void text1() throws DBException {
            GradeDao gradeDao = new GradeDao();
            Grade grade = new Grade();
            grade.setGradeid(6);
            grade.setGradename("神殿");
            gradeDao.insert(grade);
        }
        @Test
        public void text2() throws DBException {
            GradeDao gradeDao = new GradeDao();
            Grade grade = new Grade();
            grade.setGradeid(6);
            grade.setGradename("神殿");
            gradeDao.insertObject(grade);
        }
        @Test
        public void text3() throws DBException {
            GradeDao gradeDao = new GradeDao();
            List<RMap> findAll = gradeDao.findAll();
            for (RMap rMap : findAll) {
                System.out.println(rMap.getString("gradename"));
            }
        }
        @Test
        public void text4() throws DBException {
            GradeDao gradeDao = new GradeDao();
            List<Grade> findAllObject = gradeDao.findAllObject();
            System.out.println(findAllObject);
        }
    }




