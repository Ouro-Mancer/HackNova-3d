import React, { useEffect, useRef } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const copyrightRef = useRef(null);

  useEffect(() => {
    // Footer entrance animation
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      }
    );

    // Copyright animation
    gsap.fromTo(
      copyrightRef.current,
      { y: 10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: copyrightRef.current,
          start: "top bottom",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#131225] text-white py-12 px-6 lg:px-20"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Branding + Socials */}
        <div>
          <h1 className="text-4xl font-medium tracking-widest">
            <span className="text-yellow-400 font-['Saiyan-Sans']">Hack</span>
            <span className="text-red-500 font-['Saiyan-Sans']">Nova</span>
          </h1>
          <p className="mt-4 text-sm text-gray-400">
            Powering devs at GTBIT, New Delhi — the ultimate 36-hour coding
            battle of wit, caffeine, and Ultra Instinct ⚡.
          </p>
          <div className="flex gap-4 mt-5 text-xl text-white justify-center">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="hover:text-yellow-400" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-yellow-400" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="hover:text-yellow-400" /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-yellow-400" /></a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord className="hover:text-yellow-400" /></a>
          </div>
        </div>

        {/* Venue */}
        <div>
          <h2 className="text-lg font-bold text-white mb-3">Venue</h2>
          <p className="text-sm text-gray-400">
            Guru Tegh Bahadur Institute of Technology, <br />
            Rajouri Garden, New Delhi - 110064
          </p>
          <iframe
            title="gtbit-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7120394345844!2d77.11333877550263!3d28.6080927756789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d050312fe3b67%3A0x9b91fd6d7fc0f2f1!2sGuru%20Tegh%20Bahadur%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1714656342832!5m2!1sen!2sin"
            className="w-full h-40 rounded-md border-none mt-4"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-bold text-white mb-3">Resources</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/faq" className="hover:text-yellow-400">FAQ</a></li>
            <li><a href="/sponsor" className="hover:text-yellow-400">Sponsor Prospectus</a></li>
            <li><a href="/guide" className="hover:text-yellow-400">Hacker Guide</a></li>
            <li><a href="/terms" className="hover:text-yellow-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-lg font-bold text-white mb-3">Contact Us</h2>
          <form className="flex flex-col gap-3 text-sm">
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              name="user_email"
              required
            />
            <textarea
              placeholder="Your Message"
              className="px-3 py-2 rounded bg-gray-800 text-white h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              name="message"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black py-2 rounded font-bold hover:bg-yellow-500 transition-all duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div
        ref={copyrightRef}
        className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} HackNova 2k25. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
