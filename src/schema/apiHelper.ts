import DataLoader from 'dataloader'

import {
  getFromLocalUrl
} from '../api';

var localUrlLoader = new DataLoader(
  (urls: readonly string[]) => Promise.all(urls.map(getFromLocalUrl))
);

/**
 * Objects returned from GOT API don't have an ID field, so add one.
 */
function objectWithId(obj: any): any {
  if (obj && obj.url) {
    obj.id = obj.url.match(/(?<type>[a-z]+)\/(?<id>[0-9]+)/).groups.id;
  }
  return obj;
}

/**
 * Given an object URL, fetch it, append the ID to it, and return it.
 */
export async function getObjectFromUrl(url: string): Promise<any> {
  var dataString = await localUrlLoader.load(url);
  var data = JSON.parse(dataString);
  return objectWithId(data);
}

/**
 * Given a type and ID, get the object with the ID.
 */
export async function getObjectFromTypeAndId(
  type: string,
  id: string
): Promise<any> {
  /* eslint-disable max-len */
  return await getObjectFromUrl(`http://anapioficeandfire.com/api/${type}/${id}/`);
}

/**
 * Quick helper method, if the user just passes `first`, we can stop
 * fetching once we have that many items.
 */
function doneFetching(objects: Array<any>, args?: any): boolean {
  if (!args || args.after || args.before || args.last || !args.first) {
    return false;
  }
  return objects.length >= args.first;
}

type ObjectsByType = {
  objects: Array<any>,
  totalCount: number
}

/**
 * Given a type, fetch all of the pages, and join the objects together
 */
export async function getObjectsByType(
  type: string,
  args?: Object
): Promise<ObjectsByType> {
  var objects = [];
  var totalCount = 0;
  var nextUrl = `http://anapioficeandfire.com/api/${type}/`;
  while (nextUrl && !doneFetching(objects, args)) {
    var pageData = await localUrlLoader.load(nextUrl);
    var parsedPageData = JSON.parse(pageData);
    totalCount = parsedPageData.count;
    objects = objects.concat(parsedPageData.results.map(objectWithId));
    nextUrl = parsedPageData.next;
  }
  return { objects, totalCount };
}
