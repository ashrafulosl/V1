import React from 'react';
import { Home, Book, MessageCircle, Users, TrendingUp, LogOut } from 'react-feather';

const SidebarItem = ({ Icon, text, active }) => (
  <li className={`flex items-center space-x-2 py-2 px-4 rounded cursor-pointer ${active ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}>
    <Icon className="h-5 w-5" />
    <span className="font-medium">{text}</span>
  </li>
);

function Sidebar() {
  return (
    <div className="w-64 bg-black text-white h-full flex flex-col">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-red-600">CourseHub</h1>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 px-2">
          <SidebarItem Icon={Home} text="Home" active />
          <SidebarItem Icon={Book} text="My Courses" />
          <SidebarItem Icon={MessageCircle} text="Discussions" />
          <SidebarItem Icon={Users} text="Study Groups" />
          <SidebarItem Icon={TrendingUp} text="Progress" />
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <SidebarItem Icon={LogOut} text="Sign out" />
      </div>
    </div>
  );
}

export default Sidebar;

