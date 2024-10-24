export const ContactCard = ({ icon: Icon, title, content }) => (
  <div className="flex flex-col items-center mb-4 gap-2 justify-around border border-lime-500 rounded-2xl p-4 bg-white w-full md:w-1/3">
    <span className="bg-lime-500 rounded-full p-3">{Icon}</span>
    <p className="text-lg md:text-xl text-green-900 font-bold">{title}</p>
    <span className="text-sm text-gray-600">{content}</span>
  </div>
);
