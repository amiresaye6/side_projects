#!/usr/bin/env python3
from flask import Flask, request, send_file, render_template
import os
import subprocess
import noisereduce as nr
import librosa
import soundfile as sf

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
PROCESSED_FOLDER = 'processed'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    if file.filename == '':
        return 'No selected file'
    if file:
        filepath = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(filepath)
        processed_video_path = process_video(filepath)
        return send_file(processed_video_path, as_attachment=True)

def extract_audio(video_file, output_audio_file):
    command = f"ffmpeg -i {video_file} -q:a 0 -map a {output_audio_file}"
    subprocess.call(command, shell=True)

def reduce_noise(input_audio_file, output_audio_file):
    y, sr = librosa.load(input_audio_file, sr=None)
    reduced_noise = nr.reduce_noise(y=y, sr=sr)
    sf.write(output_audio_file, reduced_noise, sr)

def replace_audio_in_video(input_video_file, input_audio_file, output_video_file):
    command = f"ffmpeg -i {input_video_file} -i {input_audio_file} -c:v copy -map 0:v:0 -map 1:a:0 {output_video_file}"
    subprocess.call(command, shell=True)

def process_video(video_file):
    base_filename = os.path.splitext(os.path.basename(video_file))[0]
    extracted_audio_file = os.path.join(PROCESSED_FOLDER, f"{base_filename}_extracted.wav")
    cleaned_audio_file = os.path.join(PROCESSED_FOLDER, f"{base_filename}_cleaned.wav")
    output_video_file = os.path.join(PROCESSED_FOLDER, f"{base_filename}_output.mp4")

    extract_audio(video_file, extracted_audio_file)
    reduce_noise(extracted_audio_file, cleaned_audio_file)
    replace_audio_in_video(video_file, cleaned_audio_file, output_video_file)

    return output_video_file

if __name__ == '__main__':
    app.run(debug=True)
