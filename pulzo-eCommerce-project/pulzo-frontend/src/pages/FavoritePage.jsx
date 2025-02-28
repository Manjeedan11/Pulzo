import FavoriteCard from "@/components/standalone/FavoriteCard";

function FavoritePage() {
  return (
    <section className="py-8 px-4 xl:px-16 mt-32">
      <div className="mb-10">
        <h2 className="text-4xl font-bold font-poppins">My Favorites</h2>
      </div>
      <div>
        <FavoriteCard />
      </div>
    </section>
  );
}

export default FavoritePage;
