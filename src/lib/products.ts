import scooter1 from "@/assets/fleet-scooter-1.jpg";
import scooter2 from "@/assets/fleet-scooter-2.jpg";
import auto from "@/assets/fleet-auto.jpg";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: "two" | "three";
  price: string;
  priceNum: number;
  image: string;
  colors: { name: string; hex: string }[];
  specs: { range: string; topSpeed: string; charge: string };
  features: string[];
};

export const products: Product[] = [
  {
    slug: "volt-x",
    name: "VOLT X",
    tagline: "The everyday workhorse.",
    category: "two",
    price: "₹89,999",
    priceNum: 89999,
    image: scooter1,
    colors: [
      { name: "Midnight", hex: "#0A0A0A" },
      { name: "Cream", hex: "#F5F0E8" },
      { name: "Volt", hex: "#00E676" },
    ],
    specs: { range: "150KM", topSpeed: "75KMPH", charge: "3HRS" },
    features: ["Fast Charge", "Disc Brakes", "LED Display"],
  },
  {
    slug: "raja-rs",
    name: "RAJA RS",
    tagline: "Built for the long road.",
    category: "two",
    price: "₹1,24,999",
    priceNum: 124999,
    image: scooter2,
    colors: [
      { name: "Steel", hex: "#52525B" },
      { name: "Volt", hex: "#00E676" },
      { name: "Ink", hex: "#0A0A0A" },
    ],
    specs: { range: "180KM", topSpeed: "95KMPH", charge: "4HRS" },
    features: ["Sport Mode", "ABS", "Digital Cluster"],
  },
  {
    slug: "karya-3",
    name: "KARYA 3",
    tagline: "Three wheels. One mission.",
    category: "three",
    price: "₹2,49,999",
    priceNum: 249999,
    image: auto,
    colors: [
      { name: "Pita", hex: "#F5C518" },
      { name: "Ink", hex: "#0A0A0A" },
      { name: "Cream", hex: "#F5F0E8" },
    ],
    specs: { range: "120KM", topSpeed: "55KMPH", charge: "5HRS" },
    features: ["Load 500KG", "Swap Battery", "Cabin Roof"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
