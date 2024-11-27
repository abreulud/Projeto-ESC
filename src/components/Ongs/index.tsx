import React from 'react';
import FoodBank from '../../assets/images/food_bank.png';
import Goodtruck from '../../assets/images/good_truck.png';
import Recicleiros from '../../assets/images/recicleiros.png';
import Ecotece from '../../assets/images/ecotece.png';

const ongsToBeDisplayed = [
  {
    image: FoodBank,
    title: 'Banco de Alimentos',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quam fugiat, facilis quae reprehenderit sequi pariatur saepe vero. Assumenda odit dolorum esse quae quo hic quod incidunt, dolore velit repudiandae.',
  },
  {
    image: Goodtruck,
    title: 'GoodTruck',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quam fugiat, facilis quae reprehenderit sequi pariatur saepe vero. Assumenda odit dolorum esse quae quo hic quod incidunt, dolore velit repudiandae.',
  },
  {
    image: Ecotece,
    title: 'Ecotece',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quam fugiat, facilis quae reprehenderit sequi pariatur saepe vero. Assumenda odit dolorum esse quae quo hic quod incidunt, dolore velit repudiandae.',
  },
  {
    image: Recicleiros,
    title: 'Recicleiros',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quam fugiat, facilis quae reprehenderit sequi pariatur saepe vero. Assumenda odit dolorum esse quae quo hic quod incidunt, dolore velit repudiandae.',
  },
];

export const Ongs: React.FC = () => {
  return (
    <div className="ongsMainContainer">
      <div>
        <span style={{ color: '#457461', fontSize: 96, fontWeight: 600 }}>
          O
        </span>
        <span style={{ color: '#43AD7C', fontSize: 96, fontWeight: 600 }}>
          N
        </span>
        <span style={{ color: '#457461', fontSize: 96, fontWeight: 600 }}>
          G
        </span>
        <span style={{ color: '#457461', fontSize: 96, fontWeight: 600 }}>
          s
        </span>
      </div>
      <p className="ongsSummary">
        Nesta seção, apresentamos ONGs que estão trabalhando para promover
        <br />
        um consumo mais sustentável, reduzir o desperdício, incentivar a<br />
        reciclagem e proteger o meio ambiente para um futuro mais equilibrado. O
        <br />
        ODS 12 (Consumo e Produção Responsáveis) é um compromisso global de
        <br />
        transformar a maneira como produzimos e consumimos recursos, com o<br />
        objetivo de minimizar o impacto negativo no planeta e nas futuras
        gerações
      </p>
      <div className="gridContainer">
        {ongsToBeDisplayed.map(ong => (
          <div className="ongCard">
            <img src={ong.image} alt="" />
            <div className="ongCardTitleContainer">
              <span className="ongCardTitle">{ong.title}</span>
              <p className="ongCardDescription">{ong.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
