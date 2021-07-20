const LanguageIcon = ({ devIcon, iconName }) => {
  return (
    <div className="h-20 w-20">
      <div className="flex items-center flex-col gap-1   justify-center">
        <div className="bg-gray-600 shadow p-3 rounded text-4xl">
          <i class={devIcon}></i>
        </div>
        <p className="font-semibold ">{iconName}</p>
      </div>
    </div>
  );
};

export default LanguageIcon;
