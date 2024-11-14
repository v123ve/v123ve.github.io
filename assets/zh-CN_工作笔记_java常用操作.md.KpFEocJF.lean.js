import{_ as r,c as e,a3 as a,o as n}from"./chunks/framework.BaR4VHXY.js";const g=JSON.parse('{"title":"java常用操作","description":"","frontmatter":{"Created at":"2019-10-28T00:00:00.000Z","Last updated at":"2020-09-11T00:00:00.000Z","tags":["java","StringUtils"]},"headers":[],"relativePath":"zh-CN/工作笔记/java常用操作.md","filePath":"zh-CN/工作笔记/java常用操作.md","lastUpdated":null}'),s={name:"zh-CN/工作笔记/java常用操作.md"};function d(i,t,o,l,u,h){return n(),e("div",null,t[0]||(t[0]=[a(`<h1 id="java常用操作" tabindex="-1">java常用操作 <a class="header-anchor" href="#java常用操作" aria-label="Permalink to &quot;java常用操作&quot;">​</a></h1><h4 id="java常用操作-1" tabindex="-1">java常用操作 <a class="header-anchor" href="#java常用操作-1" aria-label="Permalink to &quot;java常用操作&quot;">​</a></h4><p><a href="https://blog.csdn.net/xuforeverlove/article/details/80842148" target="_blank" rel="noreferrer">使用FastJson对JSON字符串、JSON对象及JavaBean之间的相互转换</a></p><p><a href="https://www.jianshu.com/p/447eb01eebb2" target="_blank" rel="noreferrer">MySQL 的 GROUP_CONCAT 函数详解</a></p><table tabindex="0"><thead><tr><th>描述（字符串）</th><th>方法</th></tr></thead><tbody><tr><td>获取字符串长度</td><td>str.length()</td></tr><tr><td>获取字符串指定位置的字符</td><td>str.charAt(0)</td></tr><tr><td>查找某个字符在字符串中首次出现的位置</td><td>str.indexOf(&quot;1&quot;)</td></tr><tr><td>查找某个字符在字符串中最后出现的位置</td><td>str.lastIndexOf(&quot;1&quot;)</td></tr><tr><td>去除字符串中的首尾空格</td><td>str.trim()</td></tr><tr><td>截取字符串</td><td>str.substring(0,2)</td></tr><tr><td>字符串替换</td><td>str.replaceAll(&quot;1&quot;, &quot;4&quot;)</td></tr><tr><td>替换第一次出现的字符</td><td>str.replaceFirst(&quot;1&quot;, &quot;4&quot;)</td></tr><tr><td>判断字符串的开始和结尾</td><td>startsWith(&quot;我&quot;)</td></tr><tr><td></td><td>endsWith(&quot;3&quot;)</td></tr><tr><td>判断两个字符串是否相等</td><td>str.equals(&quot;&quot;)</td></tr><tr><td>忽略大小写判断两个字符串是否相等</td><td>str.equalsIgnoreCase(&quot;AAA&quot;)</td></tr><tr><td>判断某个字符串是否包含另一个字符串</td><td>str.contains(&quot;&quot;)</td></tr><tr><td>将字母全部转换成大写</td><td>str.toLowerCase()</td></tr><tr><td>将字母全部转换成小写</td><td>str.toUpperCase()</td></tr><tr><td>将字符串分割,多个分隔符可用分割键隔开</td><td>str.split(&quot;,&quot;)</td></tr></tbody></table><table tabindex="0"><thead><tr><th>描述（Math）</th><th>方法</th></tr></thead><tbody><tr><td>计算平方根</td><td>Math.sqrt()</td></tr><tr><td>计算立方根</td><td>Math.cbrt()</td></tr><tr><td>计算a的b次方</td><td>Math.pow(a,b)</td></tr><tr><td>计算最大值</td><td>Math.max(a,b)</td></tr><tr><td>计算最小值</td><td>Math.min(a,b)</td></tr><tr><td>计算绝对值</td><td>Math.abs()</td></tr><tr><td>小于1大于0的double类型的数</td><td>Math.random()</td></tr><tr><td>返回大值</td><td>Math.ceil()</td></tr><tr><td>返回小值</td><td>Math.floor()</td></tr><tr><td>四舍五入（.5返回偶数值）</td><td>Math.rint()</td></tr><tr><td>四舍五入，float时返回int值，double时返回long值</td><td>Math.round()</td></tr></tbody></table><h4 id="fastjson常用方法" tabindex="-1">fastjson常用方法 <a class="header-anchor" href="#fastjson常用方法" aria-label="Permalink to &quot;fastjson常用方法&quot;">​</a></h4><table tabindex="0"><thead><tr><th>描述（com.alibaba.fastjson.JSON）</th><th>方法</th></tr></thead><tbody><tr><td>JAVA对象转JSON字符串</td><td>String s = JSON.toJSONString(new Object());</td></tr><tr><td>JSON字符串转JSON对象</td><td>JSONObject jsonObject = JSON.parseObject(&quot;{id,1}&quot;);</td></tr><tr><td>JSON字符串转JAVA简单对象</td><td>JSON.parseObject(&quot;{id,1}&quot;, String.class);</td></tr><tr><td>JSON对象转jsonArray数组</td><td>jsonObject.getJSONArray(&quot;id&quot;);</td></tr><tr><td>jsonArray数组转字符串</td><td>jsonArray.toJSONString();</td></tr><tr><td>将字符串转成list集合</td><td>JSONObject.parseArray(jsonString, Id.class);</td></tr><tr><td>JAVA对象转JSON对象</td><td>(JSONObject&amp;JSON)JSON.toJSON(new Object());</td></tr></tbody></table><h4 id="stringutils常用方法" tabindex="-1">StringUtils常用方法 <a class="header-anchor" href="#stringutils常用方法" aria-label="Permalink to &quot;StringUtils常用方法&quot;">​</a></h4><table tabindex="0"><thead><tr><th>描述（org.apache.commons.lang3.StringUtils）</th><th>方法</th></tr></thead><tbody><tr><td>判断某字符串是否为空，为空的标准是 str==null 或 str.length()==0</td><td>isEmpty(String str)</td></tr><tr><td>判断某字符串是否非空，等于 !isEmpty(String str)</td><td>isNotEmpty(String str)</td></tr><tr><td>判断某字符串是否为空或长度为0或由空白符(whitespace) 构成</td><td>isBlank(String str)</td></tr><tr><td>判断某字符串是否不为空且长度不为0且不由空白符(whitespace) 构成</td><td>isNotBlank(String str)</td></tr><tr><td>去掉字符串两端的控制符(control characters, char &lt;= 32) , 如果输入为 null 则返回null</td><td>trim(String str)</td></tr><tr><td>去掉字符串两端的控制符(control characters, char &lt;= 32) ,如果变为 null 或&quot;&quot;，则返回 null</td><td>trimToNull(String str)</td></tr><tr><td>去掉字符串两端的控制符(control characters, char &lt;= 32) ,如果变为 null 或 &quot;&quot; ，则返回 &quot;&quot;</td><td>trimToEmpty(String str)</td></tr><tr><td>去掉字符串两端的空白符(whitespace) ，如果输入为 null 则返回 null</td><td>strip(String str)</td></tr><tr><td>去掉字符串两端的空白符(whitespace) ，如果变为 null 或&quot;&quot;，则返回 null</td><td>stripToNull(String str)</td></tr><tr><td>去掉字符串两端的空白符(whitespace) ，如果变为 null 或&quot;&quot; ，则返回&quot;&quot;</td><td>stripToEmpty(String str)</td></tr><tr><td>去掉 str 两端的在 stripChars 中的字符。如果 str 为 null 或等于&quot;&quot; ，则返回它本身；如果 stripChars 为 null 或&quot;&quot; ，则返回 strip(String str)</td><td>strip(String str, String stripChars)</td></tr><tr><td>去掉 str 前端的在 stripChars 中的字符</td><td>stripStart(String str, String stripChars)</td></tr><tr><td>去掉 str 末端的在 stripChars 中的字符</td><td>stripEnd(String str, String stripChars)</td></tr><tr><td>对字符串数组中的每个字符串进行 strip(String str) ，然后返回。如果 strs 为 null 或 strs 长度为0，则返回 strs 本身</td><td>stripAll(String[] strs)</td></tr><tr><td>对字符串数组中的每个字符串进行 strip(String str, String stripChars) ，然后返回。如果 strs 为 null 或 strs 长度为0，则返回 strs 本身</td><td>stripAll(String[] strs, String stripChars)</td></tr><tr><td>比较两个字符串是否相等，如果两个均为空则也认为相等</td><td>equals(String str1, String str2)</td></tr><tr><td>比较两个字符串是否相等，不区分大小写，如果两个均为空则也认为相等</td><td>equalsIgnoreCase(String str1, String str2)</td></tr><tr><td>返回字符 searchChar 在字符串 str 中第一次出现的位置。如果 searchChar 没有在 str 中出现则返回-1，如果 str 为 null 或 &quot;&quot; ，则也返回-1</td><td>indexOf(String str, char searchChar)</td></tr><tr><td>返回字符 searchChar 在字符串 str 中最后一次出现的位置。</td><td>lastIndexOf(String str, char searchChar)</td></tr><tr><td>返回字符 searchChar 从 startPos 开始在字符串 str 中第一次出现的位置。如果从 startPos 开始 searchChar 没有在 str 中出现则返回-1，如果 str 为 null 或 &quot;&quot; ，则也返回-1</td><td>indexOf(String str, char searchChar, int startPos)</td></tr><tr><td>返回字符 searchChar 从 startPos 开始在字符串 str 中最后一次出现的位置。</td><td>lastIndexOf(String str, char searchChar, int startPos)</td></tr><tr><td>返回字符串 searchStr 在字符串 str 中第一次出现的位置。如果 str 为 null 或 searchStr 为 null 则返回-1，如果 searchStr 为 &quot;&quot; ,且 str 为不为 null ，则返回0，如果 searchStr 不在 str 中，则返回-1</td><td>indexOf(String str, String searchStr)</td></tr><tr><td>返回字符串 searchStr 在字符串 str 中最后一次出现的位置。</td><td>lastIndexOf(String str, String searchStr)</td></tr><tr><td>返回字符串 searchStr 从 startPos 开始在字符串 str 中第一次出现的位置。(* 代表任意字符串)</td><td>indexOf(String str, String searchStr, int startPos)</td></tr><tr><td>返回字符串 searchStr 从 startPos 开始在字符串 str 中最后一次出现的位置。</td><td>lastIndexOf(String str, String searchStr, int startPos)</td></tr><tr><td>返回字符串 searchStr 在字符串 str 中第 ordinal 次出现的位置。如果 str=null 或 searchStr=null 或 ordinal&lt;=0 则返回-1(* 代表任意字符串)</td><td>ordinalIndexOf(String str, String searchStr, int ordinal)</td></tr></tbody></table><h4 id="判断字符串是否符合json" tabindex="-1">判断字符串是否符合JSON <a class="header-anchor" href="#判断字符串是否符合json" aria-label="Permalink to &quot;判断字符串是否符合JSON&quot;">​</a></h4><pre><code>Object json = new JSONTokener(stringData).nextValue();
if(json instanceof JSONObject){
    JSONObject jsonObject = (JSONObject)json;
}else if (json instanceof JSONArray){
    JSONArray jsonArray = (JSONArray)json;
}
</code></pre><h4 id="移除包含的元素" tabindex="-1">移除包含的元素 <a class="header-anchor" href="#移除包含的元素" aria-label="Permalink to &quot;移除包含的元素&quot;">​</a></h4><pre><code>List&lt;Integer&gt; a = new ArrayList&lt;&gt;();
Collections.addAll(a, 1, 2, 3);
List&lt;Integer&gt; b = new ArrayList&lt;&gt;();
Collections.addAll(b, 5, 2, 1, 4, 7, 8, 3, 9);
Iterator&lt;Integer&gt; iterator = b.iterator();
while (iterator.hasNext()) {
	if (a.contains(iterator.next())) {
		iterator.remove();
	}
}
System.out.println(b);
</code></pre><h4 id="获取文件目录" tabindex="-1">获取文件目录 <a class="header-anchor" href="#获取文件目录" aria-label="Permalink to &quot;获取文件目录&quot;">​</a></h4><pre><code>    public static void main(String[] args) {
        System.out.println(&quot;--------------------递归方式start--------------------&quot;);
        String dPath = &quot;e:/&quot;;
        File dDir = new File(dPath);
        listAll(dDir);
        System.out.println(&quot;---------------------递归方式end---------------------&quot;);
        System.out.println(&quot;--------------------队列方式start--------------------&quot;);
        File dir = new File(&quot;E:/&quot;);
        LinkedList&lt;File&gt; link = new LinkedList&lt;File&gt;();
        myListFile(dir, link);
        while (!link.isEmpty()) {
            File subDir = link.removeLast();
            myListFile(subDir, link);
        }
        System.out.println(&quot;---------------------队列方式end---------------------&quot;);
    }

    private static void listAll(File dir) {
        File[] files = dir.listFiles();
        assert files != null;
        for (File file : files) {
            if (file.isDirectory()) {
                System.out.println(&quot;目录:&quot; + file.getName());
                listAll(file);
            } else {
                System.out.println(&quot;文件:&quot; + file.getName());
            }
        }
    }

    private static void myListFile(File dir, LinkedList&lt;File&gt; link) {
        File[] files = dir.listFiles();
        assert files != null;
        for (File file : files) {
            if (file.isDirectory()) {
                System.out.println(&quot;目录:&quot; + file.getName());
                link.addFirst(file);
            } else {
                System.out.println(&quot;文件:&quot; + file.getName());
            }
        }
    }
</code></pre><h4 id="字段抽取" tabindex="-1">字段抽取 <a class="header-anchor" href="#字段抽取" aria-label="Permalink to &quot;字段抽取&quot;">​</a></h4><pre><code>        if (list.size() &gt; 0) {
        	 // 合并重复的相机列表,如果返回结果不为空,遍历返回结果
            List&lt;RecTaskCameraList&gt; clist = new ArrayList&lt;&gt;();
            RecTask task = new RecTask();
            int index = list.get(0).getId();
            task.setId(list.get(0).getId());
            task.setTaskGroupID(list.get(0).getTaskGroupID());
            for (RecTask recTask : list) {
                if (recTask.getId() == index) {
                    clist.add(new RecTaskCameraList(recTask.getCameraId(), recTask.getCameraName()));
                } else {
                    task.setCameraList(clist);
                    rlist.add(task);
                    index = recTask.getId();
                    clist = new ArrayList&lt;&gt;();
                    task = new RecTask();
                    task.setId(recTask.getId());
                    task.setTaskGroupID(recTask.getTaskGroupID());
                    clist.add(new RecTaskCameraList(recTask.getCameraId(), recTask.getCameraName()));
                }
            }
            // 最后一个id的是不会进入的，现在把它加入进去
            task.setCameraList(clist);
            rlist.add(task);
        }
</code></pre><h4 id="生成随机数" tabindex="-1">生成随机数 <a class="header-anchor" href="#生成随机数" aria-label="Permalink to &quot;生成随机数&quot;">​</a></h4><pre><code>public static String getRandomString(int length) { //length表示生成字符串的长度  
    String base = &quot;abcdefghijklmnopqrstuvwxyz0123456789&quot;;     
    Random random = new Random();     
    StringBuffer sb = new StringBuffer();     
    for (int i = 0; i &lt; length; i++) {     
        int number = random.nextInt(base.length());     
        sb.append(base.charAt(number));     
    }     
    return sb.toString();     
 } 
</code></pre><h4 id="md5加密" tabindex="-1">Md5加密 <a class="header-anchor" href="#md5加密" aria-label="Permalink to &quot;Md5加密&quot;">​</a></h4><pre><code> public static String md5(String string) {
    byte[] hash;
    try {
        //获取指定加密字符串的摘要
        hash = MessageDigest.getInstance(&quot;MD5&quot;).digest(string.getBytes(&quot;UTF-8&quot;));
    } catch (NoSuchAlgorithmException e) {
        throw new RuntimeException(&quot;Huh, MD5 should be supported?&quot;, e);
    } catch (UnsupportedEncodingException e) {
        throw new RuntimeException(&quot;Huh, UTF-8 should be supported?&quot;, e);
    }
    StringBuilder hex = new StringBuilder(hash.length * 2);
    for (byte b : hash) {
        if ((b &amp; 0xFF) &lt; 0x10) hex.append(&quot;0&quot;);
        //通过b &amp; 0xFF运算获得int值，再通过Integer.toHexString转成16进制字符串。
        hex.append(Integer.toHexString(b &amp; 0xFF));
    }
    return hex.toString();
 }
</code></pre><h4 id="校验编码" tabindex="-1">校验编码 <a class="header-anchor" href="#校验编码" aria-label="Permalink to &quot;校验编码&quot;">​</a></h4><pre><code>    /**
     * 转化编码格式到指定格式
     * &quot;UTF-8&quot;, &quot;GB18030&quot;, &quot;GB2312&quot;, &quot;GBK&quot;, &quot;Windows-1252&quot;, &quot;ISO8859-1&quot;
     *
     * @param jsonStr       原始字符串
     * @param originCharset 原始编码
     * @param curCharset    当前编码
     * @return java.lang.String
     */
    public static String parseCharset(String jsonStr, String originCharset, String curCharset) throws UnsupportedEncodingException {
        if (jsonStr == null || jsonStr.length() == 0) {
            return jsonStr;
        }
        byte[] btArr = jsonStr.getBytes(originCharset);
        jsonStr = new String(btArr, curCharset);
        return jsonStr;
    }
</code></pre>`,24)]))}const S=r(s,[["render",d]]);export{g as __pageData,S as default};
