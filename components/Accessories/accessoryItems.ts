import szklo9d from "../../public/szklo_9d.png";
import etuiVenus from "../../public/etui_venus.png";
import sluchawki from "../../public/sluchawki.png";
import ladowarkaSamochodow from "../../public/ladowarka_samochodow.png";
import ladowarka from "../../public/ladowarka.png";
import bateriaSamsung from "../../public/bateria_samsung.png";
import gumaJelly from "../../public/guma_jelly.png";
import uchwytNaSzybe from "../../public/uchwyt_na_szybe.png";

export interface AccessoryItem {
  id: string;
  title: string;
  price: string;
  image: any; // StaticImageData type
  imageAlt: string;
}

const accessoryItems: AccessoryItem[] = [
  {
    id: "1",
    title: "Szkło hartowane 9D",
    price: "od 15 zł",
    image: szklo9d,
    imageAlt: "Szkło hartowane 9D dla smartfona",
  },
  {
    id: "2",
    title: "Etui ochronne",
    price: "od 25 zł",
    image: etuiVenus,
    imageAlt: "Etui ochronne dla smartfona",
  },
  {
    id: "3",
    title: "Słuchawki",
    price: "od 35 zł",
    image: sluchawki,
    imageAlt: "Słuchawki do smartfona",
  },
  {
    id: "4",
    title: "Ładowarka samochodowa",
    price: "od 20 zł",
    image: ladowarkaSamochodow,
    imageAlt: "Ładowarka samochodowa",
  },
  {
    id: "5",
    title: "Ładowarka USB-C",
    price: "od 15 zł",
    image: ladowarka,
    imageAlt: "Ładowarka USB-C",
  },
  {
    id: "6",
    title: "Bateria Samsung",
    price: "od 80 zł",
    image: bateriaSamsung,
    imageAlt: "Bateria Samsung",
  },
  {
    id: "7",
    title: "Guma jelly case",
    price: "od 30 zł",
    image: gumaJelly,
    imageAlt: "Guma jelly case",
  },
  {
    id: "8",
    title: "Uchwyt na szybę",
    price: "od 25 zł",
    image: uchwytNaSzybe,
    imageAlt: "Uchwyt na szybę samochodu",
  },
];

export default accessoryItems;
