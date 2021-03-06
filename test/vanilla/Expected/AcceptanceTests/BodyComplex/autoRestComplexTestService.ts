/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";

const packageName = "";
const packageVersion = "";

class AutoRestComplexTestService extends msRest.ServiceClient {
  apiVersion: string;
  baseUri: string;

  // Operation groups
  basic: operations.BasicOperations;
  primitive: operations.Primitive;
  arrayModel: operations.ArrayModel;
  dictionary: operations.Dictionary;
  inheritance: operations.Inheritance;
  polymorphism: operations.Polymorphism;
  polymorphicrecursive: operations.Polymorphicrecursive;
  readonlyproperty: operations.Readonlyproperty;
  serializer: msRest.Serializer;

  /**
   * @class
   * Initializes a new instance of the AutoRestComplexTestService class.
   * @constructor
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(baseUri?: string, options?: msRest.ServiceClientOptions) {

    if (!options) options = {};

    super(undefined, options);

    this.apiVersion = '2014-04-01-preview';
    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost';
    }

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    this.basic = new operations.BasicOperations(this);
    this.primitive = new operations.Primitive(this);
    this.arrayModel = new operations.ArrayModel(this);
    this.dictionary = new operations.Dictionary(this);
    this.inheritance = new operations.Inheritance(this);
    this.polymorphism = new operations.Polymorphism(this);
    this.polymorphicrecursive = new operations.Polymorphicrecursive(this);
    this.readonlyproperty = new operations.Readonlyproperty(this);
    this.serializer = new msRest.Serializer(Mappers);
  }
}

export { AutoRestComplexTestService, Models as AutoRestComplexTestServiceModels, Mappers as AutoRestComplexTestServiceMappers };
