import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/LyveCom_Black.png"
        alt="LyveCom"
        width={120}
        height={40}
        className="dark:invert"
        priority
      />
    </Link>
  );
};

export default Logo;
