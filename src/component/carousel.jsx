const Carousel = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <article
      className="flex max-w-xl flex-col items-start justify-between p-3"
      key={id}
    >
      <div className="w-full min-h-[250px] flex justify-center items-center py-3 rounded-2xl shadow-lg cursor-pointer">
        <img src={image} alt={title} className="w-[35%] h-auto object-cover" />
      </div>
      <div className="mt-5 text-xs">
        <p className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 shadow cursor-pointer">
          {category}
        </p>
      </div>
      <div className="group">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href="#">{title}</a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
      <div className="w-full mt-8 flex justify-between items-center gap-x-4 border-b border-gray-300 pb-3 lg:border-b-0 lg:pb-0">
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">${price}</p>
        </div>
        <div className="text-sm leading-6 flex items-center">
          <p className="text-xs">In stock : </p>
          <p className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
            {rating.count}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Carousel;
