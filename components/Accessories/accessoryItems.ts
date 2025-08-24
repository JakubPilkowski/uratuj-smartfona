export interface AccessoryItem {
  id: string;
  title: string;
  price: string;
  image: string;
  imageAlt: string;
}

const accessoryItems: AccessoryItem[] = [
  {
    id: "1",
    title: "Szkło hartowane 9D",
    price: "od 15 zł",
    image: "/szklo_9d.png",
    imageAlt: "Szkło hartowane 9D dla smartfona",
  },
  {
    id: "2",
    title: "Etui ochronne",
    price: "od 25 zł",
    image: "/etui_venus.png",
    imageAlt: "Etui ochronne dla smartfona",
  },
  {
    id: "3",
    title: "Słuchawki",
    price: "od 35 zł",
    image: "/sluchawki.png",
    imageAlt: "Słuchawki do smartfona",
  },
  {
    id: "4",
    title: "Ładowarka samochodowa",
    price: "od 20 zł",
    image: "/ladowarka_samochodow.png",
    imageAlt: "Ładowarka samochodowa",
  },
  {
    id: "5",
    title: "Ładowarka USB-C",
    price: "od 15 zł",
    image: "/ladowarka.png",
    imageAlt: "Ładowarka USB-C",
  },
  {
    id: "6",
    title: "Bateria Samsung",
    price: "od 80 zł",
    image: "/bateria_samsung.png",
    imageAlt: "Bateria Samsung",
  },
  {
    id: "7",
    title: "Guma jelly case",
    price: "od 30 zł",
    image: "/guma_jelly.png",
    imageAlt: "Guma jelly case",
  },
  {
    id: "8",
    title: "Uchwyt na szybę",
    price: "od 25 zł",
    image: "/uchwyt_na_szybe.png",
    imageAlt: "Uchwyt na szybę samochodu",
  },
];

export default accessoryItems;
