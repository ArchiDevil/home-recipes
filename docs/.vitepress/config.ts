import { UserConfig } from 'vitepress'

const config: UserConfig = {
  title: 'Рецепты',
  description: 'Рецепты на все случаи жизни',
  themeConfig: {
    siteTitle: 'Рецепты',
    sidebar: [
      {
        items: [
          { text: 'Главная страница', link: '/' },
        ]
      },
      {
        text: 'Основные блюда',
        items: [
          { text: 'Курица в соусе Тикка Масала', link: '/tikka-masala.html' },
          { text: 'Курица «Кунг Пао»', link: '/kung-pao.html' },
          { text: 'Сыр панир', link: '/paneer-cheese.html' },
          { text: 'Картофель в духовке с сыром и чесноком', link: '/garlic-potato.html' },
          { text: 'Паста карбонара с ветчиной и сливками', link: '/carbonara.html' },
          { text: 'Цветная капуста, запечённая с сыром', link: '/cauliflower-with-cheese.html' },
          { text: 'Сырный крем-суп с шампиньонами', link: '/cremma-soup.html' },
          { text: 'Рулет из лавашей', link: '/russian-roulette.html' },
          { text: 'Лазанья', link: '/lasagna.html' },
          { text: 'Плов со свининой', link: '/pilaf.html' },
        ],
      },
      {
        text: 'Десерты',
        items: [
          { text: 'Лимонно-творожный чизкейк без выпечки', link: '/lemon-cheesecake.html' },
          { text: 'Классические сырники', link: '/cottage-cheese-cakes.html' },
          { text: 'Ажурные блины на кефире', link: '/pancakes.html' },
        ]
      },
      {
        text: 'Напитки',
        items: [
          { text: 'Глинтвейн', link: '/mulled-wine.html' },
        ]
      }
    ],
    outlineTitle: 'Оглавление',
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Внешний вид',
    lastUpdatedText: 'Последнее обновление',
    lastUpdated: true,
  },
}

export default config
