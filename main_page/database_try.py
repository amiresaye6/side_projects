#!/usr/bin/env python3
"""
module for manublating database using python
test consipt:
"""
import mysql.connector


# Establishing the connection
conn = mysql.connector.connect(
    host='localhost',
    user='amirserver',
    password='Amir@mysql1',
    database='manager'
)


# Creating a cursor object
cursor = conn.cursor()

# Step 3: Create a table
create_table_query = """
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
)
"""
cursor.execute('DROP TABLE IF EXISTS users')
# cursor.commit()

cursor.execute(create_table_query)
conn.commit()

# Step 4: Insert data into the table
insert_query = """
INSERT INTO users (name, age, email)
VALUES (%s, %s, %s)
"""
data = [
    ("John Doe", 28, "john@example.com"),
    ("Jane Smith", 22, "jane@example.com"),
    ("Mike Johnson", 35, "mike@example.com")
]
cursor.executemany(insert_query, data)
conn.commit()

# Step 5: Retrieve data from the table
select_query = "SELECT * FROM users"
cursor.execute(select_query)
rows = cursor.fetchall()
for row in rows:
    print(row)

# Step 6: Update data in the table
update_query = """
UPDATE users
SET age = %s
WHERE name = %s
"""
data_to_update = (30, "John Doe")
cursor.execute(update_query, data_to_update)
conn.commit()

# Step 7: Delete data from the table
delete_query = "DELETE FROM users WHERE name = %s"
data_to_delete = ("Jane Smith",)
cursor.execute(delete_query, data_to_delete)
conn.commit()

# Step 8: Close the connection
cursor.close()
conn.close()
