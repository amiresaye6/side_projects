#!/usr/bin/env python3
"""
convert any image to its representation in asccii like so:
WIIL BE ADDED ASAP
converter function that converts img to chars
"""
import cv2 as cv
from sys import argv

if argv[3]:
    print("step = {}".format(argv[3]))
    step = int(argv[3] )
else:
    step = 5
chars_str = " .:;oO8@#█"
img = cv.imread(argv[1], cv.IMREAD_GRAYSCALE)
height, width = img.shape
with open('{}.txt'.format(argv[2]), 'w') as file:
    for y in range(0, height, step):
        for x in range(0, width, step):
            gray_value = img[y, x]
            idx = int((gray_value / 255) * (len(chars_str) - 1))
            char = chars_str[idx]
            file.write(char)
        file.write('\n')
print("ascii img >> {}.txt".format(argv[2]))
