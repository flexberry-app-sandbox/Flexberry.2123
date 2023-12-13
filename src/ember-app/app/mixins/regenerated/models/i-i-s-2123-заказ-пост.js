import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date'),
  датаОкончания: DS.attr('date'),
  номер: DS.attr('number'),
  состОтгрузки: DS.attr('i-i-s-2123-сост-поставок'),
  состояниеОплаты: DS.attr('i-i-s-2123-сост-оплаты'),
  суммаВклНДС: DS.attr('boolean'),
  суммаДокумента: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-2123-контрагенты', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-2123-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-2123-склады', { inverse: null, async: false }),
  заказ: DS.hasMany('i-i-s-2123-т-ч-заказ', { inverse: 'заказПост', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-2123-заказ-пост.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-2123-заказ-пост.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-2123-заказ-пост.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состОтгрузки: {
    descriptionKey: 'models.i-i-s-2123-заказ-пост.validations.состОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояниеОплаты: {
    descriptionKey: 'models.i-i-s-2123-заказ-пост.validations.состояниеОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаВклНДС: {
    descriptionKey: 'models.i-i-s-2123-заказ-пост.validations.суммаВклНДС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаДокумента: {
    descriptionKey: 'models.i-i-s-2123-заказ-пост.validations.суммаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-2123-заказ-пост.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-2123-заказ-пост.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-2123-заказ-пост.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-2123-заказ-пост.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-2123-отчет-о-зак'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказПостE', 'i-i-s-2123-заказ-пост', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 3 }),
    состОтгрузки: attr('Сост отгрузки', { index: 4 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 5 }),
    суммаДокумента: attr('Сумма документа', { index: 6 }),
    заказ: hasMany('i-i-s-2123-т-ч-заказ', 'Заказ', {
      количество: attr('Количество', { index: 0 }),
      цена: attr('Цена', { index: 1 }),
      суммаНДС: attr('Сумма НДС', { index: 2 }),
      сумма: attr('Сумма', { index: 3 }),
      этоУслуга: attr('Это услуга', { index: 4 })
    })
  });

  modelClass.defineProjection('ЗаказПостL', 'i-i-s-2123-заказ-пост', {
    состояниеОплаты: attr('Состояние оплаты', { index: 0 }),
    состОтгрузки: attr('Сост отгрузки', { index: 1 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 2 }),
    суммаДокумента: attr('Сумма документа', { index: 3 }),
    датаНачала: attr('Дата начала', { index: 4 }),
    датаОкончания: attr('Дата окончания', { index: 5 }),
    номер: attr('Номер', { index: 6 })
  });
};
