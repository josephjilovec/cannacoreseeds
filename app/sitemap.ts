import type { MetadataRoute } from 'next'
const routes=['','/genetics','/protocols','/about','/contact']
export default function sitemap():MetadataRoute.Sitemap{return routes.map(route=>({url:`https://cannacoreseeds.com${route}`,lastModified:new Date()}))}
