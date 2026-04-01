import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import NewsCard from '@/components/NewsCard.jsx';
import { Button } from '@/components/ui/button';
import { newsArticles } from '@/data/news.js';

function NewsDetailPage() {
  const { newsId } = useParams();
  const article = newsArticles.find(n => n.id === newsId);

  if (!article) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Không tìm thấy bài viết
            </h2>
            <Button asChild>
              <Link to="/news">Quay lại trang tin tức</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

let relatedNews = newsArticles.filter(
  n => n.id !== article.id && n.category === article.category
);

// Nếu chưa đủ 3 → lấy thêm bài khác
if (relatedNews.length < 3) {
  const moreNews = newsArticles.filter(
    n => n.id !== article.id && !relatedNews.includes(n)
  );

  relatedNews = [...relatedNews, ...moreNews];
}

// Luôn đúng 3 bài
relatedNews = relatedNews.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{article.title} | ApartmentDN</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={`${article.title}, bất động sản Đà Nẵng`} />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#D4AF37]">
              Trang chủ
            </Link>
            <span className="mx-2">/</span>
            <Link to="/news" className="text-gray-500 hover:text-[#D4AF37]">
              Tin tức
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B1F3B] font-medium">
              {article.title}
            </span>
          </div>
        </div>

        {/* Back */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Button asChild variant="ghost">
            <Link to="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại
            </Link>
          </Button>
        </div>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main */}
            <div className="lg:col-span-2 space-y-6">

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {article.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Admin
                  </span>
                </div>

                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose max-w-none"
              >
                <p>{article.description}</p>

                {/* nếu có content html */}
                {article.content && (
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                )}
              </motion.div>

            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-6">

                {/* Contact */}
                <div className="bg-white p-6 rounded-2xl shadow">
                  <h3 className="font-bold mb-3">Đăng ký tư vấn</h3>
                  <ContactForm />
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Related */}
        {relatedNews.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Bài viết liên quan
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedNews.map((item, index) => (
                  <NewsCard key={item.id} article={item} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
}

export default NewsDetailPage;