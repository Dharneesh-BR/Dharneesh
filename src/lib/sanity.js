import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// Configure the Sanity client
export const client = createClient({
  projectId: 'eu2wjb5o',
  dataset: 'production',
  useCdn: true, // Set to false for draft mode
  apiVersion: '2024-04-24',
  organizationId: 'oESzYF2TO',
});

// Helper function for building image URLs
const builder = createImageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

// Example query functions
export const getPosts = async () => {
  // Try both 'post' and 'blog' types
  const query = `*[_type in ["post", "blog"]] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    categories,
    body,
    _type
  }`;
  
  try {
    console.log('Sanity client config:', {
      projectId: client.config().projectId,
      dataset: client.config().dataset,
      useCdn: client.config().useCdn,
    });
    console.log('Executing query:', query);
    const posts = await client.fetch(query);
    console.log('Sanity query result:', posts);
    console.log('Number of posts:', posts?.length || 0);
    if (posts && posts.length > 0) {
      console.log('Successfully fetched posts from Sanity');
      return posts;
    } else {
      console.log('No posts found in Sanity, using fallback data');
    }
  } catch (error) {
    console.error('Error fetching posts from Sanity:', error);
    console.error('Error details:', error.message);
    console.log('Using fallback data due to error');
  }

  // Fallback static blog data
  return [
    {
      _id: "1",
      title: "The Art of Conscious Brand Building",
      slug: { current: "conscious-brand-building" },
      publishedAt: "2025-03-15",
      excerpt: "Discover how conscious brand building transforms businesses from the inside out, creating lasting impact and meaningful connections with your audience.",
      categories: [{ title: "Brand Strategy" }],
      body: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'Conscious brand building is more than just creating a logo or tagline. It\'s about crafting a brand that resonates deeply with your audience and creates meaningful connections that last.' }]
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'What Makes a Brand Conscious?' }]
        },
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'A conscious brand is built on authenticity, purpose, and a deep understanding of your audience\'s needs and values. It\'s about creating experiences that align with your brand\'s core values and resonate with your target market.' }]
        }
      ]
    },
    {
      _id: "2",
      title: "Founder Performance: The Missing Link",
      slug: { current: "founder-performance" },
      publishedAt: "2025-03-10",
      excerpt: "Why founder performance is the single most important factor in startup success, and how to optimize your energy, focus, and decision-making.",
      categories: [{ title: "Health & Performance" }],
    },
    {
      _id: "3",
      title: "Scaling with Systems, Not Hustle",
      slug: { current: "scaling-with-systems" },
      publishedAt: "2025-03-05",
      excerpt: "Learn the framework for building systems that scale your business without burning out. The shift from operator to architect.",
      categories: [{ title: "Growth" }],
    },
    {
      _id: "4",
      title: "Leadership in the Age of AI",
      slug: { current: "leadership-age-of-ai" },
      publishedAt: "2025-02-28",
      excerpt: "How AI is reshaping leadership requirements and what founders need to do differently to lead teams in this new era.",
      categories: [{ title: "Leadership" }],
    },
    {
      _id: "5",
      title: "The Future of Work is Human",
      slug: { current: "future-of-work-human" },
      publishedAt: "2025-02-20",
      excerpt: "Why the companies that prioritize human connection and wellbeing will win the talent war in the next decade.",
      categories: [{ title: "Future of Work" }],
    },
    {
      _id: "6",
      title: "Innovation Through Constraint",
      slug: { current: "innovation-through-constraint" },
      publishedAt: "2025-02-15",
      excerpt: "How limitations and constraints can actually accelerate innovation and lead to breakthrough ideas that change industries.",
      categories: [{ title: "Innovation" }],
    },
  ];
};

export const getPostBySlug = async (slug) => {
  // Try both 'post' and 'blog' types, and both 'body' and 'content' fields
  const query = `*[_type in ["post", "blog"] && slug.current == $slug][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    categories,
    body,
    content,
    _type
  }`;

  console.log('Fetching post with slug:', slug);
  const post = await client.fetch(query, { slug });
  console.log('Post result:', post);
  return post;
};

export const getCategories = async () => {
  // Return static categories since we removed the category schema
  return [
    { title: "All" },
    { title: "Brand Strategy" },
    { title: "Leadership" },
    { title: "Health & Performance" },
    { title: "Growth" },
    { title: "Future of Work" },
    { title: "Technology" },
    { title: "Innovation" },
    { title: "Business" }
  ];
};

export const getPrograms = async () => {
  const query = `*[_type == "program"] | order(order asc) {
    title,
    slug,
    description,
    icon,
    gradient,
    featured,
    order,
    content
  }`;
  
  const programs = await client.fetch(query);
  return programs;
};

export const getProgramBySlug = async (slug) => {
  const query = `*[_type == "program" && slug.current == $slug][0] {
    title,
    slug,
    description,
    icon,
    gradient,
    featured,
    order,
    content
  }`;
  
  const program = await client.fetch(query, { slug });
  return program;
};

export const getTestimonials = async () => {
  const query = `*[_type == "testimonial"] | order(order asc) {
    content,
    author,
    role,
    company,
    rating,
    order,
    featured
  }`;
  
  const testimonials = await client.fetch(query);
  return testimonials;
};

export const getVentures = async () => {
  const query = `*[_type == "venture"] | order(order asc) {
    name,
    slug,
    description,
    role,
    period,
    website,
    icon,
    iconColor,
    tags,
    gradient,
    status,
    achievement,
    exit,
    order,
    featured
  }`;
  
  const ventures = await client.fetch(query);
  return ventures;
};

export const getVentureBySlug = async (slug) => {
  const query = `*[_type == "venture" && slug.current == $slug][0] {
    name,
    slug,
    description,
    role,
    period,
    website,
    icon,
    iconColor,
    tags,
    gradient,
    status,
    achievement,
    exit,
    order,
    featured,
    content
  }`;
  
  const venture = await client.fetch(query, { slug });
  return venture;
};

export default client;
