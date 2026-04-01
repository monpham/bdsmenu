
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Target, Heart, TrendingUp, Users, Building2, CheckCircle2, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Về Chúng Tôi - ApartmentDN | 8+ Năm Kinh Nghiệm BĐS Cao Cấp</title>
        <meta name="description" content="ApartmentDN - Hơn 8 năm kinh nghiệm trong lĩnh vực mua bán căn hộ cao cấp tại Đà Nẵng. Đội ngũ chuyên nghiệp, tận tâm, uy tín." />
        <meta name="keywords" content="về ApartmentDN, công ty bất động sản Đà Nẵng, kinh nghiệm BĐS" />
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
                Về <span className="text-[#D4AF37]">ApartmentDN</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Đối tác tin cậy trong hành trình tìm kiếm căn hộ cao cấp tại Đà Nẵng
              </p>
            </motion.div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B] mb-6 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                  Câu chuyện <span className="text-[#D4AF37]">của chúng tôi</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  ApartmentDN được thành lập vào năm 2018 với sứ mệnh mang đến dịch vụ tư vấn 
                  bất động sản cao cấp chuyên nghiệp và uy tín tại Đà Nẵng. Khởi đầu từ một 
                  đội ngũ nhỏ với niềm đam mê bất động sản, chúng tôi đã không ngừng phát triển 
                  và trở thành một trong những đơn vị hàng đầu trong lĩnh vực mua bán căn hộ cao cấp.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  Qua hơn 8 năm hoạt động, chúng tôi tự hào đã đồng hành cùng hàng nghìn khách hàng 
                  trong việc tìm kiếm và sở hữu căn hộ mơ ước. Mỗi giao dịch thành công không chỉ 
                  là một con số, mà còn là niềm tin và sự hài lòng mà khách hàng dành cho chúng tôi.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  Với đội ngũ chuyên viên giàu kinh nghiệm, am hiểu thị trường và luôn cập nhật 
                  xu hướng mới nhất, ApartmentDN cam kết mang đến dịch vụ tư vấn toàn diện, 
                  minh bạch và đáng tin cậy cho mọi khách hàng.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" 
                  alt="ApartmentDN office and team"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-white p-8 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold mb-2" style={{fontFamily: 'Montserrat, sans-serif'}}>2,847</div>
                  <div className="text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>Khách hàng hài lòng</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics */}
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
                Con số <span className="text-[#D4AF37]">ấn tượng</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Những thành tựu đáng tự hào trong hành trình phát triển
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, number: '8+', label: 'Năm kinh nghiệm', color: 'text-[#D4AF37]' },
                { icon: Users, number: '2,847', label: 'Khách hàng hài lòng', color: 'text-[#D4AF37]' },
                { icon: Building2, number: '127', label: 'Dự án hoàn thành', color: 'text-[#D4AF37]' },
                { icon: TrendingUp, number: '97.2%', label: 'Tỷ lệ thành công', color: 'text-[#D4AF37]' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                  <div className="text-4xl font-bold text-[#0B1F3B] mb-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600" style={{fontFamily: 'Open Sans, sans-serif'}}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
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
                Sứ mệnh & <span className="text-[#D4AF37]">Giá trị cốt lõi</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Những giá trị định hướng mọi hoạt động của chúng tôi
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Sứ mệnh',
                  description: 'Mang đến dịch vụ tư vấn bất động sản cao cấp chuyên nghiệp, minh bạch và đáng tin cậy, giúp khách hàng tìm được căn hộ mơ ước và đầu tư hiệu quả.'
                },
                {
                  icon: Heart,
                  title: 'Tận tâm',
                  description: 'Đặt lợi ích và sự hài lòng của khách hàng lên hàng đầu. Luôn lắng nghe, thấu hiểu và đồng hành cùng khách hàng trong suốt hành trình.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Uy tín',
                  description: 'Cam kết minh bạch trong mọi giao dịch, cung cấp thông tin chính xác và tư vấn trung thực để xây dựng niềm tin lâu dài với khách hàng.'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#D4AF37] transition-all duration-300"
                >
                  <value.icon className="h-12 w-12 text-[#D4AF37] mb-4" />
                  <h3 className="text-xl font-bold text-[#0B1F3B] mb-3" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Introduction */}
        <section className="py-20 bg-[#0B1F3B] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                  alt="ApartmentDN professional team"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                  Đội ngũ <span className="text-[#D4AF37]">chuyên nghiệp</span>
                </h2>
                <p className="text-lg text-white/90 mb-6 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  Đội ngũ ApartmentDN bao gồm những chuyên viên tư vấn bất động sản giàu kinh nghiệm, 
                  được đào tạo bài bản và có kiến thức chuyên sâu về thị trường căn hộ cao cấp tại Đà Nẵng.
                </p>
                <p className="text-lg text-white/90 mb-8 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  Chúng tôi không ngừng học hỏi, cập nhật xu hướng thị trường và nâng cao kỹ năng 
                  để mang đến dịch vụ tốt nhất cho khách hàng. Với tinh thần trách nhiệm cao và 
                  sự tận tâm trong từng giao dịch, chúng tôi tự tin là đối tác đáng tin cậy của bạn.
                </p>
                <div className="space-y-4">
                  {[
                    'Chuyên viên tư vấn giàu kinh nghiệm',
                    'Am hiểu sâu sắc thị trường Đà Nẵng',
                    'Đào tạo chuyên nghiệp và bài bản',
                    'Hỗ trợ khách hàng 24/7'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                      <span className="text-white/90" style={{fontFamily: 'Open Sans, sans-serif'}}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B] mb-4 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                Sẵn sàng <span className="text-[#D4AF37]">đồng hành</span> cùng bạn
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Hãy để ApartmentDN giúp bạn tìm kiếm căn hộ cao cấp hoàn hảo tại Đà Nẵng. 
                Liên hệ ngay để được tư vấn miễn phí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#C19B2F] text-white font-semibold px-8 py-6 text-base transition-all duration-200 active:scale-[0.98]" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  <Link to="/contact">
                    Liên hệ tư vấn
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white font-semibold px-8 py-6 text-base transition-all duration-200 active:scale-[0.98]" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  <a href="tel:+84905123456">
                    <Phone className="h-5 w-5 mr-2" />
                    +84 905 123 456
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
