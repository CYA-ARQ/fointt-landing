import {
  Camera,
  CircleDollarSign,
  ImagePlus,
  MapPin,
  MessageCircle,
  Phone,
  Search,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { assetPath } from "./assetPath";

export type IconCard = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const PHONE_DISPLAY = "953 674 347";
export const PHONE_TEL = "+51953674347";
export const CONTACT_WHATSAPP_URL =
  "https://wa.me/51953674347?text=Hola%20fointt%2C%20quiero%20reservar%20un%20point";
export const CONTACT_CALL_URL = `tel:${PHONE_TEL}`;

export const navLinks = [
  { label: "explorar", href: "#explorar" },
  { label: "registrar evento", href: "#registro" },
  { label: "contacto", href: "#contacto" },
];

export const steps: IconCard[] = [
  {
    title: "explora fointt",
    text: "mira categorías, ideas y tipos de points para encontrar el que calza con tu plan.",
    icon: Search,
  },
  {
    title: "registra tu evento",
    text: "déjanos fecha, zona, cantidad de personas y el estilo que quieres.",
    icon: ImagePlus,
  },
  {
    title: "te contactamos",
    text: "la reserva se coordina por llamada directa o por WhatsApp, sin pasos de más.",
    icon: Phone,
  },
];

export const spaceTypes = [
  { name: "previas", image: assetPath("assets/explore/previas.png") },
  { name: "post office", image: assetPath("assets/explore/post-office.jpg") },
  { name: "eventos", image: assetPath("assets/explore/eventos.jpg") },
  { name: "studios creativos", image: assetPath("assets/explore/studios-creativos.jpg") },
  { name: "fiestas", image: assetPath("assets/explore/fiestas.jpg") },
  { name: "pichangas", image: assetPath("assets/explore/pichangas.jpeg") },
  { name: "galas", image: assetPath("assets/explore/galas.jpg") },
  { name: "bodas", image: assetPath("assets/explore/bodas.avif") },
  { name: "restaurantes", image: assetPath("assets/explore/restaurantes.jpg") },
  { name: "cafeterías", image: assetPath("assets/explore/cafeterias.jpg") },
  { name: "rooftops", image: assetPath("assets/explore/rooftops.jpg") },
  { name: "salones", image: assetPath("assets/explore/salones.jpg") },
  { name: "canchas", image: assetPath("assets/explore/canchas.jpg") },
  { name: "terrazas", image: assetPath("assets/explore/terrazas.jpg") },
  { name: "espacios para reuniones", image: assetPath("assets/explore/reuniones.jpg") },
];

export const formSpaceTypes = [
  "previas",
  "eventos",
  "fiestas",
  "pichangas",
  "bodas",
  "galas",
  "restaurantes",
  "cafeterías",
  "rooftops",
  "salones",
  "canchas",
  "studios creativos",
];

export const contactLinks = [
  { label: "chatea con nosotros", href: CONTACT_WHATSAPP_URL },
  { label: "Llamame!", href: CONTACT_CALL_URL },
];

export const featureHighlights = [
  { label: "ubicación", icon: MapPin },
  { label: "precio", icon: CircleDollarSign },
  { label: "fotos", icon: Camera },
  { label: "contacto", icon: MessageCircle },
];
