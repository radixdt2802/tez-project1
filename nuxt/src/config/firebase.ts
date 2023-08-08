
export const FIREBASE = {
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*"
    ],
    "trailingSlash": false,
    "headers": [
      {
        "source": "/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "no-cache, no-store, must-revalidate"
          }
        ]
      },
      {
        "source": "**/*.@(js|eot|otf|ttf|ttc|woff|font|css)",
        "headers": [
          {
            "key": "cache-control",
            "value": "max-age=86400"
          }
        ]
      },
      {
        "source": "**",
        "headers": [
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "SAMEORIGIN"
          },
          {
            "key": "X-Frame-Options",
            "value": "SAMEORIGIN"
          },
          {
            "key": "X-Permitted-Cross-Domain-Policies",
            "value": "none"
          },
          {
            "key": "Referrer-Policy",
            "value": "no-referrer"
          },
          {
            "key": "Strict-Transport-Security",
            "value": "max-age=15552000; includeSubDomains"
          },
          {
            "key": "X-Download-Options",
            "value": "noopen"
          },
          //{
          //  "key": "Content-Security-Policy",
          //  "value": "connect-src 'self' https://crm.zoho.com https://salesiq.zoho.com https://www.google-analytics.com; default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' fonts.gstatic.com https: data:;frame-ancestors 'self';img-src 'self' d11ovvaxdf1k5p.cloudfront.net https://crm.zoho.com;object-src 'none';script-src 'self' https://cdn.jsdelivr.net https://www.googletagmanager.com 'unsafe-inline' 'unsafe-eval' https://jsonip.com https://salesiq.zoho.com https://www.google-analytics.com;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests"
          //},
          {
            "key": "X-UA-Compatible",
            "value": "ie=edge"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          },
          {
            "key": "Permissions-Policy",
            "value": "geolocation=(), microphone=()"
          }
        ]
      }
    ],
    "redirects": [],
    "rewrites": []
  }
}
