
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Share2, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameCard from '@/components/GameCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getPostById, getRecentPosts } from '@/data/blogPosts';

const Post = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getPostById(id) : null;
  const relatedPosts = getRecentPosts(3).filter(p => p.id !== id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gaming-dark">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-gaming font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="bg-neon-purple hover:bg-neon-purple/90">
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      
      <article className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-neon-purple hover:text-neon-blue transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Hero Image */}
        <div className="relative rounded-lg overflow-hidden mb-8 neon-glow">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/80 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <Badge className="bg-neon-purple/90 text-white mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-gaming font-bold text-white mb-4">
              {post.title}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Post Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Post Excerpt */}
            <p className="text-xl text-gray-300 leading-relaxed mb-8 border-l-4 border-neon-purple pl-6">
              {post.excerpt}
            </p>

            {/* Post Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div 
                className="text-gray-200 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br />').replace(/### /g, '<h3 class="text-2xl font-gaming font-bold text-neon-blue mb-4 mt-8">').replace(/## /g, '<h2 class="text-3xl font-gaming font-bold text-neon-purple mb-6 mt-10">').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>').replace(/- \*\*(.*?)\*\*/g, '<li class="mb-2"><strong class="text-neon-blue">$1</strong>').replace(/^- (.+)$/gm, '<li class="mb-2">$1</li>') 
                }}
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gaming-light">
              <h3 className="text-lg font-gaming font-bold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-neon-blue text-neon-blue hover:bg-neon-blue/10"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-gaming-light">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-gaming font-bold text-white">Share this post</h3>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm" className="border-neon-red text-neon-red hover:bg-neon-red/10">
                    <Heart className="h-4 w-4 mr-2" />
                    Like
                  </Button>
                  <Button variant="outline" size="sm" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <Card className="mt-12 bg-gaming-gray border-gaming-light neon-glow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-gaming font-bold text-white mb-2">{post.author}</h4>
                    <p className="text-gray-400 mb-4">
                      Gaming enthusiast and content creator with over 5 years of experience in the industry. 
                      Passionate about sharing the latest gaming insights and helping fellow gamers discover amazing experiences.
                    </p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                        Follow
                      </Button>
                      <Button variant="outline" size="sm" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
                        More Posts
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Related Posts */}
              <Card className="bg-gaming-gray border-gaming-light">
                <CardContent className="p-6">
                  <h3 className="text-xl font-gaming font-bold text-neon-purple mb-6">Related Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost, index) => (
                      <div key={relatedPost.id}>
                        <Link 
                          to={`/post/${relatedPost.id}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-semibold text-white group-hover:text-neon-blue transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-400 mt-1">{relatedPost.date}</p>
                        </Link>
                        {index < relatedPosts.length - 1 && (
                          <Separator className="mt-4 bg-gaming-light" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 border-neon-purple/50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-gaming font-bold text-white mb-2">Stay Updated</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Get the latest gaming news and reviews delivered to your inbox.
                  </p>
                  <Button className="w-full bg-neon-purple hover:bg-neon-purple/90">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* More Posts Section */}
        <section className="mt-16 pt-16 border-t border-gaming-light">
          <h2 className="text-3xl font-gaming font-bold gradient-text mb-8">More Posts You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <GameCard key={relatedPost.id} {...relatedPost} />
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default Post;
