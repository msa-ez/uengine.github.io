(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+fKo":function(e,t,a){"use strict";var r={props:{cardSize:{type:String,default:"sm:w-1/2 lg:w-1/3"},record:{type:Object,default:function(){return{}}}}},s=a("KHd+"),n=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"p-4 w-full",class:e.cardSize},[a("div",{staticClass:"h-full border-2 border-gray-200 rounded-lg overflow-hidden relative hover:bg-shark-50 hover:bg-opacity-60"},[a("g-link",{attrs:{to:e.record.path}},[a("div",{staticClass:"p-6"},[a("h1",{staticClass:"title-font text-2xl font-medium text-gray-900 mb-3",class:{"mb-12":!e.record.excerpt}},[e._v("\n          "+e._s(e.record.title)+"\n        ")]),e.record.excerpt?a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"leading-relaxed mb-12 text-gray-800 text-left",domProps:{innerHTML:e._s(e.record.excerpt)}}):e._e()])])],1)])}),[],!1,null,null,null);t.a=n.exports},F3eR:function(e,t,a){"use strict";a.r(t);var r=a("Nq0A"),s=a("+fKo"),n=a("F5n6"),i={metaInfo:{title:"Browse Articles"},components:{PageHeader:r.a,Pagination:n.a,RecordCard:s.a}},l=a("KHd+"),o=null,c=Object(l.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",[r("PageHeader",{scopedSlots:e._u([{key:"image",fn:function(){return[r("g-image",{attrs:{src:a("iOWZ")}})]},proxy:!0},{key:"content",fn:function(){return[r("p",{staticClass:"text-4xl md:text-6xl"},[e._v("\n        Articles\n      ")]),r("p",{staticClass:"text-lg md:text-2xl"},[e._v("\n        We have currently "+e._s(e.$page.records.totalCount)+" articles in our list\n      ")])]},proxy:!0}])}),r("div",{staticClass:"container px-5 py-12 mx-auto"},[r("section",[r("div",{staticClass:"flex flex-wrap -m-4"},e._l(e.$page.records.edges,(function(e){return r("RecordCard",{key:e.node.id,attrs:{record:e.node}})})),1)]),e.$page.records.pageInfo.totalPages>1?r("div",{staticClass:"mt-12 flex justify-center"},[r("Pagination",{attrs:{"base-url":"/articles","current-page":e.$page.records.pageInfo.currentPage,"total-pages":e.$page.records.pageInfo.totalPages}})],1):e._e()])],1)}),[],!1,null,null,null);"function"==typeof o&&o(c);t.default=c.exports},F5n6:function(e,t,a){"use strict";a("qePV"),a("ma9I");var r={props:{baseUrl:{type:String,default:"/"},currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0},maxVisibleButtons:{type:Number,required:!1,default:5}},computed:{startPage:function(){return 1===this.currentPage?1:(this.currentPage,this.totalPages,this.currentPage-1)},pages:function(){for(var e=[],t=this.startPage;t<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);t+=1)e.push({name:t,isDisabled:t===this.currentPage,link:1===t?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(t)});return e}},methods:{isFirstPage:function(e,t){return 1===e},isLastPage:function(e,t){return e===t},isCurrentPage:function(e,t){return e===t},nextPage:function(e,t){return"".concat(this.baseUrl,"/").concat(e+1)},previousPage:function(e,t){return 2===e?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(e-1)}}},s=a("KHd+"),n=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"relative z-0 inline-flex shadow-sm text-sm leading-5 font-medium"},[e.isFirstPage(e.currentPage,e.totalPages)?e._e():a("g-link",{staticClass:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-500 hover:text-smalt-blue-500 focus:outline-none",attrs:{to:e.previousPage(e.currentPage,e.totalPages),"aria-label":"Previous"}},[a("svg",{staticClass:"h-5 w-5",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])]),e._l(e.pages,(function(t){return a("g-link",{key:t.name,staticClass:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium hover:text-smalt-blue-500 focus:outline-none",class:{"bg-gray-200 text-gray-700":t.isDisabled,"text-gray-600 hover:bg-gray-100":!t.isDisabled,"rounded-l-md":e.isFirstPage(e.currentPage,e.totalPages)&&1===t.name,"rounded-r-md":e.isLastPage(e.currentPage,e.totalPages)&&t.name===e.totalPages},attrs:{to:t.link}},[e._v("\n      "+e._s(t.name)+"\n    ")])})),e.isLastPage(e.currentPage,e.totalPages)?e._e():a("g-link",{staticClass:"-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-500 hover:text-smalt-blue-500 focus:outline-none",attrs:{to:e.nextPage(e.currentPage,e.totalPages),"aria-label":"Next"}},[a("svg",{staticClass:"h-5 w-5",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])],2)])}),[],!1,null,null,null);t.a=n.exports},Nq0A:function(e,t,a){"use strict";var r={data:function(){return{hasSlot:!1}},computed:{hasImage:function(){return!!this.$slots.image||!!this.$scopedSlots.image}}},s=a("KHd+"),n=Object(s.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"relative z-0 h-64 flex flex-wrap content-center page-header",class:{"bg-shark-700 text-white":this.hasImage,"bg-gray-200 border-b border-gray-400":!this.hasImage}},[this._t("image",(function(){return[t("div",{staticClass:"bg-pattern"})]})),t("div",{staticClass:"flex z-10 w-full"},[t("div",{staticClass:"container text-center mx-auto"},[t("div",[this._t("content")],2)])])],2)}),[],!1,null,null,null);t.a=n.exports},iOWZ:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.42db587.a78298103ca445aa01f62436e2904f97.jpg",size:{width:2560,height:2367},sizes:"(max-width: 2560px) 100vw, 2560px",srcset:["/assets/static/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.82a2fbd.a78298103ca445aa01f62436e2904f97.jpg 480w","/assets/static/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.cbab2cf.a78298103ca445aa01f62436e2904f97.jpg 1024w","/assets/static/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.2665e34.a78298103ca445aa01f62436e2904f97.jpg 1920w","/assets/static/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.42db587.a78298103ca445aa01f62436e2904f97.jpg 2560w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2560 2367' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-3cd64531eea9e543e9d695f71b889e10'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-3cd64531eea9e543e9d695f71b889e10)' width='2560' height='2367' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAA7AEADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABQYEBwECAwAI/8QAMRAAAgEDAwIEBQQBBQAAAAAAAQIDBAURABIhMUEGEyJRMmFxkaEHFBWBFjNiscHh/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUA/8QAIBEAAgIDAAMAAwAAAAAAAAAAAAECEQMhMQQSE2Ghsf/aAAwDAQACEQMRAD8Aq61RpJWICwA56nHbXe525aeBpgCD52zOflnTHb/CP7umQyAIXUupVhu47aFigl/x01LvviiLM8T56iTYMEdDyNM%2bqctMb8mo01%2bT1vgnp4nWSAzQMN25PiX05zj6a9arK81geuQbnSoSEIOd%2b/AGD9Tp0paf%2bOiMlxoJ0poUIeogbzY%2bU2rnuOcZ41nwbY6esq7TDCoAah3TvCdymZZBt3DoSMamlnaTZTHCm0hTg8uBWEiBSpAOR051LulBNNTySRKVZCXHbBGrJ8K26Oy32ee7W6GsjQeTnIKKcMoYg9z7Hp76HWaSro6pamW0LWUksslNGjruV325wB1yNwI%2bmlrNbuIbxUqfBYFslrLFT1gTIkTcQeo%2bWke6U7RSsCuNWzFHUWetktNbFGFmCzU%2b318ON2369fyNVf4knZ6%2bdNjRlHKkMuCMHHI7ad40pe7QryVH0TDVt8cT0kaJJRblRCgAPTggn68/jWIrpS1Xh6e2RCpWSpb0sYMgkyh%2bx/rQREBmqWBGCMDnrkaIWSQUywmV0TAGfUDj7adPHCO4rYnHklLUnosU%2bL7DVWerokrAlTIgQJJEwG4Yzzg98638C3G0U1vmpK6otyvKXkWVplDDLjAzwemT11X9cI568yU1RGA0RXKqQS2PYDse%2bmaxXGNvDMsESyThU3F0QYHqJ7nUc8SjHV7osjkcpba0WbZHoJKyb9rcI5YmkhKhpklGMNk5zu6gdz10RprbX26yK1MI/OgVbhSohysa5y2QeSSuRx%2bNJdxrpKVa6tNrhG/y38t3TjaGPZT79PcDShW%2bI2ntSyyep9yxhQ8g42DKnBHYdOh0iEHJ2hk36qmy7PEtFbr3T0dFeHFBVO4jpZqJi3mH4mVOD79%2b5GDr5u/UO0vZPFt1t81Sap4JADMRgvkA5I9%2bedNfh3x3V0l5ojCtKglITIQ5UEEdcnH9aX/1ilV/1GvLR7drGI%2bnpkxIddLx8bXTnZpK6XBXttK9ZWxwIxCnlj8u%2bjV3t1FQyzRU7SyNHGzt5jZwMAL%2bTn%2btB7RXCgmeYRGV8AAZ4AzzqXUS1NbU1dTIAivEJWCnPB4Uf86pmn0TBoYbTXQ0NxoZ5SscahldvkUi/wDdQbVVz0dorZIog0e09W28B8Hjv8Q0JRRGS7MDmNJVJPPBUnH513M7/wAbOqNhW3s25eTl9wH4B1O8a/hSsjX7G%2b%2b1s87NG071DJDHKyDCovfoP%2b86QauuaXz9yoGeXdgZyOMfbRGWrZaaWGnOxScN7yAn5/IDQB5MoVyTznHbprcOJRBz5r4beeyOrK2SOR/t1rUzyVM7yyszO2MlmJPAx1P01LttGtTPGJCcEjga28SIkV9rEiGEVwAMY7DtqpVwjd9OVvk2NL84mH5GpBqSVkhhG8tFGnB7KOfydCweNS6YYkBHGQda9qjE62YhnInp3diUjZeD2A51vLUM0e3JCEZI9yONRqf/AFYx2zrMp9ZHtnQ%2bqsYpOjvdKo1NQZWIXdggewxjUJeo1NtFRJS1LyxCPfsI9cauPswI1EldpJGdsbmOTgAD7DXlrQL3sIW6bZMr46HONRrlUfurhUTkY8xy2Nb0fxjUecYlbHvrF0KXD//Z' /%3e%3c/svg%3e"}}}]);