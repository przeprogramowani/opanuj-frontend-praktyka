/* tslint:disable */
/* eslint-disable */
/**
 * Rick and Morty API
 * To API pozwala uzyskiwać informacje o bohaterach serialu Rick and Morty.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CharacterOrigin } from './CharacterOrigin';
import {
    CharacterOriginFromJSON,
    CharacterOriginFromJSONTyped,
    CharacterOriginToJSON,
} from './CharacterOrigin';
import type { CharacterLocation } from './CharacterLocation';
import {
    CharacterLocationFromJSON,
    CharacterLocationFromJSONTyped,
    CharacterLocationToJSON,
} from './CharacterLocation';

/**
 * 
 * @export
 * @interface Character
 */
export interface Character {
    /**
     * Unikalny identyfikator postaci
     * @type {number}
     * @memberof Character
     */
    id?: number;
    /**
     * Nazwa postaci
     * @type {string}
     * @memberof Character
     */
    name?: string;
    /**
     * Status postaci (np. Alive, Dead)
     * @type {string}
     * @memberof Character
     */
    status?: string;
    /**
     * Gatunek postaci
     * @type {string}
     * @memberof Character
     */
    species?: string;
    /**
     * Dodatkowa klasyfikacja postaci (np. Cyborg)
     * @type {string}
     * @memberof Character
     */
    type?: string;
    /**
     * Płeć postaci
     * @type {string}
     * @memberof Character
     */
    gender?: string;
    /**
     * 
     * @type {CharacterOrigin}
     * @memberof Character
     */
    origin?: CharacterOrigin;
    /**
     * 
     * @type {CharacterLocation}
     * @memberof Character
     */
    location?: CharacterLocation;
    /**
     * URL do obrazu postaci
     * @type {string}
     * @memberof Character
     */
    image?: string;
    /**
     * Lista odcinków, w których wystąpiła postać
     * @type {Array<string>}
     * @memberof Character
     */
    episode?: Array<string>;
    /**
     * URL do szczegółowych informacji o postaci
     * @type {string}
     * @memberof Character
     */
    url?: string;
    /**
     * Data utworzenia postaci w bazie danych
     * @type {Date}
     * @memberof Character
     */
    created?: Date;
}

/**
 * Check if a given object implements the Character interface.
 */
export function instanceOfCharacter(value: object): value is Character {
    return true;
}

export function CharacterFromJSON(json: any): Character {
    return CharacterFromJSONTyped(json, false);
}

export function CharacterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Character {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'status': json['status'] == null ? undefined : json['status'],
        'species': json['species'] == null ? undefined : json['species'],
        'type': json['type'] == null ? undefined : json['type'],
        'gender': json['gender'] == null ? undefined : json['gender'],
        'origin': json['origin'] == null ? undefined : CharacterOriginFromJSON(json['origin']),
        'location': json['location'] == null ? undefined : CharacterLocationFromJSON(json['location']),
        'image': json['image'] == null ? undefined : json['image'],
        'episode': json['episode'] == null ? undefined : json['episode'],
        'url': json['url'] == null ? undefined : json['url'],
        'created': json['created'] == null ? undefined : (new Date(json['created'])),
    };
}

export function CharacterToJSON(value?: Character | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'status': value['status'],
        'species': value['species'],
        'type': value['type'],
        'gender': value['gender'],
        'origin': CharacterOriginToJSON(value['origin']),
        'location': CharacterLocationToJSON(value['location']),
        'image': value['image'],
        'episode': value['episode'],
        'url': value['url'],
        'created': value['created'] == null ? undefined : ((value['created']).toISOString()),
    };
}

