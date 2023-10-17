import Image from 'next/image';

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="max-container padding-container w-full pb-24">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          loading="lazy"
        />
        <p className="text-green-50 uppercase regular-18 -mt-1 mb-3">
          we are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guid you to Easy Path
          </h2>
          <p className="text-gray-30 regular-16 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>
      <div className="max-container flexCenter relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
            loading="lazy"
          />
          <div className="flexBetween flex-col">
            <div className="flex flex-col w-full">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Telegraph Cove Marina & RV Park</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="regular-16 text-gray-20">Start Tracl</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Salish Seaside RV Resort and Marina
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
