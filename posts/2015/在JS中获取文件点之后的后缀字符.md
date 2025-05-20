---

Created at: 2019-03-29
Last updated at: 2019-03-29
tags: 
  - js

---

# 在JS中获取文件点之后的后缀字符


### 在JS中获取文件点之后的后缀字符

    var upFileName = $("#fileToUpload").val();
    var index1=upFileName.lastIndexOf(".");
    var index2=upFileName.length;
    var suffix=upFileName.substring(index1+1,index2);//后缀名

