// Необхідні змінні
let last_port_id = 0;
let ports_list = new Array();

// Клас - лікарня
class Port {

    constructor (name, address, id) {

        this.id = id;
        this.name = name;
        this.address = address;

        if (id === "" ||
            typeof id      === 'undefined') { this.id      = ++last_port_id; }
        if (name === "" ||
            typeof name    === 'undefined') { this.name    = "Невідома портий"; }
        if (address === "" ||
            typeof address === 'undefined') { this.address = "Не встановлено";   }

    }
}

// ...............................................................................................

// Додавання нової лікарні
function add_port (name, address, id) {

    let port = new Port(name, address, id);
    ports_list.push(port);

    return port;

}

// Видалення лікарні з колекції
function remove_port (id) {

    for (let z = 0; z < ports_list.length; z++) {

        let port = ports_list[z];
        if (port.id === id) {
          ports_list.splice(z, 1);
          last_port_id--;
          return 1;
        }

    }

    return -1;

}

// ...............................................................................................

// Повертаємо список усіх лікарень
function get_ports_list()
    { return ports_list; }

// Задаємо список усіх лікарень
function set_ports_list (data) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
        add_port(element.name,
                     element.address,
                     element.id);
    }
}

// Повертає лікарню по її id
function get_port_by_id (id) {

    for (let z = 0; z < ports_list.length; z++) {

        let port = ports_list[z];
        if (port.id === id) { return port; }

    }

    return -1;

}

// ...............................................................................................

// Редагувати лікарню в колекції
function edit_port (id, new_name, new_address) {

    for (let z = 0; z < ports_list.length; z++) {

        let port = ports_list[z];

        if (port.id === id) { port.name = new_name;
                                  port.address = new_address;
                                  return 1; }

    }

    return -1;

}

// ...............................................................................................

// Знайти лікарню в колекції
function find_ports (search) {

    let result = [];
    search = search.toLowerCase();

    for (let port of ports_list) {

        let attributes = [ port.name,
                           port.address ];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(port);
                                                       break;
            }
        }
    }

    return result;

}

// ...............................................................................................

// Вивести в консоль список лікарень
function print_hospitals_list() {

    console.log("\n" + "Список усіх портів:");

    for (let z = 0; z < ports_list.length; z++) {

        let port = ports_list[z];
        console.log("\t" + "Назва порту: "  + port.name);
        console.log("\t" + "Адреса порту: " + port.address);
        console.log("\t" + "ID: "             + port.id);

    }
}
