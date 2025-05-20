import{_ as r,c as t,a3 as a,o as i}from"./chunks/framework.BaR4VHXY.js";const o=JSON.parse('{"title":"排序和树","description":"","frontmatter":{"Created at":"2019-11-21T00:00:00.000Z","Last updated at":"2020-09-11T00:00:00.000Z","tags":["树","排序"]},"headers":[],"relativePath":"zh-CN/工作笔记/排序和树.md","filePath":"zh-CN/工作笔记/排序和树.md","lastUpdated":null}'),e={name:"zh-CN/工作笔记/排序和树.md"};function l(y,n,s,d,p,g){return i(),t("div",null,n[0]||(n[0]=[a(`<h1 id="排序和树" tabindex="-1">排序和树 <a class="header-anchor" href="#排序和树" aria-label="Permalink to &quot;排序和树&quot;">​</a></h1><h4 id="排序和树-1" tabindex="-1">排序和树 <a class="header-anchor" href="#排序和树-1" aria-label="Permalink to &quot;排序和树&quot;">​</a></h4><h4 id="arrays-sort" tabindex="-1">Arrays.sort() <a class="header-anchor" href="#arrays-sort" aria-label="Permalink to &quot;Arrays.sort()&quot;">​</a></h4><ol><li>当待排序的数组中的元素个数较少时，源码中的阀值为7，采用的是插入排序。尽管插入排序的时间复杂度为0(n^2)，但是当数组元素较少时，插入排序优于快速排序，因为这时快速排序的递归操作影响性能。</li></ol><ul><li><p>较好的选择了划分元（基准元素）。能够将数组分成大致两个相等的部分，避免出现最坏的情况。例如当数组有序的的情况下，选择第一个元素作为划分元，将使得算法的时间复杂度达到O(n^2).</p><ul><li>源码中选择划分元的方法:</li><li>当数组大小为 size=7 时 ，取数组中间元素作为划分元。int n=m&gt;&gt;1;(此方法值得借鉴)</li><li>当数组大小 7&lt;size&lt;=40时，取首、中、末三个元素中间大小的元素作为划分元。</li><li>当数组大小 size&gt;40 时 ，从待排数组中较均匀的选择9个元素，选出一个伪中数做为划分元。</li></ul><ol start="3"><li>根据划分元 v ，形成不变式 v* (&lt;v)* (&gt;v)* v*</li></ol></li></ul><h4 id="字符串反转-比较好用的" tabindex="-1">字符串反转(比较好用的) <a class="header-anchor" href="#字符串反转-比较好用的" aria-label="Permalink to &quot;字符串反转(比较好用的)&quot;">​</a></h4><ol><li><p>new StringBuffer(s).reverse().toString();</p></li><li><p>递归</p><p>public static String reverse1(String s) { int length = s.length(); if(length &lt;= 1){ return s; } String left = s.substring(0, length / 2); String right = s.substring(length / 2, length); return reverse1(right) + reverse1(left); }</p></li><li><p>遍历</p><p>public static String reverse5(String orig) { char[] s = orig.toCharArray(); intn = s.length - 1; int halfLength = n / 2; for(int i = 0; i &lt;= halfLength; i++) { chartemp = s[i]; s[i] = s[n - i]; s[n - i] = temp; } return new String(s); }</p></li></ol><h5 id="排序二叉树" tabindex="-1">排序二叉树 <a class="header-anchor" href="#排序二叉树" aria-label="Permalink to &quot;排序二叉树&quot;">​</a></h5><p>二叉查找树（英语：Binary Search Tree），也称为二叉搜索树、有序二叉树（ordered binary tree）或排序二叉树（sorted binary tree），是指一棵空树或者具有下列性质的二叉树:</p><ol><li><p>若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；</p></li><li><p>若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；</p></li><li><p>任意节点的左、右子树也分别为二叉查找树；</p></li><li><p>没有键值相等的节点。</p><p>public class Node { // 节点 Object data; // 父节点 Node parent; // 左子节点 Node left; // 右子节点 Node right; public Node(Object data, Node parent, Node left, Node right) { this.data = data; this.parent = parent; this.left = left; this.right = right; } }</p></li></ol><h4 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to &quot;排序&quot;">​</a></h4><p><a href="https://cloud.tencent.com/developer/article/1118919" target="_blank" rel="noreferrer">排序</a></p><ol><li><p>冒泡排序 它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。 最佳情况：T(n) = O(n)   最差情况：T(n) = O(n2)   平均情况：T(n) = O(n2)</p><pre><code> public static int[] bubbleSort(int[] array) {
     if (array.length == 0)
         return array;
     for (int i = 0; i &lt; array.length; i++) {
         for (int j = 0; j &lt; array.length - 1 - i; j++) {
             if (array[j + 1] &lt; array[j]) {
                 int temp = array[j + 1];
                 array[j + 1] = array[j];
                 array[j] = temp;
             }
         }
     }
     return array;
 }
</code></pre></li><li><p>选择排序 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。 最佳情况：T(n) = O(n2)  最差情况：T(n) = O(n2)  平均情况：T(n) = O(n2)</p><pre><code> public static int[] selectionSort(int[] array) {
     if (array.length == 0)
         return array;
     for (int i = 0; i &lt; array.length; i++) {
         int minIndex = i;
         for (int j = i; j &lt; array.length; j++) {
             if (array[j] &lt; array[minIndex]) //找到最小的数
                 minIndex = j; //将最小数的索引保存
         }
         int temp = array[minIndex];
         array[minIndex] = array[i];
         array[i] = temp;
     }
     return array;
 }
</code></pre></li><li><p>插入排序 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。 最佳情况：T(n) = O(n)   最坏情况：T(n) = O(n2)   平均情况：T(n) = O(n2)</p><pre><code> public static int[] insertionSort(int[] array) {
     if (array.length == 0)
         return array;
     int current;
     for (int i = 0; i &lt; array.length - 1; i++) {
         current = array[i + 1];
         int preIndex = i;
         while (preIndex &gt;= 0 &amp;&amp; current &lt; array[preIndex]) {
             array[preIndex + 1] = array[preIndex];
             preIndex--;
         }
         array[preIndex + 1] = current;
     }
     return array;
 }
</code></pre></li><li><p>希尔排序 缩小增量排序，优先比较距离较远的元素。希尔排序是把记录按下表的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止。 最佳情况：T(n) = O(nlog2 n)  最坏情况：T(n) = O(nlog2 n)  平均情况：T(n) =O(nlog2n)</p><pre><code> public static int[] ShellSort(int[] array) {
     int len = array.length;
     int temp, gap = len / 2;
     while (gap &gt; 0) {
         for (int i = gap; i &lt; len; i++) {
             temp = array[i];
             int preIndex = i - gap;
             while (preIndex &gt;= 0 &amp;&amp; array[preIndex] &gt; temp) {
                 array[preIndex + gap] = array[preIndex];
                 preIndex -= gap;
             }
             array[preIndex + gap] = temp;
         }
         gap /= 2;
     }
     return array;
 }
</code></pre></li><li><p>归并排序 采用分治法。归并排序是一种稳定的排序方法。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。  最佳情况：T(n) = O(n)  最差情况：T(n) = O(nlogn)  平均情况：T(n) = O(nlogn)</p><pre><code> public static int[] MergeSort(int[] array) {
     if (array.length &lt; 2) return array;
     int mid = array.length / 2;
     int[] left = Arrays.copyOfRange(array, 0, mid);
     int[] right = Arrays.copyOfRange(array, mid, array.length);
     return merge(MergeSort(left), MergeSort(right));
 }
 
 public static int[] merge(int[] left, int[] right) {
     int[] result = new int[left.length + right.length];
     for (int index = 0, i = 0, j = 0; index &lt; result.length; index++) {
         if (i &gt;= left.length)
             result[index] = right[j++];
         else if (j &gt;= right.length)
             result[index] = left[i++];
         else if (left[i] &gt; right[j])
             result[index] = right[j++];
         else
             result[index] = left[i++];
     }
     return result;
 }
</code></pre></li><li><p>快速排序 通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。 最佳情况：T(n) = O(nlogn)   最差情况：T(n) = O(n2)   平均情况：T(n) = O(nlogn)</p><pre><code> public static int[] QuickSort(int[] array, int start, int end) {
     if (array.length &lt; 1 || start &lt; 0 || end &gt;= array.length || start &gt; end) return null;
     int smallIndex = partition(array, start, end);
     if (smallIndex &gt; start)
         QuickSort(array, start, smallIndex - 1);
     if (smallIndex &lt; end)
         QuickSort(array, smallIndex + 1, end);
     return array;
 }
 
 public static int partition(int[] array, int start, int end) {
     int pivot = (int) (start + Math.random() * (end - start + 1));
     int smallIndex = start - 1;
     swap(array, pivot, end);
     for (int i = start; i &lt;= end; i++)
         if (array[i] &lt;= array[end]) {
             smallIndex++;
             if (i &gt; smallIndex)
                 swap(array, i, smallIndex);
         }
     return smallIndex;
 }
 
 public static void swap(int[] array, int i, int j) {
     int temp = array[i];
     array[i] = array[j];
     array[j] = temp;
 }
</code></pre></li><li><p>堆排序 堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。 最佳情况：T(n) = O(nlogn) 最差情况：T(n) = O(nlogn) 平均情况：T(n) = O(nlogn)</p><pre><code> //声明全局变量，用于记录数组array的长度；
 static int len;
 
 public static int[] HeapSort(int[] array) {
     len = array.length;
     if (len &lt; 1) return array;
     //1.构建一个最大堆
     buildMaxHeap(array);
     //2.循环将堆首位（最大值）与末位交换，然后在重新调整最大堆
     while (len &gt; 0) {
         swap(array, 0, len - 1);
         len--;
         adjustHeap(array, 0);
     }
     return array;
 }
 
 //建立最大堆
 public static void buildMaxHeap(int[] array) {
     //从最后一个非叶子节点开始向上构造最大堆
     for (int i = (len / 2 - 1); i &gt;= 0; i--) { //感谢 @让我发会呆 网友的提醒，此处应该为 i = (len/2 - 1) 
         adjustHeap(array, i);
     }
 }
 
 //调整使之成为最大堆
 public static void adjustHeap(int[] array, int i) {
     int maxIndex = i;
     //如果有左子树，且左子树大于父节点，则将最大指针指向左子树
     if (i * 2 &lt; len &amp;&amp; array[i * 2] &gt; array[maxIndex])
         maxIndex = i * 2;
     //如果有右子树，且右子树大于父节点，则将最大指针指向右子树
     if (i * 2 + 1 &lt; len &amp;&amp; array[i * 2 + 1] &gt; array[maxIndex])
         maxIndex = i * 2 + 1;
     //如果父节点不是最大值，则将父节点与最大值交换，并且递归调整与父节点交换的位置。
     if (maxIndex != i) {
         swap(array, maxIndex, i);
         adjustHeap(array, maxIndex);
     }
 }
</code></pre></li><li><p>计数排序 计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。 计数排序(Counting sort)是一种稳定的排序算法。计数排序使用一个额外的数组C，其中第i个元素是待排序数组A中值等于i的元素的个数。然后根据数组C来将A中的元素排到正确的位置。它只能对整数进行排序。 最佳情况：T(n) = O(n+k) 最差情况：T(n) = O(n+k) 平均情况：T(n) = O(n+k)</p><pre><code> public static int[] CountingSort(int[] array) {
     if (array.length == 0) return array;
     int bias, min = array[0], max = array[0];
     for (int i = 1; i &lt; array.length; i++) {
         if (array[i] &gt; max)
             max = array[i];
         if (array[i] &lt; min)
             min = array[i];
     }
     bias = 0 - min;
     int[] bucket = new int[max - min + 1];
     Arrays.fill(bucket, 0);
     for (int i = 0; i &lt; array.length; i++) {
         bucket[array[i] + bias]++;
     }
     int index = 0, i = 0;
     while (index &lt; array.length) {
         if (bucket[i] != 0) {
             array[index] = i - bias;
             bucket[i]--;
             index++;
         } else
             i++;
     }
     return array;
 }
</code></pre></li><li><p>桶排序 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。 桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行） 最佳情况：T(n) = O(n+k)   最差情况：T(n) = O(n+k)   平均情况：T(n) = O(n2)</p><pre><code> public static ArrayList&lt;Integer&gt; BucketSort(ArrayList&lt;Integer&gt; array, int bucketSize) {
     if (array == null || array.size() &lt; 2)
         return array;
     int max = array.get(0), min = array.get(0);
     // 找到最大值最小值
     for (int i = 0; i &lt; array.size(); i++) {
         if (array.get(i) &gt; max)
             max = array.get(i);
         if (array.get(i) &lt; min)
             min = array.get(i);
     }
     int bucketCount = (max - min) / bucketSize + 1;
     ArrayList&lt;ArrayList&lt;Integer&gt;&gt; bucketArr = new ArrayList&lt;&gt;(bucketCount);
     ArrayList&lt;Integer&gt; resultArr = new ArrayList&lt;&gt;();
     for (int i = 0; i &lt; bucketCount; i++) {
         bucketArr.add(new ArrayList&lt;Integer&gt;());
     }
     for (int i = 0; i &lt; array.size(); i++) {
         bucketArr.get((array.get(i) - min) / bucketSize).add(array.get(i));
     }
     for (int i = 0; i &lt; bucketCount; i++) {
         if (bucketSize == 1) { // 如果带排序数组中有重复数字时  感谢 @见风任然是风 朋友指出错误
             for (int j = 0; j &lt; bucketArr.get(i).size(); j++)
                 resultArr.add(bucketArr.get(i).get(j));
         } else {
             if (bucketCount == 1)
                 bucketSize--;
             ArrayList&lt;Integer&gt; temp = BucketSort(bucketArr.get(i), bucketSize);
             for (int j = 0; j &lt; temp.size(); j++)
                 resultArr.add(temp.get(j));
         }
     }
     return resultArr;
 }
</code></pre></li><li><p>基数排序 基数排序也是非比较的排序算法，对每一位进行排序，从最低位开始排序，复杂度为O(kn),为数组长度，k为数组中的数的最大的位数； 基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。基数排序基于分别排序，分别收集，所以是稳定的。 最佳情况：T(n) = O(n * k)   最差情况：T(n) = O(n * k)   平均情况：T(n) = O(n * k)</p><pre><code>public static int[] RadixSort(int[] array) {
    if (array == null || array.length &lt; 2)
        return array;
    // 1.先算出最大数的位数；
    int max = array[0];
    for (int i = 1; i &lt; array.length; i++) {
        max = Math.max(max, array[i]);
    }
    int maxDigit = 0;
    while (max != 0) {
        max /= 10;
        maxDigit++;
    }
    int mod = 10, div = 1;
    ArrayList&lt;ArrayList&lt;Integer&gt;&gt; bucketList = new ArrayList&lt;ArrayList&lt;Integer&gt;&gt;();
    for (int i = 0; i &lt; 10; i++)
        bucketList.add(new ArrayList&lt;Integer&gt;());
    for (int i = 0; i &lt; maxDigit; i++, mod *= 10, div *= 10) {
        for (int j = 0; j &lt; array.length; j++) {
            int num = (array[j] % mod) / div;
            bucketList.get(num).add(array[j]);
        }
        int index = 0;
        for (int j = 0; j &lt; bucketList.size(); j++) {
            for (int k = 0; k &lt; bucketList.get(j).size(); k++)
                array[index++] = bucketList.get(j).get(k);
            bucketList.get(j).clear();
        }
    }
    return array;
}
</code></pre></li></ol><h5 id="基数排序-vs-计数排序-vs-桶排序" tabindex="-1">基数排序 vs 计数排序 vs 桶排序 <a class="header-anchor" href="#基数排序-vs-计数排序-vs-桶排序" aria-label="Permalink to &quot;基数排序 vs 计数排序 vs 桶排序&quot;">​</a></h5><p>这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：</p><ul><li><p>基数排序：根据键值的每位数字来分配桶</p></li><li><p>计数排序：每个桶只存储单一键值</p></li><li><p>桶排序：每个桶存储一定范围的数值</p><pre><code>  import java.util.ArrayList;
  import java.util.Arrays;
  
  public static void main(String[] args) {
  
  }
  
  /*
   * description: bubbleSort
   * date: 2019/10/28 20:27
   * author: hsy
   * 冒泡排序
   * @param array
   * @return int[]
   */
  public static int[] bubbleSort(int[] array) {
      if (array.length == 0)
          return array;
      for (int i = 0; i &lt; array.length; i++) {
          for (int j = 0; j &lt; array.length - 1 - i; j++) {
              if (array[j + 1] &lt; array[j]) {
                  int temp = array[j + 1];
                  array[j + 1] = array[j];
                  array[j] = temp;
              }
          }
      }
      return array;
  }
  
  /*
   * description: selectionSort
   * date: 2019/10/28 20:27
   * author: hsy
   * 选择排序
   * @param array
   * @return int[]
   */
  public static int[] selectionSort(int[] array) {
      if (array.length == 0)
          return array;
      for (int i = 0; i &lt; array.length; i++) {
          int minIndex = i;
          for (int j = i; j &lt; array.length; j++) {
              if (array[j] &lt; array[minIndex]) //找到最小的数
                  minIndex = j; //将最小数的索引保存
          }
          int temp = array[minIndex];
          array[minIndex] = array[i];
          array[i] = temp;
      }
      return array;
  }
  
  /*
   * description: insertionSort
   * date: 2019/10/28 20:28
   * author: hsy
   * 插入排序
   * @param array
   * @return int[]
   */
  public static int[] insertionSort(int[] array) {
      if (array.length == 0)
          return array;
      int current;
      for (int i = 0; i &lt; array.length - 1; i++) {
          current = array[i + 1];
          int preIndex = i;
          while (preIndex &gt;= 0 &amp;&amp; current &lt; array[preIndex]) {
              array[preIndex + 1] = array[preIndex];
              preIndex--;
          }
          array[preIndex + 1] = current;
      }
      return array;
  }
  
  /*
   * description: ShellSort
   * date: 2019/10/28 20:28
   * author: hsy
   * 希尔排序
   * @param array
   * @return int[]
   */
  public static int[] ShellSort(int[] array) {
      int len = array.length;
      int temp, gap = len / 2;
      while (gap &gt; 0) {
          for (int i = gap; i &lt; len; i++) {
              temp = array[i];
              int preIndex = i - gap;
              while (preIndex &gt;= 0 &amp;&amp; array[preIndex] &gt; temp) {
                  array[preIndex + gap] = array[preIndex];
                  preIndex -= gap;
              }
              array[preIndex + gap] = temp;
          }
          gap /= 2;
      }
      return array;
  }
  
  /*
   * description: MergeSort
   * date: 2019/10/28 20:30
   * author: hsy
   * 归并排序
   * @param array
   * @return int[]
   */
  public static int[] MergeSort(int[] array) {
      if (array.length &lt; 2) return array;
      int mid = array.length / 2;
      int[] left = Arrays.copyOfRange(array, 0, mid);
      int[] right = Arrays.copyOfRange(array, mid, array.length);
      return merge(MergeSort(left), MergeSort(right));
  }
  
  public static int[] merge(int[] left, int[] right) {
      int[] result = new int[left.length + right.length];
      for (int index = 0, i = 0, j = 0; index &lt; result.length; index++) {
          if (i &gt;= left.length)
              result[index] = right[j++];
          else if (j &gt;= right.length)
              result[index] = left[i++];
          else if (left[i] &gt; right[j])
              result[index] = right[j++];
          else
              result[index] = left[i++];
      }
      return result;
  }
  
  /*
   * description: QuickSort
   * date: 2019/10/28 20:33
   * author: hsy
   * 快速排序
   * @param array
   * @param start
   * @param end
   * @return int[]
   */
  public static int[] QuickSort(int[] array, int start, int end) {
      if (array.length &lt; 1 || start &lt; 0 || end &gt;= array.length || start &gt; end) return null;
      int smallIndex = partition(array, start, end);
      if (smallIndex &gt; start)
          QuickSort(array, start, smallIndex - 1);
      if (smallIndex &lt; end)
          QuickSort(array, smallIndex + 1, end);
      return array;
  }
  
  public static int partition(int[] array, int start, int end) {
      int pivot = (int) (start + Math.random() * (end - start + 1));
      int smallIndex = start - 1;
      swap(array, pivot, end);
      for (int i = start; i &lt;= end; i++)
          if (array[i] &lt;= array[end]) {
              smallIndex++;
              if (i &gt; smallIndex)
                  swap(array, i, smallIndex);
          }
      return smallIndex;
  }
  
  public static void swap(int[] array, int i, int j) {
      int temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  
  /*
   * description: HeapSort
   * date: 2019/10/28 20:34
   * author: hsy
   * 堆排序
   * @param array
   * @return int[]
   */
  //声明全局变量，用于记录数组array的长度；
  static int len;
  
  public static int[] HeapSort(int[] array) {
      len = array.length;
      if (len &lt; 1) return array;
      //1.构建一个最大堆
      buildMaxHeap(array);
      //2.循环将堆首位（最大值）与末位交换，然后在重新调整最大堆
      while (len &gt; 0) {
          swap(array, 0, len - 1);
          len--;
          adjustHeap(array, 0);
      }
      return array;
  }
  
  //建立最大堆
  public static void buildMaxHeap(int[] array) {
      //从最后一个非叶子节点开始向上构造最大堆
      for (int i = (len / 2 - 1); i &gt;= 0; i--) { //感谢 @让我发会呆 网友的提醒，此处应该为 i = (len/2 - 1)
          adjustHeap(array, i);
      }
  }
  
  //调整使之成为最大堆
  public static void adjustHeap(int[] array, int i) {
      int maxIndex = i;
      //如果有左子树，且左子树大于父节点，则将最大指针指向左子树
      if (i * 2 &lt; len &amp;&amp; array[i * 2] &gt; array[maxIndex])
          maxIndex = i * 2;
      //如果有右子树，且右子树大于父节点，则将最大指针指向右子树
      if (i * 2 + 1 &lt; len &amp;&amp; array[i * 2 + 1] &gt; array[maxIndex])
          maxIndex = i * 2 + 1;
      //如果父节点不是最大值，则将父节点与最大值交换，并且递归调整与父节点交换的位置。
      if (maxIndex != i) {
          swap(array, maxIndex, i);
          adjustHeap(array, maxIndex);
      }
  }
  
  /*
   * description: CountingSort
   * date: 2019/10/28 20:36
   * author: hsy
   * 计数排序
   * @param array
   * @return int[]
   */
  public static int[] CountingSort(int[] array) {
      if (array.length == 0) return array;
      int bias, min = array[0], max = array[0];
      for (int i = 1; i &lt; array.length; i++) {
          if (array[i] &gt; max)
              max = array[i];
          if (array[i] &lt; min)
              min = array[i];
      }
      bias = 0 - min;
      int[] bucket = new int[max - min + 1];
      Arrays.fill(bucket, 0);
      for (int i = 0; i &lt; array.length; i++) {
          bucket[array[i] + bias]++;
      }
      int index = 0, i = 0;
      while (index &lt; array.length) {
          if (bucket[i] != 0) {
              array[index] = i - bias;
              bucket[i]--;
              index++;
          } else
              i++;
      }
      return array;
  }
  
  /*
   * description: BucketSort
   * date: 2019/10/28 20:51
   * author: hsy
   * 桶排序
   * @param array
   * @param bucketSize
   * @return java.util.ArrayList&lt;java.lang.Integer&gt;
   */
  public static ArrayList&lt;Integer&gt; BucketSort(ArrayList&lt;Integer&gt; array, int bucketSize) {
      if (array == null || array.size() &lt; 2)
          return array;
      int max = array.get(0), min = array.get(0);
      // 找到最大值最小值
      for (int i = 0; i &lt; array.size(); i++) {
          if (array.get(i) &gt; max)
              max = array.get(i);
          if (array.get(i) &lt; min)
              min = array.get(i);
      }
      int bucketCount = (max - min) / bucketSize + 1;
      ArrayList&lt;ArrayList&lt;Integer&gt;&gt; bucketArr = new ArrayList&lt;&gt;(bucketCount);
      ArrayList&lt;Integer&gt; resultArr = new ArrayList&lt;&gt;();
      for (int i = 0; i &lt; bucketCount; i++) {
          bucketArr.add(new ArrayList&lt;Integer&gt;());
      }
      for (int i = 0; i &lt; array.size(); i++) {
          bucketArr.get((array.get(i) - min) / bucketSize).add(array.get(i));
      }
      for (int i = 0; i &lt; bucketCount; i++) {
          if (bucketSize == 1) { // 如果带排序数组中有重复数字时  感谢 @见风任然是风 朋友指出错误
              for (int j = 0; j &lt; bucketArr.get(i).size(); j++)
                  resultArr.add(bucketArr.get(i).get(j));
          } else {
              if (bucketCount == 1)
                  bucketSize--;
              ArrayList&lt;Integer&gt; temp = BucketSort(bucketArr.get(i), bucketSize);
              for (int j = 0; j &lt; temp.size(); j++)
                  resultArr.add(temp.get(j));
          }
      }
      return resultArr;
  }
  
  /*
   * description: RadixSort
   * date: 2019/10/28 20:52
   * author: hsy
   * 基数排序
   * @param array
   * @return int[]
   */
  public static int[] RadixSort(int[] array) {
      if (array == null || array.length &lt; 2)
          return array;
      // 1.先算出最大数的位数；
      int max = array[0];
      for (int i = 1; i &lt; array.length; i++) {
          max = Math.max(max, array[i]);
      }
      int maxDigit = 0;
      while (max != 0) {
          max /= 10;
          maxDigit++;
      }
      int mod = 10, div = 1;
      ArrayList&lt;ArrayList&lt;Integer&gt;&gt; bucketList = new ArrayList&lt;ArrayList&lt;Integer&gt;&gt;();
      for (int i = 0; i &lt; 10; i++)
          bucketList.add(new ArrayList&lt;Integer&gt;());
      for (int i = 0; i &lt; maxDigit; i++, mod *= 10, div *= 10) {
          for (int j = 0; j &lt; array.length; j++) {
              int num = (array[j] % mod) / div;
              bucketList.get(num).add(array[j]);
          }
          int index = 0;
          for (int j = 0; j &lt; bucketList.size(); j++) {
              for (int k = 0; k &lt; bucketList.get(j).size(); k++)
                  array[index++] = bucketList.get(j).get(k);
              bucketList.get(j).clear();
          }
      }
      return array;
  }
</code></pre></li></ul>`,16)]))}const c=r(e,[["render",l]]);export{o as __pageData,c as default};
