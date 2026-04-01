
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, Bath, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';

function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/projects/${project.id}`}>
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <img 
              src={project.images[0]} 
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-semibold" style={{fontFamily: 'Open Sans, sans-serif'}}>
              {project.status}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#0B1F3B] mb-2 group-hover:text-[#D4AF37] transition-colors duration-200" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.01em'}}>
              {project.name}
            </h3>
            
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <MapPin className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>
                {project.location}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
              {project.shortDescription}
            </p>

            {/* Features */}
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Maximize className="h-4 w-4 text-[#D4AF37]" />
                <span style={{fontFamily: 'Open Sans, sans-serif'}}>{project.area}</span>
              </div>
              <div className="flex items-center gap-1">
                <Home className="h-4 w-4 text-[#D4AF37]" />
                <span style={{fontFamily: 'Open Sans, sans-serif'}}>{project.bedrooms} PN</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4 text-[#D4AF37]" />
                <span style={{fontFamily: 'Open Sans, sans-serif'}}>{project.bathrooms} WC</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-2xl font-bold text-[#D4AF37]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                {project.price}
              </span>
              <span className="text-sm text-[#0B1F3B] font-medium group-hover:text-[#D4AF37] transition-colors duration-200" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Xem chi tiết →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
