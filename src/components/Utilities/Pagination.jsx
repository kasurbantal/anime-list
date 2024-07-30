const Pagination = ({ page, lastPage, setPage }) => {
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      <button
        className="transition-all hover:text-color-light"
        onClick={handlePrevPage}
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        className="transition-all hover:text-color-light"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
