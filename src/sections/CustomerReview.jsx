import SectionTitle from "../components/SectionTitle";
import ReviewCard from "../components/ReviewCard";

const CustomerReview = () => {
  return (
    <section className="px-6 lg:px-14 py-24">

      <SectionTitle title="Customer Review" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        <ReviewCard
          image="https://randomuser.me/api/portraits/men/32.jpg"
          name="Max Ravale"
        />

        <ReviewCard
          image="https://randomuser.me/api/portraits/women/44.jpg"
          name="Venely K"
        />

        <ReviewCard
          image="https://randomuser.me/api/portraits/women/68.jpg"
          name="Lili Thakur"
        />

      </div>

    </section>
  );
};

export default CustomerReview;