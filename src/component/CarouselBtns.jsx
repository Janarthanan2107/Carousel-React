const CarouselBtns = ({ previous, next }) => {
  return (
    <div className="flex justify-between mt-10 absolute top-2/4 w-full">
      <button
        className="button cursor-pointer -ml-7 font-semibold text-[20px] hover:-translate-y-1"
        onClick={previous}
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button
        className="button cursor-pointer -mr-7 font-semibold text-[20px] hover:-translate-y-1"
        onClick={next}
      >
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default CarouselBtns;
