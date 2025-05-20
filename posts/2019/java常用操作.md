---

Created at: 2019-10-28
Last updated at: 2020-09-11
tags: 
  - java
  - StringUtils

---

# java常用操作


#### java常用操作

[使用FastJson对JSON字符串、JSON对象及JavaBean之间的相互转换](https://blog.csdn.net/xuforeverlove/article/details/80842148)

[MySQL 的 GROUP_CONCAT 函数详解](https://www.jianshu.com/p/447eb01eebb2)

| 描述（字符串） | 方法  |
| --- | --- |
| 获取字符串长度 | str.length() |
| 获取字符串指定位置的字符 | str.charAt(0) |
| 查找某个字符在字符串中首次出现的位置 | str.indexOf("1") |
| 查找某个字符在字符串中最后出现的位置 | str.lastIndexOf("1") |
| 去除字符串中的首尾空格 | str.trim() |
| 截取字符串 | str.substring(0,2) |
| 字符串替换 | str.replaceAll("1", "4") |
| 替换第一次出现的字符 | str.replaceFirst("1", "4") |
| 判断字符串的开始和结尾 | startsWith("我") |
|     | endsWith("3") |
| 判断两个字符串是否相等 | str.equals("") |
| 忽略大小写判断两个字符串是否相等 | str.equalsIgnoreCase("AAA") |
| 判断某个字符串是否包含另一个字符串 | str.contains("") |
| 将字母全部转换成大写 | str.toLowerCase() |
| 将字母全部转换成小写 | str.toUpperCase() |
| 将字符串分割,多个分隔符可用分割键隔开 | str.split(",") |

| 描述（Math） | 方法  |
| --- | --- |
| 计算平方根 | Math.sqrt() |
| 计算立方根 | Math.cbrt() |
| 计算a的b次方 | Math.pow(a,b) |
| 计算最大值 | Math.max(a,b) |
| 计算最小值 | Math.min(a,b) |
| 计算绝对值 | Math.abs() |
| 小于1大于0的double类型的数 | Math.random() |
| 返回大值 | Math.ceil() |
| 返回小值 | Math.floor() |
| 四舍五入（.5返回偶数值） | Math.rint() |
| 四舍五入，float时返回int值，double时返回long值 | Math.round() |

#### fastjson常用方法

| 描述（com.alibaba.fastjson.JSON） | 方法  |
| --- | --- |
| JAVA对象转JSON字符串 | String s = JSON.toJSONString(new Object()); |
| JSON字符串转JSON对象 | JSONObject jsonObject = JSON.parseObject("{id,1}"); |
| JSON字符串转JAVA简单对象 | JSON.parseObject("{id,1}", String.class); |
| JSON对象转jsonArray数组 | jsonObject.getJSONArray("id"); |
| jsonArray数组转字符串 | jsonArray.toJSONString(); |
| 将字符串转成list集合 | JSONObject.parseArray(jsonString, Id.class); |
| JAVA对象转JSON对象 | (JSONObject&JSON)JSON.toJSON(new Object()); |

#### StringUtils常用方法

| 描述（org.apache.commons.lang3.StringUtils） | 方法  |
| --- | --- |
| 判断某字符串是否为空，为空的标准是 str==null 或 str.length()==0 | isEmpty(String str) |
| 判断某字符串是否非空，等于 !isEmpty(String str) | isNotEmpty(String str) |
| 判断某字符串是否为空或长度为0或由空白符(whitespace) 构成 | isBlank(String str) |
| 判断某字符串是否不为空且长度不为0且不由空白符(whitespace) 构成 | isNotBlank(String str) |
| 去掉字符串两端的控制符(control characters, char <= 32) , 如果输入为 null 则返回null | trim(String str) |
| 去掉字符串两端的控制符(control characters, char <= 32) ,如果变为 null 或""，则返回 null | trimToNull(String str) |
| 去掉字符串两端的控制符(control characters, char <= 32) ,如果变为 null 或 "" ，则返回 "" | trimToEmpty(String str) |
| 去掉字符串两端的空白符(whitespace) ，如果输入为 null 则返回 null | strip(String str) |
| 去掉字符串两端的空白符(whitespace) ，如果变为 null 或""，则返回 null | stripToNull(String str) |
| 去掉字符串两端的空白符(whitespace) ，如果变为 null 或"" ，则返回"" | stripToEmpty(String str) |
| 去掉 str 两端的在 stripChars 中的字符。如果 str 为 null 或等于"" ，则返回它本身；如果 stripChars 为 null 或"" ，则返回 strip(String str) | strip(String str, String stripChars) |
| 去掉 str 前端的在 stripChars 中的字符 | stripStart(String str, String stripChars) |
| 去掉 str 末端的在 stripChars 中的字符 | stripEnd(String str, String stripChars) |
| 对字符串数组中的每个字符串进行 strip(String str) ，然后返回。如果 strs 为 null 或 strs 长度为0，则返回 strs 本身 | stripAll(String[] strs) |
| 对字符串数组中的每个字符串进行 strip(String str, String stripChars) ，然后返回。如果 strs 为 null 或 strs 长度为0，则返回 strs 本身 | stripAll(String[] strs, String stripChars) |
| 比较两个字符串是否相等，如果两个均为空则也认为相等 | equals(String str1, String str2) |
| 比较两个字符串是否相等，不区分大小写，如果两个均为空则也认为相等 | equalsIgnoreCase(String str1, String str2) |
| 返回字符 searchChar 在字符串 str 中第一次出现的位置。如果 searchChar 没有在 str 中出现则返回-1，如果 str 为 null 或 "" ，则也返回-1 | indexOf(String str, char searchChar) |
| 返回字符 searchChar 在字符串 str 中最后一次出现的位置。 | lastIndexOf(String str, char searchChar) |
| 返回字符 searchChar 从 startPos 开始在字符串 str 中第一次出现的位置。如果从 startPos 开始 searchChar 没有在 str 中出现则返回-1，如果 str 为 null 或 "" ，则也返回-1 | indexOf(String str, char searchChar, int startPos) |
| 返回字符 searchChar 从 startPos 开始在字符串 str 中最后一次出现的位置。 | lastIndexOf(String str, char searchChar, int startPos) |
| 返回字符串 searchStr 在字符串 str 中第一次出现的位置。如果 str 为 null 或 searchStr 为 null 则返回-1，如果 searchStr 为 "" ,且 str 为不为 null ，则返回0，如果 searchStr 不在 str 中，则返回-1 | indexOf(String str, String searchStr) |
| 返回字符串 searchStr 在字符串 str 中最后一次出现的位置。 | lastIndexOf(String str, String searchStr) |
| 返回字符串 searchStr 从 startPos 开始在字符串 str 中第一次出现的位置。(* 代表任意字符串) | indexOf(String str, String searchStr, int startPos) |
| 返回字符串 searchStr 从 startPos 开始在字符串 str 中最后一次出现的位置。 | lastIndexOf(String str, String searchStr, int startPos) |
| 返回字符串 searchStr 在字符串 str 中第 ordinal 次出现的位置。如果 str=null 或 searchStr=null 或 ordinal<=0 则返回-1(* 代表任意字符串) | ordinalIndexOf(String str, String searchStr, int ordinal) |

#### 判断字符串是否符合JSON

    Object json = new JSONTokener(stringData).nextValue();
    if(json instanceof JSONObject){
        JSONObject jsonObject = (JSONObject)json;
    }else if (json instanceof JSONArray){
        JSONArray jsonArray = (JSONArray)json;
    }


#### 移除包含的元素

    List<Integer> a = new ArrayList<>();
    Collections.addAll(a, 1, 2, 3);
    List<Integer> b = new ArrayList<>();
    Collections.addAll(b, 5, 2, 1, 4, 7, 8, 3, 9);
    Iterator<Integer> iterator = b.iterator();
    while (iterator.hasNext()) {
    	if (a.contains(iterator.next())) {
    		iterator.remove();
    	}
    }
    System.out.println(b);


#### 获取文件目录

        public static void main(String[] args) {
            System.out.println("--------------------递归方式start--------------------");
            String dPath = "e:/";
            File dDir = new File(dPath);
            listAll(dDir);
            System.out.println("---------------------递归方式end---------------------");
            System.out.println("--------------------队列方式start--------------------");
            File dir = new File("E:/");
            LinkedList<File> link = new LinkedList<File>();
            myListFile(dir, link);
            while (!link.isEmpty()) {
                File subDir = link.removeLast();
                myListFile(subDir, link);
            }
            System.out.println("---------------------队列方式end---------------------");
        }
    
        private static void listAll(File dir) {
            File[] files = dir.listFiles();
            assert files != null;
            for (File file : files) {
                if (file.isDirectory()) {
                    System.out.println("目录:" + file.getName());
                    listAll(file);
                } else {
                    System.out.println("文件:" + file.getName());
                }
            }
        }
    
        private static void myListFile(File dir, LinkedList<File> link) {
            File[] files = dir.listFiles();
            assert files != null;
            for (File file : files) {
                if (file.isDirectory()) {
                    System.out.println("目录:" + file.getName());
                    link.addFirst(file);
                } else {
                    System.out.println("文件:" + file.getName());
                }
            }
        }


#### 字段抽取

            if (list.size() > 0) {
            	 // 合并重复的相机列表,如果返回结果不为空,遍历返回结果
                List<RecTaskCameraList> clist = new ArrayList<>();
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
                        clist = new ArrayList<>();
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


#### 生成随机数

    public static String getRandomString(int length) { //length表示生成字符串的长度  
        String base = "abcdefghijklmnopqrstuvwxyz0123456789";     
        Random random = new Random();     
        StringBuffer sb = new StringBuffer();     
        for (int i = 0; i < length; i++) {     
            int number = random.nextInt(base.length());     
            sb.append(base.charAt(number));     
        }     
        return sb.toString();     
     } 


#### Md5加密

     public static String md5(String string) {
        byte[] hash;
        try {
            //获取指定加密字符串的摘要
            hash = MessageDigest.getInstance("MD5").digest(string.getBytes("UTF-8"));
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Huh, MD5 should be supported?", e);
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException("Huh, UTF-8 should be supported?", e);
        }
        StringBuilder hex = new StringBuilder(hash.length * 2);
        for (byte b : hash) {
            if ((b & 0xFF) < 0x10) hex.append("0");
            //通过b & 0xFF运算获得int值，再通过Integer.toHexString转成16进制字符串。
            hex.append(Integer.toHexString(b & 0xFF));
        }
        return hex.toString();
     }


#### 校验编码

        /**
         * 转化编码格式到指定格式
         * "UTF-8", "GB18030", "GB2312", "GBK", "Windows-1252", "ISO8859-1"
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




