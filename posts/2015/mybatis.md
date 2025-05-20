---

Created at: 2019-04-03
Last updated at: 2019-04-04
tags: 
  - ssm整合
  - 返回主键
  - mybatis
  - xml
  - 关联关系
  - 存储过程
  - 批量操作
  - 分页排序

---

# mybatis


### mybatis

MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。MyBatis 可以使用简单的 XML 或注解来配置和映射原生类型、接口和 Java 的 POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。

### resultType和resultMap、parameterType和parameterMap

### 调用存储过程

        create or replace procedure proc_mybatis_emp(v_empno in number,v_sal out number) is
        begin
            select sal into v_sal from emp where empno=v_empno;
        end;
      
        <!-- 创建一个存储过程，传入员工编号，返回工资，使用mybatis调用 -->
        <select parameterType="map" statementType="CALLABLE">
            call proc_mybatis_emp(#{myempno,mode=IN,jdbcType=INTEGER},#{mysal,mode=OUT,jdbcType=INTEGER})
        </select>
        
        // 测试调用存储过程
        @Test
        public  void testExecProc() {
            Map<String,Object> map = new HashMap<String,Object> ();
            map.put("myempno", 7788);
            empMapper.execProc(map);
            System.out.println("工资："+map.get("mysal"));
        }


### 批量删除和插入

        <!-- 批量删除，使用foreach -->
        <delete parameterType="java.util.List">
            delete from dept where deptno in 
            <foreach collection="list" item="xxx" open="(" close=")" separator=",">
                #{xxx}
            </foreach>
        </delete>
        
        @Test
        public  void testdeleteDeptbatch() {
            List<Integer> deptnos= new ArrayList<Integer>();
            deptnos.add(50);
            deptnos.add(53);
            deptnos.add(56);
            empMapper.deleteDeptbatch(deptnos);
            session.commit();
            session.close();		
        }


            <!-- mysql版批量插入 -->
            <!-- <insert parameterType="java.util.List">
                    insert into dept values 
                    <foreach collection="list" item="dept"  separator=",">
                        (#{dept.deptno},#{dept.dname},#{dept.loc})
                    </foreach>
            </insert> -->
            <!-- oracle版批量插入 -->
            <insert parameterType="java.util.List">
                 insert into dept (deptno, dname, loc) select t.*
                from (
                   <foreach collection="list" item="dept" separator="union all">
                         (select #{dept.deptno}, #{dept.dname}, #{dept.loc} from dual)
                    </foreach>    
                ) t
            </insert>
            
            @Test
            public  void testinsertDeptbatch() {
                List<Dept> depts= new ArrayList<Dept>();
                Dept dept1 = new Dept(50,"afa","fdsaf");
                Dept dept2 = new Dept(53,"afa","fdsaf");
                Dept dept3 = new Dept(56,"afa","fdsaf");
                depts.add(dept1);
                depts.add(dept2);
                depts.add(dept3);
                empMapper.insertDeptBatch(depts);
                session.commit();
                session.close();
            }


### 分页，排序，模糊查询

        <!-- 先分页，后排序 ,模糊查询，开始行叫begin，结束行叫end，排序列叫sort，正序倒序order -->
        <select parameterType="map" resultType="com.aaa.entity.Emp">
            select * from (
                select rownum r, emp.* from emp where ename like '%'||#{ename}||'%' order by ${sort} ${order}
            ) aaa
            where aaa.r > #{begin} and aaa.r < #{end}
        </select>
        <!-- 先排序,后分页， ,模糊查询，开始行叫begin，结束行叫end，排序列叫sort，正序倒序order -->
        <!-- <select parameterType="map" resultType="com.aaa.entity.Emp">
            select * from (
                select rownum rr, aaa.* from (
                    select rownum r, emp.* from emp where ename like '%'||#{ename}||'%'  order by sal desc
                    ) aaa
            ) bbb
            where bbb.rr > #{begin} and bbb.rr < #{end}
        </select> -->
        
        @Test
        public  void testfindEmpCondition() {
            Map condition = new HashMap();
            condition.put("begin", 0);
            condition.put("end", 6);
            condition.put("sort","sal");
            condition.put("order", "desc");
            condition.put("ename", "A");
            List<Emp> emps = empMapper.findEmpCondition(condition);
            for (Emp emp : emps) {
                System.out.println(emp.toString());
            }
        }

