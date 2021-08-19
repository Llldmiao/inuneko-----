const images = ['https://i.pinimg.com/236x/41/9f/6f/419f6fab1af7a717a751deeda7b0a106.jpg',
                'https://i.pinimg.com/236x/aa/35/0f/aa350f9332f34dc5fa537dad06eb9465.jpg',
                'https://i.pinimg.com/236x/91/39/b1/9139b167cfd479224ad2476fe961128b.jpg',
                'https://i.pinimg.com/236x/a8/7c/84/a87c8457d373173123c95d2c2e23c7f1.jpg',
                'https://i.pinimg.com/236x/75/8f/b9/758fb99f1674aa63c7f1a9d882223b8c.jpg',
                'https://i.pinimg.com/236x/8b/a2/83/8ba283897b9ad414c929ca1a8630b4bd.jpg',
                'https://i.pinimg.com/236x/52/2f/2f/522f2f9dde683c1a9c7f907a6fec9420.jpg',
                'https://i.pinimg.com/236x/6c/3c/52/6c3c529e8dadc7cffc4fddedd4caabe1.jpg',
                'https://i.pinimg.com/236x/d3/7c/33/d37c33b2921a5df2fc85040e32b28f6c.jpg',
                'https://i.pinimg.com/236x/11/98/1c/11981cc3fd1d13e2583492397af8a62a.jpg',
                'https://i.pinimg.com/236x/3c/d1/df/3cd1df648667b81203ff1a78590f1849.jpg',
                'https://i.pinimg.com/236x/12/00/b3/1200b3d273dd3869fc7ec511f96475be.jpg',
                'https://i.pinimg.com/236x/14/f1/93/14f19348ec6fb9af42ec317620ec7384.jpg',
                'https://i.pinimg.com/236x/2d/fa/cc/2dfacc6183a5f75dca6a4c567d680332.jpg',
                'https://i.pinimg.com/236x/a2/de/07/a2de07d8faf49e156625fe3d32bc816b.jpg',
                'https://i.pinimg.com/236x/25/99/64/259964cfd5b38f67cfb41ddcaf0f2b04.jpg',
                'https://i.pinimg.com/236x/c3/6a/c3/c36ac32a39650cd27a56ecdb642a707e.jpg',
                'https://i.pinimg.com/236x/d4/8a/53/d48a53e3e0f807bbe07f735284ab80ca.jpg',
                'https://i.pinimg.com/236x/c1/7a/37/c17a37bca352589242fdd324d4e9e58e.jpg',
                'https://i.pinimg.com/236x/97/c4/a4/97c4a4fa4b89bdbbb0554abd8031fa1c.jpg',
                'https://i.pinimg.com/236x/8d/21/ca/8d21caa8976d75f1f98da477b51f0e41.jpg',
                'https://i.pinimg.com/236x/2a/8f/93/2a8f9337131a8207a2e9c72a3c4135b5.jpg',
                'https://i.pinimg.com/236x/e0/15/9b/e0159bf929b5a422b037a87901cbe2d9.jpg'
                ];

const template = document.createElement('template');
//#region 
template.innerHTML = `
<div class="container"></div>
  <style>
    .container {
  width: auto;
  margin: 10px auto 20px;
  position: relative;
}
.item {
  width: 252px;
  padding: 0 8px 16px 8px;
  box-sizing: border-box;
  float: left;
  position: absolute;
  top: 0;
  left: 0;
}
.show {
  width: 236px;
  height: 100%;
  border-radius: 16px;
  -webkit-mask-image: -webkit-radial-gradient(center, white, black);
}

@media (min-width: 0px) and (max-width: 755px) {
  .container {
    width: 504px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+2),
  .container .static:nth-child(-n+2) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 756px) and (max-width: 1007px) {
  .container {
    width: 756px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+3),
  .container .static:nth-child(-n+3) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 1008px) and (max-width: 1259px) {
  .container {
    width: 1008px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+4),
  .container .static:nth-child(-n+4) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 1260px) and (max-width: 1511px) {
  .container {
    width: 1260px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+5),
  .container .static:nth-child(-n+5) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 1512px) and (max-width: 1763px) {
  .container {
    width: 1512px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+6),
  .container .static:nth-child(-n+6) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 1764px) and (max-width: 2015px) {
  .container {
    width: 1764px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+7),
  .container .static:nth-child(-n+7) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 2016px) and (max-width: 2267px) {
  .container {
    width: 2016px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+8),
  .container .static:nth-child(-n+8) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 2268px) and (max-width: 2519px) {
  .container {
    width: 2268px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+9),
  .container .static:nth-child(-n+9) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 2520px) and (max-width: 2771px) {
  .container {
    width: 2520px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+10),
  .container .static:nth-child(-n+10) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 2772px) and (max-width: 3023px) {
  .container {
    width: 2772px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+11),
  .container .static:nth-child(-n+11) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 3024px) and (max-width: 3275px) {
  .container {
    width: 3024px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+12),
  .container .static:nth-child(-n+12) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 3276px) and (max-width: 3527px) {
  .container {
    width: 3276px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+13),
  .container .static:nth-child(-n+13) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 3528px) and (max-width: 3779px) {
  .container {
    width: 3528px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+14),
  .container .static:nth-child(-n+14) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 3780px) and (max-width: 4031px) {
  .container {
    width: 3780px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+15),
  .container .static:nth-child(-n+15) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}

@media (min-width: 4032px) and (max-width: 4283px) {
  .container {
    width: 4032px;
  }
  .container .Masonry-Premount .Collection-Item:nth-child(-n+16),
  .container .static:nth-child(-n+16) {
    position: static !important;
    visibility: visible !important;
    float: left;
    display: block;
  }
}
  </style>
`
//#endregion

class Waterfall extends HTMLElement {
  constructor() {
    super();
    this.resizeTimeout = null; //初始化计时器
    window.addEventListener("resize", this.resizeThrottler, false); //添加resize事件监听
   
    this.shadow = this.attachShadow({mode: 'open'});
    let columns = ~~(window.innerWidth / 252); //列数
    let columnHeight = new Array(columns).fill(0); //高度数组，记录每一列的总高度
    let content = template.content.cloneNode(true);
    let container = content.querySelector('.container');
    
    for(let i of images) {
      //创建元素
      let img = new Image();
      //图片获取成功后插入到页面
      img.onload = function(){
        let show = document.createElement('div');
        show.className += ' show';
        show.appendChild(img);

        let item = document.createElement('div')
        item.className += ' item';
        item.appendChild(show);

        let imgHeight = img.height + 16;
        let insertIndex = columnHeight.indexOf(Math.min(...columnHeight));//插入位置（列下标）
        let offsetX = insertIndex * 252; //x轴偏移
        let offsetY = columnHeight[insertIndex]; //y轴偏移      
        columnHeight[insertIndex] += imgHeight; //更新当前列高度   
        let style = `height:${imgHeight}px;transform:translate(${offsetX}px, ${offsetY}px);`; 
        item.style.cssText += style;
        container.appendChild(item);
        container.style.height = `${Math.max(...columnHeight)}px`;
      }
      img.src = i;
    }
    this.shadow.appendChild(content);
    }
  
  //节流函数 控制事件触发频率
  resizeThrottler = ()=> {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if ( !this.resizeTimeout ) {
        let context = this;
        this.resizeTimeout = setTimeout(function() {
          context.resizeTimeout = null;
          context.actualResizeHandler()
        }, 100);
      }
    }

  //resize后要执行的函数，根据新的窗口大小，调整瀑布流
  actualResizeHandler = () => {
    let columns = ~~(window.innerWidth / 252); //列数
    let columnHeight = new Array(columns).fill(0); //高度数组，记录每一列的总高度
    let items = this.shadow.querySelectorAll('.item');
    let container = this.shadow.querySelector('.container');
    for(let i of items) {
      let imgHeight = i.offsetHeight; 
      //将当前图片插入最小高度所在列
      let insertIndex = columnHeight.indexOf(Math.min(...columnHeight));
      let offsetX = insertIndex * 252; //x轴偏移
      let offsetY = columnHeight[insertIndex]; //y轴偏移      
      columnHeight[insertIndex] += imgHeight; //更新当前列高度   
      let style = `transform:translate(${offsetX}px, ${offsetY}px);`; 
      i.style.cssText += style;
    }
    container.style.height = `${Math.max(...columnHeight)}px`;
  }
}

window.customElements.define('water-fall', Waterfall);

export default Waterfall;