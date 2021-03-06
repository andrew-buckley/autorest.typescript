/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


export const ErrorModel = {
  required: false,
  serializedName: 'Error',
  type: {
    name: 'Composite',
    className: 'ErrorModel',
    modelProperties: {
      status: {
        required: false,
        serializedName: 'status',
        type: {
          name: 'Number'
        }
      },
      message: {
        required: false,
        serializedName: 'message',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const HeaderParamStringOptionalParams = {
  required: false,
  serializedName: 'ParamStringOptions',
  type: {
    name: 'Composite',
    className: 'HeaderParamStringOptionalParams',
    modelProperties: {
      value: {
        required: false,
        serializedName: 'value',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const HeaderParamDatetimeRfc1123OptionalParams = {
  required: false,
  serializedName: 'ParamDatetimeRfc1123Options',
  type: {
    name: 'Composite',
    className: 'HeaderParamDatetimeRfc1123OptionalParams',
    modelProperties: {
      value: {
        required: false,
        serializedName: 'value',
        type: {
          name: 'DateTimeRfc1123'
        }
      }
    }
  }
};

export const HeaderParamEnumOptionalParams = {
  required: false,
  serializedName: 'ParamEnumOptions',
  type: {
    name: 'Composite',
    className: 'HeaderParamEnumOptionalParams',
    modelProperties: {
      value: {
        required: false,
        serializedName: 'value',
        type: {
          name: 'Enum',
          allowedValues: [ 'White', 'black', 'GREY' ]
        }
      }
    }
  }
};
