import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, Users, CreditCard, Activity, Bell } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Total Users', value: '1,284', icon: <Users className="w-5 h-5 text-accent-blue" />, trend: '+12.5%' },
    { label: 'Active Tasks', value: '24', icon: <Activity className="w-5 h-5 text-accent-purple" />, trend: '+4.2%' },
    { label: 'Total Revenue', value: '$45,210', icon: <CreditCard className="w-5 h-5 text-pink-500" />, trend: '+18.7%' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-bold mb-2">Welcome back, <span className="gradient-text">{user?.username}</span>!</h1>
            <div className="flex items-center gap-3">
              <p className="text-gray-400 text-lg">Here's what's happening with your projects today.</p>
              {user?.referralCode && (
                <span className="px-3 py-1 bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-bold rounded-full uppercase tracking-wider">
                  Partner Code: {user.referralCode}
                </span>
              )}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <button className="glass p-3 rounded-2xl relative hover:border-white/20 transition-all">
              <Bell className="w-6 h-6 text-gray-400" />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-accent-blue rounded-full border-2 border-primary" />
            </button>
            <button className="btn-primary flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5" /> New Project
            </button>
          </motion.div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[2rem] hover:border-white/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                  {stat.icon}
                </div>
                <span className="text-sm font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full">{stat.trend}</span>
              </div>
              <p className="text-gray-400 font-medium mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Placeholder Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-[2rem] p-10 min-h-[400px] border-dashed border-2 border-white/5 flex flex-col items-center justify-center text-center"
        >
          <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6">
            <LayoutDashboard className="w-10 h-10 text-gray-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No projects active</h2>
          <p className="text-gray-400 max-w-sm mb-8">Start your first project to see detailed analytics and management tools here.</p>
          <button className="btn-secondary">Learn more about our services</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
