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

function readData(username,password) {
    console.log(username)
    console.log(password)
    const db = openDatabase();
    add_teacher(username,username,username,password,db);
    show_table("teachers",db)
}
module.exports = (username,password) => {
    return readData(username,password);
};


