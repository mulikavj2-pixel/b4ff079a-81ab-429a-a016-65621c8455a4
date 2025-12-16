"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardEight from '@/components/sections/testimonial/TestimonialCardEight';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="grid"
      cardStyle="solid-bordered"
      primaryButtonStyle="outline"
      secondaryButtonStyle="outline"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "Hours", id: "hours" }
          ]}
          brandName="Brew Haven"
          bottomLeftText="Coffee sourced ethically"
          bottomRightText="hello@brewhaven.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Welcome to Brew Haven"
          description="Experience the finest handcrafted coffee in a warm, inviting atmosphere. Every cup tells a story."
          tag="Premium Coffee"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894426028-6z4xflrg.jpg",
              imageAlt: "Freshly brewed espresso with latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894427624-0t2i16wu.jpg",
              imageAlt: "Professional espresso machine in coffee shop"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894429189-xnv3scg3.jpg",
              imageAlt: "Barista pouring coffee with precision"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894430604-1z7s2s9e.jpg",
              imageAlt: "Warm and inviting coffee shop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894431897-3q30l8wz.jpg",
              imageAlt: "Artisanal roasted coffee beans"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894433071-01hxlswi.jpg",
              imageAlt: "Perfect cappuccino on wooden table"
            }
          ]}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Visit Us", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Our Coffee Story"
          description="Since 2015, Brew Haven has been dedicated to sourcing the finest coffee beans from sustainable farms around the world. We believe in ethical practices, quality roasting, and the art of perfect espresso. Every visit is an invitation to slow down and savor the moment."
          tag="About Us"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894434642-dpumrt89.jpg"
          imageAlt="Cozy coffee shop interior with natural lighting"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Our Menu"
          description="Explore our carefully crafted menu of espresso drinks, single-origin brews, and seasonal favorites."
          tag="Coffee Selection"
          products={[
            {
              id: "1",
              name: "Single Origin Espresso",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894436219-y39b181t.jpg",
              imageAlt: "Single origin espresso shot",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Cappuccino",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894437569-sicy4n0v.jpg",
              imageAlt: "Cappuccino with latte art",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Americano",
              price: "$3.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894438827-7zynq1nc.jpg",
              imageAlt: "Americano black coffee",
              initialQuantity: 1
            },
            {
              id: "4",
              name: "Cold Brew",
              price: "$4.25",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894440027-116bxkhb.jpg",
              imageAlt: "Cold brew iced coffee",
              initialQuantity: 1
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEight
          title="What Our Customers Say"
          description="Join our community of coffee lovers who visit us daily for the perfect cup and warm atmosphere."
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Regular Customer",
              company: "Downtown Office",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894441882-ksf44d36.jpg",
              imageAlt: "Sarah Johnson smiling"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Coffee Enthusiast",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894443638-zksgndyo.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Writer",
              company: "Freelancer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894445136-ww4lz8pe.jpg",
              imageAlt: "Emily Rodriguez smiling"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Morning Regular",
              company: "Fitness Coach",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894446808-n3tkfo9t.jpg",
              imageAlt: "David Kim portrait"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about visiting Brew Haven"
          faqs={[
            {
              id: "1",
              title: "What are your hours of operation?",
              content: "We are open Monday through Friday 6 AM - 7 PM, Saturday 7 AM - 8 PM, and Sunday 8 AM - 6 PM."
            },
            {
              id: "2",
              title: "Do you offer WiFi for remote work?",
              content: "Yes! We offer free high-speed WiFi and comfortable seating perfect for working or studying."
            },
            {
              id: "3",
              title: "Where do your coffee beans come from?",
              content: "We source beans from fair-trade farms in Ethiopia, Colombia, and Costa Rica, ensuring ethical and sustainable practices."
            },
            {
              id: "4",
              title: "Can I customize my drink?",
              content: "Absolutely! Our baristas love creating custom drinks. Just let us know your preferences and we'll craft the perfect cup."
            },
            {
              id: "5",
              title: "Do you have dairy-free milk options?",
              content: "Yes, we offer oat, almond, soy, and coconut milk alternatives for all our drinks."
            },
            {
              id: "6",
              title: "Is there parking available?",
              content: "We have a dedicated lot behind the shop with 15 parking spaces, and street parking is available on Main Street."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Have questions about our coffee or want to reserve a table? Reach out to us and we'll respond within 24 hours."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your inquiry or reservation request...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765894448910-m6jnmbfk.jpg"
          imageAlt="Brew Haven coffee shop interior"
          mediaPosition="right"
          buttonText="Send Message"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Brew Haven"
          columns={[
            {
              title: "Location",
              items: [
                { label: "123 Main Street, Downtown", href: "#" },
                { label: "Phone: (555) 123-4567", href: "#" }
              ]
            },
            {
              title: "Hours",
              items: [
                { label: "Mon-Fri: 6 AM - 7 PM", href: "#" },
                { label: "Sat: 7 AM - 8 PM", href: "#" },
                { label: "Sun: 8 AM - 6 PM", href: "#" }
              ]
            },
            {
              title: "Menu",
              items: [
                { label: "Espresso Drinks", href: "#menu" },
                { label: "Cold Brew", href: "#menu" },
                { label: "Pastries", href: "#" }
              ]
            },
            {
              title: "Follow Us",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" }
              ]
            }
          ]}
          copyrightText="© 2025 Brew Haven Coffee Shop. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}