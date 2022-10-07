<template>
  <span v-if="false" />
</template>

<script>
import GLOBAL from '~/constants/global'

/** current environment */
/* 
const CURRENT_ENV = process.env.ENV || 'prod'
const isProduction = CURRENT_ENV === 'prod'
 */

/** global constants **/
const { company, title, description, image, url, lang } = GLOBAL

const BASEURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://nuxtjs-vuetify-dashboard.netlify.app'

export default {
  name: 'SeoHead',
  props: {
    title: { type: String, default: () => title },
    description: {
      type: String,
      default: () => description
    },
    image: { type: String, default: () => `${BASEURL}${image}` },
    url: { type: String, default: () => url || BASEURL }
  },
  head() {
    const { title, description, image, url } = this
    const name = company
    const logo = image

    const structuredData = [
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ImageObject',
            '@id': `${url}/#primaryimage`,
            inLanguage: 'en-US',
            url: `${url}`,
            width: 1200,
            height: 628,
            caption: title
          },
          {
            '@type': 'WebPage',
            '@id': `${url}/#webpage`,
            url: `${url}`,
            name: title,
            isPartOf: {
              '@id': `${url}/#website`
            },
            image: [image],
            primaryImageOfPage: {
              '@id': `${url}/#primaryimage`,
              image
            },
            datePublished: '2020-10-08T12:10:19+00:00',
            dateModified: '2020-12-04T10:17:53+00:00',
            description,
            breadcrumb: {
              '@id': `${url}/#breadcrumb`
            },
            inLanguage: 'en-US',
            potentialAction: [
              {
                '@type': 'ReadAction',
                target: [`${url}`]
              }
            ]
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${url}/#breadcrumb`,
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@type': 'WebPage',
                  '@id': url,
                  url,
                  name: 'Home'
                }
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@type': 'WebPage',
                  '@id': `${url}/blog/`,
                  url: `${url}/blog/`,
                  name: 'Web Development and SEO blog'
                }
              },
              {
                '@type': 'ListItem',
                position: 3,
                item: {
                  '@type': 'WebPage',
                  '@id': `${url}`,
                  url: `${url}`,
                  name: title
                }
              }
            ]
          },
          {
            '@type': ['Article', 'NewsArticle'],
            '@id': `${url}/#article`,
            isPartOf: {
              '@id': `${url}/#webpage`
            },
            headline: title,
            datePublished: '2020-10-08T12:10:19+00:00',
            dateModified: '2020-12-04T10:17:53+00:00',
            mainEntityOfPage: {
              '@id': `${url}/#webpage`
            },
            image: [image],
            primaryImageOfPage: {
              '@id': `${url}/#primaryimage`,
              image
            },
            keywords:
              'Content SEO, Mobile SEO, Web Development, Nuxt.js, Next.js, GulpJS',
            description,
            inLanguage: 'en-US',
            potentialAction: [
              {
                '@type': 'ReadAction',
                name: 'Read',
                target: [`${url}/#read`]
              }
            ],
            publisher: {
              '@type': 'Organization',
              '@id': `${url}/#organization`,
              name,
              logo
            },
            author: {
              '@id': `${url}/#/schema/person/20f2f5b716256f77986451b4794a8f21`,
              url,
              name
            },
            copyrightYear: new Date().getFullYear(),
            copyrightHolder: {
              '@id': `${url}/#organization`,
              logo
            }
          }
        ]
      }
    ]

    return {
      title,
      description,
      htmlAttrs: { lang },
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: description
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: name
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${url}`
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image
        },

        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: title
        },
        // {
        //   hid: 'published_time',
        //   property: 'article:published_time',
        //   content: PUBLISH
        // },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `${url}`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: title
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: `@${name}`
        }
      ],
      link: [
        {
          rel: 'canonical',
          hid: 'canonical',
          href: `${url}`
        }
      ],
      script: [
        {
          innerHTML: JSON.stringify(structuredData),
          type: 'application/ld+json'
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  }
}
</script>
