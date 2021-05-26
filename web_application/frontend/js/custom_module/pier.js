// Необхідні змінні
let last_pier_id = 0;
let piers_list = new Array();

// Клас - лікар
class Pier {

    constructor (number, shipCount, port, id) {

        this.id = id;
        this.number = number;
        this.shipCount = shipCount;
        this.port = port;

        if (id === "" ||
            typeof id       === 'undefined') { this.id       = ++last_pier_id;  }
        if (number === "" ||
            typeof number      === 'undefined') { this.number     = "Не встановлено";  }
        if (shipCount === "" ||
            typeof shipCount     === 'undefined') { this.shipCount     = "Невідомий лікар"; }
        if (port === "" ||
            typeof port === 'undefined') { this.port = "Не встановлено";  }

    }
}

// ...............................................................................................

// Додавання нового лікаря
function add_pier (number, shipCount, port, id) {

    let pier = new Pier(number, shipCount, port, id);
    piers_list.push(pier);

    return pier;

}

// Видалити лікаря з колекції
function remove_pier (id) {

    for (let z = 0; z < piers_list.length; z++) {

        let pier = piers_list[z];
        if (pier.id === id) { piers_list.splice(z, 1);
          last_pier_id--;
                                return 1; }

    }

    return -1;

}

// ...............................................................................................

// Повертаємо список усіх лікарів
function get_piers_list()
    { return piers_list; }

// Задаємо список усіх лікарів
function set_piers_list (data) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
        add_pier(element.number,
                   element.shipCount,
                   element.port,
                   element.id);
    }
}

// Повертає лікаря по його id
function get_pier_by_id (id) {

    for (let z = 0; z < piers_list.length; z++) {

        let pier = piers_list[z];
        if (pier.id === id) { return pier; }

    }

    return -1;

}

// ...............................................................................................

// Редагувати лікаря в колекції
function edit_pier (id, new_number, new_shipCount, port) {

    for (let z = 0; z < piers_list.length; z++) {

        let pier = piers_list[z];

        if (pier.id === id) { pier.shipCount = new_shipCount;
                                doctor.number = new_number;
                                doctor.port = port;
                                return 1; }

    }

    return -1;

}

// ...............................................................................................

// Знайти лікаря в колекції
function find_piers (search) {

    let result = [];
    search = search.toLowerCase();

    for (let pier of piers_list) {

        let attributes = [ pier.number,
                           pier.port ];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(pier);
                                                       break;
            }
        }
    }

    return result;

}

// ...............................................................................................

// Вивести в консоль список лікарів
function print_piers_list() {

    console.log("\n" + "Список усіх пристаней:");

    for (let z = 0; z < piers_list.length; z++) {

        let pier = piers_list[z];
        console.log("\t" + "Номер: " + pier.number);
        console.log("\t" + "Кількість кораблів: "    + pier.shipCount);
        console.log("\t" + "Порт: "       + pier.port);
        console.log("\t" + "ID: "            + pier.id);

    }
}
