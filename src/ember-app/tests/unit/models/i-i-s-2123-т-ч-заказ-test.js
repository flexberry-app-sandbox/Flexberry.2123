import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-2123-т-ч-заказ', 'Unit | Model | i-i-s-2123-т-ч-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-2123-единицы-измер',
    'model:i-i-s-2123-заказ-пост',
    'model:i-i-s-2123-контрагенты',
    'model:i-i-s-2123-номенклатура',
    'model:i-i-s-2123-организации',
    'model:i-i-s-2123-отчет-о-зак',
    'model:i-i-s-2123-план-закупок',
    'model:i-i-s-2123-план',
    'model:i-i-s-2123-склады',
    'model:i-i-s-2123-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
