import re
import regex


def test_regex_1():
    pattern = re.compile(r'(\d f..t)*[, ]*(\d \w+)*')

    part_text = '2 feet, 4 inches to'
    result = pattern.match(part_text)
    print(result.groups())

    part_text = '1 foot'
    result = pattern.match(part_text)
    print(result.groups())


def test_regex_2():
    pattern = re.compile(
        r'(\d+ f..t)*[, ]*(\d+ \w+)* to (\d+ f..t)*[, ]*(\d+ \w+)*'
    )

    full_text = '2 feet to 2 feet, 14 inches'
    result = pattern.match(full_text)
    print(result.groups())

    full_text = '1 foot 1 inch to 2 feet, 4 inches'
    result = pattern.match(full_text)
    print(result.groups())

    full_text = '1 foot, 11 inches to 2 feet, 1 inch tall at the shoulder'
    result = pattern.match(full_text)
    print(result.groups())


def test_regex_3():
    min_max_pattern = regex.compile(
        r'[a-zA-Z ]*(\d+)\p{N}?[.\d]* to[a-zA-Z ]*(\d+)\p{N}?[.\d]*'
    )

    text = '24 to 26 inches tall at the shoulder'
    result = min_max_pattern.match(text)
    print(result.groups())

    text = 'From 10 to 29 inches tall at the shoulder, \
        as sizes vary from tiny to standard'
    result = min_max_pattern.match(text)
    print(result.groups())

    text = 'From under 10 to over 15 inches tall at the shoulder'
    result = min_max_pattern.match(text)
    print(result.groups())

    text = '9 to12 inches'
    result = min_max_pattern.match(text)
    print(result.groups())

    text = '19½ to 21 inches for males and 18½ to 20 inches for females'
    result = min_max_pattern.match(text)
    print(result.groups())

    text = '23.5 to 28.5 inches'
    result = min_max_pattern.match(text)
    print(result.groups())


def test_regex_4():
    max_only_pattern = re.compile(r'(\d+)')

    text = '24 to 26 inches tall at the shoulder'
    result = max_only_pattern.findall(text)
    print(result)

    text = 'Up to 14 inches tall at the shoulder'
    result = max_only_pattern.findall(text)
    print(result)


def split_text():
    full_text = '24 to 26 inches tall at the shoulder'
    min_height, max_height = full_text.split(' to ')
    print(min_height, max_height)

    # 앞에 feet랑 inch가 둘 다 없는 경우
    print(re.match('f..t', min_height))
    print(re.match('inch', min_height))
    print(max_height.find('inch'))


test_regex_3()
# split_text()
