const CarouselBtns = ({ previous, next }) => {
  return (
    <div className="flex justify-between mt-10 absolute top-2/4 w-full">
      <button
        className="button cursor-pointer -ml-3 font-semibold text-[15px] hover:-translate-y-1 bg-slate-100 rounded-[50%] shadow-md w-6 h-6"
        onClick={previous}
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button
        className="button cursor-pointer -mr-3 font-semibold text-[15px] hover:-translate-y-1 bg-slate-100 rounded-[50%] shadow-md w-6 h-6"
        onClick={next}
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default CarouselBtns;
