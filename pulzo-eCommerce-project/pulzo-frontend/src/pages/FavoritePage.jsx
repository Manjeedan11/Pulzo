import FavoriteCard from "@/components/standalone/FavoriteCard";

function FavoritePage() {
  return (
    <section className="py-8 px-4 xl:px-16">
      <h2 className="text-4xl font-bold">My Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <FavoriteCard />
      </div>
    </section>
  );
}

export default FavoritePage;
