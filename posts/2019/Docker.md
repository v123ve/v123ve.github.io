---

Created at: 2021-05-08
Last updated at: 2021-05-08


---

# Docker


## Docker

#### 安装

[ubuntu安装docker](https://docs.docker.com/engine/install/ubuntu/)

#### 配置阿里云远程仓库

[阿里云镜像](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)

#### 常用命令

以下所有命令都加入前缀 docker

* pull nginx 拉取镜像

* images 查看镜像
* rmi nginx 删除镜像
* run -it -p 80:80 -v /home/admin123/html:/usr/share/nginx/html --name n1 nginx bash 启动一个交互式的有端口映射、目录映射、容器别名的nginx容器,同时进入shell
* start n1 启动容器
* stop n1 关闭容器
* rm n1 删除容器
* exec -it n1 bash 输出命令到容器内执行，当前为进入容器shell
* commit -a='作者' -m='描述' n1 myn1 提交当前容器为镜像到本地环境
* save -o myn1.tar:myn1 输出镜像到tar包
* load -i myn1.tar 加载tar包到镜像
* inspect n1 查看容器的对象信息

#### DockerFile

`docker build -f mycentosDockerFile -t my-centos:v1.0 .`
创建一个使用centos配置文件的镜像(注:最后的句号一定不要忘了)
docker history my-centos 查看创建镜像步骤
mycentosDockerFile

    #镜像来源
    FROM centos
    #维护人员信息
    MAINTAINER hsy<hsy>
    #镜像属性
    LABEL name="CentOS" \ age="24"
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
    VOLUNE ["/home/v1","/home/v2"]
    #构建容器时需要运行的命令
    RUN yum -y install net-tools
    RUN yum -y install vim
    #指定容器启动时“一定”要运行的命令或可执行文见
    ENTRYPOINT ["ls"]
    #容器对外暴露出的端口
    EXPOSE 80
    #指定容器启动时“可”运行的命令或可执行文件,默认以最后一个执行,如果ENTRYPOINT存在则作为其参数
    CMD ["-l"]
    CMD echo "123"
    CMD ["/bin/bash","catalina.sh","run"]




