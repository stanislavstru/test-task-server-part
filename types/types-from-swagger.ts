/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Task {
  id: string;
  title: string;
  color: '#FF3B30' | '#FF9500' | '#FFCC00' | '#34C759' | '#007AFF' | '#5856D6' | '#AF52DE' | '#FF2D55' | '#A2845E';
  completed: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
}

export interface TaskCreate {
  title: string;
  color: '#FF3B30' | '#FF9500' | '#FFCC00' | '#34C759' | '#007AFF' | '#5856D6' | '#AF52DE' | '#FF2D55' | '#A2845E';
  completed: boolean;
}

export interface TaskUpdate {
  title?: string;
  color?: '#FF3B30' | '#FF9500' | '#FFCC00' | '#34C759' | '#007AFF' | '#5856D6' | '#AF52DE' | '#FF2D55' | '#A2845E';
  completed?: boolean;
  id_deleted?: boolean;
}
