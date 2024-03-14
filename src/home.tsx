import TopImg from "./topImg";
import Profiles from "./profiles";
import ImageSlider from "./imageSlider";
import IconOptions from "./iconOptions";
import ShoppingCarts from "./shoppingCarts";
import Footer from "./footer";
import Readings from "./readings";
import Discounts from "./discounts";
import ImagesSlides from "./imagesSlides";
import DigikalaSuggestions from "./digikalaSuggestions";
import DigiPlus from "./digiPlus";
import Categories from "./categories";
import { Outlet } from "react-router";
import { ShoppingCartProvider } from "./context/cartContext";

function Home() {
  return (
    <>
      <ShoppingCartProvider>
        <TopImg />
        <Profiles />
        <ImageSlider />
        <IconOptions />
        <Outlet />
        <ShoppingCarts />
      </ShoppingCartProvider>
      <Discounts />
      <ImagesSlides />
      <Categories />
      <DigikalaSuggestions />
      <DigiPlus />
      <Readings />
      <Footer />
    </>
  );
}

export default Home;
