import Script from 'next/script'

function Home() {

  return (
    <div class="container">
     
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=317873811"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag(config, '317873811');
        `}
      </Script>
    </div>
  )
}

export default Home
