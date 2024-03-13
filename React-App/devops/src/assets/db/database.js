const sqlite3 = require('sqlite3').verbose()

const DB_PATH = './devops/src/assets/db/main_database.sqlite';

function openDatabase()
{
    return new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error("Erreur lors de l'ouverture de la base de données", err.message);
        } else {
            console.log('Base de données ouverte avec succès');
        }
    });
}
function create_student_table(db)
{
    const sql = `CREATE TABLE IF NOT EXISTS students (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT,
                    password TEXT
                 )`;
    db.run(sql, function(err) {
        if (err) {
            console.error("Erreur lors de la création de la table students", err.message);
        } else {
            console.log("Table students créée avec succès");
        }
    });
}


function delete_table(tableName,db)
{
    const sql = `DROP TABLE IF EXISTS ${tableName}`;
    db.run(sql, function(err) {
        if (err) {
            console.error("Erreur lors de la suppression de la table", err.message);
        } else {
            console.log(`Table "${tableName}" supprimée avec succès`);
        }
    });
    db.close((err) => {
        if (err) {
            console.error("Erreur lors de la fermeture de la base de données", err.message);
        } else {
            console.log('Base de données fermée avec succès');
        }
    });
}

function add_teacher(username_, name_, surname_, password_, db) {
    const sql = `INSERT INTO teachers(username, name, surname, password) VALUES (?, ?, ?, ?)`;
    db.run(sql, [username_, name_, surname_, password_], function (err) {
        if (err) {
            console.error("Erreur lors de l'ajout de l'utilisateur", err.message);
        } else {
            console.log(`Utilisateur ajouté avec l'ID: ${this.lastID}`);
        }
    });
}

function add_student(username, password, db) {
    const sql = `INSERT INTO students(username, password) VALUES (?, ?)`;
    db.run(sql, [username, password], function (err) {
        if (err) {
            console.error(`Erreur lors de l'ajout de l'utilisateur dans la table students: ${err.message}`);
        } else {
            console.log(`Étudiant ajouté avec l'ID: ${this.lastID}`);
        }
    });
}
function show_table(table_name, db) {
    db.serialize(() => {
        const sql = `SELECT * FROM ${table_name}`;
        db.each(sql, (err, row) => {
            if (err) {
                console.error("Erreur lors de la lecture des données", err.message);
            }
            else
            {
                console.log(JSON.stringify(row));
            }
        });
    });
}

function readData(username, password) {
    return new Promise((resolve, reject) => {


        const db = openDatabase();
        add_student(username,password,db)
        let sql = `SELECT * FROM teachers WHERE username = ? AND password = ?`;
        db.get(sql, [username, password], (err, row) => {
            if (err) {
                console.error("Erreur lors de la lecture des données", err.message);
                resolve(0);
            } else {
                if (row) {
                    console.log('Utilisateur trouvé dans la table teachers:', JSON.stringify(row));
                    resolve(1);
                }
                else {
                    sql = `SELECT * FROM students WHERE username = ? AND password = ?`;
                    db.get(sql, [username, password], (err, row) => {
                        if (err) {
                            console.error("Erreur lors de la lecture des données", err.message);
                            resolve(0);
                        } else {
                            if (row) {
                                console.log('Utilisateur trouvé dans la table students:', JSON.stringify(row));
                                resolve(2);
                            } else {
                                resolve(0);
                            }
                        }
                    });
                }
            }
        });
        db.close();
    });
}
module.exports = (username,password) => {
    return readData(username,password);
};


