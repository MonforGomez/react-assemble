import Finder from "../../components/finder/finder"; // Importas tu componente

function SearchPage() {
  return (
    <div className="search-page-container">
      {/* Solo llamas al Finder, que ya se encarga de toda la movida */}
      <Finder />
    </div>
  );
}

export default SearchPage;