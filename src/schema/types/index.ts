/**
 * Book Type
 */

import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import {
  globalIdField
} from 'graphql-relay';

import { nodeInterface } from '../relayNode';
import { connectionFromUrls } from '../connections';
import { getObjectFromUrl } from '../apiHelper';

/**
 * The GraphQL type equivalent of the Book resource
 */
let BookType = new GraphQLObjectType({
  name: 'Book',
  description:
    `A single book.`,
  fields: () => ({
    name: {
      type: GraphQLString,
      description:
        `The title of this book.`
    },
    iSBN: {
      type: GraphQLString,
      description:
        `The book ISBN.`
    },
    authors: {
      type: new GraphQLList(GraphQLString),
      resolve: (book) => book.authors,
      description:
        `The name(s) of the author(s) of this book.`
    },
    numberOfPages: {
      type: GraphQLInt,
      description:
        `Number of pages in the book.`
    },
    publisher: {
      type: GraphQLString,
      description:
        `The publisher of the book.`
    },
    country: {
      type: GraphQLString,
      description:
        `The country of origin.`
    },
    mediaType: {
      type: GraphQLString,
      description:
        `The book binding material.`
    },
    releaseDate: {
      type: GraphQLString,
      description:
        `The ISO 8601 date format of book release at original creator country.`
    },
    characterConnection: connectionFromUrls(
      'BookCharacters',
      'characters',
      CharacterType
    ),
    povCharacterConnection: connectionFromUrls(
      'BookPovCharacters',
      'povCharacters',
      CharacterType
    ),
    id: globalIdField('books')
  }),
  interfaces: () => [nodeInterface]
});

/**
 * House Type
 */


/**
 * The GraphQL type equivalent of the House resource
 */
let HouseType: GraphQLObjectType = new GraphQLObjectType({
  name: 'House',
  description:
    `A ruling dynasty.`,
  fields: () => ({
    name: {
      type: GraphQLString,
      description:
        `The name of this house.`
    },
    region: {
      type: GraphQLString,
      description:
        `The region this house is governs.`
    },
    coatOfArms: {
      type: GraphQLString,
      description:
        `A description of the coat of arms of this house.`
    },
    words: {
      type: GraphQLString,
      description:
        `The house words.`
    },
    titles: {
      type: new GraphQLList(GraphQLString),
      resolve: (house) => house.titles,
      description:
        `The titles this house possesses.`
    },
    seats: {
      type: new GraphQLList(GraphQLString),
      resolve: (house) => house.seats,
      description:
        `The seats this house sit at or formerly sat at.`
    },
    currentLord: {
      type: CharacterType,
      resolve: (house) => {
        if (house.currentLord.indexOf('null') >= 0) { return null; }
        return getObjectFromUrl(house.currentLord);
      }
    },
    heir: {
      type: CharacterType,
      resolve: (house) => {
        if (house.heir.indexOf('null') >= 0) { return null; }
        return getObjectFromUrl(house.heir);
      }
    },
    overlord: {
      type: HouseType,
      resolve: (house) => {
        if (house.overlord.indexOf('null') >= 0) { return null; }
        return getObjectFromUrl(house.overlord);
      }
    },
    founded: {
      type: GraphQLString,
      description:
        `When the house was founded`
    },
    founder: {
      type: CharacterType,
      resolve: (house) => {
        if (house.founder.indexOf('null') >= 0) { return null; }
        return getObjectFromUrl(house.founder);
      }
    },
    diedOut: {
      type: GraphQLString,
      description:
        `When this house died out.`
    },
    ancestralWeapons: {
      type: new GraphQLList(GraphQLString),
      resolve: (house) => house.ancestralWeapons,
      description:
        `Ancestral weapons owned by this hoouse.`
    },
    cadetBranchConnection: connectionFromUrls(
      'HouseCadetBranches',
      'cadetBranches',
      HouseType
    ),
    memberConnection: connectionFromUrls(
      'HouseSwornMembers',
      'swornMembers',
      CharacterType
    ),
    id: globalIdField('houses')
  }),
  interfaces: () => [nodeInterface]
});

/**
 * Character Type
 */

/**
 * The GraphQL type equivalent of the Character resource
 */
let CharacterType: GraphQLObjectType = new GraphQLObjectType({
  name: "Character",
  description: `An individual person within the Game of Thrones universe.`,
  fields: () => characterFields(),
  interfaces: () => [nodeInterface],
});

const characterFields = () => ({
  name: {
    type: GraphQLString,
    description: `The name of character.`,
  },
  culture: {
    type: GraphQLString,
    description: `The culture of character.`,
  },
  titles: {
    type: new GraphQLList(GraphQLString),
    description: `The titles character holds.`,
  },
  aliases: {
    type: new GraphQLList(GraphQLString),
    description: `Other names character is known by.`,
  },
  born: {
    type: GraphQLString,
    description: `The birth year of character.`,
  },
  died: {
    type: GraphQLString,
    description: `The year of character's death.`,
  },
  foundedHouseConnection: connectionFromUrls(
    "CharacterFoundedHouses",
    "foundedHouses",
    HouseType
  ),
  lordOfHouseConnection: connectionFromUrls(
    "CharacterCurrentLordOfHouses",
    "currentLordOfHouses",
    HouseType
  ),
  father: {
    type: CharacterType,
    resolve: (person) => {
      if (person.father.indexOf("null") >= 0) {
        return null;
      }
      return getObjectFromUrl(person.father);
    },
    description: `Character's father.`,
  },
  mother: {
    type: CharacterType,
    resolve: (person) => {
      if (person.mother.indexOf("null") >= 0) {
        return null;
      }
      return getObjectFromUrl(person.mother);
    },
    description: `Character's mother.`,
  },
  spouse: {
    type: CharacterType,
    resolve: (person) => {
      if (person.spouse.indexOf("null") >= 0) {
        return null;
      }
      return getObjectFromUrl(person.spouse);
    },
    description: `This person's spouse.`,
  },
  childrenConnection: connectionFromUrls(
    "CharacterChildren",
    "children",
    CharacterType
  ),
  allegianceConnection: connectionFromUrls(
    "CharacterAllegiances",
    "allegiances",
    HouseType
  ),
  bookConnection: connectionFromUrls("CharacterBooks", "books", BookType),
  povBookConnection: connectionFromUrls(
    "CharacterPovBooks",
    "povBooks",
    BookType
  ),
  playedBy: {
    type: new GraphQLList(GraphQLString),
    description: `The actor character is played by.`,
  },
  tvSeries: {
    type: new GraphQLList(GraphQLString),
    description: `The TV Series character is in.`,
  },
  id: globalIdField("characters"),
});

export {
  BookType,
  CharacterType,
  HouseType,
}