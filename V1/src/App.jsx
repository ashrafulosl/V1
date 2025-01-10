import React from 'react';
import Sidebar from './components/Sidebar';
import CourseViewer from './components/CourseViewer';

function App() {
  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <Sidebar />
      <CourseViewer />
    </div>
  );
}

export default App;

