# def reverse(input=''):
#     return input[::-1]

def reverse(input=''):
    new_str = ''
    index = len(input)
    while index:
        index -= 1
        new_str += input[index]
    return new_str
