export const i18nAsset = {
  en: {
    header: {
      search: 'Search deals',
      profile: 'My profile',
      favorites: 'My favorites',
      history: 'My coupon history',
      admin: 'Admin',
      signOut: 'Sign out',
    },
    login: {
      login: 'Login',
      email: 'Email',
      password: 'Password',
      enter: 'Enter',
      emailRequired: 'Email is required',
      passwordRequired: 'Password is required',
      error: 'Incorrect email or password',
    },
    search: {
      noResults: 'No results found',
      seeAll: 'See all results',
      inTotal: 'in total',
      showingResults: 'Showing results for',
    },
    sorting: {
      hot: 'Hot',
      newest: 'Newest',
      popular: 'Popular',
      permanent: 'Permanent',
      comingSoon: 'Coming soon',
    },
    filters: {
      apply: 'Apply filters',
      location: 'Location',
      categories: 'Categories',
      tags: 'Tags',
      vendors: 'Vendors',
      loadMore: 'Load more',
      nothingFound: 'Nothing found',
      tryAnother: 'Please, try another filter',
    },
    orders: {
      name: 'Name',
      orderDate: 'Order Date',
      endDate: 'End Date',
      vendor: 'Vendor',
      locations: 'Locations',
      sortByOrderDate: 'Sort by Order Date',
      sortByEndDate: 'Sort by End Date',
    },
    admin: {
      nav: {
        deals: 'Deals',
        vendors: 'Vendors',
        categories: 'Categories',
        statistics: 'Statistics',
      },
      search: 'Search',
      manageCategories: 'Manage categories',
      manageDeals: 'Manage deals',
      manageVendors: 'Manage vendors',
      save: 'Save',
      cancel: 'Cancel',
      tags: 'Tags',
      dealPage: {
        dealDetails: 'Deal details',
        fullDescription: 'Full description',
        description: 'Description',
        shortDescription: 'Short description',
        begin: 'Begin',
        end: 'End',
        vendor: 'Vendor',
        category: 'Category',
        locations: 'Locations',
        location: 'Location',
        tags: 'Tags',
        tagsRequired: '*should be at least one tag',
        save: 'Save',
        cancel: 'Cancel',
        required: 'required',
        dataValidation: 'start date must be less than end date',
        addNewDealTitle: 'Add new deal',
        toDealTitle: 'go to deal',
        published: 'PUBLISHED',
        publishLabel: 'Publish',
        dialog: {
          publishConfirm: 'Confirm',
          publishHeader: 'Are you sure you want to delete the publish deal?',
          deleteHeader: 'Are you sure you want to publish the selected deal?',
          deleteConfirm: 'Confirm',
        },
        validation: {
          description:
            'Invalid description format. Description should include more than 15 and less than 150 characters.',
          fullDescription:
            'Invalid description format. Description should include more than 15 and less than 800 characters.',
        },
        messageService: {
          deleteDetail: 'Deal deleted',
          Summary: 'Successful',
          createdDetail: 'Deal created',
          updatedDetail: 'Deal updated',
        },
        pageReport: 'Showing deals from {{first}} to {{last}} of {{totalRecords}} total',
      },
      vendorPage: {
        name: 'Name',
        number: 'Number of deals',
        vendorDetails: 'Vendor Details',
        phoneNumber: 'Phone number',
        description: 'Description',
        locations: 'Locations',
        location: 'Location',
        locationRequirement: 'At least one location is required',
        required: '*required',
        country: 'Country',
        city: 'City',
        selectCountry: 'Select a Country',
        selectCity: 'Select a City',
        addLocation: 'Add location',
        removeLocation: 'Remove location',
        addNew: 'Add new vendor',
        edit: 'Edit vendor',
        delete: 'Delete vendor',
        disabledDelete: 'You cannot delete this vendor as it has active deals',
        placeholders: {
          name: 'Company name',
          description: 'Company detailed description',
          addStreet: 'Add street',
          addBuilding: 'Add building number',
          addLatitude: 'Add latitude',
          addLongitude: 'Add longitude',
        },
        validation: {
          name: 'Invalid name format. Name should include more than 2 and less than 80 characters.',
          email: 'Invalid e-mail format.',
          phone:
            'Invalid phone number format. Phone number should include more than 11 and less than 18 digits.',
          description:
            'Invalid description format. Description should include more than 10 and less than 255 characters.',
        },
        dialog: {
          deleteHeader: 'Are you sure you want to delete the selected vendor?',
          deleteConfirm: 'Confirm',
        },
        messageService: {
          deleteDetail: 'Vendor deleted',
          createdDetail: 'Vendor created',
          updatedDetail: 'Vendor updated',
          summary: 'Successful',
        },
        pageReport: 'Showing vendors from {{first}} to {{last}} of {{totalRecords}} total',
      },
      categoryPage: {
        category: 'Category',
        tag: 'Tag',
        categoryDetails: 'Category Details',
        addTag: 'Add new Tag',
        addNew: 'Add new category',
        edit: 'Edit category',
        delete: 'Delete category',
        errorCategorySummary: 'You cannot delete a category',
        errorCategoryDetail: 'This category is uses',
        errorTagSummary: 'You cannot delete a tag',
        errorTagDetail: 'This tag is uses',
        dialog: {
          deleteHeader: 'Are you sure you want to delete the selected category?',
          deleteConfirm: 'Confirm',
          deleteHeaderTag: 'Are you sure you want to delete the selected tag?',
        },
        messageService: {
          deleteDetail: 'Category deleted',
          createdDetail: 'Category created',
          updatedDetail: 'Category updated',
          deleteDetailTag: 'Tag deleted',
          summary: 'Successful',
        },
        validation: {
          category:
            'Invalid category name format. Category name should include more than 2 and less than 80 characters.',
          tag: 'Invalid tag name format. Tag name should include more than 2 and less than 80 characters.',
        },
        pageReport: 'Showing categories from {{first}} to {{last}} of {{totalRecords}} total',
      },
      statistics: {
        deals: 'Deals',
        views: 'Views',
        buys: 'Coupon orders',
        favorites: 'Added to favorites',
        viewedDeals: 'Top 5 viewed deals',
        orderedDeals: 'Top 5 ordered deals',
        favoredDeals: 'Top 5 favored deals',
        download: 'Download statistics',
        click: 'Click to choose the dates',
        successDetail: 'Updated statistics successfully loaded!',
        errorDetailOne: 'You need to choose TWO dates!',
        errorDetailTwo: 'You need to choose two DIFFERENT dates!',
        noStatisticsOne: 'There is no data',
        noStatisticsTwo: 'for the chosen period',
      },
    },
    subscriptions: {
      subscriptions: 'Subscriptions',
      vendors: 'Vendors',
      categories: 'Categories',
      tags: 'Tags',
      selectVendor: 'Select a Vendor',
      selectCategory: 'Select a Category',
      selectTag: 'Select a Tag',
      selectedItems: 'items selected',
    },
    deal: {
      backButton: 'Go back',
      promotionExpiry: 'Promotion expires on',
      until: 'until',
      notAddedToFavorites: 'Add to Favorites',
      addedToFavorites: 'Remove from Favorites',
      notAddedToOrders: 'Get a coupon',
      addedToOrders: 'You have already received a coupon for this deal',
      info: 'Deal info',
      vendor: {
        info: 'Vendor info',
        name: 'Name',
        contacts: 'Contacts',
        description: 'Description',
        showAll: 'See all deals of this vendor',
      },
      messageService: {
        addedToFavorites: 'Deal added to Favorites',
        removedFromFavorites: 'Deal removed from Favorites',
        addedToOrders: 'Order placed. You will receive an e-mail with your discount code.',
        summary: 'Successful',
      },
      map: 'Map',
    },
  },
  ru: {
    header: {
      search: 'Поиск по акциям',
      profile: 'Профиль',
      favorites: 'Избранное',
      history: 'История заказов',
      admin: 'Управление',
      signOut: 'Выйти',
    },
    login: {
      login: 'Вход',
      email: 'E-mail',
      password: 'Пароль',
      enter: 'Войти',
      emailRequired: 'Требуется E-mail',
      passwordRequired: 'Требуется пароль',
      error: 'Incorrect email or password',
    },
    search: {
      noResults: 'Ничего не найдено',
      seeAll: 'Посмотреть все',
      inTotal: 'всего',
      showingResults: 'Результаты поиска по запросу',
    },
    sorting: {
      hot: 'Горячие',
      newest: 'Новые',
      popular: 'Популярные',
      permanent: 'Постоянные',
      comingSoon: 'Скоро будут',
    },
    filters: {
      apply: 'Применить фильтры',
      location: 'Местоположение',
      categories: 'Категории',
      tags: 'Тэги',
      vendors: 'Компании',
      loadMore: 'Загрузить еще',
      nothingFound: 'Ничего не найдено',
      tryAnother: 'Попробуйте другой фильтр',
    },
    orders: {
      name: 'Название',
      orderDate: 'Дата Заказа',
      endDate: 'Дата Окончания',
      vendor: 'Компания',
      locations: 'Локации',
      sortByOrderDate: 'Сортировать по Дате Заказа',
      sortByEndDate: 'Сортировать по Дате Окончания',
    },
    admin: {
      nav: {
        deals: 'Акции',
        vendors: 'Компании',
        categories: 'Категории',
        statistics: 'Статистика',
      },
      search: 'Поиск',
      manageCategories: 'Менеджер категорий',
      manageDeals: 'Менеджер акций',
      categories: 'Категории',
      manageVendors: 'Менеджер компаний',
      save: 'Сохранить',
      cancel: 'Отменить',
      tags: 'Теги',
      pagination: {
        showing: 'Показаны',
        categories: 'категории',
        deals: 'акции',
        vendors: 'компании',
        from: 'c',
        to: 'по',
        of: 'из',
        all: 'всех',
      },
      dealPage: {
        dealDetails: 'Детали акции',
        fullDescription: 'Полное описание',
        description: 'Описание',
        shortDescription: 'Короткое описание',
        begin: 'Дата начала',
        end: 'Дата окончания',
        vendor: 'Компания',
        category: 'Категория',
        locations: 'Локации',
        location: 'Локация',
        tags: 'Тэги',
        tagsRequired: 'Должен быть хотя бы один тэг',
        save: 'Сохранить',
        cancel: 'Отменить',
        required: 'Обязательное поле',
        dataValidation: 'Дата начала должна быть меньше даты окончания',
        addNewDealTitle: 'Добавить новую акцию',
        toDealTitle: 'Перейти к акции',
        published: 'ОПУБЛИКОВАНО',
        publishLabel: 'Опубликовать',
        dialog: {
          publishConfirm: 'Подтвердить',
          publishHeader: 'Вы уверены, что хотите опубликовать выбранную акцию?',
          deleteHeader: 'Вы уверены, что хотите удалить выбраю акцию?',
          deleteConfirm: 'Подтвердить',
        },
        validation: {
          description:
            'Неверный формат описания. Описание должно содержать более 15 и менее 150 символов.',
          fullDescription:
            'Неверный формат описания. Описание должно содержать более 15 и менее 800 символов.',
        },
        messageService: {
          Summary: 'Успешно',
          deleteDetail: 'Акция удалена',
          createdDetail: 'Акция создана',
          updatedDetail: 'Акция обновлена',
        },
        pageReport: 'Показано акции от {{first}} до {{last}} из всех {{totalRecords}}',
      },
      vendorPage: {
        name: 'Название',
        number: 'Количество акций',
        vendorDetails: 'Детали компании',
        phoneNumber: 'Номер телефона',
        description: 'Описание',
        locations: 'Локации',
        location: 'Локация',
        locationRequirement: 'Требуется добавление хотя бы одной локации',
        required: '*обязательное поле',
        country: 'Страна',
        city: 'Город',
        selectCountry: 'Выбор страны',
        selectCity: 'Выбор города',
        addLocation: 'Добавить локацию',
        removeLocation: 'Удалить локацию',
        addNew: 'Добавить новую компанию',
        edit: 'Редактировать компанию',
        delete: 'Удалить компанию',
        disabledDelete: 'Невозможно удалить эту компанию, так как у нее есть активные акции',
        placeholders: {
          name: 'Название компании',
          description: 'Детальное описание компании',
          addStreet: 'Добавьте улицу',
          addBuilding: 'Добавьте номер дома',
          addLatitude: 'Добавьте ширину',
          addLongitude: 'Добавьте долготу',
        },
        validation: {
          name: 'Неверный формат названия. Название должно содержать более 2 и менее 80 символов.',
          email: 'Неверный формат электронной почты.',
          phone:
            'Неверный формат номера телефона. Номер телефона должен содержать более 11 и менее 18 цифр.',
          description:
            'Неверный формат описания. Описание должно содержать более 10 и менее 255 символов.',
        },
        dialog: {
          deleteHeader: 'Вы уверены, что хотите удалить выбранную компанию?',
          deleteConfirm: 'Подвердить',
        },
        messageService: {
          deleteDetail: 'Компания удалена',
          createdDetail: 'Компания создана',
          updatedDetail: 'Компания обновлена',
          summary: 'Успешно',
        },
        pageReport: 'Показано компании от {{first}} до {{last}} из всех {{totalRecords}}',
      },
      categoryPage: {
        category: 'Категория',
        tag: 'Тэги',
        categoryDetails: 'Детали категории',
        addTag: 'Добавить новый тэг',
        addNew: 'Добавить новую категорию',
        edit: 'Редактировать категорию',
        delete: 'Удалить категорию',
        errorCategorySummary: 'Вы не можете удалить категорию',
        errorCategoryDetail: 'Эта категория используется',
        errorTagSummary: 'Вы не можете удалить тэг',
        errorTagDetail: 'Этот тэг используется',
        dialog: {
          deleteHeader: 'Вы уверены, что хотите удалить выбранную категорию?',
          deleteConfirm: 'Подтвердить',
          deleteHeaderTag: 'Вы уверены, что хотите удалить выбранный тэг?',
        },
        messageService: {
          deleteDetail: 'Категория удалена',
          createdDetail: 'Категория создана',
          updatedDetail: 'Категория обновлена',
          deleteDetailTag: 'Тэг удалён',
          summary: 'Успешно',
        },
        validation: {
          category:
            'Неверный формат названия категории. Название должно содержать более 2 и менее 80 символов.',
          tag: 'Неверный формат названия тэга. Название должно содержать более 2 и менее 80 символов.',
        },
        pageReport: 'Показано категории от {{first}} до {{last}} из всех {{totalRecords}}',
      },
      statistics: {
        deals: 'Акции',
        views: 'Просмотры',
        buys: 'Заказы купонов',
        favorites: 'Добавления в избранное',
        viewedDeals: 'Топ-5 просматриваемых акций',
        orderedDeals: 'Топ-5 заказываемых акций',
        favoredDeals: 'Топ-5 добавленных в избранное акций',
        download: 'Скачать статистику',
        click: 'Нажмите, чтобы выбрать даты',
        successDetail: 'Обновленная статистика успешно загружена!',
        errorDetailOne: 'Необходимо выбрать ДВЕ даты!',
        errorDetailTwo: 'Необходимо выбрать две РАЗНЫЕ даты!',
        noStatisticsOne: 'Нет данных',
        noStatisticsTwo: 'за выбранный период',
      },
    },
    subscriptions: {
      subscriptions: 'Подписки',
      vendors: 'Компании',
      categories: 'Категории',
      tags: 'Тэги',
      selectVendor: 'Выберите компанию',
      selectCategory: 'Выберите категорию',
      selectTag: 'Выберите тэг',
      selectedItems: 'выбрано',
    },
    deal: {
      backButton: 'Вернуться назад',
      promotionExpiry: 'Акция заканчивается:',
      until: 'до',
      notAddedToFavorites: 'Добавить в Избранное',
      addedToFavorites: 'Удалить из Избранного',
      notAddedToOrders: 'Получить купон',
      addedToOrders: 'Вы уже получили купон для этой акции. Это можно сделать лишь единожды.',
      info: 'Инфо об акции',
      vendor: {
        info: 'Инфо о компании',
        name: 'Название',
        contacts: 'Контакты',
        description: 'Описание',
        showAll: 'Посмотреть все акции этой компании',
      },
      messageService: {
        addedToFavorites: 'Акция добавлена в Избранное',
        removedFromFavorites: 'Акция удалена из Избранного',
        addedToOrders: 'Заказ принят. Вы получите электронное письмо с кодом дискаунта.',
        summary: 'Успешно',
      },
      map: 'Карта',
    },
  },
};
