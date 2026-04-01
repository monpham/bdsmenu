
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { projects } from '@/data/projects.js';

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

  const locations = ['all', ...new Set(projects.map(p => p.location))];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'all' || project.location === locationFilter;
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'under-10' && project.priceNumber < 10000000000) ||
                        (priceFilter === '10-15' && project.priceNumber >= 10000000000 && project.priceNumber < 15000000000) ||
                        (priceFilter === 'over-15' && project.priceNumber >= 15000000000);
    
    return matchesSearch && matchesLocation && matchesPrice;
  });

  return (
    <>
      <Helmet>
        <title>Dự Án Căn Hộ Cao Cấp Đà Nẵng | ApartmentDN</title>
        <meta name="description" content="Khám phá các dự án căn hộ cao cấp tại Đà Nẵng. Vị trí đắc địa, thiết kế hiện đại, giá cạnh tranh. Tư vấn miễn phí 24/7." />
        <meta name="keywords" content="dự án căn hộ Đà Nẵng, căn hộ cao cấp, bất động sản Đà Nẵng, mua căn hộ Đà Nẵng" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Page Header */}
        <section className="relative py-20 bg-gradient-to-br from-[#0B1F3B] to-[#1a3a5c] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                Dự án <span className="text-[#D4AF37]">căn hộ cao cấp</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Khám phá các dự án bất động sản cao cấp tại những vị trí đắc địa nhất Đà Nẵng
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm theo tên hoặc địa điểm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37] text-gray-900 placeholder:text-gray-400"
                  style={{fontFamily: 'Open Sans, sans-serif'}}
                />
              </div>

              {/* Location Filter */}
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full md:w-[200px] border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  <SelectValue placeholder="Khu vực" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả khu vực</SelectItem>
                  {locations.filter(loc => loc !== 'all').map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Price Filter */}
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-full md:w-[200px] border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  <SelectValue placeholder="Mức giá" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả mức giá</SelectItem>
                  <SelectItem value="under-10">Dưới 10 tỷ</SelectItem>
                  <SelectItem value="10-15">10 - 15 tỷ</SelectItem>
                  <SelectItem value="over-15">Trên 15 tỷ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Tìm thấy <span className="font-semibold text-[#D4AF37]">{filteredProjects.length}</span> dự án
              </p>
              {(searchTerm || locationFilter !== 'all' || priceFilter !== 'all') && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm('');
                    setLocationFilter('all');
                    setPriceFilter('all');
                  }}
                  className="text-[#D4AF37] hover:text-[#C19B2F]"
                  style={{fontFamily: 'Open Sans, sans-serif'}}
                >
                  Xóa bộ lọc
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <SlidersHorizontal className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Không tìm thấy dự án phù hợp
                </h3>
                <p className="text-gray-500 mb-6" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  Thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setLocationFilter('all');
                    setPriceFilter('all');
                  }}
                  className="bg-[#D4AF37] hover:bg-[#C19B2F] text-white"
                  style={{fontFamily: 'Open Sans, sans-serif'}}
                >
                  Xóa bộ lọc
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

export default ProjectsPage;
