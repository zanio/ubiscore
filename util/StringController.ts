import * as _ from 'lodash';


class StringController {
  static sanitizeObjectGlobal: Record<string, unknown>;
  

  /**
   *
   * @param data This is the object containing the key/pair value you would like to sanitize.
   * @param excludedKeys This is the key on the object you don't want to sanitize
   * @returns object
   */
  static sanitizeObject = (
    data: Record<string, unknown>,
    excludedKeys:Array<string>=[],
  ): Record<string, unknown> => {
    const notEmpty = !_.isEmpty(data);
    const santizedInstance = {} as Record<string, unknown>;

    if (notEmpty && typeof data === 'object') {
      _.forEach(data, (value, key) => {
        const isKeyFoundInObject = excludedKeys.includes(key);
        if (!_.isEmpty(value) && typeof value === 'string' && !isKeyFoundInObject) {
          santizedInstance[key] = value.trim().toLowerCase();
        }
        if (!_.isEmpty(value) && typeof value === 'string' && isKeyFoundInObject) {
          santizedInstance[key] = value;
        }
      });
    }
    return santizedInstance;
  };


}

export default StringController;
