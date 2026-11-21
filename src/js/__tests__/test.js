import Team from '../app.js';

describe('Методы класса Team', () => {
  test('метод toArray возвращает массив из элементов Set', () => {
    const team = new Team();
    const daemon = { name: 'Igor' };
    const zombie = { name: 'Boris' };
    const bowman = { name: 'Sergei' };

    team.add(daemon);
    team.add(zombie);
    team.add(bowman);

    const result = team.toArray();
    expect(result).toEqual([daemon, zombie, bowman]);
  });

  test('метод add добавляет первого персонажа', () => {
    const daemon = { name: 'Igor' };
    const team = new Team();
    team.add(daemon);
    expect(team.toArray()).toEqual([{ name: 'Igor' }]);
  });

  test('метод add добавляет двух разных персонажей', () => {
    const daemon = { name: 'Igor' };
    const zombie = { name: 'Igor' };
    const team = new Team();
    team.add(daemon);
    team.add(zombie);
    expect(team.toArray()).toEqual([daemon, zombie]);
  });

  test('метод add выбрасывает ошибку при добавлении уже добавленного персонажа', () => {
    const daemon = { name: 'Igor' };
    const team = new Team();
    team.add(daemon);
    expect(() => team.add(daemon)).toThrow('Данный игрок уже выбран в команду');
  });

  test('метод addAll добавляет и отсеевает дублирующихся персонажей', () => {
    const daemon = { name: 'Igor' };
    const zombie = { name: 'Igor' };
    const bowman = { name: 'Igor' };

    const team = new Team();
    team.addAll(daemon, bowman, daemon, zombie, bowman);

    expect(team.toArray()).toEqual([daemon, bowman, zombie]);
  });
});
