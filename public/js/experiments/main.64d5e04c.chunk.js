(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{21:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),s=a(1),c=a(2),o=a(4),l=a(3),p=a(6),m=a(7);var u=function(e,t,a){var n,i=(n={credentials:"include",method:t},Object(m.a)(n,"credentials","omit"),Object(m.a)(n,"headers",{"Content-Type":"application/json",Accept:"application/json",Authorization:window.token}),n);return"GET"!==t&&(i.body=JSON.stringify(a)),fetch(window.api+e,i).then((function(e){if(200!==e.status&&201!==e.status&&204!==e.status){var a=new Error("Request failed");throw a.json=e.json(),a}return"DELETE"!==t?e.json():e}))};var d=function(e){var t,a,n,i,r,s,c=void 0===e.ownerId?window.userId:e.ownerId,o="feature-toggle"===window.mode?"feature-toggles":"experiments",l=null!==(t=e.alias)&&void 0!==t?t:e.name.replace(/ /g,"-"),p={data:{type:o,attributes:{name:e.name,alias:l,is_enabled:null===(a=e.isEnabled)||void 0===a||a,is_feature_toggle:null!==(n=e.isFeatureToggle)&&void 0!==n&&n,config:[]},relationships:{branches:{data:e.branches.reduce((function(e,t){return e.push({id:t.id,type:"experiment_branches"}),e}),[])},owner:{data:{id:c,type:"users"}}}},included:e.branches.reduce((function(t,a){return t.push({id:a.id,type:"experiment_branches",attributes:{name:a.uid,percent:a.percent,uid:a.uid,config:{}},relationships:{experiment:{data:{id:e.id,type:"experiments"}},owner:{data:{id:c,type:"users"}}}}),t}),[])};return void 0!==e.id&&(p.data.id=e.id),r="feature-toggle"===window.mode?"feature-toggles/"+(null!==(s=e.id)&&void 0!==s?s:""):"experiments/"+(null!==(i=e.id)&&void 0!==i?i:""),u(r,void 0===e.id?"POST":"PATCH",p)};function h(e){var t=e.showError?{display:"block"}:{display:"none"};return i.a.createElement("div",{className:"input_error",style:t,id:e.id},e.errorText)}var v=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={error:!1,inputError:{}},n}return Object(c.a)(a,[{key:"change",value:function(e){this.props.onChange(e)}},{key:"showError",value:function(e){0===e.length?this.setState({error:!0,inputError:{"box-shadow":"inset 0 0 0 0.0625rem #dc3545, 0 0 0 0.25rem #e0e3e9"}}):this.setState({error:!1,inputError:{}})}},{key:"render",value:function(){var e=this,t=String(this.props.title);return i.a.createElement("div",{className:"create-setting__item"},i.a.createElement("label",{className:"create-setting__label"},t),i.a.createElement("input",{id:"input_uid",autoComplete:"off",style:this.state.inputError,type:"text","data-error":"\u041e\u0448\u0438\u0431\u043a\u0430",placeholder:this.props.placeholder,className:"input create-setting__input",value:this.props.value,disabled:"edit"===this.props.mode,"data-id":this.props.dataId,onChange:function(t){e.showError(t.target.value),e.props.onChange(t)}}),i.a.createElement(h,{showError:this.state.error,id:"error_"+t.toLowerCase(),errorText:"Please enter "+t.toLowerCase()+"."}))}}]),a}(i.a.Component),g=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this,a="feature-toggle"===window.mode?{display:"none"}:{},n=null!==(e=this.props.branches)&&void 0!==e?e:[];return i.a.createElement(i.a.Fragment,null,n.map((function(e){var n;return i.a.createElement("div",{className:"create-setting__row",style:a},i.a.createElement(v,{title:"Branch name",dataId:e.id,value:e.uid,placeholder:"Branch name",onChange:function(e){return t.props.onChangeBranchName(e)}}),i.a.createElement("div",{className:"create-setting__item2"},i.a.createElement("div",{className:"create-setting__item-digit"},i.a.createElement("label",{className:"create-setting__label"},"Split"),i.a.createElement("div",{className:"quantity"},i.a.createElement("span",{className:"quantity__label"},"%"),i.a.createElement("div",{className:"quantity__input"},i.a.createElement("input",{autoComplete:"off",type:"text",name:"form[]","data-id":e.id,id:"branch-percent-"+e.id,value:null!==(n=e.percent)&&void 0!==n?n:"0",onChange:function(e){return t.props.onChangePercent(e)}})),i.a.createElement("div",{className:"quantity__buttons",onClick:function(e){return t.props.onClickPercent(e)}},i.a.createElement("div",{className:"quantity__button quantity__button_plus"},i.a.createElement("svg",{className:"quantity__icon"},i.a.createElement("use",{href:"/img/icons/icons.svg#arrow-quantity"}))),i.a.createElement("div",{className:"quantity__button quantity__button_minus"},i.a.createElement("svg",{className:"quantity__icon"},i.a.createElement("use",{href:"/img/icons/icons.svg#arrow-quantity"})))))),i.a.createElement("button",{className:"create-setting__remove","data-id":e.dataId,onClick:function(e){return t.props.onClickRemoveBranch(e)}},i.a.createElement("svg",{className:"create-setting__remove-icon"},i.a.createElement("use",{href:"/img/icons/icons.svg#close"})))))})))}}]),a}(i.a.Component),f=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).styleCreateExperimentBlock={display:"none"},n.state={experimentName:null,experimentUid:null},n.parent=e.parent,n.props.parent.experimentCreate=Object(p.a)(n),n.submitHandle=n.submitHandle.bind(Object(p.a)(n)),n.map={},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"submitHandle",value:function(e){var t=this;return this.props.parent.appState.adding=!0,this.forceUpdate(),"feature-toggle"===window.mode&&"edit"!==this.props.parent.appState.mode&&this.createFeatureToggle(),e.preventDefault(),d(this.props.parent.appState.activeItem).then((function(e){t.props.parent.experimentList.load(),t.showNotifications(),t.redirectToExperiments(),t.props.parent.refreshState(),t.props.parent.appState.adding=!1,t.forceUpdate()})),!1}},{key:"showNotifications",value:function(){var e,t,a=this.props.parent.appState.mode;switch(t="feature-toggle"===window.mode?"Feature flag":"Experiment",a){case"create":e="has been successfully created";break;case"edit":e="has been successfully updated";break;case"delete":e="has been successfully deleted"}this.parent.toast.success(t+" "+e,{style:{background:"#51A351",color:"#FFFFFF",padding:"16px"},iconTheme:{primary:"#51A351",secondary:"#FFFFFF"}})}},{key:"submitHandleCheckbox",value:function(e){var t=this;d(e).then((function(e){t.props.parent.experimentList.load(),t.props.parent.refreshState(),t.forceUpdate()}))}},{key:"createFeatureToggle",value:function(){var e=["On","Off"],t=[100,0];this.props.parent.appState.activeItem.isFeatureToggle=!0,this.props.parent.appState.activeItem.branches=[];for(var a=0;a<2;a++)this.props.parent.appState.activeItem.branches.push({id:Date.now().toString(),uid:e[a],percent:t[a]})}},{key:"error",value:function(e){setTimeout((function(){document.getElementById("message").style="display:block"}),200),this.message=e}},{key:"createBranchId",value:function(){this.props.parent.appState.activeItem.branches=[];for(var e=0;e<2;e++)this.props.parent.appState.activeItem.branches.push({id:Date.now().toString()+e});this.forceUpdate()}},{key:"addBranch",value:function(e){return void 0===this.props.parent.appState.activeItem.branches&&(this.props.parent.appState.activeItem.branches=[]),this.props.parent.appState.activeItem.branches.push({id:Date.now().toString()}),this.forceUpdate(),e.preventDefault(),!1}},{key:"removeBranch",value:function(e){e.preventDefault();var t=e.currentTarget.getAttribute("data-id");this.props.parent.appState.activeItem.branches=this.props.parent.appState.activeItem.branches.filter((function(e){return e.id!==t})),this.forceUpdate()}},{key:"createExperiment",value:function(e){this.styleCreateExperimentBlock={display:"block"},this.createBranchId(),this.forceUpdate()}},{key:"changeName",value:function(e){var t;this.props.parent.changeName(e),this.setState({experimentName:e,experimentUid:null!==(t=this.props.parent.appState.activeItem.alias)&&void 0!==t?t:e.replace(/ /g,"-")})}},{key:"changeUid",value:function(e){this.props.parent.changeUid(e),this.setState({experimentUid:e.replace(/ /g,"-")})}},{key:"changePercent",value:function(e){this.props.parent.changePercent(e),this.forceUpdate()}},{key:"changeBranchName",value:function(e,t){this.props.parent.changeBranchName(e,t),this.forceUpdate()}},{key:"redirectToExperiments",value:function(){if("create"===this.props.parent.appState.mode){var e="feature-toggle"===window.mode?"all":"active";this.props.parent.experimentList.setActiveTab(e),this.props.parent.experimentList.experimentStyleBlock={display:"block"},this.styleCreateExperimentBlock={display:"none"},document.getElementsByClassName("top-setting__item")[0].classList.add("active"),this.props.parent.experimentList.getExperimentsByTab()}this.forceUpdate()}},{key:"render",value:function(){var e,t=this,a="feature-toggle"===window.mode?{display:"none"}:{},n="feature-toggle"===window.mode?"flag":"experiment",r=null!==(e=this.props.parent.appState.activeItem.branches)&&void 0!==e?e:[],s="feature-toggle"===window.mode?"Feature flags name":"Experiment name";return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"setting__create create-setting",style:this.styleCreateExperimentBlock},i.a.createElement("div",{className:"create-setting__block"},i.a.createElement("div",{className:"create-setting__title"},"Create a new ",n),i.a.createElement("form",{className:"create-setting__form"},i.a.createElement(v,{title:s,value:this.state.experimentName,placeholder:"Button color test",mode:this.props.parent.appState.mode,onChange:function(e){return t.changeName(e)}}),i.a.createElement(v,{title:"Experiment uid",value:this.state.experimentUid,placeholder:"Button",mode:this.props.parent.appState.mode,onChange:function(e){return t.changeUid(e)}}))),i.a.createElement("div",{className:"create-setting__block"},i.a.createElement("div",{className:"create-setting__title",style:a},"Branches"),i.a.createElement("form",{className:"create-setting__form",onSubmit:this.submitHandle.bind(this)},i.a.createElement(g,{branches:r,onChangeBranchName:function(e){return t.changeBranchName(e)},onChangePercent:function(e){return t.changePercent(e)},onClickPercent:function(e){return t.changePercent(e)},onClickRemoveBranch:function(e){return t.removeBranch(e)}}),i.a.createElement("button",{onClick:this.addBranch.bind(this),className:"create-setting__button",style:a},"+ Add another branch"),i.a.createElement("div",{className:"create-setting__bottom"},i.a.createElement("button",{className:"create-setting__update button",type:"submit"},"Create"))))))}}]),a}(i.a.Component),E=a(10);var b=function(){return u("experiments?include=branches","GET",{}).then((function(e){var t=e.data.reduce((function(t,a){var n="https://abrouter.com/api/v1/experiment/run?token="+e.meta.token+"&experimentId="+a.id+"&userId={USER_ID}",i={name:a.attributes.name,alias:a.attributes.alias,branches:[],isEnabled:a.attributes.is_enabled,isFeatureToggle:a.attributes.is_feature_toggle,id:a.id,ownerId:a.relationships.owner.data.id,tryUrl:n},r=a.relationships.branches.data.reduce((function(t,a){return t.push(e.included.filter((function(e){return e.id===a.id}))[0]),t}),[]);return i.branches=r.reduce((function(e,t){var a={name:t.attributes.name,percent:t.attributes.percent,uid:t.attributes.uid,id:t.id};return e.push(a),e}),[]),t.push(i),t}),[]);return t.token=e.meta.token,t}))};var _=function(e){void 0===e.ownerId?window.userId:e.ownerId;var t={data:{id:e.id,type:"experiments"}};return u("experiments/"+e.id,"DELETE",t)},y=a(18),x=a.n(y),N=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t="feature-toggle"===window.mode?"Add new flag":"Create new experiment";return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"setting__top top-setting"},i.a.createElement("div",{className:"top-setting__info"},"You don't have active experiments, yet."),i.a.createElement("button",{className:"top-setting__btn",onClick:function(t){return e.props.createExperiment(t)}},i.a.createElement("svg",{className:"top-setting__icon"},i.a.createElement("use",{href:"/img/icons/icons.svg#plus"})),i.a.createElement("svg",{className:"top-setting__icon top-setting__icon2"},i.a.createElement("use",{href:"/img/icons/icons.svg#plus2"})),i.a.createElement("span",null,t))),i.a.createElement("div",{className:"setting__image",style:this.props.experimentStyleBlock},i.a.createElement("picture",null,i.a.createElement("source",{srcSet:"/img/png/setting.webp",type:"image/webp"}),i.a.createElement("img",{src:"/img/png/setting.png?_v=1644581884261",alt:"Image"}))))}}]),a}(i.a.Component);function k(e){for(var t=0,a=0,n=e.experiments,r=e.experiments.length,s=0;s<r;s++)!0===n[s].isEnabled?t++:a++;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"top-setting__item active",onClick:function(t){return e.showActiveExperiments(t)}},i.a.createElement("div",{className:"top-setting__item-value"},"Active"),i.a.createElement("span",{className:"top-setting__count"},t)),i.a.createElement("div",{className:"top-setting__item",onClick:function(t){return e.showNotActiveExperiments(t)}},i.a.createElement("div",{className:"top-setting__item-value"},"Not active"),i.a.createElement("span",{className:"top-setting__count"},a)))}function w(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"top-setting__item active",onClick:function(t){return e.showAllExperiments(t)}},i.a.createElement("div",{className:"top-setting__item-value"},"All"),i.a.createElement("span",{className:"top-setting__count"},e.experiments)))}function C(e){var t="feature-toggle"===window.mode?i.a.createElement(w,{experiments:e.experiments.length,showAllExperiments:function(t){return e.showAllExperiments(t)}}):i.a.createElement(k,{experiments:e.experiments,showActiveExperiments:function(t){return e.showActiveExperiments(t)},showNotActiveExperiments:function(t){return e.showNotActiveExperiments(t)}});return i.a.createElement("div",{className:"top-setting__navigation"},t)}var S=a(9),B=(a(38),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).experimentStyleBlock={display:"block"},n.state={isLoaded:0,activeTab:"feature-toggle"===window.mode?"all":"active",experiments:[],displayExperiments:[]},n.props=e,n.props.parent.experimentList=Object(p.a)(n),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){"mainpage"!==window.mode?this.load():this.setState({isLoaded:1})}},{key:"componentWillUnmount",value:function(){}},{key:"load",value:function(){var e=this;this.setState({isLoaded:0}),b().then((function(t){e.props.state.experiments=t,"feature-toggle"===window.mode?e.setState({experiments:t.filter((function(e){return!0===e.isFeatureToggle}))}):e.setState({experiments:t.filter((function(e){return!1===e.isFeatureToggle}))}),e.getExperimentsByTab(),e.setState({isLoaded:1})}))}},{key:"getExperimentsByTab",value:function(){var e;switch(this.state.activeTab){case"active":e=!0;break;case"not active":e=!1}"all"===this.state.activeTab?this.setState({displayExperiments:this.state.experiments}):this.setState({displayExperiments:this.state.experiments.filter((function(t){return t.isEnabled===e}))})}},{key:"removeExperiment",value:function(e,t){var a=this;this.props.parent.appState.mode="delete",this.props.parent.appState.activeItem=e,t.preventDefault(),_(this.props.parent.appState.activeItem).then((function(){a.load(),a.props.parent.experimentCreate.showNotifications(),a.props.parent.refreshState(),a.forceUpdate(),a.props.parent.appState.adding=!1}))}},{key:"removeBranch",value:function(e){e.preventDefault();var t=e.currentTarget.getAttribute("data-id");this.props.parent.appState.activeItem.branches=this.props.parent.appState.activeItem.branches.filter((function(e){return e.id!==t})),this.forceUpdate()}},{key:"edit",value:function(e,t){this.deleteClassEdit(),document.getElementById("experiment-"+e.id).classList.add("edit"),t.preventDefault(),this.props.parent.edit(e),this.forceUpdate()}},{key:"editCheckbox",value:function(e){e.isEnabled=!0!==e.isEnabled,this.props.parent.experimentCreate.submitHandleCheckbox(e),this.forceUpdate()}},{key:"cancelEdit",value:function(e){this.deleteClassEdit(),e.preventDefault(),this.props.parent.appState.mode="create",this.props.parent.appState.activeItem={},this.forceUpdate()}},{key:"createExperiment",value:function(e){this.deleteClassActive(e),this.props.parent.refreshState(),this.experimentStyleBlock={display:"none"},this.props.parent.experimentCreate.createExperiment(e),this.forceUpdate()}},{key:"submitHandle",value:function(e){this.deleteClassEdit(),this.props.parent.experimentCreate.submitHandle(e)}},{key:"addClassNameActive",value:function(e){this.experimentStyleBlock={display:"block"},this.props.parent.experimentCreate.styleCreateExperimentBlock={display:"none"},this.deleteClassActive(e),e.currentTarget.classList.add("active"),this.props.parent.experimentCreate.forceUpdate(),this.forceUpdate()}},{key:"deleteClassActive",value:function(){for(var e=document.getElementsByClassName("top-setting__item"),t=0;t<e.length;t++)e[t].classList.remove("active")}},{key:"deleteClassEdit",value:function(){for(var e=document.getElementsByClassName("table-setting__wrap"),t=0;t<e.length;t++)e[t].classList.remove("edit")}},{key:"showAllExperiment",value:function(e){var t=this;this.setState({activeTab:"all"},(function(){t.getExperimentsByTab()})),this.addClassNameActive(e)}},{key:"showActiveExperiment",value:function(e){var t=this;this.setState({activeTab:"active"},(function(){t.getExperimentsByTab()})),this.addClassNameActive(e)}},{key:"showNotActiveExperiment",value:function(e){var t=this;this.setState({activeTab:"not active"},(function(){t.getExperimentsByTab()})),this.addClassNameActive(e)}},{key:"showAwaitingLaunchExperiment",value:function(e){var t=this;this.displayExperiments=[],this.setState({activeTab:"awaiting launch"},(function(){t.getExperimentsByTab()})),this.addClassNameActive(e)}},{key:"countActiveAndNotActiveExperiments",value:function(){for(var e=0,t=0,a=this.state.experiments,n=this.state.experiments.length,i=0;i<n;i++)!0===a[i].isEnabled?e++:t++;return{activeExperiments:e,notActiveExperiments:t}}},{key:"changeName",value:function(e){this.props.parent.changeName(e),this.forceUpdate()}},{key:"changePercent",value:function(e){this.props.parent.changePercent(e),this.forceUpdate()}},{key:"changeBranchName",value:function(e){this.props.parent.changeBranchName(e),this.forceUpdate()}},{key:"setActiveTab",value:function(e){this.setState({activeTab:e})}},{key:"render",value:function(){var e,t=this,a={display:"flex"};void 0!==this.state.experiments.length&&0!==this.state.experiments.length||(e=i.a.createElement(N,{experimentStyleBlock:this.experimentStyleBlock,createExperiment:function(e){return t.createExperiment(e)}}),a={display:"none"});var n=this.props.parent.appState.activeItem.name,r="feature-toggle"===window.mode?"Add new flag":"Create new experiment",s=(window.mode,"feature-toggle"===window.mode?"Feature flags ":"Experiment "),c=0===this.state.isLoaded;return i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{active:c,spinner:!0,styles:{spinner:function(e){return Object(E.a)(Object(E.a)({},e),{},{position:"absolute",height:"64px",width:"64px","& svg circle":{stroke:"rgba(30, 144, 255)"}})},overlay:function(e){return Object(E.a)(Object(E.a)({},e),{},{position:"fixed",background:"rgba(250, 250, 250, 0.80)"})}}}),e,i.a.createElement("div",{className:"setting__top top-setting",style:a},i.a.createElement(C,{showActiveExperiments:function(e){return t.showActiveExperiment(e)},showNotActiveExperiments:function(e){return t.showNotActiveExperiment(e)},showAllExperiments:function(e){return t.showAllExperiment(e)},experiments:this.state.experiments}),i.a.createElement("button",{className:"top-setting__btn",onClick:this.createExperiment.bind(this)},i.a.createElement("svg",{className:"top-setting__icon"},i.a.createElement("use",{href:"/img/icons/icons.svg#plus"})),i.a.createElement("svg",{className:"top-setting__icon top-setting__icon2"},i.a.createElement("use",{href:"/img/icons/icons.svg#plus2"})),i.a.createElement("span",null,r))),i.a.createElement("div",{"data-edit-flags":!0,className:"setting__table table-setting",style:this.experimentStyleBlock},i.a.createElement("div",{className:"table-setting__head",style:a},i.a.createElement("div",{className:" table-setting__column1"},"Status"),i.a.createElement("div",{className:"table-setting__column2 "},s," name"),i.a.createElement("div",{className:"table-setting__column3"},s," ID"),i.a.createElement("div",{className:"table-setting__column4"},"Manage")),this.state.displayExperiments.map((function(e){var a,r;return i.a.createElement("div",{className:"table-setting__wrap",id:"experiment-"+e.id},i.a.createElement("div",{className:"table-setting__row"},i.a.createElement("div",{className:"table-setting__status table-setting__column1"},i.a.createElement("div",{className:"checkbox table-setting__checkbox"},i.a.createElement("input",{id:"c_1","data-error":"\u041e\u0448\u0438\u0431\u043a\u0430",className:"checkbox__input",type:"checkbox",value:"1",name:"form[]",checked:e.isEnabled}),i.a.createElement("label",{onClick:function(){return t.editCheckbox(e)},for:"c_1",className:"checkbox__label"},i.a.createElement("span",{className:"checkbox__text"})))),i.a.createElement("div",{className:"table-setting__name table-setting__column2"},e.name),i.a.createElement("div",{className:"table-setting__id table-setting__column3"},i.a.createElement("span",{className:"table-setting__mobile-label"},"Experiment ID"),e.alias?e.alias:e.id),i.a.createElement("div",{className:"table-setting__manage table-setting__column4"},i.a.createElement("div",{className:"table-setting__items"},"feature-toggle"!==window.mode?i.a.createElement(S.a,{content:"Code to run"},i.a.createElement("a",{href:null!==(a="/en/board/run-experiment?id="+e.alias)&&void 0!==a?a:e.id,className:"table-setting__item"},i.a.createElement("svg",{className:"table-setting__icon"},i.a.createElement("use",{href:"/img/icons/icons.svg#code"})))):i.a.createElement(S.a,{content:"Code to run"},i.a.createElement("a",{href:"/en/feature-toggle/run-feature-flag?id="+e.alias,className:"table-setting__item"},i.a.createElement("svg",{className:"table-setting__icon"},i.a.createElement("use",{href:"/img/icons/icons.svg#code"})))),i.a.createElement(S.a,{content:"View stats"},i.a.createElement("a",{href:"/en/board/experiment-stats?experimentId="+e.id,className:"table-setting__item"},i.a.createElement("svg",{className:"table-setting__icon"},i.a.createElement("use",{href:"/img/icons/icons.svg#stat"})))),i.a.createElement(S.a,{content:"Edit"},i.a.createElement("a",{href:"","data-correct":!0,className:"table-setting__item",onClick:function(a){return t.edit(e,a)}},i.a.createElement("svg",{className:"table-setting__icon"},i.a.createElement("use",{href:"/img/icons/icons.svg#correct"})))),i.a.createElement(S.a,{content:"Remove"},i.a.createElement("a",{href:"",className:"table-setting__item",onClick:function(a){return t.removeExperiment(e,a)}},i.a.createElement("svg",{className:"table-setting__icon"},i.a.createElement("use",{href:"/img/icons/icons.svg#delete"}))))))),i.a.createElement("div",{className:"table-setting__row table-setting__row_edit"},i.a.createElement("div",{className:"table-setting__column1"}),i.a.createElement("form",{className:"create-setting__form"},i.a.createElement("div",{className:"create-setting__row"},i.a.createElement(v,{title:"Experiment name",value:n,onChange:function(e){return t.changeName(e.target.value)}}),i.a.createElement(v,{title:"Experiment uid",value:e.alias,mode:t.props.parent.appState.mode})),i.a.createElement(g,{branches:null!==(r=t.props.parent.appState.activeItem.branches)&&void 0!==r?r:[],onChangeBranchName:function(e){return t.changeBranchName(e)},onChangePercent:function(e){return t.changePercent(e)},onClickPercent:function(e){return t.changePercent(e)},onClickRemoveBranch:function(e){return t.removeBranch(e)}}),i.a.createElement("div",{className:"create-setting__bottom"},i.a.createElement("button",{className:"create-setting__cancel",onClickCapture:function(e){return t.cancelEdit(e)}},"Cancel"),i.a.createElement("button",{className:"create-setting__update button",onClickCapture:function(e){return t.submitHandle(e)}},"Update")))))}))))}}]),a}(i.a.Component)),I=a(12),A=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={experiments:[]},n.refreshState(),n.experimentList=null,n.experimentCreate=null,n.toast=I.b,n}return Object(c.a)(a,[{key:"refreshState",value:function(){this.appState={mode:"create",activeItem:{}}}},{key:"edit",value:function(e){this.appState.mode="edit",this.appState.activeItem=e}},{key:"changeName",value:function(e){this.appState.activeItem.name=e}},{key:"changeUid",value:function(e){e=e.replace(/ /g,"-"),this.appState.activeItem.alias=e}},{key:"changePercent",value:function(e){var t=e.target.closest(".quantity").querySelector("input").getAttribute("data-id"),a=e.target.closest(".quantity").querySelector("input").value;return e.target.closest(".quantity__button")&&(a=parseInt(e.target.closest(".quantity").querySelector("input").value),e.target.closest(".quantity__button").classList.contains("quantity__button_plus")?a++:--a,a=a<0?a=0:a),this.appState.activeItem.branches=this.appState.activeItem.branches.reduce((function(e,n){return n.id===t&&(n.percent=a),e.push(n),e}),[]),!1}},{key:"changeBranchName",value:function(e){var t=e.target.getAttribute("data-id"),a=e.target.value;return this.appState.activeItem.branches=this.appState.activeItem.branches.reduce((function(e,n){return n.id===t&&(n.uid=a),e.push(n),e}),[]),!1}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(B,{state:this.state,parent:this}),i.a.createElement(f,{parent:this,state:this.appState}),i.a.createElement(I.a,{position:"top-left",reverseOrder:!1}))}}]),a}(i.a.Component);window.api||(window.api="http://localhost:930/api/v1/"),Object(r.render)(i.a.createElement(A,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.64d5e04c.chunk.js.map