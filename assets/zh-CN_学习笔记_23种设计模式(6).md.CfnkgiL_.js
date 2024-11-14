import{_ as n,c as e,a3 as a,o as r}from"./chunks/framework.BaR4VHXY.js";const m=JSON.parse('{"title":"23种设计模式(6)","description":"","frontmatter":{"Created at":"2019-04-16T00:00:00.000Z","Last updated at":"2019-07-03T00:00:00.000Z","Source URL":"https://blog.csdn.net/typ1805/article/details/83658708","tags":["设计模式","高级查询","数据字典"]},"headers":[],"relativePath":"zh-CN/学习笔记/23种设计模式(6).md","filePath":"zh-CN/学习笔记/23种设计模式(6).md","lastUpdated":null}'),o={name:"zh-CN/学习笔记/23种设计模式(6).md"};function i(s,t,l,u,c,p){return r(),e("div",null,t[0]||(t[0]=[a(`<h1 id="_23种设计模式-6" tabindex="-1">23种设计模式(6) <a class="header-anchor" href="#_23种设计模式-6" aria-label="Permalink to &quot;23种设计模式(6)&quot;">​</a></h1><h4 id="_23种设计模式-6-1" tabindex="-1">23种设计模式(6) <a class="header-anchor" href="#_23种设计模式-6-1" aria-label="Permalink to &quot;23种设计模式(6)&quot;">​</a></h4><p>面向对象设计 ![[../_resources/unknown_filename-720618de.png]]</p><pre><code>public abstract class Operation {
	private double numA;
	private double numB;
	public double getNumA() {
		return numA;
	}
	public void setNumA(double numA) {
		this.numA = numA;
	}
	public double getNumB() {
		return numB;
	}
	public void setNumB(double numB) {
		this.numB = numB;
	}
	public abstract double getResult();
}
</code></pre><h5 id="简单工厂-1" tabindex="-1">简单工厂(1) <a class="header-anchor" href="#简单工厂-1" aria-label="Permalink to &quot;简单工厂(1)&quot;">​</a></h5><p>多态：基类的引用指向了派生类对象，调用的一定是重写过的方法 优点：面向对象设计，不需要创建抽象实例，通过继承和多态实现 缺点：增加功能需要修改代码</p><pre><code>public class DAOFactory {
	public static Operation createInstance(char oper) {
		Operation operation = null;
		switch (oper) {
		case &#39;+&#39;:
			operation = new AddOperation();
			break;
		case &#39;-&#39;:
			operation = new SubOperation();
			break;
		case &#39;*&#39;:
			operation = new MulOperation();
			break;
		case &#39;/&#39;:
			operation = new DivOperation();
			break;
		default:
			break;
		}
		return operation;
	}
}


private static void simpleFactory() {
		Operation operation = DAOFactory.createInstance(&#39;*&#39;);
		operation.setNumA(100);
		operation.setNumB(200);
		System.out.println(operation.getResult());
}
</code></pre><h5 id="工厂模型-2" tabindex="-1">工厂模型(2) <a class="header-anchor" href="#工厂模型-2" aria-label="Permalink to &quot;工厂模型(2)&quot;">​</a></h5><p>定义接口类为总工厂，添加功能实现类 优点:添加只需要扩充代码，并实现总工厂接口</p><pre><code>public interface IFactory {
	public abstract Operation createInstance();
}


public class AddOperation extends Operation {
	@Override
	public double getResult() {
		return super.getNumA() + super.getNumB();
	}
}


private static void fullFactory() {
    IFactory iFactory=new AddFactory();
    Operation operation = iFactory.createInstance();
    operation.setNumA(100);
    operation.setNumB(200);
    System.out.println(operation.getResult());
}
</code></pre><h5 id="单例模式-3" tabindex="-1">单例模式(3) <a class="header-anchor" href="#单例模式-3" aria-label="Permalink to &quot;单例模式(3)&quot;">​</a></h5><p>如何防止类创建对象，设置类构造方法为私有 如何实现单例模式，设置private static对象,即类对象</p><pre><code>public class Person {
	private static Person p1 = new Person();
	public static Person getP1() {
		return Person.p1;
	}
	private Person() {
	}
}


private static void singleTon() {
    //如何防止类创建对象，设置类构造方法为私有
    //如何实现单例模式，设置static对象
    Person person=Person.getP1();
    Person person2=Person.getP1();
    System.out.println(person);
    System.out.println(person2);

}
</code></pre><h5 id="模板设计-4" tabindex="-1">模板设计(4) <a class="header-anchor" href="#模板设计-4" aria-label="Permalink to &quot;模板设计(4)&quot;">​</a></h5><pre><code>public abstract class Human {
	private String name;
	private String age;
	public Human() {
		super();
	}
	public Human(String name, String age) {
		super();
		this.name = name;
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public abstract String getContext();
	public void say() {
		System.out.println(this.getContext());
	}
}


public class Student extends Human {
	private double score;	
	public Student(String name,String age,double score) {
		super(name,age);
		this.score = score;
	}
	public double getScore() {
		return score;
	}
	public void setScore(double score) {
		this.score = score;
	}
	@Override
	public String getContext() {
		return &quot;姓名:&quot;+super.getName()+&quot;,年龄:&quot;+super.getAge()+&quot;,成绩:&quot;+this.getScore();
	}
}


private static void modelDesign() {
    Student student=new Student(&quot;张三&quot;, &quot;20&quot;, 123);
    student.say();
}
</code></pre><h5 id="代理模式-5" tabindex="-1">代理模式(5) <a class="header-anchor" href="#代理模式-5" aria-label="Permalink to &quot;代理模式(5)&quot;">​</a></h5><p>优点：可以对方法进行增强处理</p><pre><code>public interface INetWork {
	public abstract void browse();
}


public class Real implements INetWork{
	@Override
	public void browse() {
		System.out.println(&quot;现在Real类可以上网了&quot;);
	}
}


public class Proxy implements INetWork{
	INetWork work;
	@Override
	public void browse() {
		System.out.println(&quot;现在Proxy可以代理了&quot;);
		this.work.browse();
	}
	public Proxy(INetWork work) {
		this.work=work;
	}
}


private static void proxyModel() {
    Proxy proxy = new Proxy(new Real());
    proxy.browse();
}
</code></pre><h5 id="适配器模式" tabindex="-1">适配器模式 <a class="header-anchor" href="#适配器模式" aria-label="Permalink to &quot;适配器模式&quot;">​</a></h5><p>优点：不必实现接口的所有方法，通过抽象类选择实现哪个方法</p><pre><code>public interface IA {
	void showA();
	void showB();
	void showC();
	void showD();
	void showE();
}


public abstract class TempAdapter implements IA{
	public void showA() {};
	public void showB() {};
	public void showC() {};
	public void showD() {};
	public void showE() {};
}


public class Animal extends TempAdapter {
	@Override
	public void showA() {
		System.out.println(&quot;Animal--&gt;showA()&quot;);
	}
	@Override
	public void showB() {
		System.out.println(&quot;Animal--&gt;showB()&quot;);
	}
}


private static void adapterModel() {
    Animal animal=new Animal();
    animal.showA();
    animal.showB();
}
</code></pre><h4 id="高级sql查询" tabindex="-1">高级SQL查询 <a class="header-anchor" href="#高级sql查询" aria-label="Permalink to &quot;高级SQL查询&quot;">​</a></h4><pre><code>drop TABLE stuinfo;
create table stuInfo
(
	sid INT auto_increment primary key,
	sname varchar(20),
	math decimal(10,2),
	english decimal(10,2),
	history decimal(10,2)
);
insert into stuInfo(sname,math,english,history) values(&#39;张三&#39;,90.1,100,90),(&#39;李四&#39;,100,34,54),(&#39;王五&#39;,10,100,100),(&#39;曹操&#39;,100,34,56),(&#39;刘备&#39;,94,13,4),(&#39;关羽&#39;,40,40,30),(&#39;诸葛亮&#39;,2,43,54);
select * from stuInfo;
/*数学成绩从大到小排名?*/
select * 
from(
select sid,sname,math,(select COUNT(*) from stuinfo as s where s.math&gt;stuinfo.math)+1 &#39;名次&#39; from stuinfo
) t where 名次&lt;4 ORDER BY 名次 asc;
select * 
from(
select sid,sname,math,(select COUNT(DISTINCT math) from stuinfo as s where s.math&gt;stuinfo.math)+1 &#39;名次&#39; from stuinfo
) t where 名次&lt;4 ORDER BY 名次 asc;
/*总分排名?*/
SELECT *,(SELECT count(*) from (SELECT sid,sname,(math+english+history) &#39;总分&#39; from stuinfo) s where s.总分&gt;t.总分)+1 &#39;名次&#39;
from (
SELECT sid,sname,(math+english+history) &#39;总分&#39; from stuinfo
) t ORDER BY 名次;

DROP TABLE student;
create table student
(
	sid int auto_increment primary key,
	sname varchar(20),
	gender bit,
	marry bit
);
insert into student(sname,gender,marry) values(&#39;jack&#39;,1,1),(&#39;rose&#39;,0,1),(&#39;tom&#39;,1,0),(&#39;black&#39;,0,1);
select * from student;
/*无表达式*/
select sid,sname,  case gender
when 1 then &#39;男&#39;
when 0 then &#39;女&#39; end as &#39;性别&#39;,case marry 
when 1 then &#39;已婚&#39;
when 0 then &#39;未婚&#39; end as &#39;婚姻状态&#39; from student;
/*有表达式*/
select sid,sname, CASE
when gender = 1 then &#39;男&#39;
when gender = 0 then &#39;女&#39; end  as &#39;性别&#39;,CASE
when marry = 1 then &#39;已婚&#39;
when marry = 0 then &#39;未婚&#39; end as &#39;婚姻状态&#39; from student;
</code></pre><h4 id="数据字典" tabindex="-1">数据字典 <a class="header-anchor" href="#数据字典" aria-label="Permalink to &quot;数据字典&quot;">​</a></h4><ol><li><a href="https://blog.csdn.net/typ1805/article/details/83658708" target="_blank" rel="noreferrer">MySQL-Front工具使用</a></li></ol><ul><li><p>只需更改最后一行即可，若是关联表需删除末行的AND</p><p>select distinct a.COLUMN_NAME as &#39;字段名称&#39;, a.COLUMN_COMMENT as &#39;字段含义&#39;, a.COLUMN_TYPE as &#39;类型长度&#39;, a.IS_NULLABLE as &#39;允许空值&#39;, case when b.CONSTRAINT_NAME=&#39;PRIMARY&#39; then &#39;主键&#39; else &#39;&#39; end as &#39;注&#39; from INFORMATION_SCHEMA.COLUMNS as a left join INFORMATION_SCHEMA .KEY_COLUMN_USAGE as b on a.COLUMN_NAME = b.COLUMN_NAME and a.table_name = b.table_name and b.CONSTRAINT_NAME=&#39;PRIMARY&#39; where a.table_name like &#39;user&#39; AND a.COLUMN_COMMENT != &#39;&#39;</p></li></ul>`,26)]))}const h=n(o,[["render",i]]);export{m as __pageData,h as default};
