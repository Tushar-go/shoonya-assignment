import { Banner,FilterTab,Card,NavBar } from "./components/index";
import { useEffect, useState } from "react";
import { useDataContext } from "./context/globalContext";


function App() {
  const { searchTerm, currentPage, setCurrentPage, totalPages, setTotalPages } =
    useDataContext();

  const [loading, setLoading] = useState(false);
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);

  useEffect(() => {
    fetchRetreats();
  }, []);

  const fetchRetreats = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`
      );
      const data = await response.json();
      setRetreats(data);
      setFilteredRetreats(data);
      setTotalPages(Math.ceil(data.length / 3)); // Set the total pages based on the length of the data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [searchTerm, currentPage]);

  const applyFilters = () => {
    let filtered = retreats;

    if (searchTerm) {
      filtered = filtered.filter((retreat) =>
        retreat.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredRetreats(filtered);
    setTotalPages(Math.ceil(filtered.length / 3));
  };

  const handleDateFilter = (year) => {
    let filtered = retreats;
    if (year === "2023" || year === "2024") {
      filtered = retreats.filter(
        (retreat) =>
          new Date(retreat.date * 1000).getFullYear().toString() === year
      );
    }
    setFilteredRetreats(filtered);
    setCurrentPage(1);
    setTotalPages(Math.ceil(filtered.length / 3));
  };

  const handleTypeFilter = (type) => {
    let filtered = retreats;
    if (type === "Signature" || type === "Standalone") {
      filtered = retreats.filter((retreat) => retreat.type === type);
    }
    setFilteredRetreats(filtered);
    setCurrentPage(1);
    setTotalPages(Math.ceil(filtered.length / 3));
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * 3;
    const endIndex = startIndex + 3;
    return filteredRetreats.slice(startIndex, endIndex);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="h-screen w-full bg-white">
      <NavBar />
      <Banner />
      <FilterTab
        handleTypeFilter={handleTypeFilter}
        handleDateFilter={handleDateFilter}
      />

      <div className="grid sm:grid-cols-3 gap-3 mx-4">
        {loading ? (
          <div className="flex justify-center items-center w-screen h-64">
            <div className="loader"></div>
          </div>
        ) : (
          getPaginatedData().map((retreat) => (
            <Card
              key={retreat.id}
              imglink={retreat.image}
              title={retreat.title}
              description={retreat.description}
              date={new Date(retreat.date * 1000).toLocaleDateString()}
              location={retreat.location}
              price={retreat.price}
            />
          ))
        )}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center my-4">
        <div className="flex">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-4 h-10 text-base text-white bg-[#1b3252] font-medium border border-gray-300 rounded-lg hover:bg-[#2d4d7a] disabled:bg-gray-200 disabled:text-gray-400"
          >
            Previous
          </button>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-4 h-10 ms-3 text-base text-white bg-[#1b3252] font-medium border border-gray-300 rounded-lg hover:bg-[#2d4d7a]  disabled:bg-gray-200 disabled:text-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}



export default App;
