
import { useState } from 'react';
import { Mail, MessageSquare, Send, Twitter, Youtube, Twitch, Discord } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      platform: 'Twitter',
      icon: Twitter,
      handle: '@GameVaultBlog',
      url: '#',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20'
    },
    {
      platform: 'YouTube',
      icon: Youtube,
      handle: 'GameVault Reviews',
      url: '#',
      color: 'text-red-500',
      bgColor: 'bg-red-500/20'
    },
    {
      platform: 'Twitch',
      icon: Twitch,
      handle: 'GameVaultLive',
      url: '#',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/20'
    },
    {
      platform: 'Discord',
      icon: Discord,
      handle: 'GameVault Community',
      url: '#',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-400/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-gaming font-bold gradient-text mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question, suggestion, or just want to chat about games? 
            I'd love to hear from you!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gaming-gray border-gaming-light neon-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-gaming font-bold gradient-text flex items-center">
                  <MessageSquare className="h-6 w-6 mr-3" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gaming-dark border-gaming-light text-white placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gaming-dark border-gaming-light text-white placeholder-gray-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-gaming-dark border-gaming-light text-white placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-gaming-dark border-gaming-light text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me what's on your mind..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-neon-purple hover:bg-neon-purple/90 text-white font-gaming"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="bg-gaming-gray border-gaming-light neon-glow">
              <CardHeader>
                <CardTitle className="text-xl font-gaming font-bold gradient-text flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Email</h4>
                  <p className="text-gray-400">hello@gamevault.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Response Time</h4>
                  <p className="text-gray-400">Usually within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Best For</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Game review requests</li>
                    <li>• Collaboration opportunities</li>
                    <li>• Press inquiries</li>
                    <li>• General questions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gaming-gray border-gaming-light neon-glow">
              <CardHeader>
                <CardTitle className="text-xl font-gaming font-bold gradient-text">
                  Follow the Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center p-3 rounded-lg ${social.bgColor} hover:scale-105 transition-transform duration-200 group`}
                  >
                    <social.icon className={`h-6 w-6 ${social.color} mr-3`} />
                    <div>
                      <div className="font-semibold text-white group-hover:text-gray-200">
                        {social.platform}
                      </div>
                      <div className="text-sm text-gray-400">
                        {social.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-gaming-gray border-gaming-light neon-glow">
              <CardHeader>
                <CardTitle className="text-xl font-gaming font-bold gradient-text">
                  Quick Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Do you review indie games?</h4>
                  <p className="text-gray-400 text-sm">Absolutely! I love discovering hidden gems.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Can I suggest a game?</h4>
                  <p className="text-gray-400 text-sm">Yes! Send me your recommendations.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Do you accept press copies?</h4>
                  <p className="text-gray-400 text-sm">I consider press copies for honest reviews.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
