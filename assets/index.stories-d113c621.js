import{c as e,j as w,t as M}from"./clsx.m-54a57abd.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const O=e(`
	font-sans
	text-inherit
`),R={100:e("font-thin"),200:e("font-extralight"),300:e("font-light"),400:e("font-normal"),500:e("font-medium"),600:e("font-semibold"),700:e("font-bold"),800:e("font-extrabold"),900:e("font-black")},q={display:{lg:e("text-7xl"),md:e("text-6xl"),sm:e("text-5xl")},heading:{lg:e("text-4xl"),md:e("text-3xl"),sm:e("text-2xl")},title:{lg:e("text-2xl"),md:e("text-xl"),sm:e("text-lg")},label:{lg:e("text-base"),md:e("text-sm"),sm:e("text-xs")},body:{lg:e("text-lg"),md:e("text-base"),sm:e("text-sm")}},m=(l,i,p)=>({as:S=i,size:$="md",weight:j=p,className:z,children:E,..._})=>{const k=S;return w.jsx(k,{className:M(O,q[l][$],R[j],z),..._,children:E})},v=m("display","h1",400),A=m("heading","h2",400),F=m("title","h2",500),G=m("label","label",500),I=m("body","p",400),t={Display:v,Heading:A,Title:F,Label:G,Body:I},J=["lg","md","sm"],K=[100,200,300,400,500,600,700,800,900],W={title:"Components/Text",subcomponents:{Display:t.Display,Heading:t.Heading,Title:t.Title,Label:t.Label,Body:t.Body},args:{size:"md",weight:400},argTypes:{componentName:{table:{disable:!0}},children:{control:"text"},as:{control:"text"},size:{control:"inline-radio",options:J},weight:{control:"inline-radio",options:K}}},c=({componentName:l,...i})=>{const p=t[l]||t.Body;return w.jsx(p,{...i})},n=c.bind({});n.args={componentName:"Display",children:"Display Text",as:"h1"};const o=c.bind({});o.args={componentName:"Heading",children:"Heading Text",as:"h2"};const s=c.bind({});s.args={componentName:"Title",children:"Title Text",weight:500,as:"h2"};const a=c.bind({});a.args={componentName:"Label",children:"Label Text",weight:500,as:"label"};const r=c.bind({});r.args={componentName:"Body",children:"Body Text",as:"p"};var d,x,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`({
  componentName,
  ...args
}) => {
  const Component = Text[componentName] || Text.Body;
  return <Component {...args} />;
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var T,b,y;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`({
  componentName,
  ...args
}) => {
  const Component = Text[componentName] || Text.Body;
  return <Component {...args} />;
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var u,h,N;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`({
  componentName,
  ...args
}) => {
  const Component = Text[componentName] || Text.Body;
  return <Component {...args} />;
}`,...(N=(h=s.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var C,B,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`({
  componentName,
  ...args
}) => {
  const Component = Text[componentName] || Text.Body;
  return <Component {...args} />;
}`,...(f=(B=a.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var D,H,L;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`({
  componentName,
  ...args
}) => {
  const Component = Text[componentName] || Text.Body;
  return <Component {...args} />;
}`,...(L=(H=r.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const X=["Display","Heading","Title","Label","Body"];export{r as Body,n as Display,o as Heading,a as Label,s as Title,X as __namedExportsOrder,W as default};
//# sourceMappingURL=index.stories-d113c621.js.map
