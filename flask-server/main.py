import io
import os
import pandas as pd
import cv2
from google.cloud import vision
from sourceCode import VisionAI
from sourceCode import *
import openai
import json
import firebase_admin
from firebase_admin import credentials,db
import requests

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'client_file_vision_ai_demo.json'

client = vision.ImageAnnotatorClient()
frame_number = 0


# 打开摄像头
cap = cv2.VideoCapture(0)  # 0代表默认的摄像头，如果有多个摄像头，可以尝试使用1、2、3等

if not cap.isOpened():
    print("无法打开摄像头")
    exit()

while True:
    # 逐帧捕获画面
    ret, frame = cap.read()

    if not ret:
        print("无法捕获画面")
        break

    # 显示画面
    cv2.imshow("Camera", frame)
    
    # 按下ESC键退出循环
    press = cv2.waitKey(1)
    if press == 32:
        
        image_filename = f"image_{frame_number:03d}.jpg"
        cv2.imwrite(image_filename, frame)  # 保存图像文件

        frame_number += 1  # 更新图像文件编号

        image_file_path = image_filename
        image = prepare_image_local(image_file_path)
        va = VisionAI(client,image)

        

        texts = va.text_detection()
        second_request = ""

        for indx,text in enumerate(texts):
            #print(text.description)
            second_request += (text.description)
            if indx > 3:
                break
        
        print(second_request)
        
        print('\n')
        if not firebase_admin._apps:
                cred = credentials.Certificate(r"hackathon-nxp-firebase-adminsdk-spneu-7725b20edf.json")
                firebase_admin.initialize_app(cred, {"databaseURL": "https://hackathon-nxp-default-rtdb.firebaseio.com/"})

        

        URL = "https://api.openai.com/v1/chat/completions"
        openai.api_key = 



        headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {openai.api_key}"
        }

        

        payload = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user","content":f"只要回答我一個單字，認為最像是藥品的單字: 益生菌 阿斯匹林 腸胃 橘子皮 鮮奶"},{"role": "system", "content":"阿斯匹林"},{"role": "user","content":f"只要回答我一個單字，認為最像是藥品的單字: 生化 黴菌 Biomycin Ointment"},{"role": "system", "content":"Biomycin Ointment"},{"role": "user", "content": f"很好!! 一樣只要回答我下列其中一個單詞，認為最像是藥品的單字: "+second_request}],
        "temperature" : 0.5,
        "n" : 1,
        "stream": False,
        "presence_penalty":0,
        "frequency_penalty":0,
        }


        response = requests.post(URL, headers=headers, json=payload, stream=False)
        
        
        print(response.json()['choices'][0]['message']['content'])
        db.reference("/").update({"med": response.json()['choices'][0]['message']['content'],"request": second_request})
        ref = db.reference('/')
        print(ref.get())
    elif press == 27:
        break

# 释放摄像头资源
cap.release()

# 关闭所有窗口
cv2.destroyAllWindows()    



