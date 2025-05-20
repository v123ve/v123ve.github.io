---

Created at: 2021-04-01
Last updated at: 2022-11-05
tags: 
  - webrtc

---

# 创建offer


#### 创建offer

    const PeerConnection =
      window.RTCPeerConnection ||
      window.mozRTCPeerConnection ||
      window.webkitRTCPeerConnection ||
      RTCPeerConnection;
    const RTC: RTCPeerConnection | null = new PeerConnection();
    this.RTC = RTC;
    let offerParams;
    try {
      RTC.addTransceiver('audio');
      RTC.addTransceiver('video');
    } catch (e) {
      console.log('当前版本不支持addTransceiver方法');
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
      //   message: '浏览器版本过低',
      //   errorType: 'browser_version_error',
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
      //   console.log('audioTrack', audioTrack);
      //   RTC.addTrack(audioTrack, localStream);
      //   RTC.addTrack(videoTrack, localStream);
      //   this.createRTCCallBack();
      //   return;
      // } catch (e) {
      //   console.log('获取localStream失败', e.name, e.message);
      // }
      // 方法3：使用老版本参数
      offerParams = {
    	// 老版本参数，是否支持接收音频
    	offerToReceiveAudio: true,
    	// 老版本参数，是否支持接收视频
    	offerToReceiveVideo: true,
      }
      RTC.createOffer(offerParams);


#### 判断H265

    import MP4Box from 'mp4box';
    
    /**
     * 判断是否是H265视频
     * @param videoUrl 视频路径
     * @param maxTime 超时时间
     */
    export function judgeH265(videoUrl, maxTime) {
      return new Promise(resolve => {
        if (!videoUrl) {
          resolve(false);
          return;
        }
        let mp4boxfile = MP4Box.createFile();
        const judgeTimeOut = setTimeout(() => {
          mp4boxfile.flush();
          mp4boxfile = null;
          resolve(false);
        }, maxTime || 15 * 1000);
        mp4boxfile.onReady = info => {
          const mime = _.get(info, 'mime', '');
          clearTimeout(judgeTimeOut);
          if (mime.indexOf('avc1') === -1 && mime.indexOf('h264') === -1) {
            resolve(true);
          } else {
            resolve(false);
          }
        };
        mp4boxfile.onError = () => {
          clearTimeout(judgeTimeOut);
          resolve(false);
        };
        fetch(videoUrl)
          .then(response => response.arrayBuffer())
          .then(arrayBuffer => {
            arrayBuffer.fileStart = 0;
            mp4boxfile.appendBuffer(arrayBuffer);
            mp4boxfile.flush();
            mp4boxfile = null;
          });
      });
    }




