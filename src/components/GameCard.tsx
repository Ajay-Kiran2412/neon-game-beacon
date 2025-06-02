
import { Link } from 'react-router-dom';
import { Calendar, User, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GameCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

const GameCard = ({ 
  id, 
  title, 
  excerpt, 
  image, 
  author, 
  date, 
  category, 
  readTime, 
  featured = false 
}: GameCardProps) => {
  return (
    <Card className={`bg-gaming-gray border-gaming-light hover:border-neon-purple/50 transition-all duration-300 group neon-glow ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${featured ? 'h-64 md:h-80' : 'h-48'}`}
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-neon-purple/90 text-white hover:bg-neon-purple">
              {category}
            </Badge>
          </div>
          {featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-neon-red/90 text-white animate-pulse-neon">
                Featured
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <Link to={`/post/${id}`}>
          <h3 className={`font-gaming font-bold text-white hover:text-neon-purple transition-colors cursor-pointer ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {title}
          </h3>
        </Link>
        
        <p className={`text-gray-400 leading-relaxed ${featured ? 'text-base md:text-lg' : 'text-sm'}`}>
          {excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Tag className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
