import Image from 'next/image';

import { CustomButton } from '.';

const GetApp = () => {
  return (
    <section className="flexCenter flex-col w-full pb-[100px]">
      <div className="get-app">
        <div className="flex flex-col flex-1 z-20 items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Ger for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex flex-col w-full gap-3 whitespace-nowrap xl:flex-row">
            <CustomButton
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
            />
            <CustomButton
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/phones.png"
            alt="phone"
            width={550}
            height={870}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
