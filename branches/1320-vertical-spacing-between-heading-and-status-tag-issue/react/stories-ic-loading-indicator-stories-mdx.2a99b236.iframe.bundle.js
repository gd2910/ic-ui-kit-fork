/*! For license information please see stories-ic-loading-indicator-stories-mdx.2a99b236.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[8009],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/ic-loading-indicator.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,changingLabel:()=>changingLabel,circularDark:()=>circularDark,circularDeterminate:()=>circularDeterminate,circularIndeterminate:()=>circularIndeterminate,circularVariantsDeterminate:()=>circularVariantsDeterminate,circularVariantsIndeterminate:()=>circularVariantsIndeterminate,default:()=>ic_loading_indicator_stories,defaultArgTypes:()=>defaultArgTypes,defaultArgs:()=>defaultArgs,iconCircular:()=>iconCircular,iconDarkCircular:()=>iconDarkCircular,linearDark:()=>linearDark,linearDeterminate:()=>linearDeterminate,linearIndeterminate:()=>linearIndeterminate,linearVariantsDeterminate:()=>linearVariantsDeterminate,linearVariantsIndeterminate:()=>linearVariantsIndeterminate,noLabel:()=>noLabel,progressIndicatorForCompactStep:()=>progressIndicatorForCompactStep});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-loading\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property        | Attribute        | Description                                                                                                                             | Type                                        | Default      |\n| --------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------ |\n| `appearance`    | `appearance`     | The appearance of the loading indicator, e.g. dark or light.                                                                            | `"dark" \\| "light"`                         | `"dark"`     |\n| `description`   | `description`    | The description that will be set as the aria-label of the loading indicator when not using a visible label.                             | `string`                                    | `"Loading"`  |\n| `fullWidth`     | `full-width`     | If `true`, when linear, the full-width variant (i.e. without a border radius) will be displayed.                                        | `boolean`                                   | `false`      |\n| `label`         | `label`          | The label to be displayed beneath the loading indicator. Display a changing label by separating multiple messages with forward slashes. | `string`                                    | `undefined`  |\n| `labelDuration` | `label-duration` | The time in milliseconds before the label changes.                                                                                      | `number`                                    | `8000`       |\n| `max`           | `max`            | The maximum value that the progress value can take. Used to calculate the proportional width of the progress bar.                       | `number`                                    | `100`        |\n| `min`           | `min`            | The minimum value that the progress value can take. Used to calculate the proportional width of the progress bar.                       | `number`                                    | `0`          |\n| `progress`      | `progress`       | The current amount of progress made. If not provided, component acts as an indeterminate loading indicator.                             | `number`                                    | `undefined`  |\n| `size`          | `size`           | The size of the loading indicator.                                                                                                      | `"default" \\| "icon" \\| "large" \\| "small"` | `"default"`  |\n| `type`          | `type`           | The type of indicator, either linear or circular.                                                                                       | `"circular" \\| "linear"`                    | `"circular"` |\n\n\n## Shadow Parts\n\n| Part                     | Description |\n| ------------------------ | ----------- |\n| `"ic-loading-container"` |             |\n\n\n## CSS Custom Properties\n\n| Name                  | Description                        |\n| --------------------- | ---------------------------------- |\n| `--circular-diameter` | Diameter of the circular-indicator |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-button](../ic-button)\n - [ic-menu](../ic-menu)\n - [ic-step](../ic-step)\n - [ic-toast](../ic-toast)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-loading-indicator --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-menu --\x3e ic-loading-indicator\n  ic-step --\x3e ic-loading-indicator\n  ic-toast --\x3e ic-loading-indicator\n  style ic-loading-indicator fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={progress:30,min:0,max:100},defaultArgTypes={progress:{type:{name:"number",min:1,max:100}},min:{type:{name:"number",min:1,max:100}},max:{type:{name:"number",min:1,max:100}}};function _createMdxContent(props){const _components=Object.assign({h3:"h3",div:"div"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"React Components/Loading",component:components.sz}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n","\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-determinate",children:"Circular (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular (indeterminate)",children:(0,jsx_runtime.jsx)(components.sz,{label:"Loading..."})})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular (determinate)",args:defaultArgs,argTypes:defaultArgTypes,children:args=>(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Loading..."})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-variants-indeterminate",children:"Circular variants (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular variants (indeterminate)",children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.sz,{label:"Default"}),(0,jsx_runtime.jsx)(components.sz,{label:"Large",size:"large"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-variants-determinate",children:"Circular variants (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular variants (determinate)",args:defaultArgs,argTypes:defaultArgTypes,children:args=>(0,jsx_runtime.jsxs)(_components.div,{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Default"}),(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Large",size:"large"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Icon (circular)",children:(0,jsx_runtime.jsx)(components.sz,{size:"icon"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-indeterminate",children:"Linear (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Linear (indeterminate)",children:(0,jsx_runtime.jsx)(components.sz,{label:"Loading...",type:"linear"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-determinate",children:"Linear (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Linear (determinate)",args:defaultArgs,argTypes:defaultArgTypes,children:args=>(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Loading...",type:"linear"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-variants-indeterminate",children:"Linear variants (indeterminate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Linear variants (indeterminate)",children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{label:"Small",size:"small",type:"linear"}),(0,jsx_runtime.jsx)(components.sz,{label:"Default",type:"linear"}),(0,jsx_runtime.jsx)(components.sz,{label:"Large",size:"large",type:"linear"}),(0,jsx_runtime.jsx)(components.sz,{label:"Full-width",size:"default",type:"linear",variant:"full-width"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-variants-determinate",children:"Linear variants (determinate)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Linear variants (determinate)",args:defaultArgs,argTypes:defaultArgTypes,children:args=>(0,jsx_runtime.jsxs)(_components.div,{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Small",size:"small",type:"linear"}),(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Default",type:"linear"}),(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Large",size:"large",type:"linear"}),(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Full-width",size:"default",type:"linear",variant:"full-width"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circular-dark",children:"Circular dark"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circular dark",parameters:{backgrounds:{default:"dark"}},children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{label:"Small",size:"small",dark:!0}),(0,jsx_runtime.jsx)(components.sz,{label:"Default",dark:!0}),(0,jsx_runtime.jsx)(components.sz,{label:"Large",size:"large",dark:!0})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon-dark-circular",children:"Icon dark (circular)"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Icon dark (circular)",parameters:{backgrounds:{default:"dark"}},children:(0,jsx_runtime.jsx)(components.sz,{size:"icon",dark:!0})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"linear-dark",children:"Linear dark"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Linear dark",parameters:{backgrounds:{default:"dark"}},children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{label:"Default",type:"linear",dark:!0}),(0,jsx_runtime.jsx)(components.sz,{label:"Large",size:"large",type:"linear",dark:!0}),(0,jsx_runtime.jsx)(components.sz,{label:"Full-width",type:"linear",variant:"full-width",dark:!0})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"no-label",children:"No label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"No label",children:(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{name:"Loading"}),(0,jsx_runtime.jsx)(components.sz,{name:"Loading",type:"linear"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"changing-label",children:"Changing label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Changing label",children:(0,jsx_runtime.jsx)(components.sz,{label:"Loading.../Still loading...",labelDuration:"4000"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"progress-indicator-for-compact-step",children:"Progress indicator for compact step"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Progress indicator for compact step",args:defaultArgs,argTypes:defaultArgTypes,parameters:{loki:{skip:!0}},children:args=>(0,jsx_runtime.jsx)(components.sz,{size:"small","inner-label":"3",progress:args.progress,min:args.min,max:args.max})})})]})}const circularIndeterminate=()=>(0,jsx_runtime.jsx)(components.sz,{label:"Loading..."});circularIndeterminate.storyName="Circular (indeterminate)",circularIndeterminate.parameters={storySource:{source:'<IcLoadingIndicator label="Loading..." />'}};const circularDeterminate=args=>(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Loading..."});circularDeterminate.storyName="Circular (determinate)",circularDeterminate.argTypes=defaultArgTypes,circularDeterminate.args=defaultArgs,circularDeterminate.parameters={storySource:{source:'args => <IcLoadingIndicator progress={args.progress} min={args.min} max={args.max} label="Loading..." />'}};const circularVariantsIndeterminate=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.sz,{label:"Default"}),(0,jsx_runtime.jsx)(components.sz,{label:"Large",size:"large"})]});circularVariantsIndeterminate.storyName="Circular variants (indeterminate)",circularVariantsIndeterminate.parameters={storySource:{source:'<div style={{\n  display: "grid",\n  gap: "50px"\n}}><IcLoadingIndicator label="Small" size="small" /><IcLoadingIndicator label="Default" /><IcLoadingIndicator label="Large" size="large" /></div>'}};const circularVariantsDeterminate=args=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Default"}),(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Large",size:"large"})]});circularVariantsDeterminate.storyName="Circular variants (determinate)",circularVariantsDeterminate.argTypes=defaultArgTypes,circularVariantsDeterminate.args=defaultArgs,circularVariantsDeterminate.parameters={storySource:{source:'args => <div style={{\n  display: "grid",\n  gap: "50px"\n}}>\n        <IcLoadingIndicator progress={args.progress} min={args.min} max={args.max} label="Small" size="small" />\n        <IcLoadingIndicator progress={args.progress} min={args.min} max={args.max} label="Default" />\n        <IcLoadingIndicator progress={args.progress} min={args.min} max={args.max} label="Large" size="large" />\n      </div>'}};const iconCircular=()=>(0,jsx_runtime.jsx)(components.sz,{size:"icon"});iconCircular.storyName="Icon (circular)",iconCircular.parameters={storySource:{source:'<IcLoadingIndicator size="icon" />'}};const linearIndeterminate=()=>(0,jsx_runtime.jsx)(components.sz,{label:"Loading...",type:"linear"});linearIndeterminate.storyName="Linear (indeterminate)",linearIndeterminate.parameters={storySource:{source:'<IcLoadingIndicator label="Loading..." type="linear" />'}};const linearDeterminate=args=>(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Loading...",type:"linear"});linearDeterminate.storyName="Linear (determinate)",linearDeterminate.argTypes=defaultArgTypes,linearDeterminate.args=defaultArgs,linearDeterminate.parameters={storySource:{source:'args => <IcLoadingIndicator progress={args.progress} min={args.min} max={args.max} label="Loading..." type="linear" />'}};const linearVariantsIndeterminate=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{label:"Small",size:"small",type:"linear"}),(0,jsx_runtime.jsx)(components.sz,{label:"Default",type:"linear"}),(0,jsx_runtime.jsx)(components.sz,{label:"Large",size:"large",type:"linear"}),(0,jsx_runtime.jsx)(components.sz,{label:"Full-width",size:"default",type:"linear",variant:"full-width"})]});linearVariantsIndeterminate.storyName="Linear variants (indeterminate)",linearVariantsIndeterminate.parameters={storySource:{source:'<div style={{\n  display: "grid",\n  gap: "50px"\n}}><IcLoadingIndicator label="Small" size="small" type="linear" /><IcLoadingIndicator label="Default" type="linear" /><IcLoadingIndicator label="Large" size="large" type="linear" /><IcLoadingIndicator label="Full-width" size="default" type="linear" variant="full-width" /></div>'}};const linearVariantsDeterminate=args=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Small",size:"small",type:"linear"}),(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Default",type:"linear"}),(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Large",size:"large",type:"linear"}),(0,jsx_runtime.jsx)(components.sz,{progress:args.progress,min:args.min,max:args.max,label:"Full-width",size:"default",type:"linear",variant:"full-width"})]});linearVariantsDeterminate.storyName="Linear variants (determinate)",linearVariantsDeterminate.argTypes=defaultArgTypes,linearVariantsDeterminate.args=defaultArgs,linearVariantsDeterminate.parameters={storySource:{source:'args => <div style={{\n  display: "grid",\n  gap: "50px"\n}}>\n        <IcLoadingIndicator progress={args.progress} min={args.min} max={args.max} label="Small" size="small" type="linear" />\n        <IcLoadingIndicator progress={args.progress} min={args.min} max={args.max} label="Default" type="linear" />\n        <IcLoadingIndicator progress={args.progress} min={args.min} max={args.max} label="Large" size="large" type="linear" />\n        <IcLoadingIndicator progress={args.progress} min={args.min} max={args.max} label="Full-width" size="default" type="linear" variant="full-width" />\n      </div>'}};const circularDark=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{label:"Small",size:"small",dark:!0}),(0,jsx_runtime.jsx)(components.sz,{label:"Default",dark:!0}),(0,jsx_runtime.jsx)(components.sz,{label:"Large",size:"large",dark:!0})]});circularDark.storyName="Circular dark",circularDark.parameters={storySource:{source:'<div style={{\n  display: "grid",\n  gap: "50px"\n}}><IcLoadingIndicator label="Small" size="small" dark /><IcLoadingIndicator label="Default" dark /><IcLoadingIndicator label="Large" size="large" dark /></div>'},backgrounds:{default:"dark"}};const iconDarkCircular=()=>(0,jsx_runtime.jsx)(components.sz,{size:"icon",dark:!0});iconDarkCircular.storyName="Icon dark (circular)",iconDarkCircular.parameters={storySource:{source:'<IcLoadingIndicator size="icon" dark />'},backgrounds:{default:"dark"}};const linearDark=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{label:"Default",type:"linear",dark:!0}),(0,jsx_runtime.jsx)(components.sz,{label:"Large",size:"large",type:"linear",dark:!0}),(0,jsx_runtime.jsx)(components.sz,{label:"Full-width",type:"linear",variant:"full-width",dark:!0})]});linearDark.storyName="Linear dark",linearDark.parameters={storySource:{source:'<div style={{\n  display: "grid",\n  gap: "50px"\n}}><IcLoadingIndicator label="Default" type="linear" dark /><IcLoadingIndicator label="Large" size="large" type="linear" dark /><IcLoadingIndicator label="Full-width" type="linear" variant="full-width" dark /></div>'},backgrounds:{default:"dark"}};const noLabel=()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"50px"},children:[(0,jsx_runtime.jsx)(components.sz,{name:"Loading"}),(0,jsx_runtime.jsx)(components.sz,{name:"Loading",type:"linear"})]});noLabel.storyName="No label",noLabel.parameters={storySource:{source:'<div style={{\n  display: "grid",\n  gap: "50px"\n}}><IcLoadingIndicator name="Loading" /><IcLoadingIndicator name="Loading" type="linear" /></div>'}};const changingLabel=()=>(0,jsx_runtime.jsx)(components.sz,{label:"Loading.../Still loading...",labelDuration:"4000"});changingLabel.storyName="Changing label",changingLabel.parameters={storySource:{source:'<IcLoadingIndicator label="Loading.../Still loading..." labelDuration="4000" />'}};const progressIndicatorForCompactStep=args=>(0,jsx_runtime.jsx)(components.sz,{size:"small","inner-label":"3",progress:args.progress,min:args.min,max:args.max});progressIndicatorForCompactStep.storyName="Progress indicator for compact step",progressIndicatorForCompactStep.argTypes=defaultArgTypes,progressIndicatorForCompactStep.args=defaultArgs,progressIndicatorForCompactStep.parameters={storySource:{source:'args => <IcLoadingIndicator size="small" inner-label="3" progress={args.progress} min={args.min} max={args.max} />'},loki:{skip:!0}};const componentMeta={title:"React Components/Loading",component:components.sz,tags:["stories-mdx"],includeStories:["circularIndeterminate","circularDeterminate","circularVariantsIndeterminate","circularVariantsDeterminate","iconCircular","linearIndeterminate","linearDeterminate","linearVariantsIndeterminate","linearVariantsDeterminate","circularDark","iconDarkCircular","linearDark","noLabel","changingLabel","progressIndicatorForCompactStep"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_loading_indicator_stories=componentMeta,__namedExportsOrder=["defaultArgs","defaultArgTypes","circularIndeterminate","circularDeterminate","circularVariantsIndeterminate","circularVariantsDeterminate","iconCircular","linearIndeterminate","linearDeterminate","linearVariantsIndeterminate","linearVariantsDeterminate","circularDark","iconDarkCircular","linearDark","noLabel","changingLabel","progressIndicatorForCompactStep"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);