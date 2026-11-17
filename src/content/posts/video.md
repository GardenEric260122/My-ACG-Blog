---
title: 在文章中插入视频
published: 2026-11-17
description: 演示如何在文章中插入视频
tags: [教程, 视频]
series: media-embeds
seriesOrder: 1
category: 教程
draft: false
---  

在B站，Youtube等平台点击**分享——>嵌入**按钮，获取到嵌入代码后再复制粘贴到md文件中来实现视频的插入。
示例如下:

```
<iframe width="100%" height="468" src="//player.bilibili.com/player.html?isOutside=true&aid=117416302483613&bvid=BV1Depg6uEz5&cid=42670427439&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
```

在B站复制的嵌入代码没有设置尺寸，可以根据实际情况自行设置。

```
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=117416302483613&bvid=BV1Depg6uEz5&cid=42670427439&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
```

或者使用特别语法，设置`bvid`, `title`等参数进行插入。

## YouTube

::youtube{id="t5rW-ikAINw" title="YouTube视频" preload="auto"}

## Bilibili

::bilibili{bvid="BV17yEX6ZE3y" title="Bilibili视频" p=1 preload="auto"}

## AcFun

::acfun{acid="ac48990843" title="AcFun视频" preload="auto"}

或使用`Artplayer`视频播放器。

## ArtPlayer

::artplayer{src="https://www.pexels.com/download/video/34653030/" title="Pixel视频" preload="auto"}
