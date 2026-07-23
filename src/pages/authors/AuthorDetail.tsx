import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Mail, Linkedin, Twitter, Github, Calendar, MapPin, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  email: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  location: string;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  skills: string[];
  articles: Array<{
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
  }>;
}

const authors: Record<string, Author> = {
  'john-doe': {
    id: 'john-doe',
    name: 'John Doe',
    role: 'Senior Full-Stack Developer',
    bio: 'John is a passionate full-stack developer with over 8 years of experience building scalable web applications. He specializes in React, Node.js, and cloud architecture. When not coding, he contributes to open-source projects and mentors junior developers.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    email: 'john@nexagrowth.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    github: 'https://github.com/johndoe',
    location: 'San Francisco, CA',
    experience: [
      {
        title: 'Senior Full-Stack Developer',
        company: 'Nexa Growth',
        period: '2021 - Present',
        description: 'Leading development of enterprise web applications and mentoring team members.'
      },
      {
        title: 'Full-Stack Developer',
        company: 'Tech Startup Inc',
        period: '2018 - 2021',
        description: 'Built and maintained multiple SaaS products using React and Node.js.'
      },
      {
        title: 'Junior Developer',
        company: 'Digital Agency',
        period: '2016 - 2018',
        description: 'Developed responsive websites and web applications for various clients.'
      }
    ],
    education: [
      {
        degree: 'B.S. Computer Science',
        institution: 'University of California',
        year: '2016'
      }
    ],
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'GraphQL', 'Docker'],
    articles: [
      {
        id: '1',
        title: 'Building Scalable React Applications',
        excerpt: 'Learn best practices for building scalable React applications with proper architecture and performance optimization.',
        date: '2024-01-15',
        category: 'Web Development'
      },
      {
        id: '2',
        title: 'Modern TypeScript Patterns',
        excerpt: 'Explore advanced TypeScript patterns and techniques for writing type-safe code.',
        date: '2024-02-20',
        category: 'Programming'
      },
      {
        id: '3',
        title: 'Cloud Architecture Best Practices',
        excerpt: 'A comprehensive guide to designing and implementing cloud-native applications.',
        date: '2024-03-10',
        category: 'Cloud'
      }
    ]
  },
  'jane-smith': {
    id: 'jane-smith',
    name: 'Jane Smith',
    role: 'Digital Marketing Strategist',
    bio: 'Jane is a digital marketing expert with a passion for data-driven growth strategies. She has helped numerous businesses scale their online presence through innovative SEO, content marketing, and paid advertising campaigns.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    email: 'jane@nexagrowth.com',
    linkedin: 'https://linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
    location: 'New York, NY',
    experience: [
      {
        title: 'Digital Marketing Lead',
        company: 'Nexa Growth',
        period: '2020 - Present',
        description: 'Developing and executing comprehensive digital marketing strategies for clients.'
      },
      {
        title: 'SEO Specialist',
        company: 'Marketing Agency',
        period: '2017 - 2020',
        description: 'Improved organic search rankings for clients through technical SEO and content optimization.'
      }
    ],
    education: [
      {
        degree: 'MBA Marketing',
        institution: 'New York University',
        year: '2017'
      },
      {
        degree: 'B.A. Business Administration',
        institution: 'Boston University',
        year: '2015'
      }
    ],
    skills: ['SEO', 'SEM', 'Content Marketing', 'Analytics', 'Social Media', 'Email Marketing', 'Google Ads', 'Facebook Ads'],
    articles: [
      {
        id: '4',
        title: 'SEO Trends for 2024',
        excerpt: 'Stay ahead of the competition with these emerging SEO trends and strategies.',
        date: '2024-01-20',
        category: 'SEO'
      },
      {
        id: '5',
        title: 'Content Marketing ROI',
        excerpt: 'How to measure and maximize the return on investment for your content marketing efforts.',
        date: '2024-02-15',
        category: 'Marketing'
      }
    ]
  }
};

const AuthorDetail = () => {
  const { authorId } = useParams<{ authorId: string }>();
  const author = authorId ? authors[authorId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = author ? `${author.name} | Nexa Growth` : 'Author | Nexa Growth';
  }, [author]);

  if (!author) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">Author Not Found</h1>
            <Link to="/blog" className="text-primary hover:underline">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Authors', path: '/authors' },
    { name: author.name, path: `/authors/${author.id}` }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-20 container mx-auto px-4 sm:px-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Author Header */}
            <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-primary/20"
                />
                <div className="flex-1">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">{author.name}</h1>
                  <p className="text-xl text-primary mb-4">{author.role}</p>
                  <p className="text-muted-foreground mb-6">{author.bio}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {author.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      {author.email}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {author.linkedin && (
                      <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </a>
                    )}
                    {author.twitter && (
                      <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                        <Twitter className="w-5 h-5 text-primary" />
                      </a>
                    )}
                    {author.github && (
                      <a href={author.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                        <Github className="w-5 h-5 text-primary" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Skills & Expertise
              </h2>
              <div className="flex flex-wrap gap-3">
                {author.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Experience
              </h2>
              <div className="space-y-6">
                {author.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-primary mb-2">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            {author.education.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education
                </h2>
                <div className="space-y-4">
                  {author.education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Published Articles */}
            <div className="bg-card border border-border rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Published Articles
              </h2>
              <div className="space-y-4">
                {author.articles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/blog/${article.id}`}
                    className="block p-6 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">{article.category}</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AuthorDetail;
