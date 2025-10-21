"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation, MobileNavigation } from "@/components/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AwtomasyonLogo from "@/public/Awtomasyon.png";

interface BlogPost {
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

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [otherPosts, setOtherPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        // Fetch the current post
        const postResponse = await fetch(`/api/blog/${slug}`);
        if (!postResponse.ok) throw new Error('Post not found');
        const postData = await postResponse.json();
        setPost(postData);

        // Fetch other posts for sidebar
        const allPostsResponse = await fetch('/api/blog');
        if (allPostsResponse.ok) {
          const allPosts = await allPostsResponse.json();
          // Filter out current post and limit to 3
          const filtered = allPosts
            .filter((p: BlogPost) => p.slug !== slug)
            .slice(0, 3);
          setOtherPosts(filtered);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return readTime;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src={AwtomasyonLogo} alt="Awtomasyon Logo" className="w-14 h-14 rounded-full" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Awtomasyon
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Navigation />
              <MobileNavigation />
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="pt-32 px-6 text-center">
          <p className="text-xl text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src={AwtomasyonLogo} alt="Awtomasyon Logo" className="w-14 h-14 rounded-full" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Awtomasyon
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Navigation />
              <MobileNavigation />
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="pt-32 px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-lg">
              <Image src={AwtomasyonLogo} alt="Awtomasyon Logo" className="w-14 h-14 rounded-full" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Awtomasyon
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Navigation />
            <MobileNavigation />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />

          {/* Layout: Main content + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              {post.imageUrl && (
                <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              )}

              {/* Article Header */}
              <div className="mb-8">
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  {post.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{calculateReadTime(post.content)} min read</span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div
                  className="text-foreground leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(/^# /gm, '<h1 class="text-3xl font-bold mt-8 mb-4">')
                      .replace(/\n/g, '</h1>')
                      .replace(/^## /gm, '<h2 class="text-2xl font-bold mt-6 mb-3">')
                      .replace(/^### /gm, '<h3 class="text-xl font-semibold mt-4 mb-2">')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/^- (.*?)$/gm, '<li>$1</li>')
                      .replace(/(<li>.*<\/li>\n?)+/g, '<ul class="list-disc list-inside space-y-2 my-4">$&</ul>')
                      .replace(/\n\n/g, '</p><p class="mb-4">')
                      .replace(/^(?!<[h|u|l])/gm, '<p class="mb-4">')
                      .replace(/$(?!<\/)/gm, '</p>')
                  }}
                />
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-8 glass rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Business?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how Awtomasyon can help you implement these automation solutions for your business.
                </p>
                <Button variant="hero" size="lg" asChild className="text-white">
                  <Link href="/#contact">
                    Book a Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sidebar - Right Side */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                <div className="glass p-6 rounded-2xl border border-primary/20">
                  <h3 className="text-2xl font-bold mb-6">Other Articles</h3>
                  <div className="space-y-6">
                  {otherPosts.map((otherPost) => (
                    <Card
                      key={otherPost.id}
                      className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-all duration-300 group hover:scale-105 overflow-hidden"
                    >
                      {/* Thumbnail */}
                      {otherPost.imageUrl && (
                        <div className="relative h-32 overflow-hidden">
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(${otherPost.imageUrl})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>
                      )}

                      <CardHeader>
                        <CardTitle className="text-base line-clamp-2 group-hover:text-primary transition-colors">
                          {otherPost.title}
                        </CardTitle>
                        <CardDescription className="text-xs line-clamp-2">
                          {otherPost.excerpt}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full text-xs group/btn hover:bg-primary/10 hover:text-primary"
                          asChild
                        >
                          <Link href={`/blog/${otherPost.slug}`}>
                            Read Article
                            <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                  {/* View All Link */}
                  <div className="mt-6">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/blog">
                        View All Articles
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-12 bg-secondary/30 text-center border-t border-border/50">
        <p className="text-foreground text-lg">
          © 2024 awtomasyon Virtual automation experts for the ai era
        </p>
      </footer>
    </div>
  );
}
