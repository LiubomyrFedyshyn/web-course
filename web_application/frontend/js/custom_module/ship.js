// Необхідні змінні
let last_ship_id = 0;
let ships_list = new Array();

// Клас - пацієнт
class Ship {

    // Конструктор класу
    constructor (name, unicID, pier, port, id) {

        this.id = id;
        this.unicID = unicID;
        this.name = name;
        this.pier = pier;
        this.port = port;

        if (id === "" ||
            typeof id       === 'undefined') { this.id       = ++last_ship_id;   }
        if (unicID === "" ||
            typeof unicID      === 'undefined') { this.unicID      = "Не встановлено";    }
        if (name === "" ||
            typeof name     === 'undefined') { this.name     = "Невідомий "; }
        if (pier === "" ||
            typeof pier   === 'undefined') { this.pier   = "Не встановлено";     }
        if (port === "" ||
            typeof port === 'undefined') { this.port = "Не встановлено";    }

    }
}

// ...............................................................................................

// Додавання нового пацієнта
function add_ship (name, unicID, pier, port) {

    let ship = new Ship(name, unicID, pier, port);
    ships_list.push(ship);

    return ship;

}


// Видалити пацієнта з колекції
function remove_ship (id) {

    for (let z = 0; z < ships_list.length; z++) {

        let ship = ships_list[z];
        if (ship.id === id) {
          ships_list.splice(z, 1);
          last_ship_id--;
          return 1;
        }

    }

    return -1;

}


// ...............................................................................................

// Повертаємо список усіх пацієнтів
function get_ships_list (cured) {
    return ships_list;
}

// Задаємо список усіх пацієнтів
function set_ships_list (data) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
            add_ship(element.name,
                        element.unicID,
                        element.pier,
                        element.port,
                        element.id);
    }
}

// Повертає пацієнта по його id
function get_ship_by_id (id) {

    let list = ships_list;

    for (let z = 0; z < list.length; z++) {

        let ship = list[z];
        if (ship.id === id) { return ship; }

    }

    return -1;

}

// ...............................................................................................

// Редагувати лікаря в колекції
function edit_ship (id, new_name, unicID, new_pier, new_port) {

    for (let z = 0; z < ships_list.length; z++) {

        let ship = ships_list[z];

        if (ship.id === id) { ship.unicID = unicID;
                                 ship.name = new_name;
                                 ship.pier = new_pier;
                                 ship.port = new_port;
                                 return 1; }

    }

    return -1;

}

// ...............................................................................................

// Знайти лікаря в колекції
function find_ship (search) {

    let result = [];
    let list = ships_list;

    search = search.toLowerCase();

    for (let ship of list) {

        let attributes = [ ship.name,
                           ship.pier,
                           ship.port ];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(ship);
                                                       break;
            }
        }
    }

    return result;

}

// ...............................................................................................

// Вивести в консоль список пацієнтів
function print_ships_list () {

    let list = ships_list;

    console.log("\n" + "Список усіх кораблів:");

    for (let z = 0; z < list.length; z++) {

        let item = list[z];
        console.log("\t" + "Назва: " + item.name);
        console.log("\t" + "Унікальне поле: "    + item.unicID);
        console.log("\t" + "Пристань: "           + item.pier);
        console.log("\t" + "Порт: "         + item.port);
        console.log("\t" + "ID: "              + item.id);

    }
}
