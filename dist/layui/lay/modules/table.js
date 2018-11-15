layui.define(["laytpl","laypage","layer","form","util"],function(e){"use strict";var t=layui.$,i=layui.laytpl,a=layui.laypage,l=layui.layer,n=layui.form,o=(layui.util,layui.hint()),r=layui.device(),d={config:{checkName:"LAY_CHECKED",indexName:"LAY_TABLE_INDEX"},cache:{},index:layui.table?layui.table.index+1e4:0,set:function(e){var i=this;return i.config=t.extend({},i.config,e),i},on:function(e,t){return layui.onevent.call(this,s,e,t)}},c=function(){var e=this,t=e.config,i=t.id||t.index;return i&&(c.config[i]=t),{reload:function(t){e.reload.call(e,t)},setColsWidth:function(){e.setColsWidth.call(e)},config:t}},s="table",u="layui-hide",y="layui-none",h="layui-table-view",f=".layui-table-header",p=".layui-table-body",v=".layui-table-sort",m="layui-table-edit",g="layui-table-hover",b=function(e){return e=e||{},['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ','{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',"<thead>","{{# layui.each(d.data.cols, function(i1, item1){ }}","<tr>","{{# layui.each(item1, function(i2, item2){ }}",'{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}','{{# if(item2.fixed === "right"){ right = true; } }}',function(){return e.fixed&&"right"!==e.fixed?'{{# if(item2.fixed && item2.fixed !== "right"){ }}':"right"===e.fixed?'{{# if(item2.fixed === "right"){ }}':""}(),"{{# var isSort = !(item2.colGroup) && item2.sort; }}",'<th data-field="{{ item2.field||i2 }}" data-key="{{d.index}}-{{i1}}-{{i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{ item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{item2.minWidth}}"{{# } }} {{#if(item2.colspan){}} colspan="{{item2.colspan}}"{{#} if(item2.rowspan){}} rowspan="{{item2.rowspan}}"{{#}}} {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}layui-hide{{# } }}{{# if(isSort){ }} layui-unselect{{# } }}{{# if(!item2.field){ }} layui-table-col-special{{# } }}">','<div class="layui-table-cell laytable-cell-',"{{# if(item2.colGroup){ }}","group","{{# } else { }}","{{d.index}}-{{i1}}-{{i2}}",'{{# if(item2.type !== "normal"){ }}'," laytable-cell-{{ item2.type }}","{{# } }}","{{# } }}",'" {{#if(item2.align){}}align="{{item2.align}}"{{#}}}>','{{# if(item2.type === "checkbox"){ }}','<input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>',"{{# } else { }}",'<span>{{item2.title||""}}</span>',"{{# if(isSort){ }}",'<span class="layui-table-sort layui-inline"><i class="layui-edge layui-table-sort-asc" title="\u5347\u5e8f"></i><i class="layui-edge layui-table-sort-desc" title="\u964d\u5e8f"></i></span>',"{{# } }}","{{# } }}","</div>","</th>",e.fixed?"{{# }; }}":"","{{# }); }}","</tr>","{{# }); }}","</thead>","</table>"].join("")},x=['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ','{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',"<tbody></tbody>","</table>"].join(""),k=['<div class="layui-form layui-border-box {{d.VIEW_CLASS}}" lay-filter="LAY-table-{{d.index}}" style="{{# if(d.data.width){ }}width:{{d.data.width}}px;{{# } }} {{# if(d.data.height){ }}height:{{d.data.height}}px;{{# } }}">',"{{# if(d.data.toolbar){ }}",'<div class="layui-table-tool">','<div class="layui-table-tool-temp"></div>','<div class="layui-table-tool-self"></div>',"</div>","{{# } }}",'<div class="layui-table-box">',"{{# if(d.loading){ }}",'<div class="layui-table-init" style="background-color: #fff;">','<i class="layui-icon layui-icon-loading layui-icon"></i>',"</div>","{{# } }}","{{# var left, right; }}",'<div class="layui-table-header">',b(),"</div>",'<div class="layui-table-body layui-table-main">',x,"</div>","{{# if(left){ }}",'<div class="layui-table-fixed layui-table-fixed-l">','<div class="layui-table-header">',b({fixed:!0}),"</div>",'<div class="layui-table-body">',x,"</div>","</div>","{{# }; }}","{{# if(right){ }}",'<div class="layui-table-fixed layui-table-fixed-r">','<div class="layui-table-header">',b({fixed:"right"}),'<div class="layui-table-mend"></div>',"</div>",'<div class="layui-table-body">',x,"</div>","</div>","{{# }; }}","</div>","{{# if(d.data.totalRow){ }}",'<div class="layui-table-total">','<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ','{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>','<tbody><tr><td><div class="layui-table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>',"</table>","</div>","{{# } }}","{{# if(d.data.page){ }}",'<div class="layui-table-page">','<div id="layui-table-page{{d.index}}"></div>',"</div>","{{# } }}","<style>","{{# layui.each(d.data.cols, function(i1, item1){","layui.each(item1, function(i2, item2){ }}",".laytable-cell-{{d.index}}-{{i1}}-{{i2}}{ ","{{# if(item2.width){ }}","width: {{item2.width}}px;","{{# } }}"," }","{{# });","}); }}","</style>","</div>"].join(""),C=t(window),w=t(document),T=function(e){var i=this;i.index=++d.index,i.config=t.extend({},i.config,d.config,e),i.render()};T.prototype.config={limit:10,loading:!0,cellMinWidth:60,defaultToolbar:["filter","exports","print"],text:{none:"\u65e0\u6570\u636e"}},T.prototype.render=function(){var e=this,a=e.config;if(a.elem=t(a.elem),a.where=a.where||{},a.id=a.id||a.elem.attr("id")||a.index,a.request=t.extend({pageName:"page",limitName:"limit"},a.request),a.response=t.extend({statusName:"code",statusCode:0,msgName:"msg",dataName:"data",countName:"count"},a.response),"object"==typeof a.page&&(a.limit=a.page.limit||a.limit,a.limits=a.page.limits||a.limits,e.page=a.page.curr=a.page.curr||1,delete a.page.elem,delete a.page.jump),!a.elem[0])return e;a.height&&/^full-\d+$/.test(a.height)&&(e.fullHeightGap=a.height.split("-")[1],a.height=C.height()-e.fullHeightGap),e.setInit();var l=a.elem,n=l.next("."+h),o=e.elem=t(i(k).render({VIEW_CLASS:h,data:a,index:e.index}));if(a.index=e.index,n[0]&&n.remove(),l.after(o),e.layTool=o.find(".layui-table-tool"),e.layBox=o.find(".layui-table-box"),e.layHeader=o.find(f),e.layMain=o.find(".layui-table-main"),e.layBody=o.find(p),e.layFixed=o.find(".layui-table-fixed"),e.layFixLeft=o.find(".layui-table-fixed-l"),e.layFixRight=o.find(".layui-table-fixed-r"),e.layTotal=o.find(".layui-table-total"),e.layPage=o.find(".layui-table-page"),e.renderToolbar(),e.fullSize(),a.cols.length>1){var r=e.layFixed.find(f).find("th");r.height(e.layHeader.height()-1-parseFloat(r.css("padding-top"))-parseFloat(r.css("padding-bottom")))}e.pullData(e.page),e.events()},T.prototype.initOpts=function(e){var t=this,i=(t.config,{checkbox:48,radio:48,space:15,numbers:40});e.checkbox&&(e.type="checkbox"),e.space&&(e.type="space"),e.type||(e.type="normal"),"normal"!==e.type&&(e.unresize=!0,e.width=e.width||i[e.type])},T.prototype.setInit=function(e){var t=this,i=t.config;return i.clientWidth=i.width||function(){var e=function(t){var a,l;t=t||i.elem.parent(),a=t.width();try{l="none"===t.css("display")}catch(e){}return!t[0]||a&&!l?a:e(t.parent())};return e()}(),"width"===e?i.clientWidth:void layui.each(i.cols,function(e,a){layui.each(a,function(l,n){if(!n)return void a.splice(l,1);if(n.key=e+"-"+l,n.hide=n.hide||!1,n.colGroup||n.colspan>1){var o=0;layui.each(i.cols[e+1],function(t,i){i.HAS_PARENT||o>1&&o==n.colspan||(i.HAS_PARENT=!0,i.parentKey=e+"-"+l,o+=parseInt(i.colspan>1?i.colspan:1))}),n.colGroup=!0}t.initOpts(n)})})},T.prototype.renderToolbar=function(){var e=this,a=e.config,l=['<div class="layui-inline" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></div>','<div class="layui-inline" lay-event="update"><i class="layui-icon layui-icon-edit"></i></div>','<div class="layui-inline" lay-event="delete"><i class="layui-icon layui-icon-delete"></i></div>'].join(""),n=e.layTool.find(".layui-table-tool-temp");if("default"===a.toolbar)n.html(l);else if(a.toolbar){var o=t(a.toolbar).html()||"";o&&n.html(i(o).render(a))}var r={filter:{title:"\u7b5b\u9009\u5217",layEvent:"LAYTABLE_COLS",icon:"layui-icon-cols"},exports:{title:"\u5bfc\u51fa",layEvent:"LAYTABLE_EXPORT",icon:"layui-icon-export"},print:{title:"\u6253\u5370",layEvent:"LAYTABLE_PRINT",icon:"layui-icon-print"}},d=[];"object"==typeof a.defaultToolbar&&layui.each(a.defaultToolbar,function(e,t){var i=r[t];i&&d.push('<div class="layui-inline" title="'+i.title+'" lay-event="'+i.layEvent+'"><i class="layui-icon '+i.icon+'"></i></div>')}),e.layTool.find(".layui-table-tool-self").html(d.join(""))},T.prototype.setParentCol=function(e,t){var i=this,a=i.config,l=i.layHeader.find('th[data-key="'+a.index+"-"+t+'"]'),n=parseInt(l.attr("colspan"))||0;if(l[0]){var o=t.split("-"),r=a.cols[o[0]][o[1]];e?n--:n++,l.attr("colspan",n),l[n<1?"addClass":"removeClass"](u),r.colspan=n,r.hide=n<1;var d=l.data("parentkey");d&&i.setParentCol(e,d)}},T.prototype.setColsPatch=function(){var e=this,t=e.config;layui.each(t.cols,function(t,i){layui.each(i,function(t,i){i.hide&&e.setParentCol(i.hide,i.parentKey)})})},T.prototype.setColsWidth=function(){var e=this,t=e.config,i=0,a=0,l=0,n=0,o=e.setInit("width");e.eachCols(function(e,t){t.hide||i++}),o=o-function(){return"line"===t.skin||"nob"===t.skin?2:i+1}()-e.getScrollWidth(e.layMain[0])-1;var r=function(e){layui.each(t.cols,function(i,r){layui.each(r,function(i,d){var c=0,s=d.minWidth||t.cellMinWidth;return d?void(d.colGroup||d.hide||(e?l&&l<s&&(a--,c=s):(c=d.width||0,/\d+%$/.test(c)?(c=Math.floor(parseFloat(c)/100*o))<s&&(c=s):c||(d.width=c=0,a++)),d.hide&&(c=0),n+=c)):void r.splice(i,1)})}),o>n&&a&&(l=(o-n)/a)};r(),r(!0),e.autoColNums=a,e.eachCols(function(i,a){var n=a.minWidth||t.cellMinWidth;a.colGroup||a.hide||(0===a.width?e.getCssRule(t.index+"-"+a.key,function(e){e.style.width=Math.floor(l>=n?l:n)+"px"}):/\d+%$/.test(a.width)&&e.getCssRule(t.index+"-"+a.key,function(e){e.style.width=Math.floor(parseFloat(a.width)/100*o)+"px"}))});var d=e.layMain.width()-e.getScrollWidth(e.layMain[0])-e.layMain.children("table").outerWidth();if(e.autoColNums&&d>=-i&&d<=i){var c=function(t){var i;return t=t||e.layHeader.eq(0).find("thead th:last-child"),i=t.data("field"),!i&&t.prev()[0]?c(t.prev()):t},s=c(),u=s.data("key");e.getCssRule(u,function(t){var i=t.style.width||s.outerWidth();t.style.width=parseFloat(i)+d+"px",e.layMain.height()-e.layMain.prop("clientHeight")>0&&(t.style.width=parseFloat(t.style.width)-1+"px")})}e.loading(!0)},T.prototype.reload=function(e){var i=this;i.config.data&&i.config.data.constructor===Array&&delete i.config.data,i.config=t.extend({},i.config,e),i.render()},T.prototype.page=1,T.prototype.pullData=function(e){var i=this,a=i.config,l=a.request,n=a.response,o=function(){"object"==typeof a.initSort&&i.sort(a.initSort.field,a.initSort.type)};if(i.startTime=(new Date).getTime(),a.url){var r={};r[l.pageName]=e,r[l.limitName]=a.limit;var d=t.extend(r,a.where);a.contentType&&0==a.contentType.indexOf("application/json")&&(d=JSON.stringify(d)),t.ajax({type:a.method||"get",url:a.url,contentType:a.contentType,data:d,dataType:"json",headers:a.headers||{},success:function(t){"function"==typeof a.parseData&&(t=a.parseData(t)||t),t[n.statusName]!=n.statusCode?(i.renderForm(),i.layMain.html('<div class="'+y+'">'+(t[n.msgName]||"\u8fd4\u56de\u7684\u6570\u636e\u4e0d\u7b26\u5408\u89c4\u8303\uff0c\u6b63\u786e\u7684\u6210\u529f\u72b6\u6001\u7801 ("+n.statusName+") \u5e94\u4e3a\uff1a"+n.statusCode)+"</div>")):(i.renderData(t,e,t[n.countName]),o(),a.time=(new Date).getTime()-i.startTime+" ms"),i.setColsWidth(),"function"==typeof a.done&&a.done(t,e,t[n.countName])},error:function(e,t){i.layMain.html('<div class="'+y+'">\u6570\u636e\u63a5\u53e3\u8bf7\u6c42\u5f02\u5e38\uff1a'+t+"</div>"),i.renderForm(),i.setColsWidth()}})}else if(a.data&&a.data.constructor===Array){var c={},s=e*a.limit-a.limit;c[n.dataName]=a.data.concat().splice(s,a.limit),c[n.countName]=a.data.length,i.renderData(c,e,a.data.length),o(),i.setColsWidth(),"function"==typeof a.done&&a.done(c,e,c[n.countName])}},T.prototype.eachCols=function(e){var t=this;return d.eachCols(null,e,t.config.cols),t},T.prototype.renderData=function(e,n,o,r){var c=this,s=c.config,h=e[s.response.dataName]||[],f=[],p=[],v=[],m=function(){var e;return!r&&c.sortKey?c.sort(c.sortKey.field,c.sortKey.sort,!0):(layui.each(h,function(a,l){var o=[],y=[],h=[],m=a+s.limit*(n-1)+1;0!==l.length&&(r||(l[d.config.indexName]=a),c.eachCols(function(n,r){var c=r.field||n,f=s.index+"-"+r.key,p=l[c];if(void 0!==p&&null!==p||(p=""),!r.colGroup){var v=['<td data-field="'+c+'" data-key="'+f+'" '+function(){var e=[];return r.edit&&e.push('data-edit="'+r.edit+'"'),r.align&&e.push('align="'+r.align+'"'),r.templet&&e.push('data-content="'+p+'"'),r.toolbar&&e.push('data-off="true"'),r.event&&e.push('lay-event="'+r.event+'"'),r.style&&e.push('style="'+r.style+'"'),r.minWidth&&e.push('data-minwidth="'+r.minWidth+'"'),e.join(" ")}()+' class="'+function(){var e=[];return r.hide&&e.push(u),r.field||e.push("layui-table-col-special"),e.join(" ")}()+'">','<div class="layui-table-cell laytable-cell-'+function(){return"normal"===r.type?f:f+" laytable-cell-"+r.type}()+'">'+function(){var n=t.extend(!0,{LAY_INDEX:m},l),o=d.config.checkName;switch(r.type){case"checkbox":return'<input type="checkbox" name="layTableCheckbox" lay-skin="primary" '+function(){return r[o]?(l[o]=r[o],r[o]?"checked":""):n[o]?"checked":""}()+">";case"radio":return n[o]&&(e=a),'<input type="radio" name="layTableRadio_'+s.index+'" '+(n[o]?"checked":"")+' lay-type="layTableRadio">';case"numbers":return m}return r.toolbar?i(t(r.toolbar).html()||"").render(n):r.templet?function(){return"function"==typeof r.templet?r.templet(n):i(t(r.templet).html()||String(p)).render(n)}():p}(),"</div></td>"].join("");o.push(v),r.fixed&&"right"!==r.fixed&&y.push(v),"right"===r.fixed&&h.push(v)}}),f.push('<tr data-index="'+a+'">'+o.join("")+"</tr>"),p.push('<tr data-index="'+a+'">'+y.join("")+"</tr>"),v.push('<tr data-index="'+a+'">'+h.join("")+"</tr>"))}),c.layBody.scrollTop(0),c.layMain.find("."+y).remove(),c.layMain.find("tbody").html(f.join("")),c.layFixLeft.find("tbody").html(p.join("")),c.layFixRight.find("tbody").html(v.join("")),c.renderForm(),"number"==typeof e&&c.setThisRowChecked(e),c.syncCheckAll(),c.scrollPatch(),l.close(c.tipsIndex),s.HAS_SET_COLS_PATCH||c.setColsPatch(),void(s.HAS_SET_COLS_PATCH=!0))};return c.key=s.id||s.index,d.cache[c.key]=h,c.layPage[0==o||0===h.length&&1==n?"addClass":"removeClass"](u),r?m():0===h.length?(c.renderForm(),c.layFixed.remove(),c.layMain.find("tbody").html(""),c.layMain.find("."+y).remove(),c.layMain.append('<div class="'+y+'">'+s.text.none+"</div>")):(m(),c.renderTotal(h),void(s.page&&(s.page=t.extend({elem:"layui-table-page"+s.index,count:o,limit:s.limit,limits:s.limits||[10,20,30,40,50,60,70,80,90],groups:3,layout:["prev","page","next","skip","count","limit"],prev:'<i class="layui-icon">&#xe603;</i>',next:'<i class="layui-icon">&#xe602;</i>',jump:function(e,t){t||(c.page=e.curr,s.limit=e.limit,c.loading(),c.pullData(e.curr))}},s.page),s.page.count=o,a.render(s.page))))},T.prototype.renderTotal=function(e){var t=this,i=t.config,a={};if(i.totalRow){layui.each(e,function(e,i){0!==i.length&&t.eachCols(function(e,t){var l=t.field||e,n=i[l];t.totalRow&&(a[l]=(a[l]||0)+(parseFloat(n)||0))})});var l=[];t.eachCols(function(e,t){var n=t.field||e;if(!t.hide){var o=['<td data-field="'+n+'" data-key="'+t.key+'" '+function(){var e=[];return t.align&&e.push('align="'+t.align+'"'),t.style&&e.push('style="'+t.style+'"'),t.minWidth&&e.push('data-minwidth="'+t.minWidth+'"'),e.join(" ")}()+">",'<div class="layui-table-cell laytable-cell-'+function(){var e=i.index+"-"+t.key;return"normal"===t.type?e:e+" laytable-cell-"+t.type}()+'">'+function(){var e=t.totalRowText||"";return t.totalRow?a[n]||e:e}(),"</div></td>"].join("");l.push(o)}}),t.layTotal.find("tbody").html("<tr>"+l.join("")+"</tr>")}},T.prototype.getColElem=function(e,t){var i=this,a=i.config;return e.eq(0).find(".laytable-cell-"+a.index+"-"+t+":eq(0)")},T.prototype.renderForm=function(e){n.render(e,"LAY-table-"+this.index)},T.prototype.setThisRowChecked=function(e){var t=this,i=(t.config,"layui-table-click");t.layBody.find('tr[data-index="'+e+'"]').addClass(i).siblings("tr").removeClass(i)},T.prototype.sort=function(e,i,a,l){var n,r,c=this,u={},y=c.config,h=y.elem.attr("lay-filter"),f=d.cache[c.key];"string"==typeof e&&c.layHeader.find("th").each(function(i,a){var l=t(this),o=l.data("field");if(o===e)return e=l,n=o,!1});try{var n=n||e.data("field"),p=e.data("key");if(c.sortKey&&!a&&n===c.sortKey.field&&i===c.sortKey.sort)return;var m=c.layHeader.find("th .laytable-cell-"+p).find(v);c.layHeader.find("th").find(v).removeAttr("lay-sort"),m.attr("lay-sort",i||null),c.layFixed.find("th")}catch(e){return o.error("Table modules: Did not match to field")}c.sortKey={field:n,sort:i},"asc"===i?r=layui.sort(f,n):"desc"===i?r=layui.sort(f,n,!0):(r=layui.sort(f,d.config.indexName),delete c.sortKey),u[y.response.dataName]=r,c.renderData(u,c.page,c.count,!0),l&&layui.event.call(e,s,"sort("+h+")",{field:n,type:i})},T.prototype.loading=function(e){var i=this;i.config.loading&&(e?(i.layInit&&i.layInit.remove(),delete i.layInit,i.layBox.find(".layui-table-init").remove()):(i.layInit=t(['<div class="layui-table-init">','<i class="layui-icon layui-icon-loading layui-icon"></i>',"</div>"].join("")),i.layBox.append(i.layInit)))},T.prototype.setCheckData=function(e,t){var i=this,a=i.config,l=d.cache[i.key];l[e]&&l[e].constructor!==Array&&(l[e][a.checkName]=t)},T.prototype.syncCheckAll=function(){var e=this,t=e.config,i=e.layHeader.find('input[name="layTableCheckbox"]'),a=function(i){return e.eachCols(function(e,a){"checkbox"===a.type&&(a[t.checkName]=i)}),i};i[0]&&(d.checkStatus(e.key).isAll?(i[0].checked||(i.prop("checked",!0),e.renderForm("checkbox")),a(!0)):(i[0].checked&&(i.prop("checked",!1),e.renderForm("checkbox")),a(!1)))},T.prototype.getCssRule=function(e,t){var i=this,a=i.elem.find("style")[0],l=a.sheet||a.styleSheet||{},n=l.cssRules||l.rules;layui.each(n,function(i,a){if(a.selectorText===".laytable-cell-"+e)return t(a),!0})},T.prototype.fullSize=function(){var e,t=this,i=t.config,a=i.height;t.fullHeightGap&&(a=C.height()-t.fullHeightGap,a<135&&(a=135),t.elem.css("height",a)),a&&(e=parseFloat(a)-(t.layHeader.outerHeight()||38),i.toolbar&&(e-=t.layTool.outerHeight()||50),i.totalRow&&(e-=t.layTotal.outerHeight()||40),i.page&&(e=e-(t.layPage.outerHeight()||41)-2),t.layMain.css("height",e))},T.prototype.getScrollWidth=function(e){var t=0;return e?t=e.offsetWidth-e.clientWidth:(e=document.createElement("div"),e.style.width="100px",e.style.height="100px",e.style.overflowY="scroll",document.body.appendChild(e),t=e.offsetWidth-e.clientWidth,document.body.removeChild(e)),t},T.prototype.scrollPatch=function(){var e=this,i=e.layMain.children("table"),a=e.layMain.width()-e.layMain.prop("clientWidth"),l=e.layMain.height()-e.layMain.prop("clientHeight"),n=(e.getScrollWidth(e.layMain[0]),i.outerWidth()-e.layMain.width()),o=function(e){if(a&&l){if(e=e.eq(0),!e.find(".layui-table-patch")[0]){var i=t('<th class="layui-table-patch"><div class="layui-table-cell"></div></th>');i.find("div").css({width:a}),e.find("tr").append(i)}}else e.find(".layui-table-patch").remove()};o(e.layHeader),o(e.layTotal);var r=e.layMain.height(),d=r-l;e.layFixed.find(p).css("height",i.height()>d?d:"auto"),e.layFixRight[n>0?"removeClass":"addClass"](u),e.layFixRight.css("right",a-1)},T.prototype.events=function(){var e,a=this,o=a.config,c=t("body"),y={},h=a.layHeader.find("th"),f=".layui-table-cell",b=o.elem.attr("lay-filter");a.layTool.on("click","*[lay-event]",function(e){var i=t(this),c=i.attr("lay-event"),y=function(e){var l=t(e.list),n=t('<ul class="layui-table-tool-panel"></ul>');n.html(l),i.find(".layui-table-tool-panel")[0]||i.append(n),a.renderForm(),n.on("click",function(e){layui.stope(e)}),e.done&&e.done(n,l)};switch(layui.stope(e),w.trigger("table.tool.panel.remove"),l.close(a.tipsIndex),c){case"LAYTABLE_COLS":y({list:function(){var e=[];return a.eachCols(function(t,i){i.field&&"normal"==i.type&&e.push('<li><input type="checkbox" name="'+i.field+'" data-key="'+i.key+'" data-parentkey="'+(i.parentKey||"")+'" lay-skin="primary" '+(i.hide?"":"checked")+' title="'+(i.title||i.field)+'" lay-filter="LAY_TABLE_TOOL_COLS"></li>')}),e.join("")}(),done:function(){n.on("checkbox(LAY_TABLE_TOOL_COLS)",function(e){var i=t(e.elem),l=this.checked,n=i.data("key"),r=i.data("parentkey");layui.each(o.cols,function(e,t){layui.each(t,function(t,i){if(e+"-"+t===n){var d=i.hide;i.hide=!l,a.elem.find('*[data-key="'+o.index+"-"+n+'"]')[l?"removeClass":"addClass"](u),d!=i.hide&&a.setParentCol(!l,r),a.fullSize(),a.scrollPatch(),a.setColsWidth()}})})})}});break;case"LAYTABLE_EXPORT":r.ie?l.tips("\u5bfc\u51fa\u529f\u80fd\u4e0d\u652f\u6301 IE\uff0c\u8bf7\u7528 Chrome \u7b49\u9ad8\u7ea7\u6d4f\u89c8\u5668\u5bfc\u51fa",this,{tips:3}):y({list:function(){return['<li data-type="csv">\u5bfc\u51fa\u5230 Csv \u6587\u4ef6</li>','<li data-type="xls">\u5bfc\u51fa\u5230 Excel \u6587\u4ef6</li>'].join("")}(),done:function(e,i){i.on("click",function(){var e=t(this).data("type");d.exportFile(o.id,null,e)})}});break;case"LAYTABLE_PRINT":var h=window.open("\u6253\u5370\u7a97\u53e3","_blank"),f=["<style>","body{font-size: 12px; color: #666;}","table{width: 100%; border-collapse: collapse; border-spacing: 0;}","th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #666;}","a{color: #666; text-decoration:none;}","*.layui-hide{display: none}","</style>"].join(""),p=t(a.layHeader.html());p.append(a.layMain.find("table").html()),p.find("th.layui-table-patch").remove(),p.find(".layui-table-col-special").remove(),h.document.write(f+p.prop("outerHTML")),h.document.close(),h.print(),h.close()}layui.event.call(this,s,"toolbar("+b+")",t.extend({event:c,config:o},{}))}),h.on("mousemove",function(e){var i=t(this),a=i.offset().left,l=e.clientX-a;i.data("unresize")||y.resizeStart||(y.allowResize=i.width()-l<=10,c.css("cursor",y.allowResize?"col-resize":""))}).on("mouseleave",function(){t(this),y.resizeStart||c.css("cursor","")}).on("mousedown",function(e){var i=t(this);if(y.allowResize){var l=i.data("key");e.preventDefault(),y.resizeStart=!0,y.offset=[e.clientX,e.clientY],a.getCssRule(l,function(e){var t=e.style.width||i.outerWidth();y.rule=e,y.ruleWidth=parseFloat(t),y.minWidth=i.data("minwidth")||o.cellMinWidth})}}),w.on("mousemove",function(t){if(y.resizeStart){if(t.preventDefault(),y.rule){var i=y.ruleWidth+t.clientX-y.offset[0];i<y.minWidth&&(i=y.minWidth),y.rule.style.width=i+"px",l.close(a.tipsIndex)}e=1}}).on("mouseup",function(t){y.resizeStart&&(y={},c.css("cursor",""),a.scrollPatch()),2===e&&(e=null)}),h.on("click",function(i){var l,n=t(this),o=n.find(v),r=o.attr("lay-sort");return o[0]&&1!==e?(l="asc"===r?"desc":"desc"===r?null:"asc",void a.sort(n,l,null,!0)):e=2}).find(v+" .layui-edge ").on("click",function(e){var i=t(this),l=i.index(),n=i.parents("th").eq(0).data("field");layui.stope(e),0===l?a.sort(n,"asc",null,!0):a.sort(n,"desc",null,!0)});var x=function(e){var l=t(this),n=l.parents("tr").eq(0).data("index"),o=a.layBody.find('tr[data-index="'+n+'"]'),r=d.cache[a.key][n];return t.extend({tr:o,data:d.clearCacheKey(r),del:function(){d.cache[a.key][n]=[],o.remove(),a.scrollPatch()},update:function(e){e=e||{},layui.each(e,function(e,l){if(e in r){var n,d=o.children('td[data-field="'+e+'"]');r[e]=l,a.eachCols(function(t,i){i.field==e&&i.templet&&(n=i.templet)}),d.children(f).html(function(){return n?function(){return"function"==typeof n?n(r):i(t(n).html()||l).render(r)}():l}()),d.data("content",l)}})}},e)};a.elem.on("click",'input[name="layTableCheckbox"]+',function(){var e=t(this).prev(),i=a.layBody.find('input[name="layTableCheckbox"]'),l=e.parents("tr").eq(0).data("index"),n=e[0].checked,o="layTableAllChoose"===e.attr("lay-filter");o?(i.each(function(e,t){t.checked=n,a.setCheckData(e,n)}),a.syncCheckAll(),a.renderForm("checkbox")):(a.setCheckData(l,n),a.syncCheckAll()),layui.event.call(this,s,"checkbox("+b+")",x.call(this,{checked:n,type:o?"all":"one"}))}),a.elem.on("click",'input[lay-type="layTableRadio"]+',function(){var e=t(this).prev(),i=e[0].checked,l=d.cache[a.key],n=e.parents("tr").eq(0).data("index");layui.each(l,function(e,t){n===e?t.LAY_CHECKED=!0:delete t.LAY_CHECKED}),a.setThisRowChecked(n),layui.event.call(this,s,"radio("+b+")",x.call(this,{checked:i}))}),a.layBody.on("mouseenter","tr",function(){var e=t(this),i=e.index();a.layBody.find("tr:eq("+i+")").addClass(g)}).on("mouseleave","tr",function(){var e=t(this),i=e.index();a.layBody.find("tr:eq("+i+")").removeClass(g)}).on("click","tr",function(){k.call(this,"row")}).on("dblclick","tr",function(){k.call(this,"rowDouble")});var k=function(e){var i=t(this);layui.event.call(this,s,e+"("+b+")",x.call(i.children("td")[0]))};a.layBody.on("change","."+m,function(){var e=t(this),i=this.value,l=e.parent().data("field"),n=e.parents("tr").eq(0).data("index");d.cache[a.key][n][l]=i,layui.event.call(this,s,"edit("+b+")",x.call(this,{value:i,field:l}))}).on("blur","."+m,function(){var e,l=t(this),n=l.parent().data("field"),o=l.parents("tr").eq(0).data("index"),r=d.cache[a.key][o];a.eachCols(function(t,i){i.field==n&&i.templet&&(e=i.templet)}),l.siblings(f).html(function(a){return e?function(){return"function"==typeof e?e(r):i(t(e).html()||this.value).render(r)}():a}(this.value)),l.parent().data("content",this.value),l.remove()}),a.layBody.on("click","td",function(){var e=t(this),i=(e.data("field"),e.data("edit")),a=e.children(f);if(!e.data("off")&&i){var l=t('<input class="layui-input '+m+'">');return l[0].value=e.data("content")||a.text(),e.find("."+m)[0]||e.append(l),void l.focus()}}).on("mouseenter","td",function(){A.call(this)}).on("mouseleave","td",function(){A.call(this,"hide")});var T="layui-table-grid-down",A=function(e){var i=t(this),a=i.children(f);if(e)i.find(".layui-table-grid-down").remove();else if(a.prop("scrollWidth")>a.outerWidth()){if(a.find("."+T)[0])return;i.append('<div class="'+T+'"><i class="layui-icon layui-icon-down"></i></div>')}};a.layBody.on("click","."+T,function(){var e=t(this),i=e.parent(),n=i.children(f);a.tipsIndex=l.tips(['<div class="layui-table-tips-main" style="margin-top: -'+(n.height()+16)+"px;"+function(){return"sm"===o.size?"padding: 4px 15px; font-size: 12px;":"lg"===o.size?"padding: 14px 15px;":""}()+'">',n.html(),"</div>",'<i class="layui-icon layui-table-tips-c layui-icon-close"></i>'].join(""),n[0],{tips:[3,""],time:-1,anim:-1,maxWidth:r.ios||r.android?300:a.elem.width()/2,isOutAnim:!1,skin:"layui-table-tips",success:function(e,t){e.find(".layui-table-tips-c").on("click",function(){l.close(t)})}})}),a.layBody.on("click","*[lay-event]",function(){var e=t(this),i=e.parents("tr").eq(0).data("index");layui.event.call(this,s,"tool("+b+")",x.call(this,{event:e.attr("lay-event")})),a.setThisRowChecked(i)}),a.layMain.on("scroll",function(){var e=t(this),i=e.scrollLeft(),n=e.scrollTop();a.layHeader.scrollLeft(i),a.layTotal.scrollLeft(i),a.layFixed.find(p).scrollTop(n),l.close(a.tipsIndex)}),w.on("click",function(){w.trigger("table.remove.tool.panel")}),w.on("table.remove.tool.panel",function(){t(".layui-table-tool-panel").remove()}),C.on("resize",function(){a.fullSize(),a.scrollPatch(),a.setColsWidth()})},d.init=function(e,i){i=i||{};var a=this,l=t(e?'table[lay-filter="'+e+'"]':".layui-table[lay-data]"),n="Table element property lay-data configuration item has a syntax error: ";return l.each(function(){var a=t(this),l=a.attr("lay-data");try{l=new Function("return "+l)()}catch(e){o.error(n+l)}var r=[],c=t.extend({elem:this,cols:[],data:[],skin:a.attr("lay-skin"),size:a.attr("lay-size"),even:"string"==typeof a.attr("lay-even")},d.config,i,l);e&&a.hide(),a.find("thead>tr").each(function(e){c.cols[e]=[],t(this).children().each(function(i){var a=t(this),l=a.attr("lay-data");try{l=new Function("return "+l)()}catch(e){return o.error(n+l)}var d=t.extend({title:a.text(),colspan:a.attr("colspan")||0,rowspan:a.attr("rowspan")||0},l);d.colspan<2&&r.push(d),c.cols[e].push(d)})}),a.find("tbody>tr").each(function(e){var i=t(this),a={};i.children("td").each(function(e,i){var l=t(this),n=l.data("field");if(n)return a[n]=l.html()}),layui.each(r,function(e,t){var l=i.children("td").eq(e);a[t.field]=l.html()}),c.data[e]=a}),d.render(c)}),a},c.config={},d.eachCols=function(e,i,a){var l=c.config[e]||{},n=[],o=0;a=t.extend(!0,[],a||l.cols),layui.each(a,function(e,t){layui.each(t,function(t,i){if(i.colGroup){var l=0;o++,i.CHILD_COLS=[],layui.each(a[e+1],function(e,t){t.PARENT_COL_INDEX||l>1&&l==i.colspan||(t.PARENT_COL_INDEX=o,i.CHILD_COLS.push(t),l+=parseInt(t.colspan>1?t.colspan:1))})}i.PARENT_COL_INDEX||n.push(i)})});var r=function(e){layui.each(e||n,function(e,t){return t.CHILD_COLS?r(t.CHILD_COLS):void("function"==typeof i&&i(e,t))})};r()},d.checkStatus=function(e){var t=0,i=0,a=[],l=d.cache[e]||[];return layui.each(l,function(e,l){return l.constructor===Array?void i++:void(l[d.config.checkName]&&(t++,a.push(d.clearCacheKey(l))))}),{data:a,isAll:!!l.length&&t===l.length-i}},d.exportFile=function(e,t,i){t=t||d.clearCacheKey(d.cache[e]),i=i||"csv";var a=c.config[e]||{},l={csv:"text/csv",xls:"application/vnd.ms-excel"}[i],n=document.createElement("a");return r.ie?o.error("IE_NOT_SUPPORT_EXPORTS"):(n.href="data:"+l+";charset=utf-8,\ufeff"+encodeURIComponent(function(){var i=[],a=[];return layui.each(t,function(t,l){var n=[];"object"==typeof e?(layui.each(e,function(e,a){0==t&&i.push(a||"")}),layui.each(d.clearCacheKey(l),function(e,t){n.push(t)})):d.eachCols(e,function(e,a){a.field&&"normal"==a.type&&!a.hide&&(0==t&&i.push(a.title||""),n.push(l[a.field]))}),a.push(n.join(","))}),i.join(",")+"\r\n"+a.join("\r\n")}()),n.download=(a.title||"table_"+(a.index||""))+"."+i,document.body.appendChild(n),n.click(),void document.body.removeChild(n))},d.reload=function(e,i){var a=c.config[e];return i=i||{},a?(i.data&&i.data.constructor===Array&&delete a.data,d.render(t.extend(!0,{},a,i))):o.error("The ID option was not found in the table instance")},d.render=function(e){var t=new T(e);return c.call(t)},d.clearCacheKey=function(e){return e=t.extend({},e),delete e[d.config.checkName],delete e[d.config.indexName],e},d.init(),e(s,d)});