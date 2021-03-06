/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "ms-rest-js";
import { RequestOptionsBase } from "ms-rest-js";


/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing IntWrapper.
 */
export interface IntWrapper {
  /**
   * @member {number} value
   */
  value: number;
}

/**
 * @interface
 * An interface representing IntOptionalWrapper.
 */
export interface IntOptionalWrapper {
  /**
   * @member {number} [value]
   */
  value?: number;
}

/**
 * @interface
 * An interface representing StringWrapper.
 */
export interface StringWrapper {
  /**
   * @member {string} value
   */
  value: string;
}

/**
 * @interface
 * An interface representing StringOptionalWrapper.
 */
export interface StringOptionalWrapper {
  /**
   * @member {string} [value]
   */
  value?: string;
}

/**
 * @interface
 * An interface representing ArrayWrapper.
 */
export interface ArrayWrapper {
  /**
   * @member {string[]} value
   */
  value: string[];
}

/**
 * @interface
 * An interface representing ArrayOptionalWrapper.
 */
export interface ArrayOptionalWrapper {
  /**
   * @member {string[]} [value]
   */
  value?: string[];
}

/**
 * @interface
 * An interface representing Product.
 */
export interface Product {
  /**
   * @member {number} id
   */
  id: number;
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing ClassWrapper.
 */
export interface ClassWrapper {
  /**
   * @member {Product} value
   */
  value: Product;
}

/**
 * @interface
 * An interface representing ClassOptionalWrapper.
 */
export interface ClassOptionalWrapper {
  /**
   * @member {Product} [value]
   */
  value?: Product;
}

/**
 * @interface
 * An interface representing AutoRestRequiredOptionalTestServiceOptions.
 * @extends ServiceClientOptions
 */
export interface AutoRestRequiredOptionalTestServiceOptions extends ServiceClientOptions {
  /**
   * @member {number} [optionalGlobalQuery] number of items to skip
   */
  optionalGlobalQuery?: number;
}

/**
 * @interface
 * An interface representing ImplicitPutOptionalQueryOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ImplicitPutOptionalQueryOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [queryParameter]
   */
  queryParameter?: string;
}

/**
 * @interface
 * An interface representing ImplicitPutOptionalHeaderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ImplicitPutOptionalHeaderOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [queryParameter]
   */
  queryParameter?: string;
}

/**
 * @interface
 * An interface representing ImplicitPutOptionalBodyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ImplicitPutOptionalBodyOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [bodyParameter]
   */
  bodyParameter?: string;
}

/**
 * @interface
 * An interface representing ExplicitPostOptionalIntegerParameterOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ExplicitPostOptionalIntegerParameterOptionalParams extends RequestOptionsBase {
  /**
   * @member {number} [bodyParameter]
   */
  bodyParameter?: number;
}

/**
 * @interface
 * An interface representing ExplicitPostOptionalIntegerPropertyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ExplicitPostOptionalIntegerPropertyOptionalParams extends RequestOptionsBase {
  /**
   * @member {number} [value]
   */
  value?: number;
}

/**
 * @interface
 * An interface representing ExplicitPostOptionalIntegerHeaderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ExplicitPostOptionalIntegerHeaderOptionalParams extends RequestOptionsBase {
  /**
   * @member {number} [headerParameter]
   */
  headerParameter?: number;
}

/**
 * @interface
 * An interface representing ExplicitPostOptionalStringParameterOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ExplicitPostOptionalStringParameterOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [bodyParameter]
   */
  bodyParameter?: string;
}

/**
 * @interface
 * An interface representing ExplicitPostOptionalStringPropertyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ExplicitPostOptionalStringPropertyOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [value]
   */
  value?: string;
}

/**
 * @interface
 * An interface representing ExplicitPostOptionalStringHeaderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ExplicitPostOptionalStringHeaderOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [bodyParameter]
   */
  bodyParameter?: string;
}

/**
 * @interface
 * An interface representing ExplicitPostOptionalClassParameterOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ExplicitPostOptionalClassParameterOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [bodyParameter]
   */
  bodyParameter?: Product;
}

/**
 * @interface
 * An interface representing ExplicitPostOptionalClassPropertyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ExplicitPostOptionalClassPropertyOptionalParams extends RequestOptionsBase {
  /**
   * @member {Product} [value]
   */
  value?: Product;
}

/**
 * @interface
 * An interface representing ExplicitPostOptionalArrayParameterOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ExplicitPostOptionalArrayParameterOptionalParams extends RequestOptionsBase {
  /**
   * @member {string[]} [bodyParameter]
   */
  bodyParameter?: string[];
}

/**
 * @interface
 * An interface representing ExplicitPostOptionalArrayPropertyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ExplicitPostOptionalArrayPropertyOptionalParams extends RequestOptionsBase {
  /**
   * @member {string[]} [value]
   */
  value?: string[];
}

/**
 * @interface
 * An interface representing ExplicitPostOptionalArrayHeaderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ExplicitPostOptionalArrayHeaderOptionalParams extends RequestOptionsBase {
  /**
   * @member {string[]} [headerParameter]
   */
  headerParameter?: string[];
}
