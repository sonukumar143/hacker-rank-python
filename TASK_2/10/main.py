q=input()
p=list(q)
l=[]
k=[]
j=[]
m=[]
m.sort()
for i in p:
    if i.isupper()==True:
        l.append(i)
    elif i.islower()==True:
        k.append(i)
    elif i.isdigit()==True:
        if int(i)%2==0:
            j.append(i)
        else:
            m.append(i)
l.sort()
k.sort()
j.sort()
m.sort()

print(''.join(k+l+m+j))
