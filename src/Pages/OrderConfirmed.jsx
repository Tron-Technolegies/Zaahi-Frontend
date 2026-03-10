import Review from "./Review";

const OrderConfirmed = () => {
  return (
    <>
      <div className=" relative min-h-screen">
        <div className="blur-md">
          <Review />
        </div>
        <div className="absolute inset-0 flex justify-center pt-60">
          <div className="bg-gray-700 text-white p-5 h-[120px]">
            <p className=" font-medium pb-4">Order Confirmed</p>
            <h1 className="text-xs font-extralight">
              Thank you for your purchase.
              <br /> You will recieve a confirmation email shortly.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmed;
