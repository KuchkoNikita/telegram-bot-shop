import { RADIO_CONTROL_VALUE } from '@/utils/constants';
import {
  validationSchemaCourier,
  validationSchemaBelpost,
  validationSchemaEuropost,
} from './constant';

export const getValidationSchema = (shippingOption) => {
  switch (shippingOption) {
  case RADIO_CONTROL_VALUE.belpost:
    return validationSchemaBelpost;
  case RADIO_CONTROL_VALUE.courier:
    return validationSchemaCourier;
  case RADIO_CONTROL_VALUE.europost:
    return validationSchemaEuropost;
  default:
    return validationSchemaCourier;
  }
};
