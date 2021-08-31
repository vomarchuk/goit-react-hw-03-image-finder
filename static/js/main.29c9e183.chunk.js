(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={section:"App_section__240-0",loader:"App_loader__38Whi",modalImg:"App_modalImg__2OBJq"}},13:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__uCjCU",imageGalleryItem_image:"ImageGalleryItem_imageGalleryItem_image__1JYVa"}},14:function(e,t,a){e.exports={overlay:"Modal_overlay__1gnwo",modal:"Modal_modal__IT3f1"}},25:function(e,t,a){e.exports={container:"Container_container__1EEyW"}},26:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__tyHTS"}},28:function(e,t,a){e.exports={button:"Button_button__GHucs"}},33:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=(a(33),a(15)),l=a(5),i=a(6),u=a(8),h=a(7),m=a(10),d=(a(34),a(24)),p=a.n(d),b=a(11),g=a.n(b),j=a(25),f=a.n(j),_=a(1),v=function(e){var t=e.children;return Object(_.jsx)("div",{className:f.a.container,children:t})},y=a(9),O=a.n(y),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:""},e.hundleChange=function(t){t.preventDefault(),e.setState({searchValue:t.currentTarget.value})},e.hundleSubmit=function(t){if(t.preventDefault(),""===e.state.searchValue.trim())return m.b.error("Enter the names of the pictures");e.props.onSubmit(e.state.searchValue),e.setState({searchValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(_.jsx)("header",{className:O.a.searchbar,children:Object(_.jsxs)("form",{onSubmit:this.hundleSubmit,className:O.a.searchForm,children:[Object(_.jsx)("button",{type:"submit",className:O.a.searchForm_button,children:Object(_.jsx)("span",{className:O.a.searchForm_button_label,children:"Search"})}),Object(_.jsx)("input",{className:O.a.searchForm_input,type:"text",value:this.state.searchValue,onChange:this.hundleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),w=a(26),I=a.n(w),S=a(13),M=a.n(S),k=function(e){var t=e.webformatURL,a=e.tags,n=e.openModal,r=e.largeImageURL;return Object(_.jsx)("li",{className:M.a.imageGallery,children:Object(_.jsx)("img",{onClick:function(e){n(e.target.dataset.large)},src:t,alt:a,className:M.a.imageGalleryItem_image,"data-large":r})})},F=function(e){var t=e.search,a=e.openModal;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("ul",{className:I.a.imageGallery,children:t&&t.map((function(e){return Object(_.jsx)(k,{webformatURL:e.webformatURL,tags:e.webformatURL,openModal:a,largeImageURL:e.largeImageURL},e.id)}))})})},C=a(27),N=a.n(C),G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="22192349-6b91fd76fde5f4977c0f7c9ea",n="https://pixabay.com/api/";return N.a.get("".concat(n,"?q=").concat(e,"&page=").concat(t,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},L=a(28),U=a.n(L),V=function(e){var t=e.incrementPage;return Object(_.jsx)("button",{type:"button",className:U.a.button,onClick:t,children:"Load mode"})},D=a(14),E=a.n(D),R=document.querySelector("#modal-root"),A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.closeModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return Object(o.createPortal)(Object(_.jsx)("div",{className:E.a.overlay,onClick:this.handleBackdropClick,children:Object(_.jsxs)("div",{className:E.a.modal,children:[Object(_.jsx)("button",{type:"button",onClick:function(){e.props.closeModal()},children:"Close"}),this.props.children]})}),R)}}]),a}(n.Component),B="idle",T="pending",J="resolved",P=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:"",articles:[],status:B,page:1,error:"",showModal:!1,modalImage:""},e.handlerSearchForm=function(t){e.setState({searchValue:t,articles:[],page:1,status:T})},e.handleIncrement=function(){e.setState({page:e.state.page+1})},e.openModal=function(t){e.setState((function(e){return{showModal:!e.showModal,modalImage:t}}))},e.closeModal=function(){e.setState((function(e){return{showModal:!e.showModal,modalImage:""}}))},e}return Object(i.a)(a,[{key:"getImages",value:function(e,t){var a=this;G(e,t).then((function(e){return a.setState({articles:[].concat(Object(s.a)(a.state.articles),Object(s.a)(e))})})).catch((function(e){return a.setState({error:e})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.searchValue,n=this.state.page;"pending"===this.state.status&&e.prevProps!==this.props&&(this.setState({status:J}),this.getImages(a,n)),"resolved"===this.state.status&&t.page!==n&&this.getImages(a,n),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.articles,n=e.showModal,r=e.modalImage;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(v,{children:Object(_.jsx)(x,{onSubmit:this.handlerSearchForm})}),n&&Object(_.jsx)(A,{closeModal:this.closeModal,children:Object(_.jsx)("img",{src:r,alt:"",className:g.a.modalImg})}),"pending"===t&&Object(_.jsx)(p.a,{className:g.a.loader,type:"BallTriangle",color:"#00BFFF",height:80,width:80}),"resolved"===t&&Object(_.jsx)("section",{className:g.a.section,children:Object(_.jsxs)(v,{children:[Object(_.jsx)(F,{search:a,openModal:this.openModal}),Object(_.jsx)(V,{incrementPage:this.handleIncrement})]})}),Object(_.jsx)(m.a,{autoClose:3e3})]})}}]),a}(n.Component);c.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(P,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__gMri2",searchForm:"Searchbar_searchForm__3p5_A",searchForm_button:"Searchbar_searchForm_button__3fmXD",searchForm_button_label:"Searchbar_searchForm_button_label__1kmRo",searchForm_input:"Searchbar_searchForm_input__2ugIS"}}},[[74,1,2]]]);
//# sourceMappingURL=main.29c9e183.chunk.js.map