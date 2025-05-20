---

Created at: 2019-10-22
Last updated at: 2020-09-11
tags: 
  - java
  - DateUtil
  - FileUtil
  - JsonUtil
  - JsonResult
  - PageInfo
  - ParamCheckUtil
  - PropertyReader
  - HttpClientUtils
  - RedisMessage
  - RedisPublishUtil
  - Result

---

# JavaUtils


#### JavaUtils

#### DateUtil

    package minyuantec.securitysystem.common;
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
    			"yyyy-MM-dd HH:mm:ss");
    	private static final SimpleDateFormat dateFormat = new SimpleDateFormat(
    			"yyyy-MM-dd");
    	private static final SimpleDateFormat timeFormat = new SimpleDateFormat(
    			"HH:mm:ss");
    	private static final SimpleDateFormat timeFormat2 = new SimpleDateFormat(
    			"yyyyMMddHHmmss");
    	private static final SimpleDateFormat timeFormatYMD = new SimpleDateFormat(
    			"yyyyMMdd");
    	/**
    	 * 获得当前日期时间
    	 * <p>
    	 * 日期时间格式yyyy-MM-dd HH:mm:ss
    	 * 
    	 * @return
    	 */
    	public static String currentDatetime() {
    		return datetimeFormat.format(now());
    	}
    	/**
    	 * 格式化日期时间
    	 * <p>
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
    	 *            <code>SimpleDateFormat(String pattern)</code>
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
    	 * <p>
    	 * 日期格式yyyy-MM-dd
    	 * 
    	 * @return
    	 */
    	public static String currentDate() {
    		return dateFormat.format(now());
    	}
    	/**
    	 * 格式化日期
    	 * <p>
    	 * 日期格式yyyy-MM-dd
    	 * 
    	 * @return
    	 */
    	public static String formatDate(Date date) {
    		return dateFormat.format(date);
    	}
    	/**
    	 * 获得当前时间
    	 * <p>
    	 * 时间格式HH:mm:ss
    	 * 
    	 * @return
    	 */
    	public static String currentTime() {
    		return timeFormat.format(now());
    	}
    	/**
    	 * 格式化时间
    	 * <p>
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
    	 * 获得当前时间的<code>java.util.Date</code>对象
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
    	 * <p>
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
    		return beginDate.before(src) && endDate.after(src);
    	}
    	/**
    	 * 获得当前月的最后一天
    	 * <p>
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
    	 * <p>
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
    	 * <p>
    	 * 注：日历工厂方法{@link #calendar()}设置类每个星期的第一天为Monday，US等每星期第一天为sunday
    	 * 
    	 * @return
    	 */
    	public static Date friday() {
    		return weekDay(Calendar.FRIDAY);
    	}
    	/**
    	 * 获得周六日期
    	 * <p>
    	 * 注：日历工厂方法{@link #calendar()}设置类每个星期的第一天为Monday，US等每星期第一天为sunday
    	 * 
    	 * @return
    	 */
    	public static Date saturday() {
    		return weekDay(Calendar.SATURDAY);
    	}
    	/**
    	 * 获得周日日期
    	 * <p>
    	 * 注：日历工厂方法{@link #calendar()}设置类每个星期的第一天为Monday，US等每星期第一天为sunday
    	 * 
    	 * @return
    	 */
    	public static Date sunday() {
    		return weekDay(Calendar.SUNDAY);
    	}
    	/**
    	 * 将字符串日期时间转换成java.util.Date类型
    	 * <p>
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
    	 *<p>
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
    	 *<p>
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


#### FileUtil

    package minyuantec.securitysystem.common;
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
    @SuppressWarnings("restriction")
    public class FileUtils {
    	private static Logger logger = Logger.getLogger(FileUtils.class);
    	public static String NGINX_HOME = "NGINX_IMAGES_HOME";
    	// 上传头像
    	public String upload_images(String dir, File file, String fileFileName, String fileContentType) {
    		try {
    			// 删除之前的文件夹
    			// (new File(dir+dir2)).delete();
    			InputStream in = new FileInputStream(file);
    			// String dir ="d://blackImg/";
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
    			while ((length = in.read(buffer)) > 0) {
    				out.write(buffer, 0, length);
    			}
    			in.close();
    			out.close();
    			return fileFileName;
    		} catch (Exception ex) {
    			logger.error("文件上传失败,", ex);
    			System.out.println("上传失败!");
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
    				if ((inFiC.size() - inFiC.position()) < length) {
    					length = (int) (inFiC.size() - inFiC.position());
    				}
    				MappedByteBuffer inbuffer = inFiC.map(MapMode.READ_ONLY, inFiC.position(), length);
    				outFoC.write(inbuffer);
    				inFiC.position(inFiC.position() + length);
    			}
    			long EndTime = System.currentTimeMillis();
    			System.out.print("nioMappedCopy用了毫秒数：");
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
    	@SuppressWarnings("static-access")
    	public static String fileUpload(String cardno, String base64Str, String path) {
    		String filename = new DateUtils().formatTime2(new Date()) + "_" + cardno + ".png";
    		path = path + "Img_link/captureImg/";
    		// path="D://black/";
    		// 去掉前面的data:image/png;base64,
    		if (base64Str.indexOf("data:image/png;base64,") != -1) {
    			base64Str = base64Str.replace("data:image/png;base64,", "");
    		}
    		BASE64Decoder decoder = new BASE64Decoder();
    		FileOutputStream out = null;
    		try {
    			// Base64解码
    			byte[] b = decoder.decodeBuffer(base64Str);
    			for (int i = 0; i < b.length; ++i) {
    				if (b[i] < 0) {// 调整异常数据
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
    		return ("captureImg/" + filename);
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
    		System.out.println("文件复制成功");
    	}
    	// 文件下载
    	public static String downloadFile(File file, String fileName, String target) {
    		String filePath = "";
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
    			logger.info("文件下载成功,文件路径:" + filePath);
    		} catch (FileNotFoundException e) {
    			e.printStackTrace();
    		} catch (IOException e) {
    			e.printStackTrace();
    		}
    		return filePath;
    	}
    	// 保存多张图片
    	@SuppressWarnings("static-access")
    	public static List<String> upLoadPics(File[] files, String dir, String fileContentType) {
    		List<String> urlList = new ArrayList<String>();
    		try {
    			if (files != null && files.length > 0) {
    				for (int i = 0; i < files.length; i++) {
    					File file = files[i];
    					// 保存文件
    					String fileName = new DateUtils().formatTime2(new Date()) + ".png";
    					String path = new FileUtils().upload_images(dir, file, fileName, fileContentType);
    					logger.info("上传后的图片路径：" + path);
    					if (path == null) {
    						logger.error("第" + i + 1 + "张图片上传失败");
    					} else {
    						// 记录url
    						urlList.add(path);
    					}
    				}
    			}
    		} catch (Exception e) {
    			logger.error("批量上传图片异常，异常信息：" + e);
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
    		logger.info("接收到base64解码并上传文件的请求,请求参数:解码前内容【" + base64 + "】,文件路径【" + path + "】,文件名【" + imgName + "】");
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
    			logger.error("base64解码并上传文件异常,异常信息:" + e);
    			e.printStackTrace();
    		}
    		logger.info("解码并上传文件成功,返回文件地址【" + imgUrl + "】");
    		return imgUrl;
    	}
    	/**
    	 * @Title: getFileFormat
    	 * @Description: TODO(获取文件格式)
    	 * @param fileFileName
    	 * @return
    	 */
    	public static String getFileFormat(String fileFileName) {
    		String format = "";
    		try {
    			format = fileFileName.substring(fileFileName.lastIndexOf("."), fileFileName.length());
    		} catch (Exception e) {
    			logger.error("获取文件格式失败", e);
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
    			if (file.isFile() && file.exists()) {
    				file.delete();
    				logger.info("删除单个文件" + filePath + "成功！");
    				return true;
    			} else {
    				logger.info("删除单个文件" + filePath + "失败！");
    				return false;
    			}
    		} catch (Exception e) {
    			logger.info("删除单个文件" + filePath + "失败！");
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
    				while (file.exists() && tryCount++ < 10) {
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
    							for (int i = 0; i < files.length; i++) {
    								deleteDir(files[i].getAbsolutePath());
    							}
    							file.delete();
    						}
    					}
    				}
    			} else {
    				logger.debug("要删除的文件不存在,dirPath:" + dirPath);
    			}
    		} catch (Exception e) {
    			logger.error("删除文件夹失败,filePath:" + dirPath);
    			e.printStackTrace();
    		}
    	}
    	/**
    	 * @Title: getFileExbandedName
    	 * @Description: TODO(获取文件扩展名)
    	 * @return
    	 */
    	public static String getFileExbandedName(String fileName) {
    		String exbandedName = "";
    		try {
    			exbandedName = fileName.substring(fileName.lastIndexOf("."));
    		} catch (Exception e) {
    			logger.error("获取文件扩展名失败", e);
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
    	@SuppressWarnings("static-access")
    	public static String setFileName(String mapPicFileName) {
    		String newName = "";
    		try {
    			String uuid = UUID.randomUUID().toString().replaceAll("-", "");
    			String exbandedName = getFileExbandedName(mapPicFileName);
    			if (StringUtils.isNotBlank(exbandedName)) {
    				newName = uuid + "_" + new DateUtils().formatTime2(new Date()) + exbandedName;
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
    		Map<String, String> map = System.getenv();
    		Iterator<Entry<String, String>> it = map.entrySet().iterator();
    		while (it.hasNext()) {
    			Entry<String, String> entry = (Entry<String, String>) it.next();
    			// logger.debug(entry.getKey());
    			System.out.println(entry.getKey());
    			if (entry.getKey().equals(key)) {
    				logger.info(entry.getKey() + "=");
    				logger.info(entry.getValue());
    				return entry.getValue().toString();
    			}
    		}
    		logger.error("没有获取到" + key + "的环境变量");
    		return "";
    	}
    }


#### JsonUtil

    package minyuantec.securitysystem.common;
    import java.util.List;
    import org.apache.log4j.Logger;
    import com.alibaba.fastjson.JSONArray;
    import com.alibaba.fastjson.JSONObject;
    public class JsonUtils {
    	private static Logger logger = Logger.getLogger(JsonUtils.class);
    	/**  
    	* @Title: parseStrToBeanList  
    	* @Description: TODO(json字符串转beanList)  
    	* @param jsonStr 形如："{"key":[{'key':'value','key':'value'},{'key':'value','key':'value'}]}"
    	* @param jsonKey
    	* @param clazz
    	* @return    
    	*/ 
    	@SuppressWarnings("static-access")
    	public static <T> List<T> parseStrToBeanList(String jsonStr, String jsonKey,Class<T> clazz){
    		List<T> list = null;
    		try {
    			JSONObject jsonObj = new JSONObject().parseObject(jsonStr);
    			String valueStr = jsonObj.get(jsonKey).toString();
    			list = JSONArray.parseArray(valueStr, clazz);
    		} catch (Exception e) {
    			logger.error("解析json字符串失败", e);
    //			e.printStackTrace();
    		}
    		return list;
    	}
    	/**  
    	* @Title: parseArray  
    	* @Description: TODO(json字符串转beanList)  
    	* @param jsonStr 形如："[{'key':'value','key':'value'},{'key':'value','key':'value'}]"
    	* @param clazz
    	* @return    
    	*/ 
    	public static <T> List<T> parseArray(String jsonStr, Class<T> clazz){
    		List<T> list = null;
    		try {
    			list = JSONArray.parseArray(jsonStr, clazz);
    		} catch (Exception e) {
    			logger.error("解析json字符串失败", e);
    //			e.printStackTrace();
    		}
    		return list;
    	}
    }


#### JsonResult

    package minyuantec.securitysystem.common;
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
    	private HashMap<String, Object> data = new HashMap<String, Object>();
    	/**
    	 * @deprecated 不建议直接获取全部属性。请使用{@link #getData(String)}
    	 * @return
    	 */
    	public HashMap<String, Object> getData() {
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


#### PageInfo

    package minyuantec.securitysystem.common;
    import java.io.Serializable;
    import org.json.JSONException;
    import org.json.JSONObject;
    public class PageInfo implements Serializable {
    private static final long serialVersionUID = 1L;
    	/**
    	 * 升序
    	 */
    	public static final String ASC = "asc";
    	/**
    	 * 降序
    	 */
    	public static final String DESC = "desc";
    	public static final int maxPageSize = 1000;//返回的最大条数
    	/**页码，首页的值是1.*/
    	private int pageNumber = 1;
    	/**每页数量*/
    	private int pageSize = 10;
    	/**排序关键字段*/
    	private String sortName;
    	/**排序类型*/
    	private String sortOrder = "asc";
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
    		if(!obj.isNull("pageNumber"))	
    			info.setPageNumber(obj.getInt("pageNumber"));
    		if(!obj.isNull("pageSize"))
    			info.setPageSize(obj.getInt("pageSize"));
    		if(!obj.isNull("sortName"))
    			info.setSortName(obj.getString("sortName"));
    		if(!obj.isNull("sortOrder"))
    			info.setSortOrder(obj.getString("sortOrder"));
    		if(!obj.isNull("total"))
    			info.setTotal(obj.getInt("total"));
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
    		return this.pageNumber < pageCount;
    	}
    	/**
    	 * 当前页的开始索引号（含）。
    	 * @see #getEnd()
    	 * @return 索引号。第一条记录的索引号为0.
    	 */
    	public int getStart(){
    		pageCount = (int) Math.ceil( total / (float)pageSize);//总页数
    		if(pageNumber>pageCount){
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


#### ParamCheckUtil

    package minyuantec.securitysystem.common;
    //参数检查工具类
    public class ParamCheckUtil {
    	//检查分页查询参数
    	public static boolean checkPageQueryParam( Integer pageSize,Integer pageNumber) {
    		if(pageSize==null ||"".equals(pageSize) || pageNumber==null ||"".equals(pageNumber)){
    			return false;
    		}
    		if (pageSize > PageInfo.maxPageSize || pageSize <= 0 || pageNumber <= 0) {
    			return false;
    		}
    		return true;
    	}
    	public static boolean isEmpty(String str){
    		if(str==null ||"".equals(str)){
    			return true;
    		}
    		return false;
    	}
    	public static void main(String[] args) {
    	}
    }


#### PropertyReader

    package minyuantec.securitysystem.common;
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
    	public static Map<String,String> getProperties(){
    		logger.info("读取redis配置文件开始。。。");
    		 Properties prop = new Properties();     
    		 Map<String,String> proMap  = new HashMap<String,String>();
    		try {
    			 //读取属性文件redis.properties
    			InputStream in= PropertyReader.class.getClassLoader().getResourceAsStream("redis.properties");  
    			prop.load(in);     ///加载属性列表
                Iterator<String> it=prop.stringPropertyNames().iterator();
                while(it.hasNext()){
                    String key=it.next();
                    proMap.put(key, prop.getProperty(key));
                }
                in.close();
                logger.info("读取redis配置文件成功。。。");
    		} catch (Exception e) {
    			logger.error("读取redis配置文件异常！", e);
    			e.printStackTrace();
    		}
    		return proMap;
    	}
    }


#### HttpClientUtils

    package minyuantec.securitysystem.common;
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
    	public static String doPost(String url, Map<String, String> params) {
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
    				result = IOUtils.toString(in, "utf-8");
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
    	private static void setPostParams(HttpPost httpPost, Map<String, String> params) {
    		List<NameValuePair> nvps = new ArrayList<NameValuePair>();
    		Set<String> keys = params.keySet();
    		for (String key : keys) {
    			nvps.add(new BasicNameValuePair(key, params.get(key)));
    		}
    		try {
    			httpPost.setEntity(new UrlEncodedFormEntity(nvps, "utf-8"));
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
    		String resultString = "";
    		CloseableHttpResponse response = null;
    		try {
    			// 创建请求内容
    			StringEntity entity = new StringEntity(json, ContentType.APPLICATION_JSON);
    			httpPost.setEntity(entity);
    			// 执行http请求
    			response = getHttpClient(url).execute(httpPost, HttpClientContext.create());
    			resultString = EntityUtils.toString(response.getEntity(), "utf-8");
    		} catch (Exception e) {
    			logger.error("httpclient的post请求失败,url:" + url, e);
    			// e.printStackTrace();
    		} finally {
    			try {
    				if (response != null)
    					response.close();
    			} catch (IOException e) {
    				logger.error("IOException的错误", e);
    				// e.printStackTrace();
    			}
    		}
    		return resultString;
    	}
    	public static String doGetJson(String url, String json) {
    		String resultString = "";
    		CloseableHttpResponse response = null;
    		try {
    			// 创建Get请求
    			// HttpGet httpGet = new HttpGet(url + "?" + json);
    			HttpGet httpGet = new HttpGet(url);
    			setRequestConfig(httpGet);
    			// 执行http请求
    			response = getHttpClient(url).execute(httpGet, HttpClientContext.create());
    			resultString = EntityUtils.toString(response.getEntity(), "utf-8");
    		} catch (Exception e) {
    			logger.error("httpclient的get请求失败,url:" + url, e);
    			// e.printStackTrace();
    		} finally {
    			try {
    				if (response != null)
    					response.close();
    			} catch (IOException e) {
    				logger.error("IOException的错误", e);
    				// e.printStackTrace();
    			}
    		}
    		return resultString;
    	}
    	public static String doGet(String url, Map<String, String> param) {
    		// 创建Httpclient对象
    		CloseableHttpClient httpclient = HttpClients.createDefault();
    		String resultString = "";
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
    				resultString = EntityUtils.toString(response.getEntity(), "UTF-8");
    			}
    		} catch (Exception e) {
    			logger.error("httpclient的get请求失败,url:" + url, e);
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
    		String hostName = url.split("/")[2];
    		// System.out.println(hostName);
    		int port = 80;
    		if (hostName.contains(":")) {
    			String[] args = hostName.split(":");
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
    							logger.debug("close expired and idle for over 5s connection");
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
    		Registry<ConnectionSocketFactory> registry = RegistryBuilder.<ConnectionSocketFactory> create()
    				.register("http", plainSocketFactory).register("https", sslSocketFactory).build();
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
    				if (i > 3) {
    					// 重试超过3次,放弃请求
    					logger.error("retry has more than 3 time, give up request");
    					return false;
    				}
    				if (e instanceof NoHttpResponseException) {
    					// 服务器没有响应,可能是服务器断开了连接,应该重试
    					logger.error("receive no response from server, retry");
    					return true;
    				}
    				if (e instanceof SSLHandshakeException) {
    					// SSL握手异常
    					logger.error("SSL hand shake exception");
    					return false;
    				}
    				if (e instanceof InterruptedIOException) {
    					// 超时
    					logger.error("InterruptedIOException");
    					return false;
    				}
    				if (e instanceof UnknownHostException) {
    					// 服务器不可达
    					logger.error("server host unknown");
    					return false;
    				}
    				if (e instanceof ConnectTimeoutException) {
    					// 连接超时
    					logger.error("Connection Time out");
    					return false;
    				}
    				if (e instanceof SSLException) {
    					logger.error("SSLException");
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


#### RedisMessage

    package minyuantec.securitysystem.common;
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


#### RedisPublishUtil

    package minyuantec.securitysystem.common;
    import java.util.Map;
    import org.apache.log4j.Logger;
    import net.sf.json.JSONObject;
    import redis.clients.jedis.Jedis;
    import redis.clients.jedis.exceptions.JedisConnectionException;
    public class RedisPublishUtil {
    	private Logger logger = Logger.getLogger(RedisPublishUtil.class);
    	public static Jedis pubJedis;
    	private static Map<String, String> proMap = PropertyReader.getProperties();
    	private static final String redisPort = proMap.get("redis.port");
    	private static String url = proMap.get("redis.host");
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
    		logger.info("===创建连接jedis=====");
    		try {
    			pubJedis = new Jedis(url, port);
    		} catch (JedisConnectionException e) {
    			logger.error("Jedis连接异常,异常信息 :" + e.getMessage());
    			try {
    				Thread.sleep(1000);
    				logger.info("发起重新连接jedis");
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
    		logger.info("redis准备发布消息内容：" + msg);
    		try {
    			this.getPubJedis().publish(msgType, msg);
    		} catch (JedisConnectionException e) {
    			logger.error("redis发布消息失败！", e);
    			this.setPubJedis(null);
    			logger.info("重新发布消息，channel="+msgType);
    			pubConfigMsg(msgType, configType, configObjType, configObjID);
    		}
    	}
    	public void pubRedisMsg(String msgType,String msg){
    		logger.info("redis准备发布消息内容：" + msg);
    		try {
    			this.getPubJedis().publish(msgType, msg);
    		} catch (JedisConnectionException e) {
    			logger.error("redis发布消息失败！", e);
    			this.setPubJedis(null);
    			logger.info("重新发布消息，channel="+msgType);
    			pubRedisMsg(msgType, msg);
    		}
    	}
    }


#### Result

    package minyuantec.securitysystem.common;
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




