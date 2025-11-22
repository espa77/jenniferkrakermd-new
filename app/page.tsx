"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Plus, Minus, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- Components ---

// 1. Navigation (Minimalist, Sticky)
const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-[#Fdfdfd]/90 backdrop-blur-sm border-b border-black/10 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
            <Link href="/" className="uppercase tracking-widest-plus text-xs font-semibold">
                <Image
                    src="/images/Jennifer-Kraker-logo@2x.png"
                    alt="Jennifer Kraker, MD Logo"
                    width={150}
                    height={56}
                    priority
                />
            </Link>
            <div className="hidden md:flex gap-12 text-xs font-medium uppercase tracking-widest">
                <a href="#approach" className="hover:text-gray-500 transition-colors">Approach</a>
                <a href="#specialties" className="hover:text-gray-500 transition-colors">Specialties</a>
                <a href="#bio" className="hover:text-gray-500 transition-colors">About</a>
                <a href="#contact" className="hover:text-gray-500 transition-colors">Contact</a>
            </div>
            <a
                href="https://jenniferkrakermd.com/take-the-assessment/"
                className="bg-black text-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
                Portal Login
            </a>
        </div>
    </nav>
);

// 2. Hero Section (Atria Style: Huge Text, Sparse)
const Hero = () => (
    <section className="relative pt-40 pb-24 md:pt-60 md:pb-40 px-6 border-b border-black/10 overflow-hidden">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
            <source src="/video/bf7a39b8-bc47-45b5-9f3e-690b7ce99415.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col gap-8">
                <h1 className="text-5xl md:text-8xl font-light leading-[0.9] tracking-tight text-balance text-white drop-shadow-lg">
                    APPROACH YOUR <br />
                    MENTAL HEALTH <br />
                    WITH PRECISION.
                </h1>
                <div className="max-w-xl mt-12">
                    <p className="text-lg md:text-xl font-light text-white leading-relaxed drop-shadow-md">
                        Unlock your genetic potential and enhance your wellbeing with personalized,
                        comprehensive health insights and integrative psychiatry approaches tailored
                        to your needs.
                    </p>
                    <div className="mt-12 flex flex-col md:flex-row gap-6">
                        <a href="#contact" className="group flex items-center gap-3 text-sm uppercase tracking-widest font-semibold border-b border-white pb-1 w-fit hover:text-gray-300 hover:border-gray-300 transition-all text-white">
                            Become a Patient
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#" className="group flex items-center gap-3 text-sm uppercase tracking-widest font-semibold border-b border-transparent pb-1 w-fit hover:border-white transition-all text-gray-200 hover:text-white">
                            Brain Health Assessment
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// 3. Grid Statistics/Specialties (Replacing Atria's Stats Grid)
const SpecialtyCard = ({ number, title, subtitle }: { number: string, title: string, subtitle: string }) => (
    <div className="border-r border-b border-black/10 p-8 md:p-12 h-full hover:bg-gray-50 transition-colors group">
        <span className="block text-xs font-mono text-gray-400 mb-6">{number}</span>
        <h3 className="text-2xl md:text-3xl font-light mb-4 group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
        <p className="text-sm text-gray-500 font-mono uppercase tracking-wider">{subtitle}</p>
    </div>
);

const SpecialtiesGrid = () => (
    <section id="specialties" className="border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-black/10">
            <div className="col-span-1 md:col-span-2 lg:col-span-4 p-8 md:p-12 border-b border-r border-black/10">
                <h2 className="text-xs uppercase tracking-widest-plus mb-4">Focus Areas</h2>
                <p className="text-2xl md:text-4xl font-light max-w-4xl">
                    We target the root cause. From DNA to spirituality, every aspect is related to your vibrancy.
                </p>
            </div>

            {/* Grid Items Mimicking Atria's "The Case For Proactive Medicine" */}
            <SpecialtyCard number="01" title="Anxiety & Mood" subtitle="Disorder Management" />
            <SpecialtyCard number="02" title="Eating Disorders" subtitle="& Addictions" />
            <SpecialtyCard number="03" title="Focus" subtitle="& Brain Optimization" />
            <SpecialtyCard number="04" title="Trauma" subtitle="Informed Care" />
            <SpecialtyCard number="05" title="Women's Health" subtitle="Reproductive Psychiatry" />
            <SpecialtyCard number="06" title="Executive Wellness" subtitle="Personalized Strategies" />
            <SpecialtyCard number="07" title="Relationships" subtitle="Conflict Resolution" />
            <SpecialtyCard number="08" title="Life Transitions" subtitle="Stress Management" />
        </div>
    </section>
);

// 4. Bio Section (Mimicking "Our Doctors")
const BioSection = () => {
    const imageRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <section id="bio" className="grid grid-cols-1 lg:grid-cols-2 border-b border-black/10">
            <div className="bg-[#e8e3dc] text-[#2d2d2d] p-12 md:p-24 flex flex-col justify-center">
                <h2 className="text-xs uppercase tracking-widest-plus mb-8 text-[#6b5d52]">Meet Dr. Kraker</h2>
                <h3 className="text-3xl md:text-5xl font-light leading-tight mb-8">
                    Unrelenting about getting to the root cause of your suffering.
                </h3>
                <p className="text-lg text-[#4a4a4a] font-light leading-relaxed mb-8">
                    I am a Columbia and Cornell trained physician, nutritionist, nutrigenomics, and mental health expert
                    dedicated to optimizing your mental health. I practice psychiatry that is personalized, comprehensive,
                    and cutting edge.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-sm tracking-widest uppercase border-t border-[#c9b8a3] pt-4">
                        <span className="text-[#8a7968] w-32">Training</span>
                        <span>Columbia University & Cornell Medical</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm tracking-widest uppercase border-t border-[#c9b8a3] pt-4">
                        <span className="text-[#8a7968] w-32">Focus</span>
                        <span>Nutrigenomics & Integrative Psychiatry</span>
                    </div>
                </div>
            </div>
            <div ref={imageRef} className={`relative group overflow-hidden bg-gray-200 h-[600px] md:h-[700px] ${isInView ? 'in-view' : ''}`}>
                <Image
                    src="/images/KRAKER2-2624-TS_background.jpg"
                    alt="Dr. Jennifer Kraker"
                    width={2000}
                    height={1500}
                    className={`relative w-full h-full object-cover object-top transition-[filter] duration-[2400ms] ease-in-out ${
                        isInView ? 'grayscale-0 scale-105' : 'grayscale'
                    } group-hover:grayscale-0 group-hover:scale-105`}
                    style={{ transitionProperty: 'filter, transform', transitionDuration: '2400ms, 6660ms' }}
                    priority
                />
                <div className={`absolute inset-0 transition-all duration-[2400ms] ${isInView ? 'bg-black/0' : 'bg-black/10'} group-hover:bg-black/0`}></div>
                <div className="absolute bottom-8 left-8 bg-[#c9b8a3] px-4 py-2 z-10 shadow-lg">
                    <span className="text-xs uppercase tracking-widest font-bold text-[#2d2d2d]">Jennifer Kraker, MD, MS</span>
                </div>
            </div>
        </section>
    );
};

// 5. Accordion Approach Section
const AccordionItem = ({ title, content, isOpen, onClick }: any) => (
    <div className="border-t border-black/10 group">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center py-8 px-6 md:px-12 hover:bg-gray-50 transition-all"
        >
            <span className="text-xl md:text-3xl font-light text-left group-hover:translate-x-4 transition-transform duration-300">
                {title}
            </span>
            {isOpen ? <Minus className="w-6 h-6 font-thin" /> : <Plus className="w-6 h-6 font-thin" />}
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 md:px-12 pb-12 pt-4">
                <p className="text-lg text-gray-600 font-light max-w-3xl leading-relaxed">
                    {content}
                </p>
            </div>
        </div>
    </div>
);

const ApproachSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const items = [
        {
            title: "DNA / Genetics",
            content: "We look at specific genetic variants (SNPs) related to your mental and metabolic health. Learn actionable personalized strategies unique to your DNA footprint on the right kind of nutrition, supplements, lifestyle and medications that will support and improve your total health and wellness."
        },
        {
            title: "Hormones & Metabolism",
            content: "Hormones are our master communicators. They send messages from one organ to another and regulate how you feel. Making sure your hormones are balanced—if not optimized—allows you to thrive emotionally and physically."
        },
        {
            title: "Replenish & Rest",
            content: "How do you replenish yourself? Do you get enough sleep? Do you have time for leisure? If you are ambitious and constantly on the go, learning how to replenish your mind and body can make you even more effective."
        },
        {
            title: "Relationships",
            content: "The quality of our relationships influences our mental health. Do you feel alone and isolated or celebrated and supported? We examine how you relate to others to heal the root of social anxiety and conflict."
        }
    ];

    return (
        <section id="approach" className="bg-[#f8f8f7] py-24">
            <div className="max-w-[1400px] mx-auto">
                <div className="px-6 mb-16">
                    <h2 className="text-xs uppercase tracking-widest-plus mb-4">A Comprehensive Approach</h2>
                    <p className="text-2xl md:text-4xl font-light max-w-2xl">
                        What is biologically possible? We use cutting edge testing and deep listening to find out.
                    </p>
                </div>
                <div className="border-b border-black/10">
                    {items.map((item, i) => (
                        <AccordionItem
                            key={i}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// 6. Footer/Contact (Atria Style: Clean Columns)
const Footer = () => (
    <footer id="contact" className="bg-[#e8e3dc] text-[#2d2d2d] pt-24 pb-12 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-[#c9b8a3] pb-24">
            <div>
                <h2 className="text-4xl md:text-6xl font-light mb-8">
                    The future of <br /> your mental health.
                </h2>
                <a href="mailto:info@jenniferkrakermd.com" className="inline-block bg-[#2d2d2d] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#4a4a4a] transition-colors">
                    Contact Dr. Kraker
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm">
                <div>
                    <h4 className="uppercase tracking-widest text-[#8a7968] mb-6">Location</h4>
                    <p className="font-light leading-relaxed text-[#4a4a4a]">
                        122 East 42nd St,<br />
                        Suite 2705<br />
                        New York, NY 10168
                    </p>
                    <a href="#" className="flex items-center gap-2 mt-4 text-[#6b5d52] hover:text-[#2d2d2d] transition-colors">
                        <MapPin className="w-4 h-4" /> View Map
                    </a>
                </div>
                <div>
                    <h4 className="uppercase tracking-widest text-[#8a7968] mb-6">Patient Portal</h4>
                    <ul className="space-y-4 font-light text-[#4a4a4a]">
                        <li><a href="#" className="hover:text-[#2d2d2d] transition-colors">New Patients</a></li>
                        <li><a href="#" className="hover:text-[#2d2d2d] transition-colors">Brain Health Assessment</a></li>
                        <li><a href="#" className="hover:text-[#2d2d2d] transition-colors">Refer a Patient</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="max-w-[1400px] mx-auto pt-8 flex flex-col md:flex-row justify-between text-xs text-[#8a7968] font-mono uppercase tracking-wider">
            <p>© 2025 Jennifer Kraker MD. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-[#2d2d2d] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#2d2d2d] transition-colors">Terms & Conditions</a>
            </div>
        </div>
    </footer>
);

export default function Home() {
    return (
        <main className="min-h-screen bg-[#Fdfdfd]">
            <Navbar />
            <Hero />
            <SpecialtiesGrid />
            <BioSection />
            <ApproachSection />
            <Footer />
        </main>
    );
}
