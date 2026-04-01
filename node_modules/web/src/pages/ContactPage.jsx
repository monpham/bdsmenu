
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Liên Hệ - ApartmentDN | Tư Vấn Căn Hộ Cao Cấp Đà Nẵng</title>
        <meta name="description" content="Liên hệ ApartmentDN để được tư vấn miễn phí về căn hộ cao cấp tại Đà Nẵng. Hotline: +84 905 123 456. Email: contact@apartmentdn.vn" />
        <meta name="keywords" content="liên hệ ApartmentDN, tư vấn BĐS Đà Nẵng, hotline căn hộ cao cấp" />
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
                Liên hệ <span className="text-[#D4AF37]">với chúng tôi</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Phone,
                  title: 'Điện thoại',
                  content: '+84 905 123 456',
                  link: 'tel:+84905123456'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'contact@apartmentdn.vn',
                  link: 'mailto:contact@apartmentdn.vn'
                },
                {
                  icon: MapPin,
                  title: 'Địa chỉ',
                  content: '123 Đường Nguyễn Văn Linh, Quận Hải Châu, Đà Nẵng',
                  link: null
                },
                {
                  icon: Clock,
                  title: 'Giờ làm việc',
                  content: 'Thứ 2 - Thứ 6: 8:00 - 18:00',
                  link: null
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <item.icon className="h-10 w-10 text-[#D4AF37] mb-4" />
                  <h3 className="text-lg font-semibold text-[#0B1F3B] mb-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-gray-700 hover:text-[#D4AF37] transition-colors duration-200 leading-relaxed" 
                      style={{fontFamily: 'Open Sans, sans-serif'}}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                      {item.content}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B] mb-4 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                  Gửi tin nhắn <span className="text-[#D4AF37]">cho chúng tôi</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  Để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí trong vòng 24 giờ
                </p>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <ContactForm />
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B] mb-4 leading-tight" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em'}}>
                  Vị trí <span className="text-[#D4AF37]">văn phòng</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  Ghé thăm văn phòng của chúng tôi tại trung tâm Đà Nẵng
                </p>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[500px]">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=108.2077%2C16.0544%2C108.2277%2C16.0744&layer=mapnik&marker=16.0644%2C108.2177"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ApartmentDN office location in Da Nang"
                  />
                </div>
                <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#0B1F3B] mb-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
                        Địa chỉ văn phòng
                      </h3>
                      <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                        123 Đường Nguyễn Văn Linh<br />
                        Quận Hải Châu, Đà Nẵng<br />
                        Việt Nam
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-[#0B1F3B] mb-6 text-center" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Thông tin <span className="text-[#D4AF37]">bổ sung</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B1F3B] mb-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Giờ làm việc chi tiết
                  </h3>
                  <div className="text-gray-700 space-y-1" style={{fontFamily: 'Open Sans, sans-serif'}}>
                    <p>Thứ Hai - Thứ Sáu: 8:00 - 18:00</p>
                    <p>Thứ Bảy: 8:00 - 17:00</p>
                    <p>Chủ Nhật: 9:00 - 16:00</p>
                    <p className="text-sm text-gray-500 mt-2">
                      * Hỗ trợ khẩn cấp 24/7 qua hotline
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B1F3B] mb-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Phương thức liên hệ
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Open Sans, sans-serif'}}>
                    Bạn có thể liên hệ với chúng tôi qua điện thoại, email hoặc đến trực tiếp văn phòng. 
                    Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn trong việc tìm kiếm căn hộ 
                    cao cấp phù hợp nhất tại Đà Nẵng.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
