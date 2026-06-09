'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsFirstLoad(false), 0);
  }, []);

  const isProjectPage = pathname.startsWith('/project/');

  return (
    <motion.div
      key={pathname}
      initial={isFirstLoad ? { y: 0, opacity: 1 } : { y: isProjectPage ? '100vh' : '-100vh', opacity: 0.9 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 280,
        damping: 34,
        mass: 0.8,
      }}
      style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}
    >
      {children}
    </motion.div>
  );
}
