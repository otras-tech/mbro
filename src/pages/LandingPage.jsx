import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Shield, Zap, Code, MousePointer2 } from 'lucide-react';

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-accent-blue/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-accent-purple/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent-blue/20 text-accent-blue text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4" />
            <span>Next-Gen Digital Agency</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
          >
            Maawabro <span className="gradient-text">IT Solutions</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 mb-12 leading-relaxed"
          >
            Building Smart Digital Solutions for the modern era. We transform complex problems into elegant software experiences using cutting-edge technology.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/signup" className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/login" className="btn-secondary text-lg px-8 py-4">
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: <Code className="w-6 h-6 text-accent-blue" />, title: "Custom Software", desc: "Tailored solutions built with React, Node, and Cloud architecture." },
            { icon: <Box className="w-6 h-6 text-accent-purple" />, title: "UI/UX Design", desc: "Premium, user-centric designs that convert and engage your audience." },
            { icon: <Shield className="w-6 h-6 text-pink-500" />, title: "Secure Scale", desc: "Enterprise-grade security and scalable infrastructure as standard." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="glass p-8 rounded-3xl hover:border-accent-blue/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
