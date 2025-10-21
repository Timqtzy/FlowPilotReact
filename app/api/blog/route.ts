import { NextResponse } from 'next/server';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl?: string;
  slug: string;
  tags?: string[];
}

// This will be replaced with your actual n8n webhook URL
// You can set this in your environment variables
const N8N_BLOG_ENDPOINT = process.env.N8N_BLOG_ENDPOINT || '';

export async function GET(request: Request) {
  try {
    // If n8n endpoint is configured, fetch from there
    if (N8N_BLOG_ENDPOINT) {
      const response = await fetch(N8N_BLOG_ENDPOINT, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      });

      if (!response.ok) {
        throw new Error('Failed to fetch from n8n');
      }

      const data = await response.json();

      // Sort by date (newest first) and limit to 4
      const sortedPosts = Array.isArray(data)
        ? data.sort((a: BlogPost, b: BlogPost) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
          ).slice(0, 4)
        : [];

      return NextResponse.json(sortedPosts);
    }

    // Fallback: Return sample blog posts (replace with your actual data source)
    const samplePosts: BlogPost[] = [
      {
        id: '1',
        title: '5 Ways AI Automation Can Transform Your Business',
        excerpt: 'Discover how AI-powered workflows can save you hours of manual work and scale your operations efficiently.',
        content: 'Full content here...',
        author: 'Gabriel Maturan',
        date: '2024-01-15',
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
        slug: '5-ways-ai-automation-transform-business',
        tags: ['AI', 'Automation', 'Business'],
      },
      {
        id: '2',
        title: 'Getting Started with Make (Integromat) vs Zapier',
        excerpt: 'A comprehensive comparison of two leading automation platforms to help you choose the right tool.',
        content: 'Full content here...',
        author: 'Joshua Wong',
        date: '2024-01-10',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
        slug: 'make-integromat-vs-zapier-comparison',
        tags: ['Make', 'Zapier', 'Tools'],
      },
      {
        id: '3',
        title: 'How to Automate Your CRM with n8n',
        excerpt: 'Step-by-step guide to building powerful CRM automations using the open-source n8n platform.',
        content: 'Full content here...',
        author: 'Leslie Gorospe',
        date: '2024-01-05',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
        slug: 'automate-crm-with-n8n',
        tags: ['n8n', 'CRM', 'Tutorial'],
      },
      {
        id: '4',
        title: 'Building AI Agents for Customer Support',
        excerpt: 'Learn how to deploy intelligent AI agents that handle customer inquiries 24/7 automatically.',
        content: 'Full content here...',
        author: 'Tim',
        date: '2024-01-01',
        imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop',
        slug: 'building-ai-agents-customer-support',
        tags: ['AI Agents', 'Customer Support', 'Automation'],
      },
    ];

    return NextResponse.json(samplePosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}
