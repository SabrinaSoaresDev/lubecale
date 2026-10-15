export const PRICE_PER_KG = 140;
export const WHATSAPP_RAW = "5527999466336";
export const WHATSAPP_DISPLAY = "(27) 99946-6336";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_RAW}`;
export const INSTAGRAM = "lubecale";
export const INSTAGRAM_LINK = "https://instagram.com/lubecale";

export const RECHEIOS = [
  "Abacaxi",
  "Ameixa",
  "Brigadeiro",
  "Coco",
  "Damasco",
  "Doce de leite",
  "Leite Ninho",
  "Limão siciliano",
  "Morango",
  "Nozes",
  "Pistache",
  "Quatro leites",
  "Frutas vermelhas",
];

export const COBERTURAS = [
  "Chocolate ao leite",
  "Chocolate meio amargo",
  "Chocolate branco",
  "Chantininho",
  "Buttercream",
];

export const kgFmt = (kg) => `${kg.toString().replace('.', ',')} kg`;
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  heroSmall:
    "https://images.unsplash.com/photo-1619073181529-93e12b4f9a29?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  about:
    "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  slice:
    "https://images.unsplash.com/photo-1548691572-e0ca2965dab7?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
};

export const brl = (v) => `R$ ${v.toFixed(2).replace(".", ",")}`;
export const slug = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");

export const PICKUP_INFO = {
  title: 'Retirada no local',
  short: 'Somente retirada — não fazemos entrega',
  long: 'Não realizamos entrega em domicílio. Todos os pedidos são retirados no nosso ateliê, com data e hora agendadas.',
};

export const HORARIOS = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00',
  '17:00', '18:00', '19:00',
];