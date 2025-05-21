<!-- 全局设置 -->
<template>
  <div class="settings">
    <div class="set-btn s-card" @click="store.changeShowStatus('showSeetings')">
      <i class="iconfont icon-style"></i>
      <span class="set-text">个性化配置</span>
    </div>
    <!-- 设置面板 -->
    <Modal
      :show="store.showSeetings"
      title="个性化配置"
      titleIcon="style"
      @mask-click="store.changeShowStatus('showSeetings')"
      @modal-close="store.changeShowStatus('showSeetings')"
    >
      <div class="set-list">
        <span class="title">字体</span>
        <div class="set-item">
          <span class="set-label">全站字体</span>
          <div class="set-options">
            <span
              :class="['options', { choose: fontFamily === 'hmos' }]"
              @click="fontFamily = 'hmos'"
            >
              HarmonyOS Sans
            </span>
            <span
              :class="['options', { choose: fontFamily === 'lxgw' }]"
              @click="fontFamily = 'lxgw'"
            >
              霞鹜文楷
            </span>
          </div>
        </div>
        <div class="set-item">
          <span class="set-label">全站字体大小</span>
          <div class="set-options">
            <span class="options" @click="store.changeFontSize(false)"> - </span>
            <span class="num">{{ fontSize }}</span>
            <span class="options" @click="store.changeFontSize(true)"> + </span>
          </div>
        </div>
        <span class="title">壁纸个性化</span>
        <div class="set-item">
          <span class="set-label">全站背景</span>
          <div class="set-options">
            <span
              :class="['options', { choose: backgroundType === 'close' }]"
              @click="backgroundType = 'close'"
            >
              关闭
            </span>
            <span
              :class="['options', { choose: backgroundType === 'patterns' }]"
              @click="backgroundType = 'patterns'"
            >
              纹理
            </span>
            <span
              :class="['options', { choose: backgroundType === 'image' }]"
              @click="((backgroundType = 'image'), (themeType = 'dark'))"
            >
              图片
            </span>
            <span
              :class="['options', { choose: backgroundType === item.url }]"
              v-for="item in CoolBgsData"
              :key="item.url"
              @click="backgroundType = item.url"
            >
              {{ item.name }}
            </span>
          </div>
        </div>
        <div v-if="backgroundType === 'image'" class="set-item">
          <span class="set-label">背景图片地址</span>
          <div class="set-options">
            <input
              v-model="backgroundUrl"
              type="url"
              pattern="https?://.+"
              title="请输入有效的网址，例如：http://www.example.com"
              required
            />
          </div>
        </div>
        <span class="title">鼠标个性化</span>
        <div class="set-item">
          <span class="set-label">鼠标特效</span>
          <div class="set-options">
            <span
              :class="['options', { choose: mouserModel === item }]"
              v-for="item in Object.keys(MouserData)"
              :key="item"
              @click="changeMouser(item)"
            >
              {{ MouserData[item].title }}
            </span>
          </div>
        </div>
        <span class="title">首页样式</span>
        <div class="set-item">
          <span class="set-label">Banner 高度</span>
          <div class="set-options">
            <span
              :class="['options', { choose: bannerType === 'half' }]"
              @click="bannerType = 'half'"
            >
              半屏
            </span>
            <span
              :class="['options', { choose: bannerType === 'full' }]"
              @click="bannerType = 'full'"
            >
              全屏
            </span>
          </div>
        </div>
        <span class="title">杂项调整</span>
        <div class="set-item">
          <span class="set-label">额外信息显示位置</span>
          <div class="set-options">
            <span
              :class="['options', { choose: infoPosition === 'normal' }]"
              @click="infoPosition = 'normal'"
            >
              默认位置
            </span>
            <span
              :class="['options', { choose: infoPosition === 'fixed' }]"
              @click="infoPosition = 'fixed'"
            >
              右下角
            </span>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { mainStore } from "@/store";
import { onMounted, ref } from "vue";

const store = mainStore();
const {
  themeType,
  fontFamily,
  fontSize,
  infoPosition,
  backgroundType,
  backgroundUrl,
  mouserModel,
  bannerType,
} = storeToRefs(store);

// 背景效果数据
const CoolBgsData = [
  {
    name: "七彩云雾",
    url: "/third/CoolBgs/bgs/1/index.html",
    imgUrl: "/third/CoolBgs/bgs/1/preview.jpg",
  },
  {
    name: "旋转魔方",
    url: "/third/CoolBgs/bgs/2/index.html",
    imgUrl: "/third/CoolBgs/bgs/2/preview.png",
  },
  {
    name: "3D飞行",
    url: "/third/CoolBgs/bgs/3/index.html",
    imgUrl: "/third/CoolBgs/bgs/3/preview.png",
  },
  {
    name: "气泡轨迹",
    url: "/third/CoolBgs/bgs/4/index.html",
    imgUrl: "/third/CoolBgs/bgs/4/preview.gif",
  },
  {
    name: "彩色粒子",
    url: "/third/CoolBgs/bgs/5/index.html",
    imgUrl: "/third/CoolBgs/bgs/5/preview.gif",
  },
  {
    name: "白色粒子",
    url: "/third/CoolBgs/bgs/6/index.html",
    imgUrl: "/third/CoolBgs/bgs/6/preview.gif",
  },
  {
    name: "下起小雨",
    url: "/third/CoolBgs/bgs/7/index.html",
    imgUrl: "/third/CoolBgs/bgs/7/preview.png",
  },
  {
    name: "火箭飞行",
    url: "/third/CoolBgs/bgs/8/index.html",
    imgUrl: "/third/CoolBgs/bgs/8/preview.png",
  },
  {
    name: "群星飞舞",
    url: "/third/CoolBgs/bgs/9/index.html",
    imgUrl: "/third/CoolBgs/bgs/9/preview.gif",
  },
  {
    name: "满天繁星",
    url: "/third/CoolBgs/bgs/10/index.html",
    imgUrl: "/third/CoolBgs/bgs/10/preview.png",
  },
  {
    name: "星空之环",
    url: "/third/CoolBgs/bgs/11/index.html",
    imgUrl: "/third/CoolBgs/bgs/11/preview.jpg",
  },
  {
    name: "科技六角",
    url: "/third/CoolBgs/bgs/12/index.html",
    imgUrl: "/third/CoolBgs/bgs/12/preview.png",
  },
  {
    name: "流星星雨",
    url: "/third/CoolBgs/bgs/13/index.html",
    imgUrl: "/third/CoolBgs/bgs/13/preview.png",
  },
  {
    name: "星海田野",
    url: "/third/CoolBgs/bgs/14/index.html",
    imgUrl: "/third/CoolBgs/bgs/14/preview.png",
  },
  {
    name: "火箭升空",
    url: "/third/CoolBgs/bgs/15/index.html",
    imgUrl: "/third/CoolBgs/bgs/15/preview.gif",
  },
  {
    name: "3D飞机",
    url: "/third/CoolBgs/bgs/16/index.html",
    imgUrl: "/third/CoolBgs/bgs/16/preview.gif",
  },
  {
    name: "华丽气泡",
    url: "/third/CoolBgs/bgs2/17/index.html",
    imgUrl: "/third/CoolBgs/bgs2/17/preview.gif",
  },
  {
    name: "渐变背景",
    url: "/third/CoolBgs/bgs2/18/index.html",
    imgUrl: "/third/CoolBgs/bgs2/18/preview.gif",
  },
  {
    name: "火星蔓延",
    url: "/third/CoolBgs/bgs2/19/index.html",
    imgUrl: "/third/CoolBgs/bgs2/19/preview.gif",
  },
  {
    name: "宇宙之眼",
    url: "/third/CoolBgs/bgs2/20/index.html",
    imgUrl: "/third/CoolBgs/bgs2/20/preview.gif",
  },
  {
    name: "伸缩方块",
    url: "/third/CoolBgs/bgs2/21/index.html",
    imgUrl: "/third/CoolBgs/bgs2/21/preview.gif",
  },
  {
    name: "彩色星星",
    url: "/third/CoolBgs/bgs2/22/index.html",
    imgUrl: "/third/CoolBgs/bgs2/22/preview.gif",
  },
  {
    name: "星海森林",
    url: "/third/CoolBgs/bgs2/24/index.html",
    imgUrl: "/third/CoolBgs/bgs2/24/preview.gif",
  },
  {
    name: "三维立方",
    url: "/third/CoolBgs/bgs2/25/index.html",
    imgUrl: "/third/CoolBgs/bgs2/25/preview.gif",
  },
  {
    name: "雨落河流",
    url: "/third/CoolBgs/bgs2/26/index.html",
    imgUrl: "/third/CoolBgs/bgs2/26/preview.gif",
  },
  {
    name: "大海之蓝",
    url: "/third/CoolBgs/bgs2/27/index.html",
    imgUrl: "/third/CoolBgs/bgs2/27/preview.gif",
  },
  {
    name: "跳跃彩球",
    url: "/third/CoolBgs/bgs2/28/index.html",
    imgUrl: "/third/CoolBgs/bgs2/28/preview.gif",
  },
  {
    name: "粒子漩涡",
    url: "/third/CoolBgs/bgs2/29/index.html",
    imgUrl: "/third/CoolBgs/bgs2/29/preview.gif",
  },
  {
    name: "球中之鱼",
    url: "/third/CoolBgs/bgs2/30/index.html",
    imgUrl: "/third/CoolBgs/bgs2/30/preview.gif",
  },
  {
    name: "曲线空间",
    url: "/third/CoolBgs/bgs2/31/index.html",
    imgUrl: "/third/CoolBgs/bgs2/31/preview.gif",
  },
  {
    name: "代码雨落",
    url: "/third/CoolBgs/bgs2/33/index.html",
    imgUrl: "/third/CoolBgs/bgs2/33/preview.gif",
  },
  {
    name: "霓虹灯板",
    url: "/third/CoolBgs/bgs2/23/index.html",
    imgUrl: "/third/CoolBgs/bgs2/23/preview.gif",
  },
  {
    name: "旋转星空",
    url: "/third/CoolBgs/bgs2/34/index.html",
    imgUrl: "/third/CoolBgs/bgs2/34/preview.gif",
  },
];

// 鼠标特效数据
const MouserData = {
  1: {
    title: "躁动线条",
    options: {
      leaveAutoer: true, //鼠标移出后自动绘制 drawType为1时生效
      showTime: 20, //绘制的线条显示的时间 drawType为1时生效
      maxWidth: 12, //最大宽度 drawType为1时生效
      minWidth: 4, //最小宽度 drawType为1时生效
    },
  },
  2: {
    title: "绚丽流星",
    options: {
      // color: '#F8EC85', //颜色 drawType为2、5时生效，默认值#F8EC85
    },
  },
  3: {
    title: "大数据",
    options: {
      // dotColor: '#F22323',//#9CD9F9
      // lineColor: '#F2EC23'//#9CD9F9
    },
  },
  4: {
    title: "街头涂鸦",
    options: {},
  },
  5: {
    title: "连线点阵",
    options: {
      // color: '#FFF300',//颜色 drawType为2、5时生效 默认值#A5FBFF
      // number: 10000//8000
    },
  },
  6: {
    title: "萤火之光",
    options: {},
  },
  7: {
    title: "多彩烟花",
    options: {
      // colors: ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C']
    },
  },
  8: {
    title: "放大镜",
    options: {
      multi: 1.5,
      // border: {
      //     width: 10,
      //     color: '#069'
      // }
    },
  },
};

// 声明变量
const mouser = ref(null);

// 在客户端挂载后初始化
onMounted(() => {
  if (typeof window !== "undefined" && window.Mouser && mouserModel.value) {
    mouser.value = new window.Mouser({
      ...{
        drawType: mouserModel.value,
      },
      ...MouserData[mouserModel.value].options,
    });
  }
});

function changeMouser(type) {
  console.error("暂未开放");
  return;
  mouserModel.value = type;
  if (mouser.value) {
    mouser.value.changeModel({
      ...{
        drawType: mouserModel.value,
      },
      ...MouserData[mouserModel.value].options,
    });
  }
}
</script>

<style lang="scss" scoped>
.settings {
  .set-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 42px;
    height: 42px;
    padding: 0;
    border-radius: 25px;
    box-shadow: 0 6px 10px -4px var(--main-dark-shadow);
    .iconfont {
      font-size: 22px;
      margin-left: 10px;
      transition: color 0.3s;
    }
    .set-text {
      margin-left: 10px;
      display: inline-flex;
      opacity: 0;
      font-size: 14px;
      line-height: 1;
      overflow: hidden;
      white-space: nowrap;
      transition: opacity 0.3s;
    }
    &:hover {
      width: 140px;
      color: var(--main-card-background);
      border-color: var(--main-color);
      background-color: var(--main-color);
      .iconfont {
        color: var(--main-card-background);
      }
      .set-text {
        opacity: 1;
      }
    }
  }
}
.set-list {
  .title {
    display: block;
    width: 100%;
    margin: 1rem 0;
    font-size: 16px;
    font-weight: bold;
    border-left: 4px solid var(--main-color);
    border-radius: 4px 8px 8px 4px;
    background-color: var(--main-border-shadow);
    padding: 6px 0 6px 12px;
    &:first-child {
      margin-top: 0;
    }
  }
  .set-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    .set-label {
      min-width: 88px;
    }
    .set-options {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      height: auto;
      border-radius: 8px;
      .options {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9375rem;
        border-radius: 8px;
        margin: 4px 8px;
        padding: 6px 8px;
        min-width: 30px;
        background-color: var(--main-card-border);
        transition:
          color 0.3s,
          background-color 0.3s;
        &.choose,
        &:hover {
          color: var(--main-card-background);
          background-color: var(--main-color);
          box-shadow: 0 8px 16px -4px var(--main-border-shadow);
        }
        &:last-child {
          margin-right: 0;
        }
      }
      .num {
        margin: 0 4px;
      }
      input {
        border: none;
        outline: none;
        border-radius: 8px;
        color: var(--main-font-color);
        font-family: var(--main-font-family);
        background-color: var(--main-border-shadow);
        height: 100%;
        padding: 0 1rem;
        font-size: 14px;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
    @media (max-width: 512px) {
      flex-direction: column;
      align-items: flex-start;
      .set-options {
        margin-top: 8px;
        .options {
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
