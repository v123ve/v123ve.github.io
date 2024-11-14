import{_ as e,c as a,a3 as n,o}from"./chunks/framework.BaR4VHXY.js";const c=JSON.parse('{"title":"mybatis","description":"","frontmatter":{"Created at":"2019-04-03T00:00:00.000Z","Last updated at":"2019-04-04T00:00:00.000Z","tags":["ssm整合","返回主键","mybatis","xml","关联关系","存储过程","批量操作","分页排序"]},"headers":[],"relativePath":"zh-CN/学习笔记/mybatis.md","filePath":"zh-CN/学习笔记/mybatis.md","lastUpdated":null}'),r={name:"zh-CN/学习笔记/mybatis.md"};function p(s,t,l,i,d,u){return o(),a("div",null,t[0]||(t[0]=[n(`<h1 id="mybatis" tabindex="-1">mybatis <a class="header-anchor" href="#mybatis" aria-label="Permalink to &quot;mybatis&quot;">​</a></h1><h3 id="mybatis-1" tabindex="-1">mybatis <a class="header-anchor" href="#mybatis-1" aria-label="Permalink to &quot;mybatis&quot;">​</a></h3><p>MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。MyBatis 可以使用简单的 XML 或注解来配置和映射原生类型、接口和 Java 的 POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。</p><h3 id="resulttype和resultmap、parametertype和parametermap" tabindex="-1">resultType和resultMap、parameterType和parameterMap <a class="header-anchor" href="#resulttype和resultmap、parametertype和parametermap" aria-label="Permalink to &quot;resultType和resultMap、parameterType和parameterMap&quot;">​</a></h3><h3 id="调用存储过程" tabindex="-1">调用存储过程 <a class="header-anchor" href="#调用存储过程" aria-label="Permalink to &quot;调用存储过程&quot;">​</a></h3><pre><code>    create or replace procedure proc_mybatis_emp(v_empno in number,v_sal out number) is
    begin
        select sal into v_sal from emp where empno=v_empno;
    end;
  
    &lt;!-- 创建一个存储过程，传入员工编号，返回工资，使用mybatis调用 --&gt;
    &lt;select parameterType=&quot;map&quot; statementType=&quot;CALLABLE&quot;&gt;
        call proc_mybatis_emp(#{myempno,mode=IN,jdbcType=INTEGER},#{mysal,mode=OUT,jdbcType=INTEGER})
    &lt;/select&gt;
    
    // 测试调用存储过程
    @Test
    public  void testExecProc() {
        Map&lt;String,Object&gt; map = new HashMap&lt;String,Object&gt; ();
        map.put(&quot;myempno&quot;, 7788);
        empMapper.execProc(map);
        System.out.println(&quot;工资：&quot;+map.get(&quot;mysal&quot;));
    }
</code></pre><h3 id="批量删除和插入" tabindex="-1">批量删除和插入 <a class="header-anchor" href="#批量删除和插入" aria-label="Permalink to &quot;批量删除和插入&quot;">​</a></h3><pre><code>    &lt;!-- 批量删除，使用foreach --&gt;
    &lt;delete parameterType=&quot;java.util.List&quot;&gt;
        delete from dept where deptno in 
        &lt;foreach collection=&quot;list&quot; item=&quot;xxx&quot; open=&quot;(&quot; close=&quot;)&quot; separator=&quot;,&quot;&gt;
            #{xxx}
        &lt;/foreach&gt;
    &lt;/delete&gt;
    
    @Test
    public  void testdeleteDeptbatch() {
        List&lt;Integer&gt; deptnos= new ArrayList&lt;Integer&gt;();
        deptnos.add(50);
        deptnos.add(53);
        deptnos.add(56);
        empMapper.deleteDeptbatch(deptnos);
        session.commit();
        session.close();		
    }


        &lt;!-- mysql版批量插入 --&gt;
        &lt;!-- &lt;insert parameterType=&quot;java.util.List&quot;&gt;
                insert into dept values 
                &lt;foreach collection=&quot;list&quot; item=&quot;dept&quot;  separator=&quot;,&quot;&gt;
                    (#{dept.deptno},#{dept.dname},#{dept.loc})
                &lt;/foreach&gt;
        &lt;/insert&gt; --&gt;
        &lt;!-- oracle版批量插入 --&gt;
        &lt;insert parameterType=&quot;java.util.List&quot;&gt;
             insert into dept (deptno, dname, loc) select t.*
            from (
               &lt;foreach collection=&quot;list&quot; item=&quot;dept&quot; separator=&quot;union all&quot;&gt;
                     (select #{dept.deptno}, #{dept.dname}, #{dept.loc} from dual)
                &lt;/foreach&gt;    
            ) t
        &lt;/insert&gt;
        
        @Test
        public  void testinsertDeptbatch() {
            List&lt;Dept&gt; depts= new ArrayList&lt;Dept&gt;();
            Dept dept1 = new Dept(50,&quot;afa&quot;,&quot;fdsaf&quot;);
            Dept dept2 = new Dept(53,&quot;afa&quot;,&quot;fdsaf&quot;);
            Dept dept3 = new Dept(56,&quot;afa&quot;,&quot;fdsaf&quot;);
            depts.add(dept1);
            depts.add(dept2);
            depts.add(dept3);
            empMapper.insertDeptBatch(depts);
            session.commit();
            session.close();
        }
</code></pre><h3 id="分页-排序-模糊查询" tabindex="-1">分页，排序，模糊查询 <a class="header-anchor" href="#分页-排序-模糊查询" aria-label="Permalink to &quot;分页，排序，模糊查询&quot;">​</a></h3><pre><code>    &lt;!-- 先分页，后排序 ,模糊查询，开始行叫begin，结束行叫end，排序列叫sort，正序倒序order --&gt;
    &lt;select parameterType=&quot;map&quot; resultType=&quot;com.aaa.entity.Emp&quot;&gt;
        select * from (
            select rownum r, emp.* from emp where ename like &#39;%&#39;||#{ename}||&#39;%&#39; order by \${sort} \${order}
        ) aaa
        where aaa.r &gt; #{begin} and aaa.r &lt; #{end}
    &lt;/select&gt;
    &lt;!-- 先排序,后分页， ,模糊查询，开始行叫begin，结束行叫end，排序列叫sort，正序倒序order --&gt;
    &lt;!-- &lt;select parameterType=&quot;map&quot; resultType=&quot;com.aaa.entity.Emp&quot;&gt;
        select * from (
            select rownum rr, aaa.* from (
                select rownum r, emp.* from emp where ename like &#39;%&#39;||#{ename}||&#39;%&#39;  order by sal desc
                ) aaa
        ) bbb
        where bbb.rr &gt; #{begin} and bbb.rr &lt; #{end}
    &lt;/select&gt; --&gt;
    
    @Test
    public  void testfindEmpCondition() {
        Map condition = new HashMap();
        condition.put(&quot;begin&quot;, 0);
        condition.put(&quot;end&quot;, 6);
        condition.put(&quot;sort&quot;,&quot;sal&quot;);
        condition.put(&quot;order&quot;, &quot;desc&quot;);
        condition.put(&quot;ename&quot;, &quot;A&quot;);
        List&lt;Emp&gt; emps = empMapper.findEmpCondition(condition);
        for (Emp emp : emps) {
            System.out.println(emp.toString());
        }
    }
</code></pre>`,10)]))}const q=e(r,[["render",p]]);export{c as __pageData,q as default};
