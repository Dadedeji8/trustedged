

// import React, { useState, useEffect } from 'react';

// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from 'context/AuthContext';


// import { ChevronRight, Shield, TrendingUp, Users, Star, Menu, X, Phone, Mail, MapPin, CheckCircle, Globe, Smartphone, CreditCard, PiggyBank, Lock, Award, Clock } from 'lucide-react';
// import HomePageNavBar from './components/HomePageNavBar';

// const TrustedgeLanding = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     useEffect(() => {
//         // Initialize AOS
//         const initAOS = () => {
//             const script = document.createElement('script');
//             script.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
//             script.onload = () => {
//                 window.AOS.init({
//                     duration: 600,
//                     easing: 'ease-out',
//                     once: true,
//                     offset: 50,
//                 });
//             };
//             document.head.appendChild(script);

//             const link = document.createElement('link');
//             link.rel = 'stylesheet';
//             link.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
//             document.head.appendChild(link);
//         };

//         initAOS();
//     }, []);

//     const stats = [
//         { number: "2M+", label: "Active Customers", icon: Users },
//         { number: "99.9%", label: "Service Uptime", icon: Shield },
//         { number: "$50B+", label: "Assets Under Management", icon: TrendingUp },
//         { number: "150+", label: "Branch Locations", icon: Globe }
//     ];

//     const services = [
//         {
//             icon: PiggyBank,
//             title: "Personal Banking",
//             description: "Comprehensive personal banking solutions including checking, savings, and money market accounts.",
//             features: ["Free checking accounts", "High-yield savings", "Mobile banking", "ATM network access"]
//         },
//         {
//             icon: TrendingUp,
//             title: "Investment Services",
//             description: "Professional investment management and financial planning services to grow your wealth.",
//             features: ["Portfolio management", "Retirement planning", "Financial advisory", "Market analysis"]
//         },
//         {
//             icon: CreditCard,
//             title: "Credit Solutions",
//             description: "Flexible credit options including personal loans, credit cards, and lines of credit.",
//             features: ["Competitive rates", "Fast approval", "Flexible terms", "Credit building tools"]
//         },
//         {
//             icon: Shield,
//             title: "Business Banking",
//             description: "Complete business banking solutions for enterprises of all sizes and industries.",
//             features: ["Business accounts", "Commercial loans", "Merchant services", "Cash management"]
//         }
//     ];

//     const features = [
//         { icon: Lock, title: "Bank-Level Security", description: "FDIC insured with advanced encryption" },
//         { icon: Smartphone, title: "Mobile Banking", description: "Full-featured mobile app for iOS and Android" },
//         { icon: Award, title: "Award Winning", description: "Recognized for excellence in customer service" },
//         { icon: Clock, title: "24/7 Support", description: "Round-the-clock customer support available" }
//     ];

//     const testimonials = [
//         {
//             name: "Robert Mitchell",
//             role: "Small Business Owner",
//             content: "Trustedged has been instrumental in helping my business grow. Their commercial banking solutions are exactly what we needed.",
//             rating: 5
//         },
//         {
//             name: "Jennifer Adams",
//             role: "Retail Manager",
//             content: "I've been banking with Trustedged for over 10 years. Their customer service is exceptional and I trust them completely.",
//             rating: 5
//         },
//         {
//             name: "David Thompson",
//             role: "Retiree",
//             content: "The investment advisory services helped me plan for retirement. The team is knowledgeable and always available.",
//             rating: 5
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-white text-gray-900">
//             <HomePageNavBar />
//             {/* Navigation */}

//             {/* Mobile Menu */}

//             {/* Hero Section */}
//             <section className="bg-gradient-to-r from-green-600 to-green-800 py-20 mt-6">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         <div data-aos="fade-right">
//                             <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
//                                 Your Trusted
//                                 <span className="text-green-600 block">Banking Partner</span>
//                             </h1>
//                             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//                                 For over 10 years, Trustedged has been serving communities with reliable banking services,
//                                 competitive rates, and personalized customer care you can count on.
//                             </p>
//                             <div className="flex flex-col sm:flex-row gap-4">
//                                 <button className="bg-green-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-green-700 transition-colors">
//                                     <Link to={'/authentication/sign-up'}>
//                                         Open Account Today
//                                     </Link>
//                                 </button>
//                                 <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-md text-lg font-medium hover:bg-green-50 transition-colors">

//                                     <Link to={'/authentication/sign-up'}>
//                                         Continue Banking
//                                     </Link>
//                                 </button>
//                             </div>
//                         </div>

//                         <div data-aos="fade-left" className="relative">
//                             <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
//                                 <div className="mb-6">
//                                     <div className="flex items-center justify-between mb-4">
//                                         <h3 className="text-lg font-semibold text-gray-900">Account Summary</h3>
//                                         <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                                     </div>
//                                     <div className="text-3xl font-bold text-gray-900 mb-2">$24,832.50</div>
//                                     <div className="text-sm text-gray-600">Available Balance</div>
//                                 </div>

//                                 <div className="space-y-4">
//                                     <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                                         <div className="flex items-center">
//                                             <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
//                                                 <CheckCircle className="w-5 h-5 text-green-600" />
//                                             </div>
//                                             <div>
//                                                 <div className="font-medium text-gray-900">Direct Deposit</div>
//                                                 <div className="text-sm text-gray-600">Salary - Acme Corp</div>
//                                             </div>
//                                         </div>
//                                         <div className="text-green-600 font-semibold">+$3,200.00</div>
//                                     </div>

//                                     <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                                         <div className="flex items-center">
//                                             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                                                 <PiggyBank className="w-5 h-5 text-blue-600" />
//                                             </div>
//                                             <div>
//                                                 <div className="font-medium text-gray-900">Savings Transfer</div>
//                                                 <div className="text-sm text-gray-600">Auto-save goal</div>
//                                             </div>
//                                         </div>
//                                         <div className="text-blue-600 font-semibold">$500.00</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             <section className="py-16 bg-white">
//                 <div className=" p-7 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl bg-green-100">
//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//                         {stats.map((stat, index) => (
//                             <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="text-center">
//                                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <stat.icon className="w-8 h-8 text-green-600" />
//                                 </div>
//                                 <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
//                                 <div className="text-gray-600 font-medium">{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Services Section */}
//             <section id="services" className="py-20 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div data-aos="fade-up" className="text-center mb-16">
//                         <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Banking Services</h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                             Comprehensive financial solutions designed to meet your personal and business needs
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-8">
//                         {services.map((service, index) => (
//                             <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                                 <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
//                                     <service.icon className="w-8 h-8 text-green-600" />
//                                 </div>
//                                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
//                                 <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
//                                 <ul className="space-y-2">
//                                     {service.features.map((feature, idx) => (
//                                         <li key={idx} className="flex items-center text-gray-700">
//                                             <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
//                                             {feature}
//                                         </li>
//                                     ))}
//                                 </ul>
//                                 <button className="mt-6 text-green-600 font-medium hover:text-green-700 transition-colors flex items-center">
//                                     Learn More <ChevronRight className="w-4 h-4 ml-1" />
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section className="py-16 bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div data-aos="fade-up" className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Trustedged?</h2>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {features.map((feature, index) => (
//                             <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="text-center">
//                                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <feature.icon className="w-8 h-8 text-green-600" />
//                                 </div>
//                                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                                 <p className="text-gray-600">{feature.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Testimonials Section */}
//             <section className="py-20 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div data-aos="fade-up" className="text-center mb-16">
//                         <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
//                         <p className="text-xl text-gray-600">Trusted by individuals and businesses across the region</p>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-8">
//                         {testimonials.map((testimonial, index) => (
//                             <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
//                                 <div className="flex items-center mb-4">
//                                     {[...Array(testimonial.rating)].map((_, i) => (
//                                         <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                                     ))}
//                                 </div>
//                                 <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
//                                 <div>
//                                     <div className="font-semibold text-gray-900">{testimonial.name}</div>
//                                     <div className="text-gray-600 text-sm">{testimonial.role}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="py-20 bg-green-600">
//                 <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//                     <div data-aos="fade-up">
//                         <h2 className="text-4xl font-bold text-white mb-6">
//                             Ready to Start Banking with Trustedged?
//                         </h2>
//                         <p className="text-xl text-green-100 mb-8">
//                             Open your account today and experience the difference of personalized banking service.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <button className="bg-white text-green-600 px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors">
//                                 Open Account Online
//                             </button>
//                             <button className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-green-700 transition-colors">
//                                 Schedule Appointment
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-gray-900 text-white py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid md:grid-cols-4 gap-8 mb-12">
//                         <div>
//                             <div className="flex items-center space-x-3 mb-6">
//                                 <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
//                                     <Shield className="w-6 h-6 text-white" />
//                                 </div>
//                                 <span className="text-2xl font-bold">Trustedged</span>
//                             </div>
//                             <p className="text-gray-400 mb-6">
//                                 Your trusted community bank, serving customers with integrity and excellence since 1975.
//                             </p>
//                             <div className="text-sm text-gray-400">
//                                 Member FDIC | Equal Housing Lender
//                             </div>
//                         </div>

//                         <div>
//                             <h3 className="font-semibold mb-4 text-lg">Services</h3>
//                             <div className="space-y-3 text-gray-400">
//                                 <div>Personal Banking</div>
//                                 <div>Business Banking</div>
//                                 <div>Loans & Credit</div>
//                                 <div>Investment Services</div>
//                                 <div>Online Banking</div>
//                             </div>
//                         </div>

//                         <div>
//                             <h3 className="font-semibold mb-4 text-lg">Support</h3>
//                             <div className="space-y-3 text-gray-400">
//                                 <div>Customer Service</div>
//                                 <div>Find ATM/Branch</div>
//                                 <div>Security Center</div>
//                                 <div>Privacy Policy</div>
//                                 <div>Terms of Service</div>
//                             </div>
//                         </div>

//                         <div>
//                             <h3 className="font-semibold mb-4 text-lg">Contact</h3>
//                             <div className="space-y-3 text-gray-400">
//                                 <div className="flex items-center">
//                                     <Phone className="w-4 h-4 mr-3" />
//                                     1-800-TRUSTED
//                                 </div>
//                                 <div className="flex items-center">
//                                     <Mail className="w-4 h-4 mr-3" />
//                                     info@trustedged.com
//                                 </div>
//                                 <div className="flex items-center">
//                                     <MapPin className="w-4 h-4 mr-3" />
//                                     Find Locations
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
//                         <p>&copy; 2025 Trustedged Bank. All rights reserved.</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default TrustedgeLanding;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronRight, Users, Shield, TrendingUp, Globe, PiggyBank, CreditCard, Lock, Smartphone, Award, Clock, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import BG from '../../assets/images/heroBGG.jpg'
import './homepage.css'
import HomePageNavBar from './components/HomePageNavBar';
const stats = [
    { icon: Users, label: 'Active Customers', value: '2M+' },
    { icon: Shield, label: 'Service Uptime', value: '99.9%' },
    { icon: TrendingUp, label: 'Assets Under Management', value: '$50B+' },
    { icon: Globe, label: 'Branch Locations', value: '150+' },
];

const services = [
    {
        icon: PiggyBank,
        title: 'Personal Banking',
        description: 'Checking, savings, and money market accounts.',
    },
    {
        icon: TrendingUp,
        title: 'Investment Services',
        description: 'Wealth management and financial planning.',
    },
    {
        icon: CreditCard,
        title: 'Credit Solutions',
        description: 'Loans, credit cards, and flexible lines of credit.',
    },
];

const features = [
    { icon: Lock, title: 'Bank-Level Security', description: 'FDIC insured with advanced encryption.' },
    { icon: Smartphone, title: 'Mobile Banking', description: 'Apps for iOS and Android.' },
    { icon: Award, title: 'Award Winning', description: 'Recognized for service excellence.' },
    { icon: Clock, title: '24/7 Support', description: 'Always-on customer care.' },
];

const testimonials = [
    { name: 'Robert Mitchell', role: 'Small Business Owner', content: 'Trustedged has helped grow my business.', rating: 5 },
    { name: 'Jennifer Adams', role: 'Retail Manager', content: '10 years of excellent service.', rating: 5 },
    { name: 'David Thompson', role: 'Retiree', content: 'They helped me plan my retirement.', rating: 5 },
];

export default function TrustedgeLanding() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="font-sans text-gray-800 bg-white w-full overflow-hidden">
            {/* Hero */}
            <HomePageNavBar />
            <section className=" hero text-white py-20 px-6 text-center h-[70dvh] flex items-center flex-col justify-center " data-aos="fade-down">
                <h1 className="text-5xl font-bold mb-4">Your Trusted Banking Partner</h1>
                <p className="text-xl mb-6">Experience banking designed for you.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/authentication/sign-up" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition">
                        Open Account
                    </Link>
                    <Link to="/authentication/sign-up" className="border border-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                        Continue Banking
                    </Link>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-6 bg-blue-50" data-aos="fade-up">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map(({ icon: Icon, label, value }, idx) => (
                        <div key={idx} className="text-center">
                            <Icon className="w-10 h-10 m-auto text-center text-blue-600 mx-auto mb-2" />
                            <h3 className="text-2xl font-bold">{value}</h3>
                            <p className="text-sm text-gray-600">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services */}
            <section className="py-20 px-6 bg-white" id="services" data-aos="fade-up">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-700">Our Services</h2>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {services.map(({ icon: Icon, title, description }, idx) => (
                        <div key={idx} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition">
                            <Icon className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="font-bold text-xl text-blue-800 mb-2">{title}</h3>
                            <p className="text-gray-700 text-sm">{description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Us */}
            <section className="py-20 px-6 bg-blue-100" id="about" data-aos="fade-right">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-blue-800 mb-4">About Trustedged</h2>
                    <p className="text-gray-800 leading-relaxed">
                        For over a decade, Trustedged has delivered modern banking with a personal touch. Our mission is to empower individuals and businesses with secure, flexible financial services tailored to their goals.
                    </p>
                </div>
            </section>
            {/* <section>
    <div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            text
        </div>
    </div>
</section> */}
            {/* Features */}
            <section className="py-20 px-6 bg-white" data-aos="fade-left">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
                    {features.map(({ icon: Icon, title, description }, idx) => (
                        <div key={idx} className="text-center">
                            <Icon className="w-10 h-10 m-auto text-center text-blue-600 mb-4" />
                            <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
                            <p className="text-gray-600 text-sm">{description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 bg-blue-50" id="testimonials" data-aos="fade-up">
                <h2 className="text-center text-4xl font-bold text-blue-700 mb-12">What Our Clients Say</h2>
                <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1} loop className="max-w-3xl mx-auto">
                    {testimonials.map(({ name, role, content }, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-white p-8 rounded-xl shadow text-center">
                                <p className="text-gray-700 italic mb-4">{content}</p>
                                <h4 className="text-lg font-bold text-blue-800">{name}</h4>
                                <p className="text-sm text-gray-600">{role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Contact Form */}
            <section className="py-20 px-6 bg-white" id="contact" data-aos="fade-up">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-4xl font-bold text-blue-700 text-center mb-8">Contact Us</h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Name" className="w-full border px-4 py-3 rounded-md" />
                        <input type="email" placeholder="Email" className="w-full border px-4 py-3 rounded-md" />
                        <textarea placeholder="Message" rows="4" className="w-full border px-4 py-3 rounded-md"></textarea>
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-6 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Trustedged Bank. All rights reserved.</p>
            </footer>
        </div>
    );
}
