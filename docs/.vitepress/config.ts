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
          { text: 'Картофель в духовке с сыром и чесноком', link: '/garlic-potato.html' },
          { text: 'Курица в соусе Тикка Масала', link: '/tikka-masala.html' },
          { text: 'Курица «Кунг Пао»', link: '/kung-pao.html' },
          { text: 'Лазанья', link: '/lasagna.html' },
          { text: 'Паста карбонара с ветчиной и сливками', link: '/carbonara.html' },
          { text: 'Плов со свининой', link: '/pilaf.html' },
          { text: 'Рулет из лавашей', link: '/russian-roulette.html' },
          { text: 'Сыр панир', link: '/paneer-cheese.html' },
          { text: 'Сырный крем-суп с шампиньонами', link: '/cremma-soup.html' },
          { text: 'Цветная капуста, запечённая с сыром', link: '/cauliflower-with-cheese.html' },
        ],
      },
      {
        text: 'Десерты',
        items: [
          { text: 'Ажурные блины на кефире', link: '/pancakes.html' },
          { text: 'Классические сырники', link: '/cottage-cheese-cakes.html' },
          { text: 'Лимонно-творожный чизкейк без выпечки', link: '/lemon-cheesecake.html' },
        ]
      },
      {
        text: 'Напитки',
        items: [
          { text: 'Глинтвейн', link: '/mulled-wine.html' },
          { text: 'Ласси с манго', link: '/mango-lassi.html' },
        ]
      }
    ],
    outlineTitle: 'Оглавление',
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Внешний вид',
    lastUpdatedText: 'Последнее обновление',
    lastUpdated: true,
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    }
  },
}

export default config
