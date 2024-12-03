import { Element } from "react-scroll";
import clsx from "clsx";
import Button from "../components/Button.jsx";

const plans = [
  {
    id: 1,
    title: "Gold Plan",
    price: 799, // Price for the plan
    caption: "Perfect for Kanpur residents",
    features: [
      "Access to All Competitions, Talks, Panel Discussions and ChemExpo",
      "Access to Informals events (Pronight/Comedy Night)",
      "Allowed to participate in Industrial Hackathons",
      "Interaction with all IIT Kanpur Professors",
    ],
    icon: "/images/circle.svg",
    logo: "/images/plan-1.png",
  },
  {
    id: 2,
    title: "Premium Plan",
    price: 1499, // Price for the plan
    caption: "Perfect for non-Kanpur residents",
    features: [
      "3 Day campus Stay + Food",
      "Access to All Competitions, Talks, Panel Discussions and ChemExpo",
      "Access to Informals events (Pronight/Comedy Night)",
      "Allowed to participate in Industrial Hackathons",
      "Interaction with all IIT Kanpur Professors",
    ],
    icon: "/images/circle.svg",
    logo: "/images/plan-2.png",
  },
];

const Pricing = () => {
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto pb-20 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h2 className="text-center text-3xl font-bold pt-20">
              Choose Your Plan
            </h2>
          </div>

          {/* Pricing section */}
          <div className="flex justify-center gap-8 flex-wrap">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={clsx(
                  "relative w-full max-w-sm rounded-lg border-2 p-7 shadow-md transition-transform transform duration-300 ease-in-out",
                  "hover:scale-105 hover:shadow-lg"
                )}
              >
                {/* Plan Logo */}
                <div className="flex justify-center mb-6">
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className="h-20 w-20 object-contain"
                  />
                </div>

                {/* Plan Title */}
                <h3 className="text-center text-xl font-semibold mb-4">
                  {plan.title}
                </h3>

                {/* Plan Price */}
                <div className="text-center text-2xl font-bold text-p4 mb-3">
                  Rs. {plan.price}
                </div>

                {/* Plan Caption */}
                <p className="text-center text-gray-500 mb-6">{plan.caption}</p>

                {/* Plan Features */}
                <ul className="mb-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 transition-colors duration-200 hover:text-p1"
                    >
                      <img
                        src="/images/check.png"
                        alt="check"
                        className="h-5 w-5 object-contain"
                      />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>

                {/* Call to Action */}
                <div className="flex justify-center">
                  <Button
                    icon={plan.icon}
                    className="hover:bg-p1 hover:text-white transition-colors duration-300"
                  >
                    Register Here
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
