import FavoriteCard from "@/components/standalone/FavoriteCard";

function FavoritePage() {
  return (
    <section className="py-8 px-4 xl:px-16">
      <h2 className="text-4xl font-bold">My Favorites</h2>
      <div className="flex flex-wrap gap-6 mt-5">
        <FavoriteCard />
      </div>
    </section>
  );
}

export default FavoritePage;
