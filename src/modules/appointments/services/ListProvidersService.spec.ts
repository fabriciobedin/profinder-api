import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProviders = new ListProvidersService(
      fakeUsersRepository,
      fakeCacheProvider
    );
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Fabricio Bedin',
      email: 'fabricioobedin@gmail.com',
      password: '123456'
    });

    const user2 = await fakeUsersRepository.create({
      name: 'fabricio',
      email: 'fabricio-bedin@hotmail.com',
      password: '123456'
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Bedin',
      email: 'bedinfabricio@gmail.com',
      password: '123456'
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id
    });

    expect(providers).toEqual([user1, user2]);
  });
});
