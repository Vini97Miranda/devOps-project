#!/usr/bin/env python3
import sys
import sqlite3
import json
import os

def add_user(username, password, remember):

    conn = sqlite3.connect('../assets/database/user_database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT COUNT(*) FROM users WHERE username = ?', (username,))
    user_count = cursor.fetchone()[0]

    if user_count == 0:
        cursor.execute('''
                INSERT INTO users (username, password, remember)
                VALUES (?, ?, ?)
            ''', (username, password, remember))
        conn.commit()
        conn.close()
        return True
    else:
        conn.close()
        return False

def show_database():

    conn = sqlite3.connect('../database/user_database.db')
    #conn = sqlite3.connect('../../database/user_database.db')
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM users')
    users = cursor.fetchall()

    print("User in Database : ")
    for user in users:
        print("ID:", user[0])
        print("Username:", user[1])
        print("Password:", user[2])
        print("Remember:", bool(user[3]))
        print()

    conn.close()

def clear_database():
    conn = sqlite3.connect('../database/user_database.db')
    cursor = conn.cursor()
    cursor.execute('DELETE FROM users')
    conn.commit()
    conn.close()

def supp_file(file_path):
    if os.path.exists(file_path):
        os.remove(file_path)


if __name__ == "__main__":


    # ONLY IF YOU TEST IN THIS FILE WITH PYTHON COMPILER
    # database_path '../../database/user_database.db'

    '''
    username = sys.argv[1]
    password = sys.argv[2]
    Remember = sys.argv[3]

    print(add_user(username, password, Remember))
    '''
    
    show_database()
    #clear_database()








