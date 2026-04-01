import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import NewsCard from '@/components/NewsCard.jsx';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { newsArticles } from '@/data/news.js';

function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Tin tức Bất Động Sản Đà Nẵng | ApartmentDN</title>
        <meta name="description" content="Cập nhật tin tức bất động sản Đà Nẵng mới nhất, xu hướng thị trường, phân tích đầu tư và dự án nổi bật." />
        <meta name="keywords" content="tin tức bất động sản, Đà Nẵng, thị trường nhà đất, đầu tư căn hộ" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Header */}
        <section className="relative py-20 bg-gradient-to-br from-[#0B1F3B] to-[#1a3a5c] text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tin tức <span className="text-[#D4AF37]">bất động sản</span>
            </h1>
            <p className="text-lg text-white/90">
              Cập nhật xu hướng, phân tích thị trường và cơ hội đầu tư tại Đà Nẵng
            </p>
          </motion.div>
        </section>

        {/* Search */}
        <section className="py-6 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Tìm bài viết..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
              Tìm thấy <span className="text-[#D4AF37] font-semibold">{filteredNews.length}</span> bài viết
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((article, index) => (
                  <NewsCard key={article.id} article={article} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-semibold mb-2">
                  Không tìm thấy bài viết
                </h3>
                <p className="text-gray-500 mb-4">
                  Thử từ khóa khác nhé
                </p>
                <Button onClick={() => setSearchTerm('')}>
                  Xóa tìm kiếm
                </Button>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default NewsPage;