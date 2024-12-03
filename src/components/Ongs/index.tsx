/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import FoodBank from '../../assets/images/food_bank.png';
import Goodtruck from '../../assets/images/good_truck.png';
import Recicleiros from '../../assets/images/recicleiros.png';
import Ecotece from '../../assets/images/ecotece.png';
import EcoteceFull from '../../assets/images/ecotece_full.png';
import GoodTruckFull from '../../assets/images/good_truck_full.png';
import FoodBankFull from '../../assets/images/food_bank_full.png';
import RecicleirosFull from '../../assets/images/recicleiros_full.png';
import CarryPlant from '../../assets/images/carry_plant.png';
// @ts-ignore
import Modal from 'react-modal';

const ongsToBeDisplayed = [
  {
    image: FoodBank,
    title: 'Banco de Alimentos',
    description:
      'A ONG Banco de Alimentos atua desde 1998 auxiliando pessoas em situação de insegurança alimentar, o instituto tem como objetivo reduzir o desperdício de alimentos, combater a fome e a exclusão social, envolvendo cidadãos, empresas e indústrias alimentícias.',
    fullImage: FoodBankFull,

    fullDescription:
      'A ONG Banco de Alimentos atua desde 1998 auxiliando pessoas em situação de insegurança alimentar, o instituto tem como objetivo reduzir o desperdício de alimentos, combater a fome e a exclusão social, envolvendo cidadãos, empresas e indústrias alimentícias.',
  },
  {
    image: Goodtruck,
    title: 'GoodTruck',
    description:
      'A ONG GoodTruck atua desde 2016 tem como objetivo “levar comida de onde sobra, para onde falta”. Para tal objetivo, tem como missão reduzir o desperdício de alimentos no país com refeições e kits alimentares a comunidade vulneráveis brasileiras, por meio de parcerias com distribuidores e supermecados.',
    fullImage: GoodTruckFull,

    fullDescription:
      'A ONG GoodTruck atua desde 2016 tem como objetivo “levar comida de onde sobra, para onde falta”. Para tal objetivo, tem como missão reduzir o desperdício de alimentos no país com refeições e kits alimentares a comunidade vulneráveis brasileiras, por meio de parcerias com distribuidores e supermecados. Além disso, a organização busca promover a conscientização social através de experiências educacionais e ações de voluntariado, cultivando a empatia e impulsionando mudanças.',
  },
  {
    image: Ecotece,
    title: 'Ecotece',
    description:
      'O Ecotece atua desde 2005 promovendo a cultura de sustentabilidade na moda, e um vestir consciente. Esse instituto tem como missão transformar as práticas de produção e consumo, com intuito de tornar a moda mais ética, limpa e inclusiva.',
    fullImage: EcoteceFull,

    fullDescription:
      'O Ecotece atua desde 2005 promovendo a cultura de sustentabilidade na moda, e um vestir consciente. Esse instituto tem como missão transformar as práticas de produção e consumo, com intuito de tornar a moda mais ética, limpa e inclusiva. Essa ONG atua em soluções criativas na busca de novos caminhos para uma cadeia de moda mais sustentável. Além disso, o instituto desenvolve projeto em três áreas distintas: fortalecendo a cultura de sustentabilidade na moda, incentivando o vestir consciente e transformando as lógicas de produção e consumo.',
  },
  {
    image: Recicleiros,
    title: 'Recicleiros',
    description:
      'A ONG atua desde 2007 e tem como objetivo transformar vidas por meio de desenvolvimento social e econômico de trabalhadores em condição de vulnerabilidades. Visando diminuir o impacto do lixo no planeta, o instituto coloca em prática os conceitos de sustentabilidade e incentiva mudanças nos hábitos da sociedade.',
    fullImage: RecicleirosFull,

    fullDescription:
      'A ONG atua desde 2007 e tem como objetivo transformar vidas por meio de desenvolvimento social e econômico de trabalhadores em condição de vulnerbilidades. Visando diminuir o impacto do lixo do planeta, o instituto coloca em prática os conceitos de sustentabilidade e incentiva mudanças nos hábitos da sociedade, aplicando a gestão de resíduos como instrumento para gerar inclusão pelo trabalho, renda distribuída e benefícios ao meio ambiente.',
  },
];

interface IOngProps {
  image: string;
  title: string;
  description: string;
  fullImage: string;
  fullDescription: string;
}

export const Ongs: React.FC = () => {
  const [selectedOng, setSelectedOng] = useState<IOngProps>({} as IOngProps);
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="ongsMainContainer">
        <div
          style={{
            backgroundColor: '#D9EFDE',
            borderRadius: 40,
            padding: 72,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            columnGap: 128,
            marginBottom: 88,
          }}>
          <div>
            <span style={{ color: '#457461', fontSize: 72, fontWeight: 600 }}>
              O
            </span>
            <span style={{ color: '#43AD7C', fontSize: 72, fontWeight: 600 }}>
              N
            </span>
            <span style={{ color: '#457461', fontSize: 72, fontWeight: 600 }}>
              G
            </span>
            <span style={{ color: '#457461', fontSize: 72, fontWeight: 600 }}>
              s
            </span>
            <p className="ongsSummary">
              Nesta seção, apresentamos ONGs que estão trabalhando para promover
              um consumo mais sustentável, reduzir o desperdício, incentivar a
              reciclagem e proteger o meio ambiente para um futuro mais
              equilibrado. O ODS 12 (Consumo e Produção Responsáveis) é um
              compromisso global de transformar a maneira como produzimos e
              consumimos recursos, com o objetivo de minimizar o impacto
              negativo no planeta e nas futuras gerações
            </p>
          </div>
          <img src={CarryPlant} style={{ height: 380, width: 300 }} />
        </div>
        <section
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 50,
            flex: 1,
            marginBottom: 50,
          }}>
          {ongsToBeDisplayed.slice(0, 2).map(ong => (
            <div className="ongCard">
              <img src={ong.image} alt="" />
              <div className="ongCardTitleContainer">
                <span className="ongCardTitle">{ong.title}</span>
                <p className="ongCardDescription">{ong.description}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedOng(ong);
                  setIsOpen(true);
                }}
                style={{
                  display: 'flex',
                  borderRadius: 32,
                  backgroundColor: '#457461',
                  position: 'absolute',
                  right: 32,
                  bottom: 28,
                  height: 26,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                Saiba mais
              </button>
            </div>
          ))}
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 50,
            flex: 1,
          }}>
          {ongsToBeDisplayed.slice(2).map(ong => (
            <div className="ongCard">
              <img src={ong.image} alt="" />
              <div className="ongCardTitleContainer">
                <span className="ongCardTitle">{ong.title}</span>
                <p className="ongCardDescription">{ong.description}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedOng(ong);
                  setIsOpen(true);
                }}
                style={{
                  display: 'flex',
                  borderRadius: 32,
                  backgroundColor: '#457461',
                  position: 'absolute',
                  right: 32,
                  bottom: 28,
                  height: 26,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                Saiba mais
              </button>
            </div>
          ))}
        </section>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={() => {}}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        style={{
          overlay: {
            backgroundColor: 'rgba(1, 4, 4, 0.30)',
            backdropFilter: blur(),
          },
          content: {
            height: 500,
            width: 800,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 32,
            padding: 32,
            paddingTop: 80,
            paddingBottom: 80,
            backgroundColor: '#fff',
            alignSelf: 'center',
            columnGap: 32,
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img
            style={{
              height: 450,
              width: 450,
            }}
            src={selectedOng.fullImage}
            alt=""
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ color: 'black', fontSize: 14 }}>
              {selectedOng.title}
            </h3>
          </div>
          <p style={{ color: 'black', fontSize: 14 }}>
            {selectedOng.fullDescription}
          </p>
        </div>
      </Modal>
    </>
  );
};
