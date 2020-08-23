<!--
 * @Author: jiarong.deng
 * @Date: 2020-07-29 22:13:05
 * @LastEditors: jiarong.deng
 * @LastEditTime: 2020-08-20 21:19:07
 * @Description: file content
-->
<template>
  <div class="container ovh">
    <!-- <MyBlockquote /> -->
    <main class="content ovh">
      <p>关键字：video、flv、hls、直播流</p>

      <h2 class="title" id="video-标签基本使用">
        <a href="#video-标签基本使用">#</a>
        一、video 标签基本使用
      </h2>
      <!-- 1.1 start -->
      <p></p>
      <h4 class="title" id="1.1-常用属性">
        <a href="#1.1-常用属性">#</a>
        1.1 常用属性
      </h4>

     <p>
        <code> video </code>标签最基本的使用是，指定<code> src </code>并加上<code> controls </code>属性，这样在支持的浏览器上便可以播放了。
        <code> video </code>标签支持 <code> Mp4、WebM、Ogg </code>格式，其中<code> mp4 </code>格式视频流在一般浏览器均支持
        （<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Supported_media_formats" target="_blank">点我查看浏览器兼容</a>）。
        如果浏览器不支持<code> video </code>标签则会显示标签中的提示文字。
      </p>

      <p><pre><code class="html">{{ code111 }}</code></pre></p>
      
      <p>
        当然<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement" target="_blank"><code> HTMLVideoElement </code></a>
        的属性设置不只简单的提供了一个<code> controls</code>，还有更多的可配置项，
        比如：通过添加<code> autoplay </code>属性开启在动播放、
        通过添加<code> muted </code>设置为静音模式、
        通过给<code> volume </code>属性设置0.0~1.0之间的数值控制初始音量大小、
        通过读取<code> currentTime </code>属性的值可获取当前播放时间，为其赋值将会使媒体跳到一个新的时间、
        通过<code> css object-fit </code>属性，设置画面是否适应容器大小，是否保持原比例等。
      </p>
      <!-- 1.1 end -->

      <!-- 1.2 start -->
      <p></p>
      <h4 class="title" id="1.2-常用方法-事件">
        <a href="#1.2-常用方法-事件">#</a>
        1.2 常用方法、事件
      </h4>

      <p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events" target="_blank"><code>Media events </code></a>
        里面有<code> video、audio </code>的方法、事件列表及介绍。
      </p>

      <p>
        <code>play、pause </code>方法自然是最常用的<code> video </code>标签的方法了，当中<code> play </code>方法需要注意，使用之前可先判断<code> video.paused || video.ended </code>，避免不必要的调用。
        另外它是异步的，如果有需要等待播放成功后做的逻辑，必须在<code> play() </code>的回调里进行。
      </p>
      <p><pre><code class="javascript">{{ code121 }}</code></pre></p>

      <p>
        终止播放不是仅仅是调用<code> pause </code>方法即可，浏览器还会继续下载媒体直至媒体元素被垃圾回收机制回收。
        下面是即刻停止媒体下载的方法：
      </p>
      <p><pre><code class="javascript">{{ code122 }}</code></pre></p>
      <p>
        通过移除媒体元素的<code> src </code>属性，或者直接将其设为一个空字符串，从而结束媒体下载。
        <code> removeAttribute() </code>操作并不干净， 而将<code> &lt;video&gt; </code>元素的 <code> src </code>属性设为空字符串可能会引起我们不想要的请求。
      </p>

      <p>
        <code> video </code>是否正在播放的状态，可以通过监听<code> canplay </code>事件获取。
        在播放过程中，会不断触发<code> canplay </code>事件，以至于我们不能在里面做过多且复杂的逻辑。
      </p>
      <p><pre><code class="javascript">{{ code123 }}</code></pre></p>

      <!-- 1.3 start -->
      <p></p>
      <h4 class="title" id="1.3-自定义控制条">
        <a href="#1.3-自定义控制条">#</a>
        1.3 自定义控制条
      </h4>

      <p>
        通过<code> controls </code>添加的控制条，在不同的浏览器上的默认样式是不一样的，如需统一<code> video </code>外观，则可参考
        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player" target="_blank"><code> Creating a cross-browser video player </code></a>
        下的例子搭建一个自定义的控制条。
      </p>

      <p>
        <img class="bs" src="~/assets/images/20200803/safari.png" width="200" height="130" title="pc safari" alt="🤭">
        <img class="bs" src="~/assets/images/20200803/chorme.png" width="200" height="130" title="pc chorme" alt="🤭">
        <img class="bs" src="~/assets/images/20200803/safari.png" width="200" height="130" title="pc ie" alt="🤭">
      </p>

      <p>下面是一个自定义 播放/暂停 的示例：</p>
      <p><pre><code class="javascript">{{ code131 }}</code></pre></p>

      <p>下面是一个自定义 进度条 的示例：</p>
      <p><pre><code class="javascript">{{ code132 }}</code></pre></p>
      <!-- 1.3 end -->

      <!-- 1.4 start -->
      <p></p>
      <h4 class="title" id="1.4-各环境中的 API">
        <a href="#1.4-各环境中的 API">#</a>
        1.4 各环境中的 API
      </h4>

      <p><pre><code class="html">{{ code141 }}</code></pre></p>

      <p>
        <code>webkit-playsinline 和 playsinline</code> 视频播放时局域播放，不脱离文档流 。
        但是这个属性比较特别，需要嵌入网页的<code> App </code>比如<code> WeChat </code>中<code> UIwebview </code> 的<code> webview.allowsInlineMediaPlayback = true </code>，才能生效。
      </p>
      <p>
        <code>x-webkit-airplay="allow"</code> 这个属性是使此视频支持 <code> ios 的 AirPlay </code>功能。
        通过<code> AirPlay </code>功能可以实现影音文件的无线播放，当然前提是播放的终端设备也要支持相应的功能。
      </p>
      <p>
        <code>x5-video-player-type </code> 启用同层<code> H5 </code>播放器，就是在视频全屏的时候，<code> div </code>可以呈现在视频层上，也是<code> WeChat </code>安卓版特有的属性。
        同层播放别名也叫做沉浸式播放，播放的时候看似全屏，但是已经除去了<code> control </code>和微信的导航栏，只留下 "X" 和 "&lt;" 两键。目前的同层播放器只在<code> Android </code>（包括微信）上生效，暂时不支持<code> iOS </code>。
      </p>
      <p>
        <code>x5-video-orientation </code> 声明播放器支持的方向，可选值<code> landscape、portraint</code>。默认值 <code> portraint </code>。
        无论是直播还是全屏<code> H5 </code>一般都是竖屏播放，但是这个属性需要<code> x5-video-player-type </code>开启<code> H5 </code>模式。
      </p>
      <p>
        <code>x5­-video­-player­-fullscreen </code>全屏设置，<code>ture/false</code>，true支持全屏播放，false不支持全屏播放。
      </p>
      <!-- 1.4 end -->

      <!-- TODO: hls、flv 使用 -->
      <h2 class="title" id="Hls-Flv">
        <a href="#Hls-Flv">#</a>
        Hls、Flv
      </h2>

      <!-- 2.1 start -->
      <p></p>
      <h4 class="title" id="2.1-Hls">
        <a href="#2.1-Hls">#</a>
        2.1 Hls
      </h4>

      <blockquote class="my_blockquote">
        <p>
          <code> HTTP Live Streaming </code>（缩写是<code> HLS </code>）是由苹果公司提出基于<code> HTTP </code>的流媒体网络传输协议。
          是苹果公司<code> QuickTime X 和 iPhone </code>软件系统的一部分。它的工作原理是把整个流分成一个个小的基于<code> HTTP </code>的文件来下载，每次只下载一些。
          当媒体流正在播放时，客户端可以选择从许多不同的备用源中以不同的速率下载同样的资源，允许流媒体会话适应不同的数据速率。
          在开始一个流媒体会话时，客户端会下载一个包含元数据的扩充<code> M3U (m3u8) </code>播放列表文件，用于寻找可用的媒体流。
        </p>
      </blockquote>

      <p>432949</p>
      <p>432949</p>
      <p>432949</p>
      <p>432949</p>
      <p>432949</p>
      <p>432949</p>
      <p>432949</p>
      <p>432949</p>
      <p>432949</p>
    </main>
    <!-- <Catalog :nodes="{}" class="category" /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DailyIndex extends Vue {
  public code111 = `
  <video
    controls
    width="400"
    src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4">
     <p>当前浏览器不支持video标签</p>
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

  public mounted() {
    this.$store.commit('article/setTitle', 'H5 <video> 标签使用');
  }
}
</script>

<style lang="scss" scoped>
</style>
