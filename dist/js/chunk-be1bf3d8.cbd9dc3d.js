(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be1bf3d8"],{"1dde":function(t,i,e){var o=e("d039"),s=e("b622"),a=e("2d00"),n=s("species");t.exports=function(t){return a>=51||!o((function(){var i=[],e=i.constructor={};return e[n]=function(){return{foo:1}},1!==i[t](Boolean).foo}))}},"65f0":function(t,i,e){var o=e("861d"),s=e("e8b5"),a=e("b622"),n=a("species");t.exports=function(t,i){var e;return s(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)?o(e)&&(e=e[n],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===i?0:i)}},8418:function(t,i,e){"use strict";var o=e("c04e"),s=e("9bf2"),a=e("5c6c");t.exports=function(t,i,e){var n=o(i);n in t?s.f(t,n,a(0,e)):t[n]=e}},"99af":function(t,i,e){"use strict";var o=e("23e7"),s=e("d039"),a=e("e8b5"),n=e("861d"),r=e("7b0b"),l=e("50c4"),c=e("8418"),u=e("65f0"),v=e("1dde"),f=e("b622"),h=e("2d00"),p=f("isConcatSpreadable"),d=9007199254740991,m="Maximum allowed index exceeded",g=h>=51||!s((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=v("concat"),C=function(t){if(!n(t))return!1;var i=t[p];return void 0!==i?!!i:a(t)},_=!g||!b;o({target:"Array",proto:!0,forced:_},{concat:function(t){var i,e,o,s,a,n=r(this),v=u(n,0),f=0;for(i=-1,o=arguments.length;i<o;i++)if(a=-1===i?n:arguments[i],C(a)){if(s=l(a.length),f+s>d)throw TypeError(m);for(e=0;e<s;e++,f++)e in a&&c(v,f,a[e])}else{if(f>=d)throw TypeError(m);c(v,f++,a)}return v.length=f,v}})},a434:function(t,i,e){"use strict";var o=e("23e7"),s=e("23cb"),a=e("a691"),n=e("50c4"),r=e("7b0b"),l=e("65f0"),c=e("8418"),u=e("1dde"),v=u("splice"),f=Math.max,h=Math.min,p=9007199254740991,d="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!v},{splice:function(t,i){var e,o,u,v,m,g,b=r(this),C=n(b.length),_=s(t,C),w=arguments.length;if(0===w?e=o=0:1===w?(e=0,o=C-_):(e=w-2,o=h(f(a(i),0),C-_)),C+e-o>p)throw TypeError(d);for(u=l(b,o),v=0;v<o;v++)m=_+v,m in b&&c(u,v,b[m]);if(u.length=o,e<o){for(v=_;v<C-o;v++)m=v+o,g=v+e,m in b?b[g]=b[m]:delete b[g];for(v=C;v>C-o+e;v--)delete b[v-1]}else if(e>o)for(v=C-o;v>_;v--)m=v+o-1,g=v+e-1,m in b?b[g]=b[m]:delete b[g];for(v=0;v<e;v++)b[v+_]=arguments[v+2];return b.length=C-o+e,u}})},def6:function(t,i,e){"use strict";e.r(i);var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("movi-tv",{attrs:{heading:"movie"}}),e("all-movies"),e("footer-vue")],1)},s=[],a=e("fb5f"),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"container"},[e("h2",{staticClass:"movie-head"},[t._v("Explore Movies")]),e("ul",{staticClass:"filters"},[e("li",{staticClass:"list-item",on:{click:t.popularMovi}},[t._v("popular")]),e("li",{staticClass:"list-item",on:{click:t.topRatedMovi}},[t._v("top rated")]),e("li",{staticClass:"list-item",on:{click:t.upcomingMovi}},[t._v("upcoming")]),e("li",{staticClass:"list-item",on:{click:t.nowPlayMovi}},[t._v("now playing")]),e("li",{staticClass:"list-item",on:{click:function(i){t.change=!t.change}}},[e("span",{class:{changeTop:!t.change,backChangeTop:t.change}}),e("span"),e("span",{class:{changeBot:!t.change,backChangeBot:t.change}})])]),e("div",{staticClass:"drop-down",class:{showDrop:t.change}},[e("div",{staticClass:"top",on:{click:t.filterLow}},[t._v("Hight to Low")]),e("div",{staticClass:"bot",on:{click:t.filterHigh}},[t._v("Low to High")]),e("div",{staticClass:"to-z",on:{click:t.filterToZ}},[t._v("A to Z")]),e("div",{staticClass:"to-a",on:{click:t.filterToA}},[t._v("Z to A")])]),e("p",{staticClass:"lead title-movies"},[t._v(t._s(t.title))]),e("div",{staticClass:"row justify-content-center align-items-center"},t._l(t.movies[0][0],(function(i){return e("div",{key:i.id,staticClass:"col-6 col-md-4 col-lg-2"},[e("img",{staticClass:"img-fluid img-movie",attrs:{src:t.baseUrl+i.poster_path,alt:i.title},on:{click:function(e){t.showMovi=!0,t.idMovi=i.id,t.moviDetail()}}})])})),0),e("div",{staticClass:"layout",class:{showLayout:t.showMovi}},[t._l(t.movieData,(function(i){return e("div",{key:i.id},[e("div",{staticClass:"movie-details",style:{backgroundImage:"url("+t.baseUrl+i.backdrop_path+")"}},[e("div",{staticClass:"movi-info"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 col-lg-4"},[e("img",{staticClass:"img-fluid movi-poster",attrs:{src:t.baseUrl+i.poster_path,alt:i.title}})]),e("div",{staticClass:"col-6 trailer"},[e("button",{staticClass:"play",on:{click:function(i){t.trailer=!t.trailer}}},[e("transition",{attrs:{name:"animate"}},[t.trailer?t._e():e("b-icon-play-fill",{staticClass:"open-vid",on:{click:function(i){t.muteNum=0}}})],1),e("transition",{attrs:{name:"animate2"}},[t.trailer?e("b-icon-x-square",{staticClass:"close-vid",on:{click:function(i){t.muteNum=1}}}):t._e()],1)],1),e("p",{staticClass:"lead"},[t._v("Youtube video "+t._s(t.trailer?t.youtubeClose:t.youtubePop))])]),e("div",{staticClass:"col-12"},[e("ul",{staticClass:"movi-genres"},t._l(i.genres.slice(0,3),(function(i){return e("li",{key:i.id,staticClass:"movi-genres-item"},[t._v(" "+t._s(i.name)+" ")])})),0),e("div",{staticClass:"video-trailer",class:{showVid:t.trailer,hideVid:!t.trailer}},[e("iframe",{attrs:{src:t.youtubeUrl+i.videos.results[0].key+"?&controls=1&showinfo=0&&mute="+t.muteNum,allowfullscreen:""}})]),e("p",{staticClass:"lead movi-title",domProps:{textContent:t._s(i.title)}}),e("p",{staticClass:"lead movi-status",domProps:{textContent:t._s(i.status)}}),e("p",{staticClass:"lead movi-votes",domProps:{textContent:t._s(i.vote_average)}}),e("a",{staticClass:"link movi-homepage",attrs:{href:i.homepage,target:"_blank"}},[e("b-icon-box-arrow-in-up-left")],1),e("p",{staticClass:"lead movi-overview"},[t._v('"'+t._s(i.overview)+'"')]),e("p",{staticClass:"lead movi-tagline",domProps:{textContent:t._s(i.tagline)}}),e("div",{staticClass:"d-flex"},[t._l(i.credits.cast.slice(0,4),(function(i){return e("div",{key:i.id,staticClass:"actors"},[e("img",{staticClass:"img-fluid profile-actor",attrs:{src:t.baseUrl+i.profile_path}})])})),e("div",{staticClass:"more"},[t._v(" + 5")])],2)])])])])])])})),e("button",{staticClass:"btn",on:{click:function(i){t.showMovi=!1,t.trailer=!1,t.muteNum=1}}},[e("b-icon-chevron-double-up",{staticClass:"chevron"})],1)],2)])])},r=[],l=(e("a434"),e("d3b7"),e("99af"),e("0cff")),c=e("bcc9"),u=e("4097"),v={data:function(){return{apiKey:"c10853c26d67ce724f0341b818f7d452",nowPlayingArr:[],genres:[],baseUrl:"https://image.tmdb.org/t/p/original"}},created:function(){this.nowPlaying(),this.genre()},methods:{nowPlaying:function(){var t=this;fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(this.apiKey)).then((function(t){if(t.ok)return t.json();throw new Error("error")})).then((function(i){t.nowPlayingArr.push(i.results)})).catch((function(t){return console.log(t)}))},genre:function(){var t=this;fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(this.apiKey,"&language=en-US")).then((function(t){if(t.ok)return t.json();throw new Error("error")})).then((function(i){t.genres.push(i.genres)})).catch((function(t){return console.log(t)}))}}},f=e("7386"),h={name:"AllMovies",data:function(){return{movies:[],change:!1,title:"popular",showMovi:!1,idMovi:null,movieData:[],youtubeUrl:"https://www.youtube.com/embed/",trailer:!1,youtubePop:"will pop up!!",youtubeClose:"close!!",muteNum:0}},components:{BIconBoxArrowInUpLeft:f["c"],BIconPlayFill:f["t"],BIconXSquare:f["A"],BIconChevronDoubleUp:f["h"]},created:function(){this.popularMovi()},mixins:[l["a"],c["a"],u["a"],v],methods:{popularMovi:function(){this.movies=[],this.movies.push(this.popularArr),this.title="popular"},topRatedMovi:function(){this.movies=[],this.movies.push(this.topRatedArr),this.title="top rated"},upcomingMovi:function(){this.movies=[],this.movies.push(this.upComingArr),this.title="upcoming"},nowPlayMovi:function(){this.movies=[],this.movies.push(this.nowPlayingArr),this.title="now playing"},filterToZ:function(){var t=this.movies[0][0],i=t.sort((function(t,i){return t.title>i.title?1:t.title<i.title?-1:0}));return i},filterToA:function(){var t=this.movies[0][0],i=t.sort((function(t,i){return i.title>t.title?1:i.title<t.title?-1:0}));return i},filterHigh:function(){var t=this.movies[0][0],i=t.sort((function(t,i){return t.vote_average>i.vote_average?1:t.vote_average<i.vote_average?-1:0}));return i},filterLow:function(){var t=this.movies[0][0],i=t.sort((function(t,i){return i.vote_average>t.vote_average?1:i.vote_average<t.vote_average?-1:0}));return i},moviDetail:function(){var t=this;this.movieData.splice(0,this.movieData.length),fetch("https://api.themoviedb.org/3/movie/".concat(this.idMovi,"?api_key=").concat(this.apiKey,"&append_to_response=videos,credits&language=en-US")).then((function(t){if(t.ok)return t.json();throw new Error("error")})).then((function(i){t.movieData.push(i),console.log(t.movieData)})).catch((function(t){console.log(t)}))}}},p=h,d=e("2877"),m=Object(d["a"])(p,n,r,!1,null,null,null),g=m.exports,b=e("8242"),C={components:{MoviTv:a["a"],AllMovies:g,FooterVue:b["a"]}},_=C,w=Object(d["a"])(_,o,s,!1,null,null,null);i["default"]=w.exports},e8b5:function(t,i,e){var o=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},fb5f:function(t,i,e){"use strict";var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"bck-title"},[e("h2",{staticClass:"h1"},[t._v(t._s(t.heading))])])])},s=[],a={name:"MoviTv",props:{heading:String}},n=a,r=e("2877"),l=Object(r["a"])(n,o,s,!1,null,"07a88234",null);i["a"]=l.exports}}]);
//# sourceMappingURL=chunk-be1bf3d8.cbd9dc3d.js.map