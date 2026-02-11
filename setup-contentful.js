#!/usr/bin/env node
/**
 * Contentful Content Model Setup Script
 * Creates Page, Blog Post, Author, and Site Settings content types
 */

const contentful = require('contentful-management')

const SPACE_ID = '7z17uamwrgdj'
const ACCESS_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN || 'YOUR_MANAGEMENT_TOKEN'

const client = contentful.createClient({
  accessToken: ACCESS_TOKEN
})

async function setupContentModel() {
  try {
    console.log('🚀 Connecting to Contentful...')
    const space = await client.getSpace(SPACE_ID)
    const environment = await space.getEnvironment('master')

    console.log('✅ Connected to space:', space.name)

    // Create Page content type
    console.log('\n📄 Creating Page content type...')
    const pageContentType = await environment.createContentTypeWithId('page', {
      name: 'Page',
      description: 'Website pages (About, FAQs, Support, Policies)',
      displayField: 'title',
      fields: [
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
          required: true,
          localized: false,
          validations: []
        },
        {
          id: 'slug',
          name: 'Slug',
          type: 'Symbol',
          required: true,
          localized: false,
          validations: [
            {
              unique: true
            }
          ]
        },
        {
          id: 'metaDescription',
          name: 'Meta Description',
          type: 'Symbol',
          required: true,
          localized: false,
          validations: [
            {
              size: { min: 50, max: 160 }
            }
          ]
        },
        {
          id: 'content',
          name: 'Content',
          type: 'RichText',
          required: true,
          localized: false,
          validations: []
        },
        {
          id: 'publishDate',
          name: 'Publish Date',
          type: 'Date',
          required: true,
          localized: false,
          validations: []
        }
      ]
    })
    await pageContentType.publish()
    console.log('✅ Page content type created and published')

    // Create Blog Post content type
    console.log('\n📝 Creating Blog Post content type...')
    const blogPostContentType = await environment.createContentTypeWithId('blogPost', {
      name: 'Blog Post',
      description: 'Blog posts for the website',
      displayField: 'title',
      fields: [
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
          required: true,
          localized: false
        },
        {
          id: 'slug',
          name: 'Slug',
          type: 'Symbol',
          required: true,
          localized: false,
          validations: [{ unique: true }]
        },
        {
          id: 'excerpt',
          name: 'Excerpt',
          type: 'Text',
          required: true,
          localized: false
        },
        {
          id: 'body',
          name: 'Body',
          type: 'RichText',
          required: true,
          localized: false
        },
        {
          id: 'featuredImage',
          name: 'Featured Image',
          type: 'Link',
          linkType: 'Asset',
          required: false,
          localized: false
        },
        {
          id: 'category',
          name: 'Category',
          type: 'Symbol',
          required: false,
          localized: false
        },
        {
          id: 'publishDate',
          name: 'Publish Date',
          type: 'Date',
          required: true,
          localized: false
        }
      ]
    })
    await blogPostContentType.publish()
    console.log('✅ Blog Post content type created and published')

    // Create Author content type
    console.log('\n👤 Creating Author content type...')
    const authorContentType = await environment.createContentTypeWithId('author', {
      name: 'Author',
      description: 'Blog post authors',
      displayField: 'name',
      fields: [
        {
          id: 'name',
          name: 'Name',
          type: 'Symbol',
          required: true,
          localized: false
        },
        {
          id: 'bio',
          name: 'Bio',
          type: 'Text',
          required: false,
          localized: false
        },
        {
          id: 'photo',
          name: 'Photo',
          type: 'Link',
          linkType: 'Asset',
          required: false,
          localized: false
        }
      ]
    })
    await authorContentType.publish()
    console.log('✅ Author content type created and published')

    // Create Site Settings content type
    console.log('\n⚙️  Creating Site Settings content type...')
    const settingsContentType = await environment.createContentTypeWithId('siteSettings', {
      name: 'Site Settings',
      description: 'Global site settings',
      displayField: 'siteName',
      fields: [
        {
          id: 'siteName',
          name: 'Site Name',
          type: 'Symbol',
          required: true,
          localized: false
        },
        {
          id: 'contactEmail',
          name: 'Contact Email',
          type: 'Symbol',
          required: true,
          localized: false
        },
        {
          id: 'socialLinks',
          name: 'Social Links',
          type: 'Object',
          required: false,
          localized: false
        }
      ]
    })
    await settingsContentType.publish()
    console.log('✅ Site Settings content type created and published')

    console.log('\n🎉 Content model setup complete!')
    console.log('\n📋 Next steps:')
    console.log('1. Visit https://app.contentful.com/spaces/7z17uamwrgdj/entries')
    console.log('2. Create your first page entry')
    console.log('3. Update the code to fetch from Contentful')
    console.log('4. Deploy to Vercel')

  } catch (error) {
    if (error.message.includes('already exists')) {
      console.error('\n⚠️  Content type already exists. Skipping...')
      console.log('Your content model is already set up!')
    } else {
      console.error('\n❌ Error:', error.message)
      console.error(error)
    }
  }
}

setupContentModel()
