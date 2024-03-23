#!/usr/bin/python3
from hijri_converter import Gregorian
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def main():
    """Renders the main page"""
    return render_template("index.html")

@app.route('/get_date', methods=['POST'])
def process_date():
    """Processes the form data and returns the Hijri date"""
    day = int(request.form['day'])
    month = int(request.form['month'])
    year = int(request.form['year'])
    
    hijri_date = Gregorian(year, month, day).to_hijri()
    
    # Format the Hijri date as required
    hijri_day_name = hijri_date.day_name('ar')
    hijri_day = hijri_date.day
    hijri_month_name = hijri_date.month_name('ar')
    hijri_year = hijri_date.year
    hijri_output = f"{hijri_day_name} {hijri_day} من {hijri_month_name} سنة {hijri_year} هـ"
    
    return render_template('index.html', hijri_date=hijri_output)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
