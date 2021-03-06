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
      search: '?????????? ???? ????????????',
      profile: '??????????????',
      favorites: '??????????????????',
      history: '?????????????? ??????????????',
      admin: '????????????????????',
      signOut: '??????????',
    },
    login: {
      login: '????????',
      email: 'E-mail',
      password: '????????????',
      enter: '??????????',
      emailRequired: '?????????????????? E-mail',
      passwordRequired: '?????????????????? ????????????',
      error: 'Incorrect email or password',
    },
    search: {
      noResults: '???????????? ???? ??????????????',
      seeAll: '???????????????????? ??????',
      inTotal: '??????????',
      showingResults: '???????????????????? ???????????? ???? ??????????????',
    },
    sorting: {
      hot: '??????????????',
      newest: '??????????',
      popular: '????????????????????',
      permanent: '????????????????????',
      comingSoon: '?????????? ??????????',
    },
    filters: {
      apply: '?????????????????? ??????????????',
      location: '????????????????????????????',
      categories: '??????????????????',
      tags: '????????',
      vendors: '????????????????',
      loadMore: '?????????????????? ??????',
      nothingFound: '???????????? ???? ??????????????',
      tryAnother: '???????????????????? ???????????? ????????????',
    },
    orders: {
      name: '????????????????',
      orderDate: '???????? ????????????',
      endDate: '???????? ??????????????????',
      vendor: '????????????????',
      locations: '??????????????',
      sortByOrderDate: '?????????????????????? ???? ???????? ????????????',
      sortByEndDate: '?????????????????????? ???? ???????? ??????????????????',
    },
    admin: {
      nav: {
        deals: '??????????',
        vendors: '????????????????',
        categories: '??????????????????',
        statistics: '????????????????????',
      },
      search: '??????????',
      manageCategories: '???????????????? ??????????????????',
      manageDeals: '???????????????? ??????????',
      categories: '??????????????????',
      manageVendors: '???????????????? ????????????????',
      save: '??????????????????',
      cancel: '????????????????',
      tags: '????????',
      pagination: {
        showing: '????????????????',
        categories: '??????????????????',
        deals: '??????????',
        vendors: '????????????????',
        from: 'c',
        to: '????',
        of: '????',
        all: '????????',
      },
      dealPage: {
        dealDetails: '???????????? ??????????',
        fullDescription: '???????????? ????????????????',
        description: '????????????????',
        shortDescription: '???????????????? ????????????????',
        begin: '???????? ????????????',
        end: '???????? ??????????????????',
        vendor: '????????????????',
        category: '??????????????????',
        locations: '??????????????',
        location: '??????????????',
        tags: '????????',
        tagsRequired: '???????????? ???????? ???????? ???? ???????? ??????',
        save: '??????????????????',
        cancel: '????????????????',
        required: '???????????????????????? ????????',
        dataValidation: '???????? ???????????? ???????????? ???????? ???????????? ???????? ??????????????????',
        addNewDealTitle: '???????????????? ?????????? ??????????',
        toDealTitle: '?????????????? ?? ??????????',
        published: '????????????????????????',
        publishLabel: '????????????????????????',
        dialog: {
          publishConfirm: '??????????????????????',
          publishHeader: '???? ??????????????, ?????? ???????????? ???????????????????????? ?????????????????? ???????????',
          deleteHeader: '???? ??????????????, ?????? ???????????? ?????????????? ???????????? ???????????',
          deleteConfirm: '??????????????????????',
        },
        validation: {
          description:
            '???????????????? ???????????? ????????????????. ???????????????? ???????????? ?????????????????? ?????????? 15 ?? ?????????? 150 ????????????????.',
          fullDescription:
            '???????????????? ???????????? ????????????????. ???????????????? ???????????? ?????????????????? ?????????? 15 ?? ?????????? 800 ????????????????.',
        },
        messageService: {
          Summary: '??????????????',
          deleteDetail: '?????????? ??????????????',
          createdDetail: '?????????? ??????????????',
          updatedDetail: '?????????? ??????????????????',
        },
        pageReport: '???????????????? ?????????? ???? {{first}} ???? {{last}} ???? ???????? {{totalRecords}}',
      },
      vendorPage: {
        name: '????????????????',
        number: '???????????????????? ??????????',
        vendorDetails: '???????????? ????????????????',
        phoneNumber: '?????????? ????????????????',
        description: '????????????????',
        locations: '??????????????',
        location: '??????????????',
        locationRequirement: '?????????????????? ???????????????????? ???????? ???? ?????????? ??????????????',
        required: '*???????????????????????? ????????',
        country: '????????????',
        city: '??????????',
        selectCountry: '?????????? ????????????',
        selectCity: '?????????? ????????????',
        addLocation: '???????????????? ??????????????',
        removeLocation: '?????????????? ??????????????',
        addNew: '???????????????? ?????????? ????????????????',
        edit: '?????????????????????????? ????????????????',
        delete: '?????????????? ????????????????',
        disabledDelete: '???????????????????? ?????????????? ?????? ????????????????, ?????? ?????? ?? ?????? ???????? ???????????????? ??????????',
        placeholders: {
          name: '???????????????? ????????????????',
          description: '?????????????????? ???????????????? ????????????????',
          addStreet: '???????????????? ??????????',
          addBuilding: '???????????????? ?????????? ????????',
          addLatitude: '???????????????? ????????????',
          addLongitude: '???????????????? ??????????????',
        },
        validation: {
          name: '???????????????? ???????????? ????????????????. ???????????????? ???????????? ?????????????????? ?????????? 2 ?? ?????????? 80 ????????????????.',
          email: '???????????????? ???????????? ?????????????????????? ??????????.',
          phone:
            '???????????????? ???????????? ???????????? ????????????????. ?????????? ???????????????? ???????????? ?????????????????? ?????????? 11 ?? ?????????? 18 ????????.',
          description:
            '???????????????? ???????????? ????????????????. ???????????????? ???????????? ?????????????????? ?????????? 10 ?? ?????????? 255 ????????????????.',
        },
        dialog: {
          deleteHeader: '???? ??????????????, ?????? ???????????? ?????????????? ?????????????????? ?????????????????',
          deleteConfirm: '????????????????????',
        },
        messageService: {
          deleteDetail: '???????????????? ??????????????',
          createdDetail: '???????????????? ??????????????',
          updatedDetail: '???????????????? ??????????????????',
          summary: '??????????????',
        },
        pageReport: '???????????????? ???????????????? ???? {{first}} ???? {{last}} ???? ???????? {{totalRecords}}',
      },
      categoryPage: {
        category: '??????????????????',
        tag: '????????',
        categoryDetails: '???????????? ??????????????????',
        addTag: '???????????????? ?????????? ??????',
        addNew: '???????????????? ?????????? ??????????????????',
        edit: '?????????????????????????? ??????????????????',
        delete: '?????????????? ??????????????????',
        errorCategorySummary: '???? ???? ???????????? ?????????????? ??????????????????',
        errorCategoryDetail: '?????? ?????????????????? ????????????????????????',
        errorTagSummary: '???? ???? ???????????? ?????????????? ??????',
        errorTagDetail: '???????? ?????? ????????????????????????',
        dialog: {
          deleteHeader: '???? ??????????????, ?????? ???????????? ?????????????? ?????????????????? ???????????????????',
          deleteConfirm: '??????????????????????',
          deleteHeaderTag: '???? ??????????????, ?????? ???????????? ?????????????? ?????????????????? ???????',
        },
        messageService: {
          deleteDetail: '?????????????????? ??????????????',
          createdDetail: '?????????????????? ??????????????',
          updatedDetail: '?????????????????? ??????????????????',
          deleteDetailTag: '?????? ????????????',
          summary: '??????????????',
        },
        validation: {
          category:
            '???????????????? ???????????? ???????????????? ??????????????????. ???????????????? ???????????? ?????????????????? ?????????? 2 ?? ?????????? 80 ????????????????.',
          tag: '???????????????? ???????????? ???????????????? ????????. ???????????????? ???????????? ?????????????????? ?????????? 2 ?? ?????????? 80 ????????????????.',
        },
        pageReport: '???????????????? ?????????????????? ???? {{first}} ???? {{last}} ???? ???????? {{totalRecords}}',
      },
      statistics: {
        deals: '??????????',
        views: '??????????????????',
        buys: '???????????? ??????????????',
        favorites: '???????????????????? ?? ??????????????????',
        viewedDeals: '??????-5 ?????????????????????????????? ??????????',
        orderedDeals: '??????-5 ???????????????????????? ??????????',
        favoredDeals: '??????-5 ?????????????????????? ?? ?????????????????? ??????????',
        download: '?????????????? ????????????????????',
        click: '??????????????, ?????????? ?????????????? ????????',
        successDetail: '?????????????????????? ???????????????????? ?????????????? ??????????????????!',
        errorDetailOne: '???????????????????? ?????????????? ?????? ????????!',
        errorDetailTwo: '???????????????????? ?????????????? ?????? ???????????? ????????!',
        noStatisticsOne: '?????? ????????????',
        noStatisticsTwo: '???? ?????????????????? ????????????',
      },
    },
    subscriptions: {
      subscriptions: '????????????????',
      vendors: '????????????????',
      categories: '??????????????????',
      tags: '????????',
      selectVendor: '???????????????? ????????????????',
      selectCategory: '???????????????? ??????????????????',
      selectTag: '???????????????? ??????',
      selectedItems: '??????????????',
    },
    deal: {
      backButton: '?????????????????? ??????????',
      promotionExpiry: '?????????? ??????????????????????????:',
      until: '????',
      notAddedToFavorites: '???????????????? ?? ??????????????????',
      addedToFavorites: '?????????????? ???? ????????????????????',
      notAddedToOrders: '???????????????? ??????????',
      addedToOrders: '???? ?????? ???????????????? ?????????? ?????? ???????? ??????????. ?????? ?????????? ?????????????? ???????? ????????????????.',
      info: '???????? ???? ??????????',
      vendor: {
        info: '???????? ?? ????????????????',
        name: '????????????????',
        contacts: '????????????????',
        description: '????????????????',
        showAll: '???????????????????? ?????? ?????????? ???????? ????????????????',
      },
      messageService: {
        addedToFavorites: '?????????? ?????????????????? ?? ??????????????????',
        removedFromFavorites: '?????????? ?????????????? ???? ????????????????????',
        addedToOrders: '?????????? ????????????. ???? ???????????????? ?????????????????????? ???????????? ?? ?????????? ??????????????????.',
        summary: '??????????????',
      },
      map: '??????????',
    },
  },
};
