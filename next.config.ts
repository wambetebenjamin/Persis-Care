import type {NextConfig} from 'next';
const config:NextConfig={poweredByHeader:false,headers:async()=>[{source:'/:path*',headers:[{key:'x-vercel-region',value:'cdg1'},{key:'X-Content-Type-Options',value:'nosniff'},{key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},{key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'}]}]};export default config;
