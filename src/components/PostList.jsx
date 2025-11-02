import { Calendar, Tag, User } from 'lucide-react';

const samplePosts = [
  {
    id: '1',
    title: 'Design systems that scale: principles and practices',
    excerpt:
      'A practical guide to building and maintaining a design system that grows with your product and team.',
    author: 'Ava Thompson',
    date: 'Oct 30, 2025',
    tags: ['Design', 'UI'],
    image:
      'https://images.unsplash.com/photo-1559027615-5f05eb5f3cae?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Boost developer productivity with small daily habits',
    excerpt:
      'Tiny, consistent improvements compound over time. Here are seven habits that transformed my workflow.',
    author: 'Leo Martinez',
    date: 'Oct 28, 2025',
    tags: ['Productivity', 'Dev'],
    image:
      'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'From idea to launch: shipping your side project',
    excerpt:
      'Validation, scope, and momentum — a simple playbook for turning ideas into polished, released products.',
    author: 'Mina Park',
    date: 'Oct 24, 2025',
    tags: ['Startups', 'How-to'],
    image:
      'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1200&auto=format&fit=crop',
  },
];

function TagPill({ label }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 px-2 py-1 text-xs border border-slate-200">
      <Tag size={12} /> {label}
    </span>
  );
}

function PostCard({ post }) {
  return (
    <article className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((t) => (
            <TagPill key={t} label={t} />
          ))}
        </div>
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700">
          <a href={`#/post/${post.id}`}>{post.title}</a>
        </h3>
        <p className="mt-2 text-slate-600 line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <span className="inline-flex items-center gap-2">
            <User size={16} /> {post.author}
          </span>
          <span className="inline-flex items-center gap-2">
            <Calendar size={16} /> {post.date}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function PostList() {
  return (
    <section id="posts" className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Latest Articles</h2>
          <p className="text-slate-600">Curated posts from creators you follow</p>
        </div>
        <a href="#" className="text-slate-900 hover:underline">View all</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {samplePosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
