import { defineConfig } from '@sanity/cli';
import { structureTool } from '@sanity/structure';
import { visionTool } from '@sanity/vision';
import { orderableDocumentList } from '@sanity/orderable-document-list';

export default defineConfig({
  projectId: 'eu2wjb5o',
  dataset: 'production',
  organizationId: 'oESzYF2TO',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Blog Posts')
              .schemaType('post')
              .child(S.documentTypeList('post').title('All Posts')),
            S.listItem()
              .title('Categories')
              .schemaType('category')
              .child(S.documentTypeList('category').title('All Categories')),
            S.listItem()
              .title('Programs')
              .schemaType('program')
              .child(
                orderableDocumentList('program', {
                  order: 'order',
                })
              ),
            S.listItem()
              .title('Ventures')
              .schemaType('venture')
              .child(
                orderableDocumentList('venture', {
                  order: 'order',
                })
              ),
            S.listItem()
              .title('Testimonials')
              .schemaType('testimonial')
              .child(
                orderableDocumentList('testimonial', {
                  order: 'order',
                })
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [
      {
        name: 'post',
        title: 'Blog Post',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                title: 'Alternative Text',
                type: 'string',
              },
            ],
          },
          {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
          },
          {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: { type: 'category' },
              },
            ],
          },
          {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
          },
          {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
              {
                type: 'block',
              },
              {
                type: 'image',
                options: { hotspot: true },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'category',
        title: 'Category',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
        ],
      },
      {
        name: 'program',
        title: 'Program',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            description: 'Font Awesome icon class (e.g., "fa-lightbulb")',
          },
          {
            name: 'gradient',
            title: 'Gradient',
            type: 'string',
            description: 'CSS gradient classes (e.g., "from-[#5B6CFF] to-[#2D3AFF]")',
          },
          {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
          },
          {
            name: 'order',
            title: 'Order',
            type: 'number',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'block',
              },
              {
                type: 'image',
                options: { hotspot: true },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'venture',
        title: 'Venture',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'role',
            title: 'Role',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'period',
            title: 'Period',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'website',
            title: 'Website',
            type: 'url',
          },
          {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            description: 'Font Awesome icon class (e.g., "fa-rocket")',
          },
          {
            name: 'iconColor',
            title: 'Icon Color',
            type: 'string',
            description: 'CSS color class (e.g., "text-purple-600")',
          },
          {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
          },
          {
            name: 'gradient',
            title: 'Gradient',
            type: 'string',
            description: 'CSS gradient classes (e.g., "from-purple-400 to-pink-400")',
          },
          {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
              list: [
                { title: 'Active', value: 'active' },
                { title: 'Exited', value: 'exited' },
                { title: 'Past', value: 'past' },
              ],
            },
          },
          {
            name: 'achievement',
            title: 'Achievement',
            type: 'text',
          },
          {
            name: 'exit',
            title: 'Exit Details',
            type: 'text',
          },
          {
            name: 'order',
            title: 'Order',
            type: 'number',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
          },
          {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'block',
              },
              {
                type: 'image',
                options: { hotspot: true },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'testimonial',
        title: 'Testimonial',
        type: 'document',
        fields: [
          {
            name: 'content',
            title: 'Content',
            type: 'text',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'author',
            title: 'Author',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'role',
            title: 'Role',
            type: 'string',
          },
          {
            name: 'company',
            title: 'Company',
            type: 'string',
          },
          {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5).required(),
          },
          {
            name: 'order',
            title: 'Order',
            type: 'number',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
          },
        ],
      },
      {
        name: 'author',
        title: 'Author',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'bio',
            title: 'Bio',
            type: 'text',
          },
        ],
      },
    ],
  },
});
