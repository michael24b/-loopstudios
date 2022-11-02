import img1d from "../../images/desktop/image-deep-earth.jpg";
import img1m from "../../images/mobile/image-deep-earth.jpg";
import img2d from "../../images/desktop/image-night-arcade.jpg";
import img2m from "../../images/mobile/image-night-arcade.jpg";
import img3d from "../../images/desktop/image-soccer-team.jpg";
import img3m from "../../images/mobile/image-soccer-team.jpg";
import img4d from "../../images/desktop/image-grid.jpg";
import img4m from "../../images/mobile/image-grid.jpg";
import img5d from "../../images/desktop/image-from-above.jpg";
import img5m from "../../images/mobile/image-from-above.jpg";
import img6d from "../../images/desktop/image-pocket-borealis.jpg";
import img6m from "../../images/mobile/image-pocket-borealis.jpg";
import img7d from "../../images/desktop/image-curiosity.jpg";
import img7m from "../../images/mobile/image-curiosity.jpg";
import img8d from "../../images/desktop/image-fisheye.jpg";
import img8m from "../../images/mobile/image-fisheye.jpg";
import Item from "./Item";

const Creations = () => {
  return (
    <section id="creations">
      {/* Creations Container */}
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900  md:mx-auto">
        {/* Creations Header */}
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>

          <button className="hidden btn md:block">See All</button>
        </div>

        {/* Item Container */}
        <div className="item-container">
          {/* Items */}
          <Item title="Deep Earth" imgd={img1d} imgm={img1m} />
          <Item title="Night Arcade" imgd={img2d} imgm={img2m} />
          <Item title="Soccer Team Vr" imgd={img3d} imgm={img3m} />
          <Item title="The Grid" imgd={img4d} imgm={img4m} />
          <Item title="From up Above Vr" imgd={img5d} imgm={img5m} />
          <Item title="Pocket Borealis" imgd={img6d} imgm={img6m} />
          <Item title="The Curiosity" imgd={img7d} imgm={img7m} />
          <Item title="Make it Fisheye" imgd={img8d} imgm={img8m} />
        </div>

        {/* Bottom Button Container */}
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  );
};
export default Creations;

// .item-container {
//     @apply flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:spacex-8;
//   }
