
import React from 'react';

export default function Home() {
  return (
    <main className='mx-auto mx-3xl sn:px-6 max-w-full'>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
            This website is going to maintence
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-md mx-auto">
            Stay tuned!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-16 h-1 bg-slate-300 rounded-full"></div>
        </div>

        <div className="pt-8">
          <div className="inline-flex items-center space-x-2 text-slate-500">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Coming soon</span>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}
