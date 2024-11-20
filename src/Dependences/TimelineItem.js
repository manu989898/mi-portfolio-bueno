const TimelineItem = ({ year, title, description, icon: Icon, isLeft }) => (
    <div className={`w-full md:w-1/2 ${isLeft ? 'pr-8' : 'pl-8'}`}>
<div className="glass p-6 rounded-lg shadow bg-white dark:bg-gray-800 h-full overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-lg hover:bg-gray-50 hover:dark:bg-gray-700 transform hover:scale-[1.02] max-w-[97%] mx-auto relative z-10">
        <div className="flex items-center mb-2">
          <Icon size={18} className="mr-2 text-blue-500" />
          <h3 className="font-bold text-lg text-gray-800 dark:text-white">{year}</h3>
        </div>
        <h4 className="text-md font-semibold mb-1 text-gray-700 dark:text-gray-200">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
  
export default TimelineItem;