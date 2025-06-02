
import { Link } from 'react-router-dom';
import { TrendingUp, Calendar, Users, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameCard from '@/components/GameCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts, getFeaturedPosts, getRecentPosts } from '@/data/blogPosts';

const Index = () => {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(4);
  const trendingGames = ['Cyberpunk 2077', 'Elden Ring', 'Baldur\'s Gate 3', 'Diablo 4'];
  const categories = ['Reviews', 'Guides', 'News', 'Esports'];

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-blue/20 to-neon-red/20 animate-pulse"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-gaming font-bold mb-6">
            <span className="gradient-text animate-pulse-neon">GameVault</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your ultimate destination for gaming reviews, walkthroughs, news, and esports commentary
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-neon-purple hover:bg-neon-purple/90 text-white font-gaming">
              <Link to="/blog">Explore Reviews</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 font-gaming">
              <Link to="/about">About GameVault</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 border-y border-gaming-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Star, label: 'Reviews Published', value: '150+' },
              { icon: Users, label: 'Community Members', value: '25K+' },
              { icon: TrendingUp, label: 'Monthly Readers', value: '100K+' },
              { icon: Calendar, label: 'Years Experience', value: '5+' }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="h-8 w-8 text-neon-purple mx-auto" />
                <div className="text-2xl font-gaming font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Posts Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-gaming font-bold gradient-text">Featured Posts</h2>
            <Link to="/blog">
              <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                View All Posts
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.slice(0, 1).map((post) => (
              <GameCard key={post.id} {...post} featured />
            ))}
            <div className="md:col-span-1 space-y-6">
              {recentPosts.slice(0, 2).map((post) => (
                <GameCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* Trending Games Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-gaming font-bold gradient-text mb-8">Trending Games</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trendingGames.map((game, index) => (
              <Card key={index} className="bg-gaming-gray border-gaming-light hover:border-neon-blue/50 transition-all duration-300 neon-glow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-gaming font-bold text-neon-blue mb-2">#{index + 1}</div>
                  <div className="text-white font-medium">{game}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-gaming font-bold gradient-text mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to="/blog">
                <Card className="bg-gaming-gray border-gaming-light hover:border-neon-purple/50 transition-all duration-300 neon-glow group">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-gaming font-bold text-white group-hover:text-neon-purple transition-colors">
                      {category}
                    </h3>
                    <p className="text-gray-400 mt-2">
                      {Math.floor(Math.random() * 20) + 5} articles
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Posts Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-gaming font-bold gradient-text">Latest Posts</h2>
            <Link to="/blog">
              <Button variant="outline" className="border-neon-red text-neon-red hover:bg-neon-red/10">
                View All
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.slice(0, 6).map((post) => (
              <GameCard key={post.id} {...post} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
