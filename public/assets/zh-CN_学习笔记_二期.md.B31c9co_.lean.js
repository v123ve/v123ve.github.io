import{_ as e,c as n,a3 as a,o as s}from"./chunks/framework.BaR4VHXY.js";const m=JSON.parse('{"title":"二期","description":"","frontmatter":{"Created at":"2019-04-12T00:00:00.000Z","Last updated at":"2019-05-07T00:00:00.000Z","tags":["加油站安全监管系统","ruoyi"]},"headers":[],"relativePath":"zh-CN/学习笔记/二期.md","filePath":"zh-CN/学习笔记/二期.md","lastUpdated":null}'),i={name:"zh-CN/学习笔记/二期.md"};function o(l,t,r,u,d,p){return s(),n("div",null,t[0]||(t[0]=[a(`<h1 id="二期" tabindex="-1">二期 <a class="header-anchor" href="#二期" aria-label="Permalink to &quot;二期&quot;">​</a></h1><h2 id="二期-1" tabindex="-1">二期 <a class="header-anchor" href="#二期-1" aria-label="Permalink to &quot;二期&quot;">​</a></h2><h4 id="功能需求" tabindex="-1">功能需求 <a class="header-anchor" href="#功能需求" aria-label="Permalink to &quot;功能需求&quot;">​</a></h4><p>一：加油站主动上报（至下而上） 1：重点监控，这些人如果要去加油站买汽油，并且是散装的，要求实名登记。 2：每个加油站的员工，要进行实名认证，如果加油站员工是<strong>坏分子</strong>，要重点排查。 3 : 要统计每个加油站每月上报的加油量，特别是汽油。公安局根据加油站的规模 设置警戒线，每个油站一个月卖出的散装汽油不能超过一定的量。 二：公安主动排查（至上而下） 1: 公安部门的人员要定期对辖区内的加油站进行安全排查。 2: 检查项目和检查频率由上级领导指定。 3: 通过手机软件进行实地巡检。 4: 如果不合格，拍照上传图片。 5: 最后系统会根据检查结果出一个是否合格的报告，如果不合格下发<strong>整改通知书</strong>并进行处罚。</p><hr><h4 id="加油站服务端" tabindex="-1">加油站服务端 <a class="header-anchor" href="#加油站服务端" aria-label="Permalink to &quot;加油站服务端&quot;">​</a></h4><h5 id="登录-2" tabindex="-1">登录--2 <a class="header-anchor" href="#登录-2" aria-label="Permalink to &quot;登录--2&quot;">​</a></h5><ul><li><p>a注册加油站、b注册法人</p></li><li><p>审批ab详细信息进行拍照核实，后台审批通过注册</p></li></ul><hr><h5 id="加油站管理-2" tabindex="-1">加油站管理--2 <a class="header-anchor" href="#加油站管理-2" aria-label="Permalink to &quot;加油站管理--2&quot;">​</a></h5><ul><li>散装油品销售登记</li><li>散装油品销售管理</li><li>从业人员管理</li></ul><h4 id="公安局服务端-2" tabindex="-1">公安局服务端--2 <a class="header-anchor" href="#公安局服务端-2" aria-label="Permalink to &quot;公安局服务端--2&quot;">​</a></h4><ul><li>x管理员、y手机端</li><li>y对注册加油站进行实地拍照，根据系统检查报告x进行审批</li><li>x能够查看辖区内所有的加油站信息</li><li>x设置油量警戒线</li><li>x对加油站从业人员进行监管--社会失信人员或有前科人员：坏分子状态</li><li>x添加巡检项目，并且指定y巡检周期，根据系统检查报告x进行审批</li><li>巡检不合格发送系统通告：整改通知(包含处罚规定)</li><li>处罚规定</li></ul><h4 id="微信端-4" tabindex="-1">微信端--4 <a class="header-anchor" href="#微信端-4" aria-label="Permalink to &quot;微信端--4&quot;">​</a></h4><ul><li>x服务端、y操作员</li><li>x发布的巡检任务--一月四次，每两次上传间隔大于4天</li><li>点击巡检按钮 显示加油站列表</li><li>点击审阅 (时间到了可以点)判断位置是否在范围内 在进入下一步</li><li>检查项目列表 (逐一点击)点击详细信息 选择是否存在隐患 (有隐患上传图片） 提交 详情为已完成</li><li>隐患管理<strong>以后在说</strong></li></ul><h3 id="rouyi" tabindex="-1">rouyi <a class="header-anchor" href="#rouyi" aria-label="Permalink to &quot;rouyi&quot;">​</a></h3><p>首先在IDEA中OPEN项目</p><h4 id="修改application-druid-yml" tabindex="-1">修改application-druid.yml <a class="header-anchor" href="#修改application-druid-yml" aria-label="Permalink to &quot;修改application-druid.yml&quot;">​</a></h4><pre><code># 数据源配置
spring:
    datasource:
        type: com.alibaba.druid.pool.DruidDataSource
        driverClassName: com.mysql.cj.jdbc.Driver
        druid:
            # 主库数据源
            master:
                url: jdbc:mysql://localhost:3306/qy93?useUnicode=true&amp;characterEncoding=utf8&amp;zeroDateTimeBehavior=convertToNull&amp;useSSL=true&amp;serverTimezone=GMT%2B8
                username: root
                password:
            # 从库数据源
            slave:
                # 从数据源开关/默认关闭
                enabled: false
                url: 
                username: 
                password: 
            # 初始连接数
            initial-size: 10
            # 最大连接池数量
            max-active: 100
            # 最小连接池数量
            min-idle: 10
            # 配置获取连接等待超时的时间
            max-wait: 60000
            # 打开PSCache，并且指定每个连接上PSCache的大小
            pool-prepared-statements: true
            max-pool-prepared-statement-per-connection-size: 20
            # 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒
            timeBetweenEvictionRunsMillis: 60000
            # 配置一个连接在池中最小生存的时间，单位是毫秒
            min-evictable-idle-time-millis: 300000
            validation-query: SELECT 1 FROM DUAL
            test-while-idle: true
            test-on-borrow: false
            test-on-return: false
            stat-view-servlet:
                enabled: true
                url-pattern: /monitor/druid/*
            filter:
                stat:
                    log-slow-sql: true
                    slow-sql-millis: 1000
                    merge-sql: false
                wall:
                    config:
                        multi-statement-allow: true
</code></pre><h4 id="修改application-yml" tabindex="-1">修改application.yml <a class="header-anchor" href="#修改application-yml" aria-label="Permalink to &quot;修改application.yml&quot;">​</a></h4><pre><code># 项目相关配置
aaa:
  # 名称
  name: DouDou
  # 版本
  version: 3.1.0
  # 版权年份
  copyrightYear: 2018
  # 文件上传路径
  profile: E:/text
  # 获取ip地址开关
  addressEnabled: true

# 开发环境配置
server:
  # 服务端口
  port: 80
  servlet:
    # 项目contextPath
    context-path: /
  tomcat:
    # tomcat的URI编码
    uri-encoding: UTF-8
    # tomcat最大线程数，默认为200
    max-threads: 800
    # Tomcat启动初始化的线程数，默认值25
    min-spare-threads: 30
 
# 日志配置
logging:
  level:
    com.aaa: debug
    org.springframework: WARN
    org.spring.springboot.dao: debug

# 用户配置
user:
  password:
    # 密码错误{maxRetryCount}次锁定10分钟
    maxRetryCount: 5

# Spring配置
spring:
  # 模板引擎
  thymeleaf:
    mode: HTML
    encoding: utf-8
    # 禁用缓存
    cache: false
  # 资源信息
  messages:
    # 国际化资源文件路径
    basename: i18n/messages
  jackson:
    time-zone: GMT+8
    date-format: yyyy-MM-dd HH:mm:ss
  profiles: 
    active: druid
  # 文件上传
  servlet:
     multipart:
       max-file-size:  30MB
       max-request-size:  30MB
  # 服务模块
  devtools:
    restart:
      # 热部署开关
      enabled: true

# MyBatis
mybatis:
    # 搜索指定包别名
    typeAliasesPackage: com.aaa.project
    # 配置mapper的扫描，找到所有的mapper.xml映射文件
    mapperLocations: classpath:mybatis/**/*Mapper.xml
    # 加载全局的配置文件
    configLocation: classpath:mybatis/mybatis-config.xml

# PageHelper分页插件
pagehelper: 
  helperDialect: mysql
  reasonable: true
  supportMethodsArguments: true
  params: count=countSql 

# Shiro
shiro:
  user:
    # 登录地址
    loginUrl: /login
    # 权限认证失败地址
    unauthorizedUrl: /unauth
    # 首页地址
    indexUrl: /index
    # 验证码开关
    captchaEnabled: true
    # 验证码类型 math 数组计算 char 字符
    captchaType: math
  cookie:
    # 设置Cookie的域名 默认空，即当前访问的域名
    domain: 
    # 设置cookie的有效访问路径
    path: /
    # 设置HttpOnly属性
    httpOnly: true
    # 设置Cookie的过期时间，天为单位
    maxAge: 30
  session:
    # Session超时时间（默认30分钟）
    expireTime: 30
    # 同步session到数据库的周期（默认1分钟）
    dbSyncPeriod: 1
    # 相隔多久检查一次session的有效性，默认就是10分钟
    validationInterval: 10

# 防止XSS攻击
xss: 
  # 过滤开关
  enabled: true
  # 排除链接（多个用逗号分隔）
  excludes: /system/notice/*
  # 匹配链接
  urlPatterns: /system/*,/monitor/*,/tool/*

# 代码生成
gen: 
  # 作者
  author: aaa
  # 默认生成包路径 system 需改成自己的模块名称 如 system monitor tool
  packageName: com.aaa.project.system
  # 自动去除表前缀，默认是true
  autoRemovePre: true
  # 表前缀(类名不会包含表前缀)
  tablePrefix: sys_
</code></pre><h4 id="运行sql" tabindex="-1">运行sql <a class="header-anchor" href="#运行sql" aria-label="Permalink to &quot;运行sql&quot;">​</a></h4><p>运行sql文件夹下的.sql文件</p><h4 id="日期格式化" tabindex="-1">日期格式化 <a class="header-anchor" href="#日期格式化" aria-label="Permalink to &quot;日期格式化&quot;">​</a></h4><p><a href="https://blog.csdn.net/yucaifu1989/article/details/77248791" target="_blank" rel="noreferrer">datetimepicker用法总结</a> 实体类</p><pre><code>/** 购买日期 */
@DateTimeFormat(pattern = &quot;yyyy-MM-dd HH:mm&quot;)
@JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm&quot;, timezone = &quot;GMT+8&quot;)
private Date date;
</code></pre><p>html文件</p><pre><code>&lt;div &gt;
    &lt;span &gt;&lt;i &gt;&lt;/i&gt;&lt;/span&gt;
    &lt;input name=&quot;date&quot; th:value=&quot;\${#dates.format(buyoilform.date,&#39;yyyy-MM-dd HH:mm&#39;)}&quot; type=&quot;text&quot;&gt;
&lt;/div&gt;
</code></pre><p>导入js</p><pre><code>&lt;link th:  rel=&quot;stylesheet&quot;/&gt;
&lt;script th:src=&quot;@{/ajax/libs//datapicker/bootstrap-datepicker.js}&quot;&gt;&lt;/script&gt;
&lt;script th:src=&quot;@{/ajax/libs//datapicker/bootstrap-datetimepicker.min.js}&quot;&gt;&lt;/script&gt;
&lt;script th:src=&quot;@{/ajax/libs//datapicker/bootstrap-datetimepicker.zh-CN.js}&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;   
    var date = new Date();
    $(&quot;.input-group.date&quot;).datepicker({
        todayBtn: &quot;linked&quot;,
        keyboardNavigation: !1,
        endDate: date,
        forceParse: !1,
        calendarWeeks: !0,
        autoclose: !0
    });
    var date = new Date();
    $(&quot;.input-group.date&quot;).datetimepicker({
        format: &#39;yyyy-mm-dd hh:ii&#39;,//限制时间格式
        weekStart: 1,//时间从周1开始
        endDate: date,//时间不能超过今天
        todayBtn: true,//在下方显示当天按钮
        language:&#39;zh-CN&#39;,
        autoclose: true,//选择完后关闭
        todayHighlight: true,//当天日期高亮
        startView: 3,//打开的视图为年视图,选月
    }); 
&lt;/script&gt;
</code></pre><h4 id="表单同时修改" tabindex="-1">表单同时修改 <a class="header-anchor" href="#表单同时修改" aria-label="Permalink to &quot;表单同时修改&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;select name=&quot;serviceName&quot; &gt;</span></span>
<span class="line"><span>    &lt;option th:each=&quot;service:\${serviceList}&quot; th:value=&quot;\${service.id}&quot; th:text=&quot;\${service.serviceName}&quot;&gt;&lt;/option&gt;</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function changeDescription() {</span></span>
<span class="line"><span>        var serviceId = $(&quot;#serviceName&quot;).val();</span></span>
<span class="line"><span>        var services = [[\${serviceList}]];</span></span>
<span class="line"><span>        for (var i = 0;i &lt; services.length;i++){</span></span>
<span class="line"><span>            var service = services[i];</span></span>
<span class="line"><span>            if (serviceId == service.id){</span></span>
<span class="line"><span>                $(&quot;#description&quot;).val(service.description);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h4 id="性别处理" tabindex="-1">性别处理 <a class="header-anchor" href="#性别处理" aria-label="Permalink to &quot;性别处理&quot;">​</a></h4><p>在实体类添加一String列，关联性别属性</p><h4 id="页面跳转" tabindex="-1">页面跳转 <a class="header-anchor" href="#页面跳转" aria-label="Permalink to &quot;页面跳转&quot;">​</a></h4><p>xxxController</p><pre><code>/**
 * 详情管理
 */
@RequiresPermissions(&quot;system:fmission:detail&quot;)
@GetMapping(&quot;/detail&quot;)
public String oil(@RequestParam(&quot;fmissionId&quot;) Integer fmissionId,ModelMap mmap) {
    mmap.put(&quot;fmissionId&quot;, fmissionId);
    return prefix + &quot;/todetail&quot;;
}
/**
 * 详情填充
 */
@PostMapping(&quot;/detail/list/{fmissionId}&quot;)
@ResponseBody
public TableDataInfo oillist(@PathVariable(name = &quot;fmissionId&quot;) Integer fmissionId, Fmissionproject fmissionproject) {
    fmissionproject.setFmissionId(fmissionId);
    startPage();
    List&lt;Fmissionproject&gt; list = fmissionprojectService.selectFmissionprojectList(fmissionproject);
    return getDataTable(list);
}
</code></pre><p>parent.html</p><pre><code>var detailFlag = [[\${@permission.hasPermi(&#39;system:fmission:detail&#39;)}]];
detailUrl: prefix + &quot;/detail&quot;
actions.push(&#39;&lt;a   &gt;&lt;i &gt;&lt;/i&gt;查看详情&lt;/a&gt;&#39;);
</code></pre><p>$.operate.xxx</p><pre><code>// 任务详情管理
fmissiondetail: function(id) {
    var url = $.table._option.detailUrl;
    var data = { &quot;fmissionId&quot;: id };
    location.href=url+&#39;?fmissionId=&#39;+id;
},
</code></pre><p>children.html</p><pre><code>&lt;input th:value=&quot;\${fmissionId}&quot; style=&quot;display: none&quot; &gt;
url: ctx + &quot;system/fmission/detail/list/&quot;+$(&quot;#thisfmissionId&quot;).val()
</code></pre><h4 id="js判断" tabindex="-1">js判断 <a class="header-anchor" href="#js判断" aria-label="Permalink to &quot;js判断&quot;">​</a></h4><pre><code>if (row.fmissionState == 1) 
actions.push(&#39;&lt;a   &gt;&lt;i &gt;&lt;/i&gt;确认审核&lt;/a&gt;&#39;);
if (row.point &lt; 60 &amp;&amp; row.fmissionState == 1)
actions.push(&#39;&lt;a   &gt;&lt;i &gt;&lt;/i&gt;发送整改&lt;/a&gt;&#39;);
</code></pre><h4 id="登录验证" tabindex="-1">登录验证 <a class="header-anchor" href="#登录验证" aria-label="Permalink to &quot;登录验证&quot;">​</a></h4><pre><code>User user=new User();
user.setLoginName(username);
user.setPassword(password);
List&lt;User&gt; users = userserviceimpl.selectUserList(user);
HttpSession session=request.getSession();
session.setAttribute(&quot;policemanid&quot;,users.get(0).getPolicemanId());
session.setAttribute(&quot;gasid&quot;,users.get(0).getGasId());


gas.setLpoliceId(policemanService.selectPolicemanById((Integer) session.getAttribute(&quot;policemanid&quot;)).getLpoliceId());


policemanService.insertPoliceman(policeman);
User user=new User();
//警察局
user.setDeptId(111L);
user.setParentId(100L);
user.setLoginName(policeman.getPolicemanPhone());
user.setUserName(policeman.getPolicemanName());
user.setEmail(&quot;957945717@qq.com&quot;);
user.setPhonenumber(policeman.getPolicemanPhone());
user.setSex(&quot;0&quot;);
user.setPassword(policeman.getPolicemanPassword());
user.setStatus(&quot;0&quot;);
user.setPostIds(new Long[]{4L});
user.setRoleIds(new Long[]{3L});
user.setPolicemanId(policeman.getPolicemanId());
int user1 = userService.insertUser(user);
</code></pre><h4 id="子母表查询" tabindex="-1">子母表查询 <a class="header-anchor" href="#子母表查询" aria-label="Permalink to &quot;子母表查询&quot;">​</a></h4><p>xxxController.java</p><pre><code>/**
 * 查询巡查总任务分排列表
 */
@RequiresPermissions(&quot;system:zmission:list&quot;)
@PostMapping(&quot;/list&quot;)
@ResponseBody
public TableDataInfo list(Zmission zmission, HttpSession session)
{
    Policeman policeman = policemanService.selectPolicemanById((Integer) session.getAttribute(&quot;policemanid&quot;));
    Gas gas=new Gas();
    gas.setLpoliceId(policeman.getLpoliceId());
    List&lt;Gas&gt; gases = gasService.selectGasList(gas);
    List&lt;Integer&gt; gasidlist=new ArrayList&lt;&gt;();
    for (Gas g:gases) {
        gasidlist.add(g.getGasId());
    }
    zmission.setGasidlist(gasidlist);
    startPage();
    List&lt;Zmission&gt; list = zmissionService.selectZmissionByLpolice(zmission);
    return getDataTable(list);
}
</code></pre><p>xxx.java</p><pre><code>/** 地区内所有加油站 */
private List&lt;Integer&gt; gasidlist;
</code></pre><p>xxxMapper.xml</p><pre><code>    &lt;select parameterType=&quot;Zmission&quot; resultMap=&quot;ZmissionResult&quot;&gt;
        &lt;include ref/&gt;
        &lt;where&gt;
            &lt;if test=&quot;missionId != null &quot;&gt; and mission_id = #{missionId}&lt;/if&gt;
            &lt;if test=&quot;gasidlist != null &quot;&gt; and gas_id in
                &lt;foreach collection=&quot;gasidlist&quot; index=&quot;index&quot; item=&quot;item&quot; open=&quot;(&quot; separator=&quot;,&quot; close=&quot;)&quot;&gt;#{item}&lt;/foreach&gt;
            &lt;/if&gt;
            &lt;if test=&quot;policeManid != null &quot;&gt; and police_manid = #{policeManid}&lt;/if&gt;
            &lt;if test=&quot;missionBegin != null &quot;&gt; and mission_begin = #{missionBegin}&lt;/if&gt;
            &lt;if test=&quot;missionEnd != null &quot;&gt; and mission_end = #{missionEnd}&lt;/if&gt;
            &lt;if test=&quot;missionLastcommit != null &quot;&gt; and mission_lastcommit = #{missionLastcommit}&lt;/if&gt;
            &lt;if test=&quot;missionTimes != null &quot;&gt; and mission_times = #{missionTimes}&lt;/if&gt;
            &lt;if test=&quot;missionLeft != null &quot;&gt; and mission_left = #{missionLeft}&lt;/if&gt;
        &lt;/where&gt;
    &lt;/select&gt;
</code></pre><h4 id="报表" tabindex="-1">报表 <a class="header-anchor" href="#报表" aria-label="Permalink to &quot;报表&quot;">​</a></h4><p>xxxController.java</p><pre><code>	/**
	 * 主页报表统计加油站
	 */
	@GetMapping( &quot;/showGas&quot;)
	@ResponseBody
	public List&lt;Integer&gt; showGas(HttpSession session) {
		List&lt;Integer&gt; gasidList=new ArrayList&lt;&gt;();
		if (session.getAttribute(ServerConst.POLICEMAN_ID) != null) {
			Gas gas = new Gas();
			gas.setLpoliceId(policemanService.selectPolicemanById((Integer) session.getAttribute(ServerConst.POLICEMAN_ID)).getLpoliceId());
			List&lt;Gas&gt; gasList = gasService.selectGasList(gas);
			for (Gas gasitem: gasList){
				gasidList.add(gasitem.getGasId());
			}
		}else if (session.getAttribute(ServerConst.GAS_ID) != null){
			gasidList.add((Integer) session.getAttribute(ServerConst.GAS_ID));
		}
		return gasidList;
	}

	/**
	 * 主页报表统计散装油
	 */
	@GetMapping( &quot;/showIndex/{gasId}&quot;)
	@ResponseBody
	public List&lt;Buyoilform&gt; showIndex(@PathVariable(&quot;gasId&quot;)Integer gasId) {
		Buyoilform buyoilform = new Buyoilform();
		buyoilform.setGasId(gasId);
		List&lt;Buyoilform&gt; buyoilformList = buyoilformService.selectBuyoilformOil(buyoilform);
		return buyoilformList;
	}
</code></pre><p>xxx.java</p><pre><code>    /**
     * 总油量
     */
    private Integer sumNum;
    public Integer getSumNum() {
        return sumNum;
    }
    public void setSumNum(Integer sumNum) {
        this.sumNum = sumNum;
    }
</code></pre><p>xxxMapper.xml</p><pre><code>    &lt;select parameterType=&quot;Buyoilform&quot; resultMap=&quot;BuyoilformResult&quot;&gt;
        select id, name, sex, idcard, nation, date, num, oilkind_id, oiltype_id, gas_id, adress, usefor,sum(num) as sumNum from jyz_buyoilform
        &lt;where&gt;
            &lt;if test=&quot;id != null &quot;&gt; and id = #{id}&lt;/if&gt;
            &lt;if test=&quot;name != null  and name != &#39;&#39; &quot;&gt; and name = #{name}&lt;/if&gt;
            &lt;if test=&quot;sex != null &quot;&gt; and sex = #{sex}&lt;/if&gt;
            &lt;if test=&quot;idcard != null  and idcard != &#39;&#39; &quot;&gt; and idcard = #{idcard}&lt;/if&gt;
            &lt;if test=&quot;nation != null  and nation != &#39;&#39; &quot;&gt; and nation = #{nation}&lt;/if&gt;
            &lt;if test=&quot;date != null &quot;&gt; and date = #{date}&lt;/if&gt;
            &lt;if test=&quot;num != null &quot;&gt; and num = #{num}&lt;/if&gt;
            &lt;if test=&quot;oilkindId != null &quot;&gt; and oilkind_id = #{oilkindId}&lt;/if&gt;
            &lt;if test=&quot;oiltypeId != null &quot;&gt; and oiltype_id = #{oiltypeId}&lt;/if&gt;
            &lt;if test=&quot;gasId != null &quot;&gt; and gas_id = #{gasId}&lt;/if&gt;
            &lt;if test=&quot;adress != null  and adress != &#39;&#39; &quot;&gt; and adress = #{adress}&lt;/if&gt;
            &lt;if test=&quot;usefor != null  and usefor != &#39;&#39; &quot;&gt; and usefor = #{usefor}&lt;/if&gt;
        &lt;/where&gt;
        group by oiltype_id
    &lt;/select&gt;
</code></pre><p>index.html</p><pre><code>&lt;script th:src=&quot;@{/js/jquery.min.js}&quot;&gt;&lt;/script&gt;
&lt;script th:src=&quot;@{/js/echarts.min.js}&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
           var showGasurl = &quot;/system/buyoilform/showGas&quot;;
           var showOilurl = &quot;/system/buyoilform/showIndex/&quot;;
           $.get(showGasurl,function (data) {
               $.each(data,function (i,n) {
                   var myChart = echarts.init(document.getElementById(&#39;main&#39;+i));
                   $.get(showOilurl+n,function (data) {
                       var chartTitle = data[0].gasName.gasName;
                       var textArray = new Array();//名称数组,x轴
                       var valueArray = new Array();//数值数组,y轴
                       //遍历menu对象，填充数组
                       $.each(data, function (i, n) {
                           textArray.push(n.oilkindName.oilKindname + &#39;:&#39; + n.oiltypeName.oilName + &quot;(阈值:&quot; + n.oiltypeName.oilThreshold + &quot;)&quot;);
                           valueArray.push(n.sumNum);
                       });
                       myChart.setOption({
                           color: [&#39;#3398DB&#39;],
                           title: {
                               text: chartTitle + &quot;散装油统计&quot;,
                           },
                           tooltip: {
                               trigger: &#39;axis&#39;,
                               axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                   type: &#39;shadow&#39;        // 默认为直线，可选为：&#39;line&#39; | &#39;shadow&#39;
                               }
                           },
                           grid: {
                               left: &#39;3%&#39;,
                               right: &#39;4%&#39;,
                               bottom: &#39;3%&#39;,
                               containLabel: true
                           },
                           xAxis: [
                               {
                                   type: &#39;category&#39;,
                                   data: textArray,
                                   axisTick: {
                                       alignWithLabel: true
                                   }
                               }
                           ],
                           yAxis: [
                               {
                                   type: &#39;value&#39;
                               }
                           ],
                           series: [
                               {
                                   name: &#39;卖出数量(L)&#39;,
                                   type: &#39;bar&#39;,
                                   barWidth: &#39;60%&#39;,
                                   data: valueArray
                               }
                           ]
                       });
                   });
               });
           });
&lt;/script&gt;
</code></pre><h4 id="git版本问题" tabindex="-1">git版本问题 <a class="header-anchor" href="#git版本问题" aria-label="Permalink to &quot;git版本问题&quot;">​</a></h4><p>回退</p><pre><code>$ git reset --hard 33e5b42929c45f8c9c70c49b265d24be2f46668c(&lt;--版本号)
</code></pre><p>强制提交(版本会回退到当时版本，后续版本会清除，慎用)</p><pre><code>$  git push -u origin master -f
</code></pre>`,68)]))}const g=e(i,[["render",o]]);export{m as __pageData,g as default};
