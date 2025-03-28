export interface MenuItem {
  id: number;
  name: string;
  short_description: string;
  price: string;
  price_with_discount: string;
  discount: string;
  images: { image_url: string }[];
  variants: {
    id: number;
    variant_name: string;
    stock: number;
    price_modifier: string;
    status: string;
  }[];
  category: 'daily' | 'carta' | 'special';
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Menú del Día - Ejecutivo",
    short_description: "Sopa del día, segundo a elegir entre 3 opciones, postre y bebida",
    price: "15.00",
    price_with_discount: "12.00",
    discount: "20",
    images: [{ image_url: "/assets/menu-ejecutivo.jpg" }],
    variants: [
      {
        id: 1,
        variant_name: "Opción 1 - Lomo Saltado",
        stock: 20,
        price_modifier: "0.00",
        status: "active"
      },
      {
        id: 2,
        variant_name: "Opción 2 - Pescado a la Plancha",
        stock: 15,
        price_modifier: "0.00",
        status: "active"
      }
    ],
    category: "daily"
  },
  {
    id: 2,
    name: "Ceviche de Pescado",
    short_description: "Pescado fresco marinado en limón, con cebolla, cilantro y ají",
    price: "18.00",
    price_with_discount: "18.00",
    discount: "0",
    images: [{ image_url: "/assets/ceviche.jpg" }],
    variants: [
      {
        id: 3,
        variant_name: "Regular",
        stock: 25,
        price_modifier: "0.00",
        status: "active"
      },
      {
        id: 4,
        variant_name: "Picante",
        stock: 25,
        price_modifier: "0.00",
        status: "active"
      }
    ],
    category: "carta"
  },
  {
    id: 3,
    name: "Parrilla Especial",
    short_description: "Selección de carnes a la parrilla con guarniciones",
    price: "45.00",
    price_with_discount: "40.50",
    discount: "10",
    images: [{ image_url: "/assets/parrilla.jpg" }],
    variants: [
      {
        id: 5,
        variant_name: "Para 2 personas",
        stock: 10,
        price_modifier: "0.00",
        status: "active"
      },
      {
        id: 6,
        variant_name: "Para 4 personas",
        stock: 8,
        price_modifier: "35.00",
        status: "active"
      }
    ],
    category: "special"
  }
];
