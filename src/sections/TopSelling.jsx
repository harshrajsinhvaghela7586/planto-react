import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const TopSelling = () => {
  return (
    <section className="px-5 sm:px-8 lg:px-14 py-24">

      <SectionTitle title="Our Top Selling" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}

      </div>

    </section>
  );
};

export default TopSelling;