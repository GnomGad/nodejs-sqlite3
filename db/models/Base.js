/**
 * Класс отец для моделей
 */
class Base {
    /**
     *
     * @param {Database} db база данных
     * @param {Base} models объект с остальными моделями
     * @param {string} name название таблицы в базе данных для обращения
     */
    constructor(db, models, name = "") {
        setDB(db);
        this.models = models;
        setName(name);
    }
    /**
     * установить бд с проверкой
     * @param {Database} db
     */
    setDB(db) {
        if (!db) {
            throw Error("DB пустая");
        }
        this.db = db;
    }
    /**
     * установить имя таблицы в бд
     * @param {string} name имя таблицы в бд
     */
    setName(name) {
        if (!name) {
            throw Error("Имя пустое");
        }
        this.name = name;
    }

    /**
     * Возврат всех объектов
     * @returns {Promise<[Object]>}
     */
    getAll() {
        return this.db.all(`SELECT * FROM ${this.name}`, []);
    }
}

module.exports = Base;
