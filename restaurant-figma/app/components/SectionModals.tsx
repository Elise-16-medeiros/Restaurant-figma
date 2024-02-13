import ModalOfDesserts from "./modals/ModalOfDesserts";
import ModalOfDishes from "./modals/ModalOfDishes";
import ModalOfDrinks from "./modals/ModalOfDrinks";
import ModalOfPizza from "./modals/ModalOfPizza";


function SectionModals() {
  return (
    <section className="bg-[#292E36] h-[316px] p-5 mt-24">
      <div className="before:content[''] before:border-2 before:absolute before:w-[93px] before:border-[#E1B168] after:content-[''] after:border-2 after:w-[93px] after:border-[#E1B168] after:absolute">
        <h2 className="py-1 tracking-wide text-white uppercase">Our Menu</h2>
      </div>
      <div className="grid grid-cols-2 gap-8 place-content-center place-items-center h-64 md:flex justify-around items-center">
        <ModalOfDishes />
        <ModalOfDesserts />
        <ModalOfPizza />
        <ModalOfDrinks />
      </div>
    </section>
  );
}

export default SectionModals;
