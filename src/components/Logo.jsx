'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from "next-themes";

export const LogoImage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevents hydration issue

  return (
    <Link href="/">
      {theme === 'dark' ? (
        <Image src="/dark logo.png" width={120} height={120} alt="Usman Shouket" />
      ) : (
        <Image src="/logo.png" width={120} height={120} alt="Usman Shouket" />
      )}
    </Link>
  );
};
