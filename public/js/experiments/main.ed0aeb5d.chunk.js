(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{21:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),s=a(1),c=a(2),o=a(4),l=a(3),p=a(6),m=a(7);var u=function(e,t,a){var n,r=(n={credentials:"include",method:t},Object(m.a)(n,"credentials","omit"),Object(m.a)(n,"headers",{"Content-Type":"application/json",Accept:"application/json",Authorization:window.token}),n);return"GET"!==t&&(r.body=JSON.stringify(a)),fetch(window.api+e,r).then((function(e){if(200!==e.status&&201!==e.status&&204!==e.status){var a=new Error("Request failed");throw a.json=e.json(),a}return"DELETE"!==t?e.json():e}))};var d=function(e){var t,a,n,r,i,s,c=void 0===e.ownerId?window.userId:e.ownerId,o="feature-toggle"===window.mode?"feature-toggles":"experiments",l=null!==(t=e.alias)&&void 0!==t?t:e.name.replace(/ /g,"-"),p={data:{type:o,attributes:{name:e.name,alias:l,is_enabled:null===(a=e.isEnabled)||void 0===a||a,is_feature_toggle:null!==(n=e.isFeatureToggle)&&void 0!==n&&n,config:[]},relationships:{branches:{data:e.branches.reduce((function(e,t){return e.push({id:t.id,type:"experiment_branches"}),e}),[])},owner:{data:{id:c,type:"users"}}}},included:e.branches.reduce((function(t,a){return t.push({id:a.id,type:"experiment_branches",attributes:{name:a.uid,percent:a.percent,uid:a.uid,config:{}},relationships:{experiment:{data:{id:e.id,type:"experiments"}},owner:{data:{id:c,type:"users"}}}}),t}),[])};return void 0!==e.id&&(p.data.id=e.id),i="feature-toggle"===window.mode?"feature-toggles/"+(null!==(s=e.id)&&void 0!==s?s:""):"experiments/"+(null!==(r=e.id)&&void 0!==r?r:""),u(i,void 0===e.id?"POST":"PATCH",p)};function h(e){var t=e.showError?{display:"block"}:{display:"none"};return r.a.createElement("div",{className:"input_error",style:t,id:e.id},e.errorText)}var v=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={error:!1,inputError:{}},n}return Object(c.a)(a,[{key:"showError",value:function(e){0===e.length?this.setState({error:!0,inputError:{"box-shadow":"inset 0 0 0 0.0625rem #dc3545, 0 0 0 0.25rem #e0e3e9"}}):this.setState({error:!1,inputError:{}})}},{key:"render",value:function(){var e=this,t=String(this.props.title);return r.a.createElement("div",{className:"create-setting__item"},r.a.createElement("label",{className:"create-setting__label"},t),r.a.createElement("input",{id:"input_uid",autoComplete:"off",style:this.state.inputError,type:"text","data-error":"\u041e\u0448\u0438\u0431\u043a\u0430",placeholder:this.props.placeholder,className:"input create-setting__input",value:this.props.value,disabled:"edit"===this.props.mode,"data-id":this.props.dataId,onChange:function(t){e.showError(t.target.value),e.props.onChange(t)}}),r.a.createElement(h,{showError:this.state.error,id:"error_"+t.toLowerCase(),errorText:"Please enter "+t.toLowerCase()+"."}))}}]),a}(r.a.Component),g=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t="feature-toggle"===window.mode?{display:"none"}:{};return console.log(this.props.branches),r.a.createElement(r.a.Fragment,null,this.props.branches.map((function(a){var n;return r.a.createElement("div",{className:"create-setting__row",style:t},r.a.createElement(v,{title:"Branch name",dataId:a.id,value:a.value,placeholder:"Branch name",onChange:function(t){return e.props.onChangeBranchName(t)}}),r.a.createElement("div",{className:"create-setting__item2"},r.a.createElement("div",{className:"create-setting__item-digit"},r.a.createElement("label",{className:"create-setting__label"},"Split"),r.a.createElement("div",{className:"quantity"},r.a.createElement("span",{className:"quantity__label"},"%"),r.a.createElement("div",{className:"quantity__input"},r.a.createElement("input",{autoComplete:"off",type:"text",name:"form[]","data-id":a.id,id:"branch-percent-"+a.id,value:null!==(n=a.percent)&&void 0!==n?n:"0",onChange:function(t){return e.props.onChangePercent(t)}})),r.a.createElement("div",{className:"quantity__buttons",onClick:function(t){return e.props.onClickPercent(t)}},r.a.createElement("div",{className:"quantity__button quantity__button_plus"},r.a.createElement("svg",{className:"quantity__icon"},r.a.createElement("use",{href:"/img/icons/icons.svg#arrow-quantity"}))),r.a.createElement("div",{className:"quantity__button quantity__button_minus"},r.a.createElement("svg",{className:"quantity__icon"},r.a.createElement("use",{href:"/img/icons/icons.svg#arrow-quantity"})))))),r.a.createElement("button",{className:"create-setting__remove","data-id":a.dataId,onClick:function(t){return e.props.onClickRemoveBranch(t)}},r.a.createElement("svg",{className:"create-setting__remove-icon"},r.a.createElement("use",{href:"/img/icons/icons.svg#close"})))))})))}}]),a}(r.a.Component),f=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).styleCreateExperimentBlock={display:"none"},n.state={experimentName:null,experimentUid:null},n.parent=e.parent,n.props.parent.experimentCreate=Object(p.a)(n),n.submitHandle=n.submitHandle.bind(Object(p.a)(n)),n.map={},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"submitHandle",value:function(e){var t=this;return this.props.parent.appState.adding=!0,this.forceUpdate(),"feature-toggle"===window.mode&&"edit"!==this.props.parent.appState.mode&&this.createFeatureToggle(),e.preventDefault(),d(this.props.parent.appState.activeItem).then((function(e){t.props.parent.experimentList.load(),t.showNotifications(),t.redirectToExperiments(),t.props.parent.refreshState(),t.props.parent.appState.adding=!1,t.forceUpdate()})),!1}},{key:"showNotifications",value:function(){var e,t,a=this.props.parent.appState.mode;switch(t="feature-toggle"===window.mode?"Feature flag":"Experiment",a){case"create":e="has been successfully created";break;case"edit":e="has been successfully updated";break;case"delete":e="has been successfully deleted"}this.parent.toast.success(t+" "+e,{style:{background:"#51A351",color:"#FFFFFF",padding:"16px"},iconTheme:{primary:"#51A351",secondary:"#FFFFFF"}})}},{key:"submitHandleCheckbox",value:function(e){var t=this;d(e).then((function(e){t.props.parent.experimentList.load(),t.props.parent.refreshState(),t.forceUpdate()}))}},{key:"createFeatureToggle",value:function(){var e=["On","Off"],t=[100,0];this.props.parent.appState.activeItem.isFeatureToggle=!0,this.props.parent.appState.activeItem.branches=[];for(var a=0;a<2;a++)this.props.parent.appState.activeItem.branches.push({id:Date.now().toString(),uid:e[a],percent:t[a]})}},{key:"error",value:function(e){setTimeout((function(){document.getElementById("message").style="display:block"}),200),this.message=e}},{key:"createBranchId",value:function(){this.props.parent.appState.activeItem.branches=[];for(var e=0;e<2;e++)this.props.parent.appState.activeItem.branches.push({id:Date.now().toString()+e});this.forceUpdate()}},{key:"addBranch",value:function(e){return void 0===this.props.parent.appState.activeItem.branches&&(this.props.parent.appState.activeItem.branches=[]),this.props.parent.appState.activeItem.branches.push({id:Date.now().toString()}),this.forceUpdate(),e.preventDefault(),!1}},{key:"removeBranch",value:function(e){e.preventDefault();var t=e.currentTarget.getAttribute("data-id");this.props.parent.appState.activeItem.branches=this.props.parent.appState.activeItem.branches.filter((function(e){return e.id!==t})),this.forceUpdate()}},{key:"createExperiment",value:function(e){this.styleCreateExperimentBlock={display:"block"},this.createBranchId(),this.forceUpdate()}},{key:"changeName",value:function(e){var t,a=e.target.value;this.props.parent.changeName(a),this.setState({experimentName:a,experimentUid:null!==(t=this.props.parent.appState.activeItem.alias)&&void 0!==t?t:a.replace(/ /g,"-")})}},{key:"changeUid",value:function(e){var t=e.target.value;this.props.parent.changeUid(t),this.setState({experimentUid:t.replace(/ /g,"-")})}},{key:"changePercent",value:function(e){this.props.parent.changePercent(e),this.forceUpdate()}},{key:"changeBranchName",value:function(e){this.props.parent.changeBranchName(e),this.forceUpdate()}},{key:"redirectToExperiments",value:function(){if("create"===this.props.parent.appState.mode){var e="feature-toggle"===window.mode?"all":"active";this.props.parent.experimentList.setActiveTab(e),this.props.parent.experimentList.experimentStyleBlock={display:"block"},this.styleCreateExperimentBlock={display:"none"},document.getElementsByClassName("top-setting__item")[0].classList.add("active"),this.props.parent.experimentList.getExperimentsByTab()}this.forceUpdate()}},{key:"render",value:function(){var e,t=this,a="feature-toggle"===window.mode?{display:"none"}:{},n="feature-toggle"===window.mode?"flag":"experiment",i=null!==(e=this.props.parent.appState.activeItem.branches)&&void 0!==e?e:[],s="feature-toggle"===window.mode?"Feature flags name":"Experiment name";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"setting__create create-setting",style:this.styleCreateExperimentBlock},r.a.createElement("div",{className:"create-setting__block"},r.a.createElement("div",{className:"create-setting__title"},"Create a new ",n),r.a.createElement("form",{className:"create-setting__form"},r.a.createElement(v,{title:s,value:this.state.experimentName,placeholder:"Button color test",mode:this.props.parent.appState.mode,onChange:function(e){return t.changeName(e)}}),r.a.createElement(v,{title:"Experiment uid",value:this.state.experimentUid,placeholder:"Button",mode:this.props.parent.appState.mode,onChange:function(e){return t.changeUid(e)}}))),r.a.createElement("div",{className:"create-setting__block"},r.a.createElement("div",{className:"create-setting__title",style:a},"Branches"),r.a.createElement("form",{className:"create-setting__form",onSubmit:this.submitHandle.bind(this)},i.map((function(e){return r.a.createElement(g,{dataId:e.id,percent:e.percent,value:e.uid,onChangeBranchName:function(e){return t.changeBranchName(e)},onChangePercent:function(e){return t.changePercent(e)},onClickPercent:function(e){return t.changePercent(e)},onClickRemoveBranch:function(e){return t.removeBranch(e)}})})),r.a.createElement("button",{onClick:this.addBranch.bind(this),className:"create-setting__button",style:a},"+ Add another branch"),r.a.createElement("div",{className:"create-setting__bottom"},r.a.createElement("button",{className:"create-setting__update button",type:"submit"},"Create"))))))}}]),a}(r.a.Component),b=a(10);var E=function(){return u("experiments?include=branches","GET",{}).then((function(e){var t=e.data.reduce((function(t,a){var n="https://abrouter.com/api/v1/experiment/run?token="+e.meta.token+"&experimentId="+a.id+"&userId={USER_ID}",r={name:a.attributes.name,alias:a.attributes.alias,branches:[],isEnabled:a.attributes.is_enabled,isFeatureToggle:a.attributes.is_feature_toggle,id:a.id,ownerId:a.relationships.owner.data.id,tryUrl:n},i=a.relationships.branches.data.reduce((function(t,a){return t.push(e.included.filter((function(e){return e.id===a.id}))[0]),t}),[]);return r.branches=i.reduce((function(e,t){var a={name:t.attributes.name,percent:t.attributes.percent,uid:t.attributes.uid,id:t.id};return e.push(a),e}),[]),t.push(r),t}),[]);return t.token=e.meta.token,t}))};var _=function(e){void 0===e.ownerId?window.userId:e.ownerId;var t={data:{id:e.id,type:"experiments"}};return u("experiments/"+e.id,"DELETE",t)},y=a(18),x=a.n(y),N=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t="feature-toggle"===window.mode?"Add new flag":"Create new experiment";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"setting__top top-setting"},r.a.createElement("div",{className:"top-setting__info"},"You don't have active experiments, yet."),r.a.createElement("button",{className:"top-setting__btn",onClick:function(t){return e.props.createExperiment(t)}},r.a.createElement("svg",{className:"top-setting__icon"},r.a.createElement("use",{href:"/img/icons/icons.svg#plus"})),r.a.createElement("svg",{className:"top-setting__icon top-setting__icon2"},r.a.createElement("use",{href:"/img/icons/icons.svg#plus2"})),r.a.createElement("span",null,t))),r.a.createElement("div",{className:"setting__image",style:this.props.experimentStyleBlock},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"/img/png/setting.webp",type:"image/webp"}),r.a.createElement("img",{src:"/img/png/setting.png?_v=1644581884261",alt:"Image"}))))}}]),a}(r.a.Component);function w(e){for(var t=0,a=0,n=e.experiments,i=e.experiments.length,s=0;s<i;s++)!0===n[s].isEnabled?t++:a++;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-setting__item active",onClick:function(t){return e.showActiveExperiments(t)}},r.a.createElement("div",{className:"top-setting__item-value"},"Active"),r.a.createElement("span",{className:"top-setting__count"},t)),r.a.createElement("div",{className:"top-setting__item",onClick:function(t){return e.showNotActiveExperiments(t)}},r.a.createElement("div",{className:"top-setting__item-value"},"Not active"),r.a.createElement("span",{className:"top-setting__count"},a)))}function k(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-setting__item active",onClick:function(t){return e.showAllExperiments(t)}},r.a.createElement("div",{className:"top-setting__item-value"},"All"),r.a.createElement("span",{className:"top-setting__count"},e.experiments)))}function S(e){var t="feature-toggle"===window.mode?r.a.createElement(k,{experiments:e.experiments.length,showAllExperiments:function(t){return e.showAllExperiments(t)}}):r.a.createElement(w,{experiments:e.experiments,showActiveExperiments:function(t){return e.showActiveExperiments(t)},showNotActiveExperiments:function(t){return e.showNotActiveExperiments(t)}});return r.a.createElement("div",{className:"top-setting__navigation"},t)}var C=a(9),I=(a(38),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).experimentStyleBlock={display:"block"},n.state={isLoaded:0,activeTab:"feature-toggle"===window.mode?"all":"active",experiments:[],displayExperiments:[]},n.props=e,n.props.parent.experimentList=Object(p.a)(n),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){"mainpage"!==window.mode?this.load():this.setState({isLoaded:1})}},{key:"load",value:function(){var e=this;this.setState({isLoaded:0}),E().then((function(t){e.props.state.experiments=t,"feature-toggle"===window.mode?e.setState({experiments:t.filter((function(e){return!0===e.isFeatureToggle}))}):e.setState({experiments:t.filter((function(e){return!1===e.isFeatureToggle}))}),e.getExperimentsByTab(),e.setState({isLoaded:1})}))}},{key:"getExperimentsByTab",value:function(){var e;switch(this.state.activeTab){case"active":e=!0;break;case"not active":e=!1}"all"===this.state.activeTab?this.setState({displayExperiments:this.state.experiments}):this.setState({displayExperiments:this.state.experiments.filter((function(t){return t.isEnabled===e}))})}},{key:"removeExperiment",value:function(e,t){var a=this;this.props.parent.appState.mode="delete",this.props.parent.appState.activeItem=e,t.preventDefault(),_(this.props.parent.appState.activeItem).then((function(){a.load(),a.props.parent.experimentCreate.showNotifications(),a.props.parent.refreshState(),a.forceUpdate(),a.props.parent.appState.adding=!1}))}},{key:"removeBranch",value:function(e){e.preventDefault();var t=e.currentTarget.getAttribute("data-id");this.props.parent.appState.activeItem.branches=this.props.parent.appState.activeItem.branches.filter((function(e){return e.id!==t})),this.forceUpdate()}},{key:"edit",value:function(e,t){this.deleteClassEdit(),document.getElementById("experiment-"+e.id).classList.add("edit"),t.preventDefault(),this.forceUpdate(),this.props.parent.edit(e)}},{key:"editCheckbox",value:function(e){e.isEnabled=!0!==e.isEnabled,this.props.parent.experimentCreate.submitHandleCheckbox(e),this.forceUpdate()}},{key:"cancelEdit",value:function(e){this.deleteClassEdit(),e.preventDefault(),this.props.parent.appState.mode="create",this.props.parent.appState.activeItem={},this.forceUpdate()}},{key:"createExperiment",value:function(e){this.deleteClassActive(e),this.props.parent.refreshState(),this.experimentStyleBlock={display:"none"},this.props.parent.experimentCreate.createExperiment(e),this.forceUpdate()}},{key:"submitHandle",value:function(e){this.deleteClassEdit(),this.props.parent.experimentCreate.submitHandle(e)}},{key:"addClassNameActive",value:function(e){this.experimentStyleBlock={display:"block"},this.props.parent.experimentCreate.styleCreateExperimentBlock={display:"none"},this.deleteClassActive(e),e.currentTarget.classList.add("active"),this.props.parent.experimentCreate.forceUpdate(),this.forceUpdate()}},{key:"deleteClassActive",value:function(){for(var e=document.getElementsByClassName("top-setting__item"),t=0;t<e.length;t++)e[t].classList.remove("active")}},{key:"deleteClassEdit",value:function(){for(var e=document.getElementsByClassName("table-setting__wrap"),t=0;t<e.length;t++)e[t].classList.remove("edit")}},{key:"showAllExperiment",value:function(e){var t=this;this.setState({activeTab:"all"},(function(){t.getExperimentsByTab()})),this.addClassNameActive(e)}},{key:"showActiveExperiment",value:function(e){var t=this;this.setState({activeTab:"active"},(function(){t.getExperimentsByTab()})),this.addClassNameActive(e)}},{key:"showNotActiveExperiment",value:function(e){var t=this;this.setState({activeTab:"not active"},(function(){t.getExperimentsByTab()})),this.addClassNameActive(e)}},{key:"showAwaitingLaunchExperiment",value:function(e){var t=this;this.displayExperiments=[],this.setState({activeTab:"awaiting launch"},(function(){t.getExperimentsByTab()})),this.addClassNameActive(e)}},{key:"countActiveAndNotActiveExperiments",value:function(){for(var e=0,t=0,a=this.state.experiments,n=this.state.experiments.length,r=0;r<n;r++)!0===a[r].isEnabled?e++:t++;return{activeExperiments:e,notActiveExperiments:t}}},{key:"changeName",value:function(e){this.props.parent.changeName(e),this.forceUpdate()}},{key:"changePercent",value:function(e){this.props.parent.changePercent(e),this.forceUpdate()}},{key:"changeBranchName",value:function(e){this.props.parent.changeBranchName(e),this.forceUpdate()}},{key:"setActiveTab",value:function(e){this.setState({activeTab:e})}},{key:"render",value:function(){var e,t,a=this,n={display:"flex"};void 0!==this.state.experiments.length&&0!==this.state.experiments.length||(t=r.a.createElement(N,{experimentStyleBlock:this.experimentStyleBlock,createExperiment:function(e){return a.createExperiment(e)}}),n={display:"none"});var i,s=this.props.parent.appState.activeItem.name;"feature-toggle"!==window.mode&&(e=this.props.parent.appState.activeItem.branches);"feature-toggle"!==window.mode&&(i=this.props.parent.appState.activeItem.branches);var c="feature-toggle"===window.mode?"Add new flag":"Create new experiment",o=(window.mode,"feature-toggle"===window.mode?"Feature flags ":"Experiment "),l=0===this.state.isLoaded;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{active:l,spinner:!0,styles:{spinner:function(e){return Object(b.a)(Object(b.a)({},e),{},{position:"absolute",height:"64px",width:"64px","& svg circle":{stroke:"rgba(30, 144, 255)"}})},overlay:function(e){return Object(b.a)(Object(b.a)({},e),{},{position:"fixed",background:"rgba(250, 250, 250, 0.80)"})}}}),t,r.a.createElement("div",{className:"setting__top top-setting",style:n},r.a.createElement(S,{showActiveExperiments:function(e){return a.showActiveExperiment(e)},showNotActiveExperiments:function(e){return a.showNotActiveExperiment(e)},showAllExperiments:function(e){return a.showAllExperiment(e)},experiments:this.state.experiments}),r.a.createElement("button",{className:"top-setting__btn",onClick:this.createExperiment.bind(this)},r.a.createElement("svg",{className:"top-setting__icon"},r.a.createElement("use",{href:"/img/icons/icons.svg#plus"})),r.a.createElement("svg",{className:"top-setting__icon top-setting__icon2"},r.a.createElement("use",{href:"/img/icons/icons.svg#plus2"})),r.a.createElement("span",null,c))),r.a.createElement("div",{"data-edit-flags":!0,className:"setting__table table-setting",style:this.experimentStyleBlock},r.a.createElement("div",{className:"table-setting__head",style:n},r.a.createElement("div",{className:" table-setting__column1"},"Status"),r.a.createElement("div",{className:"table-setting__column2 "},o," name"),r.a.createElement("div",{className:"table-setting__column3"},o," ID"),r.a.createElement("div",{className:"table-setting__column4"},"Manage")),this.state.displayExperiments.map((function(e){var t,n;return r.a.createElement("div",{className:"table-setting__wrap",id:"experiment-"+e.id},r.a.createElement("div",{className:"table-setting__row"},r.a.createElement("div",{className:"table-setting__status table-setting__column1"},r.a.createElement("div",{className:"checkbox table-setting__checkbox"},r.a.createElement("input",{id:"c_1","data-error":"\u041e\u0448\u0438\u0431\u043a\u0430",className:"checkbox__input",type:"checkbox",value:"1",name:"form[]",checked:e.isEnabled}),r.a.createElement("label",{onClick:function(){return a.editCheckbox(e)},for:"c_1",className:"checkbox__label"},r.a.createElement("span",{className:"checkbox__text"})))),r.a.createElement("div",{className:"table-setting__name table-setting__column2"},e.name),r.a.createElement("div",{className:"table-setting__id table-setting__column3"},r.a.createElement("span",{className:"table-setting__mobile-label"},"Experiment ID"),e.alias?e.alias:e.id),r.a.createElement("div",{className:"table-setting__manage table-setting__column4"},r.a.createElement("div",{className:"table-setting__items"},"feature-toggle"!==window.mode?r.a.createElement(C.a,{content:"Code to run"},r.a.createElement("a",{href:null!==(t="/en/board/run-experiment?id="+e.alias)&&void 0!==t?t:e.id,className:"table-setting__item"},r.a.createElement("svg",{className:"table-setting__icon"},r.a.createElement("use",{href:"/img/icons/icons.svg#code"})))):r.a.createElement(C.a,{content:"Code to run"},r.a.createElement("a",{href:"/en/feature-toggle/run-feature-flag?id="+e.alias,className:"table-setting__item"},r.a.createElement("svg",{className:"table-setting__icon"},r.a.createElement("use",{href:"/img/icons/icons.svg#code"})))),r.a.createElement(C.a,{content:"View stats"},r.a.createElement("a",{href:"/en/board/experiment-stats?experimentId="+e.id,className:"table-setting__item"},r.a.createElement("svg",{className:"table-setting__icon"},r.a.createElement("use",{href:"/img/icons/icons.svg#stat"})))),r.a.createElement(C.a,{content:"Edit"},r.a.createElement("a",{href:"","data-correct":!0,className:"table-setting__item",onClick:function(t){return a.edit(e,t)}},r.a.createElement("svg",{className:"table-setting__icon"},r.a.createElement("use",{href:"/img/icons/icons.svg#correct"})))),r.a.createElement(C.a,{content:"Remove"},r.a.createElement("a",{href:"",className:"table-setting__item",onClick:function(t){return a.removeExperiment(e,t)}},r.a.createElement("svg",{className:"table-setting__icon"},r.a.createElement("use",{href:"/img/icons/icons.svg#delete"}))))))),r.a.createElement("div",{className:"table-setting__row table-setting__row_edit"},r.a.createElement("div",{className:"table-setting__column1"}),r.a.createElement("form",{className:"create-setting__form"},r.a.createElement("div",{className:"create-setting__row"},r.a.createElement(v,{title:"Experiment name",value:s,onChange:function(e){return a.changeName(e)}}),r.a.createElement(v,{title:"Experiment uid",value:e.alias,mode:a.props.parent.appState.mode})),r.a.createElement(g,{branches:null!==(n=a.props.parent.appState.activeItem.branches)&&void 0!==n?n:[],onChangeBranchName:function(e){return a.changeBranchName(e)},onChangePercent:function(e){return a.changePercent(e)},onClickPercent:function(e){return a.changePercent(e)},onClickRemoveBranch:function(e){return a.removeBranch(e)}}),r.a.createElement("div",{className:"create-setting__bottom"},r.a.createElement("button",{className:"create-setting__cancel",onClickCapture:function(e){return a.cancelEdit(e)}},"Cancel"),r.a.createElement("button",{className:"create-setting__update button",onClickCapture:function(e){return a.submitHandle(e)}},"Update")))))}))))}}]),a}(r.a.Component)),B=a(12),A=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={experiments:[]},n.refreshState(),n.experimentList=null,n.experimentCreate=null,n.toast=B.b,n}return Object(c.a)(a,[{key:"refreshState",value:function(){this.appState={mode:"create",activeItem:{}}}},{key:"edit",value:function(e){this.appState.mode="edit",this.appState.activeItem=e,console.log(this.appState.activeItem),this.forceUpdate()}},{key:"changeName",value:function(e){this.appState.activeItem.name=e,this.forceUpdate()}},{key:"changeUid",value:function(e){e=e.replace(/ /g,"-"),this.appState.activeItem.alias=e,this.forceUpdate()}},{key:"changePercent",value:function(e){var t=e.target.closest(".quantity").querySelector("input").getAttribute("data-id"),a=e.target.closest(".quantity").querySelector("input").value;return e.target.closest(".quantity__button")&&(a=parseInt(e.target.closest(".quantity").querySelector("input").value),e.target.closest(".quantity__button").classList.contains("quantity__button_plus")?a++:--a,a=a<0?a=0:a),this.appState.activeItem.branches=this.appState.activeItem.branches.reduce((function(e,n){return n.id===t&&(n.percent=a),e.push(n),e}),[]),this.forceUpdate(),!1}},{key:"changeBranchName",value:function(e){var t=e.target.getAttribute("data-id");return this.appState.activeItem.branches=this.appState.activeItem.branches.reduce((function(a,n){return n.id===t&&(n.uid=e.target.value),a.push(n),a}),[]),this.forceUpdate(),!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{state:this.state,parent:this}),r.a.createElement(f,{parent:this,state:this.appState}),r.a.createElement(B.a,{position:"top-left",reverseOrder:!1}))}}]),a}(r.a.Component);window.api||(window.api="http://localhost:930/api/v1/"),Object(i.render)(r.a.createElement(A,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ed0aeb5d.chunk.js.map