#val=input("Enter thing to be searched ")
def search(val):
    f=open("datas.csv")
    lines=f.readlines()
    notset=True
    ar=[]
    for line in lines :
        if notset:
            temp=""
            for i in line :
                if i==  '\t':
                    ar.append(temp)
                    temp=""
                else:
                    if i!='\n':
                        if i!='"':
                            temp=temp+i
                    else:
                        temp=temp+' '
            notset=False
        else :
            temp=""
            index=0
            for i in line :
                if i==  '\t':
                    temp=""
                    index=index+1
                else:
                    temp=temp+i
                if val.lower()==temp.lower() or val.lower() in temp.lower():
                    #print(val,temp,'---->',ar[index],'\n')
                    return ar[index]

#search(val)