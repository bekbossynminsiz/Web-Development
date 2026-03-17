# 1
print("Hello, World!")

#2
n = int(input())
if n % 2 == 1:
    print("Weird")
elif 2 <= n <= 5:
    print("Not Weird")
elif 6 <= n <= 20:
    print("Weird")
else:
    print("Not Weird")

# 3
a = int(input())
b = int(input())
print(a + b)
print(a - b)
print(a * b)

# 4 Loops
n = int(input())
for i in range(n):
    print(i ** 2)

#  5 Write Function
def is_leap(year):
    if year % 4 != 0:
        return False
    if year % 100 != 0:
        return True
    if year % 400 == 0:
        return True
    return False

# 6  Print Function
n = int(input())
print("".join(str(i) for i in range(1, n + 1)))

# 7 Runner-Up Score
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    arr = list(set(arr))   
    arr.sort()             
    print(arr[-2])         

# 8 Nested Lists
# 8 - Nested Lists
students = []
for _ in range(int(input())):
    name = input()
    score = float(input())
    students.append([name, score])

second_lowest = sorted(set(score for _, score in students))[1]
print("\n".join(sorted(name for name, score in students if score == second_lowest)))

# 9 - Finding the Percentage
n = int(input())
student_marks = {}
for _ in range(n):
    name, *scores = input().split()
    student_marks[name] = list(map(float, scores))

query_name = input()
print(f"{sum(student_marks[query_name]) / len(student_marks[query_name]):.2f}")

# 10 - Lists
n = int(input())
lst = []

for _ in range(n):
    cmd, *args = input().split()
    if cmd == "insert":
        lst.insert(int(args[0]), int(args[1]))
    elif cmd == "print":
        print(lst)
    elif cmd == "remove":
        lst.remove(int(args[0]))
    elif cmd == "append":
        lst.append(int(args[0]))
    elif cmd == "sort":
        lst.sort()
    elif cmd == "pop":
        lst.pop()
    elif cmd == "reverse":
        lst.reverse()