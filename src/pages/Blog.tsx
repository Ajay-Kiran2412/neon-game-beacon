
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameCard from '@/components/GameCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const categories = ['all', 'review', 'guide', 'news', 'esports', 'development', 'hardware'];

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                            post.category.toLowerCase() === selectedCategory;
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 border-b border-gaming-light">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-gaming font-bold gradient-text mb-4">
            Gaming Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the latest reviews, guides, news, and insights from the gaming world
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters Section */}
        <div className="mb-12 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gaming-gray border-gaming-light text-white placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48 bg-gaming-gray border-gaming-light text-white">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-light">
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="text-white hover:bg-gaming-light">
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48 bg-gaming-gray border-gaming-light text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray border-gaming-light">
                <SelectItem value="date" className="text-white hover:bg-gaming-light">Newest First</SelectItem>
                <SelectItem value="title" className="text-white hover:bg-gaming-light">A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-sm text-gray-400">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <GameCard key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-2xl font-gaming font-bold text-white mb-2">No posts found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or filters
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-neon-purple hover:bg-neon-purple/90"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More Button (placeholder for pagination) */}
        {filteredPosts.length > 9 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10"
            >
              Load More Posts
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
