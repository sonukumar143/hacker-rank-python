E = int(input())
English = set(input().split())

F = int(input())
French = set(input().split())

print(len(English ^ French))

