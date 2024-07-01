#!/usr/bin/env python3
"""
module for manublating database using python
"""
import mysql.connector


class DataBase():
    """
    data base class manublator
    """

    # Establishing the connection
    conn = mysql.connector.connect(
        host='localhost',
        user='amirserver',
        password='Amir@mysql1',
        database='manager'
    )

    def create_table(self):
        """
        Create a table named 'users' in the database if it doesn't already exist.

        The 'users' table will have the following columns:
        - id: INT, AUTO_INCREMENT, PRIMARY KEY
        - name: VARCHAR(100), NOT NULL
        - password: VARCHAR(100), NOT NULL
        """
        # Creating a cursor object
        cursor = self.conn.cursor()

        # Step 3: Create a table
        create_table_query = """
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL
        )
        """

        cursor.execute(create_table_query)
        self.conn.commit()

    def creat_user(self, name, password):
        """
        Insert a new user into the 'users' table.

        :param name: The name of the user
        :param password: The password of the user
        """
        # Creating a cursor object
        cursor = self.conn.cursor()

        # Step 4: Insert data
        insert_query = """
        INSERT INTO users (name, password)
        VALUES (%s, %s)
        """

        cursor.execute(insert_query, (name, password))
        self.conn.commit()

    def get_user(self, name, password):
        """
        Retrieve a user from the 'users' table.

        :param name: The name of the user
        :param password: The password of the user
        :return: The user if found, None otherwise
        """
        # Creating a cursor object
        cursor = self.conn.cursor()

        # Step 5: Retrieve data
        select_query = """
        SELECT * FROM users
        WHERE name = %s AND password = %s
        """

        cursor.execute(select_query, (name, password))
        user = cursor.fetchone()

        return user
