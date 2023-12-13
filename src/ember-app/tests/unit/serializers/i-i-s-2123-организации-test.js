import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-2123-организации', 'Unit | Serializer | i-i-s-2123-организации', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-2123-организации',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-2123-сост-оплаты',
    'transform:i-i-s-2123-сост-поставок',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
