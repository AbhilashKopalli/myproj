#!/usr/bin/env python

import warnings
warnings.filterwarnings("ignore")
import shutil
import os
import numpy as np
import pandas as pd
import matplotlib
import matplotlib.pyplot as plt
import seaborn as sns
import pickle
import json
from sklearn.manifold import TSNE
from sklearn import preprocessing
from multiprocessing import Process# this is used for multithreading
import multiprocessing
import codecs# this is used for file operations 
import random as r
#from xgboost import XGBClassifier
from sklearn.model_selection import RandomizedSearchCV
from sklearn.tree import DecisionTreeClassifier
from sklearn.calibration import CalibratedClassifierCV
from sklearn.metrics import log_loss
from sklearn.metrics import confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier


#reading the train labels
#os.chdir(r'''C:\Users\Aditya\myproj\ReactNodejsAuth\backend''')
#Y=pd.read_csv("trainLabels.csv")
#print('{:,.0f}'.format( os.path.getsize(r'''C:\Users\Aditya\myproj\ReactNodejsAuth\backend\trainLabels.csv''')))

#total = len(Y)*1.
#ax=sns.countplot(x="Class", data=Y)
#for p in ax.patches:
        #ax.annotate('{:.1f}%'.format(100*p.get_height()/total), (p.get_x()+0.1, p.get_height()+5))

#put 11 ticks (therefore 10 steps), from 0 to the total number of rows in the dataframe
#ax.yaxis.set_ticks(np.linspace(0, total, 11))

#adjust the ticklabel to the desired format, without changing the position of the ticks. 
#ax.set_yticklabels(map('{:.1f}%'.format, 100*ax.yaxis.get_majorticklocs()/total))
#plt.show()

#Reading the folders to read the file size and store in data_size_byte
os.chdir(r'''C:\Users\Aditya\myproj\ReactNodejsAuth\backend''')
files=os.listdir('public')
#filenames=Y['Id'].tolist()
#class_y=Y['Class'].tolist()
#class_bytes=[]
sizebytes=[]
fnames=[]
for file in files:
    # print(os.stat('byteFiles/0A32eTdBKayjCWhZqDOQ.txt'))
    # os.stat_result(st_mode=33206, st_ino=1125899906874507, st_dev=3561571700, st_nlink=1, st_uid=0, st_gid=0, 
    # st_size=3680109, st_atime=1519638522, st_mtime=1519638522, st_ctime=1519638522)
    # read more about os.stat: here https://www.tutorialspoint.com/python/os_stat.htm
    statinfo=os.stat('public/'+file)
    # split the file name at '.' and take the first part of it i.e the file name
    file=file.split('.')[0]
   #if any(file == filename for filename in filenames):
    #    i=filenames.index(file)
      #  class_bytes.append(class_y[i])
        # converting into Mb's
    sizebytes.append(statinfo.st_size/(1024.0*1024.0))
    fnames.append(file)
data_size_byte=pd.DataFrame({'size':sizebytes})
#print (data_size_byte.head())

files=os.listdir("public")
filenames=[]
array=[]
for file in files:
    if(file.endswith(".bytes")):
        file=file.split('.')[0]
        text_file = open('public/'+file+".txt", 'w+')
        with open('public/'+file+".bytes","r") as fp:
            lines=""
            for line in fp:
                a=line.rstrip().split(" ")[1:]
                b=' '.join(a)
                b=b+"\n"
                text_file.write(b)
            fp.close()
            os.remove('public/'+file+".bytes")
        text_file.close()

#os.chdir("D:\\272 project\\")
files = os.listdir('public')
filenames2=[]
feature_matrix = np.zeros((len(files),257),dtype=int)
k=0


#program to convert into bag of words of bytefiles
#this is custom-built bag of words this is unigram bag of words
byte_feature_file=open('result1.csv','w+')
byte_feature_file.write("ID,0,1,2,3,4,5,6,7,8,9,0a,0b,0c,0d,0e,0f,10,11,12,13,14,15,16,17,18,19,1a,1b,1c,1d,1e,1f,20,21,22,23,24,25,26,27,28,29,2a,2b,2c,2d,2e,2f,30,31,32,33,34,35,36,37,38,39,3a,3b,3c,3d,3e,3f,40,41,42,43,44,45,46,47,48,49,4a,4b,4c,4d,4e,4f,50,51,52,53,54,55,56,57,58,59,5a,5b,5c,5d,5e,5f,60,61,62,63,64,65,66,67,68,69,6a,6b,6c,6d,6e,6f,70,71,72,73,74,75,76,77,78,79,7a,7b,7c,7d,7e,7f,80,81,82,83,84,85,86,87,88,89,8a,8b,8c,8d,8e,8f,90,91,92,93,94,95,96,97,98,99,9a,9b,9c,9d,9e,9f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,aa,ab,ac,ad,ae,af,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,ba,bb,bc,bd,be,bf,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,ca,cb,cc,cd,ce,cf,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,da,db,dc,dd,de,df,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,ea,eb,ec,ed,ee,ef,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,fa,fb,fc,fd,fe,ff,??")
byte_feature_file.write("\n")
    
for file in files:
    filenames2.append(file)
    byte_feature_file.write(file+",")
    #print(os.getcwd())
    if(file.endswith("txt")):
        with open('public/'+file,"r") as byte_flie:
            for lines in byte_flie:
                line=lines.rstrip().split( ' ')
                for hex_code in line:
                    if hex_code=='??':
                        feature_matrix[k][256]+=1
                    else:
                        feature_matrix[k][int(hex_code,16)]+=1
        byte_flie.close()
    
    for i in feature_matrix[k]:
        for file in files:
            if i==file:
                #print('true')
                i=file.split('.')[0]
        byte_feature_file.write(str(i)+",")
    byte_feature_file.write("\n")
    
    k += 1

byte_feature_file.close()

#prep data in excel sheet 256 features
byte_features=pd.read_csv("result1.csv",index_col=False, low_memory=False)
# print("first")
# print(byte_features)

#Final prepdata merging the 2 files byte_features, data_size_byte
byte_features['size']=data_size_byte['size'] 

prep_data= byte_features
#prep_data = pd.merge(byte_features, data_size_byte,on='ID')
# print("second")
# print(prep_data)

#storing the data name of the user input
prep_data_name=byte_features['ID'][0]
# print(prep_data_name)

#Taking the single input of prep_data
prep_data=prep_data.loc[prep_data['ID'] == prep_data_name]
# print(prep_data)


# print("third")
#deleting the previous data
result=pickle.load(open('result','rb'))
##df[df.Name != 'Alisa']
result = result[result.ID !=prep_data_name]


#Pushing the data to main data
#result=pickle.load(open('result','rb'))
#print(prep_data)
result=result.append(prep_data)

### Testing if the new file is inserted
Pre_prep_data=result.loc[result['ID'] == prep_data_name]
#print(Pre_prep_data)

#normalization
def normalize(df):
    result1 = df.copy()
    for feature_name in df.columns:
        if (str(feature_name) != str('ID') ):
            max_value = df[feature_name].max()
            min_value = df[feature_name].min()
            result1[feature_name] = (df[feature_name] - min_value) / (max_value - min_value)
            
    return result1
result = normalize(result)

# print("fourth")

#Final input entering the model
Pre_prep_data=result.loc[result['ID'] == prep_data_name]


Final_prep_data=Pre_prep_data.drop(['ID'], axis=1)

#Final prediction for the user input with the trained model
model = pickle.load(open('model.pkl','rb'))

# print("fifth")

#b=X_test.head(1)
predict_y = model.predict(Final_prep_data)

#b=model.predict(X_test)
# print('This file belongs to Malware class :',predict_y[0])
# print('{\"file\" : \"This file belongs to Malware class :\",predict_y[0]')

x = {

    "file": "" + str(predict_y[0])

}

print(json.dumps(x))



filenames=os.listdir('public')
dir_name = r'''C:\Users\Aditya\myproj\ReactNodejsAuth\backend\public'''
for file in filenames:
        if(file.endswith(".txt")):
            os.remove(os.path.join(dir_name, file))
