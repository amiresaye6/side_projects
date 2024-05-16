#!/usr/bin/env python3
"""
convert any image to its representation in asccii like so:
WIIL BE ADDED ASAP
"""
import cv2 as cv


def converter(*args):
    """
    converter function that converts img to chars
    """
    chars_str = " .:;oO8@#█"
    img = cv.imread(args[0], cv.IMREAD_GRAYSCALE)
    height, width = img.shape

    if len(args) < 1:
        print("must enter a file name")

    with open('pixel_values.txt', 'w') as file:
        for y in range(height):
            for x in range(width):
                gray_value = img[y, x]

                idx = int((gray_value / 255) * (len(chars_str) - 1))
                char = chars_str[idx]
                file.write(char)
            file.write('\n')
    print("ascii img >> pixel_values.txt")



converter("img2.jpg")
