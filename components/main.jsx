import Image from "next/image"; // Import Image from next/image
import Butsi from "@/public/img/Butsi_2.jpg";
import Sport from "@/public/img/Butsi_3.jpg";
import Bag from "@/public/img/butsi_1.webp";
import { Button } from "@mui/material";

const ProductPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 flex flex-col">
          <div className="relative">
            <Image
              src={Butsi}
              alt="Sport"
              layout="responsive"
              width={438}
              height={438}
              className="object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              774
            </div>
            <Button
              variant="contained"
              color="primary"
              className="absolute bottom-2 left-2 text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md"
            >
              Подробности
            </Button>
          </div>
          <h2 className="text-3xl font-bold mt-4">
            Бутсы Nike Phantom GT2 Elite FG
          </h2>
        </div>
        {/* Qo'shimcha mahsulotlar */}
        <div className="flex flex-col space-y-4">
          <div className="relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <Image
              src={Sport}
              alt="Sport"
              layout="responsive"
              width={400}
              height={200}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="bg-gray-100 text-black text-lg font-bold mt-2 mb-1 p-2 rounded-md">
                Adidas champions league 2021 Final
              </h3>
              <p className="text-red-500 line-through text-lg">220 000 uzs</p>
              <p className="text-green-500 text-2xl font-semibold">
                160 000 uzs
              </p>
              <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Акция
              </div>
            </div>
          </div>
          <div className="relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <Image
              src={Bag}
              alt="Bag"
              layout="responsive"
              width={400}
              height={200}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="bg-gray-100 text-black text-lg font-bold mt-2 mb-1 p-2 rounded-md">
                Adidas champions league 2021 Final
              </h3>
              <p className="text-green-500 text-2xl font-semibold">
                485 000 uzs
              </p>
              <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Новый
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
          {"<"}
        </button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
