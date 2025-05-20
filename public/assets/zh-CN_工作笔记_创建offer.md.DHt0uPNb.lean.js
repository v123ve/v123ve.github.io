import{_ as n,c as r,a3 as o,o as a}from"./chunks/framework.BaR4VHXY.js";const u=JSON.parse('{"title":"创建offer","description":"","frontmatter":{"Created at":"2021-04-01T00:00:00.000Z","Last updated at":"2022-11-05T00:00:00.000Z","tags":["webrtc"]},"headers":[],"relativePath":"zh-CN/工作笔记/创建offer.md","filePath":"zh-CN/工作笔记/创建offer.md","lastUpdated":null}'),t={name:"zh-CN/工作笔记/创建offer.md"};function i(s,e,l,f,d,c){return a(),r("div",null,e[0]||(e[0]=[o(`<h1 id="创建offer" tabindex="-1">创建offer <a class="header-anchor" href="#创建offer" aria-label="Permalink to &quot;创建offer&quot;">​</a></h1><h4 id="创建offer-1" tabindex="-1">创建offer <a class="header-anchor" href="#创建offer-1" aria-label="Permalink to &quot;创建offer&quot;">​</a></h4><pre><code>const PeerConnection =
  window.RTCPeerConnection ||
  window.mozRTCPeerConnection ||
  window.webkitRTCPeerConnection ||
  RTCPeerConnection;
const RTC: RTCPeerConnection | null = new PeerConnection();
this.RTC = RTC;
let offerParams;
try {
  RTC.addTransceiver(&#39;audio&#39;);
  RTC.addTransceiver(&#39;video&#39;);
} catch (e) {
  console.log(&#39;当前版本不支持addTransceiver方法&#39;);
  // 方法1：抛出异常
  // // 重置窗口状态
  // this.videoStatus = status.idle;
  // this.userStatus = status.idle;
  // this.onVideoStatusChanged({
  //   status: this.userStatus,
  // });
  // this.destroyRTC();
  // this.setRTCNull();
  // // 码流异常回调
  // this.onError({
  //   message: &#39;浏览器版本过低&#39;,
  //   errorType: &#39;browser_version_error&#39;,
  // })
  // 方法2：使用用户媒体
  // try {
  //   const mediaConstraints = {
  //     audio: true,
  //     video: true,
  //   }
  //   const localStream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
  //   const videoTrack = localStream.getVideoTracks()[0];
  //   const audioTrack = localStream.getAudioTracks()[0];
  //   console.log(&#39;audioTrack&#39;, audioTrack);
  //   RTC.addTrack(audioTrack, localStream);
  //   RTC.addTrack(videoTrack, localStream);
  //   this.createRTCCallBack();
  //   return;
  // } catch (e) {
  //   console.log(&#39;获取localStream失败&#39;, e.name, e.message);
  // }
  // 方法3：使用老版本参数
  offerParams = {
	// 老版本参数，是否支持接收音频
	offerToReceiveAudio: true,
	// 老版本参数，是否支持接收视频
	offerToReceiveVideo: true,
  }
  RTC.createOffer(offerParams);
</code></pre><h4 id="判断h265" tabindex="-1">判断H265 <a class="header-anchor" href="#判断h265" aria-label="Permalink to &quot;判断H265&quot;">​</a></h4><pre><code>import MP4Box from &#39;mp4box&#39;;

/**
 * 判断是否是H265视频
 * @param videoUrl 视频路径
 * @param maxTime 超时时间
 */
export function judgeH265(videoUrl, maxTime) {
  return new Promise(resolve =&gt; {
    if (!videoUrl) {
      resolve(false);
      return;
    }
    let mp4boxfile = MP4Box.createFile();
    const judgeTimeOut = setTimeout(() =&gt; {
      mp4boxfile.flush();
      mp4boxfile = null;
      resolve(false);
    }, maxTime || 15 * 1000);
    mp4boxfile.onReady = info =&gt; {
      const mime = _.get(info, &#39;mime&#39;, &#39;&#39;);
      clearTimeout(judgeTimeOut);
      if (mime.indexOf(&#39;avc1&#39;) === -1 &amp;&amp; mime.indexOf(&#39;h264&#39;) === -1) {
        resolve(true);
      } else {
        resolve(false);
      }
    };
    mp4boxfile.onError = () =&gt; {
      clearTimeout(judgeTimeOut);
      resolve(false);
    };
    fetch(videoUrl)
      .then(response =&gt; response.arrayBuffer())
      .then(arrayBuffer =&gt; {
        arrayBuffer.fileStart = 0;
        mp4boxfile.appendBuffer(arrayBuffer);
        mp4boxfile.flush();
        mp4boxfile = null;
      });
  });
}
</code></pre>`,5)]))}const T=n(t,[["render",i]]);export{u as __pageData,T as default};
