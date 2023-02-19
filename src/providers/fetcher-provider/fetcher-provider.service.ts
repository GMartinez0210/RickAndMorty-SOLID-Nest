import { Injectable } from '@nestjs/common';

import axios, { AxiosStatic } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');

export interface IFetcherProvider {
  getData<T>(url: string, config: object): Promise<T>;
  getInfo<T>(url: string): Promise<T>;
}

@Injectable()
export class FetcherProviderService implements IFetcherProvider {
  getData<T>(url: string, config: object): Promise<T> {
    return;
  }

  getInfo<T>(url: string): Promise<T> {
    return;
  }
}

@Injectable()
export class LocalDataBaseService implements IFetcherProvider {
  async getData<T>(): Promise<T> {
    const data = {
      info: {
        count: 826,
        pages: 42,
        next: 'https://rickandmortyapi.com/api/character/?page=20',
        prev: 'https://rickandmortyapi.com/api/character/?page=18',
      },
      results: [
        {
          id: 361,
          name: 'Toxic Rick',
          status: 'Dead',
          species: 'Humanoid',
          type: "Rick's Toxic Side",
          gender: 'Male',
          origin: {
            name: 'Alien Spa',
            url: 'https://rickandmortyapi.com/api/location/64',
          },
          location: {
            name: 'Earth',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/27'],
          url: 'https://rickandmortyapi.com/api/character/361',
          created: '2018-01-10T18:20:41.703Z',
        },
      ],
    };

    const result = data as T;

    return result;
  }

  async getInfo<T>(url: string): Promise<T> {
    const data = {
      info: {
        count: 826,
        pages: 42,
        next: 'https://rickandmortyapi.com/api/character/?page=20',
        prev: 'https://rickandmortyapi.com/api/character/?page=18',
      },
    };

    const info = data.info as T;
    return info;
  }
}

@Injectable()
export class AxiosService implements IFetcherProvider {
  private readonly axios: AxiosStatic = axios;

  async getData<T>(url: string, config?: object): Promise<T> {
    const result = await this.axios
      .get<T>(url, config)
      .then((response) => response.data)
      .catch(() => [] as T);

    return result;
  }

  async getInfo<T>(url: string): Promise<T> {
    const data = await this.axios.get<T>(url).then((response) => response.data);

    const result = Object.assign({ info: {} }, data);
    const info = result?.info;

    return info as T;
  }
}

@Injectable()
export class FetchService implements IFetcherProvider {
  async getData<T>(url: string): Promise<T> {
    const data = await fetch(url).then((response) => response.json());
    const result = data as T;

    return result;
  }

  async getInfo<T>(url: string): Promise<T> {
    const data = await fetch(url).then((response) => response.json());
    const result = data.info;
    const info = result as T;

    return info;
  }
}
