import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Configure the Sanity client
export const client = createClient({
  projectId: 'eu2wjb5o',
  dataset: 'production',
  useCdn: true, // Set to false for draft mode
  apiVersion: '2024-04-24',
  organizationId: 'oESzYF2TO',
});

// Helper function for building image URLs
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

// Example query functions
export const getPosts = async () => {
  const query = `*[_type == "blog" && status == "published"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    category,
    readTime,
    featured,
    body
  }`;
  
  const posts = await client.fetch(query);
  return posts;
};

export const getPostBySlug = async (slug) => {
  const query = `*[_type == "blog" && slug.current == $slug && status == "published"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    category,
    readTime,
    featured,
    body
  }`;
  
  const post = await client.fetch(query, { slug });
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
