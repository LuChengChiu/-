import nikeProduct1 from "../../assets/product_img/nike-product1.png";
import nikeProduct2 from "../../assets/product_img/nike-product2.png";
import nikeProduct3 from "../../assets/product_img/nike-product3.png";
import nikeProduct4 from "../../assets/product_img/nike-product4.png";
import heart from "../../assets/icons/Heart_sm.png";
export default function ProductCard() {
  const productList = [
    { name: "Nike Sportswear Club Fleece", price: 99, img: nikeProduct1 },
    {
      name: "Trail Running Jacket Nike Windrunner",
      price: 99,
      img: nikeProduct2,
    },
    { name: "Training Top Nike Sport Clash", price: 99, img: nikeProduct3 },
    {
      name: "Trail Running Jacket Nike Windrunner",
      price: 99,
      img: nikeProduct4,
    },
    { name: "Nike Sportswear Club Fleece", price: 99, img: nikeProduct1 },
    {
      name: "Trail Running Jacket Nike Windrunner",
      price: 99,
      img: nikeProduct2,
    },
    { name: "Training Top Nike Sport Clash", price: 99, img: nikeProduct3 },
    {
      name: "Trail Running Jacket Nike Windrunner",
      price: 99,
      img: nikeProduct4,
    },
  ];
  return (
    <>
      {productList.map((item) => {
        return (
          <div id="product-card" className="w-40">
            <div className="relative w-full">
              <img
                src={item.img}
                alt={`${item.name}_img`}
                className="w-40 h-52 rounded-lg15"
              />{" "}
              <img
                src={heart}
                alt="heart-icon"
                className="absolute top-3 right-3"
              />
              {/* <button className="absolute -top-2 right-0 w-5 h-5"></button> */}
            </div>
            <div className="flex flex-col mt-1.5 ">
              <span className="text-xs text-1 leading-4">{item.name}</span>
              <span className="text-sm title-1 leading-4 mt-0.5">
                ${item.price}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}
