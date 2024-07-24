import Image from "next/image";
import Logo from "@/public/img/logo.svg";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Person2Icon from "@mui/icons-material/Person2";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";

const Index = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          {/* Logo */}
          <Image src={Logo} alt="Sport Market Logo" width={63} height={54} />
          <h1 className="ml-2 text-lg font-bold">Sport Market</h1>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:underline">
            Продукты
          </a>
          <a href="#" className="hover:underline">
            Контакты
          </a>
          <a href="#" className="hover:underline">
            Оплата и Доставка
          </a>
          <a href="#" className="hover:underline">
            Новости
          </a>
          <a href="#" className="hover:underline">
            О нас
          </a>
        </nav>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <LocalPhoneIcon />
            <span className="ml-2">+998 (93) 241-31-61</span>
          </div>
          <div className="flex items-center">
            <EmailIcon />
            <span className="ml-2">info@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="bg-white text-black py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Button variant="outlined" className=" px-4 py-2 rounded-md">
              Каталог
            </Button>
            <input
              type="text"
              placeholder="Поиск"
              className="ml-4 px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outlined">
              <Person2Icon
                sx={{
                  width: 25,
                  height: 25,
                  flexShrink: 0,
                  borderRadius: "3px",
                  backgroundColor: "#F2F2F2",
                }}
              />
            </Button>
            <Button variant="outlined">
              <FavoriteBorderIcon
                sx={{
                  width: 25,
                  height: 25,
                  flexShrink: 0,
                  borderRadius: "3px",
                  backgroundColor: "#F2F2F2",
                }}
              />
            </Button>
            <Button variant="outlined">
              <ShoppingCartIcon
                sx={{
                  width: 25,
                  height: 25,
                  borderRadius: "5px",
                  backgroundColor: "#F2F2F2",
                }}
              />{" "}
              Корзина
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
