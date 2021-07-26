const LanguageIcon = ({ devIcon, iconName }) => {
  return (
    <div className="h-20 w-20 md:h-25 md:w-25 ">
      <div className="flex items-center flex-col gap-1   justify-center">
        <div className="bg-sky-800 shadow-2xl p-4 rounded text-4xl">
          <i className={devIcon}></i>
        </div>
        <p className="font-semibold ">{iconName}</p>
      </div>
    </div>
  );
};

export default LanguageIcon;
