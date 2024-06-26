#!/usr/bin/env python3
import os
import subprocess
import librosa
import numpy as np
import soundfile as sf
from scipy.signal import butter, lfilter

# Define the file path for the input audio file and the output directory
file_path = 'uploads/test_audio.mp3'
output_folder = 'processed'

# Ensure the output directory exists
os.makedirs(output_folder, exist_ok=True)

def convert_to_wav(input_file, output_file):
    """Convert an audio file to WAV format using ffmpeg."""
    command = f"ffmpeg -i {input_file} {output_file}"
    subprocess.call(command, shell=True)

def butter_bandpass(lowcut, highcut, fs, order=5):
    """Design a Butterworth bandpass filter."""
    nyquist = 0.5 * fs
    low = lowcut / nyquist
    high = highcut / nyquist
    b, a = butter(order, [low, high], btype='band')
    return b, a

def bandpass_filter(data, lowcut, highcut, fs, order=5):
    """Apply a bandpass filter to the given data."""
    b, a = butter_bandpass(lowcut, highcut, fs, order=order)
    y = lfilter(b, a, data)
    return y

def process_audio(file_path):
    """Process an audio file to isolate vocals."""
    try:
        # Load the audio file with librosa
        y, sr = librosa.load(file_path, sr=None)
    except Exception as e:
        print(f"Error loading {file_path} with librosa: {e}")
        return None

    # Apply a bandpass filter to isolate vocal frequencies (typically between 300 and 3400 Hz)
    lowcut = 300.0
    highcut = 3400.0
    y_filtered = bandpass_filter(y, lowcut, highcut, sr)

    # Save the filtered audio to a new file
    base_filename = os.path.splitext(os.path.basename(file_path))[0]
    vocal_path = os.path.join(output_folder, f"{base_filename}_vocals.wav")
    sf.write(vocal_path, y_filtered, sr)

    return vocal_path

# Ensure the input file is in WAV format
if file_path.lower().endswith('.mp3'):
    wav_file_path = os.path.join('uploads', os.path.splitext(os.path.basename(file_path))[0] + '.wav')
    convert_to_wav(file_path, wav_file_path)
    file_path = wav_file_path

# Process the audio file and get the path to the vocal track
vocal_track_path = process_audio(file_path)
if vocal_track_path:
    print(f'Vocal track saved at: {vocal_track_path}')
else:
    print('Failed to process the audio file.')
