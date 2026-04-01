
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Building2, TrendingUp, CheckCircle2, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import NewsCard from '@/components/NewsCard.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects.js';
import { newsArticles } from '@/data/news.js';

function HomePage() {
  const featuredProjects = projects.slice(0, 4);
  const latestNews = newsArticles.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>ApartmentDN - Căn Hộ Cao Cấp Đà Nẵng | Mua Bán BĐS Chuyên Nghiệp</title>
        <meta name="description" content="ApartmentDN chuyên mua bán căn hộ cao cấp tại Đà Nẵng với hơn 8 năm kinh nghiệm. Tư vấn bất động sản chuyên nghiệp, dự án uy tín, giá tốt nhất thị trường." />
        <meta name="keywords" content="căn hộ cao cấp Đà Nẵng, mua bán căn hộ Đà Nẵng, bất động sản cao cấp Đà Nẵng, ApartmentDN" />
        <meta property="og:title" content="ApartmentDN - Căn Hộ Cao Cấp Đà Nẵng" />
        <meta property="og:description" content="Chuyên mua bán căn hộ cao cấp tại Đà Nẵng với hơn 8 năm kinh nghiệm" />
        <html lang="vi" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/86d8422a-93e6-4f60-849e-fd9aa087ef95/anh-1-2-1762521732-5911-1762522001-fiZms.webp" 
              alt="Luxury apartment in Da Nang with ocean view" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3B]/90 via-[#0B1F3B]/70 to-[#0B1F3B]/50" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em', textShadow: '0 2px 10px rgba(0,0,0,0.3)'}}>
                ApartmentDN – Căn Hộ Cao Cấp<br />
                <span className="text-[#D4AF37]">Đà Nẵng</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Chuyên mua bán bất động sản căn hộ cao cấp tại Đà Nẵng - Miền Trung với hơn 8 năm kinh nghiệm. 
Nền tảng chuyên giao dịch và cập nhật thông tin các dự án căn hộ cao cấp Đà Nẵng, Miền Trung đồng thời cung cấp tin tức thị trường nổi bật và các phân tích chuyên sâu
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#C19B2F] text-white font-semibold px-8 py-6 text-base transition-all duration-200 active:scale-[0.98]" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  <Link to="/projects">
                    Xem dự án
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0B1F3B] font-semibold px-8 py-6 text-base transition-all duration-200 active:scale-[0.98]" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  <Link to="/contact">
                    Liên hệ tư vấn
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B] mb-6 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                  Về <span className="text-[#D4AF37]">ApartmentDN</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  Với hơn 8 năm kinh nghiệm trong lĩnh vực bất động sản cao cấp tại Đà Nẵng và Miền Trung. 
ApartmentDN tự hào là đối tác tin cậy của hàng nghìn khách hàng trong việc tìm kiếm và sở hữu căn hộ mơ ước.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  Chúng tôi cam kết mang đến dịch vụ tư vấn chuyên nghiệp, minh bạch và 
                  đồng hành cùng khách hàng trong suốt quá trình mua bán bất động sản.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Award className="h-8 w-8 text-[#D4AF37] flex-shrink-0" />
                    <div>
                      <div className="text-2xl font-bold text-[#0B1F3B]" style={{fontFamily: 'Montserrat, sans-serif'}}>8+</div>
                      <div className="text-sm text-gray-600" style={{fontFamily: 'Open Sans, sans-serif'}}>Năm kinh nghiệm</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-8 w-8 text-[#D4AF37] flex-shrink-0" />
                    <div>
                      <div className="text-2xl font-bold text-[#0B1F3B]" style={{fontFamily: 'Montserrat, sans-serif'}}>2,847</div>
                      <div className="text-sm text-gray-600" style={{fontFamily: 'Open Sans, sans-serif'}}>Khách hàng hài lòng</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="h-8 w-8 text-[#D4AF37] flex-shrink-0" />
                    <div>
                      <div className="text-2xl font-bold text-[#0B1F3B]" style={{fontFamily: 'Montserrat, sans-serif'}}>127</div>
                      <div className="text-sm text-gray-600" style={{fontFamily: 'Open Sans, sans-serif'}}>Dự án hoàn thành</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-8 w-8 text-[#D4AF37] flex-shrink-0" />
                    <div>
                      <div className="text-2xl font-bold text-[#0B1F3B]" style={{fontFamily: 'Montserrat, sans-serif'}}>97.2%</div>
                      <div className="text-sm text-gray-600" style={{fontFamily: 'Open Sans, sans-serif'}}>Tỷ lệ thành công</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex justify-center"
              >
                <div className="w-full sm:w-80 md:w-[425px] h-auto sm:h-96 md:h-[800px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <img 
                    src="https://horizons-cdn.hostinger.com/86d8422a-93e6-4f60-849e-fd9aa087ef95/apartment-dn-logo-vTzGE.png" 
                    alt="ApartmentDN brand logo and identity"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] text-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold" style={{fontFamily: 'Montserrat, sans-serif'}}>8+</div>
                  <div className="text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>Năm kinh nghiệm</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B] mb-4 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                Dự án <span className="text-[#D4AF37]">nổi bật</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Khám phá các dự án căn hộ cao cấp được lựa chọn kỹ lưỡng tại những vị trí đắc địa nhất Đà Nẵng
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white font-semibold px-8 py-6 text-base transition-all duration-200 active:scale-[0.98]" style={{fontFamily: 'Open Sans, sans-serif'}}>
                <Link to="/projects">
                  Xem tất cả dự án
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-[#0B1F3B] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                Tại sao chọn <span className="text-[#D4AF37]">ApartmentDN</span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Chúng tôi mang đến giá trị vượt trội cho mọi khách hàng
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Kinh nghiệm chuyên sâu',
                  description: 'Hơn 8 năm hoạt động trong lĩnh vực bất động sản cao cấp tại Đà Nẵng với đội ngũ chuyên gia giàu kinh nghiệm.'
                },
                {
                  title: 'Dự án uy tín',
                  description: 'Chỉ hợp tác với các chủ đầu tư uy tín, dự án được thẩm định kỹ lưỡng về pháp lý và chất lượng.'
                },
                {
                  title: 'Tư vấn miễn phí',
                  description: 'Đội ngũ tư vấn chuyên nghiệp sẵn sàng hỗ trợ 24/7, tư vấn miễn phí về thủ tục, pháp lý và tài chính.'
                },
                {
                  title: 'Giá tốt nhất',
                  description: 'Cam kết mang đến mức giá cạnh tranh nhất thị trường với nhiều chương trình ưu đãi hấp dẫn.'
                },
                {
                  title: 'Hỗ trợ vay vốn',
                  description: 'Hỗ trợ khách hàng trong việc tìm kiếm và thực hiện các gói vay ưu đãi từ ngân hàng.'
                },
                {
                  title: 'Dịch vụ toàn diện',
                  description: 'Đồng hành cùng khách hàng từ khâu tư vấn, xem nhà, đến hoàn tất thủ tục pháp lý và bàn giao.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10"
                >
                  <CheckCircle2 className="h-10 w-10 text-[#D4AF37] mb-4" />
                  <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
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
                Dịch vụ của <span className="text-[#D4AF37]">chúng tôi</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Giải pháp toàn diện cho mọi nhu cầu bất động sản của bạn
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e" 
                  alt="Professional real estate consultation service"
                  className="rounded-2xl shadow-xl w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {[
                  {
                    title: 'Mua bán căn hộ',
                    description: 'Tư vấn và hỗ trợ khách hàng trong việc mua bán căn hộ cao cấp với quy trình chuyên nghiệp, minh bạch.'
                  },
                  {
                    title: 'Cho thuê bất động sản',
                    description: 'Dịch vụ cho thuê căn hộ cao cấp với mức giá hợp lý, thủ tục nhanh chóng và đảm bảo quyền lợi.'
                  },
                  {
                    title: 'Tư vấn đầu tư',
                    description: 'Phân tích thị trường, đánh giá tiềm năng và tư vấn chiến lược đầu tư bất động sản hiệu quả.'
                  },
                  {
                    title: 'Hỗ trợ pháp lý',
                    description: 'Hỗ trợ đầy đủ các thủ tục pháp lý, giấy tờ liên quan đến giao dịch bất động sản.'
                  }
                ].map((service, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-[#D4AF37]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#0B1F3B] mb-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B] mb-4 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                Tin tức <span className="text-[#D4AF37]">mới nhất</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Cập nhật thông tin thị trường bất động sản và xu hướng đầu tư
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestNews.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B] mb-4 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                Liên hệ <span className="text-[#D4AF37]">tư vấn</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí trong vòng 24 giờ
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600 mb-4" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Hoặc liên hệ trực tiếp qua hotline
              </p>
              <a href="tel:+84905123456" className="inline-flex items-center gap-2 text-2xl font-bold text-[#D4AF37] hover:text-[#C19B2F] transition-colors duration-200" style={{fontFamily: 'Montserrat, sans-serif'}}>
                <Phone className="h-6 w-6" />
                +84 905 123 456
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
