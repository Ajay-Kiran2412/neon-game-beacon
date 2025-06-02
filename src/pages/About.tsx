
import { User, Target, Award, Gamepad2, Coffee, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const achievements = [
    { icon: Award, title: 'Top Gaming Blogger 2023', desc: 'Recognized by Gaming Weekly' },
    { icon: Gamepad2, title: '500+ Games Reviewed', desc: 'Comprehensive game coverage' },
    { icon: Coffee, title: '5 Years Experience', desc: 'Professional gaming journalism' },
    { icon: Zap, title: '1M+ Words Written', desc: 'Extensive gaming content' }
  ];

  const stats = [
    { label: 'Games Completed', value: '300+' },
    { label: 'Reviews Published', value: '150+' },
    { label: 'Guides Created', value: '75+' },
    { label: 'Streaming Hours', value: '1000+' }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-red rounded-full flex items-center justify-center mx-auto neon-glow">
              <User className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-gaming font-bold gradient-text mb-6">
            About GameVault
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to GameVault, where passion meets expertise. I'm Alex Chen, a dedicated gaming enthusiast 
            and content creator with over 5 years of experience in the gaming industry.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        {/* Mission Section */}
        <section className="mb-16">
          <Card className="bg-gaming-gray border-gaming-light neon-glow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-neon-purple mr-4" />
                <h2 className="text-3xl font-gaming font-bold gradient-text">Our Mission</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-gaming font-bold text-neon-blue mb-4">What We Do</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    GameVault is your trusted source for honest game reviews, comprehensive walkthroughs, 
                    breaking gaming news, and insightful esports commentary. We're dedicated to helping 
                    gamers make informed decisions and enhance their gaming experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-neon-purple/20 text-neon-purple">Reviews</Badge>
                    <Badge className="bg-neon-blue/20 text-neon-blue">Guides</Badge>
                    <Badge className="bg-neon-red/20 text-neon-red">News</Badge>
                    <Badge className="bg-neon-green/20 text-neon-green">Esports</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-gaming font-bold text-neon-blue mb-4">Why GameVault?</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-neon-purple mr-3" />
                      Unbiased, honest reviews
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-neon-blue mr-3" />
                      In-depth game analysis
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-neon-red mr-3" />
                      Up-to-date gaming news
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-neon-green mr-3" />
                      Community-focused content
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-gaming font-bold gradient-text text-center mb-8">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gaming-gray border-gaming-light text-center neon-glow">
                <CardContent className="p-6">
                  <div className="text-3xl font-gaming font-bold text-neon-purple mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-gaming font-bold gradient-text text-center mb-8">
            Achievements & Recognition
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gaming-gray border-gaming-light neon-glow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <achievement.icon className="h-8 w-8 text-neon-purple flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-gaming font-bold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400">{achievement.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-gaming-gray to-gaming-light border-neon-blue/50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-gaming font-bold gradient-text mb-6 text-center">
                My Gaming Journey
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed">
                <p>
                  My love for gaming started at age 8 with a hand-me-down Nintendo Entertainment System. 
                  From those first moments exploring the Mushroom Kingdom in Super Mario Bros., 
                  I knew gaming would be a lifelong passion.
                </p>
                <p>
                  Over the years, I've experienced the evolution of gaming firsthand - from 8-bit classics 
                  to today's photorealistic masterpieces. I've witnessed the rise of online gaming, 
                  the birth of esports, and the indie game revolution.
                </p>
                <p>
                  What drives me is the desire to share this passion with fellow gamers. Whether you're 
                  a casual player looking for your next favorite game or a hardcore enthusiast seeking 
                  in-depth analysis, GameVault is here to guide your gaming journey.
                </p>
                <p className="text-neon-blue font-semibold">
                  "Gaming isn't just entertainment - it's art, storytelling, and human connection 
                  all rolled into one interactive experience."
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gaming Setup Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-gaming font-bold gradient-text text-center mb-8">
            My Gaming Arsenal
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gaming-gray border-gaming-light neon-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-neon-purple mb-4">PC Setup</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Intel i9-13900K</li>
                  <li>• NVIDIA RTX 4080</li>
                  <li>• 32GB DDR5 RAM</li>
                  <li>• 2TB NVMe SSD</li>
                  <li>• 4K 144Hz Monitor</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gaming-gray border-gaming-light neon-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-neon-blue mb-4">Consoles</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• PlayStation 5</li>
                  <li>• Xbox Series X</li>
                  <li>• Nintendo Switch OLED</li>
                  <li>• Steam Deck</li>
                  <li>• Retro Collection</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gaming-gray border-gaming-light neon-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-neon-red mb-4">Peripherals</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Mechanical Keyboard</li>
                  <li>• Gaming Mouse</li>
                  <li>• Wireless Headset</li>
                  <li>• Streaming Setup</li>
                  <li>• RGB Everything</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-neon-purple/20 via-neon-blue/20 to-neon-red/20 border-neon-purple/50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-gaming font-bold gradient-text mb-4">
                Let's Connect
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Have a game recommendation? Want to collaborate? Or just want to chat about gaming? 
                I'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-neon-purple hover:bg-neon-purple/90 text-white px-8 py-3 rounded-lg font-gaming font-bold transition-colors"
                >
                  Get in Touch
                </a>
                <a 
                  href="/blog" 
                  className="border border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-8 py-3 rounded-lg font-gaming font-bold transition-colors"
                >
                  Read My Reviews
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
