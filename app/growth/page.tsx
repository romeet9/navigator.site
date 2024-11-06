"use client";

import React from 'react';
import Grid from '@/components/ui/grid';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/ui/breadcrumbs';

export default function GrowthPage() {
  const crumbs = [
    { label: 'MY GROWTH', href: '/growth' }
  ];

  return (
    <main 
      className="w-full mx-auto"
      style={{
        maxWidth: 'calc(40.7rem + 6rem)',
        padding: '12vh 3rem 4vh',
      }}
    >
      {/* Breadcrumbs Section */}
      <div className="mb-8">
        <Breadcrumbs crumbs={crumbs} />
      </div>

      {/* Grid Section */}
      <div className="w-full flex justify-center mx-auto">
        <motion.div
          layoutId="expandingGrid"
          initial={{ 
            width: '28.375rem',
            height: '20.25rem' 
          }}
          animate={{ 
            width: '40.7rem',
            height: '32.625rem'
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
          style={{
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div 
            style={{
              position: 'absolute',
            }}
            layoutId="gridInner"
          >
            <Grid rows={8} cols={10} />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
