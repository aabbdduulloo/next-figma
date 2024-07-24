"use client";

import React from "react";
import Image from "next/image";
import CatalogImg1 from "@/public/img/pngwing 3.png";
import CatalogImg2 from "@/public/img/pngwing 4.png";
import CatalogImg3 from "@/public/img/pngwing 6.png";
import CatalogImg4 from "@/public/img/pngwing 7.png";
import CatalogImg5 from "@/public/img/pngwing 9.png";
import CatalogImg6 from "@/public/img/pngwing 10.png";

const Index = () => {
  return (
    <div className="catalog">
      <h1 className="catalog-title">Каталог</h1>
      <div className="catalog-items">
        <div className="catalog-item">
          <Image src={CatalogImg1} alt="Тренажеры" />
          <h2 className="catalog-item-title">Тренажеры</h2>
        </div>
        <div className="catalog-item">
          <Image src={CatalogImg2} alt="Мячи" />
          <h2 className="catalog-item-title">Мячи</h2>
        </div>
        <div className="catalog-item">
          <Image src={CatalogImg3} alt="Спортивные обуви" />
          <h2 className="catalog-item-title">Спортивные обуви</h2>
        </div>
        <div className="catalog-item">
          <Image src={CatalogImg4} alt="Спортивные одежды" />
          <h2 className="catalog-item-title">Спортивные одежды</h2>
        </div>
        <div className="catalog-item">
          <Image src={CatalogImg5} alt="Водный спорт" />
          <h2 className="catalog-item-title">Водный спорт</h2>
        </div>
        <div className="catalog-item">
          <Image src={CatalogImg6} alt="Горный спорт" />
          <h2 className="catalog-item-title">Горный спорт</h2>
        </div>
      </div>
      <style jsx>{`
        .catalog {
          text-align: center;
          padding: 20px;
        }
        .catalog-title {
          font-size: 2em;
          margin-bottom: 20px;
        }
        .catalog-items {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .catalog-item {
          width: 187px;
          height: 247px;
          flex-shrink: 0;
          border-radius: 8px;
          opacity: 0.7;
          background: #c2bce8;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 10px;
          padding: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .catalog-item:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          opacity: 1;
          cursor: pointer;
        }
        .catalog-item-title {
          margin-top: 10px;
          color: #000;
          font-family: "Fira Sans";
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      `}</style>
    </div>
  );
};

export default Index;
