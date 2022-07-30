import Link from "next/link";

const TitleLogo = () => {
  return (
    <>
      <Link href="/">
        <div className="relative z-20 h-28 sm:h-36 w-full p-5 cursor-pointer">
          <img
            src="/title_logo.svg"
            alt="Logo"
            className="block max-h-full m-auto"
          />
        </div>
      </Link>
    </>
  );
};

export default TitleLogo;
