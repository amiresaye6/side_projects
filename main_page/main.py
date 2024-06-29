#!/usr/bin/env python3
from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)
@app.route('/')
def main():
    return render_template('main_page.html')

@app.route('/manager')
def index():
    # Read data from data.json
    with open('manhwa_data.json', 'r') as file:
        data = json.load(file)
    return render_template('manhwa_manager_index.html', data=data)

@app.route('/add_entry', methods=['POST'])
def add_entry():
    new_entry = request.json
    if new_entry:
        with open('manhwa_data.json', 'r') as file:
            data = json.load(file)
        data.append(new_entry)
        with open('manhwa_data.json', 'w') as file:
            json.dump(data, file, indent=4)
        return jsonify({"status": "success", "message": "Entry added successfully!"}), 200
    else:
        return jsonify({"status": "error", "message": "Invalid data"}), 400

@app.route('/delete_entry', methods=['POST'])
def delete_entry():
    entry_name = request.json.get("name")
    if entry_name:
        with open('manhwa_data.json', 'r') as file:
            data = json.load(file)
        data = [entry for entry in data if entry["name"] != entry_name]
        with open('manhwa_data.json', 'w') as file:
            json.dump(data, file, indent=4)
        return jsonify({"status": "success", "message": "Entry deleted successfully!"}), 200
    else:
        return jsonify({"status": "error", "message": "Invalid data"}), 400

@app.route('/modify_entry', methods=['POST'])
def modify_entry():
    modified_entry = request.json
    if modified_entry:
        with open('manhwa_data.json', 'r') as file:
            data = json.load(file)
        for entry in data:
            if entry["name"] == modified_entry["name"]:
                entry["chapters_read"] = modified_entry["chapters_read"]
                entry["completed"] = modified_entry["completed"]
        with open('manhwa_data.json', 'w') as file:
            json.dump(data, file, indent=4)
        return jsonify({"status": "success", "message": "Entry modified successfully!"}), 200
    else:
        return jsonify({"status": "error", "message": "Invalid data"}), 400

@app.route('/age', strict_slashes=False)
def age():
    """routs to age calculator page"""
    return render_template('age_calc_index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
    # app.run(debug=True, host='0.0.0.0', port=5000)
