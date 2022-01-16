import tkinter as tk
from tkinter import ttk

hoofdscherm = tk.Tk()
hoofdscherm.geometry('300x200')
hoofdscherm.resizable(False,False)
hoofdscherm.title('hoofdscherm bram')





# exit button 
exit_knop = tk.Button(
    hoofdscherm,
    bg = "blue",
    fg = "red",
    text = 'exit',
    command=lambda: print("aan")
)

text_knop = tk.Label(hoofdscherm,text="aan")



exit_knop.pack(
    ipadx=50,
    ipady=10,
    expand=True


)

hoofdscherm.mainloop()
