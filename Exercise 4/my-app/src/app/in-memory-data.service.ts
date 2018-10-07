import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Hero 1' },
      { id: 12, name: 'Hero 2' },
      { id: 13, name: 'Hero 3' },
      { id: 14, name: 'Batman' },
      { id: 15, name: 'Spiderman' },
      { id: 16, name: 'Cookie' },
      { id: 17, name: 'Wonderwoman' },
      { id: 18, name: 'One more hero' },
      { id: 19, name: 'Cooler hero' },
      { id: 20, name: 'Hero again' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
