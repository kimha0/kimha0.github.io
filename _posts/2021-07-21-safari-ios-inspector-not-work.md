---
title: iOS Safari 인스펙터 탭이 보이지 않는 현상
description: Safari technology preview를 다운받으면 된다.
thumbnail: https://blog.hayoung.dev/images/2021-07-21-thumb.png
dueDate: 2021-07-21

published: true
categories: safari
tags: [safari]

meta:
  keywords:
    name: 
    content: []
  robots: index, nofollow

og:
  locale: ko_KR
  type: article
  url:
  siteName:
  image:
    url:
    width:
    height:
---

평소와 다름없이 개발하던 도중, iOS Safari에서 비디오가 재생이 안된다고 이슈가 들어왔다.  
디버깅을 하려고 iOS simulator를 켜고 인스펙터를 켜보니 평소에 보던 인스펙터가 아니였다.  
탭이 여러개 비어있고 기능도 재대로 작동하지 않았다  

    
### Big sur 11.3~ issue
  
처음에는 simulator를 너무 업데이트 안해서? 하는 생각에 이것저것 시도해봤는데  
수많은 삽질끝에 구글에 `safari inspector tabs are missing` 키워드로 검색하자마자 바로 답을 얻었다.  
  
간략한 이유는 애플에서 Big sur 업데이트를 하면서 인스펙터에 있는 탭을 누락시킨거리고 했다.  
다음 업데이트에 해결해준다고 하지만, 당장 디버그를 해야되는 상황이라 해결법을 찾아보니  
  
[Safari Technology Preview](https://developer.apple.com/safari/download/)를 다운받고 사용하면 된다고 한다.  
Safari Technology Preview는 safari의 기술 업데이트를 미리 사용해보고 실험하기 위해 내놓은 앱이라고 한다.  

