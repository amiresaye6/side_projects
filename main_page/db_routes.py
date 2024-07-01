#!/usr/bin/env python3
"""
test module for educational purposes
"""
from flask import Flask, render_template, request, jsonify
from dataBase import DataBase



app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def login():
    if (request.method == 'POST'):
        dataBase = DataBase()
        user_name = request.form['username']
        password = request.form['password']
        dataBase.creat_user(user_name, password)
        return jsonify(dataBase.get_user(user_name, password)), 200
    return render_template('login.html')

if __name__ == "__main__":
    app.run(debug=True, host= "0.0.0.0")
