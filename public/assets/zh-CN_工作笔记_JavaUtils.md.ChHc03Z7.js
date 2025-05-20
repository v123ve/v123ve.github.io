import{_ as n,c as e,a3 as i,o as r}from"./chunks/framework.BaR4VHXY.js";const m=JSON.parse('{"title":"JavaUtils","description":"","frontmatter":{"Created at":"2019-10-22T00:00:00.000Z","Last updated at":"2020-09-11T00:00:00.000Z","tags":["java","DateUtil","FileUtil","JsonUtil","JsonResult","PageInfo","ParamCheckUtil","PropertyReader","HttpClientUtils","RedisMessage","RedisPublishUtil","Result"]},"headers":[],"relativePath":"zh-CN/工作笔记/JavaUtils.md","filePath":"zh-CN/工作笔记/JavaUtils.md","lastUpdated":null}'),a={name:"zh-CN/工作笔记/JavaUtils.md"};function o(l,t,s,p,u,c){return r(),e("div",null,t[0]||(t[0]=[i(`<h1 id="javautils" tabindex="-1">JavaUtils <a class="header-anchor" href="#javautils" aria-label="Permalink to &quot;JavaUtils&quot;">​</a></h1><h4 id="javautils-1" tabindex="-1">JavaUtils <a class="header-anchor" href="#javautils-1" aria-label="Permalink to &quot;JavaUtils&quot;">​</a></h4><h4 id="dateutil" tabindex="-1">DateUtil <a class="header-anchor" href="#dateutil" aria-label="Permalink to &quot;DateUtil&quot;">​</a></h4><pre><code>package minyuantec.securitysystem.common;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Locale;
/**
 * 日期时间工具类
 * 
 * @author sunflower
 * 
 */
public class DateUtils{
	private static final SimpleDateFormat datetimeFormat = new SimpleDateFormat(
			&quot;yyyy-MM-dd HH:mm:ss&quot;);
	private static final SimpleDateFormat dateFormat = new SimpleDateFormat(
			&quot;yyyy-MM-dd&quot;);
	private static final SimpleDateFormat timeFormat = new SimpleDateFormat(
			&quot;HH:mm:ss&quot;);
	private static final SimpleDateFormat timeFormat2 = new SimpleDateFormat(
			&quot;yyyyMMddHHmmss&quot;);
	private static final SimpleDateFormat timeFormatYMD = new SimpleDateFormat(
			&quot;yyyyMMdd&quot;);
	/**
	 * 获得当前日期时间
	 * &lt;p&gt;
	 * 日期时间格式yyyy-MM-dd HH:mm:ss
	 * 
	 * @return
	 */
	public static String currentDatetime() {
		return datetimeFormat.format(now());
	}
	/**
	 * 格式化日期时间
	 * &lt;p&gt;
	 * 日期时间格式yyyy-MM-dd HH:mm:ss
	 * 
	 * @return
	 */
	public static String formatDatetime(Date date) {
		return datetimeFormat.format(date);
	}
	/**
	 * 格式化日期时间
	 * 
	 * @param date
	 * @param pattern
	 *            格式化模式，详见{@link SimpleDateFormat}构造器
	 *            &lt;code&gt;SimpleDateFormat(String pattern)&lt;/code&gt;
	 * @return
	 */
	public static String formatDatetime(Date date, String pattern) {
		SimpleDateFormat customFormat = (SimpleDateFormat) datetimeFormat
				.clone();
		customFormat.applyPattern(pattern);
		return customFormat.format(date);
	}
	/**
	 * 获得当前日期
	 * &lt;p&gt;
	 * 日期格式yyyy-MM-dd
	 * 
	 * @return
	 */
	public static String currentDate() {
		return dateFormat.format(now());
	}
	/**
	 * 格式化日期
	 * &lt;p&gt;
	 * 日期格式yyyy-MM-dd
	 * 
	 * @return
	 */
	public static String formatDate(Date date) {
		return dateFormat.format(date);
	}
	/**
	 * 获得当前时间
	 * &lt;p&gt;
	 * 时间格式HH:mm:ss
	 * 
	 * @return
	 */
	public static String currentTime() {
		return timeFormat.format(now());
	}
	/**
	 * 格式化时间
	 * &lt;p&gt;
	 * 时间格式HH:mm:ss
	 * 
	 * @return
	 */
	public static String formatTime(Date date) {
		return timeFormat.format(date);
	}
	public static String formatTime2(Date date) {
		return timeFormat2.format(date);
	}
	public static String formatTimeYMD(Date date) {
		return timeFormatYMD.format(date);
	}
	/**
	 * 获得当前时间的&lt;code&gt;java.util.Date&lt;/code&gt;对象
	 * 
	 * @return
	 */
	public static Date now() {
		return new Date();
	}
	public static Calendar calendar() {
		Calendar cal = GregorianCalendar.getInstance(Locale.CHINESE);
		cal.setFirstDayOfWeek(Calendar.MONDAY);
		return cal;
	}
	/**
	 * 获得当前时间的毫秒数
	 * &lt;p&gt;
	 * 详见{@link System#currentTimeMillis()}
	 * 
	 * @return
	 */
	public static long millis() {
		return System.currentTimeMillis();
	}
	/**
	 * 
	 * 获得当前Chinese月份
	 * 
	 * @return
	 */
	public static int month() {
		return calendar().get(Calendar.MONTH) + 1;
	}
	/**
	 * 获得月份中的第几天
	 * 
	 * @return
	 */
	public static int dayOfMonth() {
		return calendar().get(Calendar.DAY_OF_MONTH);
	}
	/**
	 * 今天是星期的第几天
	 * 
	 * @return
	 */
	public static int dayOfWeek() {
		return calendar().get(Calendar.DAY_OF_WEEK);
	}
	/**
	 * 今天是年中的第几天
	 * 
	 * @return
	 */
	public static int dayOfYear() {
		return calendar().get(Calendar.DAY_OF_YEAR);
	}
	/**
	 *判断原日期是否在目标日期之前
	 * 
	 * @param src
	 * @param dst
	 * @return
	 */
	public static boolean isBefore(Date src, Date dst) {
		return src.before(dst);
	}
	/**
	 *判断原日期是否在目标日期之后
	 * 
	 * @param src
	 * @param dst
	 * @return
	 */
	public static boolean isAfter(Date src, Date dst) {
		return src.after(dst);
	}
	/**
	 *判断两日期是否相同
	 * 
	 * @param date1
	 * @param date2
	 * @return
	 */
	public static boolean isEqual(Date date1, Date date2) {
		return date1.compareTo(date2) == 0;
	}
	/**
	 * 判断某个日期是否在某个日期范围
	 * 
	 * @param beginDate
	 *            日期范围开始
	 * @param endDate
	 *            日期范围结束
	 * @param src
	 *            需要判断的日期
	 * @return
	 */
	public static boolean between(Date beginDate, Date endDate, Date src) {
		return beginDate.before(src) &amp;&amp; endDate.after(src);
	}
	/**
	 * 获得当前月的最后一天
	 * &lt;p&gt;
	 * HH:mm:ss为0，毫秒为999
	 * 
	 * @return
	 */
	public static Date lastDayOfMonth() {
		Calendar cal = calendar();
		cal.set(Calendar.DAY_OF_MONTH, 0); // M月置零
		cal.set(Calendar.HOUR_OF_DAY, 0);// H置零
		cal.set(Calendar.MINUTE, 0);// m置零
		cal.set(Calendar.SECOND, 0);// s置零
		cal.set(Calendar.MILLISECOND, 0);// S置零
		cal.set(Calendar.MONTH, cal.get(Calendar.MONTH) + 1);// 月份+1
		cal.set(Calendar.MILLISECOND, -1);// 毫秒-1
		return cal.getTime();
	}
	/**
	 * 获得当前月的第一天
	 * &lt;p&gt;
	 * HH:mm:ss SS为零
	 * 
	 * @return
	 */
	public static Date firstDayOfMonth() {
		Calendar cal = calendar();
		cal.set(Calendar.DAY_OF_MONTH, 1); // M月置1
		cal.set(Calendar.HOUR_OF_DAY, 0);// H置零
		cal.set(Calendar.MINUTE, 0);// m置零
		cal.set(Calendar.SECOND, 0);// s置零
		cal.set(Calendar.MILLISECOND, 0);// S置零
		return cal.getTime();
	}
	private static Date weekDay(int week) {
		Calendar cal = calendar();
		cal.set(Calendar.DAY_OF_WEEK, week);
		return cal.getTime();
	}
	/**
	 * 获得周五日期
	 * &lt;p&gt;
	 * 注：日历工厂方法{@link #calendar()}设置类每个星期的第一天为Monday，US等每星期第一天为sunday
	 * 
	 * @return
	 */
	public static Date friday() {
		return weekDay(Calendar.FRIDAY);
	}
	/**
	 * 获得周六日期
	 * &lt;p&gt;
	 * 注：日历工厂方法{@link #calendar()}设置类每个星期的第一天为Monday，US等每星期第一天为sunday
	 * 
	 * @return
	 */
	public static Date saturday() {
		return weekDay(Calendar.SATURDAY);
	}
	/**
	 * 获得周日日期
	 * &lt;p&gt;
	 * 注：日历工厂方法{@link #calendar()}设置类每个星期的第一天为Monday，US等每星期第一天为sunday
	 * 
	 * @return
	 */
	public static Date sunday() {
		return weekDay(Calendar.SUNDAY);
	}
	/**
	 * 将字符串日期时间转换成java.util.Date类型
	 * &lt;p&gt;
	 * 日期时间格式yyyy-MM-dd HH:mm:ss
	 * 
	 * @param datetime
	 * @return
	 */
	public static Date parseDatetime(String datetime) throws ParseException {
		return datetimeFormat.parse(datetime);
	}
	/**
	 * 将字符串日期转换成java.util.Date类型
	 *&lt;p&gt;
	 * 日期时间格式yyyy-MM-dd
	 * 
	 * @param date
	 * @return
	 * @throws ParseException
	 */
	public static Date parseDate(String date) throws ParseException {
		return dateFormat.parse(date);
	}
	/**
	 * 将字符串日期转换成java.util.Date类型
	 *&lt;p&gt;
	 * 时间格式 HH:mm:ss
	 * 
	 * @param time
	 * @return
	 * @throws ParseException
	 */
	public static Date parseTime(String time) throws ParseException {
		return timeFormat.parse(time);
	}
	/**
	 * 根据自定义pattern将字符串日期转换成java.util.Date类型
	 * 
	 * @param datetime
	 * @param pattern
	 * @return
	 * @throws ParseException
	 */
	public static Date parseDatetime(String datetime, String pattern)
			throws ParseException {
		SimpleDateFormat format = (SimpleDateFormat) datetimeFormat.clone();
		format.applyPattern(pattern);
		return format.parse(datetime);
	}
	/**
	 * 获得昨天
	 * 
	 * @return
	 */
	public static Date yesterDay() {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE,-1);
		return cal.getTime();
	}
	public static void main(String[] args) {
		 String date = DateUtils.formatTimeYMD(DateUtils.yesterDay());
		 System.out.println(date);
	}
}
</code></pre><h4 id="fileutil" tabindex="-1">FileUtil <a class="header-anchor" href="#fileutil" aria-label="Permalink to &quot;FileUtil&quot;">​</a></h4><pre><code>package minyuantec.securitysystem.common;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.channels.FileChannel.MapMode;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.UUID;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;
@SuppressWarnings(&quot;restriction&quot;)
public class FileUtils {
	private static Logger logger = Logger.getLogger(FileUtils.class);
	public static String NGINX_HOME = &quot;NGINX_IMAGES_HOME&quot;;
	// 上传头像
	public String upload_images(String dir, File file, String fileFileName, String fileContentType) {
		try {
			// 删除之前的文件夹
			// (new File(dir+dir2)).delete();
			InputStream in = new FileInputStream(file);
			// String dir =&quot;d://blackImg/&quot;;
			File fileLocation = new File(dir);
			// 此处也可以在应用根目录手动建立目标上传目录
			if (!fileLocation.exists()) {
				fileLocation.mkdir();
			}
			// String fileName=this.getFileFileName();
			File uploadFile = new File(dir, fileFileName);
			OutputStream out = new FileOutputStream(uploadFile);
			byte[] buffer = new byte[1024 * 1024];
			int length;
			while ((length = in.read(buffer)) &gt; 0) {
				out.write(buffer, 0, length);
			}
			in.close();
			out.close();
			return fileFileName;
		} catch (Exception ex) {
			logger.error(&quot;文件上传失败,&quot;, ex);
			System.out.println(&quot;上传失败!&quot;);
			ex.printStackTrace();
			return null;
		}
	}
	// 将url转化为base64格式
	public static String GetImageStrFromPath(String imgPath) {
		InputStream in = null;
		byte[] data = null;
		// 读取图片字节数组
		try {
			in = new FileInputStream(imgPath);
			data = new byte[in.available()];
			in.read(data);
			in.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		// 对字节数组Base64编码
		BASE64Encoder encoder = new BASE64Encoder();
		// 返回Base64编码过的字节数组字符串
		return encoder.encode(data);
	}
	public static void copyCapTurePic(String src, String target) {
		FileInputStream fis = null;
		FileOutputStream fos = null;
		FileChannel inFiC = null;
		FileChannel outFoC = null;
		int length = 2097152;
		try {
			fis = new FileInputStream(src);
			fos = new FileOutputStream(target);
			inFiC = fis.getChannel();
			outFoC = fos.getChannel();
			long startTime = System.currentTimeMillis();
			while (inFiC.position() != inFiC.size()) {
				if ((inFiC.size() - inFiC.position()) &lt; length) {
					length = (int) (inFiC.size() - inFiC.position());
				}
				MappedByteBuffer inbuffer = inFiC.map(MapMode.READ_ONLY, inFiC.position(), length);
				outFoC.write(inbuffer);
				inFiC.position(inFiC.position() + length);
			}
			long EndTime = System.currentTimeMillis();
			System.out.print(&quot;nioMappedCopy用了毫秒数：&quot;);
			System.out.println(EndTime - startTime);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (outFoC != null) {
					outFoC.close();
				}
				if (inFiC != null) {
					inFiC.close();
				}
				if (fos != null) {
					fos.close();
				}
				if (fis != null) {
					fis.close();
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	@SuppressWarnings(&quot;static-access&quot;)
	public static String fileUpload(String cardno, String base64Str, String path) {
		String filename = new DateUtils().formatTime2(new Date()) + &quot;_&quot; + cardno + &quot;.png&quot;;
		path = path + &quot;Img_link/captureImg/&quot;;
		// path=&quot;D://black/&quot;;
		// 去掉前面的data:image/png;base64,
		if (base64Str.indexOf(&quot;data:image/png;base64,&quot;) != -1) {
			base64Str = base64Str.replace(&quot;data:image/png;base64,&quot;, &quot;&quot;);
		}
		BASE64Decoder decoder = new BASE64Decoder();
		FileOutputStream out = null;
		try {
			// Base64解码
			byte[] b = decoder.decodeBuffer(base64Str);
			for (int i = 0; i &lt; b.length; ++i) {
				if (b[i] &lt; 0) {// 调整异常数据
					b[i] += 256;
				}
			}
			File dir = new File(path);
			// 如果这个目录不存在，则创建它。
			if (!dir.exists())
				dir.mkdir();
			path = path + filename;
			out = new FileOutputStream(path);
			out.write(b);
			out.flush();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			if (null != out) {
				try {
					out.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return (&quot;captureImg/&quot; + filename);
	}
	// 图片复制
	public static void copyFile(String src, String target) {
		File srcFile = new File(src);
		File targetFile = new File(target);
		try {
			InputStream in = new FileInputStream(srcFile);
			OutputStream out = new FileOutputStream(targetFile);
			byte[] bytes = new byte[1024];
			int len = -1;
			while ((len = in.read(bytes)) != -1) {
				out.write(bytes, 0, len);
			}
			in.close();
			out.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println(&quot;文件复制成功&quot;);
	}
	// 文件下载
	public static String downloadFile(File file, String fileName, String target) {
		String filePath = &quot;&quot;;
		File targetFile = new File(target);
		if (!targetFile.exists()) {
			targetFile.mkdirs();
		}
		try {
			InputStream in = new FileInputStream(file);
			OutputStream out = new FileOutputStream(target + fileName);
			byte[] bytes = new byte[1024];
			int len = -1;
			while ((len = in.read(bytes)) != -1) {
				out.write(bytes, 0, len);
			}
			in.close();
			out.close();
			filePath = target + fileName;
			logger.info(&quot;文件下载成功,文件路径:&quot; + filePath);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return filePath;
	}
	// 保存多张图片
	@SuppressWarnings(&quot;static-access&quot;)
	public static List&lt;String&gt; upLoadPics(File[] files, String dir, String fileContentType) {
		List&lt;String&gt; urlList = new ArrayList&lt;String&gt;();
		try {
			if (files != null &amp;&amp; files.length &gt; 0) {
				for (int i = 0; i &lt; files.length; i++) {
					File file = files[i];
					// 保存文件
					String fileName = new DateUtils().formatTime2(new Date()) + &quot;.png&quot;;
					String path = new FileUtils().upload_images(dir, file, fileName, fileContentType);
					logger.info(&quot;上传后的图片路径：&quot; + path);
					if (path == null) {
						logger.error(&quot;第&quot; + i + 1 + &quot;张图片上传失败&quot;);
					} else {
						// 记录url
						urlList.add(path);
					}
				}
			}
		} catch (Exception e) {
			logger.error(&quot;批量上传图片异常，异常信息：&quot; + e);
			urlList = null;
			e.printStackTrace();
		}
		return urlList;
	}
	/**
	 * 将Base64位编码的图片进行解码，并保存到指定目录
	 * 
	 * @param base64
	 *            base64编码的图片信息
	 * @return
	 */
	public static String decodeBase64ToImage(String base64, String path, String imgName) {
		logger.info(&quot;接收到base64解码并上传文件的请求,请求参数:解码前内容【&quot; + base64 + &quot;】,文件路径【&quot; + path + &quot;】,文件名【&quot; + imgName + &quot;】&quot;);
		String imgUrl = null;
		BASE64Decoder decoder = new BASE64Decoder();
		try {
			File file = new File(path);
			// 如果这个目录不存在，则创建它。
			if (!file.exists()) {
				file.mkdirs();
			}
			// 创建文件
			File uploadFile = new File(file, imgName);
			FileOutputStream write = new FileOutputStream(uploadFile);
			byte[] decoderBytes = decoder.decodeBuffer(base64);
			write.write(decoderBytes);
			imgUrl = path + imgName;
			write.close();
		} catch (IOException e) {
			logger.error(&quot;base64解码并上传文件异常,异常信息:&quot; + e);
			e.printStackTrace();
		}
		logger.info(&quot;解码并上传文件成功,返回文件地址【&quot; + imgUrl + &quot;】&quot;);
		return imgUrl;
	}
	/**
	 * @Title: getFileFormat
	 * @Description: TODO(获取文件格式)
	 * @param fileFileName
	 * @return
	 */
	public static String getFileFormat(String fileFileName) {
		String format = &quot;&quot;;
		try {
			format = fileFileName.substring(fileFileName.lastIndexOf(&quot;.&quot;), fileFileName.length());
		} catch (Exception e) {
			logger.error(&quot;获取文件格式失败&quot;, e);
			// e.printStackTrace();
		}
		return format;
	}
	/**
	 * 删除单个文件
	 * 
	 * @param fileName
	 *            被删除文件的文件名
	 * @return 单个文件删除成功返回true,否则返回false
	 */
	public static boolean deleteFile(String filePath) {
		try {
			File file = new File(filePath);
			if (file.isFile() &amp;&amp; file.exists()) {
				file.delete();
				logger.info(&quot;删除单个文件&quot; + filePath + &quot;成功！&quot;);
				return true;
			} else {
				logger.info(&quot;删除单个文件&quot; + filePath + &quot;失败！&quot;);
				return false;
			}
		} catch (Exception e) {
			logger.info(&quot;删除单个文件&quot; + filePath + &quot;失败！&quot;);
			return false;
		}
	}
	/**
	 * 遍历所有文件，压缩
	 *
	 * @param file
	 *            源文件目录
	 * @param parentPath
	 *            压缩文件目录
	 * @param zos
	 *            文件流
	 */
	public static void writeZip(File file, String parentPath, ZipOutputStream zos) {
		if (file.isDirectory()) {
			// 目录
			parentPath += file.getName() + File.separator;
			File[] files = file.listFiles();
			for (File f : files) {
				writeZip(f, parentPath, zos);
			}
		} else {
			// 文件
			try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream(file))) {
				// 指定zip文件夹
				ZipEntry zipEntry = new ZipEntry(parentPath + file.getName());
				zos.putNextEntry(zipEntry);
				int len;
				byte[] buffer = new byte[1024 * 10];
				while ((len = bis.read(buffer, 0, buffer.length)) != -1) {
					zos.write(buffer, 0, len);
					zos.flush();
				}
			} catch (Exception e) {
				e.printStackTrace();
				throw new RuntimeException(e.getMessage(), e.getCause());
			}
		}
	}
	/**
	 * 迭代删除文件夹
	 * 
	 * @param dirPath
	 *            文件夹路径
	 */
	public static void deleteDir(String dirPath) {
		int tryCount = 0;
		try {
			File file = new File(dirPath);
			if (file.exists()) {
				while (file.exists() &amp;&amp; tryCount++ &lt; 10) {
					// 回收资源
					System.gc();
					// 存在则删除
					if (file.isFile()) {
						file.delete();
					} else {
						File[] files = file.listFiles();
						if (files == null) {
							file.delete();
						} else {
							for (int i = 0; i &lt; files.length; i++) {
								deleteDir(files[i].getAbsolutePath());
							}
							file.delete();
						}
					}
				}
			} else {
				logger.debug(&quot;要删除的文件不存在,dirPath:&quot; + dirPath);
			}
		} catch (Exception e) {
			logger.error(&quot;删除文件夹失败,filePath:&quot; + dirPath);
			e.printStackTrace();
		}
	}
	/**
	 * @Title: getFileExbandedName
	 * @Description: TODO(获取文件扩展名)
	 * @return
	 */
	public static String getFileExbandedName(String fileName) {
		String exbandedName = &quot;&quot;;
		try {
			exbandedName = fileName.substring(fileName.lastIndexOf(&quot;.&quot;));
		} catch (Exception e) {
			logger.error(&quot;获取文件扩展名失败&quot;, e);
			e.printStackTrace();
		}
		return exbandedName;
	}
	/**
	 * @Title: setFileName
	 * @Description: TODO(设置文件名)
	 * @param mapPicFileName
	 * @return
	 */
	@SuppressWarnings(&quot;static-access&quot;)
	public static String setFileName(String mapPicFileName) {
		String newName = &quot;&quot;;
		try {
			String uuid = UUID.randomUUID().toString().replaceAll(&quot;-&quot;, &quot;&quot;);
			String exbandedName = getFileExbandedName(mapPicFileName);
			if (StringUtils.isNotBlank(exbandedName)) {
				newName = uuid + &quot;_&quot; + new DateUtils().formatTime2(new Date()) + exbandedName;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return newName;
	}
	/**
	 * @Title: getEnvByKey
	 * @Description: TODO(获取环境变量)
	 * @return
	 */
	public static String getEnvByKey(String key) {
		Map&lt;String, String&gt; map = System.getenv();
		Iterator&lt;Entry&lt;String, String&gt;&gt; it = map.entrySet().iterator();
		while (it.hasNext()) {
			Entry&lt;String, String&gt; entry = (Entry&lt;String, String&gt;) it.next();
			// logger.debug(entry.getKey());
			System.out.println(entry.getKey());
			if (entry.getKey().equals(key)) {
				logger.info(entry.getKey() + &quot;=&quot;);
				logger.info(entry.getValue());
				return entry.getValue().toString();
			}
		}
		logger.error(&quot;没有获取到&quot; + key + &quot;的环境变量&quot;);
		return &quot;&quot;;
	}
}
</code></pre><h4 id="jsonutil" tabindex="-1">JsonUtil <a class="header-anchor" href="#jsonutil" aria-label="Permalink to &quot;JsonUtil&quot;">​</a></h4><pre><code>package minyuantec.securitysystem.common;
import java.util.List;
import org.apache.log4j.Logger;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
public class JsonUtils {
	private static Logger logger = Logger.getLogger(JsonUtils.class);
	/**  
	* @Title: parseStrToBeanList  
	* @Description: TODO(json字符串转beanList)  
	* @param jsonStr 形如：&quot;{&quot;key&quot;:[{&#39;key&#39;:&#39;value&#39;,&#39;key&#39;:&#39;value&#39;},{&#39;key&#39;:&#39;value&#39;,&#39;key&#39;:&#39;value&#39;}]}&quot;
	* @param jsonKey
	* @param clazz
	* @return    
	*/ 
	@SuppressWarnings(&quot;static-access&quot;)
	public static &lt;T&gt; List&lt;T&gt; parseStrToBeanList(String jsonStr, String jsonKey,Class&lt;T&gt; clazz){
		List&lt;T&gt; list = null;
		try {
			JSONObject jsonObj = new JSONObject().parseObject(jsonStr);
			String valueStr = jsonObj.get(jsonKey).toString();
			list = JSONArray.parseArray(valueStr, clazz);
		} catch (Exception e) {
			logger.error(&quot;解析json字符串失败&quot;, e);
//			e.printStackTrace();
		}
		return list;
	}
	/**  
	* @Title: parseArray  
	* @Description: TODO(json字符串转beanList)  
	* @param jsonStr 形如：&quot;[{&#39;key&#39;:&#39;value&#39;,&#39;key&#39;:&#39;value&#39;},{&#39;key&#39;:&#39;value&#39;,&#39;key&#39;:&#39;value&#39;}]&quot;
	* @param clazz
	* @return    
	*/ 
	public static &lt;T&gt; List&lt;T&gt; parseArray(String jsonStr, Class&lt;T&gt; clazz){
		List&lt;T&gt; list = null;
		try {
			list = JSONArray.parseArray(jsonStr, clazz);
		} catch (Exception e) {
			logger.error(&quot;解析json字符串失败&quot;, e);
//			e.printStackTrace();
		}
		return list;
	}
}
</code></pre><h4 id="jsonresult" tabindex="-1">JsonResult <a class="header-anchor" href="#jsonresult" aria-label="Permalink to &quot;JsonResult&quot;">​</a></h4><pre><code>package minyuantec.securitysystem.common;
import java.io.Serializable;
import java.util.HashMap;
/*
 * 之前的项目一般引用自己工程中独立的JsonResult类，但两者完全是一样的。
 * 由于此类的普通使用，所以将其提取到kedacommon工程中，以后新的项目工程均应该直接引用此类
 */
/**
 * 描述一个用于JSON规范的结果集。此类一般用于Web工程，定义一套数据交互规范。服务器将数据（对象）包装，在相应的处理层（比如Struts-json）将实例转换成JSON字符串
 * ，再返回给客户端（浏览器），此规范常用于客户端AJAX请求的数据交互。
 * 
 * @author TaoPeng
 * @referenceBy 基本所有的WEB工程都使用了此类。
 */
public class JsonResult implements Serializable {
	private static final long serialVersionUID = 1L;
	private ResultConstant result;
	/** 哈西表用来存放待返回的数据 */
	private HashMap&lt;String, Object&gt; data = new HashMap&lt;String, Object&gt;();
	/**
	 * @deprecated 不建议直接获取全部属性。请使用{@link #getData(String)}
	 * @return
	 */
	public HashMap&lt;String, Object&gt; getData() {
		return data;
	}
	public Object getData(String key) {
		return data != null ? data.get(key) : null;
	}
	public void addData(String key, Object value) {
		data.put(key, value);
	}
	public ResultConstant getResult() {
		return result;
	}
	public void setResult(ResultConstant result) {
		this.result = result;
	}
	/**
	 * 清楚所有数据
	 */
	public void clear(){
		result = ResultConstant.SUCCESS_QUERY;
		if(this.data != null){
			this.data.clear();
		}
	}
}
</code></pre><h4 id="pageinfo" tabindex="-1">PageInfo <a class="header-anchor" href="#pageinfo" aria-label="Permalink to &quot;PageInfo&quot;">​</a></h4><pre><code>package minyuantec.securitysystem.common;
import java.io.Serializable;
import org.json.JSONException;
import org.json.JSONObject;
public class PageInfo implements Serializable {
private static final long serialVersionUID = 1L;
	/**
	 * 升序
	 */
	public static final String ASC = &quot;asc&quot;;
	/**
	 * 降序
	 */
	public static final String DESC = &quot;desc&quot;;
	public static final int maxPageSize = 1000;//返回的最大条数
	/**页码，首页的值是1.*/
	private int pageNumber = 1;
	/**每页数量*/
	private int pageSize = 10;
	/**排序关键字段*/
	private String sortName;
	/**排序类型*/
	private String sortOrder = &quot;asc&quot;;
	/**总数*/
	private int total = 0;
	//总页数
	private int pageCount;
	public int getPageCount() {
		return pageCount;
	}
	public void setPageCount(int pageCount) {
		this.pageCount = pageCount;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	/**
	 * 返回页码，首页的值是1.
	 * @return
	 */
	public int getPageNumber() {
		return pageNumber;
	}
	/**
	 * 设置页码，首页的值是1.
	 * @param pageNumber
	 */
	public void setPageNumber(int pageNumber) {
		this.pageNumber = pageNumber;
	}
	public int getPageSize() {
		return pageSize;
	}
	/**
	 * 设备每页数量
	 * @param pageSize
	 */
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public String getSortName() {
		return sortName;
	}
	public void setSortName(String sortName) {
		this.sortName = sortName;
	}
	public String getSortOrder() {
		return sortOrder;
	}
	public void setSortOrder(String sortOrder) {
		this.sortOrder = sortOrder;
	}
	public static PageInfo loadFromJson(JSONObject obj) throws JSONException {
		if(obj == null)
			return null;
		PageInfo info = new PageInfo();
		if(!obj.isNull(&quot;pageNumber&quot;))	
			info.setPageNumber(obj.getInt(&quot;pageNumber&quot;));
		if(!obj.isNull(&quot;pageSize&quot;))
			info.setPageSize(obj.getInt(&quot;pageSize&quot;));
		if(!obj.isNull(&quot;sortName&quot;))
			info.setSortName(obj.getString(&quot;sortName&quot;));
		if(!obj.isNull(&quot;sortOrder&quot;))
			info.setSortOrder(obj.getString(&quot;sortOrder&quot;));
		if(!obj.isNull(&quot;total&quot;))
			info.setTotal(obj.getInt(&quot;total&quot;));
		return info;
	}
	/**
	 * 返回当前分页状态是否有下一页
	 * @return
	 */
	public boolean hasNextPage(){
		int total = this.total;
		int pageSize = this.pageSize;
	    pageCount =(int) Math.ceil( total / (float)pageSize);//总页数
		return this.pageNumber &lt; pageCount;
	}
	/**
	 * 当前页的开始索引号（含）。
	 * @see #getEnd()
	 * @return 索引号。第一条记录的索引号为0.
	 */
	public int getStart(){
		pageCount = (int) Math.ceil( total / (float)pageSize);//总页数
		if(pageNumber&gt;pageCount){
			pageNumber = pageCount;
		}
		return (pageNumber-1) * pageSize;
	}
	/**
	 * 当前页的开始索引号（含）。
	 * @see #getEnd()
	 * @return 索引号。第一条记录的索引号为0.
	 */
	public int getStartIndex(){
		//在不获取total的情况下，用此方法
		return (pageNumber-1) * pageSize;
	}
	/**
	 * 当前页的结束索引号（含）。
	 * @see #getStart()
	 * @return 索引号。.
	 */
	public int getEnd(){
		int start = getStart();
		return start + pageSize - 1;
	}
	/**
	 * 移动页码，指向当面页的下一页。
	 */
	public void nextPage(){
		this.pageNumber ++;
	}
}
</code></pre><h4 id="paramcheckutil" tabindex="-1">ParamCheckUtil <a class="header-anchor" href="#paramcheckutil" aria-label="Permalink to &quot;ParamCheckUtil&quot;">​</a></h4><pre><code>package minyuantec.securitysystem.common;
//参数检查工具类
public class ParamCheckUtil {
	//检查分页查询参数
	public static boolean checkPageQueryParam( Integer pageSize,Integer pageNumber) {
		if(pageSize==null ||&quot;&quot;.equals(pageSize) || pageNumber==null ||&quot;&quot;.equals(pageNumber)){
			return false;
		}
		if (pageSize &gt; PageInfo.maxPageSize || pageSize &lt;= 0 || pageNumber &lt;= 0) {
			return false;
		}
		return true;
	}
	public static boolean isEmpty(String str){
		if(str==null ||&quot;&quot;.equals(str)){
			return true;
		}
		return false;
	}
	public static void main(String[] args) {
	}
}
</code></pre><h4 id="propertyreader" tabindex="-1">PropertyReader <a class="header-anchor" href="#propertyreader" aria-label="Permalink to &quot;PropertyReader&quot;">​</a></h4><pre><code>package minyuantec.securitysystem.common;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;
import org.apache.log4j.Logger;
public class PropertyReader {
	 private static Logger logger = Logger.getLogger(PropertyReader.class);
	/*
	 * 获得数据库链接的配置文件
	 */
	public static Map&lt;String,String&gt; getProperties(){
		logger.info(&quot;读取redis配置文件开始。。。&quot;);
		 Properties prop = new Properties();     
		 Map&lt;String,String&gt; proMap  = new HashMap&lt;String,String&gt;();
		try {
			 //读取属性文件redis.properties
			InputStream in= PropertyReader.class.getClassLoader().getResourceAsStream(&quot;redis.properties&quot;);  
			prop.load(in);     ///加载属性列表
            Iterator&lt;String&gt; it=prop.stringPropertyNames().iterator();
            while(it.hasNext()){
                String key=it.next();
                proMap.put(key, prop.getProperty(key));
            }
            in.close();
            logger.info(&quot;读取redis配置文件成功。。。&quot;);
		} catch (Exception e) {
			logger.error(&quot;读取redis配置文件异常！&quot;, e);
			e.printStackTrace();
		}
		return proMap;
	}
}
</code></pre><h4 id="httpclientutils" tabindex="-1">HttpClientUtils <a class="header-anchor" href="#httpclientutils" aria-label="Permalink to &quot;HttpClientUtils&quot;">​</a></h4><pre><code>package minyuantec.securitysystem.common;
import java.io.IOException;
import java.io.InputStream;
import java.io.InterruptedIOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TimerTask;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import javax.net.ssl.SSLException;
import javax.net.ssl.SSLHandshakeException;
import org.apache.commons.io.IOUtils;
import org.apache.http.HttpEntity;
import org.apache.http.HttpEntityEnclosingRequest;
import org.apache.http.HttpHost;
import org.apache.http.HttpRequest;
import org.apache.http.NameValuePair;
import org.apache.http.NoHttpResponseException;
import org.apache.http.client.HttpRequestRetryHandler;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.ConnectTimeoutException;
import org.apache.http.conn.routing.HttpRoute;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.LayeredConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HttpContext;
import org.apache.http.util.EntityUtils;
import org.apache.log4j.Logger;
import minyuantec.securitysystem.bean.HttpClientConfig;
public class HttpClientUtils {
	private final static Logger logger = Logger.getLogger(HttpClientUtils.class);
	private static CloseableHttpClient httpClient;
	private static PoolingHttpClientConnectionManager manager; // 连接池管理类
	private static ScheduledExecutorService monitorExecutor; // 监控
	private final static Object syncLock = new Object(); // 相当于线程锁,用于线程安全
	private static final int CONNECT_TIMEOUT = HttpClientConfig.getHttpConnectTimeout();// 设置连接建立的超时时间为10s
	private static final int SOCKET_TIMEOUT = HttpClientConfig.getHttpSocketTimeout();
	private static final int MAX_CONN = HttpClientConfig.getHttpMaxPoolSize(); // 最大连接数
	private static final int Max_PRE_ROUTE = HttpClientConfig.getHttpMaxPoolSize();
	private static final int MAX_ROUTE = HttpClientConfig.getHttpMaxPoolSize();
	public static String doPost(String url, Map&lt;String, String&gt; params) {
		HttpPost httpPost = new HttpPost(url);
		setRequestConfig(httpPost);
		if (params != null) {
			setPostParams(httpPost, params);
		}
		CloseableHttpResponse response = null;
		InputStream in = null;
		String result = null;
		try {
			response = getHttpClient(url).execute(httpPost, HttpClientContext.create());
			HttpEntity entity = response.getEntity();
			if (entity != null) {
				in = entity.getContent();
				result = IOUtils.toString(in, &quot;utf-8&quot;);
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (in != null)
					in.close();
				if (response != null)
					response.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return result;
	}
	/**
	 * 设置post请求的参数
	 * 
	 * @param httpPost
	 * @param params
	 */
	private static void setPostParams(HttpPost httpPost, Map&lt;String, String&gt; params) {
		List&lt;NameValuePair&gt; nvps = new ArrayList&lt;NameValuePair&gt;();
		Set&lt;String&gt; keys = params.keySet();
		for (String key : keys) {
			nvps.add(new BasicNameValuePair(key, params.get(key)));
		}
		try {
			httpPost.setEntity(new UrlEncodedFormEntity(nvps, &quot;utf-8&quot;));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
	}
	public static String doPost(String url) {
		return doPost(url, null);
	}
	public static String doPostJson(String url, String json) {
		HttpPost httpPost = new HttpPost(url);
		setRequestConfig(httpPost);
		String resultString = &quot;&quot;;
		CloseableHttpResponse response = null;
		try {
			// 创建请求内容
			StringEntity entity = new StringEntity(json, ContentType.APPLICATION_JSON);
			httpPost.setEntity(entity);
			// 执行http请求
			response = getHttpClient(url).execute(httpPost, HttpClientContext.create());
			resultString = EntityUtils.toString(response.getEntity(), &quot;utf-8&quot;);
		} catch (Exception e) {
			logger.error(&quot;httpclient的post请求失败,url:&quot; + url, e);
			// e.printStackTrace();
		} finally {
			try {
				if (response != null)
					response.close();
			} catch (IOException e) {
				logger.error(&quot;IOException的错误&quot;, e);
				// e.printStackTrace();
			}
		}
		return resultString;
	}
	public static String doGetJson(String url, String json) {
		String resultString = &quot;&quot;;
		CloseableHttpResponse response = null;
		try {
			// 创建Get请求
			// HttpGet httpGet = new HttpGet(url + &quot;?&quot; + json);
			HttpGet httpGet = new HttpGet(url);
			setRequestConfig(httpGet);
			// 执行http请求
			response = getHttpClient(url).execute(httpGet, HttpClientContext.create());
			resultString = EntityUtils.toString(response.getEntity(), &quot;utf-8&quot;);
		} catch (Exception e) {
			logger.error(&quot;httpclient的get请求失败,url:&quot; + url, e);
			// e.printStackTrace();
		} finally {
			try {
				if (response != null)
					response.close();
			} catch (IOException e) {
				logger.error(&quot;IOException的错误&quot;, e);
				// e.printStackTrace();
			}
		}
		return resultString;
	}
	public static String doGet(String url, Map&lt;String, String&gt; param) {
		// 创建Httpclient对象
		CloseableHttpClient httpclient = HttpClients.createDefault();
		String resultString = &quot;&quot;;
		CloseableHttpResponse response = null;
		try {
			// 创建uri
			URIBuilder builder = new URIBuilder(url);
			if (param != null) {
				for (String key : param.keySet()) {
					builder.addParameter(key, param.get(key));
				}
			}
			URI uri = builder.build();
			// 创建http GET请求
			HttpGet httpGet = new HttpGet(uri);
			// 执行请求
			response = getHttpClient(url).execute(httpGet, HttpClientContext.create());
			// 判断返回状态是否为200
			if (response.getStatusLine().getStatusCode() == 200) {
				resultString = EntityUtils.toString(response.getEntity(), &quot;UTF-8&quot;);
			}
		} catch (Exception e) {
			logger.error(&quot;httpclient的get请求失败,url:&quot; + url, e);
			e.printStackTrace();
		} finally {
			try {
				if (response != null) {
					response.close();
				}
				httpclient.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return resultString;
	}
	public static String doGet(String url) {
		return doGet(url, null);
	}
	/**
	 * 对http请求进行基本设置
	 * 
	 * @param httpRequestBase
	 *            http请求
	 */
	private static void setRequestConfig(HttpRequestBase httpRequestBase) {
		RequestConfig requestConfig = RequestConfig.custom().setConnectionRequestTimeout(CONNECT_TIMEOUT)
				.setConnectTimeout(CONNECT_TIMEOUT).setSocketTimeout(SOCKET_TIMEOUT).build();
		httpRequestBase.setConfig(requestConfig);
	}
	public static CloseableHttpClient getHttpClient(String url) {
		String hostName = url.split(&quot;/&quot;)[2];
		// System.out.println(hostName);
		int port = 80;
		if (hostName.contains(&quot;:&quot;)) {
			String[] args = hostName.split(&quot;:&quot;);
			hostName = args[0];
			port = Integer.parseInt(args[1]);
		}
		if (httpClient == null) {
			// 多线程下多个线程同时调用getHttpClient容易导致重复创建httpClient对象的问题,所以加上了同步锁
			synchronized (syncLock) {
				if (httpClient == null) {
					httpClient = createHttpClient(hostName, port);
					// 开启监控线程,对异常和空闲线程进行关闭
					monitorExecutor = Executors.newScheduledThreadPool(1);
					monitorExecutor.scheduleAtFixedRate(new TimerTask() {
						@Override
						public void run() {
							// 关闭异常连接
							manager.closeExpiredConnections();
							// 关闭5s空闲的连接
							manager.closeIdleConnections(HttpClientConfig.getHttpIdelTimeout(), TimeUnit.MILLISECONDS);
							logger.debug(&quot;close expired and idle for over 5s connection&quot;);
						}
					}, HttpClientConfig.getHttpMonitorInterval(), HttpClientConfig.getHttpMonitorInterval(),
							TimeUnit.MILLISECONDS);
				}
			}
		}
		return httpClient;
	}
	/**
	 * 根据host和port构建httpclient实例
	 * 
	 * @param host
	 *            要访问的域名
	 * @param port
	 *            要访问的端口
	 * @return
	 */
	public static CloseableHttpClient createHttpClient(String host, int port) {
		ConnectionSocketFactory plainSocketFactory = PlainConnectionSocketFactory.getSocketFactory();
		LayeredConnectionSocketFactory sslSocketFactory = SSLConnectionSocketFactory.getSocketFactory();
		Registry&lt;ConnectionSocketFactory&gt; registry = RegistryBuilder.&lt;ConnectionSocketFactory&gt; create()
				.register(&quot;http&quot;, plainSocketFactory).register(&quot;https&quot;, sslSocketFactory).build();
		manager = new PoolingHttpClientConnectionManager(registry);
		// 设置连接参数
		manager.setMaxTotal(MAX_CONN); // 最大连接数
		manager.setDefaultMaxPerRoute(Max_PRE_ROUTE); // 路由最大连接数
		HttpHost httpHost = new HttpHost(host, port);
		manager.setMaxPerRoute(new HttpRoute(httpHost), MAX_ROUTE);
		// 请求失败时,进行请求重试
		HttpRequestRetryHandler handler = new HttpRequestRetryHandler() {
			@Override
			public boolean retryRequest(IOException e, int i, HttpContext httpContext) {
				if (i &gt; 3) {
					// 重试超过3次,放弃请求
					logger.error(&quot;retry has more than 3 time, give up request&quot;);
					return false;
				}
				if (e instanceof NoHttpResponseException) {
					// 服务器没有响应,可能是服务器断开了连接,应该重试
					logger.error(&quot;receive no response from server, retry&quot;);
					return true;
				}
				if (e instanceof SSLHandshakeException) {
					// SSL握手异常
					logger.error(&quot;SSL hand shake exception&quot;);
					return false;
				}
				if (e instanceof InterruptedIOException) {
					// 超时
					logger.error(&quot;InterruptedIOException&quot;);
					return false;
				}
				if (e instanceof UnknownHostException) {
					// 服务器不可达
					logger.error(&quot;server host unknown&quot;);
					return false;
				}
				if (e instanceof ConnectTimeoutException) {
					// 连接超时
					logger.error(&quot;Connection Time out&quot;);
					return false;
				}
				if (e instanceof SSLException) {
					logger.error(&quot;SSLException&quot;);
					return false;
				}
				HttpClientContext context = HttpClientContext.adapt(httpContext);
				HttpRequest request = context.getRequest();
				if (!(request instanceof HttpEntityEnclosingRequest)) {
					// 如果请求不是关闭连接的请求
					return true;
				}
				return false;
			}
		};
		CloseableHttpClient client = HttpClients.custom().setConnectionManager(manager).setRetryHandler(handler)
				.build();
		return client;
	}
	/**
	 * 关闭连接池
	 */
	public static void closeConnectionPool() {
		try {
			httpClient.close();
			manager.close();
			monitorExecutor.shutdown();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
</code></pre><h4 id="redismessage" tabindex="-1">RedisMessage <a class="header-anchor" href="#redismessage" aria-label="Permalink to &quot;RedisMessage&quot;">​</a></h4><pre><code>package minyuantec.securitysystem.common;
import java.io.Serializable;
public class RedisMessage implements Serializable {
	private static final long serialVersionUID = 1L;
	private String msgType;//消息类型/消息通道
	private String configType;//配置类型,包括：“add”，“modify”，“del”
	private String configObjType;//对象配置类型 包括：“accessPlat”，“videoAnalyseTask”，“repositories” ，“repositoriesPerson”
	private String configObjID;//对象标识,具体对象的标识
	public String getMsgType() {
		return msgType;
	}
	public void setMsgType(String msgType) {
		this.msgType = msgType;
	}
	public String getConfigType() {
		return configType;
	}
	public void setConfigType(String configType) {
		this.configType = configType;
	}
	public String getConfigObjType() {
		return configObjType;
	}
	public void setConfigObjType(String configObjType) {
		this.configObjType = configObjType;
	}
	public String getConfigObjID() {
		return configObjID;
	}
	public void setConfigObjID(String configObjID) {
		this.configObjID = configObjID;
	}
}
</code></pre><h4 id="redispublishutil" tabindex="-1">RedisPublishUtil <a class="header-anchor" href="#redispublishutil" aria-label="Permalink to &quot;RedisPublishUtil&quot;">​</a></h4><pre><code>package minyuantec.securitysystem.common;
import java.util.Map;
import org.apache.log4j.Logger;
import net.sf.json.JSONObject;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.exceptions.JedisConnectionException;
public class RedisPublishUtil {
	private Logger logger = Logger.getLogger(RedisPublishUtil.class);
	public static Jedis pubJedis;
	private static Map&lt;String, String&gt; proMap = PropertyReader.getProperties();
	private static final String redisPort = proMap.get(&quot;redis.port&quot;);
	private static String url = proMap.get(&quot;redis.host&quot;);
	private static final int port = Integer.parseInt(redisPort);
	public void setPubJedis(Jedis jedis) {
		RedisPublishUtil.pubJedis = jedis;
	}
	// 公共发布接口
	/*public void pubMessage(String channel, String msg) {
		pubJedis.publish(channel, msg);
	}*/
	public Jedis getPubJedis() {
		if (pubJedis == null) {
			createJedisConnect();
		}
		// 返回对象
		return pubJedis;
	}
	public Jedis createJedisConnect(){
		// 连接redis
		logger.info(&quot;===创建连接jedis=====&quot;);
		try {
			pubJedis = new Jedis(url, port);
		} catch (JedisConnectionException e) {
			logger.error(&quot;Jedis连接异常,异常信息 :&quot; + e.getMessage());
			try {
				Thread.sleep(1000);
				logger.info(&quot;发起重新连接jedis&quot;);
				createJedisConnect();
			} catch (InterruptedException except) {
				except.printStackTrace();
			}
		}
		// 返回对象
		return pubJedis;
	}
	/**
	 * @Title: pubConfigMsg
	 * @Description: TODO(发布配置相关消息)
	 * @param msgType
	 *            消息类型/消息通道
	 * @param configType
	 *            配置类型,包括：“add”，“modify”，“del”
	 * @param configObjType
	 *            对象配置类型,包括：“accessPlat”，“videoAnalyseTask”，“repositories，“
	 *            repositoriesPerson”
	 * @param configObjID
	 *            对象标识,具体对象的标识
	 */
	public void pubConfigMsg(String msgType, String configType, String configObjType, String configObjID) {
		RedisMessage redisMessage = new RedisMessage();
		// 消息类型/消息通道
		redisMessage.setMsgType(msgType);
		// 配置类型,包括：“add”，“modify”，“del”
		redisMessage.setConfigType(configType);
		// 对象配置类型
		// 包括：“accessPlat”，“restartDetectionReq”
		redisMessage.setConfigObjType(configObjType);
		// 对象标识,具体对象的标识
		redisMessage.setConfigObjID(configObjID);
		// 将对象转json
		JSONObject json = JSONObject.fromObject(redisMessage);
		String msg = json.toString();
		// 调用接口发布消息
		logger.info(&quot;redis准备发布消息内容：&quot; + msg);
		try {
			this.getPubJedis().publish(msgType, msg);
		} catch (JedisConnectionException e) {
			logger.error(&quot;redis发布消息失败！&quot;, e);
			this.setPubJedis(null);
			logger.info(&quot;重新发布消息，channel=&quot;+msgType);
			pubConfigMsg(msgType, configType, configObjType, configObjID);
		}
	}
	public void pubRedisMsg(String msgType,String msg){
		logger.info(&quot;redis准备发布消息内容：&quot; + msg);
		try {
			this.getPubJedis().publish(msgType, msg);
		} catch (JedisConnectionException e) {
			logger.error(&quot;redis发布消息失败！&quot;, e);
			this.setPubJedis(null);
			logger.info(&quot;重新发布消息，channel=&quot;+msgType);
			pubRedisMsg(msgType, msg);
		}
	}
}
</code></pre><h4 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-label="Permalink to &quot;Result&quot;">​</a></h4><pre><code>package minyuantec.securitysystem.common;
import java.io.Serializable;
/*
 * 之前的项目一般引用自己工程中独立的JsonResult类，但两者完全是一样的。
 * 由于此类的普通使用，所以将其提取到kedacommon工程中，以后新的项目工程均应该直接引用此类
 */
/**
 * 描述一个用于JSON规范的结果集。此类一般用于Web工程，定义一套数据交互规范。服务器将数据（对象）包装，在相应的处理层（比如Struts-json）将实例转换成JSON字符串
 * ，再返回给客户端（浏览器），此规范常用于客户端AJAX请求的数据交互。
 * 
 * @author TaoPeng
 * @referenceBy 基本所有的WEB工程都使用了此类。
 */
public class Result implements Serializable {
	private static final long serialVersionUID = 1L;
	private int code;
	private String message;
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
</code></pre>`,24)]))}const d=n(a,[["render",o]]);export{m as __pageData,d as default};
