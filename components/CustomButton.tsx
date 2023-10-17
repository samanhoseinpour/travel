import Image from 'next/image';

type CustomButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'btn_dark_green';
};

const CustomButton = ({ type, title, icon, variant }: CustomButtonProps) => {
  return (
    <button
      type={type}
      className={`${variant} flexCenter gap-3 rounded-full border`}
    >
      {icon && <Image src={icon} alt="icon" width={24} height={24} />}
      <label>{title}</label>
    </button>
  );
};

export default CustomButton;
