import Link from 'next/link';
import Image from 'next/image';

import { NAV_LINKS } from '@/constants.index';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative py-5 z-30">
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="logo"
          width={74}
          height={29}
          className="object-contain"
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <CustomButton
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="lg:hidden cursor-pointer inline-block"
      />
    </nav>
  );
};

export default Navbar;
