import{_ as t,c as e,a3 as r,o as a}from"./chunks/framework.BaR4VHXY.js";const u=JSON.parse('{"title":"Spring Boot","description":"","frontmatter":{"Created at":"2019-04-01T00:00:00.000Z","Last updated at":"2019-04-01T00:00:00.000Z","tags":["springboot","idea"]},"headers":[],"relativePath":"zh-CN/学习笔记/Spring Boot.md","filePath":"zh-CN/学习笔记/Spring Boot.md","lastUpdated":null}'),n={name:"zh-CN/学习笔记/Spring Boot.md"};function i(l,o,s,p,c,d){return a(),e("div",null,o[0]||(o[0]=[r(`<h1 id="spring-boot" tabindex="-1">Spring Boot <a class="header-anchor" href="#spring-boot" aria-label="Permalink to &quot;Spring Boot&quot;">​</a></h1><h3 id="spring-boot-1" tabindex="-1">Spring Boot <a class="header-anchor" href="#spring-boot-1" aria-label="Permalink to &quot;Spring Boot&quot;">​</a></h3><p>Spring Boot 是由 Pivotal 团队提供的全新框架，其设计目的是用来简化新 Spring 应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。用我的话来理解，就是 Spring Boot 其实不是什么新的框架，它默认配置了很多框架的使用方式，就像 Maven 整合了所有的 Jar 包，Spring Boot 整合了所有的框架。</p><h4 id="spring-boot有什么好处" tabindex="-1">Spring Boot有什么好处 <a class="header-anchor" href="#spring-boot有什么好处" aria-label="Permalink to &quot;Spring Boot有什么好处&quot;">​</a></h4><p>使用 Spring Boot 可以非常方便、快速搭建项目，使我们不用关心框架之间的兼容性，适用版本等各种问题，我们想使用任何东西，仅仅添加一个配置就可以，所以使用 Spring Boot 非常适合构建微服务。</p><h5 id="pom-xml中添加支持web的模块" tabindex="-1">pom.xml中添加支持web的模块 <a class="header-anchor" href="#pom-xml中添加支持web的模块" aria-label="Permalink to &quot;pom.xml中添加支持web的模块&quot;">​</a></h5><p>pom.xml文件中默认有两个模块： spring-boot-starter：核心模块，包括自动配置支持、日志和YAML； spring-boot-starter-test：测试模块，包括JUnit、Hamcrest、Mockito。</p><h5 id="编写controller内容" tabindex="-1">编写controller内容 <a class="header-anchor" href="#编写controller内容" aria-label="Permalink to &quot;编写controller内容&quot;">​</a></h5><p>@RestController的意思就是controller里面的方法都以json格式输出，不用再写什么jackjson配置的了！</p><h5 id="单元测试" tabindex="-1">单元测试 <a class="header-anchor" href="#单元测试" aria-label="Permalink to &quot;单元测试&quot;">​</a></h5><p>打开的src/test/下的测试入口,编写简单的http请求来测试；使用mockmvc进行，利用MockMvcResultHandlers.print()打印出执行结果。</p><pre><code>  @RunWith(SpringRunner.class)
  @SpringBootTestpublic class HelloWorldControlerTests {
    private MockMvc mvc;
    @Before
    public void setUp() throws Exception {
        mvc = MockMvcBuilders.standaloneSetup(new HelloWorldController()).build();
    }
    @Test
    public void getHello() throws Exception {
    mvc.perform(MockMvcRequestBuilders.get(&quot;/hello&quot;).accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print())
                .andReturn();
    }
}
</code></pre><h5 id="开发环境的调试" tabindex="-1">开发环境的调试 <a class="header-anchor" href="#开发环境的调试" aria-label="Permalink to &quot;开发环境的调试&quot;">​</a></h5><p>热启动在正常开发项目中已经很常见了吧，虽然平时开发 web 项目过程中，改动项目启重启总是报错；但 Spring Boot 对调试支持很好，修改之后可以实时生效，需要添加以下的配置： 该模块在完整的打包环境下运行的时候会被禁用。如果你使用java -jar启动应用或者用一个特定的classloader启动，它会认为这是一个“生产环境”。</p>`,14)]))}const g=t(n,[["render",i]]);export{u as __pageData,g as default};
