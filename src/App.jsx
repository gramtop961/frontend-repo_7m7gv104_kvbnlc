import Header from './components/Header';
import Hero from './components/Hero';
import PostList from './components/PostList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <PostList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
