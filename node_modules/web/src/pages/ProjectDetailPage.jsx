
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Home, Bath, Maximize, Calendar, CheckCircle2, ArrowLeft, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects } from '@/data/projects.js';

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Không tìm thấy dự án
            </h2>
            <Button asChild className="bg-[#D4AF37] hover:bg-[#C19B2F] text-white" style={{fontFamily: 'Open Sans, sans-serif'}}>
              <Link to="/projects">Quay lại danh sách dự án</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${project.name} - ${project.location} | ApartmentDN`}</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={`${project.name}, căn hộ cao cấp Đà Nẵng, ${project.location}`} />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>
              <Link to="/" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-200">
                Trang chủ
              </Link>
              <span className="text-gray-400">/</span>
              <Link to="/projects" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-200">
                Dự án
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-[#0B1F3B] font-medium">{project.name}</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button asChild variant="ghost" className="text-[#0B1F3B] hover:text-[#D4AF37]" style={{fontFamily: 'Open Sans, sans-serif'}}>
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại danh sách dự án
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#0B1F3B] mb-3 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                  {project.name}
                </h1>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-5 w-5 text-[#D4AF37]" />
                  <span className="text-lg" style={{fontFamily: 'Open Sans, sans-serif'}}>
                    {project.location}
                  </span>
                </div>
                <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-semibold" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  {project.status}
                </div>
              </div>
              <div className="text-left lg:text-right">
                <div className="text-sm text-gray-600 mb-1" style={{fontFamily: 'Open Sans, sans-serif'}}>Giá từ</div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {project.price}
                </div>
                <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#C19B2F] text-white font-semibold transition-all duration-200 active:scale-[0.98]" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  <a href="tel:+84905123456">
                    <Phone className="h-5 w-5 mr-2" />
                    Liên hệ ngay
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <Maximize className="h-6 w-6 text-[#D4AF37] mb-2" />
                <div className="text-sm text-gray-600 mb-1" style={{fontFamily: 'Open Sans, sans-serif'}}>Diện tích</div>
                <div className="text-xl font-bold text-[#0B1F3B]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {project.area}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <Home className="h-6 w-6 text-[#D4AF37] mb-2" />
                <div className="text-sm text-gray-600 mb-1" style={{fontFamily: 'Open Sans, sans-serif'}}>Phòng ngủ</div>
                <div className="text-xl font-bold text-[#0B1F3B]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {project.bedrooms} phòng
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <Bath className="h-6 w-6 text-[#D4AF37] mb-2" />
                <div className="text-sm text-gray-600 mb-1" style={{fontFamily: 'Open Sans, sans-serif'}}>Phòng tắm</div>
                <div className="text-xl font-bold text-[#0B1F3B]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {project.bathrooms} phòng
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <Calendar className="h-6 w-6 text-[#D4AF37] mb-2" />
                <div className="text-sm text-gray-600 mb-1" style={{fontFamily: 'Open Sans, sans-serif'}}>Bàn giao</div>
                <div className="text-xl font-bold text-[#0B1F3B]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {project.completionDate}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Image Gallery */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue="images" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="images" style={{fontFamily: 'Open Sans, sans-serif'}}>Hình ảnh dự án</TabsTrigger>
                <TabsTrigger value="floorplans" style={{fontFamily: 'Open Sans, sans-serif'}}>Mặt bằng</TabsTrigger>
              </TabsList>

              <TabsContent value="images">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={project.images[selectedImage]} 
                      alt={`${project.name} - View ${selectedImage + 1}`}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                          <button
                            onClick={() => setSelectedImage(index)}
                            className={`relative rounded-xl overflow-hidden transition-all duration-200 ${
                              selectedImage === index ? 'ring-4 ring-[#D4AF37]' : 'opacity-70 hover:opacity-100'
                            }`}
                          >
                            <img 
                              src={image} 
                              alt={`${project.name} thumbnail ${index + 1}`}
                              className="w-full h-24 object-cover"
                            />
                          </button>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </TabsContent>

              <TabsContent value="floorplans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.floorPlans.map((plan, index) => (
                    <div key={index} className="rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={plan} 
                        alt={`${project.name} floor plan ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </section>

        {/* Project Details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Mô tả dự án
                </h2>
                <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  {project.description}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-[#0B1F3B] mb-6" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Tiện ích nổi bật
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                      <span className="text-gray-700" style={{fontFamily: 'Open Sans, sans-serif'}}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Payment Terms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Phương thức thanh toán
                </h2>
                <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  {project.paymentTerms}
                </p>
              </motion.div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24"
              >
                <h3 className="text-xl font-bold text-[#0B1F3B] mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Đăng ký tư vấn
                </h3>
                <p className="text-sm text-gray-600 mb-6" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  Để lại thông tin, chúng tôi sẽ liên hệ tư vấn chi tiết về dự án này
                </p>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B] mb-4 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                  Dự án <span className="text-[#D4AF37]">liên quan</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  Khám phá thêm các dự án căn hộ cao cấp khác
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject, index) => (
                  <ProjectCard key={relatedProject.id} project={relatedProject} index={index} />
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

export default ProjectDetailPage;
