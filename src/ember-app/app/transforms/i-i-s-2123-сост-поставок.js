import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостПоставокEnum from '../enums/i-i-s-2123-сост-поставок';

export default FlexberryEnum.extend({
  enum: СостПоставокEnum,
  sourceType: 'IIS.2123.СостПоставок'
});
