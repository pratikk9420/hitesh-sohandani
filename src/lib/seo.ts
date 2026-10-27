import { site } from "./site";

function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageHead(title:string, description:string, path:string, scripts?: unknown[]) {
 const url = absoluteUrl(path);
 return { meta:[{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:type",content:path.startsWith("/journal/")?"article":"website"},{property:"og:url",content:url},{name:"twitter:card",content:"summary_large_image"}], links:[{rel:"canonical",href:url}], scripts:scripts?.map((value)=>({type:"application/ld+json",children:JSON.stringify(value)})) };
}
export const breadcrumbSchema=(items:{name:string;item:string}[])=>({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:items.map((x,i)=>({"@type":"ListItem",position:i+1,name:x.name,item:absoluteUrl(x.item)}))});
