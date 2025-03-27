export const restaurante = [
  {
    restaurante: {
      nombre: 'Nombre del Restaurante',
      descripcion: 'Breve descripción del restaurante',
      direccion: 'Dirección completa',
      telefono: 'Número de contacto',
      horario: 'Horario de atención',
    },
  },
];
export const categorias = [
  {
    categorias_platos: [
      {
        id: 1,
        nombre: 'Entradas',
        descripcion: 'Platos para comenzar la comida',
      },
      {
        id: 2,
        nombre: 'Platos Principales',
        descripcion: 'Platos fuertes principales',
      },
      {
        id: 3,
        nombre: 'Postres',
        descripcion: 'Dulces para finalizar',
      },
      {
        id: 4,
        nombre: 'Bebidas',
        descripcion: 'Refrescos, jugos, vinos, etc.',
      },
    ],
  },
];

export const platos = [
  {
    platos: [
      {
        id: 101,
        nombre: 'Ensalada César',
        descripcion:
          'Ensalada con lechuga romana, croutons, queso parmesano y aderezo césar',
        categoria_id: 1,
        precio: 8.5,
        ingredientes: [
          'lechuga romana',
          'croutons',
          'queso parmesano',
          'aderezo césar',
        ],
        alergenos: ['gluten', 'lacteos'],
        vegetariano: true,
        vegano: false,
        disponible: true,
        imagen: 'url_imagen.jpg',
      },
      {
        id: 201,
        nombre: 'Lomo Saltado',
        descripcion:
          'Plato tradicional peruano con lomo de res, cebolla, tomate y papas fritas',
        categoria_id: 2,
        precio: 15.9,
        ingredientes: ['lomo de res', 'cebolla', 'tomate', 'papas', 'arroz'],
        alergenos: [],
        vegetariano: false,
        vegano: false,
        disponible: true,
        imagen: 'url_imagen.jpg',
      },
    ],
  },
];

export const menu_diarios = [
  {
    menus_diarios: [
      {
        fecha: '2023-11-15',
        menu_del_dia: {
          id: 1001,
          nombre: 'Menú Ejecutivo',
          descripcion: 'Menú completo para el almuerzo',
          precio: 12.5,
          platos_incluidos: [101, 201, 301],
          disponible: true,
        },
        especial_del_dia: {
          id: 2001,
          nombre: 'Especial del Chef',
          descripcion: 'Plato especial preparado por el chef',
          plato_id: 201,
          precio_especial: 14.0,
          disponible: true,
        },
      },
      {
        fecha: '2023-11-16',
        menu_del_dia: {
          id: 1002,
          nombre: 'Menú Vegetariano',
          descripcion: 'Menú completo vegetariano',
          precio: 11.0,
          platos_incluidos: [102, 202, 302],
          disponible: true,
        },
      },
    ],
  },
];
export const menus_especiales = [
  {
    menus_especiales: [
      {
        id: 5001,
        nombre: 'Menú Degustación',
        descripcion:
          'Selección de nuestros mejores platos en porciones pequeñas',
        precio: 25.0,
        platos_incluidos: [101, 105, 201, 205, 301, 305],
        disponible: true,
        horario: 'Solo disponible de 19:00 a 21:00',
        dias_disponibles: ['viernes', 'sábado'],
      },
      {
        id: 5002,
        nombre: 'Menú Infantil',
        descripcion: 'Especial para niños',
        precio: 8.5,
        platos_incluidos: [110, 210, 310],
        disponible: true,
        edad_recomendada: '3-12 años',
      },
    ],
  },
];
