def average(array):
    # Introduction to Sets in Python - Hacker Rank Solution START
    sum_array = sum(set(array))
    len_array = len(set(array))
    output = sum_array/len_array
    return output;
    # Introduction to Sets in Python - Hacke


if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)
