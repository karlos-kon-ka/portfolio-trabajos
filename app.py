from pytube import YouTube
from moviepy.editor import VideoFileClip
from tkinter import *
from tkinter import messagebox as Messagebox
import os
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

def accion():
    enlace = videos.get()
    video = YouTube(enlace)
    descarga = video.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first()
    descarga.download()

   
    filename = descarga.default_filename

    
    video_clip = VideoFileClip(filename)
    audio_clip = video_clip.audio
    audio_clip.write_audiofile(f"{os.path.splitext(filename)[0]}.mp3")

    
    os.remove(filename)

def popup():
    Messagebox.showinfo("Sobre mi", "Enlace a mi WEB https://www.youtube.com/watch?v=IjbCfUlPlVg&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVM9JzDCFfbenA&index=3")

root = Tk()
root.config(bd=15)
root.title("Convertidor MP3 de Karlos")

imagen = PhotoImage(file="youu.png")
foto = Label(root, image=imagen, bd=0)
foto.grid(row=0, column=0)

menubar = Menu(root)

root.config(menu=menubar)
helpmenu = Menu(menubar, tearoff=0)

menubar.add_cascade(label="para mas información", menu=helpmenu)
helpmenu.add_command(label="información del autor", command=popup)
helpmenu.add_command(label="Salir", command=root.destroy)

instrucciones = Label(root, text="Ingrese la URL")
instrucciones.grid(row=0, column=1)

videos = Entry(root)
videos.grid(row=1, column=1)

boton = Button(root, text="Descargar!!!!", command=accion)
boton.grid(row=2, column=1)

root.mainloop()
