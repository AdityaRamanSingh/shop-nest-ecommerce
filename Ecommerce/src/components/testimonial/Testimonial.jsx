import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="Testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://i.insider.com/56055b87dd0895cb7b8b4645?width=2400"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  "Shopping on ShopNest has been an absolute delight! The
                  variety of products, seamless navigation, and user-friendly
                  interface make it my go-to online shopping destination. I've
                  not only found fantastic deals and high-quality items but also
                  experienced exceptional customer service. Whether I'm shopping
                  for the latest fashion trends, electronics, or home
                  essentials, ShopNest has it all. Plus, their quick and
                  reliable delivery has made my online shopping experience truly
                  convenient. I highly recommend [Your E-commerce Website] to
                  anyone looking for a one-stop-shop for all their needs!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Elon Musk
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  CEO Tesla
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  "I can't express how satisfied I am with my shopping
                  experience on ShopNest. The website's intuitive design and
                  search functionality made it effortless to find the products I
                  needed. From the moment I placed my order, I was impressed by
                  the constant updates on my delivery's progress. It's evident
                  that customer satisfaction is a top priority for [Your
                  Website]. Plus, the quality of the items I received exceeded
                  my expectations. I've recommended ShopNest to all my friends
                  and family, and I'll definitely be a returning customer!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-yellow-400 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Avatar
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                ></p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt=""
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://picofme.io/_next/image?url=%2Fimg%2Fstep1_2x_gxiq0l.png&w=640&q=75"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  "As a loyal shopper on ShopNest, I can
                  confidently say that it's the best online shopping platform
                  I've come across. The extensive range of products and brands
                  available is remarkable. What sets ShopNest apart is the
                  personalized shopping experience. I receive tailored
                  recommendations based on my preferences, which has led me to
                  discover unique items I wouldn't have found elsewhere. The
                  convenience of shopping from home, coupled with [Your
                  Website]'s exceptional customer service, has made me a loyal
                  customer. Thank you for making online shopping so enjoyable!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Avatar2
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  UI/UX Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
