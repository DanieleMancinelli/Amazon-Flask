'''
Caricare in un dataset un elenco di prodotti con foto e visualizzare le foto dei prodotti in due colonne, l’utente clicca su un prodotto e ottiene le info.
Realizzare tutto in una single page application.
'''
from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

df = pd.read_csv('/workspace/Amazon-Flask/data/prodotti.csv')

@app.route('/')
def home():
    return render_template('amazon.html')

@app.route('/elenco')
def elenco():
    return render_template('amazon.html', prodotti=df['Immagine'].tolist())

@app.route('/prodotto')
def prodotto():
    return 

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)