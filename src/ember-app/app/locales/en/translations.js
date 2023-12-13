import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS2123ЕдиницыИзмерLForm from './forms/i-i-s-2123-единицы-измер-l';
import IIS2123ЗаказПостLForm from './forms/i-i-s-2123-заказ-пост-l';
import IIS2123КонтрагентыLForm from './forms/i-i-s-2123-контрагенты-l';
import IIS2123НоменклатураLForm from './forms/i-i-s-2123-номенклатура-l';
import IIS2123ОрганизацииLForm from './forms/i-i-s-2123-организации-l';
import IIS2123ОтчетОЗакLForm from './forms/i-i-s-2123-отчет-о-зак-l';
import IIS2123ПланЗакупокLForm from './forms/i-i-s-2123-план-закупок-l';
import IIS2123СкладыLForm from './forms/i-i-s-2123-склады-l';
import IIS2123ЕдиницыИзмерEForm from './forms/i-i-s-2123-единицы-измер-e';
import IIS2123ЗаказПостEForm from './forms/i-i-s-2123-заказ-пост-e';
import IIS2123КонтрагентыEForm from './forms/i-i-s-2123-контрагенты-e';
import IIS2123НоменклатураEForm from './forms/i-i-s-2123-номенклатура-e';
import IIS2123ОрганизацииEForm from './forms/i-i-s-2123-организации-e';
import IIS2123ОтчетОЗакEForm from './forms/i-i-s-2123-отчет-о-зак-e';
import IIS2123ПланЗакупокEForm from './forms/i-i-s-2123-план-закупок-e';
import IIS2123СкладыEForm from './forms/i-i-s-2123-склады-e';
import IIS2123ЕдиницыИзмерModel from './models/i-i-s-2123-единицы-измер';
import IIS2123ЗаказПостModel from './models/i-i-s-2123-заказ-пост';
import IIS2123КонтрагентыModel from './models/i-i-s-2123-контрагенты';
import IIS2123НоменклатураModel from './models/i-i-s-2123-номенклатура';
import IIS2123ОрганизацииModel from './models/i-i-s-2123-организации';
import IIS2123ОтчетОЗакModel from './models/i-i-s-2123-отчет-о-зак';
import IIS2123ПланЗакупокModel from './models/i-i-s-2123-план-закупок';
import IIS2123ПланModel from './models/i-i-s-2123-план';
import IIS2123СкладыModel from './models/i-i-s-2123-склады';
import IIS2123ТЧЗаказModel from './models/i-i-s-2123-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-2123-единицы-измер': IIS2123ЕдиницыИзмерModel,
    'i-i-s-2123-заказ-пост': IIS2123ЗаказПостModel,
    'i-i-s-2123-контрагенты': IIS2123КонтрагентыModel,
    'i-i-s-2123-номенклатура': IIS2123НоменклатураModel,
    'i-i-s-2123-организации': IIS2123ОрганизацииModel,
    'i-i-s-2123-отчет-о-зак': IIS2123ОтчетОЗакModel,
    'i-i-s-2123-план-закупок': IIS2123ПланЗакупокModel,
    'i-i-s-2123-план': IIS2123ПланModel,
    'i-i-s-2123-склады': IIS2123СкладыModel,
    'i-i-s-2123-т-ч-заказ': IIS2123ТЧЗаказModel
  },

  'application-name': '2123',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '2123',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '2123',
          title: '2123'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        2123: {
          caption: '2123',
          title: '2123',
          'i-i-s-2123-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          },
          'i-i-s-2123-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-2123-отчет-о-зак-l': {
            caption: 'Отчет о зак',
            title: ''
          },
          'i-i-s-2123-единицы-измер-l': {
            caption: 'Единицы измер',
            title: ''
          },
          'i-i-s-2123-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-2123-план-закупок-l': {
            caption: 'План закупок',
            title: ''
          },
          'i-i-s-2123-заказ-пост-l': {
            caption: 'Заказ пост',
            title: ''
          },
          'i-i-s-2123-склады-l': {
            caption: 'Склады',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-2123-единицы-измер-l': IIS2123ЕдиницыИзмерLForm,
    'i-i-s-2123-заказ-пост-l': IIS2123ЗаказПостLForm,
    'i-i-s-2123-контрагенты-l': IIS2123КонтрагентыLForm,
    'i-i-s-2123-номенклатура-l': IIS2123НоменклатураLForm,
    'i-i-s-2123-организации-l': IIS2123ОрганизацииLForm,
    'i-i-s-2123-отчет-о-зак-l': IIS2123ОтчетОЗакLForm,
    'i-i-s-2123-план-закупок-l': IIS2123ПланЗакупокLForm,
    'i-i-s-2123-склады-l': IIS2123СкладыLForm,
    'i-i-s-2123-единицы-измер-e': IIS2123ЕдиницыИзмерEForm,
    'i-i-s-2123-заказ-пост-e': IIS2123ЗаказПостEForm,
    'i-i-s-2123-контрагенты-e': IIS2123КонтрагентыEForm,
    'i-i-s-2123-номенклатура-e': IIS2123НоменклатураEForm,
    'i-i-s-2123-организации-e': IIS2123ОрганизацииEForm,
    'i-i-s-2123-отчет-о-зак-e': IIS2123ОтчетОЗакEForm,
    'i-i-s-2123-план-закупок-e': IIS2123ПланЗакупокEForm,
    'i-i-s-2123-склады-e': IIS2123СкладыEForm
  },

});

export default translations;
