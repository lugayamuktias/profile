import React, { useState, useRef, useEffect } from 'react';
import { Link, Head } from "@inertiajs/react";
import Profile from '@/Pages/Profile';
import Projects from '@/Pages/Projects';
import Skills from '@/Pages/Skills';
import Contact from '@/Pages/Contact';

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isAtTop, setIsAtTop] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const profileRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    const isProfileVisible = useOnScreen(profileRef);
    const isProjectsVisible = useOnScreen(projectsRef);
    const isSkillsVisible = useOnScreen(skillsRef);
    const isContactVisible = useOnScreen(contactRef);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const scrollToSection = (ref) => {
        if (ref.current) {
            const offset = 100;
            const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'home', ref: null },
                { id: 'profile', ref: profileRef },
                { id: 'projects', ref: projectsRef },
                { id: 'skills', ref: skillsRef },
                { id: 'contact', ref: contactRef }
            ];

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            if (window.scrollY === 0) {
                setActiveSection('home');
                return;
            }

            sections.forEach(section => {
                const element = section.ref ? section.ref.current : null;
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    if (top < window.innerHeight && bottom > 0) {
                        setActiveSection(section.id);
                    }
                }
            });

            setIsAtTop(window.scrollY === 0);
        };

        const handleLocationChange = () => {
            const path = window.location.pathname;
            if (path === '/') {
                setActiveSection('home');
            } else if (path.includes('profile')) {
                setActiveSection('profile');
            } else if (path.includes('projects')) {
                setActiveSection('projects');
            } else if (path.includes('skills')) {
                setActiveSection('skills');
            } else if (path.includes('contact')) {
                setActiveSection('contact');
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('popstate', handleLocationChange);
        handleLocationChange();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, []);

    const handleHomeClick = () => {
        if (!isAtTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    function useOnScreen(ref) {
        const [isIntersecting, setIntersecting] = useState(false);
      
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { threshold: 0.1 }
          );
          if (ref.current) observer.observe(ref.current);
          return () => observer.disconnect();
        }, [ref]);
      
        return isIntersecting;
      }

    return (
        <>
            <Head title="Lugaya - Portfolio" />

            {/* Cover Image */}
            {/* <div className="relative w-full h-auto">
                <img 
                    src="http://127.0.0.1:8000/storage/sampul.jpeg" 
                    alt="Softy Warena" 
                    className="w-full h-auto" 
                />
            </div> */}

            {/* Header with Navbar */}
            <header className="bg-gray-800 text-white">
            <nav className="max-w-screen-lg mx-auto p-5 sticky top-0 shadow items-center justify-between z-10">

                    <h1 className="text-xl font-bold">Welcome!</h1>

                    <button
                        className="text-white lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>

                    <div className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:items-center`}>
                        <button
                            onClick={handleHomeClick}
                            className={`nav-link block lg:inline-block px-3 py-2 ${activeSection === 'home' ? 'nav-link-cp' : ''}`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection(profileRef)}
                            className={`nav-link block lg:inline-block px-3 py-2 ${activeSection === 'profile' ? 'nav-link-cp' : ''}`}
                        >
                            Profile
                        </button>
                        <button
                            onClick={() => scrollToSection(projectsRef)}
                            className={`nav-link block lg:inline-block px-3 py-2 ${activeSection === 'projects' ? 'nav-link-cp' : ''}`}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection(skillsRef)}
                            className={`nav-link block lg:inline-block px-3 py-2 ${activeSection === 'skills' ? 'nav-link-cp' : ''}`}
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => scrollToSection(contactRef)}
                            className={`nav-link block lg:inline-block px-3 py-2 ${activeSection === 'contact' ? 'nav-link-cp' : ''}`}
                        >
                            Contact Me
                        </button>
                    </div>
                    {/* <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
                        <label className="switch">
                            <input type="checkbox" checked={isDarkMode} onChange={toggleMode} />
                            <span className="slider round"></span>
                        </label>
                    </div> */}
                </nav>
            </header>

            <main>
                {children}
                <div
                    ref={profileRef}
                    className={`fade-in ${isProfileVisible ? "fade-in-visible" : ""}`}
                >
                    <Profile />
                </div>
                <div
                    ref={projectsRef}
                    className={`fade-in ${isProjectsVisible ? "fade-in-visible" : ""}`}
                >
                    <Projects />
                </div>
                <div
                    ref={skillsRef}
                    className={`fade-in ${isSkillsVisible ? "fade-in-visible" : ""}`}
                >
                    <Skills />
                </div>
                <div
                    ref={contactRef}
                    className={`fade-in ${isContactVisible ? "fade-in-visible" : ""}`}
                >
                    <Contact />
                </div>
            </main>
        </>
    );
}
