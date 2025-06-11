

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
import sideImg from '../../assets/images/young.jpg'
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


            {/* Banking With Us Cards */}
            <section className="py-20 px-6 bg-blue-50" data-aos="fade-up">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">Banking With Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <CreditCard className="w-8 h-8 text-blue-600 mb-3" />,
                                title: "Easy Account Opening",
                                text: "Open your account online in minutes and start banking instantly.",
                            },
                            {
                                icon: <PiggyBank className="w-8 h-8 text-blue-600 mb-3" />,
                                title: "Smart Savings",
                                text: "Automate your savings and reach your financial goals faster.",
                            },
                            {
                                icon: <Lock className="w-8 h-8 text-blue-600 mb-3" />,
                                title: "Secure Transactions",
                                text: "Your funds and data are protected with industry-leading security.",
                            },
                            {
                                icon: <Smartphone className="w-8 h-8 text-blue-600 mb-3" />,
                                title: "Mobile Banking",
                                text: "Bank anywhere, anytime with our intuitive mobile app.",
                            },
                            {
                                icon: <Award className="w-8 h-8 text-blue-600 mb-3" />,
                                title: "Award-Winning Support",
                                text: "Get help from our friendly team 24/7, whenever you need it.",
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />,
                                title: "Financial Growth",
                                text: "Access tools and advice to grow your wealth with confidence.",
                            },
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition m-auto"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <div className='flex justify-center items-center text-center m-auto'>{card.icon}</div>
                                <h3 className="font-bold text-lg text-blue-900 mb-2 text-center">{card.title}</h3>
                                <p className="text-gray-700 text-sm">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image and Text Side by Side */}
            <section className="py-20 px-6 bg-white" data-aos="fade-left">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 w-full" data-aos="zoom-in">
                        <img
                            src={sideImg}
                            alt="Banking with Trustedged"
                            className="rounded-xl shadow-lg w-full object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 w-full" data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-blue-800 mb-4">Experience the Difference</h2>
                        <p className="text-gray-700 text-lg mb-4">
                            At Trustedged, we combine technology and a human touch to deliver banking that fits your lifestyle. Whether you’re saving for the future, growing your business, or managing daily expenses, our team is here to support you every step of the way.
                        </p>
                        <ul className="list-disc list-inside text-blue-700 font-medium space-y-2">
                            <li>Personalized financial advice</li>
                            <li>Modern, easy-to-use digital tools</li>
                            <li>Community-focused values</li>
                        </ul>
                    </div>
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
