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

const N8N_BLOG_ENDPOINT = process.env.N8N_BLOG_ENDPOINT || '';

// Sample blog posts with full content
const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Ways AI Automation Can Transform Your Business',
    excerpt: 'Discover how AI-powered workflows can save you hours of manual work and scale your operations efficiently.',
    content: `
# 5 Ways AI Automation Can Transform Your Business

In today's fast-paced business environment, automation has become essential for staying competitive. AI-powered automation takes this to the next level by combining intelligent decision-making with automated workflows.

## 1. Intelligent Data Processing

AI automation can process vast amounts of data in seconds, extracting insights and patterns that would take humans hours or days to identify. This includes:

- Automatic data categorization
- Anomaly detection
- Predictive analytics
- Smart data routing

## 2. 24/7 Customer Support

Deploy AI chatbots and agents that provide instant customer support around the clock. Benefits include:

- Instant response times
- Consistent service quality
- Multi-language support
- Seamless handoff to human agents when needed

## 3. Automated Content Generation

AI can help generate and optimize content for your business:

- Blog post drafts
- Social media updates
- Email campaigns
- Product descriptions

## 4. Smart Workflow Orchestration

Connect all your tools and automate complex multi-step processes:

- CRM updates
- Lead scoring and routing
- Invoice processing
- Task assignment

## 5. Predictive Maintenance and Monitoring

AI can predict issues before they occur:

- System health monitoring
- Performance optimization
- Automated alerting
- Preventive maintenance scheduling

## Getting Started

Ready to transform your business with AI automation? Book a free consultation with Awtomasyon today and discover how we can help you implement these powerful solutions.
    `,
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
    content: `
# Getting Started with Make (Integromat) vs Zapier

Choosing the right automation platform can significantly impact your workflow efficiency. Let's compare two industry leaders: Make (formerly Integromat) and Zapier.

## Pricing Comparison

### Zapier
- Free tier: 100 tasks/month
- Starter: $29.99/month
- Professional: $73.50/month
- Team plans available

### Make
- Free tier: 1,000 operations/month
- Core: $9/month
- Pro: $16/month
- Teams plans available

## Feature Comparison

### Visual Workflow Builder
Both platforms offer visual builders, but Make provides more granular control over data flow and transformations.

### Integrations
- Zapier: 5,000+ apps
- Make: 1,500+ apps

While Zapier has more integrations, Make offers deeper customization for each connection.

## When to Choose Zapier

- You need a simple, user-friendly interface
- You're connecting popular apps
- You prefer preset templates
- You need extensive app marketplace

## When to Choose Make

- You need complex data transformations
- You want visual flow control
- You're on a budget
- You need more operations for your money

## Our Recommendation

For simple automations, Zapier is great. For complex workflows with multiple conditions and data transformations, Make offers more value and flexibility.

Need help setting up either platform? Awtomasyon's team can help you choose and implement the right solution.
    `,
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
    content: `
# How to Automate Your CRM with n8n

n8n is an open-source automation platform that offers incredible flexibility for CRM automation. This guide will show you how to get started.

## Why n8n for CRM Automation?

- **Open Source**: Self-host or use cloud
- **Cost-Effective**: No per-operation pricing
- **Flexible**: Full JavaScript support
- **Powerful**: Complex workflows made easy

## Common CRM Automations

### 1. Lead Capture Automation

Create a workflow that:
- Captures form submissions
- Enriches lead data
- Creates CRM contact
- Assigns to sales rep
- Sends notification

### 2. Deal Stage Updates

Automate:
- Stage progression based on activities
- Automatic follow-up tasks
- Team notifications
- Reporting updates

### 3. Customer Onboarding

Build flows for:
- Welcome email sequences
- Task assignment
- Document collection
- Milestone tracking

## Getting Started with n8n

1. **Installation**
   - Cloud: Sign up at n8n.io
   - Self-hosted: Docker deployment

2. **Connect Your CRM**
   - HubSpot
   - Salesforce
   - Pipedrive
   - Custom CRM via API

3. **Build Your First Workflow**
   - Use webhook triggers
   - Add logic nodes
   - Connect your CRM
   - Test thoroughly

## Best Practices

- Start simple, then add complexity
- Use error handling
- Test with sample data
- Document your workflows
- Monitor execution logs

## Need Help?

Awtomasyon specializes in n8n implementations. We can help you design, build, and maintain your CRM automations.
    `,
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
    content: `
# Building AI Agents for Customer Support

AI agents are revolutionizing customer support by providing instant, accurate responses 24/7. Here's how to build one for your business.

## What Are AI Agents?

AI agents are autonomous systems that can:
- Understand natural language
- Make decisions
- Take actions
- Learn from interactions
- Escalate when needed

## Key Components

### 1. Knowledge Base
Your AI agent needs access to:
- Product documentation
- FAQs
- Previous support tickets
- Company policies

### 2. Natural Language Processing
Choose your AI model:
- GPT-4 for complex reasoning
- Claude for detailed responses
- Fine-tuned models for specific domains

### 3. Integration Layer
Connect to:
- Help desk software
- CRM systems
- Communication channels
- Internal databases

### 4. Action Capabilities
Enable your agent to:
- Create tickets
- Update records
- Send emails
- Schedule calls
- Process refunds

## Implementation Steps

1. **Define Use Cases**
   - What questions will it handle?
   - What actions can it take?
   - When to escalate to humans?

2. **Prepare Training Data**
   - Collect historical conversations
   - Document common scenarios
   - Create response templates

3. **Build the Workflow**
   - Set up message routing
   - Configure AI processing
   - Add decision logic
   - Implement actions

4. **Test Thoroughly**
   - Edge cases
   - Error handling
   - Escalation triggers
   - Performance monitoring

## Monitoring and Improvement

- Track resolution rates
- Analyze failed conversations
- Update knowledge base
- Refine prompts
- A/B test responses

## Success Metrics

- First contact resolution rate
- Average response time
- Customer satisfaction scores
- Escalation rate
- Cost per interaction

## Ready to Deploy?

Awtomasyon can help you design, build, and deploy AI agents tailored to your business needs. Book a consultation today!
    `,
    author: 'Tim',
    date: '2024-01-01',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop',
    slug: 'building-ai-agents-customer-support',
    tags: ['AI Agents', 'Customer Support', 'Automation'],
  },
];

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    // If n8n endpoint is configured, try to fetch from there
    if (N8N_BLOG_ENDPOINT) {
      try {
        const response = await fetch(`${N8N_BLOG_ENDPOINT}?slug=${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          next: { revalidate: 300 },
        });

        if (response.ok) {
          const data = await response.json();
          const post = Array.isArray(data) ? data[0] : data;
          if (post) {
            return NextResponse.json(post);
          }
        }
      } catch (error) {
        console.error('Error fetching from n8n:', error);
      }
    }

    // Fallback to sample posts
    const post = samplePosts.find((p) => p.slug === slug);

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}
