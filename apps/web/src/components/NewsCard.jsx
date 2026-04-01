import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NewsCard({ article, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/news/${article.id}`}>
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
          
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <p className="text-sm text-[#D4AF37] mb-2">
              {article.category}
            </p>

            <h3 className="text-lg font-bold text-[#0B1F3B] mb-2 group-hover:text-[#D4AF37] transition-colors duration-200 line-clamp-2">
              {article.title}
            </h3>

            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
              {article.description}
            </p>

            {/* CTA */}
            <span className="text-sm font-medium text-[#0B1F3B] group-hover:text-[#D4AF37] transition-colors duration-200">
              Đọc tiếp →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default NewsCard;