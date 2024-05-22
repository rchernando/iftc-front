import Head from "next/head"

const SEO = () => {
     return (
         <>
               <title>My App</title>
               <meta name="description" content="My App description" />
               <meta name="keywords" content="my, app, keywords" />
               <link rel="canonical" href="https://myapp.com" />
               <meta property="og:title" content="My App" />
               <meta property="og:description" content="My App description" />
               <meta property="og:type" content="website" />
               <meta property="og:url" content="https://myapp.com" />
               <meta property="og:image" content="https://myapp.com/og-image.jpg" />
               <meta property="og:site_name" content="My App" />
               <meta name="twitter:card" content="summary_large_image" />
               <meta name="twitter:title" content="My App" />
               <meta name="twitter:description" content="My App description" />
               <meta name="twitter:image" content="https://myapp.com/twitter-image.jpg" />
         </>
     )
}

export default SEO