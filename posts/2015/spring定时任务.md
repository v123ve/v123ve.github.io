---

Created at: 2019-03-30
Last updated at: 2019-03-30
tags: 
  - spring
  - 定时器
  - 事件机制

---

# spring定时任务


## spring定时任务

### 创建定时任务配置类

    @Configuration
    @ComponentScan(basePackages= {"com.aaa.scheduled"})
    @EnableScheduling
    public class SecheduledConfig {}


### 创建定时任务

    @Component
    public class MyTask {
        @Scheduled(cron="0/2 * * * * *")
        public  void loveYou() {
            System.out.println("I love you !"+ new Date());
        }
    }


#### Cron格式

Cron表达式是一个字符串，字符串以5或6个空格隔开，分为6或7个域，每一个域代表一个含义
![[../_resources/unknown_filename-319d2c88.png]]

#### 常用表达式例子

![[../_resources/unknown_filename-85201e3e.png]]

### 测试类

    public class ScheduledTest {
        public static void main(String[] args) {
            AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(SecheduledConfig.class);
        }
    }


## 事件机制

#### 创建事件配置类

    @Configuration
    @ComponentScan(basePackages= {"com.aaa.event"})
    public class EventConfig {}


#### 创建事件信息类

    public class MyEvent extends ApplicationEvent {
        private String message; 
        public String getMessage() {
            return message;
        }
        public void setMessage(String message) {
            this.message = message;
        }
        public MyEvent(Object source,String message) {
            super(source);
            this.message=message;
        }
        private static final long serialVersionUID = 1L;
    }


#### 创建发布者

    @Component
    public class MyPublisher {
        @Autowired
        ApplicationContext applicationContext;
        public void publish(String message) {
            applicationContext.publishEvent(new MyEvent(this, message));
        }
    }


#### 创建接收者

    @Component
    public class Mylistener implements ApplicationListener<MyEvent> {
        @Override
        public void onApplicationEvent(MyEvent event) {
            String message= event.getMessage();
            System.out.println("接受的消息："+message);  
        }
    }


#### 创建事件测试类

    public class EventTest {
        public static void main(String[] args) {
            AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(EventConfig.class);
            MyPublisher mp = (MyPublisher)ac.getBean("myPublisher");
            mp.publish("hahahaha");
        }
    }

