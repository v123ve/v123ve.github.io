import{_ as a,c as t,a3 as n,o}from"./chunks/framework.BaR4VHXY.js";const m=JSON.parse('{"title":"Docker","description":"","frontmatter":{"Created at":"2021-05-08T00:00:00.000Z","Last updated at":"2021-05-08T00:00:00.000Z"},"headers":[],"relativePath":"zh-CN/工作笔记/Docker.md","filePath":"zh-CN/工作笔记/Docker.md","lastUpdated":null}'),r={name:"zh-CN/工作笔记/Docker.md"};function l(i,e,c,s,h,u){return o(),t("div",null,e[0]||(e[0]=[n(`<h1 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h1><h2 id="docker-1" tabindex="-1">Docker <a class="header-anchor" href="#docker-1" aria-label="Permalink to &quot;Docker&quot;">​</a></h2><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h4><p><a href="https://docs.docker.com/engine/install/ubuntu/" target="_blank" rel="noreferrer">ubuntu安装docker</a></p><h4 id="配置阿里云远程仓库" tabindex="-1">配置阿里云远程仓库 <a class="header-anchor" href="#配置阿里云远程仓库" aria-label="Permalink to &quot;配置阿里云远程仓库&quot;">​</a></h4><p><a href="https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors" target="_blank" rel="noreferrer">阿里云镜像</a></p><h4 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h4><p>以下所有命令都加入前缀 docker</p><ul><li><p>pull nginx 拉取镜像</p></li><li><p>images 查看镜像</p></li><li><p>rmi nginx 删除镜像</p></li><li><p>run -it -p 80:80 -v /home/admin123/html:/usr/share/nginx/html --name n1 nginx bash 启动一个交互式的有端口映射、目录映射、容器别名的nginx容器,同时进入shell</p></li><li><p>start n1 启动容器</p></li><li><p>stop n1 关闭容器</p></li><li><p>rm n1 删除容器</p></li><li><p>exec -it n1 bash 输出命令到容器内执行，当前为进入容器shell</p></li><li><p>commit -a=&#39;作者&#39; -m=&#39;描述&#39; n1 myn1 提交当前容器为镜像到本地环境</p></li><li><p>save -o myn1.tar:myn1 输出镜像到tar包</p></li><li><p>load -i myn1.tar 加载tar包到镜像</p></li><li><p>inspect n1 查看容器的对象信息</p></li></ul><h4 id="dockerfile" tabindex="-1">DockerFile <a class="header-anchor" href="#dockerfile" aria-label="Permalink to &quot;DockerFile&quot;">​</a></h4><p><code>docker build -f mycentosDockerFile -t my-centos:v1.0 .</code> 创建一个使用centos配置文件的镜像(注:最后的句号一定不要忘了) docker history my-centos 查看创建镜像步骤 mycentosDockerFile</p><pre><code>#镜像来源
FROM centos
#维护人员信息
MAINTAINER hsy&lt;hsy&gt;
#镜像属性
LABEL name=&quot;CentOS&quot; \\ age=&quot;24&quot;
#构建子镜像时会触发，指令作用于子镜像
ONBUILD RUN yum -y install vim
#复制文件，不解压压缩文件
COPY readme.text /home/readme.text
#复制文件，并解压压缩文件
ADD server-jre-8u151-linux-x64.tar.gz /home/
ADD apache-tomcat-8.5.37.tar.gz /home/
#设置环境变量(window的分号为冒号)
ENV WORKPATH /home/
ENV JAVA_HOME /home/jdk1.8.0_151
ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
ENV CATALINA_HOME /home/apache-tomcat-8.5.37/
ENV CATALINA_BASE /home/apache-tomcat-8.5.37/
ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/lib:$CATALINA_HOME/bin
#设置终端默认登录进来的工作目录
WORKDIR $WORKPATH
#设置终端与容器的目录映射
VOLUNE [&quot;/home/v1&quot;,&quot;/home/v2&quot;]
#构建容器时需要运行的命令
RUN yum -y install net-tools
RUN yum -y install vim
#指定容器启动时“一定”要运行的命令或可执行文见
ENTRYPOINT [&quot;ls&quot;]
#容器对外暴露出的端口
EXPOSE 80
#指定容器启动时“可”运行的命令或可执行文件,默认以最后一个执行,如果ENTRYPOINT存在则作为其参数
CMD [&quot;-l&quot;]
CMD echo &quot;123&quot;
CMD [&quot;/bin/bash&quot;,&quot;catalina.sh&quot;,&quot;run&quot;]
</code></pre>`,12)]))}const p=a(r,[["render",l]]);export{m as __pageData,p as default};
