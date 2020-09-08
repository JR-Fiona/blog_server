<!--
 * @Author: jiarong.deng
 * @Date: 2020-07-29 22:13:05
 * @LastEditors: jiarong.deng
 * @LastEditTime: 2020-09-06 18:20:18
 * @Description: file content
-->
<template>
  <div class="container">
    <MyBlockquote />
    <main class="content">
      <code class="paragraph">2020/08/25 jiarong.deng</code>

      <chapter-title title="一、video 标签基本使用" type="h2" />
     
      <!-- 1.1 start -->
      <chapter-title title="1.1 常用属性" type="h3" />

     <code class="paragraph">
        video 标签最基本的使用是，指定 src 并加上 controls 属性，这样在支持的浏览器上便可以播放了。
         video 标签支持  Mp4、WebM、Ogg 格式，其中 mp4 格式视频流在一般浏览器均支持
        （<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Supported_media_formats" target="_blank">点我查看浏览器兼容</a>）。
        如果浏览器不支持 video 标签则会显示标签中的提示文字。
      </code>

      <code class="paragraph"><pre><code class="html">{{ code111 }}</code></pre></code>
      
      <code class="paragraph">
        当然<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement" target="_blank"> HTMLVideoElement </a>
        的属性设置不只简单的提供了一个 controls，还有更多的可配置项，
        比如：通过添加 autoplay 属性开启在动播放、
        通过添加 muted 设置为静音模式
        通过给 volume 属性设置0.0~1.0之间的数值控制初始音量大小、
        通过读取 currentTime 属性的值可获取当前播放时间，为其赋值将会使媒体跳到一个新的时间、
        通过 css object-fit 属性，设置画面是否适应容器大小，是否保持原比例等。
      </code>

      <code class="paragraph">
        duration 属性，以秒为单位的总长度时间，如果媒体不可用，则为0。
        如果媒体可用，但时间长度未知，值为 NAN。 如果媒体是以 stream 形式传输并且没有预定长度，则值为 Inf。
      </code>
      <!-- 1.1 end -->

      <!-- 1.2 start -->
      <chapter-title title="1.2 常用属性" type="h3" />

      <code class="paragraph">
        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events" target="_blank">Media events </a>
        里面有 video、audio 的方法、事件列表及介绍。
      </code>

      <code class="paragraph">
        play、pause 方法自然是最常用的 video 标签的方法了，当中 play 方法需要注意，使用之前可先判断 video.paused || video.ended ，避免不必要的调用。
        另外它是异步的，如果有需要等待播放成功后做的逻辑，必须在 play() 的回调里进行。
      </code>
      <code class="paragraph"><pre><code class="javascript">{{ code121 }}</code></pre></code>

      <code class="paragraph">
        终止播放不是仅仅是调用 pause 方法即可，浏览器还会继续下载媒体直至媒体元素被垃圾回收机制回收。
        下面是即刻停止媒体下载的方法：
      </code>
      <code class="paragraph"><pre><code class="javascript">{{ code122 }}</code></pre></code>
      <code class="paragraph">
        通过移除媒体元素的 src 属性，或者直接将其设为一个空字符串，从而结束媒体下载。
         removeAttribute() 操作并不干净， 而将 &lt;video&gt; 元素的  src 属性设为空字符串可能会引起我们不想要的请求。
      </code>

      <code class="paragraph">
         video 是否正在播放的状态，可以通过监听 canplay 事件获取。
        在播放过程中，会不断触发 canplay 事件，以至于我们不能在里面做过多且复杂的逻辑。
      </code>
      <code class="paragraph"><pre><code class="javascript">{{ code123 }}</code></pre></code>

      <!-- 1.3 start -->
      <chapter-title title="1.3 自定义控制条" type="h3" />

      <code class="paragraph">
        通过 controls 添加的控制条，在不同的浏览器上的默认样式是不一样的，如需统一 video 外观，则可参考
        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player" target="_blank"> Creating a cross-browser video player </a>
        下的例子搭建一个自定义的控制条。
      </code>

      <code class="paragraph">
        <img class="bs" src="~/assets/images/20200803/safari.png" width="200" height="130" title="pc safari" alt="🤭">
        <img class="bs" src="~/assets/images/20200803/chorme.png" width="200" height="130" title="pc chorme" alt="🤭">
        <img class="bs" src="~/assets/images/20200803/safari.png" width="200" height="130" title="pc ie" alt="🤭">
      </code>

      <code class="paragraph">下面是一个自定义 播放/暂停 的示例：</code>
      <code class="paragraph"><pre><code class="javascript">{{ code131 }}</code></pre></code>

      <code class="paragraph">下面是一个自定义 进度条 的示例：</code>
      <code class="paragraph"><pre><code class="javascript">{{ code132 }}</code></pre></code>
      <!-- 1.3 end -->

      <!-- 1.4 start -->
      <chapter-title title="1.4 各环境中的 API" type="h3" />

      <code class="paragraph"><pre><code class="html">{{ code141 }}</code></pre></code>

      <code class="paragraph">
        webkit-playsinline 和 playsinline 视频播放时局域播放，不脱离文档流 。
        但是这个属性比较特别，需要嵌入网页的 App 比如 WeChat 中 UIwebview  的 webview.allowsInlineMediaPlayback = true ，才能生效。
      </code>
      <code class="paragraph">
        x-webkit-airplay="allow" 这个属性是使此视频支持  ios 的 AirPlay 功能。
        通过 AirPlay 功能可以实现影音文件的无线播放，当然前提是播放的终端设备也要支持相应的功能。
      </code>
      <code class="paragraph">
        x5-video-player-type  启用同层 H5 播放器，就是在视频全屏的时候， div 可以呈现在视频层上，也是 WeChat 安卓版特有的属性。
        同层播放别名也叫做沉浸式播放，播放的时候看似全屏，但是已经除去了 control 和微信的导航栏，只留下 "X" 和 "&lt;" 两键。目前的同层播放器只在 Android （包括微信）上生效，暂时不支持 iOS 。
      </code>
      <code class="paragraph">
        x5-video-orientation  声明播放器支持的方向，可选值 landscape、portraint。默认值  portraint。
        无论是直播还是全屏 H5 一般都是竖屏播放，但是这个属性需要 x5-video-player-type 开启 H5 模式。
      </code>
      <code class="paragraph">
        x5­-video­-player­-fullscreen 全屏设置，ture/false，true支持全屏播放，false不支持全屏播放。
      </code>
      <!-- 1.4 end -->

      <chapter-title title="二、Hls和Flv" type="h2" />
    
      <!-- 2.1 start -->
      <chapter-title title="2.1 Hls 介绍及使用" type="h3" />

      <blockquote class="my_blockquote">
        <code class="paragraph">
          HTTP Live Streaming （缩写是 HLS ）是由苹果公司提出基于 HTTP 的流媒体网络传输协议。
          是苹果公司 QuickTime X 和 iPhone 软件系统的一部分。它的工作原理是把整个流分成一个个小的基于 HTTP 的文件来下载，每次只下载一些。
          当媒体流正在播放时，客户端可以选择从许多不同的备用源中以不同的速率下载同样的资源，允许流媒体会话适应不同的数据速率。
          在开始一个流媒体会话时，客户端会下载一个包含元数据的扩充 M3U (m3u8) 播放列表文件，用于寻找可用的媒体流。
        </code>
      </blockquote>

      <code class="paragraph">
         hls 在 safari 和移动端浏览器均支持，在 src 写上播放地址就可以播放了。
        而在 windows pc 上，需要<a href="https://github.com/video-dev/hls.js/" target="_blank"> hlsjs </a>处理播放。
         hls 直播流会存在相对较大的延迟，一般在 10s 以上（仅供参考）。
      </code>
      <code class="paragraph"><pre><code class="html">{{ code211 }}</code></pre></code>
      <code class="paragraph"><pre><code class="javascript">{{ code212 }}</code></pre></code>
      <!-- 2.1 end -->
      <!-- 2.2 start -->
      <chapter-title title="2.1 Flv 介绍及使用" type="h3" />

      <blockquote class="my_blockquote">
        <code class="paragraph">
           FLV 是 FLASH VIDEO 的简称， FLV 流媒体格式是随着 Flash MX 的推出发展而来的视频格式。
          由于它形成的文件极小、加载速度极快，使得网络观看视频文件成为可能，它的出现有效地解决了视频文件导入 Flash 后，
          使导出的 SWF 文件体积庞大，不能在网络上很好的使用等问题。
        </code>
      </blockquote>
      
      <code class="paragraph">
         http-flv，即将音视频数据封装成 FLV，然后通过 HTTP 协议传输给客户端。
        video 内播放 http-flv，需要使用<a href="https://github.com/Bilibili/flv.js/" target="_blank"> flvjs </a>。
        播放延迟相对较小，一般在 2s-7s(仅供参考)。flvjs 是通过  Media Source Extensions API 实现的，
        该 API 存在<a href="https://caniuse.com/#search=Media%20Source%20Extensions" target="_blank">浏览器兼容性问题</a>，
        在 iOS 上是不兼容的，只兼容到 iPadOS 和 MacOS(实测播放报错，但兼容性上明确支持) 。
      </code>
      <code class="paragraph">
        <img class="bs" width="100%" src="~/assets/images/20200803/media_source_extensions.png" alt="😑">
      </code>

      <code class="paragraph"><pre><code class="javascript">{{ code221 }}</code></pre></code>
      <!-- 2.2 end -->
    </main>
    <Catalog :nodes="nodes" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import flvjs from 'flv.js';

@Component
export default class DailyIndex extends Vue {
  nodes: any[]|undefined;
  public data() {
    return {
      nodes: []
    };
  }
  public mounted() {
    this.$store.commit('article/setTitle', 'H5 <video> 标签使用');
    this.getCatalog();
  }

  public getCatalog() {
    const content: HTMLElement = document.querySelector('.content') as HTMLElement;
    const doms = content.querySelectorAll('h1, h2, h3, h4, h5');
    const arr: any[] = [];
    doms.forEach(dom => {
      arr.push({
        nav: `${dom.tagName}_nav`,
        title: `#${dom.id}`
      });
    });
    this.nodes = arr;
  }

  public code111 = `
  <video
    controls
    width="400"
    src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4">
     <code class="paragraph">当前浏览器不支持video标签</code>
  </video>
  `;

  public code121 = `
  const video = document.getElementById('video');
  function play(){
    if (video.paused || video.ended) { 
     video.play().then(() => {
       // do something...
     })
    } 
  }
  `;

  public code122 = `
  const video = document.getElementById('video');
  video.pause();
  video.src = '';
  //or
  video.removeAttribute('src'); 
  `;

  public code123 = `
  const video = document.getElementById('video');
  video.addEventListener('canplay', () => {
    console.log('count...', count++);
  }, false);
  // 在播放过程中，count 会一直累加并打印。
  `;

  public code131 = `
  const video = document.getElementById('video');
  const playpause = document.getElementById('playpause');
  playpause.addEventListener('click', function(e) {
   if (video.paused || video.ended) { 
     video.play();
    } else { 
      video.pause();
    }
  }, false);
  `;

  public code132 = `
  const video = document.getElementById('video');
  const progress = document.getElementById('progress');
  const progressBar = document.getElementById('progressBar');
  video.addEventListener('timeupdate', function() {
   if (!progress.getAttribute('max')) {
     progress.setAttribute('max', video.duration);
    }
    progress.value = video.currentTime;
    progressBar.style.width = 
      Math.floor((video.currentTime / video.duration) * 100) + '%';
  });
  `;

  public code141 = `
  <video
    id="video" 
    src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" 
    controls = "true"
    poster="images.jpg"       /* 视频封面 */
    preload="auto" 
    webkit-playsinline="true" /* 这个属性是 iOS 10中设置可以让视频在小窗内播放 */  
    playsinline="true"        /* iOS 微信浏览器支持小窗内播放*/ 
    x-webkit-airplay="allow" 
    x5-video-player-type="h5"  /* 启用 H5 播放器,是 WeChat 安卓版特性 */
    x5-video-player-fullscreen="true" /* 全屏设置，设置为 true 是防止横屏 */
    x5-video-orientation="portraint" /* 播放器的方向 */
    style="object-fit:fill">
  </video>
  `;

  public code211 = `
  <video
    controls
    width="400"
    src="http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8">
    <code class="paragraph">当前浏览器不支持video标签</code>
  </video>
  `;

  public code212 = `
  // hlsjs 简单使用
  import Hls from 'hls.js';
  const video = document.getElementById('video');
  const videoSrc = 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8';
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      video.play();
    });
  }
  `;

  public code221 = `
  // flvjs 简单使用
  import flvjs from 'flv.js';
  const video = document.getElementById('video');
  if (flvjs.isSupported()) {
    const flvPlayer = flvjs.createPlayer({
        type: 'flv',
        isLive: true,
        url: 'http://1011.hlsplay.aodianyun.com/demo/game.flv'
    });
    flvPlayer.attachMediaElement(video);
    flvPlayer.load();
    flvPlayer.play();
  }
  `;
}
</script>

<style lang="scss" scoped>
</style>
