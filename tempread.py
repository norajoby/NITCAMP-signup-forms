import dataprocess
f=open("narrow.csv")
lines=f.readlines()
tot=""
_tot=""
allowed="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_"
brar=[]
for line in lines :
        data=""
        '''
        if line[0]!='"':
                data=line.split(",")[0]
        else:
                data=line.split('"')[1]
        '''
        if line[0]!='"':
                data=line[0:-1]
        else:
                data=line[1:-2]
        _data=""
        for i in data:
                if i in allowed:
                        _data+=i
                else:
                        _data+="_"
        _tot+='"'+_data+'" , '
        tot+='"'+data+'" , '
        print(data)
        brar.append(dataprocess.search(data))
print(brar)
print(len(brar),len(tot))
'''
print(tot)
print(" ")
print(_tot)
'''