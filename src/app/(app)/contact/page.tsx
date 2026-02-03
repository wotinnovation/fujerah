'use client'

import Link from 'next/link'
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  ChevronRight,
  Building2,
  Headphones,
  FileText,
  Globe
} from 'lucide-react'
import { useState } from 'react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    details: '+971 9 222 6700',
    description: 'Mon-Fri from 8am to 5pm',
    href: 'tel:+97192226700',
    color: 'bg-gradient-to-br from-red-600 via-red-700 to-red-800'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'info@fujairahairport.ae',
    description: 'We\'ll respond within 24 hours',
    href: 'mailto:info@fujairahairport.ae',
    color: 'bg-gradient-to-br from-red-600 via-red-700 to-red-800'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'Fujairah International Airport',
    description: 'Fujairah, United Arab Emirates',
    href: 'https://maps.google.com',
    color: 'bg-gradient-to-br from-red-600 via-red-700 to-red-800'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: 'Mon - Fri: 8:00 AM - 5:00 PM',
    description: 'Saturday - Sunday: Closed',
    href: '#',
    color: 'bg-gradient-to-br from-red-600 via-red-700 to-red-800'
  }
]

const departments = [
  {
    icon: Building2,
    title: 'Corporate Services',
    email: 'business@fujairahairport.ae',
    phone: '+971 9 222 6700',
    description: 'Business partnerships and corporate inquiries'
  },
  {
    icon: Headphones,
    title: 'Customer Service',
    email: 'customercare@fujairahairport.ae',
    phone: '+971 9 222 6701',
    description: 'General inquiries and passenger assistance'
  },
  {
    icon: FileText,
    title: 'Media & Press',
    email: 'media@fujairahairport.ae',
    phone: '+971 9 222 6702',
    description: 'Press releases and media inquiries'
  },
  {
    icon: Globe,
    title: 'Cargo Services',
    email: 'cargo@fujairahairport.ae',
    phone: '+971 9 222 6703',
    description: 'Freight and logistics services'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="relative overflow-hidden">
      <div className="relative container mt-10 mb-24 flex flex-col gap-y-16 lg:mb-28 lg:gap-y-20">
        
        {/* Hero Section */}
        <section className="relative rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative px-6 py-12 sm:px-8 md:py-16 lg:px-12 lg:py-20">
            <nav className="flex items-center gap-2 text-sm text-red-200 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Contact Us</span>
            </nav>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <span className="text-red-200 font-medium">Get in Touch</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  We're Here to Help
                </h1>
                
                <p className="text-lg sm:text-xl text-red-100 mb-8 leading-relaxed">
                  Have questions or need assistance? Our team at Fujairah International Airport 
                  is ready to support you. Reach out to us through any of our contact channels.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+97192226700"
                    className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a
                    href="mailto:info@fujairahairport.ae"
                    className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      className="p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-3">
                        <method.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-white mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-red-100 mb-1">{method.details}</p>
                      <p className="text-xs text-red-200">{method.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods - Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className={`${method.color} p-3 rounded-xl`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-neutral-900">{method.title}</h3>
              </div>
              <p className="text-sm font-medium text-neutral-900 mb-1">{method.details}</p>
              <p className="text-xs text-neutral-500">{method.description}</p>
            </a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
              <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-6 text-white">
                <div className="flex items-center gap-3">
                  <Send className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">Send Us a Message</h2>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="business">Business Partnership</option>
                      <option value="cargo">Cargo Services</option>
                      <option value="media">Media Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 via-red-700 to-rose-700 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-red-500/50 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                <p className="mt-4 text-xs text-neutral-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>

          {/* Departments Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
              <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-6 text-white">
                <h2 className="text-xl font-bold">Departments</h2>
              </div>
              
              <div className="p-4">
                {departments.map((dept, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl hover:bg-neutral-50 transition-colors border-b border-neutral-100 last:border-0"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-red-50 rounded-lg">
                        <dept.icon className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900 mb-1">{dept.title}</h3>
                        <p className="text-xs text-neutral-500 mb-2">{dept.description}</p>
                      </div>
                    </div>
                    <div className="space-y-1 ml-11">
                      <a 
                        href={`mailto:${dept.email}`}
                        className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700"
                      >
                        <Mail className="w-4 h-4" />
                        {dept.email}
                      </a>
                      <a 
                        href={`tel:${dept.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700"
                      >
                        <Phone className="w-4 h-4" />
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Need Immediate Help?</h3>
              <div className="space-y-3">
                <Link 
                  href="/faq"
                  className="flex items-center justify-between p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <span className="font-medium">FAQs</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/support"
                  className="flex items-center justify-between p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <span className="font-medium">Support Center</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/live-chat"
                  className="flex items-center justify-between p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <span className="font-medium">Live Chat</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
          <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-6 text-white">
            <div className="flex items-center gap-3">
              <MapPin className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Find Us</h2>
            </div>
          </div>
          
          <div className="aspect-video bg-neutral-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.002469171879!2d56.32410931500827!3d25.112219983954674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f3c3c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sFujairah%20International%20Airport!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
          
          <div className="p-6 grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-600 mt-1" />
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Address</h4>
                <p className="text-sm text-neutral-600">
                  Fujairah International Airport<br />
                  P.O. Box 8, Fujairah<br />
                  United Arab Emirates
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-red-600 mt-1" />
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Working Hours</h4>
                <p className="text-sm text-neutral-600">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-red-600 mt-1" />
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Contact Info</h4>
                <p className="text-sm text-neutral-600">
                  <a href="tel:+97192226700" className="hover:text-red-600">+971 9 222 6700</a><br />
                  <a href="mailto:info@fujairahairport.ae" className="hover:text-red-600">info@fujairahairport.ae</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}